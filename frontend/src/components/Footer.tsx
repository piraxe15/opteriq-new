import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">Q</span>
              </div>
              <span className="text-xl font-bold">Opteriq</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Votre partenaire pour l'automatisation intelligente et la transformation numérique par l'IA.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Automatisation</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Agents IA</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Stratégie & Mentorat</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Prototypage 48h</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Entreprise</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">À propos</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Cas d'études</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Ressources</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-background/70">contact@opteriq.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-background/70">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-background/70">Paris, France</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/70 text-sm">
              © 2024 Opteriq. Tous droits réservés.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                Confidentialité
              </a>
              <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                RGPD
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;