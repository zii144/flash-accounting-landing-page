"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AppleLogo } from "@/components/icons/apple-logo";
import { useSiteContent } from "@/components/locale-provider";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { cta, download } = useSiteContent();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`relative border border-foreground transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseMove={handleMouseMove}
        >
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,0,0,0.15), transparent 40%)`
            }}
          />
          
          <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24">
            <div className="max-w-3xl">
              <h2 className="text-4xl lg:text-7xl font-display tracking-tight mb-8 leading-[0.95]">
                {cta.title}
                <br />
                {cta.titleBreak}
              </h2>

              <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl">
                {cta.description}
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Button
                  size="lg"
                  className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
                  asChild
                >
                  <a href={download.appStoreUrl}>
                    <AppleLogo />
                    {download.appStoreLabel}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5"
                  disabled={!download.googlePlayEnabled}
                  asChild={download.googlePlayEnabled}
                >
                  {download.googlePlayEnabled ? (
                    <a href={download.googlePlayUrl}>
                      {download.googlePlayLabel}
                    </a>
                  ) : (
                    <span>{download.googlePlayLabel}</span>
                  )}
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-8 font-mono">
                {cta.footnote}
              </p>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-foreground/10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-foreground/10" />
        </div>
      </div>
    </section>
  );
}
