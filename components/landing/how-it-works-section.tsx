"use client";

import { useEffect, useRef, useState } from "react";
import { useSiteContent } from "@/components/locale-provider";

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[280px] sm:w-[300px] mx-auto">
      <div className="absolute inset-0 rounded-[2.5rem] border border-background/15 bg-background/[0.03] shadow-2xl" />
      <div className="relative m-3 rounded-[2rem] overflow-hidden aspect-[390/844] bg-background text-foreground">
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-foreground/10 z-10" />
        {children}
        <div
          className="absolute bottom-3 left-1/2 -translate-x-1/2 h-1 w-24 rounded-full bg-foreground/20 z-10 pointer-events-none"
          aria-hidden
        />
      </div>
    </div>
  );
}

function SkeletonBar({ className }: { className?: string }) {
  return (
    <div
      className={`rounded-full bg-foreground/10 animate-pulse ${className ?? ""}`}
      aria-hidden
    />
  );
}

function MockHeader({ titleWidth = "w-10" }: { titleWidth?: string }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <SkeletonBar className={`h-3.5 ${titleWidth}`} />
      <SkeletonBar className="h-2.5 w-8" />
    </div>
  );
}

function StepEntryMock() {
  const { ui } = useSiteContent();
  return (
    <div className="flex flex-col h-full pt-12 px-4 pb-6">
      <MockHeader />

      <div className="space-y-4 mb-6">
        <div>
          <SkeletonBar className="h-2 w-8 mb-2" />
          <div className="rounded-xl border border-foreground/10 px-4 py-3.5">
            <SkeletonBar className="h-6 w-16" />
          </div>
        </div>
        <div>
          <SkeletonBar className="h-2 w-8 mb-2" />
          <div className="rounded-xl border border-foreground/10 px-4 py-3.5">
            <SkeletonBar className="h-3 w-24" />
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-auto mock-highlight">
        <div className="flex-1 rounded-full bg-foreground py-3 flex justify-center">
          <span className="text-xs font-medium text-background tracking-wide">{ui.mockExpenseButton}</span>
        </div>
        <div className="flex-1 rounded-full bg-foreground py-3 flex justify-center">
          <span className="text-xs font-medium text-background tracking-wide">{ui.mockIncomeButton}</span>
        </div>
      </div>
    </div>
  );
}

function StepListMock() {
  const { ui } = useSiteContent();
  return (
    <div className="flex flex-col h-full pt-12 px-4 pb-6">
      <MockHeader />

      <div className="rounded-2xl bg-foreground p-4 mb-5 mock-highlight">
        <span className="text-[10px] text-background/50 font-mono block mb-1">{ui.mockNetTotal}</span>
        <span className="text-xl font-display text-background tracking-tight">$12,480</span>
      </div>

      <div className="space-y-0 flex-1">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="flex items-center justify-between py-3 border-b border-foreground/8 last:border-0"
          >
            <div className="space-y-1.5">
              <SkeletonBar className="h-3 w-14" />
              <SkeletonBar className="h-2 w-8" />
            </div>
            <SkeletonBar className="h-3 w-16" />
          </div>
        ))}
      </div>
    </div>
  );
}

function StepStatsMock() {
  const { ui } = useSiteContent();
  return (
    <div className="flex flex-col h-full pt-12 px-4 pb-6">
      <MockHeader titleWidth="w-8" />

      <div className="space-y-3 mb-6">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-xl border border-foreground/10 px-4 py-3"
          >
            <SkeletonBar className="h-3 w-10" />
            <SkeletonBar className="h-3 w-16" />
          </div>
        ))}
      </div>

      <div className="mt-auto rounded-xl bg-foreground px-4 py-3 flex items-center justify-between mock-highlight">
        <span className="text-[10px] font-medium text-background tracking-wide">{ui.mockThisMonth}</span>
        <div className="h-3 w-px bg-background/20" />
        <span className="text-[10px] font-medium text-background tracking-wide">{ui.mockByAmount}</span>
      </div>
    </div>
  );
}

const stepMocks = [StepEntryMock, StepListMock, StepStatsMock];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { howItWorks } = useSiteContent();
  const steps = howItWorks.steps;

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
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [steps.length]);

  const ActiveMock = stepMocks[activeStep];

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-foreground text-background overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            currentColor 40px,
            currentColor 41px
          )`
        }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-background/50 mb-6">
            <span className="w-8 h-px bg-background/30" />
            {howItWorks.eyebrow}
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {howItWorks.title}
            <br />
            <span className="text-background/50">{howItWorks.titleMuted}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="space-y-0">
            {steps.map((step, index) => (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`w-full text-left py-8 border-b border-background/10 transition-all duration-500 group ${
                  activeStep === index ? "opacity-100" : "opacity-40 hover:opacity-70"
                }`}
              >
                <div className="flex items-start gap-6">
                  <span className="font-display text-3xl text-background/30">{step.number}</span>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-display mb-3 group-hover:translate-x-2 transition-transform duration-300">
                      {step.title}
                    </h3>
                    <p className="text-background/60 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {activeStep === index && (
                      <div className="mt-4 h-px bg-background/20 overflow-hidden">
                        <div 
                          className="h-full bg-background w-0"
                          style={{
                            animation: 'progress 5s linear forwards'
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:sticky lg:top-32 self-start flex flex-col items-center">
            <PhoneFrame>
              <div
                key={activeStep}
                className="h-full animate-mock-in"
              >
                <ActiveMock />
              </div>
            </PhoneFrame>
            <p className="mt-10 text-xs font-mono text-background/40 text-center">
              {howItWorks.status}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }

        @keyframes mockIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes highlightIn {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-mock-in {
          animation: mockIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .animate-mock-in .mock-highlight {
          animation: highlightIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both;
        }
      `}</style>
    </section>
  );
}
