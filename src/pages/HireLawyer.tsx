import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Scale, Briefcase, MessageSquare, Star, MapPin } from "lucide-react";

const HireLawyer = () => {
  const practiceAreas = [
    {
      title: "Corporate Law",
      icon: Briefcase,
      description: "Company structures, mergers, acquisitions, and corporate governance",
      lawyerCount: "150+ lawyers",
      color: "bg-retro-blue/20 text-retro-blue"
    },
    {
      title: "Employment Law", 
      icon: Users,
      description: "Workplace disputes, contracts, unfair dismissal, and HR policies",
      lawyerCount: "120+ lawyers",
      color: "bg-retro-purple/20 text-retro-purple"
    },
    {
      title: "Commercial Law",
      icon: Scale,
      description: "Contract disputes, debt recovery, commercial litigation",
      lawyerCount: "200+ lawyers",
      color: "bg-retro-pink/20 text-retro-pink"
    }
  ];

  const featuredLawyers = [
    {
      name: "Sarah Chen",
      specialty: "Corporate Law",
      experience: "15 years",
      rating: 4.9,
      reviews: 127,
      location: "Sydney, NSW",
      price: "$450/hour",
      avatar: "/placeholder.svg"
    },
    {
      name: "Michael Roberts",
      specialty: "Employment Law", 
      experience: "12 years",
      rating: 4.8,
      reviews: 89,
      location: "Melbourne, VIC",
      price: "$380/hour",
      avatar: "/placeholder.svg"
    },
    {
      name: "Emma Thompson",
      specialty: "Commercial Law",
      experience: "18 years", 
      rating: 4.9,
      reviews: 156,
      location: "Brisbane, QLD",
      price: "$420/hour",
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-retro-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6">AI-Matched Legal Experts</Badge>
            <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6">
              Connect with the right lawyer
              <span className="bg-gradient-retro bg-clip-text text-transparent block mt-2 font-normal">instantly</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our AI matches you with qualified lawyers based on your specific legal needs, location, and budget. Get expert advice when you need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">Find a Lawyer</Button>
              <Button variant="outline" size="lg" className="px-8">Get Legal Advice</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-foreground mb-4">Legal expertise across all areas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our network includes specialists in every area of law, ready to help your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {practiceAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${area.color} flex items-center justify-center mb-4`}>
                    <area.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="flex items-center justify-between">
                    {area.title}
                    <Badge variant="secondary">{area.lawyerCount}</Badge>
                  </CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Find Specialists</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Lawyers */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-foreground mb-4">Meet our top-rated lawyers</h2>
            <p className="text-xl text-muted-foreground">Experienced professionals ready to help your business</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredLawyers.map((lawyer, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={lawyer.avatar} alt={lawyer.name} />
                    <AvatarFallback>{lawyer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <CardTitle>{lawyer.name}</CardTitle>
                  <CardDescription>{lawyer.specialty} • {lawyer.experience}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-retro-orange text-retro-orange" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {lawyer.rating} ({lawyer.reviews} reviews)
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {lawyer.location}
                  </div>
                  
                  <div className="text-lg font-semibold text-foreground">
                    {lawyer.price}
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Button className="w-full">Book Consultation</Button>
                    <Button variant="outline" className="w-full">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">View All Lawyers</Button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-foreground mb-4">How our AI connects you with lawyers</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-retro rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">
                  1
                </div>
                <h3 className="text-xl font-medium text-foreground mb-4">Describe your legal issue</h3>
                <p className="text-muted-foreground">Tell our AI about your legal needs, timeline, and budget preferences</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-retro rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">
                  2
                </div>
                <h3 className="text-xl font-medium text-foreground mb-4">Get matched instantly</h3>
                <p className="text-muted-foreground">Our AI analyzes your needs and matches you with qualified lawyers</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-retro rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">
                  3
                </div>
                <h3 className="text-xl font-medium text-foreground mb-4">Connect & collaborate</h3>
                <p className="text-muted-foreground">Book consultations, communicate securely, and work together seamlessly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-retro rounded-2xl p-12 text-center text-white">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-light mb-4">Need legal help today?</h2>
              <p className="text-xl opacity-90 mb-8">
                Connect with qualified lawyers in minutes, not days
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8">
                  Find a Lawyer Now
                </Button>
                <Button size="lg" variant="outline" className="px-8 bg-white/10 text-white border-white/30 hover:bg-white/20">
                  Get Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HireLawyer;