import { Bot, Target, Lightbulb, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const ModernServices = () => {
  const services = [
    {
      icon: Bot,
      title: "Agents IA Autonomes",
      description: "Systèmes d'acquisition automatique de prospects qui utilisent l'IA pour réserver des rendez-vous dans votre calendrier sans que vous ayez à lever le petit doigt.",
      features: ["24/7 Automatisation", "Intelligence Prédictive", "Intégration Seamless"],
      gradient: "from-blue-500 to-cyan-500",
      delay: "0s"
    },
    {
      icon: Target,
      title: "Messaging Hyper-Ciblé",
      description: "Nous avons testé des centaines de prompts IA pour trouver la personnalisation de messages qui résonne vraiment et ne semble pas artificielle.",
      features: ["Personnalisation Avancée", "A/B Testing Continu", "Optimisation IA"],
      gradient: "from-purple-500 to-pink-500",
      delay: "0.2s"
    },
    {
      icon: Lightbulb,
      title: "Découverte Product-Market Fit",
      description: "Notre segmentation d'audience rapide et nos tests de positionnement vous aident à identifier qui est le plus réceptif à votre produit.",
      features: ["Analyse Comportementale", "Segmentation Intelligente", "Insights Actionnables"],
      gradient: "from-orange-500 to-red-500",
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
            Nous Construisons L'Infrastructure
            <br />
            <span className="text-primary">IA De Vos Ventes</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pour que vous puissiez scaler sans les maux de tête
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
              Prêt À Transformer Votre Entreprise ?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Découvrez comment nos solutions IA peuvent révolutionner vos processus de vente
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