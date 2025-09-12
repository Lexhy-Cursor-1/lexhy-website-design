import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-image.jpg";
import diverseAsianProfessionalsAI from "@/assets/diverse-asian-professionals-ai.jpg";
import AnimatedChatBox from "@/components/AnimatedChatBox";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      <div className="container mx-auto px-8 py-48 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-24">
          <div className="mb-32">
            <AnimatedChatBox />
          </div>
          
          <div className="relative mb-32">
            <img 
              src={diverseAsianProfessionalsAI} 
              alt="Diverse Asian professionals of different cultures and ages using AI document drafting technology" 
              className="w-full max-w-4xl mx-auto rounded-3xl shadow-lg opacity-90 mb-16"
            />
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-24 leading-none tracking-tight">
            Your words.
            <span className="bg-gradient-retro bg-clip-text text-transparent block mt-12 font-medium">Your Draft. Your power</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-foreground/80 mb-32 max-w-4xl mx-auto leading-relaxed font-light">
            Create legal documents with AI agents, manage compliance and connect with lawyers on demand. Less stress, more time and better business.
          </p>
          
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-12 mb-32 max-w-3xl mx-auto">
            <p className="text-muted-foreground text-lg font-light">
              ⚖️ <strong className="font-semibold">Important:</strong> LEXHY is not a law firm and does not provide legal services. 
              We provide document drafting assistance only.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-12 justify-center items-center mb-40">
            <Button size="lg" className="px-12 py-6 text-xl font-medium">
              Sign up for free
            </Button>
            <div className="flex items-center gap-6">
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4">
                <div className="flex">
                  <span className="text-warm-amber text-lg">★</span>
                  <span className="text-warm-amber text-lg">★</span>
                  <span className="text-warm-amber text-lg">★</span>
                  <span className="text-warm-amber text-lg">★</span>
                  <span className="text-warm-amber text-lg">★</span>
                </div>
              </div>
              <div className="text-lg text-foreground/70">
                <div className="font-medium">4.6 based on 20,681 reviews</div>
              </div>
            </div>
          </div>
          
          <div className="mt-40">
            <p className="text-foreground/60 mb-16 text-lg uppercase tracking-wider font-light">Trusted by</p>
            <div className="flex justify-center items-center space-x-20 opacity-70">
              <span className="text-lg font-medium">Startups</span>
              <span className="text-lg font-medium">SMBs</span>
              <span className="text-lg font-medium">Enterprises</span>
              <span className="text-lg font-medium">Legal Teams</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;