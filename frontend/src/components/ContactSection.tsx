import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Sparkles, Send, Shield, CheckCircle, User, Building, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/translations";

const ContactSection = () => {
  const { language } = useLanguage();
  const t = getTranslation(language).contact;
  const toastTranslation = getTranslation(language).toast;
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Get form data
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      message: formData.get('message') as string,
      timestamp: new Date().toISOString(),
      source: 'website'
    };

    try {
      const response = await fetch('https://opteriq.app.n8n.cloud/webhook/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        toast({
          title: toastTranslation.success,
          description: toastTranslation.description,
        });
        // Reset form
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending contact form:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer ou nous contacter directement.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-background via-secondary/5 to-background relative overflow-hidden">
      {/* Enhanced dynamic background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 md:left-20 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full border border-primary/5 animate-orbit" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-1/3 right-10 md:right-20 w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full border border-accent/8 animate-orbit-reverse" />
        
        {/* Floating contact icons */}
        <div className="absolute top-20 right-1/4 w-8 h-8 md:w-10 md:h-10 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 flex items-center justify-center animate-float">
          <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary" />
        </div>
        <div className="absolute bottom-20 left-1/4 w-6 h-6 md:w-8 md:h-8 bg-accent/10 backdrop-blur-sm rounded-full border border-accent/20 flex items-center justify-center animate-float-delayed">
          <Phone className="w-3 h-3 md:w-4 md:h-4 text-accent" />
        </div>
        
        {/* Particle effects */}
        <div className="absolute top-1/3 right-1/3 w-2 h-2 md:w-3 md:h-3 bg-primary/30 rounded-full animate-morph" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 md:w-3 md:h-3 bg-accent/30 rounded-full animate-drift" />
        
        {/* Moving gradient overlay */}
        <div className="absolute inset-0 morph-bg opacity-5" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Enhanced header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6 glow-pulse">
            <MessageSquare className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">{t.badge}</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-shimmer title-safe">
            {t.title}
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Enhanced contact form */}
          <div className="space-y-8">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-6 md:p-8 interactive-card">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center glow-pulse">
                  <Send className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  {t.form.title}
                </h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center">
                      <User className="w-4 h-4 mr-2 text-primary" />
                      {t.form.firstName}
                    </label>
                    <Input 
                      type="text" 
                      name="firstName"
                      required 
                      className="bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center">
                      <User className="w-4 h-4 mr-2 text-primary" />
                      {t.form.lastName}
                    </label>
                    <Input 
                      type="text" 
                      required 
                      className="bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-primary" />
                    {t.form.email}
                  </label>
                  <Input 
                    type="email" 
                    required 
                    className="bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center">
                    <Building className="w-4 h-4 mr-2 text-primary" />
                    {t.form.company}
                  </label>
                  <Input 
                    type="text" 
                    className="bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center">
                    <MessageSquare className="w-4 h-4 mr-2 text-primary" />
                    {t.form.message}
                  </label>
                  <Textarea 
                    rows={4} 
                    placeholder={t.form.messagePlaceholder}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full group text-base md:text-lg py-6 interactive-card glow-hover transition-all duration-300 hover:scale-105"
                  variant="hero"
                  size="xl"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  <span className="group-hover:text-white transition-colors">{isSubmitting ? t.form.submitting : t.form.submit}</span>
                  {!isSubmitting && <Sparkles className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />}
                </Button>
              </form>
            </div>
          </div>

          {/* Enhanced contact info */}
          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-6 md:p-8 interactive-card">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center glow-pulse">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  {t.info.title}
                </h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-background/30 rounded-2xl border border-border/30 hover:bg-background/50 transition-all duration-300">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t.info.email}</p>
                    <p className="font-semibold text-foreground">contact@opteriq.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-background/30 rounded-2xl border border-border/30 hover:bg-background/50 transition-all duration-300">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t.info.phone}</p>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto font-semibold text-foreground hover:text-primary"
                      onClick={() => window.open('https://calendly.com/aitallaktarik/appel-strategique', '_blank')}
                    >
                      {t.info.phoneAction}
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-background/30 rounded-2xl border border-border/30 hover:bg-background/50 transition-all duration-300">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t.info.location}</p>
                    <p className="font-semibold text-foreground">{t.info.locationValue}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced guarantee section */}
            <div className="bg-gradient-card backdrop-blur-sm border border-border/50 rounded-3xl p-6 md:p-8 interactive-card relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 opacity-10">
                <Shield className="w-full h-full text-primary animate-float-slow" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500/10 rounded-full flex items-center justify-center glow-pulse">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground">
                    {t.info.guaranteeTitle}
                  </h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground">
                  {t.info.guaranteeText}
                </p>
                
                <div className="flex items-center space-x-2 mt-4 text-xs md:text-sm text-green-500">
                  <Clock className="w-4 h-4" />
                  <span>Réponse sous 24h garantie</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute top-10 md:top-20 right-10 md:right-20 w-24 h-24 md:w-32 md:h-32 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 md:bottom-20 left-10 md:left-20 w-32 h-32 md:w-40 md:h-40 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
      
      {/* Additional interactive elements */}
      <div className="absolute top-1/2 right-1/5 w-4 h-4 md:w-6 md:h-6 bg-primary/20 rounded-full animate-orbit" />
      <div className="absolute bottom-1/3 left-1/5 w-3 h-3 md:w-5 md:h-5 bg-accent/20 rounded-full animate-orbit-reverse" />
    </section>
  );
};

export default ContactSection;