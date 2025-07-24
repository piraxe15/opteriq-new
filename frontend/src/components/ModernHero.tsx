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
    <section id="accueil" className="relative py-20 flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/10"
    style={{ minHeight: '100vh' }}>
      {/* Enhanced background with multiple animation layers */}
      <div className="absolute inset-0"
      style={{ overflow: 'visible' }}>
        {/* Concentric circles with varied animations */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full border border-primary/10 absolute animate-pulse glow-pulse" style={{animationDelay: '0s'}} />
          <div className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border border-primary/5 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 animate-float-slow" />
          <div className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-primary/5 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 animate-pulse" style={{animationDelay: '1s'}} />
          <div className="w-[650px] h-[650px] md:w-[900px] md:h-[900px] rounded-full border border-primary/3 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 animate-float-delayed" />
          <div className="w-[800px] h-[800px] md:w-[1100px] md:h-[1100px] rounded-full border border-primary/3 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 animate-pulse" style={{animationDelay: '2s'}} />
        </div>
        
        {/* Enhanced floating tech icons with more variety - MOBILE SAFE */}
        <div className="absolute top-10 md:top-20 left-[15%] w-10 h-10 md:w-12 md:h-12 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 flex items-center justify-center animate-float glow-pulse">
          <Zap className="w-5 h-5 md:w-6 md:h-6 text-primary" />
        </div>
        
        <div className="absolute top-20 md:top-40 right-[15%] w-8 h-8 md:w-10 md:h-10 bg-accent/10 backdrop-blur-sm rounded-full border border-accent/20 flex items-center justify-center animate-orbit" style={{animationDelay: '0.5s'}}>
          <Target className="w-4 h-4 md:w-5 md:h-5 text-accent" />
        </div>
        
        <div className="absolute bottom-20 md:bottom-32 left-[20%] w-12 h-12 md:w-14 md:h-14 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 flex items-center justify-center animate-float-fast" style={{animationDelay: '1s'}}>
          <BarChart3 className="w-6 h-6 md:w-7 md:h-7 text-primary" />
        </div>
        
        <div className="absolute bottom-32 md:bottom-40 right-[20%] w-6 h-6 md:w-8 md:h-8 bg-secondary/20 backdrop-blur-sm rounded-full border border-secondary/30 animate-morph" style={{animationDelay: '1.5s'}} />
        
        <div className="absolute top-1/3 right-[25%] w-5 h-5 md:w-6 md:h-6 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 animate-drift" style={{animationDelay: '2s'}} />
        
        <div className="absolute bottom-1/3 left-[25%] w-8 h-8 md:w-10 md:h-10 bg-accent/10 backdrop-blur-sm rounded-full border border-accent/20 animate-orbit-reverse" style={{animationDelay: '2.5s'}} />
        
        {/* Additional dynamic elements - MOBILE SAFE */}
        <div className="absolute top-1/4 left-[30%] w-4 h-4 md:w-6 md:h-6 bg-primary/15 backdrop-blur-sm rounded-full animate-float" style={{animationDelay: '3s'}} />
        <div className="absolute top-3/4 right-[30%] w-3 h-3 md:w-5 md:h-5 bg-accent/15 backdrop-blur-sm rounded-full animate-float-delayed" style={{animationDelay: '3.5s'}} />
        
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

          {/* Enhanced subtitle with dynamic text */}
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <p className="mb-4">
              {t.subtitle1}
            </p>
            <p className="text-sm sm:text-base md:text-lg">
              {t.subtitle2}{" "}
              <span className="inline-block min-w-[140px] sm:min-w-[160px] md:min-w-[200px] text-left">
                <AnimatedText 
                  words={t.capabilities} 
                  className="text-primary font-bold text-glow" 
                  speed={2000}
                />
              </span>
            </p>
          </div>

          {/* Enhanced action buttons with better mobile layout */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-12 md:mb-16 animate-fade-in w-full max-w-lg mx-auto px-4" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="hero" 
              size="xl" 
              className="group w-full sm:w-auto text-sm md:text-lg px-6 md:px-10 interactive-card glow-hover transition-all duration-300 hover:scale-105" 
              onClick={() => window.open('https://calendly.com/aitallaktarik/appel-strategique', '_blank')}
            >
              <Sparkles className="mr-2 h-4 w-4 md:h-5 md:w-5 animate-pulse group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">{t.cta1}</span>
              <span className="sm:hidden">{t.cta1Mobile}</span>
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
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-full mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform glow-pulse">
                <Zap className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2 text-glow">24/7</div>
              <div className="text-xs md:text-sm text-muted-foreground">{t.stats.support}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-primary/30 rounded-full flex justify-center glow-pulse">
          <div className="w-1 h-2 md:h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default ModernHero;