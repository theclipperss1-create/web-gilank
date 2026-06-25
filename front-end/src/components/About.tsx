import React from "react";
import { Briefcase, Code, MapPin } from "lucide-react";

interface AboutProps {
  t: any;
}

export const About: React.FC<AboutProps> = ({ t }) => {
  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Firebase",
    "Tailwind CSS",
    "GSAP",
    "Framer Motion",
    "PostgreSQL",
    "Git",
  ];

  return (
    <section id="about" className="px-6 md:px-12 lg:px-24 py-28 md:py-40 bg-canvas relative">
      <div className="max-w-7xl mx-auto">
        {/* Header - Left Aligned */}
        <div className="mb-16 md:mb-20 max-w-2xl">
          <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-accent mb-3 block">
            {t.about.subtitle}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
            {t.about.title}
          </h2>
        </div>

        {/* Bento Grid 2.0 - Asymmetric Layout (3 Columns, Gapless/Dense) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:grid-flow-dense">
          {/* Profile Photo Card with Experience Overlay - Span 1 Column */}
          <div className="p-3 rounded-[2.5rem] liquid-glass flex flex-col justify-between hover-glow-white transition-all duration-500 min-h-[350px] relative overflow-hidden group">
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
              <img
                src="/images/profile.png"
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
            
            {/* Experience Overlay */}
            <div className="absolute bottom-8 left-8 right-8 z-10">
              <span className="text-4xl md:text-5xl font-display font-bold text-white font-mono block leading-none">
                {t.about.experienceYears}
              </span>
              <span className="text-xs text-zinc-400 font-medium uppercase tracking-wider mt-2 block">
                {t.about.experienceCard}
              </span>
            </div>
          </div>

          {/* Main Biography Card - Span 2 Columns */}
          <div className="md:col-span-2 p-8 md:p-12 rounded-[2.5rem] liquid-glass flex flex-col justify-between min-h-[350px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[40%] h-[40%] rounded-full bg-white/[0.01] blur-3xl pointer-events-none" />
            
            <div>
              <Briefcase className="w-8 h-8 text-accent mb-6" />
              <div className="space-y-6 text-zinc-300 leading-relaxed text-base md:text-lg max-w-[65ch]">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-4 text-xs text-white/50 font-mono">
              <span>#Developer</span>
              <span>#Creator</span>
              <span>#Designer</span>
            </div>
          </div>

          {/* Stats Card - Projects Completed */}
          <div className="p-8 rounded-[2.5rem] liquid-glass flex flex-col justify-between hover-glow-white transition-all duration-500">
            <Code className="w-8 h-8 text-accent" />
            <div className="mt-8">
              <span className="text-4xl md:text-5xl font-display font-bold text-white font-mono block leading-none">
                {t.about.projectsCount}
              </span>
              <span className="text-sm text-zinc-400 font-medium uppercase tracking-wider mt-2 block">
                {t.about.projectsCard}
              </span>
            </div>
          </div>

          {/* Location Card */}
          <div className="p-8 rounded-[2.5rem] liquid-glass flex flex-col justify-between hover-glow-white transition-all duration-500">
            <MapPin className="w-8 h-8 text-accent" />
            <div className="mt-8">
              <span className="text-2xl font-display font-bold text-white block leading-none">
                {t.about.locationName}
              </span>
              <span className="text-sm text-zinc-400 font-medium uppercase tracking-wider mt-2 block">
                {t.about.locationCard}
              </span>
            </div>
          </div>

          {/* Tech Stacks Card - Span 1 Column */}
          <div className="p-8 md:p-10 rounded-[2.5rem] liquid-glass flex flex-col justify-between hover-glow-white transition-all duration-500">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">
                {t.about.techHeader}
              </span>
              <div className="flex flex-wrap gap-2 mt-4">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 text-xs font-medium rounded-full bg-white/[0.03] border border-white/5 hover:border-white/20 hover:bg-white/[0.06] hover:text-white transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
