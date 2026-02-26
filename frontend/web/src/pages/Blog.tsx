import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  User, 
  ArrowRight,
  Clock,
  Tag,
  Search,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Telemedicine in India",
    excerpt: "Exploring how telemedicine is revolutionizing healthcare delivery in India and what it means for patients and providers.",
    author: "Rahul Sharma",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Technology",
    image: "📱",
    featured: true
  },
  {
    id: "2",
    title: "5 Ways to Improve Patient Appointment Management",
    excerpt: "Learn how healthcare providers can streamline their appointment booking process and reduce no-shows with modern technology.",
    author: "Anagha Team",
    date: "2024-01-10",
    readTime: "4 min read",
    category: "Healthcare",
    image: "📅"
  },
  {
    id: "3",
    title: "HIPAA Compliance: A Complete Guide for Healthcare Providers",
    excerpt: "Understanding HIPAA compliance requirements and how to ensure your practice meets all necessary standards for patient data protection.",
    author: "Anagha Team",
    date: "2024-01-05",
    readTime: "7 min read",
    category: "Compliance",
    image: "🔒"
  },
  {
    id: "4",
    title: "Mobile Health Apps: Transforming Patient Engagement",
    excerpt: "Discover how mobile health applications are empowering patients to take control of their healthcare journey.",
    author: "Rahul Sharma",
    date: "2023-12-28",
    readTime: "6 min read",
    category: "Technology",
    image: "📲"
  },
  {
    id: "5",
    title: "Reducing Healthcare Costs Through Digital Solutions",
    excerpt: "How digital healthcare platforms are helping reduce operational costs while improving patient care quality.",
    author: "Anagha Team",
    date: "2023-12-20",
    readTime: "5 min read",
    category: "Healthcare",
    image: "💰"
  },
  {
    id: "6",
    title: "Best Practices for Healthcare Data Security",
    excerpt: "Essential security practices every healthcare organization should implement to protect sensitive patient information.",
    author: "Anagha Team",
    date: "2023-12-15",
    readTime: "6 min read",
    category: "Security",
    image: "🛡️"
  }
];

const categories = ["All", "Technology", "Healthcare", "Compliance", "Security"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

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
                <Sparkles className="w-4 h-4" />
                Healthcare Insights
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="text-foreground">Our</span>
                <br />
                <span className="text-gradient">Blog</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Stay updated with the latest trends, insights, and best practices in healthcare technology 
                and digital health solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-card border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && selectedCategory === "All" && !searchQuery && (
          <section className="py-16 lg:py-24 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground">Featured Article</h2>
              </div>
              <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elevated overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4 flex-wrap">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                          {featuredPost.category}
                        </span>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                      <CardTitle className="text-3xl lg:text-4xl mb-4">
                        {featuredPost.title}
                      </CardTitle>
                      <CardDescription className="text-base lg:text-lg">
                        {featuredPost.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center">
                            <User className="w-5 h-5 text-primary-foreground" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{featuredPost.author}</p>
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {formatDate(featuredPost.date)}
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" className="group">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                  <div className="bg-gradient-hero flex items-center justify-center p-12 lg:p-16">
                    <div className="text-9xl">{featuredPost.image}</div>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16 lg:py-24 relative">
          <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                {searchQuery ? `Search Results (${regularPosts.length})` : "Latest Articles"}
              </h2>
            </div>

            {regularPosts.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {regularPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elevated flex flex-col"
                  >
                    <div className="bg-gradient-hero p-8 flex items-center justify-center">
                      <div className="text-6xl">{post.image}</div>
                    </div>
                    <CardHeader className="flex-1">
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <CardTitle className="text-xl mb-2 line-clamp-2">{post.title}</CardTitle>
                      <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-hero flex items-center justify-center">
                            <User className="w-4 h-4 text-primary-foreground" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground">{post.author}</p>
                            <p className="text-xs text-muted-foreground flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {formatDate(post.date)}
                            </p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="group">
                          Read
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 lg:py-24 bg-card relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-border/50 bg-gradient-hero">
              <CardContent className="p-8 lg:p-12 text-center">
                <h2 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
                  Stay Updated
                </h2>
                <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                  Subscribe to our newsletter to receive the latest healthcare technology insights 
                  and updates directly in your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg border border-white/20 bg-white/10 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <Button
                    variant="cta"
                    className="bg-card text-foreground hover:bg-card/90"
                  >
                    Subscribe
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

export default Blog;
