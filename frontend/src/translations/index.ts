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
  // Modern CTA
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
  };
  // Toast messages
  toast: {
    success: string;
    description: string;
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
      learnMore: "En savoir plus"
    },
    cta: {
      badge: "03 — Engagement Express",
      title: "Prototype IA fonctionnel en 72h",
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
          answer: "Nous livrons un prototype fonctionnel en 72h, puis itérons selon vos retours. Le développement complet prend généralement 2-6 semaines selon la complexité, avec une approche agile et des livraisons fréquentes."
        },
        {
          category: "Consultation Stratégique",
          question: "Comment identifiez-vous les meilleures opportunités d'automatisation ?", 
          answer: "Nous commençons par un audit gratuit de vos processus, analysons vos points de friction, calculons le ROI potentiel de chaque opportunité, et créons un plan d'action priorisé. Notre accompagnement vous guide à chaque étape de la transformation."
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
      subtitle: "Commencez votre transformation IA dès aujourd'hui",
      button: "Démarrer Maintenant",
      stats: {
        prototype: "Prototype Livré",
        roi: "Garantie Résultats", 
        support: "Support Dédié"
      },
      quote: "Ne laissez pas vos concurrents prendre de l'avance. L'IA n'est plus l'avenir, c'est le présent.",
      signature: "— L'équipe Opteriq"
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
      learnMore: "Learn more"
    },
    cta: {
      badge: "03 — Express Commitment",
      title: "Functional AI prototype in 72h",
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
      subtitle: "Start your AI transformation today",
      button: "Get Started Now",
      stats: {
        prototype: "Prototype Delivered",
        roi: "Results Guarantee",
        support: "Dedicated Support"
      },
      quote: "Don't let your competitors get ahead. AI is no longer the future, it's the present.",
      signature: "— The Opteriq Team"
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
      learnMore: "Saber más"
    },
    cta: {
      badge: "03 — Compromiso Express",
      title: "Prototipo IA funcional en 72h",
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
          answer: "Nuestra automatización inteligente analiza tus procesos existentes y automatiza tus tareas repetitivas. Diseñamos soluciones personalizadas que se integran perfectamente con tus sistemas actuales, funcionan 24/7 y liberan a tus equipos para tareas de alto valor."
        },
        {
          category: "Soluciones a Medida",
          question: "¿Cuánto tiempo toma desarrollar una solución?",
          answer: "Entregamos un prototipo funcional en 72h, luego iteramos según tus comentarios. El desarrollo completo generalmente toma 2-6 semanas dependiendo de la complejidad, con un enfoque ágil y entregas frecuentes."
        },
        {
          category: "Consultoría Estratégica", 
          question: "¿Cómo identifican las mejores oportunidades de automatización?",
          answer: "Comenzamos con una auditoría gratuita de tus procesos, analizamos tus puntos de fricción, calculamos el ROI potencial de cada oportunidad, y creamos un plan de acción priorizado. Nuestro acompañamiento te guía en cada paso de la transformación."
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
      subtitle: "Comienza tu transformación IA hoy",
      button: "Empezar Ahora",
      stats: {
        prototype: "Prototipo Entregado",
        roi: "Garantía de Resultados",
        support: "Soporte Dedicado"
      },
      quote: "No dejes que tus competidores se adelanten. La IA ya no es el futuro, es el presente.",
      signature: "— El equipo Opteriq"
    }
  }
};

export const getTranslation = (language: Language): Translations => {
  return translations[language];
};