import { Search, GraduationCap, Code2, ArrowRight } from "lucide-react";

const ModernProcess = () => {
  const steps = [
    {
      icon: Search,
      title: "IDENTIFIER",
      subtitle: "Opportunités IA",
      description: "Nous vous aidons à identifier les opportunités IA à fort impact et construisons une stratégie de transformation IA étape par étape pour les concrétiser.",
      color: "from-primary to-accent"
    },
    {
      icon: GraduationCap,
      title: "ÉDUQUER",
      subtitle: "Votre Équipe",
      description: "Nous formons et accompagnons votre équipe avec les bons outils et le savoir-faire pour intégrer l'IA dans toute votre organisation.",
      color: "from-primary to-accent"
    },
    {
      icon: Code2,
      title: "DÉVELOPPER",
      subtitle: "Solutions IA",
      description: "Nous tirons parti de notre vaste expérience et réseau pour développer des systèmes IA personnalisés qui font vraiment bouger les choses dans votre entreprise.",
      color: "from-primary to-accent"
    }
  ];

  return (
    <section id="process" className="py-24 bg-gradient-to-br from-background to-secondary/20 relative overflow-hidden">
      {/* Background géométrique */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-20 w-[180px] h-[180px] rounded-full border border-primary/5 animate-pulse" style={{animationDelay: '0.5s'}} />
        <div className="absolute bottom-1/4 right-20 w-[120px] h-[120px] rounded-full border border-accent/8" />
        <div className="absolute top-40 right-1/3 w-10 h-10 bg-primary/10 rounded-full animate-float" style={{animationDelay: '1.5s'}} />
        <div className="absolute bottom-40 left-1/4 w-6 h-6 bg-secondary/20 rounded-full animate-float" style={{animationDelay: '2s'}} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* En-tête de section */}
        <div className="text-center mb-20">
          <div className="inline-block bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-primary">Notre Méthode Éprouvée</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            3 Étapes Vers Votre
            <br />
            <span className="text-primary">Transformation IA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nous passons nos journées à guider les entreprises à travers notre parcours de transformation IA en 3 étapes.
          </p>
        </div>

        {/* Processus avec design moderne */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connecteur entre les étapes */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-20">
                  <ArrowRight className="absolute -top-2 -right-1 w-4 h-4 text-primary/70" />
                </div>
              )}
              
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 h-full hover:bg-card/80 transition-all duration-500 hover:shadow-glow group-hover:scale-105">
                {/* Numéro et icône */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-6xl font-bold text-primary/20 leading-none">
                    0{index + 1}
                  </div>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Contenu */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-lg text-primary font-semibold">
                      {step.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Effet de hover subtil */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Message de conclusion */}
        <div className="text-center mt-20">
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Nous Ne Sommes Pas Une Société De
              <br />
              <span className="text-primary">Conseil IA</span>
            </h3>
            <p className="text-xl text-muted-foreground mb-6">
              Nous sommes bien plus que cela.
            </p>
            <p className="text-lg text-muted-foreground">
              Nous plaçons l'IA au centre de tout ce que nous faisons.
            </p>
          </div>
        </div>
      </div>

      {/* Éléments décoratifs de fond */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
    </section>
  );
};

export default ModernProcess;