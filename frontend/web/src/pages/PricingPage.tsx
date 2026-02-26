import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const faqItems = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major payment methods including credit/debit cards, UPI, net banking, and digital wallets through our secure payment gateway partners."
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle, and we'll prorate any differences."
  },
  {
    question: "Is there a setup fee?",
    answer: "The one-time license fee covers setup and activation. There are no hidden setup fees beyond the listed pricing."
  },
  {
    question: "What happens if I exceed my plan limits?",
    answer: "We'll notify you when you're approaching your limits. You can upgrade your plan or purchase additional capacity as needed."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 30-day money-back guarantee for the one-time license fee if you're not satisfied with the service. Monthly fees are non-refundable but can be cancelled anytime."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial."
  }
];

const PricingPage = () => {
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
                Pricing Plans
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="text-foreground">Simple, Transparent</span>
                <br />
                <span className="text-gradient">Pricing</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Choose the perfect plan for your healthcare facility. All plans include core features with no hidden fees.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 lg:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Pricing />
          </div>
        </section>

        {/* Features Comparison */}
        <section className="py-16 lg:py-24 bg-card/50 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                What's Included in Every Plan
              </h2>
              <p className="text-lg text-muted-foreground">
                All plans include these essential features
              </p>
            </div>

            <Card className="border-border/50">
              <CardContent className="p-8 lg:p-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    "Unlimited appointment bookings",
                    "Real-time availability management",
                    "Email & SMS notifications",
                    "Patient management system",
                    "Basic analytics dashboard",
                    "Mobile app access",
                    "Payment gateway integration",
                    "24/7 customer support",
                    "Data encryption & security",
                    "Regular software updates",
                    "Cloud-based infrastructure",
                    "HIPAA compliance"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about our pricing
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <Card key={index} className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2 text-lg">
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

        {/* CTA Section */}
        <section className="py-16 lg:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 lg:p-12 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Need a Custom Plan?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  For large healthcare networks or special requirements, we offer custom enterprise solutions. 
                  Contact us to discuss your needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-base">
                    <Link to="/register-hospital">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-base">
                    <a href="mailto:rahul@anaghahealthconnect.com">
                      Contact Sales
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

export default PricingPage;
