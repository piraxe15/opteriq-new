import { Bot, Target, Lightbulb, ArrowRight, Sparkles, Zap, Brain, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/translations";

const ModernServices = () => {
  const { language } = useLanguage();
  const t = getTranslation(language).services;

  const services = [
    {
      icon: Bot,
      title: t.automation.title,
      description: t.automation.description,
      features: t.automation.features,
      gradient: "from-primary to-accent",
      delay: "0s",
      bgIcon: Zap
    },
    {
      icon: Target,
      title: t.customSolutions.title,
      description: t.customSolutions.description,
      features: t.customSolutions.features,
      gradient: "from-accent to-primary",
      delay: "0.2s",
      bgIcon: Brain
    },
    {
      icon: Lightbulb,
      title: t.consultation.title,
      description: t.consultation.description,
      features: t.consultation.features,
      gradient: "from-primary to-accent",
      delay: "0.4s",
      bgIcon: Rocket
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Enhanced background with more dynamic elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 md:top-20 right-10 md:right-20 w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full border border-primary/5 animate-orbit" />
        <div className="absolute bottom-20 md:bottom-32 left-8 md:left-16 w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full border border-accent/5 animate-orbit-reverse" />
        
        {/* Floating interactive elements */}
        <div className="absolute top-1/2 right-1/4 w-6 h-6 md:w-8 md:h-8 bg-primary/10 rounded-full animate-morph" />
        <div className="absolute bottom-20 right-1/3 w-4 h-4 md:w-6 md:h-6 bg-secondary/20 rounded-full animate-drift" style={{animationDelay: '1s'}} />
        
        {/* Particle effects */}
        <div className="absolute top-32 left-1/4 w-2 h-2 md:w-3 md:h-3 bg-primary/30 rounded-full animate-float-fast" />
        <div className="absolute bottom-40 right-1/4 w-2 h-2 md:w-3 md:h-3 bg-accent/30 rounded-full animate-float-slow" />
        
        {/* Moving gradient overlay */}
        <div className="absolute inset-0 morph-bg opacity-5" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Enhanced header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6 glow-pulse">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">{t.badge}</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-shimmer">
            {t.title}
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Enhanced services grid */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative animate-fade-in"
              style={{ animationDelay: service.delay }}
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-6 md:p-8 h-full hover:bg-card/80 transition-all duration-500 hover:shadow-glow group-hover:scale-105 interactive-card">
                {/* Enhanced header with background icon */}
                <div className="relative mb-6">
                  <div className="absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20 opacity-10">
                    <service.bgIcon className="w-full h-full text-primary animate-float-slow" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-4xl md:text-5xl font-bold text-primary/20 animate-pulse">
                      0{index + 1}
                    </div>
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${service.gradient} p-3 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 glow-pulse`}>
                      <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 md:space-y-6">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>

                  {/* Enhanced features */}
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3 group/feature">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} group-hover/feature:scale-125 transition-transform`} />
                        <span className="text-sm text-muted-foreground group-hover/feature:text-foreground transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced CTA Button */}
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn mt-6 hover:bg-primary/5 border border-transparent hover:border-primary/20"
                    onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <span className="text-sm md:text-base">{t.learnMore}</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Enhanced hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500 pointer-events-none`} />
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none glow-strong" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced background elements */}
      <div className="absolute top-20 md:top-32 -right-20 md:-right-32 w-48 h-48 md:w-64 md:h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 md:bottom-32 -left-20 md:-left-32 w-32 h-32 md:w-48 md:h-48 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
      
      {/* Additional floating elements */}
      <div className="absolute top-1/3 left-1/3 w-3 h-3 md:w-4 md:h-4 bg-primary/20 rounded-full animate-orbit" />
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 md:w-3 md:h-3 bg-accent/20 rounded-full animate-orbit-reverse" />
    </section>
  );
};

export default ModernServices;