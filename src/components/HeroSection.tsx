import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-automation.jpg";

const HeroSection = () => {
  return (
    <section id="accueil" className="pt-24 pb-20 bg-gradient-hero relative overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-primary font-medium text-xs tracking-wider uppercase bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                  Agence IA & Automatisation
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-foreground leading-tight tracking-tight">
                Nous automatisons.{" "}
                <span className="font-normal text-primary">Vous progressez.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light">
                Transformez vos processus métier avec l'intelligence artificielle. 
                Des solutions sur mesure qui réduisent vos tâches répétitives et libèrent le potentiel de vos équipes.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="group px-8">
                Planifier un appel stratégique
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Découvrir nos services
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-12 max-w-lg mx-auto">
              <div className="text-center animate-float">
                <div className="text-2xl md:text-3xl font-light text-primary mb-1">60%</div>
                <div className="text-xs text-muted-foreground">Gain d'efficacité</div>
              </div>
              <div className="text-center animate-float" style={{animationDelay: '1s'}}>
                <div className="text-2xl md:text-3xl font-light text-primary mb-1">48h</div>
                <div className="text-xs text-muted-foreground">Prototype livré</div>
              </div>
              <div className="text-center animate-float" style={{animationDelay: '2s'}}>
                <div className="text-2xl md:text-3xl font-light text-primary mb-1">24/7</div>
                <div className="text-xs text-muted-foreground">Agents autonomes</div>
              </div>
            </div>
            
            <div className="pt-12 animate-slide-up">
              <img 
                src={heroImage} 
                alt="Automatisation IA" 
                className="w-full max-w-2xl mx-auto h-auto rounded-lg shadow-card opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;