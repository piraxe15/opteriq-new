import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Sparkles, Star, Zap, Target, BarChart3, Rocket, Check } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/translations";

const ModernCTA = () => {
  const { language } = useLanguage();
  const t = getTranslation(language).modernCta;
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background to-card/30 relative overflow-hidden">
      {/* Enhanced background with dynamic elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 md:top-20 left-1/3 w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full border border-primary/5 animate-orbit" style={{animationDelay: '0.5s'}} />
        <div className="absolute bottom-10 md:bottom-20 right-1/3 w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-full border border-accent/8 animate-orbit-reverse" />
        
        {/* Floating interactive elements */}
        <div className="absolute top-1/3 right-10 md:right-20 w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-full animate-morph" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-1/3 left-10 md:left-20 w-6 h-6 md:w-8 md:h-8 bg-secondary/20 rounded-full animate-drift" style={{animationDelay: '2.5s'}} />
        
        {/* Particle effects */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 md:w-3 md:h-3 bg-primary/30 rounded-full animate-float-fast" />
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 md:w-3 md:h-3 bg-accent/30 rounded-full animate-float-slow" />
        
        {/* Moving gradient overlay */}
        <div className="absolute inset-0 morph-bg opacity-10" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Enhanced badge with stars */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-6 md:mb-8 glow-pulse">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
              ))}
            </div>
            <span className="text-sm font-medium text-primary">{t.badge}</span>
          </div>

          {/* Enhanced main title */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 md:mb-8 leading-tight text-shimmer">
            {t.title}
          </h2>

          {/* Enhanced subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>

          {/* Main CTA button with enhanced design */}
          <div className="flex justify-center items-center mb-12 md:mb-16">
            <Button 
              variant="hero" 
              size="xl" 
              className="group text-base md:text-lg px-8 md:px-12 py-4 md:py-6 interactive-card glow-strong" 
              onClick={() => window.open('https://calendly.com/aitallaktarik/appel-strategique', '_blank')}
            >
              <Calendar className="mr-2 h-5 w-5 md:h-6 md:w-6 animate-pulse" />
              {t.button}
              <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Enhanced consolidated guarantees */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto mb-12 md:mb-16">
            <div className="text-center p-4 md:p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 interactive-card">
              <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-full mx-auto mb-3 md:mb-4 glow-pulse">
                <BarChart3 className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2 text-glow">72h</div>
              <div className="text-xs md:text-sm text-muted-foreground">{t.stats.prototype}</div>
            </div>
            
            <div className="text-center p-4 md:p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 interactive-card">
              <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-accent/20 rounded-full mx-auto mb-3 md:mb-4 glow-pulse">
                <Target className="w-6 h-6 md:w-8 md:h-8 text-accent" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2 text-glow">ROI</div>
              <div className="text-xs md:text-sm text-muted-foreground">{t.stats.roi}</div>
            </div>
            
            <div className="text-center p-4 md:p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 interactive-card">
              <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-full mx-auto mb-3 md:mb-4 glow-pulse">
                <Zap className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2 text-glow">24/7</div>
              <div className="text-xs md:text-sm text-muted-foreground">{t.stats.support}</div>
            </div>
          </div>

          {/* Enhanced features list */}
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-8 md:mb-12">
            <div className="flex items-center space-x-2 bg-card/30 backdrop-blur-sm rounded-full px-3 md:px-4 py-2 text-sm md:text-base">
              <Rocket className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-muted-foreground">Lancement immédiat</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/30 backdrop-blur-sm rounded-full px-3 md:px-4 py-2 text-sm md:text-base">
              <Zap className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-muted-foreground">Résultats garantis</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/30 backdrop-blur-sm rounded-full px-3 md:px-4 py-2 text-sm md:text-base">
              <Target className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-muted-foreground">Sur mesure</span>
            </div>
          </div>

          {/* Enhanced final message */}
          <div className="bg-gradient-card backdrop-blur-sm border border-border/50 rounded-3xl p-6 md:p-8 interactive-card">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center glow-pulse">
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-primary animate-pulse" />
              </div>
            </div>
            <p className="text-base md:text-lg text-muted-foreground italic mb-4">
              "{t.quote}"
            </p>
            <div className="text-primary font-semibold text-sm md:text-base">
              {t.signature}
            </div>
            
            {/* Additional guarantee */}
            <div className="mt-6 flex items-center justify-center space-x-2 text-sm md:text-base text-muted-foreground">
              <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
              <span>Prototype gratuit si non satisfait • Sans engagement</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute top-10 md:top-20 right-10 md:right-20 w-32 h-32 md:w-40 md:h-40 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 md:bottom-20 left-10 md:left-20 w-24 h-24 md:w-32 md:h-32 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
      
      {/* Enhanced light effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/5 to-transparent opacity-50" />
    </section>
  );
};

export default ModernCTA;