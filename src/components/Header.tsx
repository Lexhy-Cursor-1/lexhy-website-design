import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">L</span>
            </div>
            <span className="text-2xl font-display font-bold text-foreground">LEXHY</span>
          </div>
          
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/start-business" className="text-muted-foreground hover:text-foreground transition-colors">
                Start Business
              </a>
              <a href="/ai-documents" className="text-muted-foreground hover:text-foreground transition-colors">
                AI Documents
              </a>
              <a href="/hire-lawyer" className="text-muted-foreground hover:text-foreground transition-colors">
                Hire Lawyer
              </a>
              <a href="/legal-advice-plan" className="text-muted-foreground hover:text-foreground transition-colors">
                Legal Plans
              </a>
              <a href="/compliance" className="text-muted-foreground hover:text-foreground transition-colors">
                Compliance
              </a>
              <a href="/platform" className="text-muted-foreground hover:text-foreground transition-colors">
                Platform
              </a>
              <a href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <a href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </a>
            </nav>
          
            <div className="flex items-center space-x-4">
              <a href="/contact-us" className="text-muted-foreground hover:text-foreground transition-colors hidden lg:block">
                Contact
              </a>
              <a href="/about-us" className="text-muted-foreground hover:text-foreground transition-colors hidden lg:block">
                About
              </a>
              <Button variant="outline">Request a Demo</Button>
              <Button variant="hero">Sign up for free</Button>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;