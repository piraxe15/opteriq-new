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
  };
  // Footer
  footer: {
    description: string;
    quickLinks: string;
    contact: string;
    followUs: string;
    rights: string;
    specialistsIn: string;
    bookCall: string;
    location: string;
    createdWith: string;
    inCanada: string;
    servicesAvailable: string;
  };
  // Process Section
  process: {
    badge: string;
    title: string;
    subtitle: string;
    steps: {
      identify: {
        title: string;
        subtitle: string;
        description: string;
      };
      educate: {
        title: string;
        subtitle: string;
        description: string;
      };
      develop: {
        title: string;
        subtitle: string;
        description: string;
      };
    };
    conclusion: {
      title: string;
      subtitle: string;
      description: string;
    };
  };
  // FAQ Section
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      category: string;
      question: string;
      answer: string;
    }[];
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
  };
  // Contact Section
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    form: {
      title: string;
      firstName: string;
      lastName: string;
      email: string;
      company: string;
      message: string;
      messagePlaceholder: string;
      submitting: string;
      submit: string;
    };
    info: {
      title: string;
      email: string;
      phone: string;
      phoneAction: string;
      location: string;
      locationValue: string;
      guaranteeTitle: string;
      guaranteeText: string;
    };
  };
  // Toast messages
  toast: {
    success: string;
    description: string;
  };
  // Modern CTA Section
  modernCta: {
    badge: string;
    title: string;
    subtitle: string;
    button: string;
    stats: {
      prototype: string;
      roi: string;
      support: string;
    };
    quote: string;
    signature: string;
    features: {
      immediate: string;
      guaranteed: string;
      custom: string;
    };
    guarantee: string;
  };
  // Tech Stack Section
  techStack: {
    badge: string;
    title: string;
    subtitle: string;
    tools: {
      name: string;
      description: string;
    }[];
  };
  // Popular Automations Section
  popularAutomations: {
    badge: string;
    title: string;
    subtitle: string;
    automations: {
      title: string;
      description: string;
      tags: string[];
    }[];
    cta: string;
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
        process: "Processus",
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
      cta1: "Démarrer Maintenant",
      cta1Mobile: "Démarrer",
      cta2: "Voir Notre Approche",
      stats: {
        projects: "∞ Possibilités Infinies",
        prototype: "72h Prototype",
        support: "Support Dédié 24/7"
      }
    },
    services: {
      badge: "Nos Solutions",
      title: "Automatisez Vos Processus Avec l'IA",
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
      learnMore: "En savoir plus"
    },
    footer: {
      description: "Votre partenaire de confiance pour l'automatisation intelligente et les solutions IA sur-mesure.",
      quickLinks: "Liens Rapides",
      contact: "Contact",
      followUs: "Suivez-nous",
      rights: "Tous droits réservés.",
      specialistsIn: "Spécialistes en",
      bookCall: "Réserver un appel",
      location: "Canada Québec & International",
      createdWith: "Créé avec",
      inCanada: "au Canada",
      servicesAvailable: "Services disponibles 24/7"
    },
    process: {
      badge: "Notre Processus",
      title: "Comment Nous Procédons",
      subtitle: "Un processus simplifié pour transformer votre entreprise avec l'IA",
      steps: {
        identify: {
          title: "IDENTIFIER",
          subtitle: "Opportunités IA", 
          description: "Nous vous aidons à identifier les opportunités IA à fort impact et construisons une stratégie de transformation IA étape par étape pour les concrétiser."
        },
        educate: {
          title: "ÉDUQUER",
          subtitle: "Votre Équipe",
          description: "Nous formons et accompagnons votre équipe avec les bons outils et le savoir-faire pour intégrer l'IA dans toute votre organisation."
        },
        develop: {
          title: "DÉVELOPPER", 
          subtitle: "Solutions IA",
          description: "Nous tirons parti de notre vaste expérience et réseau pour développer des systèmes IA personnalisés qui font vraiment bouger les choses dans votre entreprise."
        }
      },
      conclusion: {
        title: "Nous Ne Sommes Pas Une Société De Conseil IA",
        subtitle: "Nous sommes bien plus que cela.",
        description: "Nous plaçons l'IA au centre de tout ce que nous faisons."
      }
    },
    faq: {
      badge: "FAQ",
      title: "Questions Fréquentes",
      subtitle: "Tout ce que vous devez savoir sur nos services",
      items: [
        {
          category: "Automatisation Intelligente",
          question: "Comment l'automatisation IA peut-elle transformer mon entreprise ?",
          answer: "Notre automatisation intelligente analyse vos processus existants et automatise vos tâches répétitives. Nous concevons des solutions sur-mesure qui s'intègrent parfaitement à vos systèmes actuels, fonctionnent 24/7 et libèrent vos équipes pour des tâches à forte valeur ajoutée."
        },
        {
          category: "Solutions Sur-Mesure",
          question: "Combien de temps faut-il pour développer une solution ?",
          answer: "Nous livrons un prototype fonctionnel en 72 heures pour validation. Le développement complet prend généralement 2 à 4 semaines selon la complexité. Notre approche agile permet des ajustements rapides selon vos retours."
        },
        {
          category: "Consultation Stratégique",
          question: "Comment identifiez-vous les meilleures opportunités d'automatisation ?",
          answer: "Nous effectuons un audit complet gratuit de vos processus. Notre équipe d'experts analyse votre workflow actuel, identifie les goulots d'étranglement et priorise les automatisations selon leur impact potentiel sur votre productivité et ROI."
        },
        {
          category: "Automatisation & IA",
          question: "Quelles tâches peuvent être automatisées dans mon entreprise ?",
          answer: "Emails automatiques, facturation, support client, gestion des stocks, qualification des leads, reporting, saisie de données, planification, et bien plus. Pratiquement toute tâche répétitive peut être optimisée par l'IA."
        },
        {
          category: "Automatisation & IA", 
          question: "L'IA peut-elle remplacer mes employés ?",
          answer: "Non, l'IA libère vos équipes des tâches répétitives pour qu'elles se concentrent sur la stratégie, la créativité et les relations clients. C'est un outil d'augmentation, pas de remplacement."
        },
        {
          category: "Coûts & ROI",
          question: "Combien coûte une automatisation IA ?",
          answer: "À partir de 2000€ selon la complexité du projet. Le ROI est généralement récupéré en 3-6 mois grâce aux gains de productivité et réduction des erreurs."
        },
        {
          category: "Implémentation",
          question: "Combien de temps pour voir les premiers résultats ?",
          answer: "Prototype fonctionnel en 72h, premiers résultats mesurables en 1-2 semaines, déploiement complet en 2-4 semaines. Nous privilégions les gains rapides."
        },
        {
          category: "Implémentation",
          question: "Mes données sont-elles en sécurité ?",
          answer: "Absolument. Chiffrement bout-en-bout, conformité RGPD stricte, stockage sécurisé, accès contrôlés. Vos données restent confidentielles et protégées."
        },
        {
          category: "Technique",
          question: "Mes outils actuels sont-ils compatibles ?",
          answer: "90% des logiciels professionnels sont intégrables (CRM, ERP, outils marketing, etc.). Notre audit gratuit inclut l'analyse de compatibilité de votre stack technologique."
        },
        {
          category: "Technique",
          question: "Que se passe-t-il si ça ne fonctionne pas ?",
          answer: "Garantie satisfaction totale. Si le prototype ne vous convainc pas, vous le gardez gratuitement sans aucun engagement. Nous réitérons jusqu'à validation complète."
        },
        {
          category: "Résultats",
          question: "Quels gains puis-je espérer ?",
          answer: "60-80% de temps économisé sur les tâches automatisées, 95% d'erreurs en moins, équipes plus productives et engagées, ROI moyen de 300% la première année."
        },
        {
          category: "Résultats",
          question: "L'automatisation évolue-t-elle avec mon entreprise ?",
          answer: "Oui, nos solutions sont scalables. Ajustements et optimisations inclus la première année. L'IA s'adapte à la croissance de votre business."
        }
      ],
      ctaTitle: "Une Question Spécifique ?",
      ctaSubtitle: "Notre équipe est là pour vous accompagner dans votre transformation IA",
      ctaButton: "Contactez-nous directement"
    },
    contact: {
      badge: "Contact",
      title: "Prêt à Commencer ?", 
      subtitle: "Contactez-nous pour discuter de votre projet",
      form: {
        title: "Envoyez-nous un message",
        firstName: "Prénom",
        lastName: "Nom", 
        email: "Email professionnel",
        company: "Entreprise",
        message: "Décrivez votre projet",
        messagePlaceholder: "Quels sont vos défis actuels ? Quels processus souhaitez-vous automatiser ?",
        submitting: "Envoi en cours...",
        submit: "Envoyer le message"
      },
      info: {
        title: "Ou contactez-nous directement",
        email: "Email",
        phone: "Appel stratégique", 
        phoneAction: "Réserver un créneau",
        location: "Localisation",
        locationValue: "Canada Québec & International",
        guaranteeTitle: "Réponse Garantie",
        guaranteeText: "Nous répondons à tous les messages dans les 24 heures"
      }
    },
    toast: {
      success: "Message envoyé !",
      description: "Nous vous répondrons dans les 24h."
    },
    modernCta: {
      badge: "Résultats Garantis",
      title: "Prêt à Transformer Votre Entreprise ?",
      subtitle: "Commencez votre transformation IA dès aujourd'hui avec notre garantie de satisfaction totale",
      button: "Démarrer Maintenant",
      stats: {
        prototype: "Prototype Livré",
        roi: "Garantie Résultats", 
        support: "Support Dédié"
      },
      quote: "Ne laissez pas vos concurrents prendre de l'avance. L'IA n'est plus l'avenir, c'est le présent.",
      signature: "— L'équipe Opteriq",
      features: {
        immediate: "Lancement immédiat",
        guaranteed: "Résultats garantis",
        custom: "Sur mesure"
      },
      guarantee: "Prototype gratuit si non satisfait • Sans engagement"
    },
    techStack: {
      badge: "Notre Stack",
      title: "Technologies de Pointe",
      subtitle: "Les outils que nous maîtrisons pour créer vos automatisations",
      tools: [
        {
          name: "n8n",
          description: "Workflows visuels pour automatisations complexes"
        },
        {
          name: "Make",
          description: "Intégrations avancées entre applications"
        },
        {
          name: "Custom APIs",
          description: "Solutions sur-mesure pour besoins spécifiques"
        },
        {
          name: "Webhooks",
          description: "Communications temps réel entre systèmes"
        },
        {
          name: "Databases",
          description: "Stockage et traitement de données optimisés"
        },
        {
          name: "Cursor AI",
          description: "Développement accéléré par l'intelligence artificielle"
        }
      ]
    },
    popularAutomations: {
      badge: "Solutions Prêtes",
      title: "Automatisations Populaires",
      subtitle: "Des workflows éprouvés que vous pouvez déployer immédiatement",
      automations: [
        {
          title: "E-commerce → Gestion Stock",
          description: "Synchronisation automatique entre boutique en ligne et inventaire",
          tags: ["Shopify", "WooCommerce", "Inventaire"]
        },
        {
          title: "CRM → Email Marketing",
          description: "Segmentation automatique et campagnes personnalisées",
          tags: ["HubSpot", "Mailchimp", "Automatisation"]
        },
        {
          title: "Lead Gen → Qualification",
          description: "Scoring et routage automatique des prospects",
          tags: ["Leads", "Scoring", "CRM"]
        },
        {
          title: "Support → Ticketing",
          description: "Tri automatique et escalade des demandes client",
          tags: ["Zendesk", "Support", "Chatbot"]
        },
        {
          title: "Social → Analytics",
          description: "Collecte et analyse automatique des performances sociales",
          tags: ["Facebook", "Instagram", "Analytics"]
        },
        {
          title: "RDV → Confirmations",
          description: "Rappels et confirmations automatiques de rendez-vous",
          tags: ["Calendly", "SMS", "Email"]
        }
      ],
      cta: "Voir Tous les Workflows"
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
        projects: "Infinite Possibilities",
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
      learnMore: "Learn more"
    },
    footer: {
      description: "Your trusted partner for intelligent automation and custom AI solutions.",
      quickLinks: "Quick Links", 
      contact: "Contact",
      followUs: "Follow Us",
      rights: "All rights reserved.",
      specialistsIn: "Specialists in",
      bookCall: "Book a call",
      location: "Canada Quebec & International",
      createdWith: "Made with",
      inCanada: "in Canada",
      servicesAvailable: "Services available 24/7"
    },
    process: {
      badge: "Our Process",
      title: "How We Proceed",
      subtitle: "A streamlined process to transform your business with AI",
      steps: {
        identify: {
          title: "IDENTIFY",
          subtitle: "AI Opportunities",
          description: "We help you identify high-impact AI opportunities and build a step-by-step AI transformation strategy to realize them."
        },
        educate: {
          title: "EDUCATE", 
          subtitle: "Your Team",
          description: "We train and support your team with the right tools and know-how to integrate AI throughout your organization."
        },
        develop: {
          title: "DEVELOP",
          subtitle: "AI Solutions", 
          description: "We leverage our extensive experience and network to develop personalized AI systems that really make a difference in your business."
        }
      },
      conclusion: {
        title: "We Are Not An AI Consulting Company",
        subtitle: "We are much more than that.",
        description: "We place AI at the center of everything we do."
      }
    },
    faq: {
      badge: "FAQ",
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about our services",
      items: [
        {
          category: "Intelligent Automation",
          question: "How can AI automation transform my business?",
          answer: "Our intelligent automation analyzes your existing processes and automates your repetitive tasks. We design custom solutions that integrate perfectly with your current systems, work 24/7 and free your teams for high-value tasks."
        },
        {
          category: "Custom Solutions",
          question: "How long does it take to develop a solution?", 
          answer: "We deliver a functional prototype in 72h, then iterate based on your feedback. Full development typically takes 2-6 weeks depending on complexity, with an agile approach and frequent deliveries."
        },
        {
          category: "Strategic Consultation",
          question: "How do you identify the best automation opportunities?",
          answer: "We start with a free audit of your processes, analyze your friction points, calculate the potential ROI of each opportunity, and create a prioritized action plan. Our support guides you through every step of the transformation."
        }
      ],
      ctaTitle: "A Specific Question?",
      ctaSubtitle: "Our team is here to support you in your AI transformation",
      ctaButton: "Contact us directly"
    },
    contact: {
      badge: "Contact", 
      title: "Ready to Get Started?",
      subtitle: "Contact us to discuss your project",
      form: {
        title: "Send us a message",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Professional Email", 
        company: "Company",
        message: "Describe your project",
        messagePlaceholder: "What are your current challenges? Which processes would you like to automate?",
        submitting: "Sending...",
        submit: "Send Message"
      },
      info: {
        title: "Or contact us directly",
        email: "Email",
        phone: "Strategic Call",
        phoneAction: "Book a slot", 
        location: "Location",
        locationValue: "Canada Quebec & International",
        guaranteeTitle: "Guaranteed Response",
        guaranteeText: "We respond to all messages within 24 hours"
      }
    },
    toast: {
      success: "Message sent!",
      description: "We will respond within 24h."
    },
    modernCta: {
      badge: "Guaranteed Results",
      title: "Ready to Transform Your Business?",
      subtitle: "Start your AI transformation today with our complete satisfaction guarantee",
      button: "Start My AI Transformation",
      stats: {
        prototype: "Prototype Delivered",
        roi: "Results Guarantee",
        support: "Dedicated Support"
      },
      quote: "Don't let your competitors get ahead. AI is no longer the future, it's the present.",
      signature: "— The Opteriq Team",
      features: {
        immediate: "Immediate Launch",
        guaranteed: "Guaranteed Results",
        custom: "Custom Made"
      },
      guarantee: "Free prototype if not satisfied • No commitment"
    },
    techStack: {
      badge: "Our Stack",
      title: "Cutting-Edge Technologies",
      subtitle: "The tools we master to create your automations",
      tools: [
        {
          name: "n8n",
          description: "Visual workflows for complex automations"
        },
        {
          name: "Make", 
          description: "Advanced integrations between applications"
        },
        {
          name: "Custom APIs",
          description: "Tailor-made solutions for specific needs"
        },
        {
          name: "Webhooks",
          description: "Real-time communications between systems"
        },
        {
          name: "Databases",
          description: "Optimized data storage and processing"
        },
        {
          name: "Cursor AI",
          description: "AI-accelerated development"
        }
      ]
    },
    popularAutomations: {
      badge: "Ready Solutions",
      title: "Popular Automations",
      subtitle: "Proven workflows you can deploy immediately",
      automations: [
        {
          title: "E-commerce → Inventory Management",
          description: "Automatic synchronization between online store and inventory",
          tags: ["Shopify", "WooCommerce", "Inventory"]
        },
        {
          title: "CRM → Email Marketing",
          description: "Automatic segmentation and personalized campaigns",
          tags: ["HubSpot", "Mailchimp", "Automation"]
        },
        {
          title: "Lead Gen → Qualification",
          description: "Automatic scoring and prospect routing",
          tags: ["Leads", "Scoring", "CRM"]
        },
        {
          title: "Support → Ticketing",
          description: "Automatic sorting and escalation of customer requests",
          tags: ["Zendesk", "Support", "Chatbot"]
        },
        {
          title: "Social → Analytics",
          description: "Automatic collection and analysis of social performance",
          tags: ["Facebook", "Instagram", "Analytics"]
        },
        {
          title: "Appointments → Confirmations",
          description: "Automatic appointment reminders and confirmations",
          tags: ["Calendly", "SMS", "Email"]
        }
      ],
      cta: "View All Workflows"
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
        projects: "Posibilidades Infinitas",
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
      learnMore: "Saber más"
    },
    footer: {
      description: "Tu socio de confianza para automatización inteligente y soluciones IA personalizadas.",
      quickLinks: "Enlaces Rápidos",
      contact: "Contacto", 
      followUs: "Síguenos",
      rights: "Todos los derechos reservados.",
      specialistsIn: "Especialistas en",
      bookCall: "Reservar una llamada",
      location: "Canadá Quebec e Internacional",
      createdWith: "Hecho con",
      inCanada: "en Canadá",
      servicesAvailable: "Servicios disponibles 24/7"
    },
    process: {
      badge: "Nuestro Proceso",
      title: "Cómo Procedemos",
      subtitle: "Un proceso simplificado para transformar tu empresa con IA",
      steps: {
        identify: {
          title: "IDENTIFICAR",
          subtitle: "Oportunidades IA",
          description: "Te ayudamos a identificar oportunidades de IA de alto impacto y construimos una estrategia de transformación IA paso a paso para realizarlas."
        },
        educate: {
          title: "EDUCAR",
          subtitle: "Tu Equipo", 
          description: "Formamos y acompañamos a tu equipo con las herramientas adecuadas y el conocimiento para integrar la IA en toda tu organización."
        },
        develop: {
          title: "DESARROLLAR",
          subtitle: "Soluciones IA",
          description: "Aprovechamos nuestra amplia experiencia y red para desarrollar sistemas de IA personalizados que realmente marcan la diferencia en tu empresa."
        }
      },
      conclusion: {
        title: "No Somos Una Empresa De Consultoría IA",
        subtitle: "Somos mucho más que eso.",
        description: "Colocamos la IA en el centro de todo lo que hacemos."
      }
    },
    faq: {
      badge: "FAQ",
      title: "Preguntas Frecuentes",
      subtitle: "Todo lo que necesitas saber sobre nuestros servicios",
      items: [
        {
          category: "Automatización Inteligente",
          question: "¿Cómo puede la automatización IA transformar mi empresa?",
          answer: "Nuestra automatización inteligente analiza tus procesos existentes y automatiza tareas repetitivas. Diseñamos soluciones personalizadas que se integran perfectamente con tus sistemas actuales, funcionan 24/7 y liberan a tus equipos para tareas de alto valor."
        },
        {
          category: "Soluciones Personalizadas",
          question: "¿Cuánto tiempo lleva desarrollar una solución?",
          answer: "Entregamos un prototipo funcional en 72 horas para validación. El desarrollo completo toma generalmente 2-4 semanas según la complejidad. Nuestro enfoque ágil permite ajustes rápidos según tus comentarios."
        },
        {
          category: "Consultoría Estratégica",
          question: "¿Cómo identifican las mejores oportunidades de automatización?",
          answer: "Realizamos una auditoría completa gratuita de tus procesos. Nuestro equipo de expertos analiza tu flujo de trabajo actual, identifica cuellos de botella y prioriza automatizaciones según su impacto potencial en productividad y ROI."
        },
        {
          category: "Automatización e IA",
          question: "¿Qué tareas pueden automatizarse en mi empresa?",
          answer: "Emails automáticos, facturación, soporte al cliente, gestión de inventario, calificación de leads, reportes, entrada de datos, planificación y mucho más. Prácticamente cualquier tarea repetitiva puede optimizarse con IA."
        },
        {
          category: "Automatización e IA",
          question: "¿Puede la IA reemplazar a mis empleados?",
          answer: "No, la IA libera a tus equipos de tareas repetitivas para que se concentren en estrategia, creatividad y relaciones con clientes. Es una herramienta de aumento, no de reemplazo."
        },
        {
          category: "Costos y ROI",
          question: "¿Cuánto cuesta la automatización IA?",
          answer: "Desde €2000 según la complejidad del proyecto. El ROI se recupera típicamente en 3-6 meses a través de ganancias en productividad y reducción de errores."
        },
        {
          category: "Implementación",
          question: "¿Cuánto tiempo para ver los primeros resultados?",
          answer: "Prototipo funcional en 72h, primeros resultados medibles en 1-2 semanas, implementación completa en 2-4 semanas. Priorizamos victorias rápidas."
        },
        {
          category: "Implementación",
          question: "¿Están seguros mis datos?",
          answer: "Absolutamente. Cifrado de extremo a extremo, cumplimiento estricto de GDPR, almacenamiento seguro, acceso controlado. Tus datos permanecen confidenciales y protegidos."
        },
        {
          category: "Técnico",
          question: "¿Son compatibles mis herramientas actuales?",
          answer: "90% del software profesional es integrable (CRM, ERP, herramientas de marketing, etc.). Nuestra auditoría gratuita incluye análisis de compatibilidad de tu stack tecnológico."
        },
        {
          category: "Técnico",
          question: "¿Qué pasa si no funciona?",
          answer: "Garantía de satisfacción total. Si el prototipo no te convence, lo mantienes gratis sin compromiso. Iteramos hasta validación completa."
        },
        {
          category: "Resultados",
          question: "¿Qué ganancias puedo esperar?",
          answer: "60-80% de tiempo ahorrado en tareas automatizadas, 95% menos errores, equipos más productivos y comprometidos, ROI promedio de 300% en el primer año."
        },
        {
          category: "Resultados",
          question: "¿La automatización evoluciona con mi empresa?",
          answer: "Sí, nuestras soluciones son escalables. Ajustes y optimizaciones incluidos el primer año. La IA se adapta al crecimiento de tu negocio."
        }
      ],
      ctaTitle: "¿Una Pregunta Específica?",
      ctaSubtitle: "Nuestro equipo está aquí para acompañarte en tu transformación IA",
      ctaButton: "Contáctanos directamente"
    },
    contact: {
      badge: "Contacto",
      title: "¿Listo para Empezar?",
      subtitle: "Contáctanos para discutir tu proyecto",
      form: {
        title: "Envíanos un mensaje",
        firstName: "Nombre",
        lastName: "Apellido",
        email: "Email Profesional",
        company: "Empresa", 
        message: "Describe tu proyecto",
        messagePlaceholder: "¿Cuáles son tus desafíos actuales? ¿Qué procesos te gustaría automatizar?",
        submitting: "Enviando...",
        submit: "Enviar Mensaje"
      },
      info: {
        title: "O contáctanos directamente",
        email: "Email",
        phone: "Llamada Estratégica",
        phoneAction: "Reservar una cita",
        location: "Ubicación",
        locationValue: "Canadá Quebec e Internacional", 
        guaranteeTitle: "Respuesta Garantizada",
        guaranteeText: "Respondemos a todos los mensajes en 24 horas"
      }
    },
    toast: {
      success: "¡Mensaje enviado!",
      description: "Responderemos en 24h."
    },
    modernCta: {
      badge: "Resultados Garantizados",
      title: "¿Listo para Transformar Tu Empresa?",
      subtitle: "Comienza tu transformación IA hoy con nuestra garantía de satisfacción total",
      button: "Iniciar Mi Transformación IA",
      stats: {
        prototype: "Prototipo Entregado",
        roi: "Garantía de Resultados",
        support: "Soporte Dedicado"
      },
      quote: "No dejes que tus competidores se adelanten. La IA ya no es el futuro, es el presente.",
      signature: "— El equipo Opteriq",
      features: {
        immediate: "Lanzamiento inmediato",
        guaranteed: "Resultados garantizados",
        custom: "A medida"
      },
      guarantee: "Prototipo gratuito si no estás satisfecho • Sin compromiso"
    },
    techStack: {
      badge: "Nuestro Stack",
      title: "Tecnologías de Vanguardia", 
      subtitle: "Las herramientas que dominamos para crear tus automatizaciones",
      tools: [
        {
          name: "n8n",
          description: "Flujos visuales para automatizaciones complejas"
        },
        {
          name: "Make",
          description: "Integraciones avanzadas entre aplicaciones"
        },
        {
          name: "APIs Personalizadas",
          description: "Soluciones a medida para necesidades específicas"
        },
        {
          name: "Webhooks",
          description: "Comunicaciones en tiempo real entre sistemas"
        },
        {
          name: "Bases de Datos",
          description: "Almacenamiento y procesamiento optimizado de datos"
        },
        {
          name: "Cursor AI",
          description: "Desarrollo acelerado por inteligencia artificial"
        }
      ]
    },
    popularAutomations: {
      badge: "Soluciones Listas",
      title: "Automatizaciones Populares",
      subtitle: "Flujos probados que puedes implementar inmediatamente",
      automations: [
        {
          title: "E-commerce → Gestión Stock",
          description: "Sincronización automática entre tienda online e inventario",
          tags: ["Shopify", "WooCommerce", "Inventario"]
        },
        {
          title: "CRM → Email Marketing",
          description: "Segmentación automática y campañas personalizadas",
          tags: ["HubSpot", "Mailchimp", "Automatización"]
        },
        {
          title: "Lead Gen → Calificación",
          description: "Puntuación automática y enrutamiento de prospectos",
          tags: ["Leads", "Scoring", "CRM"]
        },
        {
          title: "Soporte → Ticketing",
          description: "Clasificación automática y escalada de solicitudes",
          tags: ["Zendesk", "Soporte", "Chatbot"]
        },
        {
          title: "Social → Analytics",
          description: "Recopilación y análisis automático del rendimiento social",
          tags: ["Facebook", "Instagram", "Analytics"]
        },
        {
          title: "Citas → Confirmaciones",
          description: "Recordatorios y confirmaciones automáticas de citas",
          tags: ["Calendly", "SMS", "Email"]
        }
      ],
      cta: "Ver Todos los Flujos"
    }
  }
};

export const getTranslation = (language: Language): Translations => {
  return translations[language];
};