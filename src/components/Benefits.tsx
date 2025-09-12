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
    <section className="py-40 bg-background">
      <div className="container mx-auto px-8">
        <div className="text-center mb-32">
          <h2 className="text-7xl font-semibold text-foreground mb-12">
            Empower Every Business Stage
          </h2>
          <p className="text-3xl text-foreground/70 max-w-5xl mx-auto font-light">
            From solo entrepreneurs to scaling enterprises, LEXHY adapts to your unique needs and budget.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="transition-all duration-300 group border-border hover:border-primary/30 bg-card">
                <CardHeader className="p-10">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl mb-8 flex items-center justify-center transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-semibold text-foreground mb-4">
                    {benefit.title}
                  </CardTitle>
                  <div className="text-lg font-medium text-primary/80 mb-6">
                    {benefit.audience}
                  </div>
                </CardHeader>
                <CardContent className="px-10 pb-10">
                  <p className="text-foreground/70 leading-relaxed text-lg font-light">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-24 text-center">
          <div className="bg-card border border-border rounded-3xl p-16">
            <h3 className="text-5xl font-semibold text-foreground mb-8">
              Ready to Transform Your Document Workflow?
            </h3>
            <p className="text-2xl text-foreground/70 mb-12 max-w-4xl mx-auto font-light">
              Join thousands of businesses who've already discovered the power of AI-assisted legal drafting.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <button className="bg-primary text-primary-foreground px-12 py-6 rounded-2xl font-medium text-xl hover:bg-primary/90 transition-all duration-300">
                Start Your Free Trial
              </button>
              <button className="border-2 border-border bg-background text-foreground px-12 py-6 rounded-2xl font-medium text-xl hover:border-primary/50 transition-colors">
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