import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, Bot, Target, ArrowRight } from "lucide-react";
import agentsImage from "@/assets/service-ai-agents.jpg";
import strategyImage from "@/assets/service-strategy.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: RefreshCw,
      title: "Automatisation",
      subtitle: "Réduisez 60% de tâches manuelles",
      description: "Nous identifions vos processus répétitifs et créons des workflows IA qui s'exécutent 24h/24, sans erreur.",
      features: ["Workflows n8n personnalisés", "Intégrations API", "Monitoring en temps réel"],
      gradient: "from-primary/10 to-accent/10"
    },
    {
      icon: Bot,
      title: "Agents IA",
      subtitle: "Assistants virtuels 24h/24",
      description: "Des agents autonomes qui qualifient vos leads, répondent aux e-mails et alimentent vos CRM, même quand vous dormez.",
      features: ["Qualification automatique", "Réponses intelligentes", "Intégration CRM"],
      image: agentsImage,
      gradient: "from-accent/10 to-primary/10"
    },
    {
      icon: Target,
      title: "Stratégie & Mentorat",
      subtitle: "Feuille de route IA claire",
      description: "Coaching mensuel : KPI, conformité RGPD, montée en compétences de vos équipes pour pérenniser l'automatisation.",
      features: ["Audit complet", "Formation équipes", "Conformité RGPD"],
      image: strategyImage,
      gradient: "from-primary/10 to-accent/10"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-primary font-medium text-sm tracking-wide uppercase bg-primary/10 px-3 py-1 rounded-full">
              01 — Services
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nos <span className="text-primary">Solutions IA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des solutions complètes pour transformer votre entreprise avec l'intelligence artificielle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title} 
                className={`group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br ${service.gradient} border-0 shadow-card animate-slide-up overflow-hidden`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    {service.image && (
                      <div className="w-16 h-16 rounded-lg overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground mb-2">
                      {service.title}
                    </CardTitle>
                    <p className="text-primary font-medium text-sm italic">
                      {service.subtitle}
                    </p>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="ghost" className="w-full group">
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;