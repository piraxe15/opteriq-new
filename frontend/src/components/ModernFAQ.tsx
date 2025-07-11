import { Plus, Minus, Sparkles, MessageCircle, Zap, HelpCircle, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/translations";

const ModernFAQ = () => {
  const { language } = useLanguage();
  const t = getTranslation(language).faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-br from-secondary/5 via-background to-secondary/10 relative overflow-hidden">
      {/* Enhanced dynamic background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 md:right-20 w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full border border-primary/5 animate-orbit" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-1/3 left-10 md:left-20 w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-full border border-accent/8 animate-orbit-reverse" />
        
        {/* Floating question marks */}
        <div className="absolute top-20 left-1/4 w-8 h-8 md:w-10 md:h-10 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 flex items-center justify-center animate-float">
          <HelpCircle className="w-4 h-4 md:w-5 md:h-5 text-primary" />
        </div>
        <div className="absolute bottom-20 right-1/4 w-6 h-6 md:w-8 md:h-8 bg-accent/10 backdrop-blur-sm rounded-full border border-accent/20 flex items-center justify-center animate-float-delayed">
          <MessageCircle className="w-3 h-3 md:w-4 md:h-4 text-accent" />
        </div>
        
        {/* Particle effects */}
        <div className="absolute top-1/3 left-1/3 w-2 h-2 md:w-3 md:h-3 bg-primary/30 rounded-full animate-morph" />
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 md:w-3 md:h-3 bg-accent/30 rounded-full animate-drift" />
        
        {/* Moving gradient overlay */}
        <div className="absolute inset-0 morph-bg opacity-5" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Enhanced header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6 glow-pulse">
            <HelpCircle className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">{t.badge}</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-shimmer">
            {t.title}
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Enhanced FAQ items */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-20">
          {t.items.map((item, index) => (
            <div 
              key={index} 
              className="mb-4 md:mb-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden hover:bg-card/80 transition-all duration-500 interactive-card">
                <button
                  className="w-full p-6 md:p-8 text-left flex items-center justify-between group"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex-1 pr-4">
                    <div className="text-xs md:text-sm text-primary font-semibold mb-2 opacity-80">
                      {item.category}
                    </div>
                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.question}
                    </h3>
                  </div>
                  
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 ${openIndex === index ? 'rotate-180' : ''}`}>
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    ) : (
                      <Plus className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 md:px-8 md:pb-8 animate-fade-in">
                    <div className="border-t border-border/30 pt-6">
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced bottom CTA with dynamic elements */}
        <div className="text-center">
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-6 md:p-8 max-w-4xl mx-auto interactive-card relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 opacity-10">
              <MessageCircle className="w-full h-full text-primary animate-float-slow" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center glow-pulse">
                  <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-primary animate-pulse" />
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {t.ctaTitle}
              </h3>
              <p className="text-base md:text-lg text-muted-foreground mb-6">
                {t.ctaSubtitle}
              </p>
              
              <Button 
                variant="hero" 
                size="xl" 
                className="group text-sm md:text-lg px-6 md:px-10 interactive-card glow-hover"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5 animate-pulse" />
                {t.ctaButton}
                <Sparkles className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute top-10 md:top-20 left-10 md:left-20 w-24 h-24 md:w-32 md:h-32 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-32 h-32 md:w-40 md:h-40 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
      
      {/* Additional interactive elements */}
      <div className="absolute top-1/2 left-10 w-4 h-4 md:w-6 md:h-6 bg-primary/20 rounded-full animate-orbit" />
      <div className="absolute top-3/4 right-1/5 w-3 h-3 md:w-5 md:h-5 bg-accent/20 rounded-full animate-orbit-reverse" />
    </section>
  );
};

export default ModernFAQ;