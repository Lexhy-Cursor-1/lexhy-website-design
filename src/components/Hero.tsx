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
          
          
          <div className="mt-40">
            <p className="text-foreground/60 mb-16 text-lg uppercase tracking-wider font-light">Trusted by</p>
            <div className="flex justify-center items-center space-x-20 opacity-70">
              <span className="text-lg font-medium">Startups</span>
              <span className="text-lg font-medium">SMBs</span>
              <span className="text-lg font-medium">Enterprises</span>
              <span className="text-lg font-medium">Legal Teams</span>
            </div>
          </div>

          {/* Vibe Drafting Workshop Promotion */}
          <div className="mt-32 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm border border-primary/30 rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
                🎯 Master Vibe Drafting
              </h3>
              <p className="text-xl text-foreground/80 mb-8 font-light">
                Join our interactive workshop and learn the revolutionary approach that's transforming how businesses create legal documents.
              </p>
              <a 
                href="https://luma.com/lexhyvibedraftintro1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-12 py-6 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all duration-300 inline-block shadow-lg hover:shadow-xl"
              >
                Reserve Your Spot →
              </a>
            </div>
          </div>

          {/* Client Testimonial */}
          <div className="mt-32 max-w-4xl mx-auto">
            <div className="bg-card/70 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12">
              <blockquote className="text-foreground/90 text-lg md:text-xl leading-relaxed font-light mb-6">
                "I tried the Vibe Drafting method for a business contract under the guidance of the Lexhy team, and the experience exceeded all expectations. The process flowed seamlessly — from contract creation, to negotiation preparation, right through to signing and completion. What truly impressed me was how nuanced the method was in addressing not just the legal terms, but also the human factors in understanding my counterparty's concerns.
              </blockquote>
              <blockquote className="text-foreground/90 text-lg md:text-xl leading-relaxed font-light mb-8">
                Thanks to this approach, I was able to launch a successful new business line while saving a significant amount in legal fees. For me, Vibe Drafting wasn't just about documents — it was about empowering me to move faster and smarter in business. I'm genuinely excited for other business owners to experience the same support and results with Lexhy."
              </blockquote>
              <footer className="text-right">
                <cite className="text-primary font-semibold text-lg">Mr. Lesser</cite>
                <p className="text-muted-foreground text-sm">Singapore, Business Owner</p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;