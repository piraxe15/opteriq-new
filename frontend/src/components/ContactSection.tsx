import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/translations";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = getTranslation(language).contact;
  const toastT = getTranslation(language).toast;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: toastT.success,
        description: toastT.description,
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-background to-secondary/10 relative overflow-hidden">
      {/* Background géométrique */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-1/3 w-[180px] h-[180px] rounded-full border border-primary/5" />
        <div className="absolute bottom-32 left-1/4 w-[150px] h-[150px] rounded-full border border-accent/5 animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/4 left-20 w-8 h-8 bg-primary/10 rounded-full animate-float" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-1/4 right-20 w-6 h-6 bg-secondary/20 rounded-full animate-float" style={{animationDelay: '0.5s'}} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto">
          {/* Formulaire */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">{t.form.title}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">{t.form.firstName}</Label>
                  <Input id="firstName" name="firstName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">{t.form.lastName}</Label>
                  <Input id="lastName" name="lastName" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">{t.form.email}</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">{t.form.company}</Label>
                <Input id="company" name="company" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">{t.form.message}</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder={t.form.messagePlaceholder}
                  className="min-h-[120px]"
                  required 
                />
              </div>
              
              <Button type="submit" variant="hero" size="lg" className="w-full group" disabled={isSubmitting}>
                {isSubmitting ? (
                  t.form.submitting
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    {t.form.submit}
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Informations de contact */}
          <div className="space-y-8">
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">{t.info.title}</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{t.info.email}</div>
                    <a href="mailto:contact@opteriq.com" className="text-primary hover:text-primary/80 transition-colors">
                      contact@opteriq.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{t.info.phone}</div>
                    <button 
                      onClick={() => window.open('https://calendly.com/aitallaktarik/appel-strategique', '_blank')}
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      {t.info.phoneAction}
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{t.info.location}</div>
                    <div className="text-muted-foreground">{t.info.locationValue}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Temps de réponse */}
            <div className="bg-gradient-card backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center">
              <h4 className="font-bold text-foreground mb-2">{t.info.guaranteeTitle}</h4>
              <p className="text-muted-foreground text-sm">
                {t.info.guaranteeText}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
    </section>
  );
};

export default ContactSection;