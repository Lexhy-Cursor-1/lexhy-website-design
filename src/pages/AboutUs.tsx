import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Zap, Shield, Globe } from "lucide-react";

const AboutUs = () => {
  const stats = [
    { number: "500,000+", label: "Businesses Served" },
    { number: "$100M+", label: "Legal Fees Saved" },
    { number: "10,000+", label: "5-Star Reviews" },
    { number: "99.9%", label: "AI Accuracy Rate" },
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Innovation First",
      description: "We're pioneering the future of legal services with cutting-edge AI technology that makes legal help accessible to everyone."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Trust & Security",
      description: "Your legal matters are sensitive. We maintain the highest standards of security and confidentiality in everything we do."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer Focused",
      description: "Every feature we build, every AI model we train, is designed with one goal: making your legal journey simpler and more successful."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Speed & Efficiency",
      description: "Time is money in business. Our AI agents work 24/7 to provide instant legal guidance and document creation."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      background: "Former BigLaw partner, AI enthusiast",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder", 
      background: "Ex-Google AI, Legal Tech Pioneer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Priya Patel",
      role: "Head of AI Legal Research",
      background: "PhD Law & Computer Science, Stanford",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "James Thompson",
      role: "Head of Legal Operations",
      background: "20+ years legal practice, compliance expert",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6">About LEXHY</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Revolutionizing Legal Services with <span className="text-transparent bg-clip-text bg-gradient-to-r from-retro-cyan to-retro-purple">AI Intelligence</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                We're on a mission to democratize legal expertise. By combining cutting-edge AI with human legal excellence, we're making professional legal services accessible, affordable, and available 24/7 for businesses of all sizes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Join Our Mission</Button>
                <Button variant="outline" size="lg">Read Our Story</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                  <p className="text-muted-foreground mb-6">
                    Legal services have been gatekept by complexity and cost for too long. We believe every business owner, entrepreneur, and individual deserves access to high-quality legal guidance without the traditional barriers.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Through our AI-powered platform, we're breaking down these barriers, providing instant legal document creation, compliance monitoring, and expert legal advice at a fraction of traditional costs.
                  </p>
                  <div className="flex items-center gap-4">
                    <Globe className="h-6 w-6 text-primary" />
                    <span className="text-sm text-muted-foreground">Serving businesses across Australia and expanding globally</span>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                    alt="Team collaboration" 
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do and every decision we make
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-primary mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="font-semibold mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Meet the visionaries combining legal expertise with AI innovation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.background}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Recognition & Awards</h2>
              <p className="text-muted-foreground">Our commitment to excellence has been recognized by industry leaders</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Legal Tech Innovation Award</h3>
                <p className="text-sm text-muted-foreground">Australian Legal Technology Association 2024</p>
              </Card>
              
              <Card className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Best AI Platform</h3>
                <p className="text-sm text-muted-foreground">Legal Services Innovation Summit 2024</p>
              </Card>
              
              <Card className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Customer Choice Award</h3>
                <p className="text-sm text-muted-foreground">Based on 10,000+ verified reviews</p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience the Future of Legal Services?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join hundreds of thousands of businesses who trust LEXHY for their legal needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">Start Free Trial</Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;