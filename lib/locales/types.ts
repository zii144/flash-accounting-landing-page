// Shared shape of every locale dictionary. lib/site-content.ts is the
// zh-Hant source; lib/locales/<code>.ts provide the other 15 app languages.
// All arrays are readonly so both `as const` data and plain literals fit.

export interface NavLink {
  readonly name: string;
  readonly href: string;
}

export interface DescriptionPart {
  readonly text: string;
  readonly highlight?: boolean;
}

export interface HeroStat {
  readonly value: string;
  readonly label: string;
  readonly company: string;
}

export interface FeatureItem {
  readonly number: string;
  readonly title: string;
  readonly descriptionParts: readonly DescriptionPart[];
  /** Visual identifier — keep exactly as in the zh source. */
  readonly visual: string;
}

export interface HowItWorksStep {
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly preview: string;
}

export interface LabeledValue {
  readonly value: string;
  readonly label: string;
}

export interface TitledDetail {
  readonly title: string;
  readonly detail: string;
}

export interface MetricItem {
  readonly value: number;
  readonly suffix: string;
  readonly prefix?: string;
  readonly label: string;
}

export interface LanguageItem {
  readonly name: string;
  readonly native: string;
}

export interface ComingSoonItem {
  readonly name: string;
  readonly category: string;
}

export interface PrivacyItem {
  readonly title: string;
  readonly description: string;
}

export interface TestimonialItem {
  readonly quote: string;
  readonly author: string;
  readonly role: string;
  readonly company: string;
  readonly metric: string;
}

export interface PlanPrice {
  readonly monthly: number | null;
  readonly annual: number | null;
  readonly oneTime: number | null;
}

export interface PricingPlan {
  /** Stable machine id: "free" | "plus" | "pro" | "coming-soon". Never translated. */
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly price: PlanPrice;
  readonly features: readonly string[];
  readonly cta: string;
  readonly popular: boolean;
}

export interface FooterLink {
  readonly name: string;
  readonly href: string;
}

/** Short labels rendered inside components (buttons, badges, mock phone UI). */
export interface UiStrings {
  /** Pricing billing toggle */
  readonly monthlyLabel: string;
  readonly annualLabel: string;
  readonly billingToggleAria: string;
  readonly popularBadge: string;
  readonly oneTimeSuffix: string;
  readonly perMonthSuffix: string;
  readonly comingSoonPrice: string;
  /** Testimonials side card */
  readonly favoriteFeature: string;
  /** Infrastructure panel */
  readonly panelTitle: string;
  readonly panelStatus: string;
  /** Hero phone screenshot alt text */
  readonly heroImageAlt: string;
  /** Feature visual: subscription bill mock */
  readonly mockMonthlyAutopay: string;
  readonly mockForgotWhy: string;
  readonly mockAutoRenews: string;
  readonly mockMonthlyFixedSpend: string;
  /** How-it-works phone mocks */
  readonly mockExpenseButton: string;
  readonly mockIncomeButton: string;
  readonly mockNetTotal: string;
  readonly mockThisMonth: string;
  readonly mockByAmount: string;
}

export interface SiteContent {
  readonly brand: {
    readonly name: string;
    readonly nameEn: string;
    readonly tagline: string;
    readonly description: string;
  };
  readonly download: {
    readonly appStoreUrl: string;
    readonly googlePlayUrl: string;
    readonly appStoreLabel: string;
    readonly googlePlayLabel: string;
    readonly googlePlayEnabled: boolean;
  };
  readonly nav: readonly NavLink[];
  readonly hero: {
    readonly eyebrow: string;
    readonly headlinePrefix: string;
    readonly rotatingWords: readonly string[];
    readonly stats: readonly HeroStat[];
  };
  readonly features: {
    readonly eyebrow: string;
    readonly title: string;
    readonly titleMuted: string;
    readonly items: readonly FeatureItem[];
  };
  readonly howItWorks: {
    readonly eyebrow: string;
    readonly title: string;
    readonly titleMuted: string;
    readonly status: string;
    readonly steps: readonly HowItWorksStep[];
  };
  readonly localFirst: {
    readonly eyebrow: string;
    readonly title: string;
    readonly titleBreak: string;
    readonly description: string;
    readonly stats: readonly LabeledValue[];
    readonly highlights: readonly TitledDetail[];
  };
  readonly metrics: {
    readonly eyebrow: string;
    readonly title: string;
    readonly titleBreak: string;
    readonly items: readonly MetricItem[];
  };
  readonly languages: {
    readonly eyebrow: string;
    readonly title: string;
    readonly titleBreak: string;
    readonly description: string;
    readonly descriptionBreak: string;
    readonly items: readonly LanguageItem[];
    readonly comingSoon: readonly ComingSoonItem[];
  };
  readonly privacy: {
    readonly eyebrow: string;
    readonly title: string;
    readonly titleBreak: string;
    readonly description: string;
    readonly badges: readonly string[];
    readonly items: readonly PrivacyItem[];
  };
  readonly testimonials: {
    readonly label: string;
    readonly marqueeLabel: string;
    readonly marqueeItems: readonly string[];
    readonly items: readonly TestimonialItem[];
  };
  readonly pricing: {
    readonly eyebrow: string;
    readonly title: string;
    readonly titleMuted: string;
    readonly description: string;
    readonly annualBadge: string;
    readonly footnote: string;
    readonly plans: readonly PricingPlan[];
  };
  readonly cta: {
    readonly title: string;
    readonly titleBreak: string;
    readonly description: string;
    readonly footnote: string;
  };
  readonly faqSection: {
    readonly eyebrow: string;
    readonly title: string;
    readonly description: string;
  };
  readonly screenshotsSection: {
    readonly eyebrow: string;
    readonly title: string;
    readonly titleMuted: string;
    readonly description: string;
  };
  readonly footer: {
    readonly links: Readonly<Record<string, readonly FooterLink[]>>;
    readonly social: readonly FooterLink[];
    readonly status: string;
    readonly copyright: string;
  };
  readonly ui: UiStrings;
}

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export interface Screenshot {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly src: string;
  readonly alt: string;
}

export interface LocaleContent {
  readonly seo: {
    readonly title: string;
    readonly description: string;
  };
  readonly siteContent: SiteContent;
  readonly faqItems: readonly FaqItem[];
  readonly appScreenshots: readonly Screenshot[];
}
