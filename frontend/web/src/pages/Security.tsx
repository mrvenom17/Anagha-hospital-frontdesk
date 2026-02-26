import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Lock, 
  Eye, 
  FileCheck, 
  Server, 
  Key,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  AlertTriangle,
  Database,
  Globe,
  Users,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data is encrypted in transit and at rest using industry-standard AES-256 encryption. Your sensitive information is protected at every stage.",
    details: [
      "TLS 1.3 for data in transit",
      "AES-256 encryption at rest",
      "Encrypted database backups",
      "Secure API communications"
    ]
  },
  {
    icon: Shield,
    title: "HIPAA Compliance",
    description: "Fully compliant with HIPAA regulations and Indian data protection laws. We maintain strict standards for handling protected health information (PHI).",
    details: [
      "HIPAA-compliant infrastructure",
      "Business Associate Agreements (BAAs)",
      "Regular compliance audits",
      "PHI access controls"
    ]
  },
  {
    icon: Users,
    title: "Access Controls",
    description: "Role-based access control (RBAC) ensures that only authorized personnel can access sensitive data. Multi-factor authentication (MFA) available.",
    details: [
      "Role-based permissions",
      "Multi-factor authentication",
      "Session management",
      "Audit logging"
    ]
  },
  {
    icon: Database,
    title: "Secure Infrastructure",
    description: "Enterprise-grade cloud infrastructure with regular security updates, automated backups, and disaster recovery protocols.",
    details: [
      "99.9% uptime SLA",
      "Automated daily backups",
      "Disaster recovery plan",
      "Regular security patches"
    ]
  },
  {
    icon: FileCheck,
    title: "Regular Security Audits",
    description: "We conduct regular security assessments, penetration testing, and vulnerability scans to identify and address potential threats.",
    details: [
      "Quarterly security audits",
      "Penetration testing",
      "Vulnerability assessments",
      "Third-party security reviews"
    ]
  },
  {
    icon: Key,
    title: "Data Privacy",
    description: "We follow strict data privacy principles and give you full control over your data. You can export, delete, or modify your data at any time.",
    details: [
      "Data export capabilities",
      "Right to deletion",
      "Privacy by design",
      "Minimal data collection"
    ]
  }
];

const complianceStandards = [
  {
    name: "HIPAA",
    description: "Health Insurance Portability and Accountability Act compliance",
    icon: Shield
  },
  {
    name: "GDPR",
    description: "General Data Protection Regulation compliance",
    icon: Lock
  },
  {
    name: "ISO 27001",
    description: "Information security management system certification",
    icon: FileCheck
  },
  {
    name: "SOC 2",
    description: "Service Organization Control 2 Type II compliance",
    icon: Server
  }
];

const Security = () => {
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
                Security & Compliance
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="text-foreground">Enterprise-Grade</span>
                <br />
                <span className="text-gradient">Security</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Your data security and patient privacy are our top priorities. We maintain the highest standards 
                of security and compliance in healthcare technology.
              </p>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-16 lg:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {securityFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="border-border/50 hover:border-primary/50 transition-all duration-300">
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
                        {feature.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{detail}</span>
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

        {/* Compliance Standards */}
        <section className="py-16 lg:py-24 bg-card/50 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Compliance & Certifications
              </h2>
              <p className="text-lg text-muted-foreground">
                We adhere to the highest industry standards and regulations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceStandards.map((standard, index) => {
                const Icon = standard.icon;
                return (
                  <Card key={index} className="border-border/50 text-center hover:border-primary/50 transition-all">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2 text-lg">{standard.name}</h3>
                      <p className="text-sm text-muted-foreground">{standard.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Security Best Practices */}
        <section className="py-16 lg:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Security Best Practices
              </h2>
              <p className="text-lg text-muted-foreground">
                How we protect your data and maintain security
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 text-lg">Incident Response</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We have a comprehensive incident response plan in place. In the event of a security incident, 
                        we will notify affected users within 72 hours and take immediate action to mitigate any risks.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Eye className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 text-lg">Transparency</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We believe in transparency about our security practices. Our security policies are publicly 
                        available, and we regularly publish security updates and improvements.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 text-lg">Continuous Monitoring</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Our security team monitors the platform 24/7 for potential threats and vulnerabilities. 
                        We use advanced threat detection systems and automated security scanning.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 lg:p-12 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Have Security Questions?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Our security team is available to answer any questions about our security practices, 
                  compliance certifications, or data protection measures.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-base">
                    <a href="mailto:security@anaghahealthconnect.com">
                      Contact Security Team
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-base">
                    <Link to="/privacy">
                      View Privacy Policy
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

export default Security;
