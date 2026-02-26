import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, AlertCircle, Sparkles, Scale } from "lucide-react";

const TermsOfService = () => {
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
                <Scale className="w-4 h-4" />
                Legal
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="text-foreground">Terms &</span>
                <br />
                <span className="text-gradient">Conditions</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Last updated: January 15, 2024
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 lg:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Card className="border-border/50">
              <CardContent className="p-8 lg:p-12 space-y-8">
                {/* Introduction */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    These Terms & Conditions ("Terms") govern the access and use of <strong>ANAGHA Health Connect™️</strong>, 
                    a digital healthcare and medical management software platform ("Software"), owned and operated by 
                    <strong> Anagha Pharmacare Private Limited</strong>, a company incorporated under the Companies Act, 2013, 
                    Government of India ("Company", "We", "Us", "Our").
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing, registering, or using the Software, you agree to be legally bound by these Terms. 
                    If you do not agree to these Terms, please do not use our Service.
                  </p>
                </div>

                {/* Nature of Software */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Nature of Software</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    <strong>ANAGHA Health Connect™️</strong> is a proprietary healthcare software designed for clinics, hospitals, 
                    diagnostic centers, pharmacies, and healthcare professionals for digital practice management, patient records, 
                    and allied services.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The Software is not a medical device and does not replace professional medical judgment.
                  </p>
                </div>

                {/* Eligibility */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. Eligibility</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Use of the Software is restricted to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Registered medical practitioners</li>
                    <li>Licensed healthcare establishments</li>
                    <li>Authorized healthcare staff</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Users must comply with applicable Indian laws, including clinical establishment and data protection laws.
                  </p>
                </div>

                {/* License Grant */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. License Grant</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The Company grants a non-exclusive, non-transferable, revocable, limited license to use the Software 
                    during the subscription or license term, strictly for internal professional use.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    <strong>No ownership rights are transferred.</strong>
                  </p>
                </div>

                {/* Prohibited Activities */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Prohibited Activities</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Users shall not:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Copy, modify, reverse engineer, or resell the Software</li>
                    <li>Use the Software for unlawful purposes</li>
                    <li>Attempt unauthorized access to systems or data</li>
                    <li>Share login credentials</li>
                  </ul>
                </div>

                {/* Fees & Payments */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Fees & Payments</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    License and maintenance fees are payable as agreed in invoices or agreements. Non-payment may result 
                    in suspension or termination.
                  </p>
                </div>

                {/* Suspension & Termination */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. Suspension & Termination</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The Company may suspend or terminate access for breach of these Terms, non-payment, or legal requirements.
                  </p>
                </div>

                {/* Limitation of Liability */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    The Software is provided on an "AS IS" basis. The Company shall not be liable for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Medical outcomes or clinical decisions</li>
                    <li>Data loss due to external factors</li>
                    <li>Indirect or consequential damages</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Maximum liability shall not exceed fees paid in the preceding 12 months.
                  </p>
                </div>

                {/* Intellectual Property */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">9. Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    <strong>Ownership:</strong>
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    <strong>ANAGHA Health Connect™️</strong>, including its software, source code, branding, databases, and 
                    intellectual property, is the exclusive property of <strong>Anagha Pharmacare Private Limited</strong>.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>ANAGHA Health Connect™️</strong>, including software, code, UI, logos, and documentation, is the 
                    exclusive intellectual property of Anagha Pharmacare Private Limited.
                  </p>
                </div>

                {/* Governing Law */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">10. Governing Law & Jurisdiction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms are governed by Indian law. Courts at Gwalior, Madhya Pradesh shall have exclusive jurisdiction.
                  </p>
                </div>

                {/* Contact */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-card border border-border rounded-lg p-4 space-y-2">
                    <p className="text-foreground font-medium">Anagha Pharmacare Private Limited</p>
                    <p className="text-muted-foreground">
                      Email:{" "}
                      <a href="mailto:info@anaghapharmacare.co.in" className="text-primary hover:underline">
                        info@anaghapharmacare.co.in
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      Phone:{" "}
                      <a href="tel:+919039939555" className="text-primary hover:underline">
                        +91-9039939555
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      Registered Office: F 1 Madhubani Residency, Bank Colony Alkapuri City Centre Gwalior
                    </p>
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

export default TermsOfService;
