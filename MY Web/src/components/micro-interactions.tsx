"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
}

/**
 * FadeIn Component
 * Scroll-triggered fade-in animation with Apple-style easing
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.8,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const directionClass = {
    up: "translate-y-8",
    down: "-translate-y-8",
    left: "translate-x-8",
    right: "-translate-x-8",
    none: "",
  }[direction];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all",
        isVisible ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 ${directionClass}`,
        className
      )}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
}

/**
 * ScaleIn Component
 * Scroll-triggered scale-in animation
 */
interface ScaleInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: number;
}

export function ScaleIn({ children, className, delay = 0, from = 0.95 }: ScaleInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all",
        isVisible ? "opacity-100 scale-100" : `opacity-0`,
        className
      )}
      style={{
        transform: isVisible ? "scale(1)" : `scale(${from})`,
        transitionDuration: "0.8s",
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
}

/**
 * HoverLift Component
 * Adds buttery smooth hover lift effect to any element
 */
interface HoverLiftProps {
  children: ReactNode;
  className?: string;
  liftAmount?: number;
  scale?: number;
}

export function HoverLift({
  children,
  className,
  liftAmount = 8,
  scale = 1.02,
}: HoverLiftProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn("transition-all duration-500 ease-apple-slow", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? `translateY(-${liftAmount}px) scale(${scale})` : "translateY(0) scale(1)",
      }}
    >
      {children}
    </div>
  );
}

/**
 * ParallaxScroll Component
 * Adds subtle parallax effect to child elements on scroll
 */
interface ParallaxScrollProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function ParallaxScroll({ children, className, speed = 0.5 }: ParallaxScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Only calculate when element is in view
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const scrollProgress = 1 - rect.top / viewportHeight;
        setOffset(scrollProgress * speed * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div
      ref={ref}
      className={cn("will-change-transform", className)}
      style={{
        transform: `translateY(${offset}px)`,
        transition: "transform 0.1s linear",
      }}
    >
      {children}
    </div>
  );
}

/**
 * MagneticButton Component
 * Button with magnetic hover effect that follows cursor slightly
 */
interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
}

export function MagneticButton({
  children,
  className,
  strength = 30,
  onClick,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) / strength;
    const deltaY = (e.clientY - centerY) / strength;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={buttonRef}
      className={cn("inline-block cursor-pointer", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: isHovered ? "transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)" : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
}

/**
 * SmoothReveal Component
 * Reveals content with a smooth sliding mask animation
 */
interface SmoothRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "vertical" | "horizontal";
}

export function SmoothReveal({
  children,
  className,
  delay = 0,
  direction = "vertical",
}: SmoothRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsRevealed(true), delay);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: "30px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <div
        className={cn(
          "absolute inset-0 bg-background z-10 transition-transform duration-1000 ease-apple-slow",
          isRevealed ? (direction === "vertical" ? "-translate-y-full" : "-translate-x-full") : "translate-0"
        )}
        style={{
          transitionDelay: `${delay}ms`,
        }}
      />
      <div
        className={cn(
          "transition-all duration-1000 ease-apple-slow",
          isRevealed ? "opacity-100 blur-0" : "opacity-0 blur-sm"
        )}
        style={{
          transitionDelay: `${delay + 200}ms`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
