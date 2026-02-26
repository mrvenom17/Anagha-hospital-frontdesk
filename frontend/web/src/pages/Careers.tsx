import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  Heart, 
  Shield, 
  TrendingUp,
  CheckCircle2,
  Mail,
  ArrowRight,
  Sparkles,
  X
} from "lucide-react";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

const jobOpenings: JobOpening[] = [
  {
    id: "1",
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Remote / Gwalior, India",
    type: "Full-time",
    description: "We're looking for an experienced full-stack developer to join our engineering team. You'll work on building scalable healthcare solutions using modern technologies.",
    requirements: [
      "5+ years of experience in full-stack development",
      "Proficiency in React, TypeScript, and Node.js",
      "Experience with FastAPI or similar Python frameworks",
      "Knowledge of PostgreSQL/Supabase",
      "Experience with payment gateway integrations",
      "Strong problem-solving skills"
    ],
    benefits: [
      "Competitive salary",
      "Remote work options",
      "Health insurance",
      "Professional development budget",
      "Flexible working hours"
    ]
  },
  {
    id: "2",
    title: "Flutter Mobile Developer",
    department: "Engineering",
    location: "Remote / Gwalior, India",
    type: "Full-time",
    description: "Join our mobile team to build and maintain our Flutter-based healthcare mobile application. You'll work on creating seamless user experiences for patients and healthcare providers.",
    requirements: [
      "3+ years of Flutter/Dart development experience",
      "Experience with state management (Provider, Riverpod, etc.)",
      "Knowledge of RESTful API integration",
      "Experience with Android/iOS app deployment",
      "Understanding of healthcare domain is a plus"
    ],
    benefits: [
      "Competitive salary",
      "Remote work options",
      "Health insurance",
      "Latest development tools",
      "Flexible working hours"
    ]
  },
  {
    id: "3",
    title: "Healthcare Product Manager",
    department: "Product",
    location: "Remote / Gwalior, India",
    type: "Full-time",
    description: "We're seeking a Product Manager with healthcare domain expertise to drive product strategy and work closely with engineering and design teams.",
    requirements: [
      "4+ years of product management experience",
      "Healthcare domain knowledge",
      "Strong analytical and communication skills",
      "Experience with Agile methodologies",
      "Technical background preferred"
    ],
    benefits: [
      "Competitive salary",
      "Remote work options",
      "Health insurance",
      "Stock options",
      "Professional development budget"
    ]
  },
  {
    id: "4",
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote / Gwalior, India",
    type: "Full-time",
    description: "Help us create beautiful and intuitive user experiences for healthcare professionals and patients. You'll work on web and mobile interfaces.",
    requirements: [
      "3+ years of UI/UX design experience",
      "Portfolio showcasing healthcare or SaaS products",
      "Proficiency in Figma, Adobe XD, or similar",
      "Understanding of design systems",
      "Experience with responsive design"
    ],
    benefits: [
      "Competitive salary",
      "Remote work options",
      "Health insurance",
      "Design software subscriptions",
      "Creative freedom"
    ]
  },
  {
    id: "5",
    title: "Customer Success Manager",
    department: "Support",
    location: "Remote / Gwalior, India",
    type: "Full-time",
    description: "Join our customer success team to help hospitals and clinics get the most out of our platform. You'll work directly with healthcare providers.",
    requirements: [
      "2+ years of customer success or support experience",
      "Excellent communication skills",
      "Healthcare domain knowledge preferred",
      "Problem-solving mindset",
      "Experience with CRM tools"
    ],
    benefits: [
      "Competitive salary",
      "Remote work options",
      "Health insurance",
      "Performance bonuses",
      "Flexible working hours"
    ]
  },
  {
    id: "6",
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote / Gwalior, India",
    type: "Full-time",
    description: "We need a DevOps engineer to help us scale our infrastructure and ensure high availability of our healthcare platform.",
    requirements: [
      "3+ years of DevOps experience",
      "Experience with cloud platforms (AWS, GCP, Azure)",
      "Knowledge of Docker, Kubernetes",
      "CI/CD pipeline experience",
      "Monitoring and logging tools expertise"
    ],
    benefits: [
      "Competitive salary",
      "Remote work options",
      "Health insurance",
      "Latest tools and infrastructure",
      "Professional development budget"
    ]
  }
];

const benefits = [
  {
    icon: Heart,
    title: "Make a Real Impact",
    description: "Help improve healthcare delivery across India"
  },
  {
    icon: Users,
    title: "Great Team Culture",
    description: "Work with passionate healthcare and tech professionals"
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Opportunities to learn and advance your career"
  },
  {
    icon: Shield,
    title: "Work-Life Balance",
    description: "Flexible hours and remote work options"
  }
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);

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
                <Sparkles className="w-4 h-4" />
                Join Our Team
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="text-foreground">Build the Future of</span>
                <br />
                <span className="text-gradient">Healthcare Technology</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                We're on a mission to revolutionize healthcare delivery in India. 
                Join us in creating solutions that make healthcare accessible, efficient, and patient-centered.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-card relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Why Work With Us
              </h2>
              <p className="text-lg text-muted-foreground">
                We offer more than just a job. We offer a chance to make a difference.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={benefit.title}
                  className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elevated"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4`}>
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 lg:py-24 relative">
          <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Open Positions
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore opportunities to join our growing team
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
              {jobOpenings.map((job) => (
                <Card
                  key={job.id}
                  className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elevated cursor-pointer"
                  onClick={() => setSelectedJob(job)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                        <CardDescription className="flex items-center gap-4 flex-wrap">
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </span>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {job.description}
                    </p>
                    <Button
                      variant="outline"
                      className="w-full group"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedJob(job);
                      }}
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Job Details Modal */}
        {selectedJob && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedJob(null)}
          >
            <Card
              className="w-full max-w-3xl max-h-[90vh] overflow-y-auto border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">{selectedJob.title}</CardTitle>
                    <CardDescription className="flex items-center gap-4 flex-wrap">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {selectedJob.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {selectedJob.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {selectedJob.type}
                      </span>
                    </CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedJob(null)}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Job Description</h3>
                  <p className="text-muted-foreground">{selectedJob.description}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Benefits</h3>
                  <ul className="space-y-2">
                    {selectedJob.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <Button
                    className="w-full group"
                    onClick={() => {
                      window.location.href = `mailto:careers@anaghahealthconnect.com?subject=Application for ${selectedJob.title}&body=Hello,%0D%0A%0D%0AI am interested in applying for the ${selectedJob.title} position.%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0AThank you!`;
                    }}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* CTA Section */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="relative bg-gradient-hero rounded-3xl p-8 lg:p-16 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                  Don't See a Role That Fits?
                </h2>
                <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                  We're always looking for talented individuals who share our passion for healthcare innovation. 
                  Send us your resume and let's start a conversation.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="cta"
                    size="xl"
                    className="group bg-card text-foreground hover:bg-card/90"
                    onClick={() => {
                      window.location.href = "mailto:careers@anaghahealthconnect.com?subject=General Application&body=Hello,%0D%0A%0D%0AI am interested in working with Anagha Health Connect.%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0AThank you!";
                    }}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Your Resume
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-primary-foreground/80 text-sm">
                    <Mail className="w-4 h-4 inline mr-2" />
                    careers@anaghahealthconnect.com
                  </p>
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

export default Careers;
