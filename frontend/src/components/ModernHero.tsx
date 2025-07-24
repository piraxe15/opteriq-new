import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Target, BarChart3, Sparkles, Rocket } from "lucide-react";
import FloatingElements from "./FloatingElements";
import AnimatedText from "./AnimatedText";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/translations";

const ModernHero = () => {
  const { language } = useLanguage();
  const t = getTranslation(language).hero;

  return (
    <section id="accueil" className="relative py-12 md:py-16 flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/10">
      {/* Enhanced background with multiple animation layers */}
      <div className="absolute inset-0"
      style={{ overflow: 'visible' }}>
        {/* LIGHTWEIGHT background - only essential elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border border-primary/5 absolute" />
          <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-primary/3 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/80" />
      </div>
      
      <FloatingElements />
      
      <div className="container mx-auto px-4 md:px-6 py-10 md:py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Enhanced badge with more visual impact */}
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 mb-6 md:mb-8 animate-fade-in glow-pulse">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-xs md:text-sm font-medium text-muted-foreground">{t.badge}</span>
            <Rocket className="w-4 h-4 text-accent animate-float" />
          </div>

          {/* Main title with enhanced animations */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 animate-fade-in-up title-safe">
            <span className="block text-foreground leading-tight mb-2 title-safe">
              {t.title1}
            </span>
            <span className="block text-primary leading-tight mb-2 md:mb-4 text-glow title-safe">
              {t.title2}
            </span>
            <span className="block text-foreground leading-tight title-safe">
              <span className="text-shimmer">{t.title3}</span>
            </span>
          </h1>

          {/* Enhanced subtitle with dynamic text - COMPACT */}
          <div className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <p className="mb-2">
              {t.subtitle1}
            </p>
            <p className="text-sm md:text-base">
              {t.subtitle2}{" "}
              <span className="inline-block min-w-[120px] md:min-w-[160px] text-left">
                <AnimatedText 
                  words={t.capabilities} 
                  className="text-primary font-bold text-glow" 
                  speed={2000}
                />
              </span>
            </p>
          </div>

          {/* Enhanced action buttons with better mobile layout - COMPACT */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8 md:mb-10 animate-fade-in w-full max-w-lg mx-auto px-4" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="hero" 
              size="xl" 
              className="group w-full sm:w-auto text-sm md:text-lg px-6 md:px-10 interactive-card glow-hover transition-all duration-300 hover:scale-105" 
              onClick={() => {
                // Google Analytics tracking
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'conversion', {
                    'send_to': 'AW-629518634',
                    'event_category': 'CTA',
                    'event_label': 'Hero - Démarrer Transformation',
                    'value': 1
                  });
                }
                window.open('https://calendly.com/aitallaktarik/appel-strategique', '_blank');
              }}
            >
              <Sparkles className="mr-2 h-4 w-4 md:h-5 md:w-5 animate-pulse group-hover:scale-110 transition-transform" />
              <span>{window.innerWidth >= 640 ? t.cta1 : t.cta1Mobile}</span>
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="sleek" 
              size="xl" 
              className="group w-full sm:w-auto text-sm md:text-lg px-6 md:px-10 interactive-card transition-all duration-300 hover:scale-105 hover:bg-primary/10" 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-primary transition-colors">{t.cta2}</span>
            </Button>
          </div>

          {/* Consolidated and enhanced stats - removed repetitive elements */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="text-center p-4 md:p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 hover:bg-card/50 transition-all duration-300 group interactive-card">
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-full mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform glow-pulse">
                <Target className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2 text-glow">∞</div>
              <div className="text-xs md:text-sm text-muted-foreground">{t.stats.projects}</div>
            </div>
            
            <div className="text-center p-4 md:p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 hover:bg-card/50 transition-all duration-300 group interactive-card">
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-full mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform glow-pulse">
                <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2 text-glow">72h</div>
              <div className="text-xs md:text-sm text-muted-foreground">{t.stats.prototype}</div>
            </div>
            
            <div className="text-center p-4 md:p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 hover:bg-card/50 transition-all duration-300 group interactive-card">
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-full mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform glow-pulse animate-pulse">
                <Zap className="w-5 h-5 md:w-6 md:h-6 text-primary animate-pulse" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2 text-glow text-center">24/7</div>
              <div className="text-xs md:text-sm text-muted-foreground text-center">{t.stats.support}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;