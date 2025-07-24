import React from 'react';
import { ShoppingCart, Users, TrendingUp, MessageSquare, Mail, Calendar, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

const PopularAutomations = () => {
  const { language } = useLanguage();
  const t = getTranslation(language).popularAutomations;

  const automationIcons = [
    { icon: ShoppingCart, color: "from-blue-500 to-cyan-500" },
    { icon: Mail, color: "from-green-500 to-teal-500" },
    { icon: TrendingUp, color: "from-purple-500 to-pink-500" },
    { icon: MessageSquare, color: "from-orange-500 to-red-500" },
    { icon: Users, color: "from-indigo-500 to-blue-500" },
    { icon: Calendar, color: "from-pink-500 to-purple-500" }
  ];

  return (
    <section id="automations" className="py-12 md:py-16 bg-gradient-to-br from-background via-secondary/5 to-background relative overflow-hidden section-separator">
      {/* Enhanced dynamic background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-[140px] h-[140px] md:w-[200px] md:h-[200px] rounded-full border border-primary/5 animate-orbit" style={{animationDelay: '0.5s'}} />
        <div className="absolute bottom-32 left-1/4 w-[100px] h-[100px] md:w-[160px] md:h-[160px] rounded-full border border-accent/8 animate-orbit-reverse" />
        
        {/* Floating automation elements */}
        <div className="absolute top-40 left-20 w-8 h-8 md:w-10 md:h-10 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 flex items-center justify-center animate-float">
          <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary" />
        </div>
        <div className="absolute bottom-40 right-20 w-6 h-6 md:w-8 md:h-8 bg-accent/10 backdrop-blur-sm rounded-full border border-accent/20 flex items-center justify-center animate-float-delayed">
          <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-accent" />
        </div>
        
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
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-shimmer title-safe">
            {t.title}
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Automations grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mb-16">
          {t.automations.map((automation, index) => (
            <div 
              key={index}
              className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-6 md:p-8 h-full hover:bg-card/80 transition-all duration-500 hover:shadow-glow interactive-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${automation.color} p-3 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  {/* Breathing glow background */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${automation.color} opacity-20 animate-pulse blur-sm`} />
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${automation.color} opacity-10 animate-pulse blur-md`} style={{animationDelay: '1s'}} />
                  
                  {/* Breathing icon with smooth scale */}
                  <automation.icon className="relative z-10 w-6 h-6 md:w-8 md:h-8 text-white animate-pulse transition-all duration-500" style={{
                    animation: 'breathe 3s ease-in-out infinite'
                  }} />
                </div>
              </div>
              
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors title-safe">
                {automation.title}
              </h3>
              
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                {automation.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {automation.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${automation.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500 pointer-events-none`} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center flex justify-center">
          <Button 
            variant="hero" 
            size="xl" 
            className="group text-base md:text-lg px-8 md:px-12 interactive-card glow-hover transition-all duration-300 hover:scale-105 mx-auto"
            onClick={() => window.open('https://calendly.com/aitallaktarik/appel-strategique', '_blank')}
            style={{ 
              display: 'flex',
              alignItems: 'center', 
              justifyContent: 'center',
              margin: '0 auto'
            }}
          >
            <Sparkles className="mr-2 h-5 w-5 animate-pulse group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-white transition-colors">{t.cta}</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute top-10 md:top-20 left-10 md:left-20 w-28 h-28 md:w-36 md:h-36 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-32 h-32 md:w-40 md:h-40 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
    </section>
  );
};

export default PopularAutomations;