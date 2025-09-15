import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">L</span>
              </div>
              <span className="text-2xl font-display font-bold">LEXHY</span>
            </div>
            <p className="text-accent-foreground/80 mb-6">
              Empowering businesses with AI-powered document drafting and instant access to licensed legal professionals.
            </p>
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
              <p className="text-destructive font-medium text-sm">
                ⚖️ <strong>Legal Disclaimer:</strong> LEXHY is not a law firm and does not provide legal advice or services. We provide document drafting assistance only.
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-accent-foreground/80">
              <li><a href="#" className="hover:text-accent-foreground transition-colors">Contract Specialist</a></li>
              <li><a href="#" className="hover:text-accent-foreground transition-colors">Business Pro</a></li>
              <li><a href="#" className="hover:text-accent-foreground transition-colors">Enterprise Agent</a></li>
              <li><a href="#" className="hover:text-accent-foreground transition-colors">Legal Connect</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-accent-foreground/80">
              <li><a href="#" className="hover:text-accent-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent-foreground transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-accent-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-accent-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Legal & Support</h4>
            <ul className="space-y-2 text-accent-foreground/80">
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-accent-foreground/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-accent-foreground/60 text-sm">
            © 2024 LEXHY. All rights reserved. 
          </p>
          <p className="text-accent-foreground/60 text-sm mt-4 md:mt-0">
            Document drafting services • Not a law firm • AI-powered solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;