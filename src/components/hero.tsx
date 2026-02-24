"use client";

import { HeroHeading, BodyText, Caption } from "./typography";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

/**
 * Minimalist Hero Component
 * Apple-style bold statement headline with no clutter
 */
export function Hero({
  title = "Crafting Digital Excellence",
  subtitle = "Hello, I'm",
  description = "A passionate developer creating elegant solutions that blend design, technology, and innovation.",
  className,
}: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className={cn(
        "relative min-h-screen flex flex-col justify-center items-center",
        "px-6 md:px-12 lg:px-24",
        "overflow-hidden",
        className
      )}
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto text-center">
        <Caption
          className={cn(
            "mb-6 md:mb-8",
            "transition-all duration-1000 ease-apple-slow",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          {subtitle}
        </Caption>

        <HeroHeading
          className={cn(
            "mb-6 md:mb-8",
            "text-white",
            "transition-all duration-1000 ease-apple-slow delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {title}
        </HeroHeading>

        <BodyText
          className={cn(
            "max-w-2xl mx-auto",
            "transition-all duration-1000 ease-apple-slow delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {description}
        </BodyText>

        {/* Scroll indicator */}
        <div
          className={cn(
            "absolute bottom-12 left-1/2 -translate-x-1/2",
            "flex flex-col items-center gap-3",
            "transition-all duration-1000 ease-apple-slow delay-300",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent">
            <div className="w-px h-4 bg-white/60 animate-bounce-slow" />
          </div>
        </div>
      </div>
    </section>
  );
}
