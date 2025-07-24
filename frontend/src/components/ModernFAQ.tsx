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
    <section id="faq" className="py-12 md:py-16 bg-gradient-to-br from-background via-secondary/5 to-background relative">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        
        {/* Elegant header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Premium FAQ items */}
        <div className="space-y-2">
          {t.items.map((item, index) => (
            <div 
              key={index} 
              className={`group bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-card hover:border-primary/30 hover:shadow-xl ${
                openIndex === index ? 'ring-2 ring-primary/20 bg-card border-primary/40 shadow-lg' : ''
              }`}
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-primary/5 transition-all duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center space-x-4 flex-1">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl border-2 flex items-center justify-center font-bold transition-all duration-300 ${
                    openIndex === index 
                      ? 'border-primary bg-primary text-primary-foreground shadow-lg' 
                      : 'border-border text-muted-foreground group-hover:border-primary/50 group-hover:text-primary'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <span className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors pr-4">
                    {item.question}
                  </span>
                </div>
                <div className="flex-shrink-0">
                  <div className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center transition-all duration-300 ${
                    openIndex === index 
                      ? 'border-primary bg-primary text-primary-foreground rotate-45' 
                      : 'border-border text-muted-foreground group-hover:border-primary/50 group-hover:text-primary'
                  }`}>
                    <Plus className="w-5 h-5" />
                  </div>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6 animate-in slide-in-from-top-2 duration-500">
                  <div className="pl-14 border-l-2 border-primary/20">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernFAQ;