import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, Shield, Users, BarChart3, MessageSquare, FileText, Cloud } from "lucide-react";

const Platform = () => {
  const features = [
    {
      title: "AI Legal Assistant",
      icon: Brain,
      description: "Intelligent document creation and legal advice powered by advanced AI",
      benefits: ["Natural language processing", "Context-aware suggestions", "Legal precedent analysis", "24/7 availability"],
      color: "bg-retro-blue/20 text-retro-blue"
    },
    {
      title: "Smart Automation",
      icon: Zap,
      description: "Automate routine legal tasks and compliance monitoring",
      benefits: ["Deadline tracking", "Document generation", "Compliance alerts", "Workflow automation"],
      color: "bg-retro-purple/20 text-retro-purple"
    },
    {
      title: "Enterprise Security",
      icon: Shield,
      description: "Bank-grade security with encrypted storage and secure collaboration",
      benefits: ["End-to-end encryption", "SOC 2 compliance", "Audit trails", "Access controls"],
      color: "bg-retro-pink/20 text-retro-pink"
    },
    {
      title: "Team Collaboration",
      icon: Users,
      description: "Seamless collaboration tools for legal teams and stakeholders",
      benefits: ["Real-time editing", "Comment system", "Version control", "Role-based permissions"],
      color: "bg-retro-green/20 text-retro-green"
    },
    {
      title: "Analytics & Insights",
      icon: BarChart3,
      description: "Data-driven insights into your legal operations and compliance",
      benefits: ["Performance metrics", "Compliance scoring", "Cost analysis", "Trend identification"],
      color: "bg-retro-orange/20 text-retro-orange"
    },
    {
      title: "Integrated Communication",
      icon: MessageSquare,
      description: "Built-in communication tools for client and lawyer interactions",
      benefits: ["Secure messaging", "Video consultations", "Document sharing", "Status updates"],
      color: "bg-retro-blue/20 text-retro-blue"
    }
  ];

  const integrations = [
    { name: "Microsoft 365", logo: "📄" },
    { name: "Google Workspace", logo: "📊" },
    { name: "Slack", logo: "💬" },
    { name: "Zoom", logo: "📹" },
    { name: "DocuSign", logo: "✍️" },
    { name: "Xero", logo: "📈" },
    { name: "MYOB", logo: "💼" },
    { name: "Salesforce", logo: "☁️" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-retro-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6">Advanced Legal Platform</Badge>
            <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6">
              The complete legal platform for
              <span className="bg-gradient-retro bg-clip-text text-transparent block mt-2 font-normal">modern businesses</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Everything you need to manage legal work, compliance, and team collaboration in one intelligent platform powered by AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">Explore Platform</Button>
              <Button variant="outline" size="lg" className="px-8">Request Demo</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-foreground mb-4">Powerful features for every need</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools that grow with your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-gradient-retro rounded-full" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-foreground mb-4">Seamless integrations</h2>
            <p className="text-xl text-muted-foreground">
              Connect with the tools your team already uses
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 max-w-6xl mx-auto">
            {integrations.map((integration, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-glow transition-all duration-300">
                <div className="text-3xl mb-3">{integration.logo}</div>
                <p className="text-sm font-medium text-foreground">{integration.name}</p>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">View All Integrations</Button>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4">Enterprise Security</Badge>
                <h2 className="text-4xl font-light text-foreground mb-6">
                  Built for security and compliance
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Your data is protected with enterprise-grade security measures and compliance with global standards.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-retro-green" />
                    <span className="font-medium">SOC 2 Type II Certified</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-retro-green" />
                    <span className="font-medium">ISO 27001 Compliant</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-retro-green" />
                    <span className="font-medium">GDPR & Privacy Act Ready</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-retro-green" />
                    <span className="font-medium">256-bit Encryption</span>
                  </div>
                </div>
                
                <Button className="mt-8">Learn About Security</Button>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-retro rounded-2xl p-8 text-white">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">99.9%</div>
                      <div className="text-sm opacity-90">Uptime SLA</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">24/7</div>
                      <div className="text-sm opacity-90">Security Monitoring</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">Global</div>
                      <div className="text-sm opacity-90">Data Centers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">Zero</div>
                      <div className="text-sm opacity-90">Data Breaches</div>
                    </div>
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
              <h2 className="text-3xl font-light mb-4">Ready to transform your legal operations?</h2>
              <p className="text-xl opacity-90 mb-8">
                Join thousands of businesses using our platform to streamline legal work
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="px-8 bg-white/10 text-white border-white/30 hover:bg-white/20">
                  Schedule Demo
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

export default Platform;