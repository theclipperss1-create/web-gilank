"use client";

import { cn } from "@/lib/utils";
import { BodyText, Caption } from "./typography";
import { MagneticButton } from "./micro-interactions";

interface FooterProps {
  className?: string;
  socialLinks?: { label: string; href: string; icon?: React.ReactNode }[];
}

/**
 * Minimalist Footer
 * Apple-style clean footer with subtle styling
 */
export function Footer({
  className,
  socialLinks = [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Email", href: "mailto:hello@example.com" },
  ],
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className={cn(
        "relative px-6 md:px-12 lg:px-24 py-16 md:py-24",
        "border-t border-white/5",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column - CTA */}
          <div>
            <Caption className="mb-4">Get In Touch</Caption>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 text-tight">
              Let&apos;s work together
            </h2>
            <BodyText className="max-w-md">
              Have a project in mind? I&apos;m always open to discussing new opportunities
              and interesting collaborations.
            </BodyText>

            {/* CTA Button */}
            <div className="mt-8">
              <MagneticButton>
                <a
                  href="mailto:hello@example.com"
                  className={cn(
                    "inline-flex items-center gap-3",
                    "px-6 py-4 rounded-full",
                    "bg-white text-black",
                    "font-medium text-sm",
                    "transition-all duration-500 ease-apple-slow",
                    "hover:bg-white/90 hover:scale-105",
                    "active:scale-95"
                  )}
                >
                  Say Hello
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </MagneticButton>
            </div>
          </div>

          {/* Right Column - Social Links */}
          <div className="md:flex md:flex-col md:justify-end">
            <Caption className="mb-6">Connect</Caption>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <MagneticButton key={link.label} strength={25}>
                  <a
                    href={link.href}
                    className={cn(
                      "px-5 py-3 rounded-full",
                      "text-sm font-medium",
                      "text-muted-foreground",
                      "bg-white/[0.05]",
                      "border border-white/5",
                      "transition-all duration-300 ease-apple",
                      "hover:text-white hover:bg-white/10 hover:border-white/10"
                    )}
                  >
                    {link.label}
                  </a>
                </MagneticButton>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={cn(
            "mt-16 md:mt-24 pt-8",
            "border-t border-white/5",
            "flex flex-col md:flex-row justify-between items-center gap-4"
          )}
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed with Apple aesthetics in mind.
          </p>
        </div>
      </div>
    </footer>
  );
}
