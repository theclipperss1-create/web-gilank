"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { MagneticButton } from "./micro-interactions";

interface NavigationProps {
  links?: { label: string; href: string }[];
  className?: string;
}

/**
 * Minimalist Navigation with Apple glassmorphism
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
      setIsScrolled(window.scrollY > 20);

      const sections = links.map((link) => link.href.replace("#", ""));
      let currentSection = "";
      
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      if (scrollPosition >= documentHeight - 100) {
        currentSection = "#contact";
      } else {
        for (const section of sections) {
          if (section === "contact") continue;
          
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 200 && rect.bottom >= 200) {
              currentSection = `#${section}`;
              break;
            }
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "transition-all duration-500",
        isScrolled ? "py-3" : "py-5",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div
          className={cn(
            "flex items-center justify-between",
            "rounded-full px-5 py-2.5",
            "transition-all duration-500",
            isScrolled
              ? "bg-black/30 backdrop-blur-2xl border border-white/5 shadow-lg shadow-black/10"
              : "bg-transparent backdrop-blur-0 border border-transparent"
          )}
        >
          {/* Logo */}
          <a
            href="#"
            className="text-base font-semibold text-white/90 hover:text-white transition-colors duration-300 tracking-tight"
          >
            Gilank
          </a>

          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            {links.map((link) => (
              <MagneticButton key={link.href} strength={20}>
                <a
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs font-medium tracking-wide",
                    "transition-all duration-300",
                    activeSection === link.href
                      ? "text-white bg-white/10"
                      : "text-white/60 hover:text-white hover:bg-white/5"
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
