import { Language } from '@/hooks/useLanguage';

export interface Translations {
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
}

export const translations: Record<Language, Translations> = {
  fr: {
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
    }
  },
  en: {
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
    }
  },
  es: {
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
    }
  },
  ar: {
    hero: {
      badge: "وكالة ذكاء اصطناعي من الجيل الجديد",
      title1: "أتمت.",
      title2: "حرر.",
      title3: "تقدم.",
      subtitle1: "شريكك الموثوق لتصبح شركة تعتمد على الذكاء الاصطناعي أولاً.",
      subtitle2: "متخصصون في",
      capabilities: [
        "الأتمتة الذكية",
        "وكلاء الذكاء الاصطناعي المستقلون",
        "استراتيجيات مخصصة",
        "حلول مصممة خصيصاً"
      ],
      cta1: "ابدأ تحولك",
      cta1Mobile: "ابدأ الآن",
      cta2: "شاهد نهجنا",
      stats: {
        projects: "مشاريع ناجحة",
        prototype: "نموذج أولي مُسلم",
        support: "دعم مخصص"
      }
    },
    services: {
      badge: "حلولنا",
      title: "أتمت عملياتك بالذكاء الاصطناعي",
      subtitle: "وفر الوقت، قلل الأخطاء، ركز على الأساسيات",
      automation: {
        title: "الأتمتة الذكية",
        description: "أنظمة ذكاء اصطناعي تؤتمت مهامك المتكررة وتوفر الوقت لفريقك.",
        features: ["أتمتة 24/7", "تكامل بسيط", "صيانة مضمونة"]
      },
      customSolutions: {
        title: "حلول مصممة خصيصاً",
        description: "نقوم بإنشاء أدوات ذكاء اصطناعي مصممة خصيصاً لعمليات عملك الحالية.",
        features: ["تحليل الاحتياجات", "تطوير سريع", "تدريب مشمول"]
      },
      consultation: {
        title: "استشارة استراتيجية",
        description: "نحدد فرص الأتمتة التي ستؤثر بشكل أكبر على شركتك.",
        features: ["تدقيق مجاني", "خطة عمل", "مرافقة"]
      },
      learnMore: "اعرف المزيد",
      ctaTitle: "أتمت مهامك الآن",
      ctaSubtitle: "اكتشف كيف يمكن للذكاء الاصطناعي تبسيط عملياتك اليومية",
      ctaButton: "ابدأ الآن مجاناً",
      ctaButtonMobile: "ابدأ"
    },
    cta: {
      badge: "03 — التزام سريع",
      title: "نموذج أولي للذكاء الاصطناعي يعمل في 48 ساعة",
      subtitle: "نقوم بتسليم نموذج أولي تشغيلي في يومي عمل. غير مقتنع؟ نعيد المحاولة بدون تكلفة حتى التحقق أو تحتفظ بالنموذج الأولي مجاناً.",
      guarantees: {
        prototype: "نموذج أولي مُسلم",
        guarantee: "راضٍ أو مجاناً",
        poc: "تشغيلي فوري"
      },
      button: "التحدي مقبول - ابدأ الآن",
      features: "🚀 إطلاق فوري • ⚡ نتائج مضمونة • 🎯 مصمم خصيصاً",
      disclaimer: "نموذج أولي مجاني إذا لم تكن راضياً • بدون التزام"
    }
  }
};

export const getTranslation = (language: Language): Translations => {
  return translations[language];
};