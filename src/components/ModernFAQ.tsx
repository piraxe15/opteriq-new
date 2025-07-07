import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/translations";

const ModernFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { language } = useLanguage();
  const t = getTranslation(language).faq;

  const faqs = [
    {
      category: "Automatisation Intelligente",
      question: "Comment l'automatisation IA peut-elle transformer mon entreprise ?",
      answer: "Notre automatisation intelligente analyse vos processus existants et automatise vos tâches répétitives. Nous concevons des solutions sur-mesure qui s'intègrent parfaitement à vos systèmes actuels, fonctionnent 24/7 et libèrent vos équipes pour des tâches à forte valeur ajoutée."
    },
    {
      category: "Solutions Sur-Mesure",
      question: "Combien de temps faut-il pour développer une solution ?",
      answer: "Nous livrons un prototype fonctionnel en 48h, puis itérons selon vos retours. Le développement complet prend généralement 2-6 semaines selon la complexité, avec une approche agile et des livraisons fréquentes."
    },
    {
      category: "Consultation Stratégique",
      question: "Comment identifiez-vous les meilleures opportunités d'automatisation ?",
      answer: "Nous commençons par un audit gratuit de vos processus, analysons vos points de friction, calculons le ROI potentiel de chaque opportunité, et créons un plan d'action priorisé. Notre accompagnement vous guide à chaque étape de la transformation."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-br from-background to-secondary/20 relative overflow-hidden">
      {/* Background géométrique */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[200px] h-[200px] rounded-full border border-primary/5 animate-pulse" style={{animationDelay: '1.5s'}} />
        <div className="absolute bottom-24 right-1/4 w-[160px] h-[160px] rounded-full border border-accent/5" />
        <div className="absolute top-40 right-20 w-10 h-10 bg-primary/10 rounded-full animate-float" style={{animationDelay: '0.5s'}} />
        <div className="absolute bottom-40 left-20 w-8 h-8 bg-secondary/20 rounded-full animate-float" style={{animationDelay: '2s'}} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-primary">{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-6">
            {t.title}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:bg-card/80 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-secondary/20 transition-colors"
              >
                <div className="flex-1">
                  <div className="text-sm text-primary font-medium mb-1">
                    {faq.category}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {faq.question}
                  </h3>
                </div>
                <div className="ml-4 flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 animate-fade-in">
                  <div className="pt-4 border-t border-border/20">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Une Question Spécifique ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Notre équipe est là pour vous accompagner dans votre transformation IA
            </p>
            <a 
              href="mailto:contact@opteriq.com"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Contactez-nous directement
            </a>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
    </section>
  );
};

export default ModernFAQ;