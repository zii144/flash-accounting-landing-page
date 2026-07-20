// Locale registry — metadata only, NO dictionary imports. Client components
// (e.g. the language switcher) import this file; importing index.ts from a
// client component would pull every dictionary into the shared JS bundle.

export interface LocaleInfo {
  /** App language code — also the URL segment for non-zh locales. */
  readonly code: string;
  /** hreflang / html lang value. */
  readonly hreflang: string;
  /** Site path ("/" for zh, "/en/" etc. for the rest). */
  readonly path: string;
  /** Endonym shown in the language switcher. */
  readonly name: string;
}

export const LOCALES: readonly LocaleInfo[] = [
  { code: "zh", hreflang: "zh-Hant", path: "/", name: "繁體中文" },
  { code: "en", hreflang: "en", path: "/en/", name: "English" },
  { code: "ja", hreflang: "ja", path: "/ja/", name: "日本語" },
  { code: "ko", hreflang: "ko", path: "/ko/", name: "한국어" },
  { code: "es", hreflang: "es", path: "/es/", name: "Español" },
  { code: "fr", hreflang: "fr", path: "/fr/", name: "Français" },
  { code: "de", hreflang: "de", path: "/de/", name: "Deutsch" },
  { code: "it", hreflang: "it", path: "/it/", name: "Italiano" },
  { code: "pt", hreflang: "pt-BR", path: "/pt/", name: "Português" },
  { code: "ru", hreflang: "ru", path: "/ru/", name: "Русский" },
  { code: "hi", hreflang: "hi", path: "/hi/", name: "हिन्दी" },
  { code: "id", hreflang: "id", path: "/id/", name: "Bahasa Indonesia" },
  { code: "tr", hreflang: "tr", path: "/tr/", name: "Türkçe" },
  { code: "vi", hreflang: "vi", path: "/vi/", name: "Tiếng Việt" },
  { code: "th", hreflang: "th", path: "/th/", name: "ไทย" },
  { code: "pl", hreflang: "pl", path: "/pl/", name: "Polski" },
] as const;

export const DEFAULT_LOCALE = LOCALES[0];

/** Locales served under /[locale]/ (everything except zh, which owns "/"). */
export const SUB_LOCALES = LOCALES.filter((l) => l.code !== "zh");

export function getLocaleInfo(code: string): LocaleInfo {
  const info = LOCALES.find((l) => l.code === code);
  if (!info) throw new Error(`Unknown locale: ${code}`);
  return info;
}

/** hreflang → path map used for metadata alternates on every page. */
export function hreflangAlternates(): Record<string, string> {
  const map: Record<string, string> = {};
  for (const l of LOCALES) map[l.hreflang] = l.path;
  map["x-default"] = DEFAULT_LOCALE.path;
  return map;
}
