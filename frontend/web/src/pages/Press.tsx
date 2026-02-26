import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Newspaper,
  Download,
  Mail,
  FileText,
  Calendar,
  Sparkles,
  ArrowRight,
  ExternalLink
} from "lucide-react";

interface PressRelease {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string;
}

interface MediaKit {
  id: string;
  title: string;
  description: string;
  type: string;
  size: string;
}

const pressReleases: PressRelease[] = [
  {
    id: "1",
    title: "Anagha Health Connect Launches Mobile App for Healthcare Booking",
    date: "2024-01-15",
    description: "Anagha Health Connect announces the launch of its new Flutter-based mobile application, making healthcare appointment booking more accessible to patients across India.",
    category: "Product Launch"
  },
  {
    id: "2",
    title: "Company Reaches Milestone of 100+ Healthcare Providers",
    date: "2024-01-01",
    description: "Anagha Health Connect celebrates onboarding over 100 healthcare providers, demonstrating rapid growth in the Indian healthcare technology market.",
    category: "Company News"
  },
  {
    id: "3",
    title: "New Payment Integration with Cashfree Enhances User Experience",
    date: "2023-12-20",
    description: "The platform now supports seamless payment processing through Cashfree, making it easier for patients to complete transactions securely.",
    category: "Product Update"
  },
  {
    id: "4",
    title: "Anagha Health Connect Announces HIPAA Compliance Certification",
    date: "2023-12-10",
    description: "The company has achieved HIPAA compliance, ensuring the highest standards of patient data security and privacy protection.",
    category: "Security"
  }
];

const mediaKits: MediaKit[] = [
  {
    id: "1",
    title: "Company Logo Pack",
    description: "High-resolution logos in various formats (PNG, SVG, PDF)",
    type: "Brand Assets",
    size: "2.5 MB"
  },
  {
    id: "2",
    title: "Product Screenshots",
    description: "Latest screenshots of our web and mobile applications",
    type: "Images",
    size: "5.2 MB"
  },
  {
    id: "3",
    title: "Company Fact Sheet",
    description: "One-page overview of Anagha Health Connect",
    type: "Document",
    size: "150 KB"
  },
  {
    id: "4",
    title: "Executive Team Photos",
    description: "High-resolution photos of our leadership team",
    type: "Images",
    size: "3.8 MB"
  }
];

const Press = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
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
                <Newspaper className="w-4 h-4" />
                Media Center
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="text-foreground">Press &</span>
                <br />
                <span className="text-gradient">Media</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Find the latest news, press releases, and media resources about Anagha Health Connect. 
                For media inquiries, please contact our press team.
              </p>
            </div>
          </div>
        </section>

        {/* Press Contact Section */}
        <section className="py-16 lg:py-24 bg-card relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-border/50 bg-gradient-hero">
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
                      Media Inquiries
                    </h2>
                    <p className="text-primary-foreground/90 mb-6">
                      For press inquiries, interview requests, or media partnerships, 
                      please contact our communications team.
                    </p>
                    <div className="space-y-4">
                      <a
                        href="mailto:press@anaghahealthconnect.com"
                        className="flex items-center gap-3 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                        press@anaghahealthconnect.com
                      </a>
                      <a
                        href="tel:+919039939555"
                        className="flex items-center gap-3 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                        +91-9039939555
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center lg:justify-end">
                    <Button
                      variant="cta"
                      size="lg"
                      className="bg-card text-foreground hover:bg-card/90"
                      onClick={() => {
                        window.location.href = "mailto:press@anaghahealthconnect.com?subject=Media Inquiry";
                      }}
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Contact Press Team
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-16 lg:py-24 relative">
          <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Press Releases
              </h2>
              <p className="text-lg text-muted-foreground">
                Latest announcements and company news
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
              {pressReleases.map((release) => (
                <Card
                  key={release.id}
                  className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elevated"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        {release.category}
                      </span>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(release.date)}
                      </span>
                    </div>
                    <CardTitle className="text-xl mb-3">{release.title}</CardTitle>
                    <CardDescription className="text-base">
                      {release.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="group w-full">
                      Read Full Release
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Media Kit */}
        <section className="py-16 lg:py-24 bg-card relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Media Kit
              </h2>
              <p className="text-lg text-muted-foreground">
                Download brand assets, logos, and media resources
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {mediaKits.map((item) => (
                <Card
                  key={item.id}
                  className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elevated"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription className="text-sm">{item.type}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{item.size}</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full group">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Company Information */}
        <section className="py-16 lg:py-24 relative">
          <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl mb-4">Company Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">About Anagha Health Connect</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Anagha Health Connect is a leading healthcare technology platform that connects 
                      patients with healthcare providers across India. Our mission is to make quality 
                      healthcare accessible, affordable, and convenient for everyone through innovative 
                      digital solutions.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Key Facts</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Founded in 2024</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Headquartered in Gwalior, India</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>100+ healthcare providers on the platform</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>HIPAA compliant platform</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Serving patients across India</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Leadership</h3>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Rahul Sharma</strong> - Founder & CEO
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Contact Information</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Email: press@anaghahealthconnect.com</p>
                      <p>Phone: +91-9039939555</p>
                      <p>Location: Gwalior, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="relative bg-gradient-hero rounded-3xl p-8 lg:p-16 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                  Need More Information?
                </h2>
                <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                  Our press team is available to answer questions, provide additional resources, 
                  or arrange interviews with our leadership team.
                </p>

                <Button
                  variant="cta"
                  size="xl"
                  className="group bg-card text-foreground hover:bg-card/90"
                  onClick={() => {
                    window.location.href = "mailto:press@anaghahealthconnect.com?subject=Press Inquiry";
                  }}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Press Team
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Press;
