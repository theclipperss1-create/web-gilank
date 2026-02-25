"use client";

import { cn } from "@/lib/utils";
import { Caption } from "./typography";
import { MagneticButton } from "./micro-interactions";
import { ContactForm } from "./contact-form";

interface FooterProps {
  className?: string;
  socialLinks?: { label: string; href: string }[];
}

export function Footer({
  className,
  socialLinks = [
    { label: "GitHub", href: "https://github.com/theclipperss1-create" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/m-gilank/" },
    { label: "Twitter", href: "https://x.com/TuckerNash68095" },
    { label: "Email", href: "mailto:lankdevv@gmail.com" },
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
        {/* Contact Form Section */}
        <div className="mb-16">
          <Caption className="mb-4 text-center">Get In Touch</Caption>
          <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-4">
            Let&apos;s work together
          </h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-8">
            Have a project in mind? I&apos;m always open to discussing new opportunities
            and interesting collaborations.
          </p>
          <ContactForm className="mx-auto" />
        </div>

        {/* Social Links & Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-2">
              {socialLinks.map((link) => (
                <MagneticButton key={link.label} strength={25}>
                  <a
                    href={link.href}
                    className={cn(
                      "px-4 py-2.5 rounded-full",
                      "text-xs font-medium tracking-wide",
                      "text-white/60",
                      "bg-white/[0.03] border border-white/5",
                      "transition-all duration-300",
                      "hover:text-white hover:bg-white/[0.06] hover:border-white/10"
                    )}
                  >
                    {link.label}
                  </a>
                </MagneticButton>
              ))}
            </div>

            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
              <p className="text-xs text-white/40">
                © {currentYear} Gilank. All rights reserved.
              </p>
              <p className="text-xs text-white/40">
                Designed with Apple aesthetics in mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
