import type { LocaleContent } from "./types";

// English dictionary. Terminology follows the App Store en-US metadata
// (fastlane/metadata/en-US in the app repo): "ghost spending", "invisible
// money leaks", "subscription fatigue", "frictionless logging".
const en: LocaleContent = {
  seo: {
    title: "Black White Accounting — Log an expense in 3 seconds",
    description:
      "Black White Accounting (Flash Accounting) is a minimal iOS expense tracker: 3-second logging, local-first, no sign-up. See the coffees, deliveries, and subscriptions quietly draining your balance.",
  },
  siteContent: {
    brand: {
      name: "Black White Accounting",
      nameEn: "Flash Accounting",
      tagline:
        "Track the spending you never notice. Frictionless logging. Take back control.",
      description:
        "The coffee grabbed on the way to work, the $4 delivery fee at lunch, the missed-train ticket upgrade, and that $2.99 iCloud charge quietly renewing for three years — these invisible money leaks, not big purchases, are why your balance keeps shrinking.",
    },
    download: {
      appStoreUrl: "#",
      googlePlayUrl: "#",
      appStoreLabel: "Free on the App Store",
      googlePlayLabel: "Android coming soon",
      googlePlayEnabled: false,
    },
    nav: [
      { name: "Features", href: "#features" },
      { name: "How it works", href: "#how-it-works" },
      { name: "Screenshots", href: "#screenshots" },
      { name: "Pricing", href: "#pricing" },
      { name: "FAQ", href: "#faq" },
    ],
    hero: {
      eyebrow: "No big buys this month — so why is your balance down?",
      headlinePrefix: "No big spending,",
      rotatingWords: [
        "where did the money go",
        "invisible money leaks",
        "it's ghost spending",
        "time to log it",
      ],
      stats: [
        { value: "3 sec", label: "to log an expense", company: "Frictionless logging" },
        { value: "16", label: "languages supported", company: "Multilingual UI" },
        { value: "500", label: "free local records", company: "Local-first" },
        { value: "Anytime", label: "export", company: "Your data, in your hands" },
      ],
    },
    features: {
      eyebrow: "Features",
      title: "See every bit of",
      titleMuted: "invisible spending.",
      items: [
        {
          number: "01",
          title: "Track invisible spending",
          descriptionParts: [
            { text: "Coffee runs, deliveries, small subscriptions — " },
            { text: "ghost spending", highlight: true },
            {
              text: " adds up to more than you think. Log each one and the statistics page shows this month's ",
            },
            { text: "total invisible leak", highlight: true },
            { text: " at a glance." },
          ],
          visual: "deploy",
        },
        {
          number: "02",
          title: "Frictionless logging",
          descriptionParts: [
            { text: "Amount, description", highlight: true },
            { text: " — done in " },
            { text: "three seconds", highlight: true },
            {
              text: ". No complicated categories, no nagging reminders, no cluttered screen you want to close on sight. ",
            },
            { text: "Log it and move on", highlight: true },
            { text: " with your day." },
          ],
          visual: "ai",
        },
        {
          number: "03",
          title: "Expose subscription fatigue",
          descriptionParts: [
            { text: "Record recurring " },
            { text: "subscriptions", highlight: true },
            {
              text: " as expenses, and the monthly summary reveals how many apps you're quietly feeding. Build a ",
            },
            { text: "spending firewall", highlight: true },
            { text: " and cut the " },
            { text: "parasite", highlight: true },
            { text: " subscriptions." },
          ],
          visual: "collab",
        },
        {
          number: "04",
          title: "Privacy-first, stored on device",
          descriptionParts: [
            { text: "Works offline", highlight: true },
            { text: ", and " },
            { text: "your data stays on your device", highlight: true },
            {
              text: ". Optional Pro unlocks cloud sync so your ledger survives switching phones. Dark mode and a fully multilingual interface included.",
            },
          ],
          visual: "security",
        },
      ],
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "Three steps to",
      titleMuted: "take back control.",
      status: "Local-first · Start without signing in",
      steps: [
        {
          number: "I",
          title: "Log one in three seconds",
          description:
            'Type the amount and a description, then tap "Expense" or "Income". The interface is minimal — one entry takes about three seconds.',
          preview: `Amount: 4.50
Description: coffee

[ Expense ]  [ Income ]`,
        },
        {
          number: "II",
          title: "See the invisible leaks",
          description:
            "The ledger shows a running net total, with every expense and income listed clearly. Ghost spending has nowhere to hide.",
          preview: `Total: $12,480

- $4.50   Expense  coffee
- $18     Expense  delivery
+ $3,200  Income   freelance`,
        },
        {
          number: "III",
          title: "Review subscriptions and spending",
          description:
            "Switch to statistics and view by day or month. Filter by week or month, sort by amount or time — subscription fatigue becomes obvious at a glance.",
          preview: `Income   +$3,200
Expenses -$1,952
Net      +$1,248

Filter: This month | Sort: Latest`,
        },
      ],
    },
    localFirst: {
      eyebrow: "Local-first",
      title: "Your data stays",
      titleBreak: "in your hands.",
      description:
        "Black White Accounting stores everything on your device by default. Start logging without an account; enable cloud sync only when you want a backup.",
      stats: [
        { value: "500", label: "free local records" },
        { value: "0", label: "forced sign-ins" },
        { value: "Anytime", label: "export & backup" },
      ],
      highlights: [
        { title: "Data lives on your phone", detail: "Fast, reliable, works without internet" },
        { title: "500 free records", detail: "Plenty to start tracking and try it out" },
        { title: "Optional cloud sync", detail: "Back up across devices when you need it" },
        { title: "One-tap spreadsheet export", detail: "Take your backup anywhere" },
        { title: "Edit and delete", detail: "Fix any entry at any time" },
        { title: "Paginated browsing", detail: "Smooth scrolling even with lots of records" },
      ],
    },
    metrics: {
      eyebrow: "The numbers",
      title: "A focused tool,",
      titleBreak: "zero noise.",
      items: [
        { value: 2, suffix: "", label: "main tabs — ledger and statistics" },
        { value: 16, suffix: "", label: "languages supported" },
        { value: 500, suffix: "", label: "free local records" },
        { value: 5, suffix: "", label: "time filters — from all-time to this year" },
      ],
    },
    languages: {
      eyebrow: "Languages & roadmap",
      title: "Designed for users",
      titleBreak: "everywhere.",
      description: "Detects your device language, with full localization.",
      descriptionBreak: "More features on the way.",
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
        { name: "Cloud backup & sync", category: "Pro feature" },
        { name: "Receipt scanning + OCR", category: "Coming soon" },
        { name: "PDF & spreadsheet export", category: "Coming soon" },
      ],
    },
    privacy: {
      eyebrow: "Privacy",
      title: "Your finances,",
      titleBreak: "your device.",
      description:
        "Black White Accounting is designed local-first. Log expenses without an account; turn on cloud sync only when you want a backup.",
      badges: ["Works offline", "On-device only", "Export anytime", "Optional sign-in", "Cloud sync"],
      items: [
        {
          title: "Local-first",
          description:
            "Transactions are stored on your device by default. No registration — open the app and start logging.",
        },
        {
          title: "Optional sign-in",
          description:
            "Sign in only when you want cloud sync. Sign in with Apple is available on iOS.",
        },
        {
          title: "You control your data",
          description:
            "Export a spreadsheet backup anytime, edit or delete single entries, or clear all records in Settings.",
        },
        {
          title: "Optional cloud sync",
          description:
            "Back up across devices and restore when you switch phones. Push or pull cloud data from Settings.",
        },
      ],
    },
    testimonials: {
      label: "What users say",
      marqueeLabel: "Expense tracking should be frictionless",
      marqueeItems: [
        "3-second logging",
        "Minimal interface",
        "Offline mode",
        "Export anytime",
        "Statistics",
        "Dark mode",
        "16 languages",
        "Cloud sync",
      ],
      items: [
        {
          quote:
            "No big purchases this month, so why was my balance down? Two weeks of logging showed me — coffee and delivery were the culprits.",
          author: "Sarah",
          role: "Freelancer",
          company: "London",
          metric: "Caught the invisible leaks",
        },
        {
          quote:
            "I hate expense apps with endless categories. This one is amount plus description, three seconds and I'm out. I finally stuck with it.",
          author: "Marcus",
          role: "Small business owner",
          company: "Austin",
          metric: "Frictionless logging",
        },
        {
          quote:
            "Logging every subscription one by one shocked me — so much auto-renewing every month. The parasites are finally cancelled.",
          author: "Emily",
          role: "Office worker",
          company: "Toronto",
          metric: "Exposed subscription fatigue",
        },
        {
          quote:
            "The interface is smooth and dark mode is easy on the eyes at night. My data stays on my phone — that's peace of mind.",
          author: "Daniel",
          role: "Designer",
          company: "Berlin",
          metric: "Local-first peace of mind",
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Start free.",
      titleMuted: "Sync when ready.",
      description:
        "Local tracking is completely free. Unlock unlimited records with a one-time Plus purchase, or upgrade to Pro for backup and cross-device sync.",
      annualBadge: "$14.99/yr",
      footnote:
        "Plus and Pro prices are indicative — see the App Store / Google Play for final pricing.",
      plans: [
        {
          id: "free",
          name: "Free",
          description: "Local tracking, zero barriers",
          price: { monthly: 0, annual: 0, oneTime: null },
          features: [
            "Up to 500 local records",
            "Expense and income logging",
            "Statistics, filters, and sorting",
            "Spreadsheet export",
            "16 languages + dark mode",
            "No sign-in required",
          ],
          cta: "Download free",
          popular: false,
        },
        {
          id: "plus",
          name: "Plus",
          description: "One-time purchase, unlimited local records",
          price: { monthly: null, annual: null, oneTime: 14.99 },
          features: [
            "Everything in Free",
            "Unlimited local records",
            "Buy once, no subscription",
            "No account, no cloud",
            "Data stays on your device",
            "Restore purchases",
          ],
          cta: "Unlock unlimited local",
          popular: false,
        },
        {
          id: "pro",
          name: "Pro",
          description: "Cloud-synced ledger that survives phone upgrades",
          price: { monthly: 1.99, annual: 1.25, oneTime: null },
          features: [
            "Everything in Plus",
            "Unlimited cloud storage",
            "Push local records to the cloud",
            "Restore from the cloud",
            "Recover data on a new phone",
            "Optional Sign in with Apple",
            "Restore purchases",
          ],
          cta: "Unlock cloud sync",
          popular: true,
        },
        {
          id: "coming-soon",
          name: "Coming soon",
          description: "More time-saving features",
          price: { monthly: null, annual: null, oneTime: null },
          features: [
            "Receipt scanning + OCR",
            "Auto-fill amount and merchant",
            "PDF export",
            "Spreadsheet templates",
            "Smarter categorization",
            "More export formats",
          ],
          cta: "Join the waitlist",
          popular: false,
        },
      ],
    },
    cta: {
      title: "Ready to take back",
      titleBreak: "control of your money?",
      description:
        "It starts with seeing every expense you'd normally miss. Download Black White Accounting, log one in three seconds, and catch the ghost spending.",
      footnote: "Start free · 500 local records",
    },
    faqSection: {
      eyebrow: "FAQ",
      title: "About Black White Accounting",
      description:
        "Quick answers about what Flash Accounting is, its privacy model, plans, and supported platforms.",
    },
    screenshotsSection: {
      eyebrow: "App screens",
      title: "A minimal interface,",
      titleMuted: "clear at a glance.",
      description:
        "Two main tabs: ledger and statistics. Settings one tap away — frictionless logging, close it when you're done.",
    },
    footer: {
      links: {
        Product: [
          { name: "Features", href: "#features" },
          { name: "How it works", href: "#how-it-works" },
          { name: "Pricing", href: "#pricing" },
          { name: "FAQ", href: "#faq" },
          { name: "Languages", href: "#integrations" },
        ],
        App: [
          { name: "Ledger tab", href: "#screenshots" },
          { name: "Statistics tab", href: "#screenshots" },
          { name: "Settings", href: "#screenshots" },
          { name: "Language picker", href: "#integrations" },
        ],
        Company: [
          { name: "About", href: "#" },
          { name: "Support", href: "/support" },
          { name: "Privacy", href: "/privacy" },
          { name: "Contact", href: "/support" },
        ],
        Legal: [
          { name: "Privacy Policy", href: "/privacy" },
          { name: "Terms & Conditions", href: "/terms" },
          { name: "Data & Privacy", href: "/data" },
        ],
      },
      social: [
        { name: "Threads", href: "#" },
        { name: "Instagram", href: "#" },
        { name: "App Store", href: "#" },
      ],
      status: "Local-first · On your phone only",
      copyright: "2026 Black White Accounting. All rights reserved.",
    },
    ui: {
      monthlyLabel: "Monthly",
      annualLabel: "Annual",
      billingToggleAria: "Toggle annual billing",
      popularBadge: "Cloud sync",
      oneTimeSuffix: "one-time",
      perMonthSuffix: "/mo",
      comingSoonPrice: "Coming soon",
      favoriteFeature: "Favorite feature",
      panelTitle: "Built-in capabilities",
      panelStatus: "Works offline",
      heroImageAlt: "Black White Accounting ledger screen",
      mockMonthlyAutopay: "Monthly auto-charges",
      mockForgotWhy: "Forgot why I subscribed",
      mockAutoRenews: "Auto-renews",
      mockMonthlyFixedSpend: "Fixed spend this month",
      mockExpenseButton: "Expense",
      mockIncomeButton: "Income",
      mockNetTotal: "Net total",
      mockThisMonth: "This month",
      mockByAmount: "By amount",
    },
  },
  faqItems: [
    {
      question: "What is Black White Accounting (Flash Accounting)?",
      answer:
        "Black White Accounting (Flash Accounting) is a personal expense-tracking app for iOS focused on catching invisible spending with frictionless logging. Enter an amount and a description and you're done in about three seconds — enough to reveal the coffees, deliveries, and small subscriptions quietly draining your balance.",
    },
    {
      question: "How is it different from other expense apps?",
      answer:
        "It drops complicated categories and nagging reminders in favor of minimal amount-plus-description logging. The interface is stark black and white, local-first, and usable without signing in, with a statistics page that shows this month's invisible leaks and subscription fatigue at a glance.",
    },
    {
      question: "Where is my data stored? Is it safe?",
      answer:
        "By default every transaction is stored only on your device and works offline — no registration needed. When you want a backup, optional Pro cloud sync is available. You can export a spreadsheet, edit, or delete records at any time; your data stays under your control.",
    },
    {
      question: "Do I need an account to use it?",
      answer:
        "No. The free tier tracks up to 500 records entirely on your device. You only sign in when you want cloud sync and cross-device restore (Sign in with Apple is available on iOS).",
    },
    {
      question: "Which languages are supported?",
      answer:
        "16 languages: 繁體中文, English, 日本語, Español, Français, Deutsch, हिन्दी, Português, Русский, Bahasa Indonesia, 한국어, Italiano, Türkçe, Tiếng Việt, ไทย, and Polski — plus dark mode and automatic device-language detection.",
    },
    {
      question: "What's the difference between Free, Plus, and Pro?",
      answer:
        "Free includes up to 500 local records, expense and income logging, statistics with filters and sorting, spreadsheet export, and the 16-language interface. Plus (indicative price $14.99 one-time) removes the record limit for unlimited local tracking — no subscription, no account, no cloud. Pro (indicative price $1.99/month or $14.99/year) includes everything in Plus and adds unlimited cloud storage, push-to-cloud, restore-from-cloud, and recovery on a new phone.",
    },
    {
      question: "When is the Android version coming?",
      answer:
        "An Android version is planned but not yet on Google Play. Watch the official site or the App Store page for launch news.",
    },
    {
      question: "Who is Black White Accounting for?",
      answer:
        "People who want fast logging without complicated categories; freelancers, office workers, and small business owners hunting down invisible spending and subscription fatigue; and privacy-minded users who want their data kept on their own device.",
    },
  ],
  appScreenshots: [
    {
      id: "accounting",
      title: "Ledger",
      description:
        "Amount, description, done in three seconds. The net total keeps ghost spending in plain sight.",
      src: "/screenshots/accounting.png",
      alt: "Black White Accounting ledger screen with the expense form and transaction list",
    },
    {
      id: "statistics",
      title: "Statistics",
      description:
        "Income, expenses, and net summary cards. View by day or month, filter by time, sort your records.",
      src: "/screenshots/statistics.png",
      alt: "Black White Accounting statistics screen with summary cards and grouped lists",
    },
    {
      id: "settings",
      title: "Settings",
      description:
        "Spreadsheet export, language switching, local record limit, and optional cloud sync.",
      src: "/screenshots/settings.png",
      alt: "Black White Accounting settings screen with export and language options",
    },
  ],
};

export default en;
