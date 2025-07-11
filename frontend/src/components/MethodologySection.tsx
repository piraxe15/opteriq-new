import { Card, CardContent } from "@/components/ui/card";
import { Search, Cog, Users } from "lucide-react";

const MethodologySection = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Diagnostic",
      subtitle: "Analyse ciblée",
      description: "On évalue vos systèmes, tâches répétitives et opportunités IA. Un rapport clair vous guide vers les automatisations prioritaires.",
      gradient: "from-primary/20 to-transparent"
    },
    {
      number: "02",
      icon: Cog,
      title: "Conception",
      subtitle: "Agents & automatisation",
      description: "Création de workflows n8n et d'agents IA personnalisés pour répondre à vos besoins métier concrets.",
      gradient: "from-accent/20 to-transparent"
    },
    {
      number: "03",
      icon: Users,
      title: "Accompagnement",
      subtitle: "Formation & suivi",
      description: "On vous forme à l'usage des systèmes mis en place, et on reste disponible pour optimiser au fil du temps.",
      gradient: "from-primary/20 to-transparent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-primary font-medium text-sm tracking-wide uppercase bg-primary/10 px-3 py-1 rounded-full">
              02 — Méthodologie
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comment on <span className="text-primary">opère</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un accompagnement stratégique et technique, du diagnostic à la livraison
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                <Card 
                  className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-hover transition-all duration-300 group animate-slide-up overflow-hidden"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-50`}></div>
                  
                  <CardContent className="relative p-8 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-6xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
                        {step.number}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <h3 className="text-2xl font-bold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-primary font-medium">
                        {step.subtitle}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform -translate-y-1/2 z-10"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;