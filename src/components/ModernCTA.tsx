import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageCircle, Star } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/translations";

const ModernCTA = () => {
  const { language } = useLanguage();
  const t = getTranslation(language).modernCta;
  return (
    <section className="py-24 bg-gradient-to-br from-background to-card/30 relative overflow-hidden">
      {/* Background géométrique */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/3 w-[160px] h-[160px] rounded-full border border-primary/5 animate-pulse" style={{animationDelay: '0.5s'}} />
        <div className="absolute bottom-20 right-1/3 w-[120px] h-[120px] rounded-full border border-accent/8" />
        <div className="absolute top-1/3 right-20 w-10 h-10 bg-primary/10 rounded-full animate-float" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-1/3 left-20 w-8 h-8 bg-secondary/20 rounded-full animate-float" style={{animationDelay: '2.5s'}} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge avec étoiles */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-8">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-sm font-medium text-primary">Résultats Garantis</span>
          </div>

          {/* Titre principal */}
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
            {t.title}
          </h2>

          {/* Sous-titre */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>

          {/* Bouton CTA */}
          <div className="flex justify-center items-center mb-16">
            <Button variant="hero" size="xl" className="group" onClick={() => window.open('https://calendly.com/aitallaktarik/appel-strategique', '_blank')}>
              <Calendar className="mr-2 h-5 w-5" />
              {t.button}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Garanties et preuves sociales */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">48h</div>
              <div className="text-sm text-muted-foreground">Prototype Livré</div>
            </div>
            <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">ROI</div>
              <div className="text-sm text-muted-foreground">Garantie Résultats</div>
            </div>
            <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Dédié</div>
            </div>
          </div>

          {/* Message final */}
          <div className="mt-16 bg-gradient-card backdrop-blur-sm border border-border/50 rounded-3xl p-8">
            <p className="text-lg text-muted-foreground italic">
              "Ne laissez pas vos concurrents prendre de l'avance. L'IA n'est plus l'avenir, c'est le présent."
            </p>
            <div className="mt-4 text-primary font-semibold">
              — L'équipe Opteriq
            </div>
          </div>
        </div>
      </div>

      {/* Éléments décoratifs */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
      
      {/* Effet de lumière */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/5 to-transparent opacity-50" />
    </section>
  );
};

export default ModernCTA;