import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Bot, Users, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Bot,
    title: "Choose Your AI Agent",
    description: "Select the perfect drafting agent for your needs - from basic contracts to complex business agreements.",
    color: "bg-primary"
  },
  {
    icon: Users,
    title: "Draft & Collaborate",
    description: "Work with your AI agent to create professional documents. Iterate, refine, and perfect your drafts in real-time.",
    color: "bg-secondary"
  },
  {
    icon: CheckCircle,
    title: "Connect with Licensed Lawyers",
    description: "Get instant access to licensed attorneys for human review, legal compliance checks, and final validation.",
    color: "bg-accent"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-bold text-foreground mb-6">
            How LEXHY Empowers You
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your document workflow from expensive and slow to fast, affordable, and professionally validated.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-px bg-primary/30 transform -translate-y-1/2"></div>
            <div className="hidden md:block absolute top-1/2 right-1/3 w-1/3 h-px bg-primary/30 transform -translate-y-1/2"></div>
            
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <Card className="shadow-card hover:shadow-retro transition-all duration-300 border-2 hover:border-primary/20">
                    <CardContent className="p-8 text-center">
                      <div className={`w-16 h-16 ${step.color} rounded-full mx-auto mb-6 flex items-center justify-center shadow-glow`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                  
                  {/* Mobile arrow */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-6">
                      <ArrowRight className="w-6 h-6 text-primary" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-accent/10 border border-accent/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-accent-foreground mb-4">
              Why This Approach Works
            </h3>
            <p className="text-accent-foreground/80 text-lg leading-relaxed">
              Traditional legal services can cost $300-500+ per hour. Our AI agents handle the heavy lifting of document drafting, 
              then connect you with licensed lawyers only when you need human expertise - saving you thousands while ensuring professional quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;