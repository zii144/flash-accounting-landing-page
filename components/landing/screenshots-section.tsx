"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLocale, useSiteContent } from "@/components/locale-provider";
import { assetPath } from "@/lib/asset-path";

export function ScreenshotsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { content } = useLocale();
  const appScreenshots = content.appScreenshots;
  const { screenshotsSection } = useSiteContent();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % appScreenshots.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [appScreenshots.length]);

  const activeScreenshot = appScreenshots[activeIndex];

  return (
    <section id="screenshots" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              {screenshotsSection.eyebrow}
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              {screenshotsSection.title}
              <br />
              <span className="text-muted-foreground">{screenshotsSection.titleMuted}</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              {screenshotsSection.description}
            </p>

            <div className="space-y-0 border-t border-foreground/10">
              {appScreenshots.map((screenshot, index) => (
                <button
                  key={screenshot.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left py-6 border-b border-foreground/10 transition-all duration-300 ${
                    activeIndex === index ? "opacity-100" : "opacity-45 hover:opacity-70"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-sm text-muted-foreground pt-1">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-xl font-display mb-2">{screenshot.title}</h3>
                      <p className="text-muted-foreground">{screenshot.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div
            className={`flex justify-center lg:justify-end transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative w-[280px] sm:w-[320px]">
              <div className="absolute inset-0 rounded-[2.5rem] border border-foreground/15 bg-foreground/[0.03] shadow-2xl" />
              <div className="relative m-3 rounded-[2rem] overflow-hidden aspect-[390/844]">
                <Image
                  key={activeScreenshot.id}
                  src={assetPath(activeScreenshot.src)}
                  alt={activeScreenshot.alt}
                  fill
                  className="object-cover object-top transition-opacity duration-500"
                  sizes="(max-width: 640px) 280px, 320px"
                  priority={activeIndex === 0}
                />
                <div
                  className="absolute bottom-3 left-1/2 -translate-x-1/2 h-1 w-24 rounded-full bg-foreground/20 z-10 pointer-events-none"
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
