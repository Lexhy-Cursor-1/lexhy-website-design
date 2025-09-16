import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, Target, Award, CheckCircle, Star } from "lucide-react";
import vibeDraftingWorkshop from "@/assets/vibe-drafting-workshop.jpg";

const MasterVibeDrafting = () => {
  const benefits = [
    {
      icon: Target,
      title: "Master the Method",
      description: "Learn the revolutionary Vibe Drafting approach that transforms how you create contracts and agreements."
    },
    {
      icon: Users,
      title: "Interactive Learning",
      description: "Hands-on workshop with real-world scenarios and immediate feedback from experienced practitioners."
    },
    {
      icon: Clock,
      title: "Time Efficient",
      description: "Comprehensive workshop designed to maximize learning in minimal time with practical takeaways."
    },
    {
      icon: Award,
      title: "Expert Guidance",
      description: "Learn directly from the founders and certified Vibe Drafting practitioners."
    }
  ];

  const testimonials = [
    {
      quote: "The Vibe Drafting method completely changed how I approach contracts. It's intuitive, efficient, and incredibly effective.",
      author: "Sarah Chen",
      role: "Tech Startup Founder"
    },
    {
      quote: "I saved thousands in legal fees and gained confidence in my contract negotiations. This workshop is invaluable.",
      author: "Michael Rodriguez",
      role: "Small Business Owner"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge variant="secondary" className="mb-6">Interactive Workshop</Badge>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-retro-cyan to-retro-purple">Vibe Drafting</span>
                  </h1>
                  <p className="text-xl text-foreground/90 mb-8 max-w-2xl">
                    Transform your approach to contract creation with our revolutionary methodology. Join business owners who've discovered the power of intuitive, effective document drafting.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="https://luma.com/lexhyvibedraftintro1" target="_blank" rel="noopener noreferrer">
                        Join Workshop →
                      </a>
                    </Button>
                    <Button variant="outline" size="lg">
                      Learn More
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src={vibeDraftingWorkshop} 
                    alt="Business owners actively participating in a Vibe Drafting workshop" 
                    className="w-full rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Learn Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What You'll Master</h2>
              <p className="text-foreground/90 max-w-2xl mx-auto">
                Our comprehensive workshop covers everything you need to revolutionize your contract drafting process
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/80">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Workshop Details */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Workshop Details</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Duration</h3>
                    <p className="text-foreground/80">2.5 Hours Interactive Session</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Format</h3>
                    <p className="text-foreground/80">Small Groups, Hands-on Learning</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Certification</h3>
                    <p className="text-foreground/80">Completion Certificate Included</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="p-8">
                <h3 className="text-2xl font-semibold mb-6">What's Included</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground/90">Comprehensive Vibe Drafting methodology</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground/90">Real-world contract drafting exercises</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground/90">Template library and resources</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground/90">Direct access to expert practitioners</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground/90">30-day follow-up support</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground/90">Networking with fellow business owners</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Participants Say</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-foreground/90 mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <footer>
                    <cite className="font-semibold text-primary">{testimonial.author}</cite>
                    <p className="text-sm text-foreground/80">{testimonial.role}</p>
                  </footer>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Master Vibe Drafting?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join the next workshop and transform how you approach contract creation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <a href="https://luma.com/lexhyvibedraftintro1" target="_blank" rel="noopener noreferrer">
                  Join Next Workshop
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Contact Us for Details
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MasterVibeDrafting;