"use client";

import { createContext, useContext, useEffect, type ReactNode } from "react";
import type { LocaleContent, SiteContent } from "@/lib/locales/types";
import type { LocaleInfo } from "@/lib/locales/registry";

interface LocaleContextValue {
  locale: LocaleInfo;
  content: LocaleContent;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  content,
  children,
}: {
  locale: LocaleInfo;
  content: LocaleContent;
  children: ReactNode;
}) {
  // The root layout is shared by all locale routes, so <html lang> is fixed
  // at build time; correct it on the client. Crawlers rely on the hreflang
  // alternates in the page metadata instead.
  useEffect(() => {
    document.documentElement.lang = locale.hreflang;
  }, [locale.hreflang]);

  return (
    <LocaleContext.Provider value={{ locale, content }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const value = useContext(LocaleContext);
  if (!value) throw new Error("useLocale must be used inside <LocaleProvider>");
  return value;
}

export function useSiteContent(): SiteContent {
  return useLocale().content.siteContent;
}
