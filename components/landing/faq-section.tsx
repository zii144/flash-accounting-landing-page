"use client";

import { useLocale, useSiteContent } from "@/components/locale-provider";

export function FaqSection() {
  const { content } = useLocale();
  const { brand, faqSection } = useSiteContent();

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative py-24 lg:py-32 border-t border-foreground/10"
    >
      <div className="max-w-[900px] mx-auto px-6 lg:px-12">
        <p className="text-sm font-mono text-muted-foreground mb-4">
          {faqSection.eyebrow}
        </p>
        <h2 id="faq-heading" className="text-4xl lg:text-5xl font-display mb-6">
          {faqSection.title}
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          {faqSection.description}
        </p>

        <dl className="space-y-8">
          {content.faqItems.map((item) => (
            <div key={item.question} className="border-b border-foreground/10 pb-8">
              <dt className="text-xl font-medium mb-3">{item.question}</dt>
              <dd className="text-muted-foreground leading-relaxed">{item.answer}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-12 text-sm text-muted-foreground">
          {brand.nameEn} · {brand.tagline}
        </p>
      </div>
    </section>
  );
}
