"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";

type Lang = "en" | "zh";

const STORAGE_KEY = "bw-legal-lang";

// English is the governing text for the legal documents; zh-Hant is the
// site's primary language, so it is the prerendered default.
function detectLang(): Lang {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "zh") return stored;
  return navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

const docLinks = [
  { href: "/privacy", en: "Privacy Policy", zh: "隱私權政策" },
  { href: "/terms", en: "Terms & Conditions", zh: "服務條款" },
  { href: "/data", en: "Data & Security", zh: "資料與安全" },
  { href: "/support", en: "Support", zh: "支援" },
] as const;

export function InfoPage({ en, zh }: { en: ReactNode; zh: ReactNode }) {
  const [lang, setLang] = useState<Lang>("zh");

  useEffect(() => {
    setLang(detectLang());
  }, []);

  const choose = (next: Lang) => {
    setLang(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-foreground/10">
        <div className="max-w-[820px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-display text-xl tracking-tight">
            {lang === "zh" ? "黑白記帳" : "Flash Accounting"}
          </Link>

          <div
            role="group"
            aria-label="Language"
            className="flex items-center rounded-full border border-foreground/10 p-1 text-sm"
          >
            {(
              [
                { value: "zh", label: "繁體中文" },
                { value: "en", label: "English" },
              ] as const
            ).map((option) => (
              <button
                key={option.value}
                type="button"
                aria-pressed={lang === option.value}
                onClick={() => choose(option.value)}
                className={`rounded-full px-3 py-1 transition-colors ${
                  lang === option.value
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="flex-1">
        <article className="legal-prose max-w-[820px] mx-auto px-6 py-16 lg:py-20">
          {lang === "en" ? en : zh}
        </article>
      </main>

      <footer className="border-t border-foreground/10">
        <div className="max-w-[820px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link href="/" className="hover:text-foreground transition-colors">
              {lang === "zh" ? "← 回首頁" : "← Home"}
            </Link>
            {docLinks.map((doc) => (
              <Link
                key={doc.href}
                href={doc.href}
                className="hover:text-foreground transition-colors"
              >
                {lang === "zh" ? doc.zh : doc.en}
              </Link>
            ))}
          </nav>
          <p>© 2026 zii</p>
        </div>
      </footer>
    </div>
  );
}
