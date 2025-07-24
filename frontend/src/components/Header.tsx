import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import AnimatedText from "./AnimatedText";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/translations";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = getTranslation(language).header;

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
            <span>{t.specialistsIn}</span>
            <AnimatedText 
              words={t.keywords} 
              className="text-primary font-semibold min-w-[120px]" 
              speed={2500}
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group">
              {t.navigation.home}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group">
              {t.navigation.services}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#process" className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group">
              {t.navigation.process}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group">
              {t.navigation.contact}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="modern" size="lg" className="hidden md:inline-flex" onClick={() => {
              // Google Analytics tracking
              if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                  'event_category': 'CTA',
                  'event_label': 'Header - Planifier un appel',
                  'value': 1
                });
              }
              window.open('https://calendly.com/aitallaktarik/appel-strategique', '_blank');
            }}>
              {t.cta}
            </Button>
            <LanguageSelector />
            <Button 
              variant="outline" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50">
            <nav className="flex flex-col space-y-4 p-6">
              <a href="#accueil" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                {t.navigation.home}
              </a>
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                {t.navigation.services}
              </a>
              <a href="#process" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                {t.navigation.process}
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                {t.navigation.contact}
              </a>
              <Button variant="modern" size="lg" className="w-full" onClick={() => {
                // Google Analytics tracking
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'click', {
                    'event_category': 'CTA',
                    'event_label': 'Header Mobile - Planifier un appel',
                    'value': 1
                  });
                }
                window.open('https://calendly.com/aitallaktarik/appel-strategique', '_blank');
              }}>
                {t.cta}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;