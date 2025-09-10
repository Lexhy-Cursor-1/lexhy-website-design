import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      <div className="container mx-auto px-8 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">          
          <h1 className="text-7xl md:text-8xl font-light text-foreground mb-12 leading-tight tracking-tight">
            Empower Your Business with 
            <span className="text-primary block mt-4 font-medium">Smart Legal Drafting</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            Save thousands on contract management with our AI drafting agents.
          </p>
          
          <div className="bg-card/50 border border-border rounded-2xl p-8 mb-16 max-w-3xl mx-auto backdrop-blur-sm">
            <p className="text-foreground/80 font-medium text-lg">
              ⚖️ <strong>Important:</strong> LEXHY is not a law firm and does not provide legal services. 
              We provide document drafting assistance only.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <button className="bg-primary text-primary-foreground px-12 py-5 rounded-xl text-xl font-medium hover:shadow-glow transition-all duration-300">
              Start Drafting Today
            </button>
          </div>
          
          <div className="mt-20">
            <p className="text-muted-foreground mb-8 text-lg font-light">Trusted by forward-thinking businesses</p>
            <div className="flex justify-center items-center space-x-16 opacity-60">
              <span className="font-light text-lg">Startups</span>
              <span className="font-light text-lg">SMBs</span>
              <span className="font-light text-lg">Solopreneurs</span>
              <span className="font-light text-lg">Growth Companies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;