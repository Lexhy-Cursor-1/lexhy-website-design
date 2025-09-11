import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Contact Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-retro-pink to-retro-purple">AI-Powered</span> Legal Team
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Get instant support from our AI agents or speak directly with our legal experts. We're here to help your business succeed.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Phone Support</h3>
                <p className="text-muted-foreground mb-2">1800 LEXHY AI</p>
                <p className="text-sm text-muted-foreground">Mon-Fri 9am-6pm AEST</p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p className="text-muted-foreground mb-2">hello@lexhy.ai</p>
                <p className="text-sm text-muted-foreground">24/7 AI responses</p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Office</h3>
                <p className="text-muted-foreground mb-2">Sydney, Australia</p>
                <p className="text-sm text-muted-foreground">By appointment</p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">AI Chat</h3>
                <p className="text-muted-foreground mb-2">Available 24/7</p>
                <p className="text-sm text-muted-foreground">Instant responses</p>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Send us a message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input placeholder="Enter your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="Enter your email" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <Input placeholder="Enter your company name" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input placeholder="What can we help you with?" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell us more about your legal needs..."
                      rows={5}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Quick answers to common questions about our AI-powered legal services
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto grid gap-6">
              <Card className="p-6">
                <h3 className="font-semibold mb-2">How does your AI legal assistance work?</h3>
                <p className="text-muted-foreground">Our AI agents are trained on extensive legal databases and can help with document creation, compliance checks, and initial legal advice. For complex matters, we seamlessly connect you with human lawyers.</p>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-semibold mb-2">What's your response time?</h3>
                <p className="text-muted-foreground">AI responses are instant. Human lawyer responses typically within 2-24 hours depending on your subscription plan.</p>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Do you offer free consultations?</h3>
                <p className="text-muted-foreground">Yes! Sign up for free to get your first legal document and 30 minutes of AI-powered legal guidance.</p>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Is my data secure?</h3>
                <p className="text-muted-foreground">Absolutely. We use enterprise-grade encryption and comply with all Australian privacy laws. Your legal documents and communications are fully confidential.</p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;