/**
 * Company Configuration - ConsultMetal
 *
 * Single source of truth for ALL dynamic data
 * Supports bilingual content (English/French)
 *
 * UPDATE THIS FILE TO CHANGE APPLICATION CONTENT
 */

export const companyConfig = {
  // ========================================
  // BUSINESS INFORMATION
  // ========================================
  business: {
    name: {
      en: "Consult Metal",
      fr: "Consult Metal",
    },
    establishedYear: "20+ years",
    logo: "/images/logo.svg",
    tagline: {
      en: "Precision Manufacturing Solutions",
      fr: "Solutions de fabrication de précision",
    },
  },

  // ========================================
  // IMAGE ASSETS
  // ========================================
  imageAssets: {
    // Home Page Images
    home: {
      hero: {
        background: "/images/home/hero-bg.jpg",
        video: "/videos/manufacturing-process.mp4",
      },
      stats: {
        background: "/images/home/stats-bg.jpg",
      },
      services: {
        background: "/images/home/services-preview-bg.jpg",
      },
      about: {
        image: "/images/home/about-preview.png",
      },
      products: {
        background: "/images/home/products-showcase-bg.jpg",
      },
      video: {
        thumbnail: "/images/home/video-thumbnail.jpg",
      },
      testimonials: {
        background: "/images/home/testimonials-bg.jpg",
        clients: [
          "/images/home/clients/client-1.png",
          "/images/home/clients/client-2.png",
          "/images/home/clients/client-3.png",
          "/images/home/clients/client-4.png",
        ],
      },
    },
    // About Page Images
    about: {
      hero: "/images/about/about-hero.jpeg",
      background: "/images/about/team.jpg",
      mission: "/images/about/mission.jpg",
    },
    // Services Page Images
    services: {
      hero: "/images/services/services-hero.jpg",
      workflowDesign: "/images/services/workflow-design.png",
      productAnalysis: "/images/services/product-analysis.png",
      softwareRecommendation: "/images/services/software-recommendation.png",
      softwareDevelopment: "/images/services/software-development.png",
      capitalExpenditure: "/images/services/capital-expenditure.jpeg",
      cadDevelopment: "/images/services/cad-development.jpg",
    },
    // Products Page Images
    products: {
      hero: "/images/products/products-hero.jpg",
      nestingSoftware: "/images/products/nesting-software.png",
      cadCamSoftware: "/images/products/cad-cam-software.jpg",
    },
    // Contact Page Images
    contact: {
      hero: "/images/contact/contact-hero.jpg",
      background: "/images/contact/contact-bg.jpg",
    },
    // Shared/Common Images
    shared: {
      patterns: {
        dots: "/images/patterns/dots.svg",
        grid: "/images/patterns/grid.svg",
        geometric: "/images/patterns/geometric.svg",
      },
      overlays: {
        gradient: "/images/overlays/gradient.png",
        metallic: "/images/overlays/metallic.png",
      },
      icons: {
        check: "/images/icons/check.svg",
        arrow: "/images/icons/arrow.svg",
        quote: "/images/icons/quote.svg",
      },
    },
  },

  // ========================================
  // NAVIGATION MENU
  // ========================================
  navigation: {
    home: { en: "Home", fr: "Accueil" },
    aboutUs: { en: "About Us", fr: "À propos" },
    products: { en: "Products", fr: "Produits" },
    services: { en: "Services", fr: "Services" },
    contact: { en: "Contact", fr: "Contact" },
    bookConsultation: {
      en: "Book a Consultation",
      fr: "Réserver une consultation",
    }, // this takes user to Contact page.
    language: { en: "Français", fr: "English" },
  },

  // ========================================
  // HOME PAGE
  // ========================================
  homePage: {
    // Hero Section
    hero: {
      title: {
        en: "Precision Manufacturing",
        fr: "Fabrication de précision",
      },
      highlight: {
        en: "Solutions",
        fr: "Solutions",
      },
      subtitle: {
        en: "Transforming sheet metal manufacturing through cutting-edge software solutions and expert consultation",
        fr: "Transformer la fabrication de tôle grâce à des solutions logicielles de pointe et à des conseils d'experts",
      },
      description: {
        en: "With over 20 years of industry expertise, we deliver lean manufacturing solutions that drive efficiency, reduce costs, and maximize productivity across diverse manufacturing sectors.",
        fr: "Avec plus de 20 ans d'expertise dans l'industrie, nous livrons des solutions de fabrication lean qui améliorent l'efficacité, réduisent les coûts et maximisent la productivité dans divers secteurs manufacturiers.",
      },
      cta: {
        primary: {
          text: { en: "Explore Services", fr: "Explorer les services" },
          link: "/services",
        },
        secondary: {
          text: { en: "Contact Us", fr: "Contactez-nous" },
          link: "/contact",
        },
      },
    },

    // Stats Section
    stats: {
      label: {
        en: "OUR IMPACT",
        fr: "NOTRE IMPACT",
      },
      items: [
        {
          value: "20+",
          label: {
            en: "Years of Excellence",
            fr: "Années d'excellence",
          },
          description: {
            en: "Industry leadership and expertise",
            fr: "Leadership et expertise de l'industrie",
          },
        },
        {
          value: "500+",
          label: {
            en: "Projects Delivered",
            fr: "Projets livrés",
          },
          description: {
            en: "Successful implementations",
            fr: "Implémentations réussies",
          },
        },
        {
          value: "100%",
          label: {
            en: "Client Satisfaction",
            fr: "Satisfaction client",
          },
          description: {
            en: "Commitment to quality",
            fr: "Engagement envers la qualité",
          },
        },
        {
          value: "24/7",
          label: {
            en: "Support Available",
            fr: "Support disponible",
          },
          description: {
            en: "Always here to help",
            fr: "Toujours là pour vous aider",
          },
        },
      ],
    },

    // Services Preview
    servicesPreview: {
      label: {
        en: "WHAT WE OFFER",
        fr: "CE QUE NOUS OFFRONS",
      },
      title: {
        en: "Comprehensive Services",
        fr: "Services complets",
      },
      highlight: {
        en: "Manufacturing Solutions",
        fr: "Solutions de fabrication",
      },
      description: {
        en: "From workflow optimization to capital expenditure recommendations, we provide end-to-end manufacturing solutions tailored to your business needs.",
        fr: "De l'optimisation du flux de travail aux recommandations de dépenses en capital, nous fournissons des solutions de fabrication de bout en bout adaptées aux besoins de votre entreprise.",
      },
      cta: {
        text: { en: "View All Services", fr: "Voir tous les services" },
        link: "/services",
      },
      featured: [
        {
          id: "workflow-design",
          icon: "workflow",
          title: {
            en: "Workflow Design",
            fr: "Conception du flux de travail",
          },
          description: {
            en: "Optimize your manufacturing process with strategic machinery layout and production flow design.",
            fr: "Optimisez votre processus de fabrication avec une disposition stratégique des machines et une conception du flux de production.",
          },
        },
        {
          id: "product-analysis",
          icon: "analysis",
          title: {
            en: "Product Analysis",
            fr: "Analyse de produits",
          },
          description: {
            en: "Break down products to minimize operations, reduce costs, and maintain quality standards.",
            fr: "Décomposez les produits pour minimiser les opérations, réduire les coûts et maintenir les normes de qualité.",
          },
        },
        {
          id: "software-recommendation",
          icon: "software",
          title: {
            en: "Software Solutions",
            fr: "Solutions logicielles",
          },
          description: {
            en: "Get expert recommendations on CAD/CAM software platforms tailored to your operations.",
            fr: "Obtenez des recommandations d'experts sur les plateformes logicielles CAD/CAM adaptées à vos opérations.",
          },
        },
      ],
    },

    // About Preview
    aboutPreview: {
      label: {
        en: "WHO WE ARE",
        fr: "QUI NOUS SOMMES",
      },
      title: {
        en: "Your Partner in",
        fr: "Votre partenaire en",
      },
      highlight: {
        en: "Manufacturing Excellence",
        fr: "Excellence manufacturière",
      },
      description: {
        en: "With hands-on experience from the shop floor to management, we bring a unique perspective to manufacturing consulting. Our team combines technical expertise with practical knowledge to deliver solutions that work.",
        fr: "Avec une expérience pratique de l'atelier à la direction, nous apportons une perspective unique au conseil en fabrication. Notre équipe combine l'expertise technique avec des connaissances pratiques pour fournir des solutions qui fonctionnent.",
      },
      features: [
        {
          en: "20+ years of industry expertise",
          fr: "20+ ans d'expertise dans l'industrie",
        },
        {
          en: "Hands-on shop floor experience",
          fr: "Expérience pratique sur le terrain",
        },
        {
          en: "Cutting-edge software solutions",
          fr: "Solutions logicielles de pointe",
        },
        {
          en: "Lean manufacturing specialists",
          fr: "Spécialistes de la fabrication lean",
        },
      ],
      cta: {
        text: { en: "Learn More About Us", fr: "En savoir plus sur nous" },
        link: "/about",
      },
    },

    // Products Showcase
    productsShowcase: {
      label: {
        en: "OUR PRODUCTS",
        fr: "NOS PRODUITS",
      },
      title: {
        en: "Powerful Software",
        fr: "Logiciels puissants",
      },
      highlight: {
        en: "Solutions",
        fr: "Solutions",
      },
      description: {
        en: "Industry-leading software packages designed to optimize material yield, reduce setup times, and streamline your entire production process.",
        fr: "Progiciels de pointe conçus pour optimiser le rendement des matériaux, réduire les temps de configuration et rationaliser l'ensemble de votre processus de production.",
      },
      cta: {
        text: { en: "Explore Products", fr: "Explorer les produits" },
        link: "/products",
      },
    },

    // Video Section
    videoSection: {
      label: {
        en: "SEE US IN ACTION",
        fr: "VOYEZ-NOUS EN ACTION",
      },
      title: {
        en: "Manufacturing",
        fr: "Fabrication",
      },
      highlight: {
        en: "Transformation",
        fr: "Transformation",
      },
      description: {
        en: "Watch how our solutions transform manufacturing operations, from initial design through final production. See the power of optimized workflows and automated processes in action.",
        fr: "Découvrez comment nos solutions transforment les opérations de fabrication, de la conception initiale à la production finale. Voyez la puissance des flux de travail optimisés et des processus automatisés en action.",
      },
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnailAlt: {
        en: "Manufacturing process demonstration",
        fr: "Démonstration du processus de fabrication",
      },
    },

    // Testimonials Section
    testimonials: {
      label: {
        en: "CLIENT SUCCESS",
        fr: "SUCCÈS CLIENT",
      },
      title: {
        en: "Trusted by",
        fr: "Approuvé par",
      },
      highlight: {
        en: "Industry Leaders",
        fr: "Leaders de l'industrie",
      },
      description: {
        en: "See why manufacturing companies across North America trust Consult Metal for their software and consulting needs.",
        fr: "Découvrez pourquoi les entreprises manufacturières d'Amérique du Nord font confiance à Consult Metal pour leurs besoins en logiciels et en conseil.",
      },
      items: [
        {
          quote: {
            en: "Consult Metal transformed our production process. Their workflow design reduced our setup times by 40% and increased overall efficiency significantly.",
            fr: "Consult Metal a transformé notre processus de production. Leur conception de flux de travail a réduit nos temps de configuration de 40% et augmenté considérablement l'efficacité globale.",
          },
          author: {
            en: "John Smith",
            fr: "John Smith",
          },
          position: {
            en: "Production Manager, HVAC Manufacturing",
            fr: "Directeur de production, Fabrication CVC",
          },
        },
        {
          quote: {
            en: "The nesting software they recommended has been a game-changer. Material waste is down, production speed is up, and ROI was achieved within months.",
            fr: "Le logiciel d'imbrication qu'ils ont recommandé a changé la donne. Le gaspillage de matériaux est en baisse, la vitesse de production est en hausse et le retour sur investissement a été atteint en quelques mois.",
          },
          author: {
            en: "Marie Dubois",
            fr: "Marie Dubois",
          },
          position: {
            en: "Operations Director, Stainless Steel Equipment",
            fr: "Directrice des opérations, Équipement en acier inoxydable",
          },
        },
        {
          quote: {
            en: "Their hands-on experience shows in every recommendation. They understand manufacturing from the ground up, making their solutions practical and effective.",
            fr: "Leur expérience pratique se reflète dans chaque recommandation. Ils comprennent la fabrication de fond en comble, ce qui rend leurs solutions pratiques et efficaces.",
          },
          author: {
            en: "Robert Chen",
            fr: "Robert Chen",
          },
          position: {
            en: "Owner, Custom Job Shop",
            fr: "Propriétaire, Atelier d'usinage personnalisé",
          },
        },
      ],
    },

    // Final CTA
    finalCta: {
      title: {
        en: "Ready to Transform Your Manufacturing?",
        fr: "Prêt à transformer votre fabrication?",
      },
      subtitle: {
        en: "Let's discuss how our solutions can optimize your operations and drive measurable results.",
        fr: "Discutons de la façon dont nos solutions peuvent optimiser vos opérations et générer des résultats mesurables.",
      },
      cta: {
        primary: {
          text: {
            en: "Schedule Consultation",
            fr: "Planifier une consultation",
          },
          link: "/contact",
        },
        secondary: {
          text: { en: "Call Us Now", fr: "Appelez-nous maintenant" },
          link: "tel:+15145865982",
        },
      },
    },
  },

  // ========================================
  // PRODUCTS
  // ========================================
  productsPage: {
    headerDescription: {
      en: "Smart products for smarter production—built for speed, accuracy, and reliability",
      fr: "Produits intelligents pour une production plus intelligente—conçus pour la rapidité, la précision et la fiabilité",
    },
  },

  products: [
    {
      id: "nesting-software",
      name: {
        en: "Nesting Software",
        fr: "Logiciel de nidification",
      },
      slug: "nesting-software",
      category: {
        en: "Software Solutions",
        fr: "Solutions logicielles",
      },
      teaser: {
        en: "Advanced nesting solutions that optimize material yield and reduce setup times for punch, laser, routing, and bending operations.",
        fr: "Solutions d'imbrication avancées qui optimisent le rendement des matériaux et réduisent les temps de configuration pour les opérations de poinçonnage, laser, routage et pliage.",
      },
      description: {
        en: "This integrated manufacturing solution revolutionizes production for the metal, wood, and plastics industries. Our innovative approach is specifically designed to meet the evolving challenges faced by modern manufacturers. Through optimized punch, laser, routing, and bending solutions, this powerful tool is essential for any manufacturer determined to stay ahead of the competition and maximize operational efficiency.",
        fr: "Cette solution de fabrication intégrée révolutionne la production pour les industries du métal, du bois et des plastiques. Notre approche innovante est spécifiquement conçue pour relever les défis évolutifs auxquels sont confrontés les fabricants modernes. Grâce à des solutions optimisées de poinçonnage, laser, routage et pliage, cet outil puissant est essentiel pour tout fabricant déterminé à garder une longueur d'avance sur la concurrence et maximiser l'efficacité opérationnelle.",
      },
      features: {
        en: [
          "Rapid Model Import & Preparation: With just a few clicks, seamlessly import both 2D and 3D models and prepare them for cutting instantly. Our powerful nesting algorithms dramatically optimize material yield and reduce setup times compared to manual nesting, which is both time-consuming and significantly less efficient.",
          "Intelligent Tool Optimization: Advanced algorithms automatically optimize tool sorting and cutting sequences to minimize tool changes and reduce cutting paths. The software intelligently determines clamp repositioning and collision avoidance strategies, ensuring smooth, uninterrupted production.",
          "Automated Bending Sequences: Plan and optimize bending sequences in advance to maintain consistent production flow and eliminate bottlenecks. This proactive approach ensures your bending operations seamlessly integrate with cutting processes.",
          "Multi-Industry Compatibility: Designed to serve metal fabrication, woodworking, and plastics manufacturing with industry-specific optimization strategies.",
          "Material Yield Maximization: Sophisticated nesting algorithms ensure maximum material utilization, significantly reducing waste and lowering material costs.",
        ],
        fr: [
          "Importation et préparation rapides de modèles : En quelques clics, importez facilement des modèles 2D et 3D et préparez-les pour la découpe instantanément. Nos algorithmes d'imbrication puissants optimisent considérablement le rendement des matériaux et réduisent les temps de configuration par rapport à l'imbrication manuelle, qui est à la fois chronophage et nettement moins efficace.",
          "Optimisation intelligente des outils : Des algorithmes avancés optimisent automatiquement le tri des outils et les séquences de coupe pour minimiser les changements d'outils et réduire les chemins de coupe. Le logiciel détermine intelligemment les stratégies de repositionnement des pinces et d'évitement des collisions, garantissant une production fluide et ininterrompue.",
          "Séquences de pliage automatisées : Planifiez et optimisez les séquences de pliage à l'avance pour maintenir un flux de production constant et éliminer les goulots d'étranglement. Cette approche proactive garantit que vos opérations de pliage s'intègrent parfaitement aux processus de découpe.",
          "Compatibilité multi-industries : Conçu pour servir la fabrication de métal, le travail du bois et la fabrication de plastiques avec des stratégies d'optimisation spécifiques à l'industrie.",
          "Maximisation du rendement des matériaux : Des algorithmes d'imbrication sophistiqués garantissent une utilisation maximale des matériaux, réduisant considérablement les déchets et diminuant les coûts de matériaux.",
        ],
      },
      image: "/images/products/nesting-software.png",
    },
    {
      id: "cad-cam-software",
      slug: "cad-cam-software",
      name: {
        en: "CAD/CAM Software",
        fr: "Logiciel CAD/CAM",
      },
      category: {
        en: "Software Solutions",
        fr: "Solutions logicielles",
      },
      teaser: {
        en: "Powerful 2D/3D design and manufacturing software for precise product development and seamless production workflows.",
        fr: "Logiciel puissant de conception et de fabrication 2D/3D pour le développement précis de produits et des flux de production fluides.",
      },
      description: {
        en: "Success in manufacturing begins with getting the fundamentals right. Within the manufacturing process, this critical foundation starts at the design stage. A properly designed product doesn't just look good—it determines your company's competitive advantage and long-term success.\n\nThe way a product is designed directly influences manufacturing efficiency, cost-effectiveness, and overall production quality. Poor design decisions made early in the development cycle can result in costly production challenges, material waste, and quality issues that plague your manufacturing process for years.\n\nAs an authorized reseller of Autodesk products, Consult Metal delivers industry-leading CAD/CAM solutions that empower your team to design with confidence. Our comprehensive 2D/3D software packages provide the tools and capabilities necessary to transform concepts into production-ready designs that optimize manufacturability from the very beginning.",
        fr: "Le succès en fabrication commence par obtenir les fondamentaux corrects. Dans le processus de fabrication, cette base critique commence au stade de la conception. Un produit bien conçu ne fait pas que bien paraître—il détermine votre avantage concurrentiel et votre succès à long terme.\n\nLa façon dont un produit est conçu influence directement l'efficacité de fabrication, la rentabilité et la qualité globale de production. De mauvaises décisions de conception prises au début du cycle de développement peuvent entraîner des défis de production coûteux, du gaspillage de matériaux et des problèmes de qualité qui affectent votre processus de fabrication pendant des années.\n\nEn tant que revendeur agréé de produits Autodesk, Consult Metal fournit des solutions CAD/CAM de pointe qui permettent à votre équipe de concevoir en toute confiance. Nos packages logiciels 2D/3D complets fournissent les outils et les capacités nécessaires pour transformer les concepts en conceptions prêtes pour la production qui optimisent la fabricabilité dès le début.",
      },
      features: {
        en: [
          "Autodesk Authorized Partnership: As an authorized reseller of Autodesk products, Consult Metal provides clients with industry-leading 2D/3D CAD/CAM packages, ensuring your design and conception stage starts on the strongest possible foundation.",
          "Comprehensive 2D Modeling & Error Analysis: Develop detailed, precision-engineered 2D models that can be thoroughly analyzed for potential production errors before they become costly mistakes. These models seamlessly fold and render into accurate 3D visualizations.",
          "3D to Flat Pattern Conversion: Expert conversion of complex 3D models into flat patterns, with parts immediately prepared for production. This streamlined workflow eliminates delays and ensures manufacturing-ready outputs.",
          "Dynamic Parametric Modeling: Leverage parametric modeling capabilities that are critical to modern product lines. Manufacture similar products with varying dimensions without constantly redrawing new models—a vital component of lean manufacturing. Dynamically control your CAD models to adapt quickly to changing customer requirements.",
          "Seamless Design-to-Manufacturing Workflow: Integrate design seamlessly with your manufacturing processes, ensuring what's designed can be efficiently produced.",
        ],
        fr: [
          "Partenariat autorisé Autodesk : En tant que revendeur agréé de produits Autodesk, Consult Metal fournit aux clients des packages CAD/CAM 2D/3D de pointe de l'industrie, garantissant que votre étape de conception et de conception commence sur la base la plus solide possible.",
          "Modélisation 2D complète et analyse d'erreurs : Développez des modèles 2D détaillés et d'ingénierie de précision qui peuvent être analysés en profondeur pour détecter les erreurs de production potentielles avant qu'elles ne deviennent des erreurs coûteuses. Ces modèles se plient et se rendent de manière transparente en visualisations 3D précises.",
          "Conversion 3D en patron plat : Conversion experte de modèles 3D complexes en patrons plats, avec des pièces immédiatement préparées pour la production. Ce flux de travail rationalisé élimine les retards et garantit des sorties prêtes à la fabrication.",
          "Modélisation paramétrique dynamique : Tirez parti des capacités de modélisation paramétrique qui sont essentielles aux gammes de produits modernes. Fabriquez des produits similaires avec des dimensions variables sans redessiner constamment de nouveaux modèles—un composant vital de la fabrication allégée. Contrôlez dynamiquement vos modèles CAO pour vous adapter rapidement aux exigences changeantes des clients.",
          "Flux de travail conception-fabrication transparent : Intégrez la conception de manière transparente avec vos processus de fabrication, garantissant que ce qui est conçu peut être produit efficacement.",
        ],
      },
      image: "/images/products/cad-cam-software.jpg",
    },
  ],

  // ========================================
  // SERVICES
  // ========================================
  servicesPage: {
    headerDescription: {
      en: "Expert solutions designed to streamline your manufacturing process from start to finish",
      fr: "Solutions expertes conçues pour rationaliser votre processus de fabrication du début à la fin",
    },
  },

  services: [
    {
      id: "workflow-design",
      slug: "workflow-design",
      name: {
        en: "Workflow Design",
        fr: "Conception du flux de travail",
      },
      teaser: {
        en: "Optimize your manufacturing layout with strategic machinery placement for seamless automated production workflows.",
        fr: "Optimisez votre agencement de fabrication avec un placement stratégique des machines pour des flux de production automatisés fluides.",
      },
      description: {
        en: "Through comprehensive examination of your entire manufacturing process, we determine the optimal machinery layout to facilitate maximum workflow efficiency. Our methodical, step-by-step approach creates automated production lines where each manufacturing stage follows a logical, efficient sequence. This strategic planning transforms disconnected operations into a cohesive, high-performance production system.",
        fr: "Grâce à un examen approfondi de l'ensemble de votre processus de fabrication, nous déterminons l'agencement optimal des machines pour faciliter une efficacité maximale du flux de travail. Notre approche méthodique, étape par étape, crée des lignes de production automatisées où chaque étape de fabrication suit une séquence logique et efficace. Cette planification stratégique transforme des opérations déconnectées en un système de production cohésif et haute performance.",
      },
      details: {
        en: [
          "Cellular Manufacturing Philosophy: We analyze machinery as integrated cells, determining whether each cell operates independently or depends on others. This cell-based approach is critical to creating efficient, flexible manufacturing systems.",
          "Holistic Plant Design: Your facility is viewed as a self-sustaining ecosystem where each manufacturing cell plays a vital role. We ensure seamless integration between all production components, creating harmonious workflow across your entire operation.",
          "Optimized Work Paths: By meticulously determining the proper work path and interconnecting various infrastructure elements, we establish the foundation for long-term operational sustainability and business success.",
        ],
        fr: [
          "Philosophie de fabrication cellulaire : Nous analysons les machines comme des cellules intégrées, déterminant si chaque cellule fonctionne indépendamment ou dépend d'autres. Cette approche basée sur les cellules est essentielle pour créer des systèmes de fabrication efficaces et flexibles.",
          "Conception holistique d'usine : Votre installation est considérée comme un écosystème autosuffisant où chaque cellule de fabrication joue un rôle vital. Nous assurons une intégration transparente entre tous les composants de production, créant un flux de travail harmonieux dans toute votre opération.",
          "Chemins de travail optimisés : En déterminant méticuleusement le bon chemin de travail et en interconnectant divers éléments d'infrastructure, nous établissons les fondations d'une durabilité opérationnelle à long terme et d'un succès commercial.",
        ],
      },
      image: "/images/services/workflow-design.png",
    },
    {
      id: "product-analysis",
      slug: "product-analysis",
      name: {
        en: "Product Analysis",
        fr: "Analyse de produits",
      },
      teaser: {
        en: "Comprehensive product breakdown to streamline manufacturing operations and maximize efficiency without compromising quality.",
        fr: "Décomposition complète du produit pour rationaliser les opérations de fabrication et maximiser l'efficacité sans compromettre la qualité.",
      },
      description: {
        en: "Every product is unique, and so should be its manufacturing approach. Our comprehensive product analysis service focuses on one ultimate goal: producing your products faster and more cost-effectively without ever sacrificing quality. We challenge conventional manufacturing methods to uncover hidden opportunities for optimization and efficiency gains.",
        fr: "Chaque produit est unique, et son approche de fabrication devrait l'être aussi. Notre service d'analyse de produits complet se concentre sur un objectif ultime : produire vos produits plus rapidement et de manière plus rentable sans jamais sacrifier la qualité. Nous remettons en question les méthodes de fabrication conventionnelles pour découvrir des opportunités cachées d'optimisation et de gains d'efficacité.",
      },
      details: {
        en: [
          "Comprehensive Component Breakdown: We meticulously deconstruct your product into its individual component parts, analyzing design elements and production requirements. This detailed examination reveals the most efficient manufacturing pathway for each element.",
          "Operation Minimization Strategy: By reducing the number of manufacturing operations required, we unlock significant time and efficiency gains that directly translate to improved productivity and enhanced profitability.",
          "Quality-First Cost Reduction: Produce products faster and at lower cost while maintaining—or even exceeding—current quality standards. Our optimizations never compromise on the excellence your customers expect.",
        ],
        fr: [
          "Décomposition complète des composants : Nous déconstruisons méticuleusement votre produit en ses pièces composantes individuelles, analysant les éléments de conception et les exigences de production. Cet examen détaillé révèle le chemin de fabrication le plus efficace pour chaque élément.",
          "Stratégie de minimisation des opérations : En réduisant le nombre d'opérations de fabrication requises, nous débloquons des gains significatifs de temps et d'efficacité qui se traduisent directement par une productivité améliorée et une rentabilité accrue.",
          "Réduction des coûts axée sur la qualité : Produisez des produits plus rapidement et à moindre coût tout en maintenant—ou même en dépassant—les normes de qualité actuelles. Nos optimisations ne compromettent jamais l'excellence que vos clients attendent.",
        ],
      },
      image: "/images/services/product-analysis.png",
    },
    {
      id: "software-recommendation",
      slug: "software-recommendation",
      name: {
        en: "Software Recommendation",
        fr: "Recommandation de logiciels",
      },
      teaser: {
        en: "Expert guidance in selecting the right CAD/CAM and production-planning software tailored to your specific operations.",
        fr: "Conseils d'experts pour sélectionner les logiciels CAD/CAM et de planification de production adaptés à vos opérations spécifiques.",
      },
      description: {
        en: "One-size-fits-all solutions don't exist in modern manufacturing. The landscape of CAD/CAM software options is vast and complex—from sophisticated 2D/3D design platforms to comprehensive production-planning systems that orchestrate your entire shop floor. With countless combinations available, making the right choice requires expertise, experience, and deep understanding of your unique operational needs.",
        fr: "Les solutions universelles n'existent pas dans la fabrication moderne. Le paysage des options de logiciels CAD/CAM est vaste et complexe—des plateformes de conception 2D/3D sophistiquées aux systèmes complets de planification de production qui orchestrent l'ensemble de votre atelier. Avec d'innombrables combinaisons disponibles, faire le bon choix nécessite expertise, expérience et compréhension approfondie de vos besoins opérationnels uniques.",
      },
      details: {
        en: [
          "End-to-End Operational Analysis: We conduct comprehensive analysis from order entry through final product output, examining every touchpoint in your manufacturing workflow. This holistic view enables informed, strategic platform decisions.",
          "Avoiding the Shotgun Approach: Random software selection often leads to unnecessary capital expenditure, operational disruption, and integration nightmares. Our targeted methodology ensures you invest in solutions that deliver measurable ROI.",
          "Vendor-Neutral Expertise: Unlike software vendors with inherent biases, our recommendations are based purely on what's best for your specific manufacturing environment, not sales commissions.",
        ],
        fr: [
          "Analyse opérationnelle de bout en bout : Nous effectuons une analyse complète de la saisie des commandes à la production finale, examinant chaque point de contact dans votre flux de travail de fabrication. Cette vue holistique permet des décisions de plateforme stratégiques et éclairées.",
          "Éviter l'approche dispersée : La sélection aléatoire de logiciels conduit souvent à des dépenses en capital inutiles, à des perturbations opérationnelles et à des cauchemars d'intégration. Notre méthodologie ciblée garantit que vous investissez dans des solutions qui offrent un retour sur investissement mesurable.",
          "Expertise neutre des fournisseurs : Contrairement aux fournisseurs de logiciels avec des biais inhérents, nos recommandations sont basées purement sur ce qui est le mieux pour votre environnement de fabrication spécifique, pas sur des commissions de vente.",
        ],
      },
      image: "/images/services/software-recommendation.png",
    },
    {
      id: "software-development",
      slug: "software-development",
      name: {
        en: "Software Development",
        fr: "Développement de logiciels",
      },
      teaser: {
        en: "Custom software solutions designed to integrate seamlessly with your existing systems and boost operational efficiency.",
        fr: "Solutions logicielles personnalisées conçues pour s'intégrer de manière transparente à vos systèmes existants et améliorer l'efficacité opérationnelle.",
      },
      description: {
        en: "While commercial off-the-shelf software addresses many industry needs, every manufacturing operation possesses unique characteristics, workflows, and requirements that demand specialized solutions. Our custom software development services bridge the gap between generic capabilities and your specific operational excellence goals.",
        fr: "Bien que les logiciels commerciaux standard répondent à de nombreux besoins de l'industrie, chaque opération de fabrication possède des caractéristiques, des flux de travail et des exigences uniques qui exigent des solutions spécialisées. Nos services de développement de logiciels personnalisés comblent l'écart entre les capacités génériques et vos objectifs spécifiques d'excellence opérationnelle.",
      },
      details: {
        en: [
          "Tailor-Made Solutions: Our experienced programmers develop custom scripts and applications specifically designed for your unique operational requirements. These solutions integrate seamlessly with your existing technology platform to unlock greater efficiency and productivity.",
          "Bidirectional MRP/ERP Integration: Create intelligent data flows where your production-planning system automatically pulls critical information from your MRP/ERP system to drive real-time production decisions. Simultaneously, push production data back to purchasing departments to enable precise JIT (just-in-time) material procurement.",
          "Automation of Manual Processes: Identify repetitive, time-consuming manual tasks and transform them into automated workflows that reduce errors, save time, and free your team for higher-value activities.",
        ],
        fr: [
          "Solutions sur mesure : Nos programmeurs expérimentés développent des scripts et des applications personnalisés spécialement conçus pour vos exigences opérationnelles uniques. Ces solutions s'intègrent de manière transparente avec votre plateforme technologique existante pour débloquer une plus grande efficacité et productivité.",
          "Intégration bidirectionnelle MRP/ERP : Créez des flux de données intelligents où votre système de planification de production extrait automatiquement des informations critiques de votre système MRP/ERP pour piloter les décisions de production en temps réel. Simultanément, poussez les données de production vers les départements d'achat pour permettre un approvisionnement précis en matériel JIT (juste à temps).",
          "Automatisation des processus manuels : Identifiez les tâches manuelles répétitives et chronophages et transformez-les en flux de travail automatisés qui réduisent les erreurs, économisent du temps et libèrent votre équipe pour des activités à plus forte valeur ajoutée.",
        ],
      },
      image: "/images/services/software-development.png",
    },
    {
      id: "capital-expenditure",
      slug: "capital-expenditure-recommendation",
      name: {
        en: "Capital Expenditure Recommendation",
        fr: "Recommandation de dépenses en capital",
      },
      teaser: {
        en: "Unbiased machinery recommendations to maximize ROI on cutting, bending, and manufacturing equipment investments.",
        fr: "Recommandations de machines impartiales pour maximiser le retour sur investissement des équipements de découpe, de pliage et de fabrication.",
      },
      description: {
        en: "Just like software selection, machinery purchasing demands a strategic, targeted approach. Should you invest in new or used equipment? Which technology platform best serves your production needs? These decisions represent substantial capital expenditures that will impact your operations for years to come. Making the right choice requires independent expertise, not sales pitches.",
        fr: "Tout comme la sélection de logiciels, l'achat de machines exige une approche stratégique et ciblée. Devriez-vous investir dans des équipements neufs ou d'occasion ? Quelle plateforme technologique sert le mieux vos besoins de production ? Ces décisions représentent des dépenses en capital substantielles qui affecteront vos opérations pour les années à venir. Faire le bon choix nécessite une expertise indépendante, pas des arguments de vente.",
      },
      details: {
        en: [
          "Unbiased, Independent Analysis: Unlike machine sales representatives who naturally emphasize benefits while minimizing limitations, Consult Metal maintains zero financial ties to any machinery manufacturer. Our recommendations are driven purely by your best interests.",
          "Technology Matching & Market Knowledge: We possess comprehensive knowledge of laser cutters, punch presses, plasma systems, combination machines, and bending equipment across all major manufacturers. We analyze your product mix, material types, and production volumes to identify the perfect technology fit.",
          "ROI-Focused Decision Making: Every recommendation is backed by financial analysis demonstrating projected payback periods and long-term profitability impact. We evaluate new versus used equipment to ensure you get the best value for your investment.",
        ],
        fr: [
          "Analyse indépendante et impartiale : Contrairement aux représentants commerciaux de machines qui mettent naturellement en évidence les avantages tout en minimisant les limitations, Consult Metal ne maintient aucun lien financier avec aucun fabricant de machines. Nos recommandations sont motivées purement par vos meilleurs intérêts.",
          "Correspondance technologique et connaissance du marché : Nous possédons une connaissance complète des découpeurs laser, des presses à poinçonner, des systèmes plasma, des machines combinées et des équipements de pliage de tous les principaux fabricants. Nous analysons votre mix de produits, vos types de matériaux et vos volumes de production pour identifier l'adéquation technologique parfaite.",
          "Prise de décision axée sur le ROI : Chaque recommandation est soutenue par une analyse financière démontrant les périodes de récupération projetées et l'impact sur la rentabilité à long terme. Nous évaluons les équipements neufs par rapport aux équipements d'occasion pour garantir que vous obtenez le meilleur rapport qualité-prix pour votre investissement.",
        ],
      },
      image: "/images/services/capital-expenditure.jpeg",
    },
    {
      id: "cad-development",
      slug: "cad-development",
      name: {
        en: "CAD Development",
        fr: "Développement CAD",
      },
      teaser: {
        en: "Professional 2D/3D CAD modeling with parametric design capabilities for flexible, production-ready manufacturing solutions.",
        fr: "Modélisation CAO 2D/3D professionnelle avec capacités de conception paramétrique pour des solutions de fabrication flexibles et prêtes à la production.",
      },
      description: {
        en: "Our expert CAD development services deliver precision-engineered 2D models that undergo rigorous error analysis before reaching the production floor. These meticulously crafted models seamlessly transform from detailed 2D drawings into accurate 3D visualizations, providing comprehensive perspectives for design validation and manufacturing planning.",
        fr: "Nos services experts de développement CAO fournissent des modèles 2D d'ingénierie de précision qui subissent une analyse d'erreur rigoureuse avant d'atteindre l'atelier de production. Ces modèles méticuleusement conçus se transforment de manière transparente de dessins 2D détaillés en visualisations 3D précises, fournissant des perspectives complètes pour la validation de conception et la planification de fabrication.",
      },
      details: {
        en: [
          "Precision 2D/3D Modeling: Develop highly detailed models with built-in error checking to identify and eliminate potential production issues before they become costly mistakes. Models seamlessly fold and render between 2D and 3D formats for comprehensive design review.",
          "Parametric Modeling Excellence: Harness the power of parametric design to manufacture families of similar products with varying dimensions without constantly redrawing new models. Change a single dimension and watch the entire assembly update automatically.",
          "Design for Manufacturing Integration: Every model considers manufacturing constraints, material properties, tooling capabilities, and production efficiency. We ensure both beautiful design and practical manufacturability.",
        ],
        fr: [
          "Modélisation 2D/3D de précision : Développez des modèles hautement détaillés avec vérification d'erreurs intégrée pour identifier et éliminer les problèmes de production potentiels avant qu'ils ne deviennent des erreurs coûteuses. Les modèles se plient et se rendent de manière transparente entre les formats 2D et 3D pour un examen de conception complet.",
          "Excellence en modélisation paramétrique : Exploitez la puissance de la conception paramétrique pour fabriquer des familles de produits similaires avec des dimensions variables sans redessiner constamment de nouveaux modèles. Changez une seule dimension et regardez l'ensemble de l'assemblage se mettre à jour automatiquement.",
          "Intégration conception-fabrication : Chaque modèle considère les contraintes de fabrication, les propriétés des matériaux, les capacités d'outillage et l'efficacité de production. Nous assurons à la fois un beau design et une fabricabilité pratique.",
        ],
      },
      image: "/images/services/cad-development.jpg",
    },
  ],

  // ========================================
  // ABOUT US / PROFILE
  // ========================================
  about: {
    hero: {
      title: {
        en: "ABOUT US",
        fr: "À PROPOS DE NOUS",
      },
      heading: {
        en: "Your catalyst for growth",
        fr: "Votre catalyseur de croissance",
      },
      subtitle: {
        en: "Consult Metal supports and consults clients through every step of the business improvement process.",
        fr: "Consult Metal accompagne et conseille les clients à chaque étape du processus d'amélioration des affaires.",
      },
    },
    background: {
      label: {
        en: "WHO WE ARE",
        fr: "NOTRE HISTOIRE",
      },
      title: {
        en: "Our History",
        fr: "Notre histoire",
      },
      paragraphs: [
        {
          en: "Your Partner in Lean Manufacturing Excellence",
          fr: "Votre partenaire d'excellence en fabrication lean",
        },
        {
          en: "With over 20 years of experience in the sheet metal industry, Consult Metal is your trusted partner for driving efficiency and reducing costs. We combine cutting-edge software solutions with deep industry expertise to help you streamline operations and maximize productivity.",
          fr: "Avec plus de 20 ans d'expérience dans l'industrie de la tôle, Consult Metal est votre partenaire de confiance pour améliorer l'efficacité et réduire les coûts. Nous combinons des solutions logicielles de pointe avec une expertise industrielle approfondie pour vous aider à rationaliser les opérations et maximiser la productivité.",
        },
        {
          en: "From order entry to product design and final output, we analyze every step of your process to uncover opportunities for improvement. Our goal: deliver lean, cost-effective manufacturing solutions that work for you.",
          fr: "De la saisie des commandes à la conception du produit et à la production finale, nous analysons chaque étape de votre processus pour découvrir des opportunités d'amélioration. Notre objectif : fournir des solutions de fabrication lean et rentables qui fonctionnent pour vous.",
        },
        {
          en: "What sets us apart? Our team has hands-on experience from the shop floor to management. This unique perspective allows us to provide practical, results-driven strategies tailored to your business needs.",
          fr: "Qu'est-ce qui nous distingue ? Notre équipe possède une expérience pratique de l'atelier à la direction. Cette perspective unique nous permet de fournir des stratégies pratiques et axées sur les résultats, adaptées aux besoins de votre entreprise.",
        },
      ],
    },
    profile: {
      label: {
        en: "PROFILE",
        fr: "PROFIL",
      },
      title: {
        en: "Profile",
        fr: "Profil",
      },
      paragraphs: [
        {
          en: "With more than 20 plus years in the sheet metal industry, the experts at Consult Metal are at the cutting-edge of lean manufacturing.",
          fr: "Avec plus de 20 ans d'expérience dans l'industrie de la tôle, les experts de Consult Metal sont à la pointe de la fabrication lean.",
        },
        {
          en: "We offer the most up-to-date software packages as well as knowledge-based services in order to optimize your operations and minimize costs. From order entry through to product design and final output, we can analyze each and every step of operations in order to gain maximum efficiency at every stage of the manufacturing process.",
          fr: "Nous offrons les progiciels les plus récents ainsi que des services basés sur les connaissances afin d'optimiser vos opérations et de minimiser les coûts. De la saisie des commandes à la conception du produit et à la production finale, nous pouvons analyser chaque étape des opérations afin d'obtenir une efficacité maximale à chaque étape du processus de fabrication.",
        },
        {
          en: "Know that our professionals have first-hand knowledge of the production process. Having worked our way up from the shop floor, we are able to see operations both from an operator's and manager's perspective.",
          fr: "Sachez que nos professionnels ont une connaissance de première main du processus de production. Ayant travaillé depuis l'atelier, nous sommes en mesure de voir les opérations à la fois du point de vue de l'opérateur et du gestionnaire.",
        },
      ],
    },
    mission: {
      label: {
        en: "WHAT WE DO",
        fr: "NOTRE MISSION",
      },
      title: {
        en: "Our Mission",
        fr: "Notre mission",
      },
      paragraphs: [
        {
          en: "Building Long-Term Partnerships for Sustainable Success",
          fr: "Construire des partenariats à long terme pour un succès durable",
        },
        {
          en: "At Consult Metal, our mission is to foster lasting relationships with our clients. Manufacturing is a constantly evolving process, and we strive to be your trusted partner at every stage. We don't just sell products or services—we deliver complete solutions that combine short-term results with a long-term vision for growth.",
          fr: "Chez Consult Metal, notre mission est de favoriser des relations durables avec nos clients. La fabrication est un processus en constante évolution, et nous nous efforçons d'être votre partenaire de confiance à chaque étape. Nous ne vendons pas seulement des produits ou des services—nous livrons des solutions complètes qui combinent des résultats à court terme avec une vision à long terme pour la croissance.",
        },
        {
          en: "Our diverse range of tools and services is designed to help you achieve operational excellence and stay ahead in a competitive market.",
          fr: "Notre gamme diversifiée d'outils et de services est conçue pour vous aider à atteindre l'excellence opérationnelle et à garder une longueur d'avance sur un marché concurrentiel.",
        },
        {
          en: "Maximum automation is the ultimate goal of any modern manufacturing solution. By reducing manual intervention and minimizing downtime, we enable continuous production flow, which translates into higher throughput and maximized profits.",
          fr: "L'automatisation maximale est l'objectif ultime de toute solution de fabrication moderne. En réduisant l'intervention manuelle et en minimisant les temps d'arrêt, nous permettons un flux de production continu, ce qui se traduit par un débit plus élevé et des profits maximisés.",
        },
      ],
    },
    cta: {
      title: {
        en: "Ready to optimize your operations?",
        fr: "Prêt à optimiser vos opérations?",
      },
      subtitle: {
        en: "Contact us to learn how we can help take your business to the next level",
        fr: "Contactez-nous pour savoir comment nous pouvons aider à faire passer votre entreprise au niveau supérieur",
      },
      buttonText: {
        en: "Get in Touch",
        fr: "Contactez-nous",
      },
    },
    image: "/images/about/about-hero.jpeg",
  },

  // ========================================
  // INDUSTRIES WE SERVE
  // ========================================
  industries: {
    label: {
      en: "INDUSTRIES WE SERVE",
      fr: "INDUSTRIES QUE NOUS SERVONS",
    },
    title: {
      en: "Industries We Serve",
      fr: "Industries que nous servons",
    },
    description: {
      en: "Over the past two decades, we have proudly served a diverse range of manufacturing industries, helping them optimize their operations and achieve maximum efficiency.",
      fr: "Au cours des deux dernières décennies, nous avons fièrement servi un large éventail d'industries manufacturières, les aidant à optimiser leurs opérations et à atteindre une efficacité maximale.",
    },
    list: [
      {
        name: { en: "HVAC Industry", fr: "Industrie CVC" },
        icon: "hvac",
        description: {
          en: "Heating, ventilation, and air conditioning manufacturers requiring precision metal fabrication solutions.",
          fr: "Fabricants de chauffage, ventilation et climatisation nécessitant des solutions de fabrication métallique de précision.",
        },
      },
      {
        name: {
          en: "Door & Frame Industry",
          fr: "Industrie des portes et cadres",
        },
        icon: "door",
        description: {
          en: "Commercial and residential door and frame manufacturers seeking automated production solutions.",
          fr: "Fabricants de portes et cadres commerciaux et résidentiels à la recherche de solutions de production automatisées.",
        },
      },
      {
        name: {
          en: "Stainless Steel Equipment",
          fr: "Équipement en acier inoxydable",
        },
        icon: "equipment",
        description: {
          en: "Manufacturers of stainless steel equipment for food service, medical, and industrial applications.",
          fr: "Fabricants d'équipements en acier inoxydable pour les services alimentaires, médicaux et industriels.",
        },
      },
      {
        name: { en: "Lab Furniture", fr: "Meubles de laboratoire" },
        icon: "furniture",
        description: {
          en: "Laboratory furniture manufacturers requiring specialized metalworking and fabrication expertise.",
          fr: "Fabricants de meubles de laboratoire nécessitant une expertise spécialisée en métallurgie et fabrication.",
        },
      },
      {
        name: { en: "Agricultural Equipment", fr: "Équipement agricole" },
        icon: "agriculture",
        description: {
          en: "Farm and agricultural equipment manufacturers looking to improve production efficiency and product quality.",
          fr: "Fabricants d'équipements agricoles et fermiers cherchant à améliorer l'efficacité de production et la qualité des produits.",
        },
      },
      {
        name: { en: "Job Shops", fr: "Ateliers d'usinage" },
        icon: "jobshop",
        description: {
          en: "Custom fabrication shops requiring flexible software solutions for diverse manufacturing needs.",
          fr: "Ateliers de fabrication personnalisée nécessitant des solutions logicielles flexibles pour divers besoins de fabrication.",
        },
      },
    ],
  },

  // ========================================
  // CLIENT PROFILE (Legacy - keeping for compatibility)
  // ========================================
  clientProfile: {
    title: {
      en: "Client Profile:",
      fr: "Profil client:",
    },
    industries: [
      { en: "HVAC industry", fr: "Industrie CVC" },
      { en: "Door & Frame industry", fr: "Industrie des portes et cadres" },
      {
        en: "Stainless Steel Equipment Manufacturers",
        fr: "Fabricants d'équipements en acier inoxydable",
      },
      {
        en: "Lab furniture manufactures",
        fr: "Fabricants de meubles de laboratoire",
      },
      {
        en: "Farm & Agricultural equipment",
        fr: "Équipement agricole et agricole",
      },
      { en: "Job shops", fr: "Ateliers d'usinage" },
    ],
  },

  // ========================================
  // CONTACT
  // ========================================
  contact: {
    title: {
      en: "CONTACT",
      fr: "CONTACT",
    },
    email: "info@consultmetal.com",
    phone: "(514) 586-5982",
    fax: "",
    form: {
      name: { en: "Name", fr: "Nom" },
      phone: { en: "Phone", fr: "Téléphone" },
      email: { en: "Email", fr: "Courriel" },
      message: { en: "Message", fr: "Message" },
      submit: { en: "Submit", fr: "Soumettre" },
    },
    formConfig: {
      ownerEmail: "info@consultmetal.com",
      subject: {
        en: "Contact Form Submission - ConsultMetal",
        fr: "Soumission du formulaire de contact - ConsultMetal",
      },
    },
  },

  // ========================================
  // FOOTER
  // ========================================
  footer: {
    copyright: {
      en: "Copyright ConsultMetal 2009, All right reserved",
      fr: "Copyright ConsultMetal 2009, Tous droits réservés",
    },
  },
};

export default companyConfig;
