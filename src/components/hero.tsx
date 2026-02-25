"use client";

import { HeroHeading, BodyText, Caption } from "./typography";
import { cn } from "@/lib/utils";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

/**
 * Minimalist Hero Component with subtle Apple-style animations
 */
export function Hero({
  title = "Crafting Digital Excellence",
  subtitle = "Hi There, I'm Gilank",
  description = "A passionate developer creating elegant solutions that blend design, technology, and innovation.",
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative min-h-screen flex flex-col justify-center items-center",
        "px-6 md:px-12 lg:px-24",
        "overflow-hidden",
        className
      )}
    >
      {/* Subtle animated gradient background */}
      <div className="absolute inset-0 -z-10">
        {/* Soft gradient orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/8 to-blue-500/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/6 to-emerald-500/6 rounded-full blur-[100px]" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge with subtle glow */}
        <Caption
          className={cn(
            "mb-8",
            "inline-flex items-center gap-2 px-4 py-2 rounded-full",
            "bg-white/[0.04] border border-white/8",
            "backdrop-blur-xl",
            "animate-in fade-in slide-in-to-bottom-4 duration-1000"
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse" />
          <span className="text-xs font-medium text-white/90">
            {subtitle}
          </span>
        </Caption>

        {/* Main heading with gradient */}
        <HeroHeading
          className={cn(
            "mb-6",
            "bg-gradient-to-b from-white via-white to-white/80 bg-clip-text text-transparent",
            "animate-in fade-in slide-in-to-bottom-8 duration-1000 delay-100"
          )}
        >
          {title}
        </HeroHeading>

        {/* Description */}
        <BodyText
          className={cn(
            "max-w-2xl mx-auto",
            "text-white/70",
            "animate-in fade-in slide-in-to-bottom-8 duration-1000 delay-200"
          )}
        >
          {description}
        </BodyText>

        {/* Elegant divider */}
        <div
          className={cn(
            "mx-auto mt-12",
            "w-24 h-px",
            "bg-gradient-to-r from-transparent via-white/20 to-transparent",
            "animate-in fade-in zoom-in-90 duration-1000 delay-300"
          )}
        />

        {/* Stats with subtle hover */}
        <div
          className={cn(
            "mt-16 flex flex-wrap justify-center gap-12 md:gap-20",
            "animate-in fade-in slide-in-to-bottom-8 duration-1000 delay-400"
          )}
        >
          {[
            { value: "2+", label: "Years Experience" },
            { value: "30+", label: "Projects Completed" },
            { value: "20+", label: "Happy Clients" },
          ].map((stat) => (
            <div key={stat.label} className="group text-center">
              <div className="text-4xl md:text-5xl font-semibold text-white/90 group-hover:text-white transition-colors duration-500">
                {stat.value}
              </div>
              <div className="text-[11px] text-white/50 uppercase tracking-widest mt-2 group-hover:text-white/70 transition-colors duration-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
