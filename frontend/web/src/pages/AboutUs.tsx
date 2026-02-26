import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Users, 
  Target, 
  Award, 
  TrendingUp,
  Shield,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Mail,
  Phone
} from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Heart,
    title: "Patient-First Approach",
    description: "Every decision we make prioritizes patient care and well-being. We believe technology should enhance, not replace, the human touch in healthcare."
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description: "We maintain the highest standards of data security and HIPAA compliance. Your patients' information is safe with us."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with healthcare providers to understand their needs and build solutions that truly make a difference."
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "We continuously innovate to stay ahead of healthcare technology trends and provide cutting-edge solutions."
  }
];

const milestones = [
  {
    year: "2024",
    title: "Company Founded",
    description: "Anagha Health Connect was established with a vision to revolutionize healthcare delivery in India."
  },
  {
    year: "2024",
    title: "First Hospital Partnership",
    description: "We successfully onboarded our first hospital and began transforming their appointment management system."
  },
  {
    year: "2024",
    title: "Mobile App Launch",
    description: "Launched our Flutter mobile application, making healthcare booking accessible to patients nationwide."
  },
  {
    year: "2024",
    title: "100+ Healthcare Providers",
    description: "Reached a milestone of 100+ healthcare providers using our platform to serve thousands of patients."
  }
];

const team = [
  {
    name: "Rahul Sharma",
    role: "Founder & CEO",
    description: "Passionate about healthcare technology and making quality healthcare accessible to everyone."
  },
  {
    name: "Engineering Team",
    role: "Development",
    description: "Talented developers building scalable and secure healthcare solutions."
  },
  {
    name: "Support Team",
    role: "Customer Success",
    description: "Dedicated professionals ensuring our healthcare partners succeed with our platform."
  }
];

const AboutUs = () => {
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
                <Heart className="w-4 h-4" />
                Our Story
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="text-foreground">About</span>
                <br />
                <span className="text-gradient">Anagha Health Connect</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                We're on a mission to transform healthcare delivery in India by connecting patients 
                with healthcare providers through innovative technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 lg:py-24 bg-card relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold">
                  <Target className="w-4 h-4" />
                  Our Mission
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                  Making Healthcare{" "}
                  <span className="text-gradient">Accessible to Everyone</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Anagha Health Connect, we believe that quality healthcare should be accessible, 
                  affordable, and convenient for everyone. Our platform bridges the gap between 
                  patients and healthcare providers, making it easier to book appointments, manage 
                  operations, and access healthcare services.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We work closely with hospitals, clinics, and healthcare professionals to provide 
                  them with the tools they need to serve their patients better while reducing 
                  administrative burden and improving efficiency.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-hero rounded-3xl p-8 lg:p-12 shadow-glow">
                  <div className="flex flex-col items-center text-center space-y-6">
                    <div className="text-8xl lg:text-9xl">🏥</div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground">
                      Healthcare Innovation
                    </h3>
                    <p className="text-primary-foreground/80 text-lg">
                      Connecting care, empowering health
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24 relative">
          <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {values.map((value, index) => (
                <Card
                  key={value.title}
                  className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elevated"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones Section */}
        <section className="py-16 lg:py-24 bg-card relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-muted-foreground">
                Key milestones in our growth story
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex gap-6 lg:gap-8 items-start"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center shadow-soft">
                      <Award className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                      <span className="text-muted-foreground">•</span>
                      <h3 className="text-xl font-bold text-foreground">{milestone.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 lg:py-24 relative">
          <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Our Team
              </h2>
              <p className="text-lg text-muted-foreground">
                Passionate professionals dedicated to transforming healthcare
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <Card
                  key={member.name}
                  className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elevated text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-4 shadow-soft">
                      <Users className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-base font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Legal / About Company Section */}
        <section className="py-16 lg:py-24 bg-card/50 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Card className="border-border/50">
              <CardContent className="p-8 lg:p-12">
                <div className="text-center mb-8">
                  <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Legal / About Company
                  </h2>
                </div>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">ANAGHA Health Connect™️</strong> is a digital healthcare and medical management software
                    owned, developed, and operated by <strong className="text-foreground">Anagha Pharmacare Private Limited</strong>,
                    a company incorporated under the Companies Act, 2013, Government of India.
                  </p>

                  <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                    <div>
                      <p className="font-semibold text-foreground mb-1">Corporate Identity Number (CIN):</p>
                      <p className="font-mono">U46497MP2026PTC081620</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Registered Office:</p>
                      <p>F 1 Madhubani Residency, Bank Colony Alkapuri City Centre Gwalior</p>
                    </div>
                  </div>

                  <p>
                    <strong className="text-foreground">ANAGHA Health Connect</strong> is not a separate legal entity and functions as
                    a proprietary software platform of <strong className="text-foreground">Anagha Pharmacare Private Limited</strong>.
                  </p>

                  <div className="pt-6 border-t border-border">
                    <p className="text-sm italic text-muted-foreground">
                      <strong className="text-foreground">ANAGHA Health Connect™️</strong> – A product of Anagha Pharmacare Private Limited
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                  Join Us on Our Mission
                </h2>
                <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                  Whether you're a healthcare provider looking to improve your practice or 
                  someone passionate about healthcare technology, we'd love to hear from you.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="cta"
                    size="xl"
                    className="group bg-card text-foreground hover:bg-card/90"
                    asChild
                  >
                    <Link to="/careers">
                      View Open Positions
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button
                    variant="cta"
                    size="xl"
                    className="group bg-card/10 text-primary-foreground hover:bg-card/20 border border-white/20"
                    onClick={() => {
                      window.location.href = "mailto:contact@anaghahealthconnect.com?subject=General Inquiry";
                    }}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Us
                  </Button>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20 space-y-4">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/80">
                    <a href="mailto:contact@anaghahealthconnect.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                      <Mail className="w-4 h-4" />
                      contact@anaghahealthconnect.com
                    </a>
                    <a href="tel:+919039939555" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                      <Phone className="w-4 h-4" />
                      +91-9039939555
                    </a>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Gwalior, India
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
