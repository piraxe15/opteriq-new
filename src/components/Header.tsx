import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [currentKeyword, setCurrentKeyword] = useState(0);
  const keywords = [
    "Automatisation",
    "Intelligence Artificielle", 
    "Optimisation",
    "Innovation",
    "Transformation"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKeyword((prev) => (prev + 1) % keywords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/117794ff-b203-452a-b819-54520341f0be.png" 
              alt="Opteriq" 
              className="h-8 w-auto"
            />
          </div>
          
          <div className="hidden lg:flex items-center space-x-6">
            <div className="text-sm text-muted-foreground">
              Spécialistes en{" "}
              <span className="inline-block h-5 overflow-hidden relative">
                <span 
                  className="absolute inset-0 text-primary font-medium animate-text-slide"
                  style={{ animationDelay: `${currentKeyword * 3}s` }}
                >
                  {keywords[currentKeyword]}
                </span>
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#accueil" className="text-sm text-foreground hover:text-primary transition-colors">
              Accueil
            </a>
            <a href="#services" className="text-sm text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#methodologie" className="text-sm text-foreground hover:text-primary transition-colors">
              Méthodologie
            </a>
            <a href="#contact" className="text-sm text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="default" size="sm" className="hidden md:inline-flex text-sm">
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