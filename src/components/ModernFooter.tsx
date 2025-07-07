import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";

const ModernFooter = () => {
  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border/50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/117794ff-b203-452a-b819-54520341f0be.png" 
                alt="Opteriq Logo" 
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold text-foreground">Opteriq</span>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Votre partenaire de confiance pour devenir une entreprise IA-first. 
              Nous plaçons l'intelligence artificielle au centre de tout ce que nous faisons.
            </p>
            <div className="flex space-x-4 mt-6">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Agents IA Autonomes</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Messaging Hyper-Ciblé</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Product-Market Fit</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Consulting IA</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">contact@opteriq.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2024 Opteriq. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Conditions d'Utilisation
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Mentions Légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;