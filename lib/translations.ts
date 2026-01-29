export const translations = {
  en: {
    nav: {
      portfolio: 'Portfolio',
      about: 'About me',
      blog: 'My Blog',
      services: 'Services',
      contact: 'Contact me',
    },
    hero: {
      title: "I'M",
      subtitle: 'FULLSTACK DEVELOPER',
      name: 'Finiavana ANDRIANIRINA',
      description:
        'Greetings, fellow digital explorer! I am Finiavana, a passionate and innovative developer dedicated to crafting beautiful and functional digital experiences. Welcome to my online sanctuary!',
      cta1: 'Hire Me',
      cta2: 'Play Video',
      statistics: {
        years: 'Years Experience',
        projects: 'Projects Complete',
        front: 'Frontend Specialist',
        back: 'backend Specialist',
        code: 'Scalable Code',
      },
    },
    services: {
      title: 'My Services',
      description:
        'Greetings, fellow digital explorer! I am Finiavana, a passionate and innovative developer dedicated to crafting beautiful digital experiences!',
      viewMore: 'View More',
      viewLess: 'View Less',
      items: [
        {
          title: 'Frontend Development',
          description:
            'I design modern, responsive, and high-performance user interfaces with Next.js and React, focusing on user experience and maintainable code.',
          icon: '💻',
        },
        {
          title: 'Backend Development',
          description:
            'I build robust and scalable APIs with NestJS, managing business logic and communication between databases and frontend.',
          icon: '⚙️',
        },
        {
          title: 'Database Administration',
          description:
            'I manage and optimize your SQL and NoSQL databases, ensuring performance, security, and data integrity.',
          icon: '🗄️',
        },
        {
          title: 'Mobile App Development',
          description:
            'I develop cross-platform mobile applications with React Native, delivering smooth and native experiences on iOS and Android.',
          icon: '📱',
        },
        {
          title: 'Project Management',
          description:
            'I plan, organize, and supervise your digital projects to ensure high-quality deliverables and on-time delivery.',
          icon: '📊',
        },
        {
          title: 'Website Development',
          description:
            'I create modern, responsive, and SEO-optimized websites to provide an exceptional user experience.',
          icon: '🌐',
        },
        {
          title: 'E-commerce Solutions',
          description:
            'I develop secure and high-performing online stores, integrating payment systems and product management tailored to your needs.',
          icon: '🛒',
        },
        {
          title: 'SaaS & Software Development',
          description:
            'I design modular, scalable, and maintainable SaaS applications and software to meet business requirements.',
          icon: '☁️',
        },
        {
          title: 'UI/UX Design',
          description:
            'I design intuitive and user-friendly interfaces, focusing on user experience and visual consistency to enhance engagement and satisfaction.',
          icon: '🎨',
        },
      ],
    },

    education: {
      title: 'My Education',
      items: [
        {
          year: '2017 - 2020',
          degree: 'Professional Bachelor’s Degree in Computer Science',
          description:
            'Professional training completed at the National School of Computer Science of Fianarantsoa (ENI), focused on a hands-on, job-oriented approach to software development. This training helped me build strong skills in programming, database management, web application development, as well as professional workflows and team collaboration. It represents the foundation of my technical expertise and my ability to work independently on real-world projects.',
        },
        {
          year: '2020 - 2022',
          degree: 'Professional Master’s Degree in Computer Science',
          description:
            'Advanced professional training completed at the National School of Computer Science of Fianarantsoa (ENI), focused on the design, development, and management of complex software projects. It strengthens expertise in software architecture, frontend and backend development, databases, SaaS applications, as well as project management and technical decision-making. This training confirms my ability to design and lead complete, scalable, and reliable solutions.',
        },
      ],
    },
    skills: {
      title: 'My Skills',
      items: [
        { name: 'Next JS', percentage: 80 },
        { name: 'React JS', percentage: 75 },
        { name: 'React Native', percentage: 70 },
        { name: 'Nest JS', percentage: 85 },
        { name: 'Node JS Express', percentage: 80 },
        { name: 'MongoDB', percentage: 75 },
        { name: 'PostgreSQL/MySQL', percentage: 85 },
        { name: 'User Interface', percentage: 75 },
        { name: 'User Experience', percentage: 80 },
        { name: 'UI/UX', percentage: 70 },
        { name: 'Agile SCRUM', percentage: 70 },
        { name: 'JAVA Android', percentage: 70 },
      ],
    },
    projects: {
      title: 'My Latest Projects',
      description:
        'Explore my portfolio of completed projects showcasing my expertise in web development, design, and full-stack solutions.',
      filters: ['All', 'Web Development', 'Mobile App', 'Frontend', 'Backend'],
      viewMore: 'View More',
      items: [
        {
          title: 'BackOffice Module for Hello Archi',
          category: 'Frontend',
          image: '📊',
          // image: '🛒',
          description:
            'For the Hello Archi project, I was responsible for the design and full development of the BackOffice module, focusing on creating a centralized, robust, and intuitive management system.',
          technologies: [
            'Next.js',
            'React',
            'Tanstack Query',
            'Tailwind CSS',
            'GitLab',
            'Socket.io',
          ],
          tasks: [
            'Integrated Commercial Management: Development of comprehensive quote and invoice management features, including their generation, tracking, automation, and secure archiving.',
            'Unified Communication Platform: Integration of an internal messaging and transactional email system, enabling seamless and tracked communication with clients and internal teams.',
            'Centralized Document Hub: Design of a dedicated space for the centralized management of documents (contracts, plans, technical files) with sorting, access control, and version tracking.',
            'Structured Product Catalog: Implementation of a product and category management module, providing hierarchical organization, detailed records, and simplified catalog maintenance.',
          ],
        },
        {
          title:
            'Backend Architecture & API for a Car Rental Management SaaS (MVP)',
          category: 'Backend',
          image: '⚙️',
          description:
            'Design and development of the server infrastructure and backend services for a car rental management SaaS platform. This robust technical foundation supported the essential business features of the MVP',
          technologies: [
            'NestJS',
            'TypeScript',
            'Swagger',
            'JWT',
            'MongoDB',
            'GitLab',
          ],
          tasks: [
            'Secure RESTful API: Development of a modular API with JWT authentication, fine-grained permission management (RBAC), and strict data validation to ensure system integrity.',
            'Business Data Modeling: Design and implementation of the relational database schema for core entities: Clients, Vehicles (with status and history), Rental Contracts, Users, and Billing.',
            'Centralized Business Logic: Implementation of the core algorithmic logic for critical processes: automatic pricing and fee calculation, real-time vehicle availability management, document generation (contracts, invoices), and transactional notifications.',
            'Administration Services: Creation of secure endpoints powering the admin interface, enabling full CRUD management of the catalog, bookings, and clients, as well as access to aggregated analytical data.',
            'Customer Services: Development of endpoints dedicated to the public user experience: browsing the catalog with filters, availability checks, booking submission, and customer account management.',
          ],
        },
        {
          title:
            'User Interfaces & Customer Experience for a Car Rental SaaS (MVP)',
          category: 'Frontend',
          image: '📊',
          description:
            'Development of interactive and responsive user interfaces for both user bases of the SaaS platform, consuming the backend API. The focus was on usability, performance, and adaptability.',
          technologies: [
            'Next.js',
            'React',
            'Tailwind',
            'SCSS',
            'Figma',
            'Shadcn UI',
          ],
          tasks: [
            'Administrative Dashboard: Design of a comprehensive management interface with KPI visualization (occupancy rate, revenue) and quick access to primary actions.',
            'Intuitive Management Modules: Development of optimized CRUD interfaces for managing vehicles (photo galleries, technical sheets), clients, rentals (calendar view), and internal users.',
            'Guided Workflows: Implementation of clear user journeys for complex tasks like creating a rental contract or processing a vehicle return.',
            'Engaging Landing Page & Catalog: Creation of an attractive showcase for the vehicle fleet with advanced search filters (date, type, price) and an integrated booking system.',
            'Smooth Booking Journey: Design of a multi-step funnel (selection, options, customer info, payment) to maximize conversion rates.',
            'Personal Customer Portal: Development of a secure area where customers can view their past and upcoming bookings, download their documents, and update their profile.',
          ],
        },
        {
          title:
            'Advanced Backend Architecture for Rental Management SaaS (Version 1.0)',
          category: 'Backend',
          image: '⚙️',
          description:
            'Development of the complete backend infrastructure for version 1.0 of the SaaS software, evolving from the MVP to a comprehensive and industrialized car rental management platform',
          technologies: [
            'NestJS',
            'MongoDB',
            'Swagger',
            'Stripe API',
            'Mangopay API',
          ],
          tasks: [
            'API Overhaul and Consolidation: Correction and optimization of MVP endpoints to improve stability, performance, and maintainability. Migration to a microservices architecture for critical modules.',
            'Digital Vehicle Inspection System: Design of a complete workflow for the entry, electronic signature, and archiving of vehicle check-in/check-out reports, including photo and remark management.',
            'Advanced Billing Engine: Development of a module for generating, tracking, and managing quotes and invoices, incorporating VAT calculations, deposits, and automated reminders.',
            'Centralized Configuration Hub: Creation of a dedicated service for application settings (pricing, taxes, email templates) and dynamically manageable legal information (Terms of Service, legal notices, policies).',
            'Payments & Security Deposits with MangoPay: Full integration of the MangoPay API to manage transactions (cards, bank transfers) and the security deposit lifecycle (blocking, release, deduction in case of damage).',
            'Subscriptions with Stripe: Implementation of a SaaS subscription system via Stripe, managing plans, recurring invoices, subscription changes, and webhooks for synchronization.',
            'Enhanced Security & Compliance: Implementation of an audit trail, encryption of sensitive data (payment), and GDPR compliance for managing legal documents and customer data.',
          ],
        },
        {
          title: 'AI Content Generator',
          category: 'Web Development',
          image: '🤖',
          description:
            'Web application powered by AI to generate and customize content with user-friendly interface.',
          technologies: ['Next.js', 'OpenAI API', 'React', 'Prisma', 'Vercel'],
          tasks: [
            'AI API integration',
            'Content generation pipeline',
            'User subscription system',
            'Content storage and retrieval',
            'Response streaming',
          ],
        },
        {
          title: 'Video Streaming Platform',
          category: 'Frontend',
          image: '📹',
          description:
            'Responsive video streaming platform with adaptive bitrate and user engagement features.',
          technologies: ['React', 'HLS.js', 'WebRTC', 'Socket.io', 'FFmpeg'],
          tasks: [
            'Video player implementation',
            'Adaptive streaming setup',
            'User comments and likes',
            'Search functionality',
            'Video upload system',
          ],
        },
      ],
    },
    testimonials: {
      title: 'Happy Clients Says',
      description:
        'Greetings, fellow digital explorer! I am Finiavana, a passionate and innovative developer.',
      items: [
        {
          name: 'John Doe',
          role: 'CEO',
          rating: 5,
          text: 'Greetings, fellow digital explorer! I am Finiavana, a passionate and innovative developer dedicated to crafting beautiful digital experiences.',
        },
        {
          name: 'Jane Smith',
          role: 'Designer',
          rating: 5,
          text: 'Greetings, fellow digital explorer! I am Finiavana, a passionate and innovative developer dedicated to crafting beautiful digital experiences.',
        },
        {
          name: 'Mike Johnson',
          role: 'Product Manager',
          rating: 5,
          text: 'Greetings, fellow digital explorer! I am Finiavana, a passionate and innovative developer dedicated to crafting beautiful digital experiences.',
        },
      ],
    },
    contact: {
      title: 'Get In Touch',
      description:
        'Feel free to reach out to me for any inquiries or collaborations',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        subject: 'Subject',
        message: 'Your Message',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        invalid: 'Invalid',
        error: 'Failed to send message. Please try again.',
      },
      info: {
        email: 'finiavanaandrianirina23@gmail.com',
        phone: '+261 32 13 932 63 / +261 38 97 551 98',
        location: 'CF 25 Faliarivo Ampitatafika Antananarivo',
        location_label: 'Location',
        phone_label: 'Phone',
        email_label: 'Email',
      },
    },
    newsletter: {
      title: 'Subscribe to my Newsletter',
      description: 'Get updates on my latest projects and insights.',
      placeholder: 'Enter your email',
      subscribe: 'Subscribe',
      success: 'Thank you for subscribing!',
    },
    footer: {
      quickLinks: 'Quick Links',
      portfolio: 'Portfolio',
      about: 'About',
      blog: 'Blog',
      contact: 'Contact',
      followMe: 'Follow Me',
      copyright: 'All rights reserved.',
    },
    aboutMore: {
      title: 'More About Me',
      description:
        'Greetings, fellow digital explorer! I am Finiavana, a passionate and innovative developer dedicated to crafting beautiful digital experiences. Welcome to my online sanctuary!',
      stats: {
        experience: 'Years Experience',
        projects: 'Project Complete',
        happy: 'Happy Clients',
        awards: 'Awards Winner',
      },
    },
    theme: 'Theme',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
  },
  fr: {
    nav: {
      portfolio: 'Portfolio',
      about: 'À propos',
      blog: 'Mon Blog',
      services: 'Services',
      contact: 'Me Contacter',
    },
    hero: {
      title: 'JE SUIS',
      subtitle: 'DÉVELOPPEUR FULLSTACK',
      name: 'Finiavana ANDRIANIRINA',
      description:
        'Développeur web spécialisé en frontend avec Next.js et en backend avec NestJS, je conçois des applications modernes, performantes et maintenables, avec une attention particulière portée à l’expérience utilisateur et à la qualité du code.',
      cta1: "M'engager",
      cta2: 'Lire Vidéo',
      statistics: {
        years: "Ans d'expérience",
        projects: 'Projets Complétés',
        front: 'Spécialiste Frontend',
        back: 'Spécialiste Backend',
        code: 'Code évolutif et scalable',
      },
    },
    services: {
      title: 'Mes Services',
      description:
        'Salutations, explorateur numérique! Je suis Finiavana, un développeur passionné et innovant dédié à créer de belles expériences numériques!',
      viewMore: 'Voir Plus',
      viewLess: 'View Moin',
      items: [
        {
          title: 'Développement Frontend',
          description:
            'Je conçois des interfaces utilisateur modernes, réactives et performantes avec Next.js et React, en mettant l’accent sur l’expérience utilisateur et la maintenabilité du code.',
          icon: '💻',
        },
        {
          title: 'Développement Backend',
          description:
            'Je crée des APIs robustes et évolutives avec NestJS, gérant la logique métier et la communication entre les bases de données et le frontend.',
          icon: '⚙️',
        },
        {
          title: 'Administration de Base de Données',
          description:
            'Je gère et optimise vos bases de données SQL et NoSQL, garantissant performance, sécurité et intégrité des données.',
          icon: '🗄️',
        },
        {
          title: 'Développement Mobile',
          description:
            'Je développe des applications mobiles cross-platform avec React Native, offrant des expériences fluides et natives sur iOS et Android.',
          icon: '📱',
        },
        {
          title: 'Gestion de Projet',
          description:
            'Je planifie, organise et supervise le développement de vos projets numériques pour assurer des livrables de qualité et respect des délais.',
          icon: '📊',
        },
        {
          title: 'Développement de Site Web',
          description:
            'Je crée des sites web modernes, responsives et optimisés SEO pour offrir une expérience utilisateur exceptionnelle.',
          icon: '🌐',
        },
        {
          title: 'Solutions E-commerce',
          description:
            'Je développe des boutiques en ligne performantes et sécurisées, intégrant des systèmes de paiement et gestion de produits adaptés.',
          icon: '🛒',
        },
        {
          title: 'Développement SaaS & Logiciel',
          description:
            'Je conçois des applications SaaS et logiciels modulaires, scalables et faciles à maintenir pour répondre aux besoins des entreprises.',
          icon: '☁️',
        },
        {
          title: 'Design UI/UX',
          description:
            'Je conçois des interfaces intuitives et ergonomiques, en mettant l’accent sur l’expérience utilisateur et la cohérence visuelle pour améliorer l’engagement et la satisfaction.',
          icon: '🎨',
        },
      ],
    },

    education: {
      title: 'Mon Éducation',
      items: [
        {
          year: '2017 - 2020',
          degree: 'Licence Professionnelle en Informatique Générale',
          description:
            'Formation professionnelle suivie à l’École Nationale d’Informatique de Fianarantsoa (ENI), axée sur une approche pratique et orientée métier du développement informatique. Cette formation m’a permis de développer des compétences solides en programmation, gestion de bases de données, développement d’applications web, ainsi qu’en méthodologies de travail professionnelles et travail en équipe. Elle constitue le socle de mon savoir-faire technique et de mon autonomie sur des projets concrets.',
        },
        {
          year: '2020 - 2022',
          degree: 'Master Professionnel en Informatique Générale',
          description:
            'Formation de niveau avancé suivie à l’École Nationale d’Informatique de Fianarantsoa (ENI), orientée vers la conception, le développement et la gestion de projets logiciels complexes. Elle approfondit les compétences en architecture logicielle, développement frontend et backend, bases de données, applications SaaS, ainsi qu’en gestion de projet et décisions techniques. Cette formation confirme ma capacité à concevoir et piloter des solutions complètes, robustes et évolutives.',
        },
      ],
    },
    skills: {
      title: 'Mes Compétences',
      items: [
        { name: 'Next JS', percentage: 80 },
        { name: 'React JS', percentage: 75 },
        { name: 'React Native', percentage: 70 },
        { name: 'Nest JS', percentage: 85 },
        { name: 'Node JS Express', percentage: 80 },
        { name: 'MongoDB', percentage: 75 },
        { name: 'PostgreSQL/MySQL', percentage: 85 },
        { name: 'Interface Utilisateur', percentage: 75 },
        { name: 'Expérience Utilisateur', percentage: 80 },
        { name: 'UI/UX', percentage: 70 },
        { name: 'Agile SCRUM', percentage: 70 },
        { name: 'JAVA Android', percentage: 70 },
      ],
    },
    projects: {
      title: 'Mes Derniers Projets',
      description:
        'Explorez mon portfolio de projets réalisés mettant en avant mon expertise en développement web, design et solutions full-stack.',
      filters: [
        'Tous',
        'Développement Web',
        'Application Mobile',
        'Frontend',
        'Backend',
      ],
      viewMore: 'Voir Plus',
      items: [
        {
          title: 'Module BackOffice pour Hello Archi',
          category: 'Frontend',
          image: '📊',
          description:
            "Dans le cadre du projet Hello Archi, j'ai assuré la conception et le développement complet du module BackOffice, en me concentrant sur la création d'un système centralisé, robuste et intuitif.",
          technologies: [
            'Next.js',
            'React',
            'Tanstack Query',
            'Tailwind CSS',
            'GitLab',
            'Socket.io',
          ],
          tasks: [
            'Gestion Commerciale Intégrée : Développement des fonctionnalités complètes de gestion des devis et des factures, incluant leur génération, suivi, automatisation et archivage sécurisé.',
            "Plateforme de Communication Unifiée : Intégration d'un système de messagerie interne et d'envoi d'emails transactionnels, permettant une communication fluide et tracée avec les clients et les équipes.",
            "Hub de Gestion Documentaire : Conception d'un espace dédié à la gestion centralisée des documents (contrats, plans, fichiers techniques) avec classement, contrôle d'accès et suivi des versions.",
            "Catalogue Produits Structuré : Mise en place d'un module de gestion des produits et de leurs catégories, offrant une organisation hiérarchique, des fiches détaillées et une maintenance simplifiée du catalogue.",
          ],
        },
        {
          title:
            "Architecture Backend & API d'un SaaS de Gestion Locative Automobile (MVP)",
          category: 'Backend',
          image: '⚙️',
          description:
            "Conception et développement de l'infrastructure serveur et des services backend pour une plateforme SaaS de gestion de location de voitures. Ce socle technique robuste a permis de supporter les fonctionnalités métier essentielles du MVP",
          technologies: [
            'NestJS',
            'TypeScript',
            'Swagger',
            'JWT',
            'MongoDB',
            'GitLab',
          ],
          tasks: [
            "API RESTful Sécurisée : Développement d'une API modulaire avec authentification JWT, gestion fine des permissions (RBAC) et validation stricte des données pour garantir l'intégrité du système.",
            'Modélisation des Données Métier : Conception et implémentation du schéma de base de données relationnelle pour les entités centrales : Clients, Véhicules (avec états et historique), Contrats de Location, Utilisateurs et Facturation.',
            'Logique Métier Centralisée : Implémentation du cœur algorithmique pour les processus critiques : calcul automatique des prix et frais, gestion de la disponibilité des véhicules en temps réel, génération des documents (contrats, factures) et envoi de notifications transactionnelles.',
            "Services d'Administration: Création des endpoints sécurisés alimentant l'interface d'administration, permettant la gestion CRUD complète du catalogue, des réservations et des clients, ainsi que l'accès aux données analytiques agrégées.",
            "Services Client: Développement des endpoints dédiés à l'expérience utilisateur publique : consultation du catalogue avec filtres, vérification de disponibilité, soumission de réservation et gestion du compte client.",
          ],
        },
        {
          title:
            "Interfaces Utilisateur & Expérience Client d'un SaaS de Location de Voiture (MVP)",
          category: 'Frontend',
          image: '📊',
          description:
            "Développement des interfaces utilisateur interactives et responsives pour les deux publics de la plateforme SaaS, en consommant l'API backend. L'accent a été mis sur l'ergonomie, la performance et l'adaptabilité.",
          technologies: [
            'Next.js',
            'React',
            'Tailwind',
            'SCSS',
            'Figma',
            'Shadcn UI',
          ],
          tasks: [
            "Tableau de Bord Administratif : Conception d'une interface de gestion complète avec visualisation des KPIs (taux d'occupation, revenus) et accès rapide aux principales actions.",
            "Modules de Gestion Intuitifs : Développement d'interfaces CRUD optimisées pour la gestion des véhicules (galeries photos, fiches techniques), des clients, des locations (calendrier de vue) et des utilisateurs internes.",
            "Workflows Guidés : Mise en place de parcours utilisateur clairs pour les tâches complexes comme la création d'un contrat de location ou la gestion d'un retour de véhicule.",
            "Landing Page & Catalogue Engagant : Création d'une vitrine attractive présentant la flotte de véhicules avec des filtres de recherche avancés (date, type, prix) et un système de réservation intégré.",
            "Parcours de Réservation Fluide : Conception d'un tunnel en étapes progressives (sélection, options, informations client, paiement) pour maximiser le taux de conversion.",
            "Espace Client Personnel (Customer Portal) : Développement d'une zone sécurisée où les clients peuvent visualiser leurs réservations passées et à venir, télécharger leurs documents et modifier leur profil.",
          ],
        },
        {
          title:
            'Architecture Backend Avancée pour SaaS de Gestion Locative (Version 1.0)',
          category: 'Backend',
          image: '⚙️',
          // image: '💪',
          description:
            "Développement de l'infrastructure backend complète de la version 1.0 du logiciel SaaS, évoluant du MVP vers une plateforme de gestion locative automobile complète et industrialisée",
          technologies: [
            'NestJS',
            'MongoDB',
            'Swagger',
            'Stripe API',
            'Mangopay API',
          ],
          tasks: [
            "Refonte et Consolidation de l'API : Rectification et optimisation des endpoints du MVP pour améliorer la stabilité, les performances et la maintenabilité. Migration vers une architecture microservices pour les modules critiques.",
            "Système d'États des Lieux Numériques : Conception d'un workflow complet pour la saisie, la signature électronique et l'archivage des états des lieux d'entrée et de sortie des véhicules, avec gestion des photos et des remarques.",
            "Moteur de Facturation Avancé : Développement d'un module de génération, suivi et gestion des devis et factures, intégrant les calculs de TVA, les acomptes et les relances automatisées.",
            "Hub de Configuration Centralisé : Création d'un service dédié aux paramètres de l'application (tarifs, taxes, emails type) et aux informations légales (CGU, mentions légales, politiques) dynamiquement administrables.",
            "Paiements & Cautions avec MangoPay : Intégration complète de l'API MangoPay pour la gestion des transactions (cartes, virements) et du cycle de vie des cautions (blocage, restitution, prélèvement en cas de dommage).",
            "Abonnements avec Stripe : Implémentation d'un système de subscription SaaS via Stripe, gérant les plans, les factures récurrentes, les changements d'abonnement et les webhooks pour la synchronisation.",
            "Sécurité et Conformité Renforcées : Mise en place d'un audit trail, chiffrement des données sensibles (paiement) et conformité au RGPD pour la gestion des documents légaux et des données clients.",
          ],
        },
        {
          title: 'Générateur de Contenu IA',
          category: 'Développement Web',
          image: '🤖',
          description:
            "Application web alimentée par l'IA pour générer et personnaliser du contenu.",
          technologies: ['Next.js', 'OpenAI API', 'React', 'Prisma', 'Vercel'],
          tasks: [
            'Intégration API IA',
            'Pipeline de génération de contenu',
            "Système d'abonnement utilisateur",
            'Stockage et récupération de contenu',
            'Diffusion de réponses',
          ],
        },
        {
          title: 'Plateforme de Streaming Vidéo',
          category: 'Frontend',
          image: '📹',
          description:
            'Plateforme de streaming vidéo responsive avec débit adaptatif et fonctionnalités engagement.',
          technologies: ['React', 'HLS.js', 'WebRTC', 'Socket.io', 'FFmpeg'],
          tasks: [
            'Implémentation lecteur vidéo',
            'Configuration streaming adaptatif',
            'Commentaires et likes utilisateurs',
            'Fonctionnalité de recherche',
            "Système d'upload vidéo",
          ],
        },
      ],
    },
    testimonials: {
      title: 'Clients Heureux Disent',
      description:
        'Salutations, explorateur numérique! Je suis Finiavana, un développeur passionné et innovant.',
      items: [
        {
          name: 'Jean Dupont',
          role: 'PDG',
          rating: 5,
          text: 'Salutations, explorateur numérique! Je suis Finiavana, un développeur passionné et innovant dédié à créer de belles expériences numériques.',
        },
        {
          name: 'Marie Martin',
          role: 'Designer',
          rating: 5,
          text: 'Salutations, explorateur numérique! Je suis Finiavana, un développeur passionné et innovant dédié à créer de belles expériences numériques.',
        },
        {
          name: 'Pierre Leclerc',
          role: 'Chef de Produit',
          rating: 5,
          text: 'Salutations, explorateur numérique! Je suis Finiavana, un développeur passionné et innovant dédié à créer de belles expériences numériques.',
        },
      ],
    },
    contact: {
      title: 'Me Contacter',
      description:
        "N'hésitez pas à me contacter pour toute demande de renseignements ou collaboration",
      form: {
        name: 'Votre Nom',
        email: 'Votre Email',
        subject: 'Sujet',
        message: 'Votre Message',
        send: 'Envoyer',
        sending: 'Envoi en cours...',
        success: 'Message envoyé avec succès!',
        invalid: 'Invalide',
        error: "Erreur lors de l'envoi. Veuillez réessayer.",
      },
      info: {
        email: 'finiavanaandrianirina23@gmail.com',
        phone: '+261 32 13 932 63 / +261 38 97 551 98',
        location: 'CF 25 Faliarivo Ampitatafika Antananarivo',
        location_label: 'Adresse',
        phone_label: 'Téléphone',
        email_label: 'Email',
      },
    },
    newsletter: {
      title: "S'abonner à ma Infolettre",
      description:
        'Obtenez des mises à jour sur mes derniers projets et mes perspectives.',
      placeholder: 'Entrez votre email',
      subscribe: "S'abonner",
      success: 'Merci de vous être abonné!',
    },
    footer: {
      quickLinks: 'Liens Rapides',
      portfolio: 'Portfolio',
      about: 'À propos',
      blog: 'Blog',
      contact: 'Contact',
      followMe: 'Suivez-moi',
      copyright: 'Tous droits réservés.',
    },
    aboutMore: {
      title: 'Plus À Propos de Moi',
      description:
        'Salutations, explorateur numérique! Je suis Finiavana, un développeur passionné et innovant dédié à créer de belles expériences numériques. Bienvenue dans mon sanctuaire en ligne!',
      stats: {
        experience: "Ans d'expérience",
        projects: 'Projets Complétés',
        happy: 'Clients Heureux',
        awards: 'Prix Gagnés',
      },
    },
    theme: 'Thème',
    darkMode: 'Mode Sombre',
    lightMode: 'Mode Clair',
  },
};

export type Language = keyof typeof translations;
