import type { Metadata } from "next";
import { siteConfig, absoluteUrl } from "@/lib/site-config";

const seoTitle = `${siteConfig.name} — 三秒記帳，揪出無感消費`;
const seoDescription =
  "黑白記帳（Flash Accounting）是極簡 iOS 記帳 App：三秒記一筆、本機優先、免登入。看清手搖、外送與訂閱等幽靈消費，重掌財務主導權。";

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: seoTitle,
    template: `%s | ${siteConfig.nameEn}`,
  },
  description: seoDescription,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  applicationName: siteConfig.nameEn,
  category: "finance",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "zh-Hant": "/",
      "zh-TW": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.nameEn,
    title: seoTitle,
    description: seoDescription,
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — 追蹤無感消費、零摩擦記帳`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    creator: siteConfig.twitterHandle,
    images: [absoluteUrl("/opengraph-image")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  manifest: "/manifest.webmanifest",
  other: {
    "ai-content-declaration": "public-marketing-site",
  },
};
