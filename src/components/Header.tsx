import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import AnimatedText from "./AnimatedText";

const Header = () => {
  const keywords = ["Intelligence", "Automatisation", "Innovation", "Performance"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/0ce809f9-8c53-4667-9b80-674c29b95707.png" 
              alt="Opteriq Logo" 
              className="h-8 md:h-10 w-auto"
            />
          </div>
          
          {/* Animated keywords - inspired by Morningside */}
          <div className="hidden lg:flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Spécialistes en</span>
            <AnimatedText 
              words={keywords} 
              className="text-primary font-semibold min-w-[120px]" 
              speed={2500}
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group">
              Accueil
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#process" className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group">
              Process
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="modern" size="lg" className="hidden md:inline-flex" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Planifier un appel
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;