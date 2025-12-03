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
        en: "Nesting software",
        fr: "Logiciel de nidification",
      },
      slug: "nesting-software",
      description: {
        en: "This is an integrated manufacturing solution for the metal, wood and plastics industry. This innovative approach is designed to meet the challenges faced by many industries. Through optimized punch, laser, routing as well as bending solutions, this powerful tool is a must for any manufacturer looking to stay ahead of the competition.",
        fr: "Il s'agit d'une solution de fabrication intégrée pour l'industrie du métal, du bois et des plastiques. Cette approche innovante est conçue pour relever les défis auxquels sont confrontées de nombreuses industries. Grâce à des solutions optimisées de poinçonnage, de laser, de routage et de pliage, cet outil puissant est indispensable pour tout fabricant souhaitant garder une longueur d'avance sur la concurrence.",
      },
      features: {
        en: [
          "With a few simple clicks of the mouse, both 2D and 3D models can be imported and prepared for cutting in an instant. Powerful nesting solutions will optimize material yield and set-up times as opposed to manual nesting which is both time consuming and less efficient.",
          "Tool sorting and cutting sequences are optimized in order to reduce tool changes and minimize the cutting path. Clamp repositioning and avoidance are also determined by the software.",
          "Bending sequences can also be determined beforehand in order to maintain production flow.",
        ],
        fr: [
          "En quelques clics de souris, les modèles 2D et 3D peuvent être importés et préparés pour la découpe en un instant. Des solutions puissantes d'imbrication optimiseront le rendement des matériaux et les temps de configuration, contrairement à l'imbrication manuelle qui est à la fois chronophage et moins efficace.",
          "Le tri des outils et les séquences de coupe sont optimisés afin de réduire les changements d'outils et de minimiser le chemin de coupe. Le repositionnement et l'évitement des pinces sont également déterminés par le logiciel.",
          "Les séquences de pliage peuvent également être déterminées à l'avance afin de maintenir le flux de production.",
        ],
      },
      image: "/images/products/nesting-software.png",
    },
    {
      id: "cad-cam-software",
      slug: "cad-cam-software",
      name: {
        en: "CAD/CAM software",
        fr: "Logiciel CAD/CAM",
      },
      description: {
        en: "The success of any business is getting things started off right. Within the manufacturing process this starts at the design stage. A properly designed product will ultimately determine a company's success. How a product is designed will also have an effect on how it is manufactured.",
        fr: "Le succès de toute entreprise passe par un bon démarrage. Dans le processus de fabrication, cela commence au stade de la conception. Un produit bien conçu déterminera en fin de compte le succès d'une entreprise. La façon dont un produit est conçu aura également un effet sur la façon dont il est fabriqué.",
      },
      features: {
        en: [
          "As an authorized reseller of Autodesk products, Consult Metal can offer its clients a powerful 2D/3D package in order to get the design and conception stage off to the right start.",
          "We are able to develop detailed 2D models which can be analyzed for errors that can lead to the production process. These same models can be folded and rendered in 3D format.",
          "We can also take 3D models and break them down into flats and prepare the parts for immediate production.",
          "Parametric modeling plays a critical role in today's product lines. Being able to manufacture similar products with varying dimensions without having to constantly redraw a new model is vital to lean manufacturing. Imagine being able to dynamically control your CAD models. At Consult Metal, we do this to.",
        ],
        fr: [
          "En tant que revendeur agréé de produits Autodesk, Consult Metal peut offrir à ses clients un ensemble 2D/3D puissant afin de commencer l'étape de conception et de conception du bon pied.",
          "Nous sommes en mesure de développer des modèles 2D détaillés qui peuvent être analysés pour détecter les erreurs pouvant conduire au processus de production. Ces mêmes modèles peuvent être pliés et rendus au format 3D.",
          "Nous pouvons également prendre des modèles 3D et les décomposer en plats et préparer les pièces pour une production immédiate.",
          "La modélisation paramétrique joue un rôle essentiel dans les gammes de produits d'aujourd'hui. Être capable de fabriquer des produits similaires avec des dimensions variables sans avoir à redessiner constamment un nouveau modèle est essentiel à la fabrication allégée. Imaginez pouvoir contrôler dynamiquement vos modèles CAO. Chez Consult Metal, nous faisons également cela.",
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
      description: {
        en: "By examining the manufacturing process as a whole, we are able to determine the proper layout of machinery in order to facilitate workflow. A step-by-step approach is required. The idea is to create an automated production line where each step of the manufacturing process follows a logical sequence.",
        fr: "En examinant le processus de fabrication dans son ensemble, nous sommes en mesure de déterminer la disposition appropriée des machines afin de faciliter le flux de travail. Une approche étape par étape est nécessaire. L'idée est de créer une chaîne de production automatisée où chaque étape du processus de fabrication suit une séquence logique.",
      },
      details: {
        en: [
          "Machinery needs to be looked at as a cell. Determining whether a single cell is independent or dependent upon another is critical. The plant as a whole needs to be viewed as a self-sustaining entity with each cell playing a critical role. By determining the proper work path and tying together the various infrastructure will ultimately determine long-term sustainability and success.",
        ],
        fr: [
          "Les machines doivent être considérées comme une cellule. Déterminer si une seule cellule est indépendante ou dépendante d'une autre est crucial. L'usine dans son ensemble doit être considérée comme une entité autonome avec chaque cellule jouant un rôle essentiel. En déterminant le bon chemin de travail et en liant ensemble les diverses infrastructures, on déterminera finalement la durabilité et le succès à long terme.",
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
      description: {
        en: "No two products are alike and neither should the way they are manufactured be either. The ultimate goal is to be able to produce it quicker without sacrificing quality.",
        fr: "Aucun produit n'est identique et la façon dont ils sont fabriqués ne devrait pas non plus l'être. L'objectif ultime est de pouvoir le produire plus rapidement sans sacrifier la qualité.",
      },
      details: {
        en: [
          "By breaking down a product into its various component parts we are able to analyze its design, and ultimately, the way it will be produced. Minimizing the operations involved in its manufacturing will allow greater gains in time and efficiency while resulting in productivity gains and profitability. Can we reduce the number of hits? Can we have fewer bends? Basically, can we produce it faster and cheaper while maintaining the same or increased quality standard?",
        ],
        fr: [
          "En décomposant un produit en ses différentes pièces, nous sommes en mesure d'analyser sa conception et, finalement, la façon dont il sera produit. Minimiser les opérations impliquées dans sa fabrication permettra de plus grands gains de temps et d'efficacité tout en entraînant des gains de productivité et de rentabilité. Pouvons-nous réduire le nombre de coups? Pouvons-nous avoir moins de plis? Fondamentalement, pouvons-nous le produire plus rapidement et moins cher tout en maintenant la même norme de qualité ou une norme supérieure?",
        ],
      },
      image: "/images/services/product-analysis.jpeg",
    },
    {
      id: "software-recommendation",
      slug: "software-recommendation",
      name: {
        en: "Software Recommendation",
        fr: "Recommandation de logiciels",
      },
      description: {
        en: "There is no one-size-fits-all solution for all manufacturing operations. The choice of CAD/CAM software is almost endless. From software that can design in 2D and 3D to production-planning software that drives the shop floor, the combinations are numerous.",
        fr: "Il n'existe pas de solution unique pour toutes les opérations de fabrication. Le choix de logiciels CAD/CAM est presque infini. Des logiciels qui peuvent concevoir en 2D et 3D aux logiciels de planification de production qui pilotent l'atelier, les combinaisons sont nombreuses.",
      },
      details: {
        en: [
          "By analyzing operations from the order entry stage down through final output, we can make informed decisions into what type of platform is required. Taking a shotgun approach often results in unnecessary expenditure. Software needs to be relevant to the operations at hand while being flexible enough to grow as you grow.",
        ],
        fr: [
          "En analysant les opérations depuis l'étape de saisie des commandes jusqu'à la production finale, nous pouvons prendre des décisions éclairées sur le type de plateforme requis. Adopter une approche dispersée entraîne souvent des dépenses inutiles. Le logiciel doit être pertinent pour les opérations en cours tout en étant suffisamment flexible pour évoluer à mesure que vous grandissez.",
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
      description: {
        en: "While existing software can meet most of the needs the industry has today, each operation has its unique attributes.",
        fr: "Bien que les logiciels existants puissent répondre à la plupart des besoins de l'industrie aujourd'hui, chaque opération a ses attributs uniques.",
      },
      details: {
        en: [
          "Our programmers have the ability to develop scripts tailor-made to your operation. These programs are able to tie into your existing platform in order to achieve greater efficiency.",
          "We can have your production-planning system pull information from your MRP/ERP system in order to drive production. We can have production-planning push information back to the purchasing department in order to determine JIT (just-in-time) material purchasing and delivery.",
          "Custom program development can be a stand-alone solution or as part of a larger package.",
        ],
        fr: [
          "Nos programmeurs ont la capacité de développer des scripts sur mesure pour votre opération. Ces programmes sont capables de se lier à votre plateforme existante afin d'atteindre une plus grande efficacité.",
          "Nous pouvons faire en sorte que votre système de planification de production extraie des informations de votre système MRP/ERP afin de piloter la production. Nous pouvons faire en sorte que la planification de production renvoie des informations au service des achats afin de déterminer l'achat et la livraison de matériel JIT (juste à temps).",
          "Le développement de programmes personnalisés peut être une solution autonome ou faire partie d'un ensemble plus large.",
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
      description: {
        en: "As it is with software, a targeted approach needs to be taken when purchasing machinery. Do you purchase new or used?",
        fr: "Comme c'est le cas avec les logiciels, une approche ciblée doit être adoptée lors de l'achat de machines. Achetez-vous du neuf ou de l'occasion?",
      },
      details: {
        en: [
          "The purchase of cutting and bending machinery is a substantial capital expenditure. It is important to remember that each product or product line has a specific manufacturing process. Remember that machine sales representatives will always tout the benefits of their products while downplaying shortcomings.",
          "We at Consult Metal have no financial ties to any of the machine manufacturers. What we do have is in-depth knowledge of the many machines on the market today. The idea is to pair you up with machinery that is relevant to your operations. Determining whether a laser or punch press or plasma or combination machine is required is critical to the production process. The number of bending centers required in order to keep up with the cutting cells must also be kept in mind.",
          "At the end of the day we need to ask ourselves what our ROI will be.",
        ],
        fr: [
          "L'achat de machines de découpe et de pliage représente une dépense en capital substantielle. Il est important de se rappeler que chaque produit ou gamme de produits a un processus de fabrication spécifique. Rappelez-vous que les représentants commerciaux de machines vanteront toujours les avantages de leurs produits tout en minimisant les lacunes.",
          "Nous, chez Consult Metal, n'avons aucun lien financier avec aucun des fabricants de machines. Ce que nous avons, c'est une connaissance approfondie des nombreuses machines sur le marché aujourd'hui. L'idée est de vous jumeler avec des machines pertinentes pour vos opérations. Déterminer si un laser ou une presse à poinçonner ou un plasma ou une machine combinée est nécessaire est essentiel au processus de production. Le nombre de centres de pliage nécessaires pour suivre les cellules de découpe doit également être gardé à l'esprit.",
          "En fin de compte, nous devons nous demander quel sera notre retour sur investissement.",
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
      description: {
        en: "We are able to develop detailed 2D models which can be analyzed for errors that can lead to the production process. These same models can be folded and rendered in 3D format.",
        fr: "Nous sommes en mesure de développer des modèles 2D détaillés qui peuvent être analysés pour détecter les erreurs pouvant conduire au processus de production. Ces mêmes modèles peuvent être pliés et rendus au format 3D.",
      },
      details: {
        en: [
          "We can also take 3D models and break them down into flats and prepare the parts for immediate production.",
          "Parametric modeling plays a critical role in today's product lines. Being able to manufacture similar products with varying dimensions without having to constantly redraw a new model is vital to lean manufacturing. Imagine being able to dynamically control your CAD models. At Consult Metal, we do this to.",
        ],
        fr: [
          "Nous pouvons également prendre des modèles 3D et les décomposer en plats et préparer les pièces pour une production immédiate.",
          "La modélisation paramétrique joue un rôle essentiel dans les gammes de produits d'aujourd'hui. Être capable de fabriquer des produits similaires avec des dimensions variables sans avoir à redessiner constamment un nouveau modèle est essentiel à la fabrication allégée. Imaginez pouvoir contrôler dynamiquement vos modèles CAO. Chez Consult Metal, nous faisons également cela.",
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
    profile: {
      label: {
        en: "PROFILE",
        fr: "PROFIL",
      },
      title: {
        en: "Meet The Experts",
        fr: "Rencontrez les experts",
      },
      content: {
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
      image: "/images/about/team.jpg",
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
