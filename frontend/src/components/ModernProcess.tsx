import { Search, GraduationCap, Code2, ArrowRight, Sparkles, Zap, Brain, Rocket, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/translations";

const ModernProcess = () => {
  const { language } = useLanguage();
  const t = getTranslation(language).process;

  const steps = [
    {
      icon: Search,
      title: t.steps.identify.title,
      subtitle: t.steps.identify.subtitle,
      description: t.steps.identify.description,
      color: "from-primary to-accent",
      bgIcon: Zap,
      delay: "0s"
    },
    {
      icon: GraduationCap,
      title: t.steps.educate.title,
      subtitle: t.steps.educate.subtitle,
      description: t.steps.educate.description,
      color: "from-accent to-primary",
      bgIcon: Brain,
      delay: "0.2s"
    },
    {
      icon: Code2,
      title: t.steps.develop.title,
      subtitle: t.steps.develop.subtitle,
      description: t.steps.develop.description,
      color: "from-primary to-accent",
      bgIcon: Rocket,
      delay: "0.4s"
    }
  ];

  return (
    <section id="process" className="py-12 md:py-16 bg-gradient-to-br from-background to-secondary/20 relative overflow-hidden">
      {/* Enhanced background with dynamic elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 md:left-20 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full border border-primary/5 animate-orbit" style={{animationDelay: '0.5s'}} />
        <div className="absolute bottom-1/4 right-10 md:right-20 w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-full border border-accent/8 animate-orbit-reverse" />
        
        {/* Floating interactive elements */}
        <div className="absolute top-32 right-1/3 w-6 h-6 md:w-10 md:h-10 bg-primary/10 rounded-full animate-morph" style={{animationDelay: '1.5s'}} />
        <div className="absolute bottom-32 left-1/4 w-4 h-4 md:w-6 md:h-6 bg-secondary/20 rounded-full animate-drift" style={{animationDelay: '2s'}} />
        
        {/* Particle effects */}
        <div className="absolute top-20 left-1/3 w-2 h-2 md:w-3 md:h-3 bg-primary/30 rounded-full animate-float-fast" />
        <div className="absolute bottom-20 right-1/4 w-2 h-2 md:w-3 md:h-3 bg-accent/30 rounded-full animate-float-slow" />
        
        {/* Moving gradient overlay */}
        <div className="absolute inset-0 morph-bg opacity-5" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Enhanced section header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6 glow-pulse">
            <span className="text-sm font-medium text-primary">{t.badge}</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 text-shimmer title-safe text-center">
            {t.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Enhanced process grid */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative group animate-fade-in" style={{ animationDelay: step.delay }}>
              {/* Enhanced connector between steps */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-20">
                  <ArrowRight className="absolute -top-2 -right-1 w-4 h-4 text-primary/70 animate-pulse" />
                </div>
              )}
              
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-6 md:p-8 h-full hover:bg-card/80 transition-all duration-500 hover:shadow-glow group-hover:scale-105 interactive-card">
                {/* Enhanced header with background icon */}
                <div className="relative mb-6">
                  <div className="absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20 opacity-10">
                    <step.bgIcon className="w-full h-full text-primary animate-float-slow" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-5xl md:text-6xl font-bold text-primary/20 leading-none">
                      0{index + 1}
                    </div>
                    <div className={`relative w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${step.color} p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      {/* Breathing glow background */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-20 animate-pulse blur-sm`} />
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-10 animate-pulse blur-md`} style={{animationDelay: '1s'}} />
                      
                      {/* Breathing icon with smooth scale */}
                      <step.icon className="relative z-10 w-6 h-6 md:w-8 md:h-8 text-white animate-pulse transition-all duration-500" style={{
                        animation: 'breathe 3s ease-in-out infinite'
                      }} />
                    </div>
                  </div>
                </div>

                {/* Enhanced content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-lg text-primary font-semibold text-glow">
                      {step.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {step.description}
                  </p>
                </div>

                {/* Enhanced hover effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none glow-strong" />
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced conclusion message */}
        <div className="text-center mt-16 md:mt-20">
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-6 md:p-8 max-w-4xl mx-auto interactive-card">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center glow-pulse">
                <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-primary animate-pulse" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t.conclusion.title}
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              {t.conclusion.subtitle}
            </p>
            <p className="text-base md:text-lg text-muted-foreground">
              {t.conclusion.description}
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced decorative background elements */}
      <div className="absolute top-10 md:top-20 right-10 md:right-20 w-24 h-24 md:w-32 md:h-32 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 md:bottom-20 left-10 md:left-20 w-32 h-32 md:w-40 md:h-40 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
      
      {/* Additional floating elements */}
      <div className="absolute top-1/3 left-1/3 w-3 h-3 md:w-4 md:h-4 bg-primary/20 rounded-full animate-orbit" />
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 md:w-3 md:h-3 bg-accent/20 rounded-full animate-orbit-reverse" />
    </section>
  );
};

export default ModernProcess;