import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X, Zap, Crown, Briefcase } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: "Free",
      period: "Forever",
      description: "Perfect for individuals and small businesses getting started",
      color: "bg-retro-blue/20 text-retro-blue",
      features: [
        "5 AI document generations per month",
        "Basic legal templates",
        "Email support",
        "Standard security",
        "Basic compliance alerts"
      ],
      limitations: [
        "No custom templates",
        "Limited AI consultations",
        "No priority support"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Professional",
      icon: Briefcase,
      price: "$49",
      period: "per month",
      description: "Ideal for growing businesses with regular legal needs",
      color: "bg-retro-purple/20 text-retro-purple",
      features: [
        "Unlimited AI document generations",
        "Advanced legal templates",
        "AI legal consultations (10 hours/month)",
        "Priority email support",
        "Advanced security features",
        "Custom compliance monitoring",
        "Team collaboration tools",
        "Integration with popular tools"
      ],
      limitations: [
        "Limited lawyer network access",
        "Standard SLA"
      ],
      cta: "Start Professional",
      popular: true
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "Custom",
      period: "pricing",
      description: "Advanced features for large organizations and legal teams",
      color: "bg-retro-pink/20 text-retro-pink",
      features: [
        "Everything in Professional",
        "Unlimited AI legal consultations",
        "Full lawyer network access",
        "24/7 phone support",
        "Custom integrations",
        "Advanced analytics & reporting",
        "Dedicated account manager",
        "Custom AI training",
        "White-label options",
        "Enterprise SLA (99.9% uptime)"
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const addOns = [
    {
      name: "Expert Lawyer Consultation",
      price: "$150",
      period: "per hour",
      description: "Access to senior lawyers across all practice areas"
    },
    {
      name: "Document Review Service",
      price: "$99",
      period: "per document",
      description: "Professional lawyer review of AI-generated documents"
    },
    {
      name: "Compliance Audit",
      price: "$499",
      period: "per audit",
      description: "Comprehensive business compliance assessment"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-retro-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6">Transparent Pricing</Badge>
            <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6">
              Choose the plan that's
              <span className="bg-gradient-retro bg-clip-text text-transparent block mt-2 font-normal">right for you</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              From startups to enterprises, we have AI-powered legal solutions that scale with your business needs.
            </p>
            <div className="flex justify-center">
              <div className="bg-muted rounded-lg p-1 inline-flex">
                <button className="px-4 py-2 bg-background rounded-md shadow-sm text-sm font-medium">
                  Monthly
                </button>
                <button className="px-4 py-2 text-sm font-medium text-muted-foreground">
                  Annual (Save 20%)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-2 border-retro-purple shadow-glow' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-retro text-white">Most Popular</Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 rounded-2xl ${plan.color} flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-6">
                    <div className="text-4xl font-bold text-foreground">{plan.price}</div>
                    <div className="text-muted-foreground">{plan.period}</div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <Button className={`w-full ${plan.popular ? 'bg-gradient-retro text-white' : ''}`}>
                    {plan.cta}
                  </Button>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">What's included:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-retro-green flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {plan.limitations.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Not included:</h4>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <X className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            <span>{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-foreground mb-4">Optional add-ons</h2>
            <p className="text-xl text-muted-foreground">
              Enhance your plan with additional services
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {addOns.map((addon, index) => (
              <Card key={index}>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{addon.name}</CardTitle>
                  <div className="mt-4">
                    <div className="text-2xl font-bold text-foreground">{addon.price}</div>
                    <div className="text-sm text-muted-foreground">{addon.period}</div>
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm mb-4">{addon.description}</p>
                  <Button variant="outline" className="w-full">Add to Plan</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-light text-foreground text-center mb-16">Frequently asked questions</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Can I change plans anytime?</h3>
                <p className="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the billing.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Is there a free trial?</h3>
                <p className="text-muted-foreground">Our Starter plan is free forever. For Professional and Enterprise plans, we offer a 14-day free trial with full access to all features.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">How accurate are the AI-generated documents?</h3>
                <p className="text-muted-foreground">Our AI is trained on thousands of legal documents and continuously updated with current law. For added assurance, all Professional and Enterprise plans include optional lawyer review services.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">We accept all major credit cards, PayPal, and bank transfers for Enterprise plans. All payments are processed securely with 256-bit encryption.</p>
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
              <h2 className="text-3xl font-light mb-4">Ready to get started?</h2>
              <p className="text-xl opacity-90 mb-8">
                Join thousands of businesses saving time and money with AI-powered legal solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="px-8 bg-white/10 text-white border-white/30 hover:bg-white/20">
                  Talk to Sales
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

export default Pricing;