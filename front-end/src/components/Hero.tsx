import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

interface HeroProps {
  t: any;
  onViewProjects: () => void;
  onContactMe: () => void;
}

export const Hero: React.FC<HeroProps> = ({ t, onViewProjects, onContactMe }) => {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center px-6 overflow-hidden bg-canvas">
      {/* Background Mesh Gradient (Organic & Subtle) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent/3 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-white/[0.02] blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Subtitle / Hello */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs md:text-sm font-semibold uppercase tracking-widest text-accent mb-4"
        >
          {t.hero.subtitle}
        </motion.span>

        {/* H1 - Wide & Controlled to 2-3 Lines */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-tighter leading-none text-white max-w-4xl"
        >
          {t.hero.title}
        </motion.h1>

        {/* Description - Brief & Readable */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-base md:text-lg text-zinc-400 leading-relaxed max-w-[60ch]"
        >
          {t.hero.description}
        </motion.p>

        {/* Action Buttons - Tactile & High Contrast */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <button
            onClick={onViewProjects}
            className="group relative flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent-hover text-canvas font-semibold rounded-full transition-all duration-300 transform active:scale-98 cursor-pointer hover:shadow-lg hover:shadow-accent/15"
          >
            <span>{t.hero.ctaPrimary}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={onContactMe}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-white/10 text-white font-semibold rounded-full transition-all duration-300 transform active:scale-98 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-accent" />
            <span>{t.hero.ctaSecondary}</span>
          </button>
        </motion.div>
      </div>

      {/* Elegant scroll indicator element - simple, no chevron */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none z-10">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
};
