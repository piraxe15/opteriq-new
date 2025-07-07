import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Directrice Générale",
      company: "TechCorp Solutions",
      content: "L'automatisation mise en place par Opteriq nous a fait gagner 15h par semaine. Nos équipes peuvent enfin se concentrer sur les tâches à forte valeur ajoutée.",
      rating: 5,
      results: "15h/semaine économisées"
    },
    {
      name: "Pierre Martin",
      role: "Responsable Opérations", 
      company: "LogiFlow",
      content: "Le prototype était livré en 48h comme promis. L'intégration s'est faite sans friction avec nos systèmes existants. Un vrai partenaire de confiance.",
      rating: 5,
      results: "ROI de 300% en 3 mois"
    },
    {
      name: "Sophie Laurent",
      role: "CEO",
      company: "InnovateLab",
      content: "Grâce aux agents IA d'Opteriq, nous traitons maintenant 3x plus de demandes clients avec la même équipe. La transformation a été spectaculaire.",
      rating: 5,
      results: "3x plus de productivité"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-secondary/5 to-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-primary">Témoignages Clients</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Ils Nous Font
            <br />
            <span className="text-primary">Confiance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez comment nos solutions ont transformé leurs entreprises
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:bg-card/80 transition-all duration-300 relative group"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-6 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Results Badge */}
              <div className="inline-block bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-6">
                <span className="text-sm font-medium text-primary">{testimonial.results}</span>
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-border/20">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                <div className="text-sm text-primary font-medium">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Rejoignez Nos Clients Satisfaits
            </h3>
            <p className="text-muted-foreground mb-6">
              Découvrez comment l'IA peut transformer votre entreprise
            </p>
            <button 
              onClick={() => window.open('https://calendly.com/aitallaktarik/appel-strategique', '_blank')}
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Planifier un appel stratégique gratuit
            </button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
    </section>
  );
};

export default TestimonialsSection;