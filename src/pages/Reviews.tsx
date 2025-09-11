import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, ThumbsUp, Users, Award } from "lucide-react";

const Reviews = () => {
  const stats = [
    { number: "4.9", label: "Average Rating", icon: <Star className="h-6 w-6 fill-current" /> },
    { number: "12,500+", label: "Total Reviews", icon: <Users className="h-6 w-6" /> },
    { number: "98%", label: "Would Recommend", icon: <ThumbsUp className="h-6 w-6" /> },
    { number: "500K+", label: "Happy Customers", icon: <Award className="h-6 w-6" /> },
  ];

  const reviews = [
    {
      name: "Sarah Mitchell",
      role: "Startup Founder",
      company: "TechFlow Solutions",
      rating: 5,
      date: "January 2024",
      title: "AI legal support that actually works",
      content: "I was skeptical about AI legal advice, but LEXHY's platform is incredible. The AI gives instant, accurate answers for basic questions, and when I need complex contract review, their lawyers are top-notch. Saved me thousands in legal fees already.",
      helpful: 24,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez",
      role: "Restaurant Owner",
      company: "Bella Vista Restaurants",
      rating: 5,
      date: "December 2023",
      title: "Perfect for small business compliance",
      content: "The compliance monitoring is a game changer. I get alerts about new regulations before they affect my restaurants. The AI helps with employment contracts and the lawyers review my lease agreements. Worth every penny.",
      helpful: 18,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Dr. Priya Patel",
      role: "Medical Practice Owner",
      company: "Patel Family Medicine",
      rating: 5,
      date: "January 2024",
      title: "Comprehensive legal support",
      content: "Running a medical practice has complex legal requirements. LEXHY's AI handles patient privacy compliance, and their lawyers helped restructure my practice. The 24/7 availability means I can get help anytime.",
      helpful: 31,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "James Thompson",
      role: "E-commerce Director",
      company: "Urban Gear Co",
      rating: 5,
      date: "November 2023",
      title: "Scales with your business",
      content: "Started with basic AI support when we were small. As we grew, upgraded to get lawyer consultations. The platform grew with us perfectly. Now managing international contracts with their enterprise features.",
      helpful: 27,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Lisa Wang",
      role: "Franchise Owner",
      company: "Quick Bite Franchises",
      rating: 5,
      date: "December 2023",
      title: "Amazing customer service",
      content: "The AI is incredibly smart, but when I needed human help, their lawyers were patient and thorough. They helped me understand franchise agreements and saved me from a bad deal. Customer service that actually cares.",
      helpful: 22,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "David Chen",
      role: "Construction Company Owner",
      company: "Chen & Associates Construction",
      rating: 5,
      date: "January 2024",
      title: "Invaluable for contract management",
      content: "Construction contracts are complex. The AI catches issues I might miss, and lawyers review everything important. The version control keeps all our contract changes organized. Essential tool for our business.",
      helpful: 19,
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=60&h=60&fit=crop&crop=face"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6">Customer Reviews</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-retro-pink to-retro-purple">500,000+</span> Businesses
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Don't just take our word for it. See what real business owners say about our AI-powered legal services.
              </p>
              <div className="flex justify-center items-center gap-2 mb-4">
                {renderStars(5)}
                <span className="ml-2 text-lg font-semibold">4.9 out of 5</span>
              </div>
              <p className="text-muted-foreground">Based on 12,500+ verified reviews</p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-primary mb-4 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Real reviews from real business owners who use LEXHY for their legal needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <img 
                      src={review.image} 
                      alt={review.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div className="flex-1">
                      <div className="font-semibold">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.role}</div>
                      <div className="text-xs text-muted-foreground">{review.company}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">{renderStars(review.rating)}</div>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                  
                  <h3 className="font-semibold mb-3">{review.title}</h3>
                  
                  <div className="relative mb-4">
                    <Quote className="h-6 w-6 text-primary/20 absolute -top-2 -left-1" />
                    <p className="text-sm text-muted-foreground pl-6">{review.content}</p>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-3 w-3" />
                      <span>{review.helpful} people found this helpful</span>
                    </div>
                    <span>Verified Purchase</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Review Platforms */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Verified Reviews Across Platforms</h2>
              <p className="text-muted-foreground">Our ratings are verified across multiple review platforms</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">G</span>
                </div>
                <div className="flex justify-center mb-2">{renderStars(5)}</div>
                <div className="text-2xl font-bold mb-1">4.9</div>
                <div className="text-muted-foreground">Google Reviews</div>
                <div className="text-sm text-muted-foreground">8,420 reviews</div>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">T</span>
                </div>
                <div className="flex justify-center mb-2">{renderStars(5)}</div>
                <div className="text-2xl font-bold mb-1">4.8</div>
                <div className="text-muted-foreground">Trustpilot</div>
                <div className="text-sm text-muted-foreground">3,250 reviews</div>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">P</span>
                </div>
                <div className="flex justify-center mb-2">{renderStars(5)}</div>
                <div className="text-2xl font-bold mb-1">4.9</div>
                <div className="text-muted-foreground">ProductHunt</div>
                <div className="text-sm text-muted-foreground">830 reviews</div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Thousands of Happy Customers</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Start your free trial today and see why businesses trust LEXHY for their legal needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">Start Free Trial</Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Read More Reviews
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Reviews;