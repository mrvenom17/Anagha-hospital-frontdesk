import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, FileText, Sparkles } from "lucide-react";

const PrivacyPolicy = () => {
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
                <Shield className="w-4 h-4" />
                Legal
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="text-foreground">Privacy</span>
                <br />
                <span className="text-gradient">Policy</span>
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
                {/* Data Controller */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Data Controller</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    <strong>Data Controller:</strong>
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    For the purposes of data protection laws, <strong>Anagha Pharmacare Private Limited</strong> is the data 
                    controller for all personal, medical, and clinical data processed through the <strong>ANAGHA Health Connect™️</strong> platform.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Anagha Pharmacare Private Limited</strong> is the data controller for all data processed through 
                    <strong> ANAGHA Health Connect™️</strong>.
                  </p>
                </div>

                {/* Information Collected */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Information Collected</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    We collect the following types of information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li><strong>User details:</strong> Name, contact information, credentials</li>
                    <li><strong>Patient demographic and clinical data:</strong> Medical records, health information, appointment history</li>
                    <li><strong>Usage logs and technical data:</strong> Device information, IP address, browser type, usage patterns</li>
                    <li><strong>Payment information:</strong> Processed securely through third-party payment processors</li>
                  </ul>
                </div>

                {/* Purpose of Processing */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. Purpose of Processing</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Data is processed for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li><strong>Software functionality:</strong> To provide, maintain, and improve our Service</li>
                    <li><strong>Compliance with legal obligations:</strong> To meet regulatory requirements and legal obligations</li>
                    <li><strong>Customer support and service improvement:</strong> To respond to inquiries, provide support, and enhance user experience</li>
                    <li>To process and manage appointments and operations</li>
                    <li>To send appointment confirmations, reminders, and updates</li>
                    <li>To process payments and manage billing</li>
                  </ul>
                </div>

                {/* Data Security */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Reasonable administrative, technical, and physical safeguards are implemented to protect data.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    We implement appropriate technical and organizational security measures to protect your personal information, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Secure authentication and access controls</li>
                    <li>Regular security assessments and updates</li>
                    <li>HIPAA compliance measures</li>
                    <li>Employee training on data protection</li>
                    <li>Regular backups and disaster recovery procedures</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    However, no method of transmission over the Internet or electronic storage is 100% secure. 
                    While we strive to use commercially acceptable means to protect your information, we cannot 
                    guarantee absolute security.
                  </p>
                </div>

                {/* Data Sharing */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Sharing</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Data is not sold. It may be shared with:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li><strong>Authorized service providers:</strong> Third-party service providers who perform services on our behalf, 
                    including payment processors, cloud hosting providers, email and SMS services</li>
                    <li><strong>Government authorities when legally required:</strong> When required by law, court order, or government regulation</li>
                    <li><strong>Healthcare providers:</strong> To facilitate appointments and operations with licensed healthcare providers</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    These service providers are contractually obligated to protect your information and use it only for 
                    the purposes we specify.
                  </p>
                </div>

                {/* Data Retention */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Retention</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Data is retained as long as required for legal, contractual, or operational purposes. We will 
                    delete or anonymize your personal information when it is no longer needed for these purposes, 
                    subject to applicable legal requirements.
                  </p>
                </div>

                {/* User Rights */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. User Rights</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Users may request access, correction, or deletion of data subject to applicable laws.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    You have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li><strong>Access:</strong> Request access to your personal information</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                    <li><strong>Opt-out:</strong> Opt-out of marketing communications</li>
                    <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where applicable</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    To exercise these rights, please contact us at{" "}
                    <a href="mailto:info@anaghapharmacare.co.in" className="text-primary hover:underline">
                      info@anaghapharmacare.co.in
                    </a>
                  </p>
                </div>

                {/* Cookies */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. Cookies and Tracking Technologies</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    We use cookies and similar tracking technologies to track activity on our Service and store certain 
                    information. You can instruct your browser to refuse all cookies or to indicate when a cookie is 
                    being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    For more information, please see our{" "}
                    <a href="/cookies" className="text-primary hover:underline">Cookie Policy</a>.
                  </p>
                </div>

                {/* Changes to Policy */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">9. Changes to This Privacy Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update our Privacy Policy from time to time to reflect changes in our practices or 
                    for other operational, legal, or regulatory reasons. We will notify you of any material 
                    changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </div>

                {/* Contact */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    If you have any questions about this Privacy Policy, please contact us:
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

export default PrivacyPolicy;
