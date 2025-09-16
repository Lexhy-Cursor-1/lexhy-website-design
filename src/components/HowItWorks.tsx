import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Bot, Users, CheckCircle } from "lucide-react";
import businessTeamCollaboration from "@/assets/business-team-collaboration.jpg";
import professionalAIDrafting from "@/assets/professional-ai-drafting.jpg";

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
    <section id="how-it-works" className="py-44 bg-muted/30">
      <div className="container mx-auto px-8">
        <div className="text-center mb-32">
          <h2 className="text-7xl font-semibold text-foreground mb-14">
            How LEXHY Empowers You
          </h2>
          <p className="text-3xl text-foreground/90 max-w-5xl mx-auto font-light mb-10">
            Transform your document workflow from expensive and slow to fast, affordable, and professionally validated.
          </p>
          <div className="flex justify-center gap-6 mb-10">
            <img 
              src={businessTeamCollaboration} 
              alt="Professional team collaborating on legal documents" 
              className="w-80 h-60 object-cover rounded-2xl shadow-md"
            />
            <img 
              src={professionalAIDrafting} 
              alt="Professional using AI for document drafting" 
              className="w-80 h-60 object-cover rounded-2xl shadow-md"
            />
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16 relative">
            
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <Card className="transition-all duration-300 border-border hover:border-primary/30 bg-card">
                    <CardContent className="p-12 text-center">
                      <div className={`w-24 h-24 ${step.color} rounded-full mx-auto mb-12 flex items-center justify-center`}>
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-3xl font-semibold text-foreground mb-8">
                        {step.title}
                      </h3>
                      <p className="text-foreground/90 leading-relaxed text-xl font-light">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                  
                  {/* Mobile arrow */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-14">
                      <ArrowRight className="w-8 h-8 text-primary" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="text-center mt-32">
          <div className="bg-card border border-border rounded-3xl p-16 max-w-5xl mx-auto">
            <h3 className="text-4xl font-semibold text-foreground mb-12">
              Why This Approach Works
            </h3>
            <p className="text-foreground/90 text-2xl leading-relaxed font-light">
              Traditional legal services can cost $300-2000+ per hour. Our AI agents handle the heavy lifting of document drafting, 
              then connect you with licensed lawyers only when you need human expertise - saving you thousands while ensuring professional quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;