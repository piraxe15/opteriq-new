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
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <FloatingElements />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge moderne */}
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Agence IA Nouvelle Génération</span>
          </div>

          {/* Titre principal avec animation */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in-up">
            <span className="block text-foreground leading-tight">
              Nous Ne Faisons Pas
            </span>
            <span className="block text-primary leading-tight mb-4">
              De L'IA.
            </span>
            <span className="block text-foreground leading-tight">
              Nous Livrons Des{" "}
              <span className="text-shimmer">Résultats.</span>
            </span>
          </h1>

          {/* Sous-titre avec animation de mots */}
          <div className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <p className="mb-4">
              Votre partenaire de confiance pour devenir une entreprise{" "}
              <span className="text-primary font-semibold">IA-first</span>.
            </p>
            <p>
              Spécialistes en{" "}
              <AnimatedText 
                words={capabilities} 
                className="text-primary font-bold" 
                speed={2000}
              />
            </p>
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button variant="hero" size="xl" className="group" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Démarrer Votre Transformation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="sleek" size="xl" className="group" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              <Play className="mr-2 h-5 w-5" />
              Voir Notre Approche
            </Button>
          </div>

          {/* Statistiques impressionnantes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.9s' }}>
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