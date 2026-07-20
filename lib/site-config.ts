import { siteContent } from "@/lib/site-content";

const defaultSiteUrl = "https://flash-accounting.app";

export const siteConfig = {
  name: siteContent.brand.name,
  nameEn: siteContent.brand.nameEn,
  tagline: siteContent.brand.tagline,
  description: siteContent.brand.description,
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || defaultSiteUrl,
  locale: "zh-TW",
  language: "zh-Hant",
  author: "Flash Accounting",
  twitterHandle: "@flashaccounting",
  keywords: [
    "黑白記帳",
    "Flash Accounting",
    "記帳 App",
    "記帳軟體",
    "無感消費",
    "幽靈消費",
    "零摩擦記帳",
    "本機記帳",
    "隱私記帳",
    "訂閱管理",
    "個人理財",
    "iOS 記帳",
    "繁體中文記帳",
    "expense tracker",
    "budget app",
    "personal finance app",
    "offline expense tracker",
    "privacy-first budgeting",
  ],
  categories: ["Finance", "Productivity", "Utilities"],
  appStoreUrl: siteContent.download.appStoreUrl,
  googlePlayUrl: siteContent.download.googlePlayUrl,
  googlePlayEnabled: siteContent.download.googlePlayEnabled,
  contactEmail: "quickpolymath@gmail.com",
  githubIssuesUrl: "https://github.com/zii144/flash-accounting/issues",
} as const;

export function absoluteUrl(path = "/"): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalizedPath}`;
}
