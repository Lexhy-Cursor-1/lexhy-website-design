import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, MessageCircle, Video, Phone, FileCheck, Clock, Shield, Zap } from "lucide-react";

const LegalAdvicePlan = () => {
  const plans = [
    {
      name: "Essential AI",
      price: "$49",
      period: "/month",
      description: "AI-powered legal guidance for small businesses",
      popular: false,
      features: [
        "Unlimited AI legal consultations",
        "AI document review (up to 10/month)",
        "Compliance monitoring alerts",
        "Basic legal document templates",
        "Email support",
        "Legal knowledge base access"
      ]
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "AI + human lawyer support for growing businesses",
      popular: true,
      features: [
        "Everything in Essential AI",
        "2 hours lawyer consultations/month",
        "Unlimited AI + lawyer document reviews",
        "Priority legal document creation",
        "Video consultations with lawyers",
        "Custom contract templates",
        "24/7 AI + business hours lawyer support"
      ]
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "Full-service legal support with dedicated AI agents",
      popular: false,
      features: [
        "Everything in Professional",
        "Unlimited lawyer consultations",
        "Dedicated legal account manager",
        "Custom AI legal workflows",
        "Advanced compliance automation",
        "Legal risk assessment reports",
        "On-demand legal research",
        "Multi-user team access"
      ]
    }
  ];

  const benefits = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "24/7 AI Legal Chat",
      description: "Get instant answers to legal questions from our trained AI legal experts anytime, anywhere."
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: "Video Consultations",
      description: "Face-to-face meetings with qualified lawyers via secure video calls when you need human expertise."
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: "Document Review",
      description: "AI-powered contract analysis plus human lawyer verification for complete peace of mind."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Compliance Monitoring",
      description: "Automated tracking of regulatory changes and compliance requirements for your industry."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6">Legal Advice Plans</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Unlimited Legal Advice with <span className="text-transparent bg-clip-text bg-gradient-to-r from-retro-pink to-retro-purple">AI + Expert Lawyers</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Get instant AI-powered legal guidance plus access to qualified lawyers. Fixed monthly pricing, unlimited consultations, and 24/7 support for your business legal needs.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>24/7 AI Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>Qualified Lawyers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  <span>Instant Responses</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Legal Advice Plans?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Combine the speed of AI with the expertise of qualified lawyers for comprehensive legal support
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-primary mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Choose Your Legal Support Level</h2>
              <p className="text-muted-foreground">
                All plans include our AI legal assistant. Upgrade for human lawyer support.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <Card key={index} className={`p-8 relative ${plan.popular ? 'border-2 border-primary shadow-lg' : ''}`}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      Most Popular
                    </Badge>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                  </Button>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground">
                All plans include a 7-day free trial. No contracts, cancel anytime.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get legal help in three simple steps, powered by AI and backed by expert lawyers
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold mb-2">Ask Your Question</h3>
                <p className="text-sm text-muted-foreground">
                  Chat with our AI legal assistant or upload documents for review. Get instant responses to common legal questions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold mb-2">AI Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Our AI analyzes your situation using extensive legal databases and provides detailed guidance and document suggestions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold mb-2">Expert Review</h3>
                <p className="text-sm text-muted-foreground">
                  For complex matters, connect with qualified lawyers for video consultations and detailed legal advice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face" 
                    alt="Sarah Kim"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold">Sarah Kim</div>
                    <div className="text-sm text-muted-foreground">Startup Founder</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  "The AI gives me instant answers at 2 AM, and when I need detailed contract review, the lawyers are incredibly thorough. Game changer for my startup."
                </p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" 
                    alt="Michael Zhang"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold">Michael Zhang</div>
                    <div className="text-sm text-muted-foreground">Restaurant Owner</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  "Fixed monthly pricing means I can ask legal questions without worrying about hourly bills. The compliance monitoring has saved me from several issues."
                </p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=60&h=60&fit=crop&crop=face" 
                    alt="Lisa Chen"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold">Lisa Chen</div>
                    <div className="text-sm text-muted-foreground">E-commerce Business</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  "Having both AI and human lawyers available is perfect. AI handles my quick questions, lawyers handle the complex stuff. Best of both worlds."
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Start Your Legal Advice Plan Today</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              7-day free trial. No contracts. Cancel anytime. Get the legal support your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">Start Free Trial</Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Compare Plans
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LegalAdvicePlan;