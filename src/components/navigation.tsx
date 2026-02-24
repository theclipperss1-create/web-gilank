"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { MagneticButton } from "./micro-interactions";

interface NavigationProps {
  links?: { label: string; href: string }[];
  className?: string;
}

/**
 * Minimalist Navigation
 * Apple-style glassmorphic navigation with subtle hover effects
 */
export function Navigation({
  links = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  className,
}: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = links.map((link) => link.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "transition-all duration-500 ease-apple-slow",
        isScrolled ? "py-4" : "py-6",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div
          className={cn(
            "flex items-center justify-between",
            "rounded-full px-6 py-4",
            "transition-all duration-500 ease-apple-slow",
            isScrolled
              ? "glass bg-black/40 shadow-lg shadow-black/20"
              : "bg-transparent"
          )}
          style={{
            backdropFilter: isScrolled ? "blur(20px)" : "none",
            WebkitBackdropFilter: isScrolled ? "blur(20px)" : "none",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            className="text-lg font-semibold text-white tracking-tight hover:text-white/80 transition-colors duration-300"
          >
            Portfolio
          </a>

          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            {links.map((link) => (
              <MagneticButton key={link.href} strength={20}>
                <a
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium",
                    "transition-all duration-300 ease-apple",
                    activeSection === link.href
                      ? "text-white bg-white/10"
                      : "text-muted-foreground hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </a>
              </MagneticButton>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
