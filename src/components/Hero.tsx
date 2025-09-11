import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-image.jpg";
import AnimatedChatBox from "@/components/AnimatedChatBox";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <AnimatedChatBox />
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-foreground mb-8 leading-tight tracking-tight">
            AI-Powered Legal Document
            <span className="bg-gradient-retro bg-clip-text text-transparent block mt-2 font-normal">Automation</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Streamline your legal document creation with intelligent automation for every business decision.
          </p>
          
          <div className="bg-card border border-border rounded-lg p-6 mb-12 max-w-2xl mx-auto">
            <p className="text-muted-foreground text-sm">
              ⚖️ <strong>Important:</strong> LEXHY is not a law firm and does not provide legal services. 
              We provide document drafting assistance only.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="px-8 py-6 text-lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
              Schedule Demo
            </Button>
          </div>
          
          <div className="mt-16">
            <p className="text-muted-foreground mb-6 text-sm uppercase tracking-wide">Trusted by</p>
            <div className="flex justify-center items-center space-x-12 opacity-60">
              <span className="text-sm font-medium">Startups</span>
              <span className="text-sm font-medium">SMBs</span>
              <span className="text-sm font-medium">Enterprises</span>
              <span className="text-sm font-medium">Legal Teams</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;