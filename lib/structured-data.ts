import { faqItems } from "@/lib/faq-content";
import { siteConfig, absoluteUrl } from "@/lib/site-config";
import { appScreenshots, siteContent } from "@/lib/site-content";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.nameEn,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/icon.svg"),
    description: siteConfig.tagline,
    email: siteConfig.contactEmail,
    sameAs: [],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    alternateName: siteConfig.nameEn,
    description: siteConfig.tagline,
    inLanguage: siteConfig.language,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

export function getSoftwareApplicationSchema() {
  const offers = [
    {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free tier with up to 200 local transactions",
    },
    {
      "@type": "Offer",
      price: "1.99",
      priceCurrency: "USD",
      description: "Pro monthly subscription with unlimited cloud sync",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${siteConfig.url}/#app`,
    name: siteConfig.nameEn,
    alternateName: siteConfig.name,
    applicationCategory: "FinanceApplication",
    operatingSystem: siteConfig.googlePlayEnabled ? "iOS, Android" : "iOS",
    description: siteConfig.description,
    url: siteConfig.url,
    image: absoluteUrl("/screenshots/accounting.png"),
    screenshot: appScreenshots.map((shot) => absoluteUrl(shot.src)),
    offers,
    featureList: siteContent.features.items.map((item) => item.title).join(", "),
    inLanguage: siteContent.languages.items.map((item) => item.name),
    isAccessibleForFree: true,
    downloadUrl: siteConfig.appStoreUrl !== "#" ? siteConfig.appStoreUrl : siteConfig.url,
  };
}

export function getWebPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}/#webpage`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.tagline,
    inLanguage: siteConfig.language,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#app`,
    },
    primaryImageOfPage: absoluteUrl("/screenshots/accounting.png"),
  };
}

export function getFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/#faq`,
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getStructuredDataGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationSchema(),
      getWebSiteSchema(),
      getSoftwareApplicationSchema(),
      getWebPageSchema(),
      getFaqSchema(),
    ],
  };
}
