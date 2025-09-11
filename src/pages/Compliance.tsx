import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, AlertTriangle, Calendar, FileText, TrendingUp } from "lucide-react";

const Compliance = () => {
  const complianceAreas = [
    {
      title: "Tax Compliance",
      icon: TrendingUp,
      description: "AI-powered tax management and reporting",
      features: ["GST calculations", "BAS preparation", "Tax return assistance", "Deadline reminders"],
      color: "bg-retro-blue/20 text-retro-blue"
    },
    {
      title: "Employment Compliance",
      icon: Shield,
      description: "Stay compliant with workplace laws and regulations",
      features: ["Award rate monitoring", "Leave calculations", "Safety compliance", "Fair Work updates"],
      color: "bg-retro-purple/20 text-retro-purple"
    },
    {
      title: "Corporate Compliance",
      icon: FileText,
      description: "ASIC and corporate governance requirements",
      features: ["ASIC annual reviews", "Director duties", "Shareholder meetings", "Company records"],
      color: "bg-retro-pink/20 text-retro-pink"
    }
  ];

  const benefits = [
    {
      title: "Automated Monitoring",
      description: "AI tracks regulatory changes and updates your compliance requirements in real-time"
    },
    {
      title: "Smart Reminders",
      description: "Never miss a deadline with intelligent notifications tailored to your business"
    },
    {
      title: "Risk Assessment", 
      description: "Continuous risk analysis identifies potential compliance issues before they become problems"
    },
    {
      title: "Expert Support",
      description: "Access to compliance specialists when you need human expertise"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-retro-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6">AI-Powered Compliance</Badge>
            <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6">
              Stay compliant with
              <span className="bg-gradient-retro bg-clip-text text-transparent block mt-2 font-normal">AI automation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let AI handle your tax and compliance obligations. Automated monitoring, smart reminders, and expert support keep your business on track.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">Start Compliance Check</Button>
              <Button variant="outline" size="lg" className="px-8">Schedule Assessment</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Areas */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-foreground mb-4">Complete compliance coverage</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI-powered solutions for all your business compliance needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {complianceAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${area.color} flex items-center justify-center mb-4`}>
                    <area.icon className="w-6 h-6" />
                  </div>
                  <CardTitle>{area.title}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {area.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-retro-green" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Get Started</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-foreground mb-4">Why choose AI compliance?</h2>
            <p className="text-xl text-muted-foreground">Advanced automation meets human expertise</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-retro rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-2xl p-8">
            <div className="flex items-start gap-4 max-w-4xl mx-auto">
              <AlertTriangle className="w-8 h-8 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Compliance matters</h3>
                <p className="text-muted-foreground mb-4">
                  Non-compliance can result in significant penalties, legal issues, and business disruption. 
                  Stay ahead with automated compliance management.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong className="text-foreground">Tax Penalties:</strong>
                    <p className="text-muted-foreground">Up to 75% of tax owed</p>
                  </div>
                  <div>
                    <strong className="text-foreground">ASIC Penalties:</strong>
                    <p className="text-muted-foreground">$2,220+ per violation</p>
                  </div>
                  <div>
                    <strong className="text-foreground">Fair Work Fines:</strong>
                    <p className="text-muted-foreground">$33,000+ for serious breaches</p>
                  </div>
                </div>
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
              <h2 className="text-3xl font-light mb-4">Ready to automate your compliance?</h2>
              <p className="text-xl opacity-90 mb-8">
                Join thousands of businesses using AI to stay compliant and avoid costly penalties
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8">
                  Start Free Assessment
                </Button>
                <Button size="lg" variant="outline" className="px-8 bg-white/10 text-white border-white/30 hover:bg-white/20">
                  Talk to Expert
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

export default Compliance;