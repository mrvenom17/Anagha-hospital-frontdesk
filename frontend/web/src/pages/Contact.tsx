import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  MessageSquare,
  Clock,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { useState } from "react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Send us an email and we'll respond within 24 hours",
    contact: "rahul@anaghahealthconnect.com",
    link: "mailto:rahul@anaghahealthconnect.com"
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Call us during business hours",
    contact: "+91-9039939555",
    link: "tel:+919039939555"
  },
  {
    icon: MapPin,
    title: "Address",
    description: "Visit our office",
    contact: "Gwalior, Madhya Pradesh, India",
    link: "#"
  }
];

const departments = [
  {
    name: "General Support",
    email: "support@anaghahealthconnect.com",
    description: "General inquiries and technical support"
  },
  {
    name: "Sales & Partnerships",
    email: "sales@anaghahealthconnect.com",
    description: "Pricing, partnerships, and enterprise solutions"
  },
  {
    name: "Technical Support",
    email: "tech@anaghahealthconnect.com",
    description: "Technical issues and API support"
  },
  {
    name: "Security & Compliance",
    email: "security@anaghahealthconnect.com",
    description: "Security concerns and compliance questions"
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    department: "General Support"
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        department: "General Support"
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
                <MessageSquare className="w-4 h-4" />
                Get in Touch
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="text-foreground">Contact</span>
                <br />
                <span className="text-gradient">Us</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Have a question or need assistance? We're here to help. Reach out to us through any of the methods below.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 lg:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card key={index} className="border-border/50 hover:border-primary/50 transition-all duration-300 text-center">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{method.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                      <a 
                        href={method.link}
                        className="text-primary hover:underline text-sm font-medium"
                      >
                        {method.contact}
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form & Departments */}
        <section className="py-16 lg:py-24 bg-card/50 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Form */}
              <div>
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-2xl">Send us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {submitted ? (
                      <div className="text-center py-8">
                        <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                        <p className="text-muted-foreground">
                          We've received your message and will respond within 24 hours.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Email *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                            Phone
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91-XXXXXXXXXX"
                          />
                        </div>

                        <div>
                          <label htmlFor="department" className="block text-sm font-medium text-foreground mb-2">
                            Department
                          </label>
                          <select
                            id="department"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          >
                            {departments.map((dept) => (
                              <option key={dept.name} value={dept.name}>
                                {dept.name}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                            Subject *
                          </label>
                          <Input
                            id="subject"
                            name="subject"
                            type="text"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="What is this regarding?"
                          />
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                            Message *
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us more about your inquiry..."
                            rows={6}
                            className="resize-none"
                          />
                        </div>

                        <Button type="submit" size="lg" className="w-full text-base">
                          Send Message
                          <Send className="ml-2 w-4 h-4" />
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Departments */}
              <div>
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-2xl">Contact by Department</CardTitle>
                    <CardDescription>
                      Reach out to the right team for faster assistance.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {departments.map((dept, index) => (
                        <Card key={index} className="border-border/50 bg-card/50">
                          <CardContent className="p-4">
                            <h3 className="font-semibold text-foreground mb-1">{dept.name}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{dept.description}</p>
                            <a 
                              href={`mailto:${dept.email}`}
                              className="text-primary hover:underline text-sm font-medium"
                            >
                              {dept.email}
                            </a>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Response Time</h4>
                          <p className="text-sm text-muted-foreground">
                            We typically respond to all inquiries within 24 hours during business days. 
                            For urgent matters, please call our support line.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Business Hours */}
        <section className="py-16 lg:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 lg:p-12">
                <div className="text-center mb-8">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    Business Hours
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  <div className="text-center">
                    <h3 className="font-semibold text-foreground mb-2">Support Hours</h3>
                    <p className="text-muted-foreground">Monday - Saturday</p>
                    <p className="text-foreground font-medium">9:00 AM - 6:00 PM IST</p>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-foreground mb-2">Emergency Support</h3>
                    <p className="text-muted-foreground">24/7 Available</p>
                    <p className="text-foreground font-medium">For Critical Issues</p>
                  </div>
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

export default Contact;
