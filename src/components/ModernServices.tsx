import { Bot, Target, Lightbulb, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const ModernServices = () => {
  const services = [
    {
      icon: Bot,
      title: "Automatisation Intelligente",
      description: "Des systèmes IA qui automatisent vos tâches répétitives et libèrent du temps pour votre équipe.",
      features: ["Automatisation 24/7", "Intégration Simple", "Maintenance Assurée"],
      gradient: "from-primary to-accent",
      delay: "0s"
    },
    {
      icon: Target,
      title: "Solutions Sur-Mesure",
      description: "Nous créons des outils IA spécifiquement adaptés à vos processus métier existants.",
      features: ["Analyse de Besoins", "Développement Rapide", "Formation Incluse"],
      gradient: "from-primary to-accent",
      delay: "0.2s"
    },
    {
      icon: Lightbulb,
      title: "Consultation Stratégique",
      description: "Nous identifions les opportunités d'automatisation qui auront le plus d'impact dans votre entreprise.",
      features: ["Audit Gratuit", "Plan d'Action", "Accompagnement"],
      gradient: "from-primary to-accent",
      delay: "0.4s"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-background via-secondary/10 to-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Nos Solutions</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Automatisez Vos Processus
            <br />
            <span className="text-primary">Avec L'IA</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Gagnez du temps, réduisez les erreurs, concentrez-vous sur l'essentiel
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative animate-fade-in"
              style={{ animationDelay: service.delay }}
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 h-full hover:bg-card/80 transition-all duration-500 hover:shadow-glow group-hover:scale-105">
                {/* Numéro et icône */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-5xl font-bold text-primary/20">
                    0{index + 1}
                  </div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} p-3 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Contenu */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button variant="ghost" className="w-full group/btn mt-6">
                    <span>En savoir plus</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Effet de hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500 pointer-events-none`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Automatisez Vos Tâches Dès Maintenant
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Découvrez comment l'IA peut simplifier vos processus quotidiens
            </p>
            <Button variant="hero" size="xl" className="group">
              Commencer Maintenant
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-32 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-32 -left-32 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
    </section>
  );
};

export default ModernServices;