import type { LocaleContent } from "./types";

// German dictionary. Terminology follows the App Store de-DE metadata
// (fastlane/metadata/de-DE in the app repo): "Geisterausgaben",
// "unsichtbare Geldlecks", "Abo-Falle", "Reibungsloses Erfassen".
const dict: LocaleContent = {
  seo: {
    title: "SchwarzWeiß Finanzen — Ausgaben in 3 Sekunden erfassen",
    description:
      "SchwarzWeiß Finanzen (Flash Accounting): minimaler iOS-Ausgabentracker — in 3 Sekunden erfasst, lokal zuerst, ohne Anmeldung. Sieh, was dein Konto still leert.",
  },
  siteContent: {
    brand: {
      name: "SchwarzWeiß Finanzen",
      nameEn: "Flash Accounting",
      tagline:
        "Erfasse die Ausgaben, die du nie bemerkst. Reibungsloses Erfassen. Hol dir die Kontrolle zurück.",
      description:
        "Der Kaffee auf dem Weg zur Arbeit, die $4 Liefergebühr mittags, das nachgelöste Ticket für den verpassten Zug und die $2.99 für iCloud, die sich seit drei Jahren still verlängern — diese unsichtbaren Geldlecks, nicht die großen Käufe, sind der Grund, warum dein Konto schrumpft.",
    },
    download: {
      appStoreUrl: "#",
      googlePlayUrl: "#",
      appStoreLabel: "Gratis im App Store",
      googlePlayLabel: "Android kommt bald",
      googlePlayEnabled: false,
    },
    nav: [
      { name: "Funktionen", href: "#features" },
      { name: "So funktioniert's", href: "#how-it-works" },
      { name: "Screenshots", href: "#screenshots" },
      { name: "Preise", href: "#pricing" },
      { name: "FAQ", href: "#faq" },
    ],
    hero: {
      eyebrow: "Keine großen Käufe diesen Monat — und trotzdem weniger auf dem Konto?",
      headlinePrefix: "Nichts Großes gekauft,",
      rotatingWords: [
        "wo ist das Geld hin",
        "unsichtbare Geldlecks",
        "es sind Geisterausgaben",
        "Zeit, es zu erfassen",
      ],
      stats: [
        { value: "3 Sek.", label: "für einen Eintrag", company: "Reibungsloses Erfassen" },
        { value: "16", label: "Sprachen unterstützt", company: "Mehrsprachige Oberfläche" },
        { value: "500", label: "lokale Einträge gratis", company: "Lokal zuerst" },
        { value: "Jederzeit", label: "exportieren", company: "Deine Daten, in deiner Hand" },
      ],
    },
    features: {
      eyebrow: "Funktionen",
      title: "Sieh jede einzelne",
      titleMuted: "unsichtbare Ausgabe.",
      items: [
        {
          number: "01",
          title: "Unsichtbare Ausgaben aufspüren",
          descriptionParts: [
            { text: "Coffee to go, Lieferdienste, kleine Abos — " },
            { text: "Geisterausgaben", highlight: true },
            {
              text: " summieren sich stärker, als du denkst. Erfasse jede einzelne, und die Statistikseite zeigt dir auf einen Blick, wie groß das ",
            },
            { text: "unsichtbare Geldleck", highlight: true },
            { text: " diesen Monat wirklich ist." },
          ],
          visual: "deploy",
        },
        {
          number: "02",
          title: "Reibungsloses Erfassen",
          descriptionParts: [
            { text: "Betrag, Beschreibung", highlight: true },
            { text: " — fertig in " },
            { text: "drei Sekunden", highlight: true },
            {
              text: ". Keine komplizierten Kategorien, keine nervigen Erinnerungen, kein überladener Bildschirm, den du sofort schließen willst. ",
            },
            { text: "Eintragen und weitermachen", highlight: true },
            { text: " — dein Tag gehört dir." },
          ],
          visual: "ai",
        },
        {
          number: "03",
          title: "Die Abo-Falle aufdecken",
          descriptionParts: [
            { text: "Trag wiederkehrende " },
            { text: "Abos", highlight: true },
            {
              text: " als Ausgaben ein, und die Monatsübersicht zeigt, wie viele Apps du still durchfütterst. Bau eine ",
            },
            { text: "Ausgaben-Firewall", highlight: true },
            { text: " und wirf die " },
            { text: "Schmarotzer", highlight: true },
            { text: "-Abos raus." },
          ],
          visual: "collab",
        },
        {
          number: "04",
          title: "Privat standardmäßig, lokal gespeichert",
          descriptionParts: [
            { text: "Funktioniert offline", highlight: true },
            { text: ", und " },
            { text: "deine Daten bleiben auf deinem Gerät", highlight: true },
            {
              text: ". Optionales Pro schaltet Cloud-Sync frei, damit dein Buch den Handywechsel übersteht. Dunkelmodus und komplett mehrsprachige Oberfläche inklusive.",
            },
          ],
          visual: "security",
        },
      ],
    },
    howItWorks: {
      eyebrow: "So funktioniert's",
      title: "In drei Schritten",
      titleMuted: "die Kontrolle zurück.",
      status: "Lokal zuerst · Ohne Anmeldung starten",
      steps: [
        {
          number: "I",
          title: "In drei Sekunden erfasst",
          description:
            "Betrag und Beschreibung eintippen, dann auf „Ausgabe“ oder „Einnahme“ tippen. Die Oberfläche ist minimal — ein Eintrag dauert etwa drei Sekunden.",
          preview: `Betrag: 4.50
Beschreibung: Kaffee

[ Ausgabe ]  [ Einnahme ]`,
        },
        {
          number: "II",
          title: "Die unsichtbaren Lecks sehen",
          description:
            "Das Buch zeigt eine laufende Netto-Summe, jede Ausgabe und Einnahme klar aufgelistet. Geisterausgaben haben kein Versteck mehr.",
          preview: `Summe: $12,480

- $4.50   Ausgabe   Kaffee
- $18     Ausgabe   Lieferung
+ $3,200  Einnahme  Freelance`,
        },
        {
          number: "III",
          title: "Abos und Ausgaben prüfen",
          description:
            "Wechsle zur Statistik und schau nach Tag oder Monat. Filtere nach Woche oder Monat, sortiere nach Betrag oder Zeit — die Abo-Falle wird auf einen Blick sichtbar.",
          preview: `Einnahmen +$3,200
Ausgaben  -$1,952
Netto     +$1,248

Filter: Dieser Monat | Sortierung: Neueste`,
        },
      ],
    },
    localFirst: {
      eyebrow: "Lokal zuerst",
      title: "Deine Daten bleiben",
      titleBreak: "in deiner Hand.",
      description:
        "SchwarzWeiß Finanzen speichert standardmäßig alles auf deinem Gerät. Fang ohne Konto an zu erfassen; aktiviere Cloud-Sync nur, wenn du ein Backup willst.",
      stats: [
        { value: "500", label: "lokale Einträge gratis" },
        { value: "0", label: "erzwungene Logins" },
        { value: "Jederzeit", label: "Export & Backup" },
      ],
      highlights: [
        { title: "Daten wohnen auf deinem Handy", detail: "Schnell, zuverlässig, läuft ohne Internet" },
        { title: "500 Einträge gratis", detail: "Genug zum Starten und Ausprobieren" },
        { title: "Optionaler Cloud-Sync", detail: "Backup über Geräte hinweg, wenn du es brauchst" },
        { title: "Tabellen-Export mit einem Tipp", detail: "Nimm dein Backup überall mit" },
        { title: "Bearbeiten und Löschen", detail: "Korrigiere jeden Eintrag jederzeit" },
        { title: "Seitenweises Blättern", detail: "Flüssiges Scrollen auch bei vielen Einträgen" },
      ],
    },
    metrics: {
      eyebrow: "Die Zahlen",
      title: "Ein fokussiertes Tool,",
      titleBreak: "null Lärm.",
      items: [
        { value: 2, suffix: "", label: "Haupt-Tabs — Buch und Statistik" },
        { value: 16, suffix: "", label: "Sprachen unterstützt" },
        { value: 500, suffix: "", label: "lokale Einträge gratis" },
        { value: 5, suffix: "", label: "Zeitfilter — von Gesamt bis dieses Jahr" },
      ],
    },
    languages: {
      eyebrow: "Sprachen & Roadmap",
      title: "Gemacht für Nutzer",
      titleBreak: "überall.",
      description: "Erkennt deine Gerätesprache, mit vollständiger Lokalisierung.",
      descriptionBreak: "Mehr Funktionen sind unterwegs.",
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
        { name: "Cloud-Backup & Sync", category: "Pro-Funktion" },
        { name: "Belegscan + OCR", category: "Bald verfügbar" },
        { name: "PDF- & Tabellen-Export", category: "Bald verfügbar" },
      ],
    },
    privacy: {
      eyebrow: "Privatsphäre",
      title: "Deine Finanzen,",
      titleBreak: "dein Gerät.",
      description:
        "SchwarzWeiß Finanzen ist lokal zuerst gebaut. Erfasse Ausgaben ohne Konto; schalte Cloud-Sync nur ein, wenn du ein Backup willst.",
      badges: [
        "Funktioniert offline",
        "Nur auf dem Gerät",
        "Jederzeit exportieren",
        "Optionaler Login",
        "Cloud-Sync",
      ],
      items: [
        {
          title: "Lokal zuerst",
          description:
            "Transaktionen werden standardmäßig auf deinem Gerät gespeichert. Keine Registrierung — App öffnen und loslegen.",
        },
        {
          title: "Optionaler Login",
          description:
            "Melde dich nur an, wenn du Cloud-Sync willst. Auf iOS steht „Mit Apple anmelden“ zur Verfügung.",
        },
        {
          title: "Du kontrollierst deine Daten",
          description:
            "Exportiere jederzeit ein Tabellen-Backup, bearbeite oder lösche einzelne Einträge oder leere alle Einträge in den Einstellungen.",
        },
        {
          title: "Optionaler Cloud-Sync",
          description:
            "Sichere über Geräte hinweg und stelle beim Handywechsel alles wieder her. Cloud-Daten lassen sich in den Einstellungen hoch- oder herunterladen.",
        },
      ],
    },
    testimonials: {
      label: "Was Nutzer sagen",
      marqueeLabel: "Ausgaben erfassen sollte reibungslos sein",
      marqueeItems: [
        "3-Sekunden-Eintrag",
        "Minimale Oberfläche",
        "Offline-Modus",
        "Jederzeit exportieren",
        "Statistiken",
        "Dunkelmodus",
        "16 Sprachen",
        "Cloud-Sync",
      ],
      items: [
        {
          quote:
            "Keine großen Käufe diesen Monat — warum war trotzdem weniger auf dem Konto? Zwei Wochen Erfassen haben es gezeigt: Kaffee und Lieferdienste waren die Übeltäter.",
          author: "Lena",
          role: "Freiberuflerin",
          company: "Berlin",
          metric: "Unsichtbare Lecks entlarvt",
        },
        {
          quote:
            "Ich hasse Ausgaben-Apps mit endlosen Kategorien. Hier: Betrag plus Beschreibung, drei Sekunden, fertig. Zum ersten Mal bleibe ich wirklich dran.",
          author: "Markus",
          role: "Kleinunternehmer",
          company: "München",
          metric: "Reibungsloses Erfassen",
        },
        {
          quote:
            "Jedes Abo einzeln einzutragen hat mich schockiert — so viel verlängert sich jeden Monat von selbst. Die Schmarotzer sind endlich gekündigt.",
          author: "Emma",
          role: "Angestellte",
          company: "Hamburg",
          metric: "Abo-Falle aufgedeckt",
        },
        {
          quote:
            "Die Oberfläche läuft flüssig, und der Dunkelmodus ist nachts angenehm für die Augen. Meine Daten bleiben auf meinem Handy — das beruhigt.",
          author: "David",
          role: "Designer",
          company: "Wien",
          metric: "Lokal zuerst, entspannt schlafen",
        },
      ],
    },
    pricing: {
      eyebrow: "Preise",
      title: "Gratis starten.",
      titleMuted: "Syncen, wenn du bereit bist.",
      description:
        "Lokales Erfassen ist komplett kostenlos. Heb das Limit mit dem einmaligen Plus-Kauf auf, oder wechsle zu Pro für Backup und Sync über alle Geräte.",
      annualBadge: "$14.99/Jahr",
      footnote:
        "Plus- und Pro-Preise sind Richtwerte — die finalen Preise findest du im App Store / bei Google Play.",
      plans: [
        {
          id: "free",
          name: "Kostenlos",
          description: "Lokales Erfassen, null Hürden",
          price: { monthly: 0, annual: 0, oneTime: null },
          features: [
            "Bis zu 500 lokale Einträge",
            "Ausgaben und Einnahmen erfassen",
            "Statistiken, Filter und Sortierung",
            "Tabellen-Export",
            "16 Sprachen + Dunkelmodus",
            "Keine Anmeldung nötig",
          ],
          cta: "Gratis laden",
          popular: false,
        },
        {
          id: "plus",
          name: "Plus",
          description: "Einmal kaufen, unbegrenzt lokal erfassen",
          price: { monthly: null, annual: null, oneTime: 14.99 },
          features: [
            "Alles aus Kostenlos",
            "Unbegrenzte lokale Einträge",
            "Einmal kaufen, kein Abo",
            "Kein Konto, keine Cloud",
            "Daten bleiben auf deinem Gerät",
            "Käufe wiederherstellen",
          ],
          cta: "Lokal unbegrenzt freischalten",
          popular: false,
        },
        {
          id: "pro",
          name: "Pro",
          description: "Ein Cloud-Buch, das den Handywechsel übersteht",
          price: { monthly: 1.99, annual: 1.25, oneTime: null },
          features: [
            "Alles aus Plus",
            "Unbegrenzter Cloud-Speicher",
            "Lokale Einträge in die Cloud pushen",
            "Aus der Cloud wiederherstellen",
            "Daten auf dem neuen Handy zurückholen",
            "Optional „Mit Apple anmelden“",
            "Käufe wiederherstellen",
          ],
          cta: "Cloud-Sync freischalten",
          popular: true,
        },
        {
          id: "coming-soon",
          name: "Bald verfügbar",
          description: "Mehr zeitsparende Funktionen",
          price: { monthly: null, annual: null, oneTime: null },
          features: [
            "Belegscan + OCR",
            "Betrag und Händler automatisch ausfüllen",
            "PDF-Export",
            "Tabellen-Vorlagen",
            "Schlauere Kategorisierung",
            "Mehr Exportformate",
          ],
          cta: "Auf die Warteliste",
          popular: false,
        },
      ],
    },
    cta: {
      title: "Bereit, dir die Kontrolle",
      titleBreak: "über dein Geld zurückzuholen?",
      description:
        "Es beginnt damit, jede Ausgabe zu sehen, die sonst untergeht. Lade SchwarzWeiß Finanzen, erfasse einen Eintrag in drei Sekunden und schnapp dir die Geisterausgaben.",
      footnote: "Gratis starten · 500 lokale Einträge",
    },
    faqSection: {
      eyebrow: "FAQ",
      title: "Über SchwarzWeiß Finanzen",
      description:
        "Schnelle Antworten dazu, was Flash Accounting ist — Privatsphäre-Modell, Tarife und unterstützte Plattformen.",
    },
    screenshotsSection: {
      eyebrow: "App-Screens",
      title: "Eine minimale Oberfläche,",
      titleMuted: "auf einen Blick klar.",
      description:
        "Zwei Haupt-Tabs: Buch und Statistik. Die Einstellungen sind einen Tipp entfernt — reibungslos erfassen, schließen, fertig.",
    },
    footer: {
      links: {
        Produkt: [
          { name: "Funktionen", href: "#features" },
          { name: "So funktioniert's", href: "#how-it-works" },
          { name: "Preise", href: "#pricing" },
          { name: "FAQ", href: "#faq" },
          { name: "Sprachen", href: "#integrations" },
        ],
        App: [
          { name: "Buch-Tab", href: "#screenshots" },
          { name: "Statistik-Tab", href: "#screenshots" },
          { name: "Einstellungen", href: "#screenshots" },
          { name: "Sprachauswahl", href: "#integrations" },
        ],
        Unternehmen: [
          { name: "Über uns", href: "#" },
          { name: "Support", href: "/support" },
          { name: "Privatsphäre", href: "/privacy" },
          { name: "Kontakt", href: "/support" },
        ],
        Rechtliches: [
          { name: "Datenschutzerklärung", href: "/privacy" },
          { name: "AGB", href: "/terms" },
          { name: "Daten & Datenschutz", href: "/data" },
        ],
      },
      social: [
        { name: "Threads", href: "#" },
        { name: "Instagram", href: "#" },
        { name: "App Store", href: "#" },
      ],
      status: "Lokal zuerst · Nur auf deinem Handy",
      copyright: "2026 SchwarzWeiß Finanzen. Alle Rechte vorbehalten.",
    },
    ui: {
      monthlyLabel: "Monatlich",
      annualLabel: "Jährlich",
      billingToggleAria: "Jährliche Abrechnung umschalten",
      popularBadge: "Cloud-Sync",
      oneTimeSuffix: "einmalig",
      perMonthSuffix: "/Monat",
      comingSoonPrice: "Bald da",
      favoriteFeature: "Lieblingsfunktion",
      panelTitle: "Eingebaute Funktionen",
      panelStatus: "Läuft offline",
      heroImageAlt: "Buch-Ansicht von SchwarzWeiß Finanzen",
      mockMonthlyAutopay: "Auto-Abbuchung",
      mockForgotWhy: "Wozu das Abo?",
      mockAutoRenews: "Verlängert sich",
      mockMonthlyFixedSpend: "Fixkosten/Monat",
      mockExpenseButton: "Ausgabe",
      mockIncomeButton: "Einnahme",
      mockNetTotal: "Netto gesamt",
      mockThisMonth: "Dieser Monat",
      mockByAmount: "Nach Betrag",
    },
  },
  faqItems: [
    {
      question: "Was ist SchwarzWeiß Finanzen (Flash Accounting)?",
      answer:
        "SchwarzWeiß Finanzen (Flash Accounting) ist eine persönliche Ausgaben-App für iOS, die unsichtbare Ausgaben durch reibungsloses Erfassen sichtbar macht. Betrag und Beschreibung eingeben — nach etwa drei Sekunden bist du fertig. Genug, um die Kaffees, Lieferungen und kleinen Abos zu entlarven, die still dein Konto leeren.",
    },
    {
      question: "Was unterscheidet sie von anderen Ausgaben-Apps?",
      answer:
        "Sie verzichtet auf komplizierte Kategorien und nervige Erinnerungen — stattdessen minimales Erfassen mit Betrag plus Beschreibung. Die Oberfläche ist konsequent schwarz-weiß, lokal zuerst und ohne Anmeldung nutzbar, mit einer Statistikseite, die die unsichtbaren Geldlecks und die Abo-Falle des Monats auf einen Blick zeigt.",
    },
    {
      question: "Wo werden meine Daten gespeichert? Sind sie sicher?",
      answer:
        "Standardmäßig wird jede Transaktion nur auf deinem Gerät gespeichert und funktioniert offline — keine Registrierung nötig. Wenn du ein Backup willst, steht der optionale Pro-Cloud-Sync bereit. Du kannst jederzeit eine Tabelle exportieren, Einträge bearbeiten oder löschen; deine Daten bleiben unter deiner Kontrolle.",
    },
    {
      question: "Brauche ich ein Konto?",
      answer:
        "Nein. Die kostenlose Version erfasst bis zu 500 Einträge komplett auf deinem Gerät. Du meldest dich nur an, wenn du Cloud-Sync und Wiederherstellung über Geräte hinweg willst (auf iOS steht „Mit Apple anmelden“ zur Verfügung).",
    },
    {
      question: "Welche Sprachen werden unterstützt?",
      answer:
        "16 Sprachen: 繁體中文, English, 日本語, Español, Français, Deutsch, हिन्दी, Português, Русский, Bahasa Indonesia, 한국어, Italiano, Türkçe, Tiếng Việt, ไทย und Polski — plus Dunkelmodus und automatische Erkennung der Gerätesprache.",
    },
    {
      question: "Was ist der Unterschied zwischen Kostenlos, Plus und Pro?",
      answer:
        "Kostenlos umfasst bis zu 500 lokale Einträge, Ausgaben- und Einnahmen-Erfassung, Statistiken mit Filtern und Sortierung, Tabellen-Export und die Oberfläche in 16 Sprachen. Plus (Richtpreis $14.99 einmalig) hebt das Limit auf — unbegrenztes lokales Erfassen ohne Abo, ohne Konto, ohne Cloud. Pro (Richtpreis $1.99/Monat oder $14.99/Jahr) enthält alles aus Plus und ergänzt unbegrenzten Cloud-Speicher, Push in die Cloud, Wiederherstellung aus der Cloud und Datenrettung auf dem neuen Handy.",
    },
    {
      question: "Wann kommt die Android-Version?",
      answer:
        "Eine Android-Version ist geplant, aber noch nicht bei Google Play. Behalte die offizielle Website oder die App-Store-Seite im Blick, um den Start nicht zu verpassen.",
    },
    {
      question: "Für wen ist SchwarzWeiß Finanzen gedacht?",
      answer:
        "Für alle, die schnell erfassen wollen, ohne sich durch komplizierte Kategorien zu klicken; für Freiberufler, Angestellte und Kleinunternehmer, die unsichtbaren Ausgaben und der Abo-Falle auf der Spur sind; und für alle, denen Privatsphäre wichtig ist und deren Daten auf dem eigenen Gerät bleiben sollen.",
    },
  ],
  appScreenshots: [
    {
      id: "accounting",
      title: "Buch",
      description:
        "Betrag, Beschreibung, fertig in drei Sekunden. Die Netto-Summe hält Geisterausgaben sichtbar.",
      src: "/screenshots/accounting.png",
      alt: "Buch-Ansicht von SchwarzWeiß Finanzen mit Ausgabenformular und Transaktionsliste",
    },
    {
      id: "statistics",
      title: "Statistik",
      description:
        "Übersichtskarten für Einnahmen, Ausgaben und Netto. Nach Tag oder Monat ansehen, nach Zeit filtern, Einträge sortieren.",
      src: "/screenshots/statistics.png",
      alt: "Statistik-Ansicht von SchwarzWeiß Finanzen mit Übersichtskarten und gruppierten Listen",
    },
    {
      id: "settings",
      title: "Einstellungen",
      description:
        "Tabellen-Export, Sprachwechsel, lokales Limit und optionaler Cloud-Sync.",
      src: "/screenshots/settings.png",
      alt: "Einstellungen von SchwarzWeiß Finanzen mit Export- und Sprachoptionen",
    },
  ],
};

export default dict;
