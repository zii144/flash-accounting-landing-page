"use client";

import { useEffect, useRef, useState } from "react";
import { useSiteContent } from "@/components/locale-provider";
import type { DescriptionPart, FeatureItem } from "@/lib/locales/types";

function FeatureDescription({
  parts,
}: {
  parts: readonly DescriptionPart[];
}) {
  return (
    <p className="text-lg text-muted-foreground leading-relaxed">
      {parts.map((part, index) =>
        part.highlight ? (
          <span key={index} className="font-semibold text-foreground">
            {part.text}
          </span>
        ) : (
          <span key={index}>{part.text}</span>
        )
      )}
    </p>
  );
}

function AIVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* App card */}
      <rect x="38" y="18" width="124" height="108" rx="10" fill="none" stroke="currentColor" strokeWidth="2" />

      {/* Amount field */}
      <rect x="50" y="32" width="100" height="28" rx="6" fill="currentColor" opacity="0.08" />
      <text x="100" y="51" textAnchor="middle" fontSize="14" fontFamily="monospace" fill="currentColor" opacity="0.85">
        $85
      </text>

      {/* Optional description — dimmed to show it's skippable */}
      <line x1="58" y1="72" x2="118" y2="72" stroke="currentColor" strokeWidth="1.5" opacity="0.2" strokeLinecap="round" />

      {/* Expense / Income buttons */}
      <rect x="50" y="84" width="46" height="22" rx="6" fill="currentColor" opacity="0.9">
        <animate attributeName="opacity" values="0.55;0.95;0.55" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="104" y="84" width="46" height="22" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />

      {/* Tap indicator on expense button */}
      <circle cx="73" cy="95" r="0" fill="currentColor" opacity="0.25">
        <animate attributeName="r" values="0;14;0" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.35;0;0.35" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* 3-step flow: amount → tap → done */}
      <g fontFamily="monospace" fontSize="8" fill="currentColor">
        <circle cx="52" cy="138" r="7" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
        <text x="52" y="141" textAnchor="middle" opacity="0.7">1</text>
        <line x1="66" y1="138" x2="82" y2="138" stroke="currentColor" strokeWidth="1" opacity="0.25" />
        <circle cx="96" cy="138" r="7" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
        <text x="96" y="141" textAnchor="middle" opacity="0.7">2</text>
        <line x1="110" y1="138" x2="126" y2="138" stroke="currentColor" strokeWidth="1" opacity="0.25" />
        <circle cx="140" cy="138" r="7" fill="currentColor" opacity="0.15">
          <animate attributeName="opacity" values="0.1;0.35;0.1" dur="2s" repeatCount="indefinite" />
        </circle>
        <path d="M137 138 L139 140 L143 136" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
        </path>
      </g>

      {/* 3s badge */}
      <rect x="148" y="24" width="28" height="16" rx="8" fill="currentColor" opacity="0.12" />
      <text x="162" y="35" textAnchor="middle" fontSize="9" fontFamily="monospace" fill="currentColor" opacity="0.65">
        3s
      </text>
    </svg>
  );
}

function DeployVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <clipPath id="deployClip">
          <rect x="30" y="20" width="140" height="120" rx="4" />
        </clipPath>
      </defs>
      
      {/* Container */}
      <rect x="30" y="20" width="140" height="120" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      
      {/* Animated bars */}
      <g clipPath="url(#deployClip)">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect
            key={i}
            x="40"
            y={35 + i * 16}
            width="120"
            height="10"
            rx="2"
            fill="currentColor"
            opacity="0.15"
          >
            <animate
              attributeName="opacity"
              values="0.15;0.8;0.15"
              dur="2s"
              begin={`${i * 0.15}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="width"
              values="20;120;20"
              dur="2s"
              begin={`${i * 0.15}s`}
              repeatCount="indefinite"
            />
          </rect>
        ))}
      </g>
      
      {/* Progress indicator */}
      <circle cx="100" cy="155" r="3" fill="currentColor" opacity="0.3">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function CollabVisual() {
  const { ui } = useSiteContent();
  const subscriptions = [
    { label: "N", amount: "-$15", y: 28, forgotten: false },
    { label: "S", amount: "-$10", y: 52, forgotten: false },
    { label: "i", amount: "-$90", y: 76, forgotten: true },
    { label: "G", amount: "-$30", y: 100, forgotten: false },
  ];

  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Monthly bill card */}
      <rect x="32" y="14" width="136" height="112" rx="8" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="44" y="26" fontSize="7" fontFamily="monospace" fill="currentColor" opacity="0.5">
        {ui.mockMonthlyAutopay}
      </text>

      {subscriptions.map((sub, i) => (
        <g key={sub.label} opacity={sub.forgotten ? 0.55 : 0.9}>
          <rect x="42" y={sub.y} width="18" height="18" rx="4" fill="currentColor" opacity="0.1" />
          <text x="51" y={sub.y + 12} textAnchor="middle" fontSize="9" fontFamily="monospace" fill="currentColor">
            {sub.label}
          </text>

          {/* Recurring loop */}
          <path
            d={`M ${72} ${sub.y + 9} a 5 5 0 1 1 0.1 0`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            opacity="0.45"
            strokeLinecap="round"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`0 ${72} ${sub.y + 9}`}
              to={`360 ${72} ${sub.y + 9}`}
              dur="3s"
              begin={`${i * 0.4}s`}
              repeatCount="indefinite"
            />
          </path>
          <path
            d={`M ${76} ${sub.y + 6} l 2 2 l -4 0 z`}
            fill="currentColor"
            opacity="0.45"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`0 ${72} ${sub.y + 9}`}
              to={`360 ${72} ${sub.y + 9}`}
              dur="3s"
              begin={`${i * 0.4}s`}
              repeatCount="indefinite"
            />
          </path>

          <text x="88" y={sub.y + 12} fontSize="8" fontFamily="monospace" fill="currentColor" opacity="0.55">
            {sub.forgotten ? ui.mockForgotWhy : ui.mockAutoRenews}
          </text>
          <text x="152" y={sub.y + 12} textAnchor="end" fontSize="9" fontFamily="monospace" fill="currentColor">
            {sub.amount}
          </text>

          {sub.forgotten && (
            <circle cx="164" cy={sub.y + 9} r="0" fill="currentColor" opacity="0.2">
              <animate attributeName="r" values="0;8;0" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
            </circle>
          )}
        </g>
      ))}

      {/* Monthly total */}
      <line x1="42" y1="122" x2="158" y2="122" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      <text x="44" y="134" fontSize="8" fontFamily="monospace" fill="currentColor" opacity="0.55">
        {ui.mockMonthlyFixedSpend}
      </text>
      <text x="152" y="134" textAnchor="end" fontSize="11" fontFamily="monospace" fill="currentColor">
        <tspan>-$</tspan>
        <tspan>
          145
          <animate
            attributeName="opacity"
            values="1;0.4;1"
            dur="2s"
            repeatCount="indefinite"
          />
        </tspan>
      </text>

      {/* Calendar ticks — same day each month */}
      <g opacity="0.35">
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={44 + i * 14} y="142" width="10" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx={49 + i * 14} cy="147" r="1.5" fill="currentColor">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </g>
    </svg>
  );
}

function SecurityVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Shield */}
      <path
        d="M 100 20 L 150 40 L 150 90 Q 150 130 100 145 Q 50 130 50 90 L 50 40 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      
      {/* Inner shield */}
      <path
        d="M 100 35 L 135 50 L 135 85 Q 135 115 100 128 Q 65 115 65 85 L 65 50 Z"
        fill="currentColor"
        opacity="0.1"
      >
        <animate attributeName="opacity" values="0.1;0.2;0.1" dur="2s" repeatCount="indefinite" />
      </path>
      
      {/* Lock icon */}
      <rect x="85" y="70" width="30" height="25" rx="3" fill="currentColor" />
      <path
        d="M 90 70 L 90 60 Q 90 50 100 50 Q 110 50 110 60 L 110 70"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Keyhole */}
      <circle cx="100" cy="80" r="4" fill="white" />
      <rect x="98" y="82" width="4" height="8" fill="white" />
      
      {/* Scan lines */}
      <line x1="60" y1="60" x2="140" y2="60" stroke="currentColor" strokeWidth="1" opacity="0">
        <animate attributeName="y1" values="40;120;40" dur="3s" repeatCount="indefinite" />
        <animate attributeName="y2" values="40;120;40" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.5;0" dur="3s" repeatCount="indefinite" />
      </line>
    </svg>
  );
}

function AnimatedVisual({ type }: { type: string }) {
  switch (type) {
    case "deploy":
      return <DeployVisual />;
    case "ai":
      return <AIVisual />;
    case "collab":
      return <CollabVisual />;
    case "security":
      return <SecurityVisual />;
    default:
      return <DeployVisual />;
  }
}

function FeatureCard({ feature, index }: { feature: FeatureItem; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 lg:py-20 border-b border-foreground/10">
        {/* Number */}
        <div className="shrink-0">
          <span className="font-mono text-sm text-muted-foreground">{feature.number}</span>
        </div>
        
        {/* Content */}
        <div className="flex-1 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl lg:text-4xl font-display mb-4 group-hover:translate-x-2 transition-transform duration-500">
              {feature.title}
            </h3>
            <FeatureDescription parts={feature.descriptionParts} />
          </div>
          
          {/* Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-48 h-40 text-foreground">
              <AnimatedVisual type={feature.visual} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const siteContent = useSiteContent();
  const features = siteContent.features.items;

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

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            {siteContent.features.eyebrow}
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {siteContent.features.title}
            <br />
            <span className="text-muted-foreground">{siteContent.features.titleMuted}</span>
          </h2>
        </div>

        {/* Features List */}
        <div>
          {features.map((feature, index) => (
            <FeatureCard key={feature.number} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
