import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, FileText, Users, Shield, Clock } from "lucide-react";

const StartBusiness = () => {
  const businessTypes = [
    {
      title: "Sole Trader",
      description: "Perfect for individuals starting their first business",
      price: "Free with AI assistance",
      features: ["ABN registration", "Tax file number", "Business name", "AI document templates"],
      icon: Users,
      color: "bg-retro-blue/20 text-retro-blue"
    },
    {
      title: "Company",
      description: "Limited liability protection for growing businesses",
      price: "From $99 with AI setup",
      features: ["ASIC registration", "Share certificates", "Constitution", "Director agreements", "AI compliance monitoring"],
      icon: Shield,
      color: "bg-retro-purple/20 text-retro-purple"
    },
    {
      title: "Trust",
      description: "Tax-effective structure for investment and family wealth",
      price: "From $299 with AI optimization",
      features: ["Trust deed", "Tax optimization", "Distribution planning", "AI tax strategies"],
      icon: FileText,
      color: "bg-retro-pink/20 text-retro-pink"
    }
  ];

  const steps = [
    {
      step: "1",
      title: "Tell our AI about your business",
      description: "Our AI agents understand your industry and goals to recommend the perfect structure"
    },
    {
      step: "2", 
      title: "AI generates all documents",
      description: "Automatically create constitutions, agreements, and registrations tailored to your needs"
    },
    {
      step: "3",
      title: "Register & launch",
      description: "We handle ASIC, ATO, and state registrations while you focus on your business"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-retro-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6">AI-Powered Business Setup</Badge>
            <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6">
              Start your business with
              <span className="bg-gradient-retro bg-clip-text text-transparent block mt-2 font-normal">AI precision</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our AI agents handle everything from business structure selection to document generation and registration. Get started in minutes, not weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">Start Your Business</Button>
              <Button variant="outline" size="lg" className="px-8">Talk to AI Assistant</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-foreground mb-4">Choose your business structure</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI recommends the optimal structure based on your goals, industry, and growth plans
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {businessTypes.map((type, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${type.color} flex items-center justify-center mb-4`}>
                    <type.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="flex items-center justify-between">
                    {type.title}
                    <Badge variant="secondary">{type.price}</Badge>
                  </CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {type.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-retro-green" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6">Get Started</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-foreground mb-4">How our AI sets up your business</h2>
            <p className="text-xl text-muted-foreground">Three simple steps to launch your business</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-retro rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-retro rounded-2xl p-12 text-center text-white">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-light mb-4">Ready to start your business?</h2>
              <p className="text-xl opacity-90 mb-8">
                Join thousands of entrepreneurs who trust our AI to handle their business setup
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8">
                  Start Free Setup
                </Button>
                <Button size="lg" variant="outline" className="px-8 bg-white/10 text-white border-white/30 hover:bg-white/20">
                  Schedule Consultation
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

export default StartBusiness;