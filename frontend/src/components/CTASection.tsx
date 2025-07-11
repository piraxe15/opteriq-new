import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, Zap, ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/translations";

const CTASection = () => {
  const { language } = useLanguage();
  const t = getTranslation(language).cta;

  const guarantees = [
    {
      icon: Clock,
      title: "48h",
      description: t.guarantees.prototype
    },
    {
      icon: Shield,
      title: t.guarantees.guarantee,
      description: t.guarantees.guarantee
    },
    {
      icon: Zap,
      title: "POC",
      description: t.guarantees.poc
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="text-primary font-medium text-sm tracking-wide uppercase bg-primary/10 px-3 py-1 rounded-full">
                {t.badge}
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              <span className="text-muted-foreground italic">{t.title.split(' 48h')[0]}</span>{" "}
              <span className="text-primary">48h</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {guarantees.map((guarantee, index) => {
              const Icon = guarantee.icon;
              return (
                <Card 
                  key={guarantee.title}
                  className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-soft transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {guarantee.title}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {guarantee.description}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="space-y-6 animate-slide-up">
            <Button variant="hero" size="xl" className="group">
              {t.button}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                {t.features}
              </p>
              <p className="text-xs text-muted-foreground/70">
                {t.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CTASection;