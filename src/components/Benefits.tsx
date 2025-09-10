import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Zap, DollarSign, Clock, Shield } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Save Thousands",
    description: "Cut legal costs by up to 80% while maintaining professional document quality.",
    audience: "All Businesses"
  },
  {
    icon: Clock,
    title: "Lightning Fast",
    description: "Get professional drafts in minutes, not days or weeks.",
    audience: "Startups & SMBs"
  },
  {
    icon: TrendingUp,
    title: "Scale Confidently",
    description: "Handle increasing document needs without hiring expensive legal teams.",
    audience: "Growth Companies"
  },
  {
    icon: Users,
    title: "Expert Validation",
    description: "Connect instantly with licensed lawyers when you need human expertise.",
    audience: "All Users"
  },
  {
    icon: Zap,
    title: "Stay Agile",
    description: "Adapt contracts and agreements quickly as your business evolves.",
    audience: "Solopreneurs"
  },
  {
    icon: Shield,
    title: "Professional Quality",
    description: "AI-powered precision with human lawyer oversight ensures compliance.",
    audience: "Private Individuals"
  }
];

const Benefits = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-bold text-foreground mb-6">
            Empower Every Business Stage
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From solo entrepreneurs to scaling enterprises, LEXHY adapts to your unique needs and budget.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-retro transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg mb-4 flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <Icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl font-display text-foreground">
                    {benefit.title}
                  </CardTitle>
                  <div className="text-sm font-medium text-primary">
                    {benefit.audience}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-xl p-8 shadow-card">
            <h3 className="text-3xl font-display font-bold text-foreground mb-4">
              Ready to Transform Your Document Workflow?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of businesses who've already discovered the power of AI-assisted legal drafting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-hero text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-glow transition-all duration-300">
                Start Your Free Trial
              </button>
              <button className="border border-input bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-colors">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;