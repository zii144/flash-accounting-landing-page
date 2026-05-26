"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AppleLogo } from "@/components/icons/apple-logo";
import { AnimatedSphere } from "./animated-sphere";
import { siteContent } from "@/lib/site-content";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const { hero, brand, download } = siteContent;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % hero.rotatingWords.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [hero.rotatingWords.length]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] opacity-40 pointer-events-none">
        <AnimatedSphere />
      </div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-foreground/10"
            style={{
              top: `${12.5 * (i + 1)}%`,
              left: 0,
              right: 0,
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-foreground/10"
            style={{
              left: `${8.33 * (i + 1)}%`,
              top: 0,
              bottom: 0,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
        <div 
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
            <span className="w-8 h-px bg-foreground/30" />
            {hero.eyebrow}
          </span>
        </div>
        
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div>
            <div className="mb-12">
              <h1 
                className={`text-[clamp(2.5rem,8vw,7rem)] font-display leading-[1.05] tracking-tight transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <span className="block">{hero.headlinePrefix}</span>
                <span className="block">
                  <span className="relative inline-block">
                    <span key={wordIndex} className="inline-flex">
                      {hero.rotatingWords[wordIndex].split("").map((char, i) => (
                        <span
                          key={`${wordIndex}-${i}`}
                          className="inline-block animate-char-in"
                          style={{ animationDelay: `${i * 14}ms` }}
                        >
                          {char === " " ? "\u00A0" : char}
                        </span>
                      ))}
                    </span>
                    <span className="absolute -bottom-2 left-0 right-0 h-3 bg-foreground/10" />
                  </span>
                </span>
              </h1>
            </div>
            
            <div className="grid gap-8 items-end">
              <div
                className={`max-w-xl transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                  {brand.description}
                </p>
              </div>
              
              <div 
                className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
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
            </div>
          </div>

          <div
            className={`hidden lg:flex justify-center transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative w-[280px]">
              <div className="absolute inset-0 rounded-[2.5rem] border border-foreground/15 bg-foreground/[0.03] shadow-2xl" />
              <div className="relative m-3 rounded-[2rem] overflow-hidden aspect-[390/844]">
                <Image
                  src="/screenshots/accounting.png"
                  alt="黑白記帳記帳畫面"
                  fill
                  className="object-cover object-top"
                  sizes="280px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div 
        className={`absolute bottom-0 left-0 right-0 px-6 lg:px-12 pb-12 lg:pb-16 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex gap-16 marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16">
              {hero.stats.map((stat) => (
                <div key={`${stat.company}-${i}`} className="flex items-baseline gap-4">
                  <span className="text-4xl lg:text-5xl font-display">{stat.value}</span>
                  <span className="text-sm text-muted-foreground">
                    {stat.label}
                    <span className="block font-mono text-xs mt-1">{stat.company}</span>
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
