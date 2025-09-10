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
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-bold text-foreground mb-6">
            Choose Your Drafting Agent
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From simple contracts to complex business agreements, our AI agents are trained to handle your specific needs. 
            Plus, connect instantly with licensed lawyers when you need human expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className={`relative shadow-card hover:shadow-retro transition-all duration-300 ${service.popular ? 'ring-2 ring-primary' : ''}`}>
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-display">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">
                    {service.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={service.popular ? "hero" : "outline"} 
                    className="w-full"
                  >
                    Get Started
                  </Button>
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