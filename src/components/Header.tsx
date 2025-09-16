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
          
            <div className="flex items-center space-x-4">
              <a href="/about-us" className="text-muted-foreground hover:text-foreground transition-colors hidden lg:block">
                About
              </a>
              <a href="/workshops" className="text-muted-foreground hover:text-foreground transition-colors hidden lg:block">
                Workshops
              </a>
              <Button variant="outline" asChild>
                <a href="https://wa.me/6597265330" target="_blank" rel="noopener noreferrer">
                  Contact Us
                </a>
              </Button>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;