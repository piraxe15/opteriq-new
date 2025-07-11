import React from 'react';
import { Settings, Zap, Code, Database, Webhook, GitBranch, Sparkles } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { getTranslation } from '@/translations';

const TechStackSection = () => {
  const { language } = useLanguage();
  
  // For now, we'll use a simple object. Later we can add this to translations
  const content = {
    fr: {
      badge: "Notre Stack",
      title: "Technologies de Pointe",
      subtitle: "Les outils que nous maîtrisons pour créer vos automatisations",
      tools: [
        {
          name: "n8n",
          description: "Workflows visuels pour automatisations complexes",
          icon: GitBranch,
          color: "from-red-500 to-pink-500"
        },
        {
          name: "Make",
          description: "Intégrations avancées entre applications",
          icon: Settings,
          color: "from-purple-500 to-indigo-500"
        },
        {
          name: "Custom APIs",
          description: "Solutions sur-mesure pour besoins spécifiques",
          icon: Code,
          color: "from-green-500 to-teal-500"
        },
        {
          name: "Webhooks",
          description: "Communications temps réel entre systèmes",
          icon: Webhook,
          color: "from-blue-500 to-cyan-500"
        },
        {
          name: "Databases",
          description: "Stockage et traitement de données optimisés",
          icon: Database,
          color: "from-yellow-500 to-orange-500"
        },
        {
          name: "Cursor AI",
          description: "Développement accéléré par l'intelligence artificielle",
          icon: Zap,
          color: "from-pink-500 to-purple-500"
        }
      ]
    },
    en: {
      badge: "Our Stack",
      title: "Cutting-Edge Technologies",
      subtitle: "The tools we master to create your automations",
      tools: [
        {
          name: "n8n",
          description: "Visual workflows for complex automations",
          icon: GitBranch,
          color: "from-red-500 to-pink-500"
        },
        {
          name: "Make", 
          description: "Advanced integrations between applications",
          icon: Settings,
          color: "from-purple-500 to-indigo-500"
        },
        {
          name: "Custom APIs",
          description: "Tailor-made solutions for specific needs",
          icon: Code,
          color: "from-green-500 to-teal-500"
        },
        {
          name: "Webhooks",
          description: "Real-time communications between systems",
          icon: Webhook,
          color: "from-blue-500 to-cyan-500"
        },
        {
          name: "Databases",
          description: "Optimized data storage and processing",
          icon: Database,
          color: "from-yellow-500 to-orange-500"
        },
        {
          name: "Cursor AI",
          description: "AI-accelerated development",
          icon: Zap,
          color: "from-pink-500 to-purple-500"
        }
      ]
    },
    es: {
      badge: "Nuestro Stack",
      title: "Tecnologías de Vanguardia", 
      subtitle: "Las herramientas que dominamos para crear tus automatizaciones",
      tools: [
        {
          name: "n8n",
          description: "Flujos visuales para automatizaciones complejas",
          icon: GitBranch,
          color: "from-red-500 to-pink-500"
        },
        {
          name: "Make",
          description: "Integraciones avanzadas entre aplicaciones", 
          icon: Settings,
          color: "from-purple-500 to-indigo-500"
        },
        {
          name: "APIs Personalizadas",
          description: "Soluciones a medida para necesidades específicas",
          icon: Code,
          color: "from-green-500 to-teal-500"
        },
        {
          name: "Webhooks",
          description: "Comunicaciones en tiempo real entre sistemas",
          icon: Webhook,
          color: "from-blue-500 to-cyan-500"
        },
        {
          name: "Bases de Datos",
          description: "Almacenamiento y procesamiento optimizado de datos",
          icon: Database,
          color: "from-yellow-500 to-orange-500"
        },
        {
          name: "Cursor AI",
          description: "Desarrollo acelerado por inteligencia artificial",
          icon: Zap,
          color: "from-pink-500 to-purple-500"
        }
      ]
    }
  };

  const t = content[language] || content.fr;

  return (
    <section id="stack" className="py-16 md:py-24 bg-gradient-to-br from-secondary/5 via-background to-secondary/10 relative overflow-hidden section-separator">
      {/* Enhanced dynamic background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full border border-primary/5 animate-orbit" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-20 right-1/4 w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full border border-accent/8 animate-orbit-reverse" />
        
        {/* Floating tech elements */}
        <div className="absolute top-32 right-1/3 w-8 h-8 md:w-10 md:h-10 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 flex items-center justify-center animate-float">
          <Code className="w-4 h-4 md:w-5 md:h-5 text-primary" />
        </div>
        <div className="absolute bottom-32 left-1/3 w-6 h-6 md:w-8 md:h-8 bg-accent/10 backdrop-blur-sm rounded-full border border-accent/20 flex items-center justify-center animate-float-delayed">
          <Database className="w-3 h-3 md:w-4 md:h-4 text-accent" />
        </div>
        
        {/* Moving gradient overlay */}
        <div className="absolute inset-0 morph-bg opacity-5" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Enhanced header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6 glow-pulse">
            <Settings className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">{t.badge}</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-shimmer">
            {t.title}
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Tools grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {t.tools.map((tool, index) => (
            <div 
              key={index}
              className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-6 md:p-8 h-full hover:bg-card/80 transition-all duration-500 hover:shadow-glow interactive-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${tool.color} p-3 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <tool.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {tool.name}
                </h3>
              </div>
              
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {tool.description}
              </p>

              {/* Hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500 pointer-events-none`} />
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute top-10 md:top-20 right-10 md:right-20 w-24 h-24 md:w-32 md:h-32 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 md:bottom-20 left-10 md:left-20 w-32 h-32 md:w-40 md:h-40 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
    </section>
  );
};

export default TechStackSection;