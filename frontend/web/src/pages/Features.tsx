import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Users, 
  Stethoscope, 
  CreditCard, 
  Bell, 
  BarChart3,
  MessageSquare,
  FileText,
  Shield,
  Smartphone,
  Clock,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Zap,
  Database,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Calendar,
    title: "Appointment Management",
    description: "Streamline appointment booking with real-time availability, automated reminders, and easy rescheduling. Support for multiple doctors and time slots.",
    highlights: ["Real-time availability", "Automated reminders", "Multi-doctor support", "Easy rescheduling"]
  },
  {
    icon: Stethoscope,
    title: "Operation Scheduling",
    description: "Comprehensive operation booking system with specialty-based scheduling, pre-operative checklists, and operation history tracking.",
    highlights: ["Specialty-based booking", "Pre-op checklists", "Operation history", "Resource management"]
  },
  {
    icon: Users,
    title: "Multi-User Support",
    description: "Support for patients, doctors, hospitals, and pharma professionals with role-based dashboards and permissions.",
    highlights: ["Role-based access", "Patient portal", "Doctor dashboard", "Hospital management"]
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description: "Seamless payment processing with Cashfree integration, UPI support, and automated invoice generation.",
    highlights: ["Cashfree integration", "UPI payments", "Invoice generation", "Payment history"]
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Automated email and SMS reminders for appointments, operations, and important updates. WhatsApp integration for instant communication.",
    highlights: ["Email reminders", "SMS notifications", "WhatsApp integration", "Customizable templates"]
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Comprehensive analytics dashboard with appointment trends, revenue reports, and performance metrics.",
    highlights: ["Appointment analytics", "Revenue reports", "Performance metrics", "Export capabilities"]
  },
  {
    icon: MessageSquare,
    title: "Communication Tools",
    description: "Built-in messaging and notification system for seamless communication between patients and healthcare providers.",
    highlights: ["In-app messaging", "Notification center", "Email integration", "WhatsApp support"]
  },
  {
    icon: FileText,
    title: "Document Management",
    description: "Secure storage and management of medical records, prescriptions, and patient documents with easy access.",
    highlights: ["Secure storage", "Document upload", "Easy retrieval", "HIPAA compliant"]
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security with HIPAA compliance, data encryption, and regular security audits.",
    highlights: ["HIPAA compliant", "Data encryption", "Regular audits", "Access controls"]
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Native mobile applications for iOS and Android with full feature parity and offline capabilities.",
    highlights: ["iOS & Android", "Offline support", "Push notifications", "Native performance"]
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock access to booking services with automated scheduling and instant confirmations.",
    highlights: ["24/7 booking", "Instant confirmations", "Automated scheduling", "No downtime"]
  },
  {
    icon: Database,
    title: "Cloud Infrastructure",
    description: "Scalable cloud-based infrastructure with automatic backups, disaster recovery, and high availability.",
    highlights: ["Scalable infrastructure", "Auto backups", "Disaster recovery", "99.9% uptime"]
  }
];

const integrations = [
  {
    name: "Payment Gateways",
    description: "Cashfree, Razorpay, and other payment processors",
    icon: CreditCard
  },
  {
    name: "Email Services",
    description: "SMTP integration for transactional emails",
    icon: MessageSquare
  },
  {
    name: "SMS Providers",
    description: "Bulk SMS services for notifications",
    icon: Bell
  },
  {
    name: "WhatsApp Business",
    description: "WhatsApp API for instant messaging",
    icon: MessageSquare
  }
];

const Features = () => {
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
                <Zap className="w-4 h-4" />
                Platform Features
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="text-foreground">Powerful Features for</span>
                <br />
                <span className="text-gradient">Modern Healthcare</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Everything you need to manage appointments, operations, and patient care in one comprehensive platform.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 lg:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {feature.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-16 lg:py-24 bg-card/50 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Seamless Integrations
              </h2>
              <p className="text-lg text-muted-foreground">
                Connect with your favorite tools and services to enhance your workflow
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {integrations.map((integration, index) => {
                const Icon = integration.icon;
                return (
                  <Card key={index} className="border-border/50 text-center hover:border-primary/50 transition-all">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{integration.name}</h3>
                      <p className="text-sm text-muted-foreground">{integration.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 lg:p-12 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Experience the power of Anagha Health Connect. Start your free trial today or contact us for a personalized demo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-base">
                    <Link to="/register-hospital">
                      Start Free Trial
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-base">
                    <Link to="/about">
                      Learn More
                    </Link>
                  </Button>
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

export default Features;
