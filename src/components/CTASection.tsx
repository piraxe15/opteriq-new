import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, Zap, ArrowRight } from "lucide-react";

const CTASection = () => {
  const guarantees = [
    {
      icon: Clock,
      title: "48h",
      description: "Prototype livré"
    },
    {
      icon: Shield,
      title: "Garantie",
      description: "Satisfait ou gratuit"
    },
    {
      icon: Zap,
      title: "POC",
      description: "Opérationnel immédiat"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="text-primary font-medium text-sm tracking-wide uppercase bg-primary/10 px-3 py-1 rounded-full">
                03 — Engagement Express
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              <span className="text-muted-foreground italic">Prototype IA fonctionnel en</span>{" "}
              <span className="text-primary">48h</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Nous livrons un POC opérationnel en deux jours ouvrés. 
              Pas convaincu ? Nous réitérons sans frais jusqu'à validation ou vous gardez le prototype gratuitement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {guarantees.map((guarantee, index) => {
              const Icon = guarantee.icon;
              return (
                <Card 
                  key={guarantee.title}
                  className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-soft transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {guarantee.title}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {guarantee.description}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="space-y-6 animate-slide-up">
            <Button variant="hero" size="xl" className="group">
              Défi accepté - Commencer maintenant
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                🚀 Lancement immédiat • ⚡ Résultats garantis • 🎯 Sur mesure
              </p>
              <p className="text-xs text-muted-foreground/70">
                Prototype gratuit si non satisfait • Sans engagement
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CTASection;