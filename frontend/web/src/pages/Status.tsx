import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CheckCircle2, 
  AlertCircle, 
  XCircle,
  Clock,
  Activity,
  Server,
  Database,
  Globe,
  Sparkles,
  RefreshCw
} from "lucide-react";
import { useState, useEffect } from "react";

interface ServiceStatus {
  name: string;
  status: "operational" | "degraded" | "down";
  description: string;
  icon: typeof CheckCircle2;
  lastChecked: string;
}

const services: ServiceStatus[] = [
  {
    name: "API",
    status: "operational",
    description: "All API endpoints are functioning normally",
    icon: Server,
    lastChecked: "Just now"
  },
  {
    name: "Web Application",
    status: "operational",
    description: "Website is accessible and running smoothly",
    icon: Globe,
    lastChecked: "Just now"
  },
  {
    name: "Database",
    status: "operational",
    description: "Database operations are normal",
    icon: Database,
    lastChecked: "Just now"
  },
  {
    name: "Payment Gateway",
    status: "operational",
    description: "Payment processing is working correctly",
    icon: Activity,
    lastChecked: "Just now"
  },
  {
    name: "Email Service",
    status: "operational",
    description: "Email notifications are being sent successfully",
    icon: CheckCircle2,
    lastChecked: "Just now"
  },
  {
    name: "SMS Service",
    status: "operational",
    description: "SMS notifications are working normally",
    icon: CheckCircle2,
    lastChecked: "Just now"
  }
];

const incidents = [
  {
    id: 1,
    title: "Scheduled Maintenance",
    status: "resolved",
    date: "2024-01-10",
    description: "Routine database maintenance completed successfully. All services are now operational.",
    impact: "minor"
  },
  {
    id: 2,
    title: "API Performance Improvement",
    status: "resolved",
    date: "2024-01-05",
    description: "Implemented performance optimizations for appointment booking endpoints.",
    impact: "none"
  }
];

const Status = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshStatus = () => {
    setIsRefreshing(true);
    // Simulate API call
    setTimeout(() => {
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 1000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return "text-green-600 dark:text-green-400";
      case "degraded":
        return "text-yellow-600 dark:text-yellow-400";
      case "down":
        return "text-red-600 dark:text-red-400";
      default:
        return "text-muted-foreground";
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case "operational":
        return "bg-green-100 dark:bg-green-900/30";
      case "degraded":
        return "bg-yellow-100 dark:bg-yellow-900/30";
      case "down":
        return "bg-red-100 dark:bg-red-900/30";
      default:
        return "bg-muted";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return CheckCircle2;
      case "degraded":
        return AlertCircle;
      case "down":
        return XCircle;
      default:
        return Clock;
    }
  };

  const overallStatus = services.every(s => s.status === "operational") 
    ? "operational" 
    : services.some(s => s.status === "down")
    ? "down"
    : "degraded";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-subtle" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-3xl mx-auto space-y-8 animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                <Activity className="w-4 h-4" />
                System Status
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="text-foreground">Service</span>
                <br />
                <span className="text-gradient">Status</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Real-time status of all Anagha Health Connect services and systems.
              </p>
            </div>
          </div>
        </section>

        {/* Overall Status */}
        <section className="py-16 lg:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className={`border-border/50 ${getStatusBg(overallStatus)}`}>
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    {(() => {
                      const StatusIcon = getStatusIcon(overallStatus);
                      return <StatusIcon className={`w-12 h-12 ${getStatusColor(overallStatus)}`} />;
                    })()}
                    <div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                        All Systems {overallStatus === "operational" ? "Operational" : overallStatus === "degraded" ? "Degraded" : "Down"}
                      </h2>
                      <p className="text-muted-foreground">
                        Last updated: {lastUpdated.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={refreshStatus}
                    disabled={isRefreshing}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:bg-accent transition-colors disabled:opacity-50"
                  >
                    <RefreshCw className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`} />
                    <span className="text-sm font-medium">Refresh</span>
                  </button>
                </div>
                <p className="text-muted-foreground">
                  {overallStatus === "operational" 
                    ? "All services are running smoothly. No issues detected."
                    : overallStatus === "degraded"
                    ? "Some services are experiencing minor issues. We're working on it."
                    : "Some services are currently down. We're actively working to resolve the issue."}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Service Status */}
        <section className="py-16 lg:py-24 bg-card/50 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Service Status
              </h2>
              <p className="text-lg text-muted-foreground">
                Current status of individual services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const StatusIcon = getStatusIcon(service.status);
                const Icon = service.icon;
                return (
                  <Card key={index} className="border-border/50 hover:border-primary/50 transition-all">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <CardTitle className="text-lg">{service.name}</CardTitle>
                        </div>
                        <StatusIcon className={`w-5 h-5 ${getStatusColor(service.status)}`} />
                      </div>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Last checked:</span>
                        <span className="text-foreground font-medium">{service.lastChecked}</span>
                      </div>
                      <div className="mt-2">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${
                          service.status === "operational" 
                            ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                            : service.status === "degraded"
                            ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"
                            : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                        }`}>
                          {service.status === "operational" ? "Operational" : service.status === "degraded" ? "Degraded" : "Down"}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Incident History */}
        <section className="py-16 lg:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Incident History
              </h2>
              <p className="text-lg text-muted-foreground">
                Recent incidents and maintenance activities
              </p>
            </div>

            <div className="space-y-4">
              {incidents.map((incident) => (
                <Card key={incident.id} className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="font-semibold text-foreground text-lg mb-1">
                          {incident.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {new Date(incident.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                          })}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          incident.status === "resolved"
                            ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                            : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"
                        }`}>
                          {incident.status === "resolved" ? "Resolved" : "Investigating"}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          incident.impact === "none"
                            ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                            : incident.impact === "minor"
                            ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"
                            : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                        }`}>
                          {incident.impact === "none" ? "No Impact" : incident.impact === "minor" ? "Minor Impact" : "Major Impact"}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {incident.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Status Page Info */}
        <section className="py-16 lg:py-24 bg-card/50 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-border/50">
              <CardContent className="p-8 lg:p-12 text-center">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Stay Updated
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Subscribe to status updates to receive notifications about service incidents and maintenance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                    Subscribe
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Status;
