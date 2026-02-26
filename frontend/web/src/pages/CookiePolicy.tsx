import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Cookie, 
  Settings, 
  Shield,
  Eye,
  BarChart3,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Info,
  AlertCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const cookieTypes = [
  {
    name: "Essential Cookies",
    description: "These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.",
    examples: [
      "Authentication cookies",
      "Session management cookies",
      "Security cookies",
      "Load balancing cookies"
    ],
    canDisable: false
  },
  {
    name: "Analytics Cookies",
    description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
    examples: [
      "Page view tracking",
      "User behavior analysis",
      "Performance monitoring",
      "Error tracking"
    ],
    canDisable: true
  },
  {
    name: "Functional Cookies",
    description: "These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.",
    examples: [
      "Language preferences",
      "Theme settings",
      "User preferences",
      "Feature customization"
    ],
    canDisable: true
  },
  {
    name: "Marketing Cookies",
    description: "These cookies are used to deliver relevant advertisements and track the effectiveness of our marketing campaigns.",
    examples: [
      "Ad targeting",
      "Campaign tracking",
      "Conversion measurement",
      "Retargeting"
    ],
    canDisable: true
  }
];

const cookieDetails = [
  {
    name: "_session",
    purpose: "Maintains user session and authentication state",
    type: "Essential",
    duration: "Session",
    provider: "Anagha Health Connect"
  },
  {
    name: "_csrf",
    purpose: "Protects against cross-site request forgery attacks",
    type: "Essential",
    duration: "Session",
    provider: "Anagha Health Connect"
  },
  {
    name: "_preferences",
    purpose: "Stores user preferences and settings",
    type: "Functional",
    duration: "1 year",
    provider: "Anagha Health Connect"
  },
  {
    name: "_analytics",
    purpose: "Tracks website usage and performance metrics",
    type: "Analytics",
    duration: "2 years",
    provider: "Anagha Health Connect"
  }
];

const CookiePolicy = () => {
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
                <Cookie className="w-4 h-4" />
                Cookie Policy
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="text-foreground">Cookie</span>
                <br />
                <span className="text-gradient">Policy</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Last updated: January 15, 2024
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 lg:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Card className="border-border/50">
              <CardContent className="p-8 lg:p-12 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. What Are Cookies?</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you 
                    visit our website. They are widely used to make websites work more efficiently and provide information 
                    to the website owners.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Cookies allow us to recognize your device and remember information about your visit, such as your 
                    preferred language and other settings. This can make your next visit easier and the site more useful to you.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Cookies</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use cookies for several purposes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>To enable certain functions of the website</li>
                    <li>To provide analytics and understand how visitors use our site</li>
                    <li>To store your preferences and personalize your experience</li>
                    <li>To improve security and prevent fraud</li>
                    <li>To support our marketing efforts</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="py-16 lg:py-24 bg-card/50 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Types of Cookies We Use
              </h2>
              <p className="text-lg text-muted-foreground">
                Understanding the different types of cookies and their purposes
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {cookieTypes.map((type, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/50 transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <CardTitle className="text-xl">{type.name}</CardTitle>
                      {!type.canDisable && (
                        <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                          Required
                        </span>
                      )}
                    </div>
                    <CardDescription className="text-base">
                      {type.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-foreground mb-2 text-sm">Examples:</h4>
                    <ul className="space-y-1">
                      {type.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cookie Details */}
        <section className="py-16 lg:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Specific Cookies We Use
              </h2>
              <p className="text-lg text-muted-foreground">
                Detailed information about the cookies used on our website
              </p>
            </div>

            <Card className="border-border/50">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-card border-b border-border">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">
                          Cookie Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">
                          Purpose
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">
                          Duration
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {cookieDetails.map((cookie, index) => (
                        <tr key={index} className="hover:bg-card/50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-foreground">
                            {cookie.name}
                          </td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">
                            {cookie.purpose}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                            {cookie.type}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                            {cookie.duration}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Managing Cookies */}
        <section className="py-16 lg:py-24 bg-card/50 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Card className="border-border/50">
              <CardContent className="p-8 lg:p-12 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. Managing Your Cookie Preferences</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You have the right to accept or reject cookies. Most web browsers automatically accept cookies, 
                    but you can usually modify your browser settings to decline cookies if you prefer.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    However, please note that disabling certain cookies may impact your experience on our website. 
                    Some features may not function properly if cookies are disabled.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Browser Settings</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    You can control cookies through your browser settings. Here are links to cookie management 
                    for popular browsers:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                    <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                    <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
                    <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Cookie Consent Banner</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    When you first visit our website, you'll see a cookie consent banner. You can choose which 
                    types of cookies to accept. You can also change your preferences at any time by clicking the 
                    "Cookie Settings" link in the footer of our website.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Third-Party Cookies */}
        <section className="py-16 lg:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Card className="border-border/50">
              <CardContent className="p-8 lg:p-12 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Third-Party Cookies</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    In addition to our own cookies, we may also use various third-party cookies to report usage 
                    statistics of the website, deliver advertisements, and so on. These third-party cookies are 
                    subject to the respective third parties' privacy policies.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Third-Party Services</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    We may use the following third-party services that set cookies:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Analytics services (e.g., Google Analytics)</li>
                    <li>Payment processors (e.g., Cashfree)</li>
                    <li>Marketing and advertising platforms</li>
                    <li>Social media platforms (if integrated)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Updates */}
        <section className="py-16 lg:py-24 bg-card/50 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Card className="border-border/50">
              <CardContent className="p-8 lg:p-12 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Updates to This Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Cookie Policy from time to time to reflect changes in our practices or 
                    for other operational, legal, or regulatory reasons. We will notify you of any material 
                    changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                  </p>
                  <div className="bg-card border border-border rounded-lg p-4 space-y-2">
                    <p className="text-foreground font-medium">Anagha Health Connect</p>
                    <p className="text-muted-foreground">
                      Email:{" "}
                      <a href="mailto:privacy@anaghahealthconnect.com" className="text-primary hover:underline">
                        privacy@anaghahealthconnect.com
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      Phone:{" "}
                      <a href="tel:+919039939555" className="text-primary hover:underline">
                        +91-9039939555
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cookie Settings CTA */}
        <section className="py-16 lg:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 lg:p-12 text-center">
                <Settings className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Manage Your Cookie Preferences
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  You can update your cookie preferences at any time. Click the button below to access 
                  your cookie settings.
                </p>
                <Button size="lg" className="text-base">
                  Cookie Settings
                  <Settings className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
