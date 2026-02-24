import { cn } from "@/lib/utils";
import React from "react";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

/**
 * Apple-style Hero Heading
 * Massive, bold, with tight letter-spacing and cinematic line-height
 */
export function HeroHeading({ children, className, as = "h1" }: TypographyProps) {
  const Component = as;
  return (
    <Component
      className={cn(
        "text-5xl md:text-7xl lg:text-8xl font-bold text-tight text-cinematic",
        "tracking-tight",
        className
      )}
    >
      {children}
    </Component>
  );
}

/**
 * Apple-style Section Heading
 */
export function SectionHeading({ children, className, as = "h2" }: TypographyProps) {
  const Component = as;
  return (
    <Component
      className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-semibold text-tight",
        "tracking-tight",
        className
      )}
    >
      {children}
    </Component>
  );
}

/**
 * Apple-style Subheading
 */
export function Subheading({ children, className, as = "h3" }: TypographyProps) {
  const Component = as;
  return (
    <Component
      className={cn(
        "text-xl md:text-2xl font-medium text-tight",
        "tracking-tight",
        className
      )}
    >
      {children}
    </Component>
  );
}

/**
 * Apple-style Body Text
 */
export function BodyText({ children, className, as = "p" }: TypographyProps) {
  const Component = as;
  return (
    <Component
      className={cn(
        "text-base md:text-lg leading-relaxed",
        "text-muted-foreground",
        className
      )}
    >
      {children}
    </Component>
  );
}

/**
 * Apple-style Caption
 */
export function Caption({ children, className, as = "span" }: TypographyProps) {
  const Component = as;
  return (
    <Component
      className={cn(
        "text-sm md:text-base font-medium",
        "text-muted-foreground",
        "tracking-wide uppercase",
        className
      )}
    >
      {children}
    </Component>
  );
}
