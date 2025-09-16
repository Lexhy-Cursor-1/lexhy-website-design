import { ArrowRight, Users, Building2, TrendingUp } from "lucide-react";

const ComparisonDiagram = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-semibold text-foreground mb-6">
            The LEXHY Difference
          </h2>
          <p className="text-2xl text-muted-foreground font-light">
            From enriching law firms… to empowering business owners.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Traditional Legal Tech */}
          <div className="bg-muted/30 border border-muted rounded-3xl p-12">
            <h3 className="text-3xl font-semibold text-muted-foreground mb-8 text-center">
              Usual Legal Tech Solutions
            </h3>
            
            <div className="flex flex-col items-center space-y-8">
              {/* Technology box */}
              <div className="bg-muted/60 border-2 border-muted-foreground/30 rounded-xl px-8 py-6 w-full max-w-md">
                <div className="flex items-center justify-center gap-3">
                  <TrendingUp className="w-6 h-6 text-muted-foreground" />
                  <span className="text-lg font-medium text-muted-foreground">Legal Technology</span>
                </div>
              </div>

              {/* Arrow */}
              <ArrowRight className="w-8 h-8 text-muted-foreground rotate-90" />

              {/* Law firms box */}
              <div className="bg-muted/80 border-2 border-muted-foreground/50 rounded-xl px-8 py-6 w-full max-w-md">
                <div className="flex items-center justify-center gap-3">
                  <Building2 className="w-6 h-6 text-muted-foreground" />
                  <span className="text-lg font-medium text-muted-foreground">Law Firms</span>
                </div>
              </div>

              {/* Label */}
              <div className="text-center space-y-3">
                <p className="text-lg font-medium text-muted-foreground">
                  "Technology enriches law firms."
                </p>
                <p className="text-sm text-muted-foreground/70 italic">
                  Law firms still charge high hourly rates.
                </p>
              </div>
            </div>
          </div>

          {/* Lexhy Approach */}
          <div className="bg-gradient-retro-subtle border border-warm-sage/30 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-warm-sage/10 rounded-full -translate-y-16 translate-x-16"></div>
            
            <h3 className="text-3xl font-semibold text-foreground mb-8 text-center">
              Lexhy Approach
            </h3>
            
            <div className="flex flex-col items-center space-y-8">
              {/* Technology box */}
              <div className="bg-warm-sage/20 border-2 border-warm-sage/40 rounded-xl px-8 py-6 w-full max-w-md">
                <div className="flex items-center justify-center gap-3">
                  <TrendingUp className="w-6 h-6 text-warm-sage" />
                  <span className="text-lg font-medium text-foreground">Legal Technology</span>
                </div>
              </div>

              {/* Arrow */}
              <ArrowRight className="w-8 h-8 text-warm-sage rotate-90" />

              {/* Business owners box */}
              <div className="bg-warm-terracotta/20 border-2 border-warm-terracotta/40 rounded-xl px-8 py-6 w-full max-w-md">
                <div className="flex items-center justify-center gap-3">
                  <Users className="w-6 h-6 text-warm-terracotta" />
                  <span className="text-lg font-medium text-foreground">Business Owners</span>
                </div>
              </div>

              {/* Branching path */}
              <div className="flex items-center gap-4 w-full max-w-md justify-center">
                <div className="h-px bg-gradient-to-r from-warm-terracotta to-warm-gold flex-1"></div>
                <ArrowRight className="w-6 h-6 text-warm-gold" />
                <div className="h-px bg-gradient-to-r from-warm-gold to-warm-sage flex-1"></div>
              </div>

              {/* Legal professionals box */}
              <div className="bg-warm-gold/20 border-2 border-warm-gold/40 rounded-xl px-6 py-4 w-full max-w-md">
                <div className="flex items-center justify-center gap-2">
                  <Building2 className="w-5 h-5 text-warm-gold" />
                  <span className="text-sm font-medium text-foreground text-center">
                    Like-minded Licensed Legal Professionals
                  </span>
                </div>
              </div>

              {/* Label */}
              <div className="text-center">
                <p className="text-lg font-semibold text-warm-sage">
                  "Lexhy empowers business owners directly."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonDiagram;