import type { LocaleContent } from "./types";
import { siteContent, appScreenshots } from "@/lib/site-content";
import { faqItems } from "@/lib/faq-content";

// zh-Hant is the canonical dictionary: lib/site-content.ts and
// lib/faq-content.ts stay the single source of truth for it (they also feed
// llms.txt and the structured data).
const zh: LocaleContent = {
  seo: {
    title: "黑白記帳｜追蹤無感消費 — 三秒記帳，揪出無感消費",
    description:
      "黑白記帳（Flash Accounting）是極簡 iOS 記帳 App：三秒記一筆、本機優先、免登入。看清手搖、外送與訂閱等幽靈消費，重掌財務主導權。",
  },
  siteContent,
  faqItems,
  appScreenshots,
};

export default zh;
