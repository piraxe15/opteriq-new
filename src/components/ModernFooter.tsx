import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";
const ModernFooter = () => {
  return <footer id="contact" className="bg-background border-t border-border/20 py-12">
      <div className="container mx-auto px-6">
        {/* Logo et description centrés */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src="/lovable-uploads/0ce809f9-8c53-4667-9b80-674c29b95707.png" alt="Opteriq Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-foreground">Opteriq</span>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Transformez votre entreprise avec l'intelligence artificielle.
          </p>
        </div>

        {/* Contact simple */}
        <div className="text-center mb-8">
          <p className="text-muted-foreground mb-2">Prêt à commencer ?</p>
          <a href="mailto:contact@opteriq.com" className="text-primary hover:text-primary/80 transition-colors font-medium">
            contact@opteriq.com
          </a>
        </div>

        {/* Copyright simple */}
        <div className="text-center text-sm text-muted-foreground">© 2025 Opteriq. Tous droits réservés.</div>
      </div>
    </footer>;
};
export default ModernFooter;