import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Briefcase, Handshake, Shield } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Contract Specialist",
    description: "Expert at drafting employment contracts, service agreements, and terms of service",
    price: "$29/month",
    features: ["Unlimited contract drafts", "Template library", "Basic review"]
  },
  {
    icon: Briefcase,
    title: "Business Pro",
    description: "Advanced agent for partnership agreements, NDAs, and business documents", 
    price: "$59/month",
    features: ["Everything in Contract", "Advanced templates", "Priority support", "Legal terminology"],
    popular: true
  },
  {
    icon: Handshake,
    title: "Enterprise Agent",
    description: "Comprehensive drafting for complex agreements and compliance documents",
    price: "$149/month", 
    features: ["Everything in Business Pro", "Custom templates", "Compliance assistance", "Dedicated support"]
  },
  {
    icon: Shield,
    title: "Legal Connect",
    description: "Instant connection to licensed attorneys for document review and validation",
    price: "Pay per use",
    features: ["Licensed attorney review", "Human verification", "Legal compliance check", "Same-day turnaround"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-background">
      <div className="container mx-auto px-8">
        <div className="text-center mb-24">
          <h2 className="text-6xl font-light text-foreground mb-8 tracking-tight">
            Choose Your Drafting Agent
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            From simple contracts to complex business agreements.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className={`relative shadow-card hover:shadow-retro transition-all duration-500 bg-card/50 backdrop-blur-sm border-border/50 ${service.popular ? 'ring-1 ring-primary/50' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-medium text-foreground mb-3">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground font-light text-lg leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="text-4xl font-light text-primary mt-6">
                    {service.price}
                  </div>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-base font-light">
                        <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button 
                    className={`w-full py-4 rounded-xl font-medium transition-all duration-300 ${
                      service.popular 
                        ? 'bg-primary text-primary-foreground hover:shadow-glow' 
                        : 'border border-border bg-transparent text-foreground hover:bg-card'
                    }`}
                  >
                    Get Started
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;