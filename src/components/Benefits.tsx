import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Zap, DollarSign, Clock, Shield } from "lucide-react";
import legalProfessionalCalm from "@/assets/legal-professional-calm.jpg";
import ComparisonDiagram from "./ComparisonDiagram";

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
    description: "AI-powered precision by connecting you with human lawyer oversight ensures compliance.",
    audience: "Private Individuals"
  }
];

const Benefits = () => {
  return (
    <>
      <ComparisonDiagram />
      <section className="py-44 bg-background">
        <div className="container mx-auto px-8">
          <div className="text-center mb-32">
            <h2 className="text-7xl font-semibold text-foreground mb-14">
              Empower Every Business Stage
            </h2>
          <p className="text-3xl text-foreground/90 max-w-5xl mx-auto font-light mb-10">
            From solo entrepreneurs to scaling enterprises, LEXHY adapts to your unique needs and budget.
          </p>
          <div className="flex justify-center mb-10">
            <img 
              src={legalProfessionalCalm} 
              alt="Calm legal professional using AI assistance for document review" 
              className="w-96 h-64 object-cover rounded-2xl shadow-md"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="transition-all duration-300 group border-border hover:border-primary/30 bg-card">
                <CardHeader className="p-12">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl mb-8 flex items-center justify-center transition-all duration-300">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-semibold text-foreground mb-6">
                    {benefit.title}
                  </CardTitle>
                  <div className="text-lg font-medium text-primary/80 mb-6">
                    {benefit.audience}
                  </div>
                </CardHeader>
                <CardContent className="px-12 pb-12">
                  <p className="text-foreground/90 leading-relaxed text-lg font-light">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-32 text-center">
          <div className="bg-card border border-border rounded-3xl p-16">
            <h3 className="text-5xl font-semibold text-foreground mb-12">
              Ready to Transform Your Document Workflow?
            </h3>
            <p className="text-2xl text-foreground/90 mb-14 max-w-4xl mx-auto font-light">
              Join thousands of businesses who've already discovered the power of AI-assisted contract drafting.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <a 
                href="https://wa.me/6597265330" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-12 py-6 rounded-2xl font-medium text-xl hover:bg-primary/90 transition-all duration-300 inline-block text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Benefits;