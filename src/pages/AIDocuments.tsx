import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Zap, Brain, CheckCircle, Clock, Shield } from "lucide-react";

const AIDocuments = () => {
  const documentCategories = [
    {
      title: "Employment & HR",
      icon: FileText,
      color: "bg-retro-blue/20 text-retro-blue",
      documents: [
        "Employment agreements",
        "Independent contractor agreements", 
        "Non-disclosure agreements",
        "Performance review templates",
        "Termination letters",
        "Workplace policies"
      ]
    },
    {
      title: "Business Contracts",
      icon: Shield,
      color: "bg-retro-purple/20 text-retro-purple", 
      documents: [
        "Service agreements",
        "Supplier contracts",
        "Partnership agreements",
        "Joint venture agreements",
        "Distribution agreements",
        "Licensing agreements"
      ]
    },
    {
      title: "Corporate Documents", 
      icon: Brain,
      color: "bg-retro-pink/20 text-retro-pink",
      documents: [
        "Shareholders agreements",
        "Board resolutions",
        "Share transfer forms",
        "Director agreements",
        "Company constitutions",
        "Meeting minutes"
      ]
    }
  ];

  const aiFeatures = [
    {
      icon: Brain,
      title: "Intelligent Document Generation",
      description: "Our AI understands context and generates legally sound documents tailored to your specific needs"
    },
    {
      icon: Zap,
      title: "Real-time Customization",
      description: "Modify terms, add clauses, and adjust language instantly with AI-powered suggestions"
    },
    {
      icon: Shield,
      title: "Legal Compliance Check",
      description: "Automatic compliance scanning ensures your documents meet current legal requirements"
    },
    {
      icon: Clock,
      title: "Version Control & History",
      description: "Track changes, compare versions, and maintain complete document history with AI insights"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-retro-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6">AI-Powered Legal Documents</Badge>
            <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6">
              Create legal documents with
              <span className="bg-gradient-retro bg-clip-text text-transparent block mt-2 font-normal">AI precision</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Generate professionally drafted legal documents in minutes. Our AI agents understand your business context and create documents that protect your interests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">Start Creating Documents</Button>
              <Button variant="outline" size="lg" className="px-8">Try AI Assistant</Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-foreground mb-4">Why choose AI-powered documents?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI agents bring decades of legal expertise to every document, ensuring quality and compliance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {aiFeatures.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-retro rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Document Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-foreground mb-4">Document categories</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive legal document library powered by AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {documentCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>
                    AI-generated documents for {category.title.toLowerCase()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.documents.map((doc, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-retro-green" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant="outline">
                    Browse Templates
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-foreground mb-4">How AI document creation works</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-retro rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">
                  1
                </div>
                <h3 className="text-xl font-medium text-foreground mb-4">Describe your needs</h3>
                <p className="text-muted-foreground">Tell our AI about your situation, parties involved, and key terms</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-retro rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">
                  2
                </div>
                <h3 className="text-xl font-medium text-foreground mb-4">AI generates document</h3>
                <p className="text-muted-foreground">Advanced AI creates a customized, legally compliant document</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-retro rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">
                  3
                </div>
                <h3 className="text-xl font-medium text-foreground mb-4">Review & finalize</h3>
                <p className="text-muted-foreground">Review, make adjustments, and download your professional document</p>
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
              <h2 className="text-3xl font-light mb-4">Ready to create your first AI document?</h2>
              <p className="text-xl opacity-90 mb-8">
                Join thousands of businesses creating professional legal documents with AI
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8">
                  Start Creating
                </Button>
                <Button size="lg" variant="outline" className="px-8 bg-white/10 text-white border-white/30 hover:bg-white/20">
                  View Templates
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

export default AIDocuments;