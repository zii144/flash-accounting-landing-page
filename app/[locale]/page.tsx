import type { Metadata } from "next";
import { LandingPage } from "@/components/landing-page";
import { getLocaleContent } from "@/lib/locales";
import { SUB_LOCALES, getLocaleInfo, hreflangAlternates } from "@/lib/locales/registry";

export const dynamicParams = false;

export function generateStaticParams() {
  return SUB_LOCALES.map((l) => ({ locale: l.code }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const info = getLocaleInfo(locale);
  const { seo } = getLocaleContent(locale);

  return {
    title: { absolute: seo.title },
    description: seo.description,
    alternates: {
      canonical: info.path,
      languages: hreflangAlternates(),
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      locale: info.hreflang,
      url: info.path,
    },
    twitter: {
      title: seo.title,
      description: seo.description,
    },
  };
}

export default async function LocaleHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <LandingPage locale={locale} />;
}
