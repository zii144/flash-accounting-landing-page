import type { LocaleContent } from "./types";

// French dictionary. Terminology follows the App Store fr-FR metadata
// (fastlane/metadata/fr-FR in the app repo): "dépenses fantômes",
// "fuites d'argent invisibles", "le piège des abonnements",
// "saisie sans friction", "pare-feu de dépenses", "abonnements parasites".
const dict: LocaleContent = {
  seo: {
    title: "Compta Noir & Blanc — Notez une dépense en 3 secondes",
    description:
      "Compta Noir & Blanc : suivi de dépenses iOS minimaliste. Saisie en 3 secondes, données sur l'appareil, sans compte. Voyez ce qui vide votre solde en silence.",
  },
  siteContent: {
    brand: {
      name: "Compta Noir & Blanc",
      nameEn: "Flash Accounting",
      tagline:
        "Traquez les dépenses que vous ne voyez jamais passer. Saisie sans friction. Reprenez le contrôle.",
      description:
        "Le café pris sur le chemin du bureau, les $4 de frais de livraison à midi, le billet racheté après le train manqué, et ces $2.99 d'iCloud prélevés en silence depuis trois ans — ce sont ces fuites d'argent invisibles, pas les gros achats, qui font fondre votre solde.",
    },
    download: {
      appStoreUrl: "#",
      googlePlayUrl: "#",
      appStoreLabel: "Gratuit sur l'App Store",
      googlePlayLabel: "Bientôt sur Android",
      googlePlayEnabled: false,
    },
    nav: [
      { name: "Fonctionnalités", href: "#features" },
      { name: "Comment ça marche", href: "#how-it-works" },
      { name: "Captures d'écran", href: "#screenshots" },
      { name: "Tarifs", href: "#pricing" },
      { name: "FAQ", href: "#faq" },
    ],
    hero: {
      eyebrow: "Pas de gros achats ce mois-ci — alors pourquoi le solde baisse ?",
      headlinePrefix: "Pas de gros achats,",
      rotatingWords: [
        "où est passé l'argent ?",
        "des fuites invisibles",
        "des dépenses fantômes",
        "il est temps de noter",
      ],
      stats: [
        { value: "3 sec", label: "pour noter une dépense", company: "Saisie sans friction" },
        { value: "16", label: "langues prises en charge", company: "Interface multilingue" },
        { value: "500", label: "entrées locales gratuites", company: "Local d'abord" },
        { value: "À tout moment", label: "pour exporter", company: "Vos données, entre vos mains" },
      ],
    },
    features: {
      eyebrow: "Fonctionnalités",
      title: "Voyez chaque",
      titleMuted: "dépense invisible.",
      items: [
        {
          number: "01",
          title: "Traquez les dépenses invisibles",
          descriptionParts: [
            { text: "Cafés, livraisons, petits abonnements — les " },
            { text: "dépenses fantômes", highlight: true },
            {
              text: " pèsent plus lourd qu'on ne croit. Notez chaque montant et la page statistiques affiche le ",
            },
            { text: "total des fuites invisibles", highlight: true },
            { text: " du mois, d'un coup d'œil." },
          ],
          visual: "deploy",
        },
        {
          number: "02",
          title: "Saisie sans friction",
          descriptionParts: [
            { text: "Montant, description", highlight: true },
            { text: " — terminé en " },
            { text: "trois secondes", highlight: true },
            {
              text: ". Pas de catégories complexes, pas de rappels collants, pas d'écran qu'on a envie de fermer aussitôt ouvert. ",
            },
            { text: "Notez et passez à autre chose", highlight: true },
            { text: " — votre journée continue." },
          ],
          visual: "ai",
        },
        {
          number: "03",
          title: "Déjouez le piège des abonnements",
          descriptionParts: [
            { text: "Enregistrez vos " },
            { text: "abonnements", highlight: true },
            {
              text: " récurrents comme des dépenses, et le résumé mensuel révèle combien d'apps vous nourrissez sans y penser. Dressez un ",
            },
            { text: "pare-feu de dépenses", highlight: true },
            { text: " et résiliez les abonnements " },
            { text: "parasites", highlight: true },
            { text: "." },
          ],
          visual: "collab",
        },
        {
          number: "04",
          title: "Privé par défaut, stocké sur l'appareil",
          descriptionParts: [
            { text: "Fonctionne hors ligne", highlight: true },
            { text: ", et " },
            { text: "vos données restent sur votre appareil", highlight: true },
            {
              text: ". Le Pro optionnel débloque la synchro cloud pour que votre livre de comptes survive aux changements de téléphone. Mode sombre et interface entièrement multilingue inclus.",
            },
          ],
          visual: "security",
        },
      ],
    },
    howItWorks: {
      eyebrow: "Comment ça marche",
      title: "Trois étapes pour",
      titleMuted: "reprendre le contrôle.",
      status: "Local d'abord · Commencez sans compte",
      steps: [
        {
          number: "I",
          title: "Notez en trois secondes",
          description:
            "Saisissez le montant et une description, puis touchez « Dépense » ou « Revenu ». L'interface est minimale — une entrée prend environ trois secondes.",
          preview: `Montant : 4.50
Description : café

[ Dépense ]  [ Revenu ]`,
        },
        {
          number: "II",
          title: "Voyez les fuites invisibles",
          description:
            "Le livre de comptes affiche le total net en continu, chaque dépense et chaque revenu clairement listés. Les dépenses fantômes n'ont plus où se cacher.",
          preview: `Total : $12,480

- $4.50   Dépense  café
- $18     Dépense  livraison
+ $3,200  Revenu   freelance`,
        },
        {
          number: "III",
          title: "Passez vos abonnements en revue",
          description:
            "Basculez sur les statistiques, par jour ou par mois. Filtrez par semaine ou par mois, triez par montant ou par date — le piège des abonnements saute aux yeux.",
          preview: `Revenus  +$3,200
Dépenses -$1,952
Net      +$1,248

Filtre : Ce mois | Tri : Récents`,
        },
      ],
    },
    localFirst: {
      eyebrow: "Local d'abord",
      title: "Vos données restent",
      titleBreak: "entre vos mains.",
      description:
        "Compta Noir & Blanc stocke tout sur votre appareil par défaut. Commencez à noter sans compte ; activez la synchro cloud seulement quand vous voulez une sauvegarde.",
      stats: [
        { value: "500", label: "entrées locales gratuites" },
        { value: "0", label: "connexion forcée" },
        { value: "À tout moment", label: "export et sauvegarde" },
      ],
      highlights: [
        { title: "Les données vivent dans votre téléphone", detail: "Rapide, fiable, fonctionne sans internet" },
        { title: "500 entrées gratuites", detail: "Largement de quoi commencer et faire l'essai" },
        { title: "Synchro cloud optionnelle", detail: "Sauvegardez sur plusieurs appareils au besoin" },
        { title: "Export tableur en un geste", detail: "Emportez votre sauvegarde partout" },
        { title: "Modifier et supprimer", detail: "Corrigez n'importe quelle entrée à tout moment" },
        { title: "Navigation paginée", detail: "Défilement fluide même avec beaucoup d'entrées" },
      ],
    },
    metrics: {
      eyebrow: "En chiffres",
      title: "Un outil concentré,",
      titleBreak: "zéro bruit.",
      items: [
        { value: 2, suffix: "", label: "onglets principaux — livre et statistiques" },
        { value: 16, suffix: "", label: "langues prises en charge" },
        { value: 500, suffix: "", label: "entrées locales gratuites" },
        { value: 5, suffix: "", label: "filtres temporels — de « tout » à cette année" },
      ],
    },
    languages: {
      eyebrow: "Langues et feuille de route",
      title: "Pensée pour les utilisateurs",
      titleBreak: "du monde entier.",
      description: "Détecte la langue de votre appareil, avec une localisation complète.",
      descriptionBreak: "D'autres fonctionnalités arrivent.",
      items: [
        { name: "繁體中文", native: "繁體中文" },
        { name: "English", native: "English" },
        { name: "日本語", native: "日本語" },
        { name: "Español", native: "Español" },
        { name: "Français", native: "Français" },
        { name: "Deutsch", native: "Deutsch" },
        { name: "हिन्दी", native: "हिन्दी" },
        { name: "Português", native: "Português" },
        { name: "Русский", native: "Русский" },
        { name: "Bahasa Indonesia", native: "Bahasa Indonesia" },
        { name: "한국어", native: "한국어" },
        { name: "Italiano", native: "Italiano" },
        { name: "Türkçe", native: "Türkçe" },
        { name: "Tiếng Việt", native: "Tiếng Việt" },
        { name: "ไทย", native: "ไทย" },
        { name: "Polski", native: "Polski" },
      ],
      comingSoon: [
        { name: "Sauvegarde et synchro cloud", category: "Fonction Pro" },
        { name: "Scan de reçus + OCR", category: "Bientôt disponible" },
        { name: "Export PDF et tableur", category: "Bientôt disponible" },
      ],
    },
    privacy: {
      eyebrow: "Confidentialité",
      title: "Vos finances,",
      titleBreak: "votre appareil.",
      description:
        "Compta Noir & Blanc est conçue local d'abord. Notez vos dépenses sans compte ; activez la synchro cloud seulement quand vous voulez une sauvegarde.",
      badges: ["Fonctionne hors ligne", "Sur l'appareil uniquement", "Export à tout moment", "Connexion optionnelle", "Synchro cloud"],
      items: [
        {
          title: "Local d'abord",
          description:
            "Les transactions sont stockées sur votre appareil par défaut. Aucune inscription — ouvrez l'app et commencez à noter.",
        },
        {
          title: "Connexion optionnelle",
          description:
            "Connectez-vous seulement quand vous voulez la synchro cloud. « Se connecter avec Apple » est disponible sur iOS.",
        },
        {
          title: "Vous contrôlez vos données",
          description:
            "Exportez une sauvegarde tableur à tout moment, modifiez ou supprimez une entrée, ou effacez tout depuis les réglages.",
        },
        {
          title: "Synchro cloud optionnelle",
          description:
            "Sauvegardez sur plusieurs appareils et restaurez tout en changeant de téléphone. Poussez ou récupérez les données cloud depuis les réglages.",
        },
      ],
    },
    testimonials: {
      label: "Ce qu'en disent les utilisateurs",
      marqueeLabel: "Suivre ses dépenses devrait être sans friction",
      marqueeItems: [
        "Saisie en 3 secondes",
        "Interface minimale",
        "Mode hors ligne",
        "Export à tout moment",
        "Statistiques",
        "Mode sombre",
        "16 langues",
        "Synchro cloud",
      ],
      items: [
        {
          quote:
            "Pas de gros achats ce mois-ci, et pourtant mon solde avait baissé. Deux semaines de saisie m'ont montré les coupables : le café et les livraisons.",
          author: "Camille",
          role: "Freelance",
          company: "Paris",
          metric: "Fuites invisibles repérées",
        },
        {
          quote:
            "Je déteste les apps de dépenses aux mille catégories. Ici c'est montant plus description, trois secondes et c'est plié. J'ai enfin tenu sur la durée.",
          author: "Julien",
          role: "Gérant de petite entreprise",
          company: "Lyon",
          metric: "Saisie sans friction",
        },
        {
          quote:
            "Noter chaque abonnement un par un m'a fait un choc — autant de renouvellements automatiques chaque mois. Les parasites sont enfin résiliés.",
          author: "Élodie",
          role: "Employée de bureau",
          company: "Montréal",
          metric: "Piège des abonnements exposé",
        },
        {
          quote:
            "L'interface est fluide et le mode sombre repose les yeux le soir. Mes données restent sur mon téléphone — ça, c'est la tranquillité.",
          author: "Thomas",
          role: "Designer",
          company: "Bruxelles",
          metric: "Local d'abord, l'esprit tranquille",
        },
      ],
    },
    pricing: {
      eyebrow: "Tarifs",
      title: "Commencez gratuitement.",
      titleMuted: "Synchronisez quand vous voulez.",
      description:
        "Le suivi local est entièrement gratuit. Débloquez les entrées illimitées avec l'achat unique Plus, ou passez à Pro pour la sauvegarde et la synchro multi-appareils.",
      annualBadge: "$14.99/an",
      footnote:
        "Les prix Plus et Pro sont indicatifs — voir l'App Store / Google Play pour les tarifs définitifs.",
      plans: [
        {
          id: "free",
          name: "Gratuit",
          description: "Suivi local, zéro barrière",
          price: { monthly: 0, annual: 0, oneTime: null },
          features: [
            "Jusqu'à 500 entrées locales",
            "Saisie des dépenses et des revenus",
            "Statistiques, filtres et tri",
            "Export tableur",
            "16 langues + mode sombre",
            "Aucune connexion requise",
          ],
          cta: "Télécharger gratuitement",
          popular: false,
        },
        {
          id: "plus",
          name: "Plus",
          description: "Achat unique, entrées locales illimitées",
          price: { monthly: null, annual: null, oneTime: 14.99 },
          features: [
            "Tout le plan Gratuit",
            "Entrées locales illimitées",
            "Un seul achat, pas d'abonnement",
            "Ni compte, ni cloud",
            "Vos données restent sur l'appareil",
            "Restauration des achats",
          ],
          cta: "Débloquer le local illimité",
          popular: false,
        },
        {
          id: "pro",
          name: "Pro",
          description: "Un livre de comptes synchronisé qui survit aux changements de téléphone",
          price: { monthly: 1.99, annual: 1.25, oneTime: null },
          features: [
            "Tout le plan Plus",
            "Stockage cloud illimité",
            "Envoi des entrées locales vers le cloud",
            "Restauration depuis le cloud",
            "Récupération sur un nouveau téléphone",
            "« Se connecter avec Apple » optionnel",
            "Restauration des achats",
          ],
          cta: "Débloquer la synchro cloud",
          popular: true,
        },
        {
          id: "coming-soon",
          name: "Bientôt disponible",
          description: "D'autres fonctions qui font gagner du temps",
          price: { monthly: null, annual: null, oneTime: null },
          features: [
            "Scan de reçus + OCR",
            "Montant et commerçant pré-remplis",
            "Export PDF",
            "Modèles de tableur",
            "Catégorisation plus futée",
            "Plus de formats d'export",
          ],
          cta: "Rejoindre la liste d'attente",
          popular: false,
        },
      ],
    },
    cta: {
      title: "Prêt à reprendre le contrôle",
      titleBreak: "de votre argent ?",
      description:
        "Tout commence en voyant chaque dépense qui vous échappe d'habitude. Téléchargez Compta Noir & Blanc, notez une entrée en trois secondes et attrapez les dépenses fantômes.",
      footnote: "Commencez gratuitement · 500 entrées locales",
    },
    faqSection: {
      eyebrow: "FAQ",
      title: "À propos de Compta Noir & Blanc",
      description:
        "Des réponses rapides sur ce qu'est Flash Accounting, son modèle de confidentialité, ses formules et ses plateformes.",
    },
    screenshotsSection: {
      eyebrow: "Écrans de l'app",
      title: "Une interface minimale,",
      titleMuted: "claire au premier regard.",
      description:
        "Deux onglets principaux : livre et statistiques. Les réglages à un geste — saisie sans friction, fermez dès que c'est noté.",
    },
    footer: {
      links: {
        Produit: [
          { name: "Fonctionnalités", href: "#features" },
          { name: "Comment ça marche", href: "#how-it-works" },
          { name: "Tarifs", href: "#pricing" },
          { name: "FAQ", href: "#faq" },
          { name: "Langues", href: "#integrations" },
        ],
        App: [
          { name: "Onglet livre", href: "#screenshots" },
          { name: "Onglet statistiques", href: "#screenshots" },
          { name: "Réglages", href: "#screenshots" },
          { name: "Choix de la langue", href: "#integrations" },
        ],
        Entreprise: [
          { name: "À propos", href: "#" },
          { name: "Assistance", href: "/support" },
          { name: "Confidentialité", href: "/privacy" },
          { name: "Contact", href: "/support" },
        ],
        Légal: [
          { name: "Politique de confidentialité", href: "/privacy" },
          { name: "Conditions d'utilisation", href: "/terms" },
          { name: "Données et confidentialité", href: "/data" },
        ],
      },
      social: [
        { name: "Threads", href: "#" },
        { name: "Instagram", href: "#" },
        { name: "App Store", href: "#" },
      ],
      status: "Local d'abord · Sur votre téléphone uniquement",
      copyright: "2026 Compta Noir & Blanc. Tous droits réservés.",
    },
    ui: {
      monthlyLabel: "Mensuel",
      annualLabel: "Annuel",
      billingToggleAria: "Basculer en facturation annuelle",
      popularBadge: "Synchro cloud",
      oneTimeSuffix: "achat unique",
      perMonthSuffix: "/mois",
      comingSoonPrice: "Bientôt",
      favoriteFeature: "Fonction préférée",
      panelTitle: "Capacités intégrées",
      panelStatus: "Fonctionne hors ligne",
      heroImageAlt: "Écran de saisie de Compta Noir & Blanc",
      mockMonthlyAutopay: "Débits auto",
      mockForgotWhy: "Pourquoi déjà ?",
      mockAutoRenews: "Renouv. auto",
      mockMonthlyFixedSpend: "Fixes du mois",
      mockExpenseButton: "Dépense",
      mockIncomeButton: "Revenu",
      mockNetTotal: "Total net",
      mockThisMonth: "Ce mois-ci",
      mockByAmount: "Par montant",
    },
  },
  faqItems: [
    {
      question: "Qu'est-ce que Compta Noir & Blanc (Flash Accounting) ?",
      answer:
        "Compta Noir & Blanc (Flash Accounting) est une app iOS de suivi des dépenses personnelles, pensée pour attraper les dépenses invisibles grâce à une saisie sans friction. Saisissez un montant et une description, c'est terminé en trois secondes environ — assez pour révéler les cafés, livraisons et petits abonnements qui vident votre solde en silence.",
    },
    {
      question: "En quoi est-elle différente des autres apps de dépenses ?",
      answer:
        "Elle laisse tomber les catégories complexes et les rappels collants au profit d'une saisie minimale montant + description. L'interface est un noir et blanc épuré, local d'abord, utilisable sans se connecter, avec une page statistiques qui montre d'un coup d'œil les fuites invisibles du mois et le piège des abonnements.",
    },
    {
      question: "Où sont stockées mes données ? Est-ce sûr ?",
      answer:
        "Par défaut, chaque transaction est stockée uniquement sur votre appareil et fonctionne hors ligne — aucune inscription requise. Quand vous voulez une sauvegarde, la synchro cloud Pro optionnelle est là. Vous pouvez exporter un tableur, modifier ou supprimer des entrées à tout moment ; vos données restent sous votre contrôle.",
    },
    {
      question: "Faut-il un compte pour l'utiliser ?",
      answer:
        "Non. La formule gratuite suit jusqu'à 500 entrées, entièrement sur votre appareil. Vous ne vous connectez que si vous voulez la synchro cloud et la restauration multi-appareils (« Se connecter avec Apple » est disponible sur iOS).",
    },
    {
      question: "Quelles langues sont prises en charge ?",
      answer:
        "16 langues : 繁體中文, English, 日本語, Español, Français, Deutsch, हिन्दी, Português, Русский, Bahasa Indonesia, 한국어, Italiano, Türkçe, Tiếng Việt, ไทย et Polski — avec mode sombre et détection automatique de la langue de l'appareil.",
    },
    {
      question: "Quelle est la différence entre Gratuit, Plus et Pro ?",
      answer:
        "Gratuit : jusqu'à 500 entrées locales, saisie des dépenses et des revenus, statistiques avec filtres et tri, export tableur et interface en 16 langues. Plus (prix indicatif : $14.99 en achat unique) supprime la limite d'entrées pour un suivi local illimité — pas d'abonnement, pas de compte, pas de cloud. Pro (prix indicatif : $1.99/mois ou $14.99/an) inclut tout Plus et ajoute le stockage cloud illimité, l'envoi vers le cloud, la restauration depuis le cloud et la récupération sur un nouveau téléphone.",
    },
    {
      question: "Quand arrive la version Android ?",
      answer:
        "Une version Android est prévue, mais pas encore disponible sur Google Play. Surveillez le site officiel ou la page App Store pour l'annonce de lancement.",
    },
    {
      question: "À qui s'adresse Compta Noir & Blanc ?",
      answer:
        "À ceux qui veulent noter vite, sans catégories complexes ; aux freelances, employés de bureau et gérants de petites entreprises qui traquent les dépenses invisibles et le piège des abonnements ; et aux utilisateurs soucieux de leur vie privée qui veulent garder leurs données sur leur propre appareil.",
    },
  ],
  appScreenshots: [
    {
      id: "accounting",
      title: "Livre",
      description:
        "Montant, description, terminé en trois secondes. Le total net garde les dépenses fantômes bien en vue.",
      src: "/screenshots/accounting.png",
      alt: "Écran de saisie de Compta Noir & Blanc avec le formulaire de dépense et la liste des transactions",
    },
    {
      id: "statistics",
      title: "Statistiques",
      description:
        "Cartes de synthèse revenus, dépenses et net. Vue par jour ou par mois, filtres temporels, tri des entrées.",
      src: "/screenshots/statistics.png",
      alt: "Écran statistiques de Compta Noir & Blanc avec cartes de synthèse et listes groupées",
    },
    {
      id: "settings",
      title: "Réglages",
      description:
        "Export tableur, changement de langue, limite d'entrées locales et synchro cloud optionnelle.",
      src: "/screenshots/settings.png",
      alt: "Écran réglages de Compta Noir & Blanc avec options d'export et de langue",
    },
  ],
};

export default dict;
