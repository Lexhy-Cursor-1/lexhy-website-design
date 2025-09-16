import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Zap, Shield, Globe, Home } from "lucide-react";
import { Link } from "react-router-dom";
import huiLingTeoProfile from "@/assets/hui-ling-teo-profile.jpg";
import huiYianProfile from "@/assets/hui-yian-profile-new.jpg";

const AboutUs = () => {
  const stats = [
    { number: "US$2+", label: "Billion Matters Supported" },
    { number: "Top 20", label: "Ranked Globally" },
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
      name: "Hui Ling Teo",
      role: "CEO & Founder",
      background: "Former Big Law partner, AI enthusiast",
      image: huiLingTeoProfile
    },
    {
      name: "Hui Yian",
      role: "COO & Co-Founder of Vibe Draft Classes", 
      background: "Former big 4 auditor, AI enthusiast",
      image: huiYianProfile
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
                <Button size="lg" asChild>
                  <Link to="/">
                    <Home className="mr-2 h-4 w-4" />
                    Home
                  </Link>
                </Button>
                <Button variant="outline" size="lg">Join Our Mission</Button>
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
                    <span className="text-sm text-muted-foreground">Serving businesses across Singapore and expanding regionally</span>
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
            
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
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

        {/* Legal Disclaimer Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6">Important Legal Notice</h2>
              <Card className="p-8">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <strong>LEXHY is not a law firm.</strong> We are a technology platform that provides AI-powered legal document creation and guidance tools. When human legal review is requested by users, LEXHY connects users to licensed legal practitioners who conduct human-in-the-loop reviews to ensure accuracy and compliance. All legal advice and formal legal representations are provided by qualified, licensed attorneys through our network of legal professionals.
                </p>
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
              <Button variant="secondary" size="lg" asChild>
                <a href="https://wa.me/6597265330" target="_blank" rel="noopener noreferrer">
                  Contact Us
                </a>
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