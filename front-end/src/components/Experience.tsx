import React, { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Calendar } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  description: string;
}

interface ExperienceProps {
  t: any;
}

export const Experience: React.FC<ExperienceProps> = ({ t }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Create pinned scroll effect for desktop viewports (> 768px)
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        ScrollTrigger.create({
          trigger: triggerRef.current,
          start: "top top+=120",
          end: "bottom bottom-=50",
          pin: pinRef.current,
          pinSpacing: false,
          scrub: true,
          invalidateOnRefresh: true,
        });
      });

      return () => {
        mm.revert();
      };
    },
    { scope: containerRef }
  );

  const experiences: ExperienceItem[] = t.experience.list;

  return (
    <section
      ref={containerRef}
      id="experience"
      className="px-6 md:px-12 lg:px-24 py-32 md:py-48 bg-canvas relative"
    >
      <div ref={triggerRef} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Column - Pinned Title & Year Box (Span 1 Column) */}
        <div className="md:col-span-1">
          <div ref={pinRef} className="flex flex-col gap-4">
            <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-accent">
              {t.experience.subtitle}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
              {t.experience.title}
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mt-4 max-w-[25ch] leading-relaxed hidden md:block">
              Perjalanan karir profesional saya dalam merancang antarmuka web modern dan tangguh.
            </p>
          </div>
        </div>

        {/* Right Column - Scrolling Timeline Items (Span 2 Columns) */}
        <div className="md:col-span-2 space-y-16">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-8 md:pl-12 border-l border-white/10 group pb-4"
            >
              {/* Timeline Dot with Emerald Pulsing on Hover */}
              <div className="absolute left-[-6px] top-1.5 w-3 h-3 rounded-full bg-zinc-800 border-2 border-white/20 group-hover:bg-accent group-hover:border-accent transition-all duration-300 shadow-sm" />

              {/* Year Badge */}
              <div className="flex items-center gap-2 mb-4 text-xs font-semibold font-mono text-accent">
                <Calendar className="w-3.5 h-3.5" />
                <span>{item.year}</span>
              </div>

              {/* Job Info Card - Bento 2.0 Style */}
              <div className="p-8 rounded-[2rem] liquid-glass hover-glow-emerald transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[30%] h-[30%] rounded-full bg-accent/2 blur-2xl pointer-events-none" />

                <h3 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight">
                  {item.role}
                </h3>
                <span className="text-sm font-semibold text-zinc-400 mt-1 block">
                  {item.company}
                </span>
                <p className="text-zinc-400 text-sm md:text-base mt-4 leading-relaxed max-w-[60ch]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
