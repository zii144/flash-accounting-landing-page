"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, Check } from "lucide-react";
import { AppleLogo } from "@/components/icons/apple-logo";
import { useLocale, useSiteContent } from "@/components/locale-provider";
import { LOCALES } from "@/lib/locales/registry";

function LanguageMenu() {
  const { locale } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const close = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [isOpen]);

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Language"
        className="flex items-center gap-1.5 text-sm text-foreground/70 hover:text-foreground transition-colors py-2"
      >
        <Globe className="w-4 h-4" />
        <span>{locale.name}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 max-h-[60vh] overflow-y-auto bg-background border border-foreground/10 rounded-xl shadow-xl p-1.5 z-50">
          {LOCALES.map((l) => (
            <Link
              key={l.code}
              href={l.path}
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                l.code === locale.code
                  ? "bg-foreground/5 text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              {l.name}
              {l.code === locale.code && <Check className="w-3.5 h-3.5" />}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { locale } = useLocale();
  const siteContent = useSiteContent();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled
          ? "top-4 left-4 right-4"
          : "top-0 left-0 right-0"
      }`}
    >
      <nav
        className={`mx-auto transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-lg max-w-[1200px]"
            : "bg-transparent max-w-[1400px]"
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          <a href="#" className="flex items-center gap-2 group">
            <span className={`font-display tracking-tight transition-all duration-500 ${isScrolled ? "text-xl" : "text-2xl"}`}>
              {siteContent.brand.name}
            </span>
          </a>

          <div className="hidden md:flex items-center gap-12">
            {siteContent.nav.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <LanguageMenu />
            <Button
              size="sm"
              className={`bg-foreground hover:bg-foreground/90 text-background rounded-full transition-all duration-500 ${isScrolled ? "px-4 h-8 text-xs" : "px-6"}`}
              asChild
            >
              <a href={siteContent.download.appStoreUrl}>
                <AppleLogo />
                {siteContent.download.appStoreLabel}
              </a>
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

      </nav>

      <div
        className={`md:hidden fixed inset-0 bg-background z-40 transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        <div className="flex flex-col h-full px-8 pt-28 pb-8 overflow-y-auto">
          <div className="flex-1 flex flex-col justify-center gap-8">
            {siteContent.nav.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-5xl font-display text-foreground hover:text-muted-foreground transition-all duration-500 ${
                  isMobileMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${i * 75}ms` : "0ms" }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div
            className={`pt-8 border-t border-foreground/10 transition-all duration-500 ${
              isMobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "250ms" : "0ms" }}
          >
            <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
              <Globe className="w-4 h-4" />
              <span>{locale.name}</span>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-8">
              {LOCALES.map((l) => (
                <Link
                  key={l.code}
                  href={l.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm transition-colors ${
                    l.code === locale.code
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.name}
                </Link>
              ))}
            </div>

            <div className="flex gap-4">
              <Button
                variant="outline"
                className="flex-1 rounded-full h-14 text-base"
                asChild
              >
                <a href={siteContent.download.appStoreUrl} onClick={() => setIsMobileMenuOpen(false)}>
                  <AppleLogo />
                  App Store
                </a>
              </Button>
              <Button
                variant="outline"
                className="flex-1 rounded-full h-14 text-base"
                disabled={!siteContent.download.googlePlayEnabled}
                asChild={siteContent.download.googlePlayEnabled}
              >
                {siteContent.download.googlePlayEnabled ? (
                  <a href={siteContent.download.googlePlayUrl} onClick={() => setIsMobileMenuOpen(false)}>
                    Google Play
                  </a>
                ) : (
                  <span>{siteContent.download.googlePlayLabel}</span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
