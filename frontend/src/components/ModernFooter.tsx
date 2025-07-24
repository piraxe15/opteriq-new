import { Mail, Phone, MapPin, Linkedin, Sparkles, Zap, Heart, ExternalLink } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/translations";

const ModernFooter = () => {
  const { language } = useLanguage();
  const t = getTranslation(language).footer;
  const headerT = getTranslation(language).header;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-background via-secondary/10 to-background border-t border-border/50 overflow-hidden">
      {/* Enhanced dynamic background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 md:left-20 w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full border border-primary/5 animate-orbit" style={{animationDelay: '0.5s'}} />
        <div className="absolute bottom-10 right-10 md:right-20 w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-full border border-accent/8 animate-orbit-reverse" />
        
        {/* Floating tech elements */}
        <div className="absolute top-1/3 right-1/4 w-6 h-6 md:w-8 md:h-8 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 flex items-center justify-center animate-float">
          <Zap className="w-3 h-3 md:w-4 md:h-4 text-primary" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 w-5 h-5 md:w-7 md:h-7 bg-accent/10 backdrop-blur-sm rounded-full border border-accent/20 flex items-center justify-center animate-float-delayed">
          <Sparkles className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-accent" />
        </div>
        
        {/* Particle effects */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 md:w-3 md:h-3 bg-primary/30 rounded-full animate-morph" />
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 md:w-3 md:h-3 bg-accent/30 rounded-full animate-drift" />
        
        {/* Moving gradient overlay */}
        <div className="absolute inset-0 morph-bg opacity-5" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
        <div className="grid lg:grid-cols-4 gap-8 md:gap-12">
          {/* Enhanced company info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/0ce809f9-8c53-4667-9b80-674c29b95707.png" 
                alt="Opteriq Logo" 
                className="h-8 md:h-10 w-auto"
              />
              <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center glow-pulse">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary animate-pulse" />
              </div>
            </div>
            
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
              {t.description}
            </p>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-muted-foreground">{t.specialistsIn}:</div>
              <div className="flex flex-wrap gap-2">
                {headerT.keywords.map((keyword, index) => (
                  <span 
                    key={index}
                    className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full border border-primary/20 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced quick links */}
          <div className="space-y-6">
            <h3 className="text-lg md:text-xl font-bold text-foreground flex items-center">
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                <ExternalLink className="w-3 h-3 text-primary" />
              </div>
              {t.quickLinks}
            </h3>
            
            <div className="space-y-3">
              <a 
                href="#accueil" 
                className="block text-sm md:text-base text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <span className="flex items-center">
                  {headerT.navigation.home}
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </a>
              <a 
                href="#services" 
                className="block text-sm md:text-base text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <span className="flex items-center">
                  {headerT.navigation.services}
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </a>
              <a 
                href="#process" 
                className="block text-sm md:text-base text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <span className="flex items-center">
                  {headerT.navigation.process}
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </a>
              <a 
                href="#contact" 
                className="block text-sm md:text-base text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <span className="flex items-center">
                  {headerT.navigation.contact}
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </a>
            </div>
          </div>

          {/* Enhanced contact info */}
          <div className="space-y-6">
            <h3 className="text-lg md:text-xl font-bold text-foreground flex items-center">
              <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center mr-2">
                <Mail className="w-3 h-3 text-accent" />
              </div>
              {t.contact}
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors">
                  contact@opteriq.com
                </span>
              </div>
              
              <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.open('https://calendly.com/aitallaktarik/appel-strategique', '_blank')}>
                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <span className="text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors">
                  Réserver un appel
                </span>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors">
                  Canada Québec & International
                </span>
              </div>
            </div>
            
            {/* Enhanced social links - LinkedIn only */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-foreground">{t.followUs}</h4>
              <div className="flex space-x-3">
                <a 
                  href="https://www.linkedin.com/company/opteriq" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300 group interactive-card"
                >
                  <Linkedin className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced bottom section - MOBILE FRIENDLY */}
        <div className="border-t border-border/50 pt-6 md:pt-8 mt-8 md:mt-12">
          <div className="flex flex-col justify-center items-center space-y-3 md:space-y-4 text-center">
            
            {/* Copyright line - mobile optimized */}
            <div className="flex flex-col md:flex-row items-center text-sm text-muted-foreground space-y-2 md:space-y-0 md:space-x-2">
              <div className="flex items-center space-x-2">
                <span>© {currentYear} Opteriq.</span>
                <span>{t.rights}</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>Créé avec</span>
                <Heart className="w-3 h-3 text-red-500 animate-pulse" />
                <span>au Canada</span>
              </div>
            </div>
            
            {/* Status indicators - mobile centered */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Services disponibles 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 md:w-28 md:h-28 bg-accent/5 rounded-full blur-3xl animate-float-delayed"></div>
    </footer>
  );
};

export default ModernFooter;