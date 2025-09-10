import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-warm overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Professionals collaborating on legal documents"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            AI-Powered Document Drafting
          </Badge>
          
          <h1 className="text-6xl md:text-7xl font-display font-bold text-foreground mb-6">
            Empower Your Business with 
            <span className="text-primary block mt-2">Smart Legal Drafting</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Save thousands on contract management with our AI drafting agents. 
            Perfect for startups, SMBs, and solopreneurs who need professional documents fast.
          </p>
          
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
            <p className="text-accent-foreground font-medium">
              ⚖️ <strong>Important:</strong> LEXHY is not a law firm and does not provide legal services. 
              We provide document drafting assistance only.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="px-8 py-4 text-lg">
              Start Drafting Today
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              View Pricing Plans
            </Button>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Trusted by forward-thinking businesses</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <span className="font-semibold">Startups</span>
              <span className="font-semibold">SMBs</span>
              <span className="font-semibold">Solopreneurs</span>
              <span className="font-semibold">Growth Companies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;