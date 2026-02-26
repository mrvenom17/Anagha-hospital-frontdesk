import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  BookOpen, 
  Key,
  Globe,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Copy,
  ExternalLink
} from "lucide-react";
import { useState } from "react";

const endpoints = [
  {
    method: "POST",
    path: "/api/users/register",
    description: "Register a new user (patient, doctor, or pharma professional)",
    auth: "Not required",
    example: `{
  "name": "John Doe",
  "mobile": "1234567890",
  "email": "john@example.com",
  "password": "SecurePassword123!",
  "user_type": "patient"
}`
  },
  {
    method: "POST",
    path: "/api/hospitals/register",
    description: "Register a new hospital",
    auth: "Not required",
    example: `{
  "name": "City Hospital",
  "email": "contact@cityhospital.com",
  "mobile": "9876543210",
  "address_line1": "123 Main Street",
  "city": "Mumbai",
  "state": "Maharashtra",
  "pincode": "400001"
}`
  },
  {
    method: "GET",
    path: "/api/appointments/my-appointments",
    description: "Get user's appointments",
    auth: "Required",
    example: `GET /api/appointments/my-appointments
Headers:
  Authorization: Bearer <token>`
  },
  {
    method: "POST",
    path: "/api/appointments/book",
    description: "Book a new appointment",
    auth: "Required",
    example: `{
  "hospital_id": 1,
  "doctor_id": 5,
  "date": "2024-02-15",
  "time_slot": "10:00",
  "reason": "General checkup"
}`
  },
  {
    method: "POST",
    path: "/api/payments/create-order",
    description: "Create a payment order",
    auth: "Required",
    example: `{
  "appointment_id": 123,
  "amount": 500.00,
  "currency": "INR"
}`
  },
  {
    method: "GET",
    path: "/api/users/doctors/public",
    description: "Get list of all doctors (public)",
    auth: "Not required",
    example: `GET /api/users/doctors/public?q=cardiologist`
  }
];

const codeSnippets = {
  javascript: `// Example: Booking an appointment
const response = await fetch('https://api.anaghahealthconnect.com/api/appointments/book', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
  },
  body: JSON.stringify({
    hospital_id: 1,
    doctor_id: 5,
    date: '2024-02-15',
    time_slot: '10:00',
    reason: 'General checkup'
  })
});

const data = await response.json();
console.log(data);`,
  python: `# Example: Booking an appointment
import requests

url = 'https://api.anaghahealthconnect.com/api/appointments/book'
headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
}
data = {
    'hospital_id': 1,
    'doctor_id': 5,
    'date': '2024-02-15',
    'time_slot': '10:00',
    'reason': 'General checkup'
}

response = requests.post(url, json=data, headers=headers)
print(response.json())`,
  curl: `# Example: Booking an appointment
curl -X POST https://api.anaghahealthconnect.com/api/appointments/book \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -d '{
    "hospital_id": 1,
    "doctor_id": 5,
    "date": "2024-02-15",
    "time_slot": "10:00",
    "reason": "General checkup"
  }'`
};

const ApiDocs = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<keyof typeof codeSnippets>("javascript");
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
                <Code className="w-4 h-4" />
                Developer Resources
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="text-foreground">API</span>
                <br />
                <span className="text-gradient">Documentation</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Integrate Anagha Health Connect with your applications using our RESTful API. 
                Build custom solutions and automate workflows.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-16 lg:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      Quick Start
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Get started with our API in minutes. All you need is an API key and you're ready to go.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">1. Get Your API Key</h3>
                          <p className="text-sm text-muted-foreground">
                            Sign up for an account and generate your API key from the dashboard.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">2. Make Your First Request</h3>
                          <p className="text-sm text-muted-foreground">
                            Use the examples below to make your first API call.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">3. Build Your Integration</h3>
                          <p className="text-sm text-muted-foreground">
                            Explore our endpoints and build custom solutions for your needs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Base URL</h3>
                    <Card className="border-border/50 bg-card">
                      <CardContent className="p-4">
                        <code className="text-sm text-foreground">
                          https://api.anaghahealthconnect.com
                        </code>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="ml-2"
                          onClick={() => copyToClipboard("https://api.anaghahealthconnect.com")}
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </CardContent>
                    </Card>
                    <h3 className="font-semibold text-foreground mb-4 mt-6">Authentication</h3>
                    <Card className="border-border/50 bg-card">
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground mb-2">
                          Include your API key in the Authorization header:
                        </p>
                        <code className="text-xs text-foreground block bg-muted p-2 rounded">
                          Authorization: Bearer YOUR_API_KEY
                        </code>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Code Examples */}
        <section className="py-16 lg:py-24 bg-card/50 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Code Examples
              </h2>
              <p className="text-lg text-muted-foreground">
                Get started quickly with code examples in your preferred language
              </p>
            </div>

            <Card className="border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Example: Booking an Appointment</CardTitle>
                  <div className="flex gap-2">
                    {Object.keys(codeSnippets).map((lang) => (
                      <Button
                        key={lang}
                        variant={selectedLanguage === lang ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedLanguage(lang as keyof typeof codeSnippets)}
                      >
                        {lang === "javascript" ? "JavaScript" : lang === "python" ? "Python" : "cURL"}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm text-foreground">
                      {codeSnippets[selectedLanguage]}
                    </code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(codeSnippets[selectedLanguage])}
                  >
                    {copied ? (
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-16 lg:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                API Endpoints
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore our RESTful API endpoints
              </p>
            </div>

            <div className="space-y-4">
              {endpoints.map((endpoint, index) => (
                <Card key={index} className="border-border/50">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-3 py-1 rounded text-sm font-medium ${
                            endpoint.method === "GET" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" :
                            endpoint.method === "POST" ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" :
                            "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"
                          }`}>
                            {endpoint.method}
                          </span>
                          <code className="text-sm font-mono text-foreground">{endpoint.path}</code>
                        </div>
                        <p className="text-muted-foreground text-sm">{endpoint.description}</p>
                        <p className="text-xs text-muted-foreground mt-2">
                          Authentication: <span className="font-medium">{endpoint.auth}</span>
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <details className="cursor-pointer">
                      <summary className="text-sm font-medium text-primary hover:underline">
                        View Example Request
                      </summary>
                      <pre className="mt-4 bg-muted p-4 rounded-lg overflow-x-auto">
                        <code className="text-xs text-foreground">{endpoint.example}</code>
                      </pre>
                    </details>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 lg:py-24 bg-card/50 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Additional Resources
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-border/50 hover:border-primary/50 transition-all">
                <CardContent className="p-6 text-center">
                  <BookOpen className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Full Documentation</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Complete API reference with detailed descriptions
                  </p>
                  <Button variant="outline" size="sm">
                    View Docs
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:border-primary/50 transition-all">
                <CardContent className="p-6 text-center">
                  <Key className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">API Keys</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Manage your API keys and access tokens
                  </p>
                  <Button variant="outline" size="sm">
                    Get API Key
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:border-primary/50 transition-all">
                <CardContent className="p-6 text-center">
                  <Zap className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Webhooks</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Set up webhooks for real-time event notifications
                  </p>
                  <Button variant="outline" size="sm">
                    Learn More
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
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
                  Need Help with Integration?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Our developer support team is here to help you integrate Anagha Health Connect 
                  into your application. Contact us for assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-base">
                    <a href="mailto:tech@anaghahealthconnect.com">
                      Contact Developer Support
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-base">
                    <a href="/integrations">
                      View Integrations
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

export default ApiDocs;
