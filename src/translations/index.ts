import { Language } from '@/hooks/useLanguage';

export interface Translations {
  // Header
  header: {
    keywords: string[];
    specialistsIn: string;
    navigation: {
      home: string;
      services: string;
      process: string;
      contact: string;
    };
    cta: string;
  };
  // Hero Section
  hero: {
    badge: string;
    title1: string;
    title2: string;
    title3: string;
    subtitle1: string;
    subtitle2: string;
    capabilities: string[];
    cta1: string;
    cta1Mobile: string;
    cta2: string;
    stats: {
      projects: string;
      prototype: string;
      support: string;
    };
  };
  // Services Section
  services: {
    badge: string;
    title: string;
    subtitle: string;
    automation: {
      title: string;
      description: string;
      features: string[];
    };
    customSolutions: {
      title: string;
      description: string;
      features: string[];
    };
    consultation: {
      title: string;
      description: string;
      features: string[];
    };
    learnMore: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
    ctaButtonMobile: string;
  };
  // CTA Section
  cta: {
    badge: string;
    title: string;
    subtitle: string;
    guarantees: {
      prototype: string;
      guarantee: string;
      poc: string;
    };
    button: string;
    features: string;
    disclaimer: string;
  };
  // Footer
  footer: {
    description: string;
    quickLinks: string;
    contact: string;
    followUs: string;
    rights: string;
  };
  // Process Section
  process: {
    badge: string;
    title: string;
    subtitle: string;
    steps: {
      consultation: {
        title: string;
        description: string;
      };
      development: {
        title: string;
        description: string;
      };
      deployment: {
        title: string;
        description: string;
      };
      support: {
        title: string;
        description: string;
      };
    };
  };
  // FAQ Section
  faq: {
    badge: string;
    title: string;
    subtitle: string;
  };
  // Contact Section
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    formButton: string;
  };
  // Modern CTA
  modernCta: {
    title: string;
    subtitle: string;
    button: string;
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    header: {
      keywords: ["Intelligence", "Automatisation", "Innovation", "Performance"],
      specialistsIn: "Spécialistes en",
      navigation: {
        home: "Accueil",
        services: "Services", 
        process: "Process",
        contact: "Contact"
      },
      cta: "Planifier un appel"
    },
    hero: {
      badge: "Agence IA Nouvelle Génération",
      title1: "Automatisez.",
      title2: "Libérez.",
      title3: "Progressez.",
      subtitle1: "Votre partenaire de confiance pour devenir une entreprise IA-first.",
      subtitle2: "Spécialistes en",
      capabilities: [
        "Automatisation Intelligente",
        "Agents IA Autonomes", 
        "Stratégies Personnalisées",
        "Solutions Sur-Mesure"
      ],
      cta1: "Démarrer Votre Transformation",
      cta1Mobile: "Commencer Maintenant",
      cta2: "Voir Notre Approche",
      stats: {
        projects: "Projets Réussis",
        prototype: "Prototype Livré",
        support: "Support Dédié"
      }
    },
    services: {
      badge: "Nos Solutions",
      title: "Automatisez Vos Processus Avec L'IA",
      subtitle: "Gagnez du temps, réduisez les erreurs, concentrez-vous sur l'essentiel",
      automation: {
        title: "Automatisation Intelligente",
        description: "Des systèmes IA qui automatisent vos tâches répétitives et libèrent du temps pour votre équipe.",
        features: ["Automatisation 24/7", "Intégration Simple", "Maintenance Assurée"]
      },
      customSolutions: {
        title: "Solutions Sur-Mesure",
        description: "Nous créons des outils IA spécifiquement adaptés à vos processus métier existants.",
        features: ["Analyse de Besoins", "Développement Rapide", "Formation Incluse"]
      },
      consultation: {
        title: "Consultation Stratégique",
        description: "Nous identifions les opportunités d'automatisation qui auront le plus d'impact dans votre entreprise.",
        features: ["Audit Gratuit", "Plan d'Action", "Accompagnement"]
      },
      learnMore: "En savoir plus",
      ctaTitle: "Automatisez Vos Tâches Dès Maintenant",
      ctaSubtitle: "Découvrez comment l'IA peut simplifier vos processus quotidiens",
      ctaButton: "Commencer Maintenant Gratuitement",
      ctaButtonMobile: "Commencer"
    },
    cta: {
      badge: "03 — Engagement Express",
      title: "Prototype IA fonctionnel en 48h",
      subtitle: "Nous livrons un POC opérationnel en deux jours ouvrés. Pas convaincu ? Nous réitérons sans frais jusqu'à validation ou vous gardez le prototype gratuitement.",
      guarantees: {
        prototype: "Prototype livré",
        guarantee: "Satisfait ou gratuit",
        poc: "Opérationnel immédiat"
      },
      button: "Défi accepté - Commencer maintenant",
      features: "🚀 Lancement immédiat • ⚡ Résultats garantis • 🎯 Sur mesure",
      disclaimer: "Prototype gratuit si non satisfait • Sans engagement"
    },
    footer: {
      description: "Votre partenaire de confiance pour l'automatisation intelligente et les solutions IA sur-mesure.",
      quickLinks: "Liens Rapides",
      contact: "Contact",
      followUs: "Suivez-nous",
      rights: "Tous droits réservés."
    },
    process: {
      badge: "Notre Processus",
      title: "Comment Nous Procédons",
      subtitle: "Un processus simplifié pour transformer votre entreprise avec l'IA",
      steps: {
        consultation: {
          title: "Consultation",
          description: "Nous analysons vos besoins et identifions les opportunités d'automatisation."
        },
        development: {
          title: "Développement",
          description: "Nous créons votre solution IA personnalisée en 48h."
        },
        deployment: {
          title: "Déploiement",
          description: "Nous intégrons la solution dans votre environnement existant."
        },
        support: {
          title: "Support",
          description: "Nous assurons le suivi et l'optimisation continue."
        }
      }
    },
    faq: {
      badge: "FAQ",
      title: "Questions Fréquentes",
      subtitle: "Tout ce que vous devez savoir sur nos services"
    },
    contact: {
      badge: "Contact",
      title: "Prêt à Commencer ?",
      subtitle: "Contactez-nous pour discuter de votre projet",
      formButton: "Envoyer le message"
    },
    modernCta: {
      title: "Prêt à Transformer Votre Entreprise ?",
      subtitle: "Commencez votre transformation IA dès aujourd'hui",
      button: "Démarrer Maintenant"
    }
  },
  en: {
    header: {
      keywords: ["Intelligence", "Automation", "Innovation", "Performance"],
      specialistsIn: "Specialists in",
      navigation: {
        home: "Home",
        services: "Services",
        process: "Process", 
        contact: "Contact"
      },
      cta: "Schedule a call"
    },
    hero: {
      badge: "Next-Generation AI Agency",
      title1: "Automate.",
      title2: "Liberate.",
      title3: "Progress.",
      subtitle1: "Your trusted partner to become an AI-first company.",
      subtitle2: "Specialists in",
      capabilities: [
        "Intelligent Automation",
        "Autonomous AI Agents",
        "Custom Strategies",
        "Tailored Solutions"
      ],
      cta1: "Start Your Transformation",
      cta1Mobile: "Get Started",
      cta2: "See Our Approach",
      stats: {
        projects: "Successful Projects",
        prototype: "Prototype Delivered",
        support: "Dedicated Support"
      }
    },
    services: {
      badge: "Our Solutions",
      title: "Automate Your Processes With AI",
      subtitle: "Save time, reduce errors, focus on what matters",
      automation: {
        title: "Intelligent Automation",
        description: "AI systems that automate your repetitive tasks and free up time for your team.",
        features: ["24/7 Automation", "Simple Integration", "Assured Maintenance"]
      },
      customSolutions: {
        title: "Custom Solutions",
        description: "We create AI tools specifically adapted to your existing business processes.",
        features: ["Needs Analysis", "Rapid Development", "Training Included"]
      },
      consultation: {
        title: "Strategic Consultation",
        description: "We identify automation opportunities that will have the most impact in your business.",
        features: ["Free Audit", "Action Plan", "Support"]
      },
      learnMore: "Learn more",
      ctaTitle: "Automate Your Tasks Now",
      ctaSubtitle: "Discover how AI can simplify your daily processes",
      ctaButton: "Start Now For Free",
      ctaButtonMobile: "Start"
    },
    cta: {
      badge: "03 — Express Commitment",
      title: "Functional AI prototype in 48h",
      subtitle: "We deliver an operational POC in two business days. Not convinced? We reiterate at no cost until validation or you keep the prototype for free.",
      guarantees: {
        prototype: "Prototype delivered",
        guarantee: "Satisfied or free",
        poc: "Immediate operational"
      },
      button: "Challenge accepted - Start now",
      features: "🚀 Immediate launch • ⚡ Guaranteed results • 🎯 Custom made",
      disclaimer: "Free prototype if not satisfied • No commitment"
    },
    footer: {
      description: "Your trusted partner for intelligent automation and custom AI solutions.",
      quickLinks: "Quick Links", 
      contact: "Contact",
      followUs: "Follow Us",
      rights: "All rights reserved."
    },
    process: {
      badge: "Our Process",
      title: "How We Proceed",
      subtitle: "A streamlined process to transform your business with AI",
      steps: {
        consultation: {
          title: "Consultation",
          description: "We analyze your needs and identify automation opportunities."
        },
        development: {
          title: "Development", 
          description: "We create your personalized AI solution in 48h."
        },
        deployment: {
          title: "Deployment",
          description: "We integrate the solution into your existing environment."
        },
        support: {
          title: "Support",
          description: "We ensure continuous monitoring and optimization."
        }
      }
    },
    faq: {
      badge: "FAQ",
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about our services"
    },
    contact: {
      badge: "Contact",
      title: "Ready to Get Started?",
      subtitle: "Contact us to discuss your project",
      formButton: "Send Message"
    },
    modernCta: {
      title: "Ready to Transform Your Business?",
      subtitle: "Start your AI transformation today",
      button: "Get Started Now"
    }
  },
  es: {
    header: {
      keywords: ["Inteligencia", "Automatización", "Innovación", "Rendimiento"],
      specialistsIn: "Especialistas en",
      navigation: {
        home: "Inicio",
        services: "Servicios",
        process: "Proceso",
        contact: "Contacto"
      },
      cta: "Programar una llamada"
    },
    hero: {
      badge: "Agencia IA de Nueva Generación",
      title1: "Automatiza.",
      title2: "Libera.",
      title3: "Progresa.",
      subtitle1: "Tu socio de confianza para convertirte en una empresa IA-first.",
      subtitle2: "Especialistas en",
      capabilities: [
        "Automatización Inteligente",
        "Agentes IA Autónomos",
        "Estrategias Personalizadas",
        "Soluciones a Medida"
      ],
      cta1: "Inicia Tu Transformación",
      cta1Mobile: "Empezar Ahora",
      cta2: "Ver Nuestro Enfoque",
      stats: {
        projects: "Proyectos Exitosos",
        prototype: "Prototipo Entregado",
        support: "Soporte Dedicado"
      }
    },
    services: {
      badge: "Nuestras Soluciones",
      title: "Automatiza Tus Procesos Con IA",
      subtitle: "Ahorra tiempo, reduce errores, concéntrate en lo esencial",
      automation: {
        title: "Automatización Inteligente",
        description: "Sistemas IA que automatizan tus tareas repetitivas y liberan tiempo para tu equipo.",
        features: ["Automatización 24/7", "Integración Simple", "Mantenimiento Asegurado"]
      },
      customSolutions: {
        title: "Soluciones a Medida",
        description: "Creamos herramientas IA específicamente adaptadas a tus procesos de negocio existentes.",
        features: ["Análisis de Necesidades", "Desarrollo Rápido", "Formación Incluida"]
      },
      consultation: {
        title: "Consultoría Estratégica",
        description: "Identificamos las oportunidades de automatización que tendrán más impacto en tu empresa.",
        features: ["Auditoría Gratuita", "Plan de Acción", "Acompañamiento"]
      },
      learnMore: "Saber más",
      ctaTitle: "Automatiza Tus Tareas Ahora",
      ctaSubtitle: "Descubre cómo la IA puede simplificar tus procesos diarios",
      ctaButton: "Empezar Ahora Gratis",
      ctaButtonMobile: "Empezar"
    },
    cta: {
      badge: "03 — Compromiso Express",
      title: "Prototipo IA funcional en 48h",
      subtitle: "Entregamos un POC operacional en dos días hábiles. ¿No convencido? Reiteramos sin costo hasta la validación o te quedas con el prototipo gratis.",
      guarantees: {
        prototype: "Prototipo entregado",
        guarantee: "Satisfecho o gratis",
        poc: "Operacional inmediato"
      },
      button: "Desafío aceptado - Empezar ahora",
      features: "🚀 Lanzamiento inmediato • ⚡ Resultados garantizados • 🎯 A medida",
      disclaimer: "Prototipo gratis si no estás satisfecho • Sin compromiso"
    },
    footer: {
      description: "Tu socio de confianza para automatización inteligente y soluciones IA personalizadas.",
      quickLinks: "Enlaces Rápidos",
      contact: "Contacto", 
      followUs: "Síguenos",
      rights: "Todos los derechos reservados."
    },
    process: {
      badge: "Nuestro Proceso",
      title: "Cómo Procedemos",
      subtitle: "Un proceso simplificado para transformar tu empresa con IA",
      steps: {
        consultation: {
          title: "Consulta",
          description: "Analizamos tus necesidades e identificamos oportunidades de automatización."
        },
        development: {
          title: "Desarrollo",
          description: "Creamos tu solución IA personalizada en 48h."
        },
        deployment: {
          title: "Despliegue", 
          description: "Integramos la solución en tu entorno existente."
        },
        support: {
          title: "Soporte",
          description: "Aseguramos el monitoreo y optimización continua."
        }
      }
    },
    faq: {
      badge: "FAQ",
      title: "Preguntas Frecuentes",
      subtitle: "Todo lo que necesitas saber sobre nuestros servicios"
    },
    contact: {
      badge: "Contacto",
      title: "¿Listo para Empezar?",
      subtitle: "Contáctanos para discutir tu proyecto",
      formButton: "Enviar Mensaje"
    },
    modernCta: {
      title: "¿Listo para Transformar Tu Empresa?",
      subtitle: "Comienza tu transformación IA hoy",
      button: "Empezar Ahora"
    }
  }
};

export const getTranslation = (language: Language): Translations => {
  return translations[language];
};