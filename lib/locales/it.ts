import type { LocaleContent } from "./types";

// Italian dictionary. Terminology follows the App Store it metadata
// (fastlane/metadata/it in the app repo): "spese fantasma" (ghost spending),
// "perdite invisibili" (invisible money leaks), "trappola degli abbonamenti"
// (subscription fatigue), "registrazione senza attrito" (frictionless logging),
// "firewall delle spese" (spending firewall), "abbonamenti parassiti"
// (parasite subscriptions).
const dict: LocaleContent = {
  seo: {
    title: "Conti Bianco Nero — Registra una spesa in 3 secondi",
    description:
      "Conti Bianco Nero (Flash Accounting): app di spese iOS minimale — registri in 3 secondi, local-first, senza account. Scova le spese fantasma che svuotano il saldo.",
  },
  siteContent: {
    brand: {
      name: "Conti Bianco Nero",
      nameEn: "Flash Accounting",
      tagline:
        "Traccia le spese che non noti. Registrazione senza attrito. Riprendi il controllo.",
      description:
        "Il caffè al volo andando al lavoro, i $4 di consegna a pranzo, il supplemento pagato per il treno perso e quei $2.99 di iCloud che si rinnovano in silenzio da tre anni: sono queste perdite invisibili, non i grandi acquisti, il vero motivo per cui il saldo continua a calare.",
    },
    download: {
      appStoreUrl: "#",
      googlePlayUrl: "#",
      appStoreLabel: "Gratis su App Store",
      googlePlayLabel: "Android in arrivo",
      googlePlayEnabled: false,
    },
    nav: [
      { name: "Funzionalità", href: "#features" },
      { name: "Come funziona", href: "#how-it-works" },
      { name: "Schermate", href: "#screenshots" },
      { name: "Piani", href: "#pricing" },
      { name: "FAQ", href: "#faq" },
    ],
    hero: {
      eyebrow: "Niente grandi acquisti questo mese — perché il saldo è sceso?",
      headlinePrefix: "Niente grandi spese,",
      rotatingWords: [
        "dove sono finiti i soldi",
        "sono perdite invisibili",
        "sono le spese fantasma",
        "è ora di registrarle",
      ],
      stats: [
        { value: "3 sec", label: "per registrare una spesa", company: "Senza attrito" },
        { value: "16", label: "lingue supportate", company: "Interfaccia multilingue" },
        { value: "500", label: "record locali gratuiti", company: "Local-first" },
        { value: "Sempre", label: "esportabile", company: "Dati nelle tue mani" },
      ],
    },
    features: {
      eyebrow: "Funzionalità",
      title: "Vedi ogni singola",
      titleMuted: "spesa invisibile.",
      items: [
        {
          number: "01",
          title: "Scova le spese che non noti",
          descriptionParts: [
            { text: "Caffè, delivery, piccoli abbonamenti — le " },
            { text: "spese fantasma", highlight: true },
            {
              text: " sommano molto più di quanto pensi. Registra ogni voce e la pagina statistiche ti mostra a colpo d'occhio il ",
            },
            { text: "totale delle perdite invisibili", highlight: true },
            { text: " di questo mese." },
          ],
          visual: "deploy",
        },
        {
          number: "02",
          title: "Registrazione senza attrito",
          descriptionParts: [
            { text: "Importo, descrizione", highlight: true },
            { text: " — fatto in " },
            { text: "tre secondi", highlight: true },
            {
              text: ". Niente categorie complicate, niente promemoria insistenti, niente schermata da chiudere appena aperta. ",
            },
            { text: "Registri e vai avanti", highlight: true },
            { text: " con la tua giornata." },
          ],
          visual: "ai",
        },
        {
          number: "03",
          title: "Smaschera la trappola degli abbonamenti",
          descriptionParts: [
            { text: "Segna gli " },
            { text: "abbonamenti", highlight: true },
            {
              text: " ricorrenti come spese: il riepilogo mensile ti rivela quante app stai mantenendo senza accorgertene. Alza un ",
            },
            { text: "firewall delle spese", highlight: true },
            { text: " e taglia gli abbonamenti " },
            { text: "parassiti", highlight: true },
            { text: "." },
          ],
          visual: "collab",
        },
        {
          number: "04",
          title: "Privacy prima di tutto, dati sul dispositivo",
          descriptionParts: [
            { text: "Funziona offline", highlight: true },
            { text: " e " },
            { text: "i dati restano sul tuo dispositivo", highlight: true },
            {
              text: ". Il Pro opzionale sblocca la sync cloud, così il registro sopravvive al cambio di telefono. Incluse la modalità scura e un'interfaccia completamente multilingue.",
            },
          ],
          visual: "security",
        },
      ],
    },
    howItWorks: {
      eyebrow: "Come funziona",
      title: "Tre passi per",
      titleMuted: "riprendere il controllo.",
      status: "Local-first · Inizia senza login",
      steps: [
        {
          number: "I",
          title: "Registra in tre secondi",
          description:
            "Digita l'importo e una descrizione, poi tocca \"Spesa\" o \"Entrata\". L'interfaccia è minimale: una voce richiede circa tre secondi.",
          preview: `Importo: 4.50
Descrizione: caffè

[ Spesa ]  [ Entrata ]`,
        },
        {
          number: "II",
          title: "Vedi le perdite invisibili",
          description:
            "Il registro mostra il totale netto sempre aggiornato, con ogni spesa ed entrata elencata chiaramente. Le spese fantasma non hanno più dove nascondersi.",
          preview: `Totale: $12,480

- $4.50   Spesa    caffè
- $18     Spesa    delivery
+ $3,200  Entrata  freelance`,
        },
        {
          number: "III",
          title: "Controlla abbonamenti e spese",
          description:
            "Passa alle statistiche e guarda per giorno o per mese. Filtra per settimana o mese, ordina per importo o data: la trappola degli abbonamenti salta all'occhio.",
          preview: `Entrate  +$3,200
Spese    -$1,952
Netto    +$1,248

Filtro: Questo mese | Ordina: Recenti`,
        },
      ],
    },
    localFirst: {
      eyebrow: "Local-first",
      title: "I tuoi dati restano",
      titleBreak: "nelle tue mani.",
      description:
        "Conti Bianco Nero salva tutto sul tuo dispositivo di default. Inizia a registrare senza account; attiva la sync cloud solo quando vuoi un backup.",
      stats: [
        { value: "500", label: "record locali gratuiti" },
        { value: "0", label: "login obbligatori" },
        { value: "Sempre", label: "esporta e fai backup" },
      ],
      highlights: [
        { title: "I dati vivono sul telefono", detail: "Veloce, affidabile, funziona anche offline" },
        { title: "500 record gratuiti", detail: "Più che abbastanza per iniziare e provarla" },
        { title: "Sync cloud opzionale", detail: "Backup tra dispositivi quando ti serve" },
        { title: "Esporta con un tocco", detail: "Il backup in foglio di calcolo, ovunque" },
        { title: "Modifica ed elimina", detail: "Correggi qualsiasi voce in ogni momento" },
        { title: "Navigazione a pagine", detail: "Scorrimento fluido anche con tanti record" },
      ],
    },
    metrics: {
      eyebrow: "I numeri",
      title: "Uno strumento focalizzato,",
      titleBreak: "zero rumore.",
      items: [
        { value: 2, suffix: "", label: "schede principali: registro e statistiche" },
        { value: 16, suffix: "", label: "lingue supportate" },
        { value: 500, suffix: "", label: "record locali gratuiti" },
        { value: 5, suffix: "", label: "filtri temporali, da sempre a quest'anno" },
      ],
    },
    languages: {
      eyebrow: "Lingue e roadmap",
      title: "Pensata per chi la usa",
      titleBreak: "in tutto il mondo.",
      description: "Rileva la lingua del dispositivo, con localizzazione completa.",
      descriptionBreak: "Altre funzioni in arrivo.",
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
        { name: "Backup e sync cloud", category: "Funzione Pro" },
        { name: "Scansione ricevute + OCR", category: "In arrivo" },
        { name: "Esportazione PDF e fogli di calcolo", category: "In arrivo" },
      ],
    },
    privacy: {
      eyebrow: "Privacy",
      title: "Le tue finanze,",
      titleBreak: "il tuo dispositivo.",
      description:
        "Conti Bianco Nero è progettata local-first. Registra le spese senza account; attiva la sync cloud solo quando vuoi un backup.",
      badges: ["Funziona offline", "Solo sul dispositivo", "Esporta quando vuoi", "Login opzionale", "Sync cloud"],
      items: [
        {
          title: "Local-first",
          description:
            "Le transazioni restano sul tuo dispositivo di default. Nessuna registrazione: apri l'app e inizia a segnare.",
        },
        {
          title: "Login opzionale",
          description:
            "Accedi solo quando vuoi la sync cloud. Su iOS è disponibile Accedi con Apple.",
        },
        {
          title: "I dati li controlli tu",
          description:
            "Esporta un backup in foglio di calcolo quando vuoi, modifica o elimina le singole voci, o cancella tutti i record dalle Impostazioni.",
        },
        {
          title: "Sync cloud opzionale",
          description:
            "Backup tra dispositivi e ripristino quando cambi telefono. Invia o scarica i dati cloud dalle Impostazioni.",
        },
      ],
    },
    testimonials: {
      label: "Cosa dicono gli utenti",
      marqueeLabel: "Registrare le spese dev'essere senza attrito",
      marqueeItems: [
        "Registri in 3 secondi",
        "Interfaccia minimale",
        "Modalità offline",
        "Esporta quando vuoi",
        "Statistiche",
        "Modalità scura",
        "16 lingue",
        "Sync cloud",
      ],
      items: [
        {
          quote:
            "Nessun grande acquisto questo mese, eppure il saldo era sceso. Dopo due settimane di registrazioni l'ho capito: caffè e delivery erano i colpevoli.",
          author: "Giulia",
          role: "Freelance",
          company: "Milano",
          metric: "Perdite invisibili scovate",
        },
        {
          quote:
            "Odio le app di spese con mille categorie. Qui è importo più descrizione, tre secondi e ho chiuso. Finalmente sono riuscito a essere costante.",
          author: "Marco",
          role: "Titolare di piccola impresa",
          company: "Torino",
          metric: "Registrazione senza attrito",
        },
        {
          quote:
            "Registrare gli abbonamenti uno per uno mi ha scioccata: quanti rinnovi automatici ogni mese! I parassiti finalmente sono stati disdetti.",
          author: "Elena",
          role: "Impiegata",
          company: "Roma",
          metric: "Trappola degli abbonamenti smascherata",
        },
        {
          quote:
            "L'interfaccia è fluida e la modalità scura di sera è un piacere per gli occhi. I miei dati restano sul telefono: questa sì che è tranquillità.",
          author: "Davide",
          role: "Designer",
          company: "Bologna",
          metric: "Tranquillità local-first",
        },
      ],
    },
    pricing: {
      eyebrow: "Piani",
      title: "Inizia gratis.",
      titleMuted: "Sincronizza quando vuoi.",
      description:
        "La registrazione locale è completamente gratuita. Sblocca record illimitati con l'acquisto una tantum di Plus, o passa a Pro per backup e sync tra dispositivi.",
      annualBadge: "$14.99/anno",
      footnote:
        "I prezzi di Plus e Pro sono indicativi: fanno fede App Store / Google Play.",
      plans: [
        {
          id: "free",
          name: "Gratis",
          description: "Registrazione locale, zero barriere",
          price: { monthly: 0, annual: 0, oneTime: null },
          features: [
            "Fino a 500 record locali",
            "Registrazione di spese ed entrate",
            "Statistiche, filtri e ordinamento",
            "Esportazione in foglio di calcolo",
            "16 lingue + modalità scura",
            "Nessun login richiesto",
          ],
          cta: "Scarica gratis",
          popular: false,
        },
        {
          id: "plus",
          name: "Plus",
          description: "Acquisto una tantum, record locali illimitati",
          price: { monthly: null, annual: null, oneTime: 14.99 },
          features: [
            "Tutto quello che c'è in Gratis",
            "Record locali illimitati",
            "Compri una volta, niente abbonamento",
            "Niente account, niente cloud",
            "I dati restano sul tuo dispositivo",
            "Ripristino degli acquisti",
          ],
          cta: "Sblocca il locale illimitato",
          popular: false,
        },
        {
          id: "pro",
          name: "Pro",
          description: "Registro sincronizzato nel cloud che sopravvive al cambio di telefono",
          price: { monthly: 1.99, annual: 1.25, oneTime: null },
          features: [
            "Tutto quello che c'è in Plus",
            "Spazio cloud illimitato",
            "Invia i record locali al cloud",
            "Ripristina dal cloud",
            "Recupera i dati su un telefono nuovo",
            "Accedi con Apple opzionale",
            "Ripristino degli acquisti",
          ],
          cta: "Sblocca la sync cloud",
          popular: true,
        },
        {
          id: "coming-soon",
          name: "In arrivo",
          description: "Altre funzioni salva-tempo",
          price: { monthly: null, annual: null, oneTime: null },
          features: [
            "Scansione ricevute + OCR",
            "Importo ed esercente compilati da soli",
            "Esportazione PDF",
            "Modelli per fogli di calcolo",
            "Categorie più intelligenti",
            "Più formati di esportazione",
          ],
          cta: "Entra in lista d'attesa",
          popular: false,
        },
      ],
    },
    cta: {
      title: "Pronto a riprendere",
      titleBreak: "il controllo dei tuoi soldi?",
      description:
        "Tutto comincia dal vedere le spese che di solito ti sfuggono. Scarica Conti Bianco Nero, registra una voce in tre secondi e cattura le spese fantasma.",
      footnote: "Inizia gratis · 500 record locali",
    },
    faqSection: {
      eyebrow: "FAQ",
      title: "Su Conti Bianco Nero",
      description:
        "Risposte rapide su cos'è Flash Accounting, il suo modello di privacy, i piani e le piattaforme supportate.",
    },
    screenshotsSection: {
      eyebrow: "Schermate dell'app",
      title: "Un'interfaccia minimale,",
      titleMuted: "chiara a colpo d'occhio.",
      description:
        "Due schede principali: registro e statistiche. Impostazioni a un tocco — registri senza attrito e chiudi quando hai finito.",
    },
    footer: {
      links: {
        Prodotto: [
          { name: "Funzionalità", href: "#features" },
          { name: "Come funziona", href: "#how-it-works" },
          { name: "Piani", href: "#pricing" },
          { name: "FAQ", href: "#faq" },
          { name: "Lingue", href: "#integrations" },
        ],
        App: [
          { name: "Scheda registro", href: "#screenshots" },
          { name: "Scheda statistiche", href: "#screenshots" },
          { name: "Impostazioni", href: "#screenshots" },
          { name: "Selettore lingua", href: "#integrations" },
        ],
        Azienda: [
          { name: "Chi siamo", href: "#" },
          { name: "Supporto", href: "/support" },
          { name: "Privacy", href: "/privacy" },
          { name: "Contatti", href: "/support" },
        ],
        "Note legali": [
          { name: "Informativa sulla privacy", href: "/privacy" },
          { name: "Termini e condizioni", href: "/terms" },
          { name: "Dati e privacy", href: "/data" },
        ],
      },
      social: [
        { name: "Threads", href: "#" },
        { name: "Instagram", href: "#" },
        { name: "App Store", href: "#" },
      ],
      status: "Local-first · Solo sul tuo telefono",
      copyright: "2026 Conti Bianco Nero. Tutti i diritti riservati.",
    },
    ui: {
      monthlyLabel: "Mensile",
      annualLabel: "Annuale",
      billingToggleAria: "Passa alla fatturazione annuale",
      popularBadge: "Sync cloud",
      oneTimeSuffix: "una tantum",
      perMonthSuffix: "/mese",
      comingSoonPrice: "In arrivo",
      favoriteFeature: "Funzione preferita",
      panelTitle: "Funzioni integrate",
      panelStatus: "Funziona offline",
      heroImageAlt: "Schermata registro di Conti Bianco Nero",
      mockMonthlyAutopay: "Addebiti auto",
      mockForgotWhy: "Perché pago?",
      mockAutoRenews: "Rinnovo auto",
      mockMonthlyFixedSpend: "Fisse del mese",
      mockExpenseButton: "Spesa",
      mockIncomeButton: "Entrata",
      mockNetTotal: "Totale netto",
      mockThisMonth: "Questo mese",
      mockByAmount: "Per importo",
    },
  },
  faqItems: [
    {
      question: "Che cos'è Conti Bianco Nero (Flash Accounting)?",
      answer:
        "Conti Bianco Nero (Flash Accounting) è un'app iOS per le spese personali pensata per catturare le spese che non noti con una registrazione senza attrito. Inserisci importo e descrizione e in circa tre secondi hai finito: abbastanza per far emergere caffè, delivery e piccoli abbonamenti che svuotano il saldo in silenzio.",
    },
    {
      question: "In cosa è diversa dalle altre app di spese?",
      answer:
        "Elimina categorie complicate e promemoria insistenti in favore di una registrazione minimale: importo più descrizione. L'interfaccia è in bianco e nero, local-first e utilizzabile senza login, con una pagina statistiche che mostra a colpo d'occhio le perdite invisibili del mese e la trappola degli abbonamenti.",
    },
    {
      question: "Dove sono salvati i miei dati? Sono al sicuro?",
      answer:
        "Di default ogni transazione è salvata solo sul tuo dispositivo e funziona offline, senza bisogno di registrarti. Quando vuoi un backup, c'è la sync cloud opzionale di Pro. Puoi esportare un foglio di calcolo, modificare o eliminare i record in qualsiasi momento: i dati restano sotto il tuo controllo.",
    },
    {
      question: "Serve un account per usarla?",
      answer:
        "No. Il piano gratuito registra fino a 500 record interamente sul tuo dispositivo. Accedi solo quando vuoi la sync cloud e il ripristino tra dispositivi (su iOS è disponibile Accedi con Apple).",
    },
    {
      question: "Quali lingue sono supportate?",
      answer:
        "16 lingue: 繁體中文, English, 日本語, Español, Français, Deutsch, हिन्दी, Português, Русский, Bahasa Indonesia, 한국어, Italiano, Türkçe, Tiếng Việt, ไทย e Polski — più modalità scura e rilevamento automatico della lingua del dispositivo.",
    },
    {
      question: "Che differenza c'è tra Gratis, Plus e Pro?",
      answer:
        "Gratis include fino a 500 record locali, registrazione di spese ed entrate, statistiche con filtri e ordinamento, esportazione in foglio di calcolo e l'interfaccia in 16 lingue. Plus (prezzo indicativo $14.99 una tantum) rimuove il limite per una registrazione locale illimitata: niente abbonamento, niente account, niente cloud. Pro (prezzo indicativo $1.99/mese o $14.99/anno) include tutto Plus e aggiunge spazio cloud illimitato, invio dei record al cloud, ripristino dal cloud e recupero dei dati su un telefono nuovo.",
    },
    {
      question: "Quando arriva la versione Android?",
      answer:
        "La versione Android è in programma ma non è ancora su Google Play. Segui il sito ufficiale o la pagina dell'App Store per le novità sul lancio.",
    },
    {
      question: "A chi è adatta Conti Bianco Nero?",
      answer:
        "A chi vuole registrare in fretta senza categorie complicate; a freelance, impiegati e titolari di piccole imprese a caccia di spese fantasma e abbonamenti dimenticati; e a chi tiene alla privacy e vuole i dati solo sul proprio dispositivo.",
    },
  ],
  appScreenshots: [
    {
      id: "accounting",
      title: "Registro",
      description:
        "Importo, descrizione, fatto in tre secondi. Il totale netto tiene le spese fantasma sempre in vista.",
      src: "/screenshots/accounting.png",
      alt: "Schermata registro di Conti Bianco Nero con il modulo spese e la lista delle transazioni",
    },
    {
      id: "statistics",
      title: "Statistiche",
      description:
        "Card riassuntive di entrate, spese e netto. Vista per giorno o mese, filtri temporali, ordinamento dei record.",
      src: "/screenshots/statistics.png",
      alt: "Schermata statistiche di Conti Bianco Nero con card riassuntive e liste raggruppate",
    },
    {
      id: "settings",
      title: "Impostazioni",
      description:
        "Esportazione in foglio di calcolo, cambio lingua, limite dei record locali e sync cloud opzionale.",
      src: "/screenshots/settings.png",
      alt: "Schermata impostazioni di Conti Bianco Nero con opzioni di esportazione e lingua",
    },
  ],
};

export default dict;
