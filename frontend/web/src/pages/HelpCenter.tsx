import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  BookOpen, 
  MessageCircle, 
  Video,
  FileText,
  HelpCircle,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Mail,
  Phone,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const categories = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "Learn the basics of using Anagha Health Connect",
    articles: [
      "How to create your account",
      "Setting up your hospital profile",
      "Adding doctors to your account",
      "Understanding the dashboard"
    ]
  },
  {
    icon: MessageCircle,
    title: "Appointments",
    description: "Manage appointments and bookings",
    articles: [
      "How to book an appointment",
      "Managing appointment schedules",
      "Cancelling or rescheduling appointments",
      "Setting up appointment reminders"
    ]
  },
  {
    icon: FileText,
    title: "Operations",
    description: "Schedule and manage operations",
    articles: [
      "Booking an operation",
      "Operation scheduling best practices",
      "Pre-operative requirements",
      "Operation history and records"
    ]
  },
  {
    icon: HelpCircle,
    title: "Payments",
    description: "Payment processing and billing",
    articles: [
      "How to process payments",
      "Understanding payment plans",
      "Refund policies",
      "Payment gateway setup"
    ]
  },
  {
    icon: Video,
    title: "Account Management",
    description: "Manage your account settings",
    articles: [
      "Updating profile information",
      "Changing password",
      "Managing user permissions",
      "Account security settings"
    ]
  },
  {
    icon: Zap,
    title: "Troubleshooting",
    description: "Common issues and solutions",
    articles: [
      "Login issues",
      "Payment processing errors",
      "Notification problems",
      "Mobile app issues"
    ]
  }
];

const faqItems = [
  {
    question: "How do I register my hospital?",
    answer: "To register your hospital, click on 'Register Hospital' in the navigation menu, fill out the required information including hospital details, contact information, and select a pricing plan. Complete the payment process, and your registration will be sent for admin approval."
  },
  {
    question: "Can I use the platform without registering?",
    answer: "Yes, you can book appointments as a guest user without creating an account. However, creating an account provides access to appointment history, easier booking, and personalized features."
  },
  {
    question: "How do I add doctors to my hospital account?",
    answer: "After your hospital is approved, you can add doctors by going to the Doctor Management section in your dashboard. Click 'Add New Doctor' and fill in the doctor's details including name, specialization, degree, and contact information."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept all major payment methods including credit/debit cards, UPI, net banking, and digital wallets through our secure payment gateway partners like Cashfree."
  },
  {
    question: "How do I cancel an appointment?",
    answer: "You can cancel an appointment from your dashboard by going to 'My Appointments', selecting the appointment you want to cancel, and clicking the 'Cancel' button. Cancellation policies vary by hospital."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we use enterprise-grade security measures including end-to-end encryption, HIPAA compliance, and regular security audits. Your data is encrypted both in transit and at rest."
  },
  {
    question: "How do I contact support?",
    answer: "You can contact our support team via email at support@anaghahealthconnect.com, phone at +91-9039939555, or use the contact form on our Contact page. We're available 24/7 to assist you."
  },
  {
    question: "Can I integrate with my existing systems?",
    answer: "Yes, we offer API integration and webhook support for connecting with your existing EHR systems, practice management software, and other healthcare tools. Contact our integration team for assistance."
  }
];

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.articles.some(article => article.toLowerCase().includes(searchQuery.toLowerCase()))
  );

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
                <HelpCircle className="w-4 h-4" />
                Support
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="text-foreground">How can we</span>
                <br />
                <span className="text-gradient">help you?</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Find answers to common questions, browse documentation, or get in touch with our support team.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto mt-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for help articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-base"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 lg:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card key={index} className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        {category.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.articles.map((article, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{article}</span>
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

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-card/50 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Quick answers to common questions
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <Card key={index} className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-3 text-lg">
                      {item.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="py-16 lg:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 lg:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Still need help?
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Our support team is here to assist you 24/7
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card className="border-border/50 bg-card">
                    <CardContent className="p-6 text-center">
                      <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold text-foreground mb-2">Email Support</h3>
                      <a 
                        href="mailto:support@anaghahealthconnect.com" 
                        className="text-primary hover:underline text-sm"
                      >
                        support@anaghahealthconnect.com
                      </a>
                      <p className="text-xs text-muted-foreground mt-2">Response within 24 hours</p>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50 bg-card">
                    <CardContent className="p-6 text-center">
                      <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold text-foreground mb-2">Phone Support</h3>
                      <a 
                        href="tel:+919039939555" 
                        className="text-primary hover:underline text-sm"
                      >
                        +91-9039939555
                      </a>
                      <p className="text-xs text-muted-foreground mt-2">Mon-Sat, 9 AM - 6 PM IST</p>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50 bg-card">
                    <CardContent className="p-6 text-center">
                      <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold text-foreground mb-2">Live Chat</h3>
                      <p className="text-muted-foreground text-sm">Available 24/7</p>
                      <Button asChild variant="outline" size="sm" className="mt-3">
                        <a href="#">Start Chat</a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center">
                  <Button asChild size="lg" className="text-base">
                    <Link to="/contact">
                      Contact Support
                      <ArrowRight className="ml-2 w-4 h-4" />
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

export default HelpCenter;
