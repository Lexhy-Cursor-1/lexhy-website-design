import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, Search, TrendingUp } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "How AI is Revolutionizing Legal Document Creation in 2024",
    excerpt: "Discover how artificial intelligence is transforming the way businesses create, review, and manage legal documents. From automated contract generation to real-time compliance checking, AI is making legal services more accessible than ever.",
    author: "Sarah Chen",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "AI & Legal Tech",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    featured: true
  };

  const blogPosts = [
    {
      title: "Essential Legal Documents Every Startup Needs",
      excerpt: "A comprehensive checklist of legal documents every new business should have in place from day one, including incorporation papers, founder agreements, and IP protection.",
      author: "Marcus Rodriguez",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Business Setup",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=250&fit=crop"
    },
    {
      title: "Understanding Employment Law Changes in Australia 2024",
      excerpt: "Stay compliant with the latest employment law updates, including new regulations on workplace flexibility and employee rights.",
      author: "Dr. Priya Patel",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Employment Law",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=250&fit=crop"
    },
    {
      title: "Contract Negotiation: AI vs Human Lawyers",
      excerpt: "When should you use AI for contract review and when do you need human expertise? Learn the pros and cons of each approach.",
      author: "James Thompson",
      date: "March 8, 2024",
      readTime: "5 min read",
      category: "Contract Law",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop"
    },
    {
      title: "Data Privacy Compliance for Small Businesses",
      excerpt: "Navigate the complex world of data privacy laws with practical tips for small businesses to stay compliant and protect customer data.",
      author: "Lisa Wang",
      date: "March 5, 2024",
      readTime: "9 min read",
      category: "Privacy & Compliance",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop"
    },
    {
      title: "The Future of Legal Services: Predictions for 2025",
      excerpt: "Industry experts share their predictions on how legal services will evolve, from AI adoption to new service delivery models.",
      author: "David Chen",
      date: "March 3, 2024",
      readTime: "10 min read",
      category: "Industry Insights",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop"
    },
    {
      title: "IP Protection Strategies for Tech Companies",
      excerpt: "Protect your intellectual property with these essential strategies for tech startups and established companies alike.",
      author: "Sarah Chen",
      date: "February 28, 2024",
      readTime: "8 min read",
      category: "Intellectual Property",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop"
    }
  ];

  const categories = [
    "All Posts",
    "AI & Legal Tech",
    "Business Setup", 
    "Employment Law",
    "Contract Law",
    "Privacy & Compliance",
    "Industry Insights",
    "Intellectual Property"
  ];

  const popularPosts = [
    "5 Legal Mistakes That Kill Startups",
    "Understanding Australian Business Structures",
    "When to Hire Your First Lawyer",
    "Contract Templates vs Custom Agreements"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6">Legal Insights</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Stay Informed with <span className="text-transparent bg-clip-text bg-gradient-to-r from-retro-pink to-retro-purple">AI-Powered</span> Legal Insights
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expert analysis, practical guides, and the latest updates on legal technology, compliance, and business law.
              </p>
              
              {/* Search */}
              <div className="flex max-w-md mx-auto gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search articles..." 
                    className="pl-10"
                  />
                </div>
                <Button>Search</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-2">
                  <div className="p-8 flex flex-col justify-center">
                    <Badge className="w-fit mb-4">{featuredPost.category}</Badge>
                    <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
                    <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    
                    <Button className="w-fit">Read Full Article</Button>
                  </div>
                  <div className="relative h-64 md:h-auto">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-3">
                  {/* Categories Filter */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {categories.map((category, index) => (
                      <Button 
                        key={index} 
                        variant={index === 0 ? "default" : "outline"} 
                        size="sm"
                        className="text-xs"
                      >
                        {category}
                      </Button>
                    ))}
                  </div>

                  {/* Blog Posts Grid */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {blogPosts.map((post, index) => (
                      <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative h-48">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <Badge variant="secondary" className="mb-3">{post.category}</Badge>
                          <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                          <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                          
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          
                          <Button variant="outline" size="sm" className="w-full">
                            Read More
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>

                  {/* Load More */}
                  <div className="text-center mt-12">
                    <Button variant="outline" size="lg">Load More Articles</Button>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                  {/* Popular Posts */}
                  <Card className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Popular Posts</h3>
                    </div>
                    <div className="space-y-3">
                      {popularPosts.map((post, index) => (
                        <div key={index} className="flex items-center gap-3 p-2 rounded hover:bg-muted/50 cursor-pointer">
                          <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-xs font-semibold text-primary">{index + 1}</span>
                          </div>
                          <span className="text-sm">{post}</span>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Newsletter Signup */}
                  <Card className="p-6">
                    <h3 className="font-semibold mb-3">Stay Updated</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get the latest legal insights and AI updates delivered to your inbox.
                    </p>
                    <div className="space-y-3">
                      <Input placeholder="Enter your email" type="email" />
                      <Button className="w-full" size="sm">Subscribe</Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">
                      No spam. Unsubscribe anytime.
                    </p>
                  </Card>

                  {/* Categories */}
                  <Card className="p-6">
                    <h3 className="font-semibold mb-4">Categories</h3>
                    <div className="space-y-2">
                      {categories.slice(1).map((category, index) => (
                        <div key={index} className="flex justify-between items-center py-1">
                          <span className="text-sm cursor-pointer hover:text-primary">{category}</span>
                          <span className="text-xs text-muted-foreground">
                            {Math.floor(Math.random() * 20) + 5}
                          </span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Put Legal Knowledge into Action?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Stop reading about legal solutions and start using them. Get AI-powered legal help for your business today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">Start Free Trial</Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Explore Services
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;