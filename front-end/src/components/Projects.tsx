import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ExternalLink } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  demoUrl: string;
  tags: string[];
}

interface ProjectsProps {
  t: any;
}

export const Projects: React.FC<ProjectsProps> = ({ t }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = t.projects.list;

  return (
    <section id="projects" className="py-28 md:py-40 bg-canvas relative overflow-hidden w-full max-w-full">
      {/* Section Header */}
      <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-16 md:mb-20">
        <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-accent mb-3 block">
          {t.projects.subtitle}
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
          {t.projects.title}
        </h2>
      </div>

      {/* Infinite Horizontal Scroll Track (Smooth Right to Left) */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Premium Edge Fade Gradients */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-canvas to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-canvas to-transparent z-10 pointer-events-none" />

        {/* Marquee Row */}
        <div className="animate-marquee flex gap-6 hover:[animation-play-state:paused] py-4">
          {/* Double the list for seamless infinite loop */}
          {[...projects, ...projects].map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              onClick={() => setSelectedProject(project)}
              className="w-[320px] md:w-[360px] flex-shrink-0 rounded-[2.5rem] liquid-glass hover-glow-white transition-all duration-500 cursor-pointer group flex flex-col justify-between overflow-hidden transform active:scale-98"
            >
              {/* Aspect Ratio 16:10 Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                
                {/* Visual indicator on hover */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                  <ArrowUpRight className="w-4 h-4 text-accent" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
                    {project.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-display font-bold text-white mt-1.5 group-hover:text-accent transition-colors duration-300 tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-400 mt-3 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[10px] font-semibold rounded-full bg-white/[0.03] border border-white/5 text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Iframe Modal Pop-up for Live Demo */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full h-full max-w-6xl rounded-[2.5rem] bg-canvas border border-white/10 overflow-hidden shadow-2xl flex flex-col z-10"
            >
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-surface">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {selectedProject.category}
                  </span>
                  <h4 className="text-lg md:text-xl font-display font-bold text-white tracking-tight">
                    {selectedProject.title}
                  </h4>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-accent hover:bg-accent-hover text-canvas transition-colors duration-300"
                  >
                    <span>{t.projects.viewDemo}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-full border border-white/10 hover:border-white/20 text-white/80 hover:text-white cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Iframe Area (Simulated web preview / iframe) */}
              <div className="flex-1 bg-black relative">
                <iframe
                  src={selectedProject.demoUrl}
                  title={`Live Demo of ${selectedProject.title}`}
                  className="w-full h-full border-0 bg-zinc-950"
                  sandbox="allow-scripts allow-same-origin"
                />
                {/* Fallback Overlay since demo URL is a placeholder/vercel app */}
                {/* We render this fallback overlay to guarantee a beautiful presentation if the iframe fails to load or for visual clarity */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950/95 p-6 text-center z-20">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full max-w-xl aspect-video object-cover rounded-2xl border border-white/5 mb-6 shadow-2xl"
                  />
                  <h5 className="text-xl font-bold text-white mb-2 tracking-tight font-display">{selectedProject.title}</h5>
                  <p className="text-xs md:text-sm text-zinc-400 max-w-md mb-6 leading-relaxed">{selectedProject.description}</p>
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-accent hover:bg-accent-hover text-canvas font-bold text-sm transition-all shadow-lg hover:shadow-accent/15"
                  >
                    <span>{t.projects.viewDemo}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
