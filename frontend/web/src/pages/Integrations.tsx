import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CreditCard, 
  MessageSquare, 
  Bell, 
  Database,
  Globe,
  Zap,
  CheckCircle2,
  ArrowRight,
  Plug,
  Code,
  Settings,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

const integrations = [
  {
    icon: CreditCard,
    title: "Payment Gateways",
    description: "Seamlessly integrate with leading payment processors to accept payments from patients.",
    providers: [
      {
        name: "Cashfree",
        description: "Full payment gateway integration with UPI, cards, and net banking",
        status: "Available"
      },
      {
        name: "Razorpay",
        description: "Payment processing with subscription management",
        status: "Coming Soon"
      },
      {
        name: "Stripe",
        description: "International payment processing",
        status: "Coming Soon"
      }
    ],
    features: [
      "Secure payment processing",
      "Multiple payment methods",
      "Automated invoice generation",
      "Payment history tracking",
      "Refund management"
    ]
  },
  {
    icon: MessageSquare,
    title: "Communication Services",
    description: "Connect with patients through multiple communication channels.",
    providers: [
      {
        name: "WhatsApp Business API",
        description: "Send appointment reminders and notifications via WhatsApp",
        status: "Available"
      },
      {
        name: "Email (SMTP)",
        description: "Transactional emails and notifications",
        status: "Available"
      },
      {
        name: "SMS Gateway",
        description: "Bulk SMS notifications and reminders",
        status: "Available"
      }
    ],
    features: [
      "Multi-channel notifications",
      "Customizable templates",
      "Automated reminders",
      "Delivery tracking",
      "Two-way communication"
    ]
  },
  {
    icon: Database,
    title: "EHR & Practice Management",
    description: "Integrate with Electronic Health Records and practice management systems.",
    providers: [
      {
        name: "HL7 FHIR",
        description: "Standard healthcare data exchange protocol",
        status: "Available"
      },
      {
        name: "API Integration",
        description: "RESTful API for custom integrations",
        status: "Available"
      },
      {
        name: "Webhook Support",
        description: "Real-time event notifications",
        status: "Available"
      }
    ],
    features: [
      "Standard data formats",
      "Real-time synchronization",
      "Bidirectional data flow",
      "Custom field mapping",
      "Secure data exchange"
    ]
  },
  {
    icon: Globe,
    title: "Third-Party Services",
    description: "Extend functionality with additional services and tools.",
    providers: [
      {
        name: "Google Calendar",
        description: "Sync appointments with Google Calendar",
        status: "Coming Soon"
      },
      {
        name: "Outlook Calendar",
        description: "Microsoft Outlook integration",
        status: "Coming Soon"
      },
      {
        name: "Telemedicine Platforms",
        description: "Video consultation integrations",
        status: "Coming Soon"
      }
    ],
    features: [
      "Calendar synchronization",
      "Video consultations",
      "Document sharing",
      "Prescription management",
      "Lab result integration"
    ]
  }
];

const apiFeatures = [
  {
    icon: Code,
    title: "RESTful API",
    description: "Comprehensive REST API for custom integrations and automation"
  },
  {
    icon: Plug,
    title: "Webhooks",
    description: "Real-time event notifications for appointments, payments, and more"
  },
  {
    icon: Settings,
    title: "Custom Integrations",
    description: "Build custom integrations tailored to your specific needs"
  }
];

const Integrations = () => {
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
                <Plug className="w-4 h-4" />
                Integrations
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="text-foreground">Connect with</span>
                <br />
                <span className="text-gradient">Your Tools</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Seamlessly integrate Anagha Health Connect with your existing systems, payment processors, 
                and communication tools to create a unified healthcare management experience.
              </p>
            </div>
          </div>
        </section>

        {/* Integrations Grid */}
        <section className="py-16 lg:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {integrations.map((integration, index) => {
                const Icon = integration.icon;
                return (
                  <div key={index} className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                          {integration.title}
                        </h2>
                        <p className="text-muted-foreground text-lg">
                          {integration.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {integration.providers.map((provider, pIndex) => (
                        <Card key={pIndex} className="border-border/50 hover:border-primary/50 transition-all">
                          <CardHeader>
                            <div className="flex items-center justify-between mb-2">
                              <CardTitle className="text-lg">{provider.name}</CardTitle>
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                provider.status === "Available" 
                                  ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                                  : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"
                              }`}>
                                {provider.status}
                              </span>
                            </div>
                            <CardDescription>{provider.description}</CardDescription>
                          </CardHeader>
                        </Card>
                      ))}
                    </div>

                    <Card className="border-border/50 bg-card/50">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-foreground mb-4">Key Features:</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                          {integration.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* API Features */}
        <section className="py-16 lg:py-24 bg-card/50 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Developer-Friendly APIs
              </h2>
              <p className="text-lg text-muted-foreground">
                Build custom integrations with our comprehensive API and webhook system
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {apiFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="border-border/50 hover:border-primary/50 transition-all">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Documentation CTA */}
        <section className="py-16 lg:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 lg:p-12 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Ready to Integrate?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Explore our API documentation, set up webhooks, or contact our integration team 
                  for assistance with custom integrations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-base">
                    <a href="mailto:integrations@anaghahealthconnect.com">
                      Contact Integration Team
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-base">
                    <a href="#">
                      View API Docs
                    </a>
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

export default Integrations;
