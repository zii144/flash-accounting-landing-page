// Server-side dictionary lookup. Do NOT import this from client components —
// use lib/locales/registry.ts there (this file pulls in every dictionary).
import type { LocaleContent } from "./types";
import { PAYMENTS_ENABLED } from "@/lib/payments";
import { applyLite } from "./lite";
import zh from "./zh";
import en from "./en";
import ja from "./ja";
import ko from "./ko";
import es from "./es";
import fr from "./fr";
import de from "./de";
import it from "./it";
import pt from "./pt";
import ru from "./ru";
import hi from "./hi";
import id from "./id";
import tr from "./tr";
import vi from "./vi";
import th from "./th";
import pl from "./pl";

const CONTENT: Record<string, LocaleContent> = {
  zh,
  en,
  ja,
  ko,
  es,
  fr,
  de,
  it,
  pt,
  ru,
  hi,
  id,
  tr,
  vi,
  th,
  pl,
};

export function getLocaleContent(code: string): LocaleContent {
  const content = CONTENT[code];
  if (!content) throw new Error(`No dictionary for locale: ${code}`);
  // The app ships without payments for now; the dictionaries keep the paid copy and
  // the lite overlay replaces it (lib/payments.ts, lib/locales/lite.ts).
  return PAYMENTS_ENABLED ? content : applyLite(code, content);
}
