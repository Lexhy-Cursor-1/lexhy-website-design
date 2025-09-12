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
    <section id="services" className="py-64 bg-background">
      <div className="container mx-auto px-8">
        <div className="text-center mb-48">
          <h2 className="text-7xl font-semibold text-foreground mb-20 tracking-tight">
            Choose Your Drafting Agent
          </h2>
          <p className="text-3xl text-foreground/70 max-w-5xl mx-auto font-light leading-relaxed">
            From simple contracts to complex business agreements.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className={`relative transition-all duration-300 bg-card border-border hover:border-primary/30 ${service.popular ? 'ring-2 ring-primary/20' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-8 py-3 rounded-full text-lg font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center p-16">
                  <div className="w-24 h-24 bg-primary/10 rounded-3xl mx-auto mb-12 flex items-center justify-center">
                    <Icon className="w-12 h-12 text-primary" />
                  </div>
                  <CardTitle className="text-3xl font-semibold text-foreground mb-10">{service.title}</CardTitle>
                  <CardDescription className="text-foreground/70 font-light text-xl leading-relaxed mb-8">
                    {service.description}
                  </CardDescription>
                  <div className="text-4xl font-medium text-foreground mt-8 mb-4">
                    {service.price}
                  </div>
                </CardHeader>
                <CardContent className="px-16 pb-16">
                  <ul className="space-y-8 mb-16">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-lg font-light text-foreground/80">
                        <div className="w-3 h-3 bg-primary rounded-full mr-8"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button 
                    className={`w-full py-8 rounded-2xl font-medium text-lg transition-all duration-300 ${
                      service.popular 
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                        : 'border-2 border-border bg-transparent text-foreground hover:border-primary/50'
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