import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/translations";

const ModernFooter = () => {
  const { language } = useLanguage();
  const t = getTranslation(language).footer;
  return <footer id="contact" className="bg-background border-t border-border/20 py-12">
      <div className="container mx-auto px-6">
        {/* Logo et description centrés */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="flex items-center justify-center mb-4">
            <img src="/lovable-uploads/0ce809f9-8c53-4667-9b80-674c29b95707.png" alt="Opteriq Logo" className="h-6 w-auto" />
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Contact simple */}
        <div className="text-center mb-8">
          <p className="text-muted-foreground mb-2">{t.contact} ?</p>
          <a href="mailto:contact@opteriq.com" className="text-primary hover:text-primary/80 transition-colors font-medium">
            contact@opteriq.com
          </a>
        </div>

        {/* Copyright simple */}
        <div className="text-center text-sm text-muted-foreground">© 2025 Opteriq. {t.rights}</div>
      </div>
    </footer>;
};
export default ModernFooter;