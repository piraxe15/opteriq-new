import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-automation.jpg";

const HeroSection = () => {
  return (
    <section id="accueil" className="pt-20 pb-16 bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-primary font-medium text-sm tracking-wide uppercase bg-primary/10 px-3 py-1 rounded-full">
                  Agence IA
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Automatisez.{" "}
                <span className="text-primary">Libérez.</span>{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Progressez.
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Transformez vos processus métier avec des solutions IA sur mesure. 
                Réduisez vos tâches manuelles de 60% et libérez le potentiel de vos équipes.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Planifier un appel stratégique gratuit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Découvrir nos services
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">60%</div>
                <div className="text-sm text-muted-foreground">Réduction des tâches</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24h/24</div>
                <div className="text-sm text-muted-foreground">Agents autonomes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">48h</div>
                <div className="text-sm text-muted-foreground">Prototype livré</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in lg:animate-slide-up">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Automatisation IA" 
                className="w-full h-auto rounded-2xl shadow-hover"
              />
              <div className="absolute inset-0 bg-gradient-primary/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
    </section>
  );
};

export default HeroSection;