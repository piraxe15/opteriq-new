import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Target, BarChart3 } from "lucide-react";
import FloatingElements from "./FloatingElements";
import AnimatedText from "./AnimatedText";

const ModernHero = () => {
  const capabilities = [
    "Automatisation Intelligente",
    "Agents IA Autonomes", 
    "Stratégies Personnalisées",
    "Solutions Sur-Mesure"
  ];

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/10">
      {/* Background géométrique inspiré de SmartScaling AI */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Cercles concentriques */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[300px] h-[300px] rounded-full border border-primary/10 absolute animate-pulse" style={{animationDelay: '0s'}} />
          <div className="w-[500px] h-[500px] rounded-full border border-primary/5 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
          <div className="w-[700px] h-[700px] rounded-full border border-primary/5 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 animate-pulse" style={{animationDelay: '1s'}} />
          <div className="w-[900px] h-[900px] rounded-full border border-primary/3 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
          <div className="w-[1100px] h-[1100px] rounded-full border border-primary/3 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 animate-pulse" style={{animationDelay: '2s'}} />
        </div>
        
        {/* Icônes flottantes tech */}
        <div className="absolute top-20 left-20 w-12 h-12 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 flex items-center justify-center animate-float">
          <Zap className="w-6 h-6 text-primary" />
        </div>
        
        <div className="absolute top-40 right-32 w-10 h-10 bg-accent/10 backdrop-blur-sm rounded-full border border-accent/20 flex items-center justify-center animate-float" style={{animationDelay: '0.5s'}}>
          <Target className="w-5 h-5 text-accent" />
        </div>
        
        <div className="absolute bottom-32 left-32 w-14 h-14 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
          <BarChart3 className="w-7 h-7 text-primary" />
        </div>
        
        <div className="absolute bottom-40 right-20 w-8 h-8 bg-secondary/20 backdrop-blur-sm rounded-full border border-secondary/30 animate-float" style={{animationDelay: '1.5s'}} />
        
        <div className="absolute top-1/3 right-20 w-6 h-6 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 animate-float" style={{animationDelay: '2s'}} />
        
        <div className="absolute bottom-1/3 left-16 w-10 h-10 bg-accent/10 backdrop-blur-sm rounded-full border border-accent/20 animate-float" style={{animationDelay: '2.5s'}} />
        
        {/* Effet de gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/80" />
      </div>
      
      <FloatingElements />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge moderne */}
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Agence IA Nouvelle Génération</span>
          </div>

          {/* Titre principal avec animation */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in-up">
            <span className="block text-foreground leading-tight">
              Automatisez.
            </span>
            <span className="block text-primary leading-tight mb-4">
              Libérez.
            </span>
            <span className="block text-foreground leading-tight">
              <span className="text-shimmer">Progressez.</span>
            </span>
          </h1>

          {/* Sous-titre avec animation de mots */}
          <div className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <p className="mb-4">
              Votre partenaire de confiance pour devenir une entreprise{" "}
              <span className="text-primary font-semibold">IA-first</span>.
            </p>
            <p className="text-sm sm:text-base">
              Spécialistes en{" "}
              <span className="inline-block min-w-[160px] sm:min-w-[200px] text-left">
                <AnimatedText 
                  words={capabilities} 
                  className="text-primary font-bold" 
                  speed={2000}
                />
              </span>
            </p>
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col gap-4 justify-center items-center mb-16 animate-fade-in w-full max-w-[280px] sm:max-w-md mx-auto px-4" style={{ animationDelay: '0.6s' }}>
            <Button variant="hero" size="lg" className="group w-full text-xs sm:text-lg px-2 sm:px-10 h-12 sm:h-14" onClick={() => window.open('https://calendly.com/aitallaktarik/appel-strategique', '_blank')}>
              <span className="hidden sm:inline">Démarrer Votre Transformation</span>
              <span className="sm:hidden">Commencer</span>
              <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="sleek" size="lg" className="group w-full text-xs sm:text-lg px-2 sm:px-10 h-10 sm:h-14" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              <Play className="mr-1 sm:mr-2 h-3 w-3 sm:h-5 sm:w-5" />
              <span className="hidden sm:inline">Voir Notre Approche</span>
              <span className="sm:hidden">Découvrir</span>
            </Button>
          </div>

          {/* Statistiques impressionnantes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 hover:bg-card/50 transition-all duration-300 group">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Projets Réussis</div>
            </div>
            
            <div className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 hover:bg-card/50 transition-all duration-300 group">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">48h</div>
              <div className="text-sm text-muted-foreground">Prototype Livré</div>
            </div>
            
            <div className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 hover:bg-card/50 transition-all duration-300 group">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Dédié</div>
            </div>
          </div>
        </div>
      </div>

      {/* Effet de scroll subtil */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default ModernHero;