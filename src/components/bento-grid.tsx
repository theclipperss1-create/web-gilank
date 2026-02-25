"use client";

import { cn } from "@/lib/utils";
import { SectionHeading, Caption } from "./typography";
import { useEffect, useState, useRef } from "react";

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  link?: string;
  isExternal?: boolean; // Flag to open external links directly
}

interface BentoGridProps {
  projects?: Project[];
  className?: string;
  title?: string;
  subtitle?: string;
}

/**
 * Bento Grid Work Gallery
 * Clean uniform grid layout with cool hover effects
 */
export function BentoGrid({
  projects = defaultProjects,
  className,
  title = "Selected Work",
  subtitle = "Featured Projects",
}: BentoGridProps) {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const gridRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    const cards = gridRef.current?.querySelectorAll("[data-index]");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={gridRef}
      className={cn("px-6 md:px-12 lg:px-24 py-24 md:py-32", className)}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <Caption className="mb-4 text-center">{subtitle}</Caption>
          <SectionHeading className="text-white text-center">{title}</SectionHeading>
        </div>

        {/* Bento Grid - Clean uniform layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <BentoCard
              key={project.id}
              project={project}
              index={index}
              isVisible={visibleItems.has(index)}
              isHovered={hoveredIndex === index}
              onHoverChange={setHoveredIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface BentoCardProps {
  project: Project;
  index: number;
  isVisible: boolean;
  isHovered: boolean;
  onHoverChange: (index: number | null) => void;
}

function BentoCard({ project, index, isVisible, isHovered, onHoverChange }: BentoCardProps) {
  const projectSlug = project.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  const href = project.isExternal ? project.link : `/projects/${projectSlug}`;
  const isExternal = project.isExternal || (project.link?.startsWith("http") && project.link !== "#");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      data-index={index}
      onMouseEnter={() => onHoverChange(index)}
      onMouseLeave={() => onHoverChange(null)}
      className={cn(
        "group relative block",
        "rounded-2xl overflow-hidden",
        "bg-white/[0.02] border border-white/5",
        "transition-all duration-500 ease-out",
        "hover:bg-white/[0.05] hover:border-white/15",
        "hover:shadow-2xl hover:shadow-purple-500/10 hover:shadow-blue-500/5",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8",
        "cursor-pointer"
      )}
    >
      {/* Animated gradient border on hover */}
      <div className={cn(
        "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
        "bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10"
      )} />

      {/* Shine effect */}
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none",
        "bg-gradient-to-tr from-white/0 via-white/[0.03] to-white/0",
        "animate-shine"
      )} style={{ backgroundSize: "200% 200%" }} />

      {/* Card Content */}
      <div className="relative h-full min-h-[280px] flex flex-col">
        {/* Image */}
        {project.image ? (
          <div className="relative flex-1 overflow-hidden">
            <div
              className={cn(
                "absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out",
                isHovered ? "scale-110" : "scale-100"
              )}
              style={{ backgroundImage: `url(${project.image})` }}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent transition-opacity duration-500 group-hover:via-black/30" />
            
            {/* External link indicator */}
            {isExternal && (
              <div className="absolute top-3 right-3 z-20">
                <div className="px-2.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-1.5">
                  <svg className="w-3 h-3 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span className="text-[10px] font-medium text-white/70 uppercase tracking-wider">Live</span>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex-1 bg-gradient-to-br from-white/[0.05] to-transparent" />
        )}

        {/* Content */}
        <div className="relative z-10 p-5 flex flex-col gap-3">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tag}
                className={cn(
                  "px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider rounded-full",
                  "bg-white/[0.05] border border-white/5 text-white/50",
                  "transition-all duration-300",
                  isHovered ? "bg-white/[0.08] border-white/10 text-white/70" : "",
                  "hover:bg-white/[0.1] hover:border-white/15 hover:text-white"
                )}
                style={{
                  transitionDelay: `${tagIndex * 30}ms`
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title & Description */}
          <div className="transition-transform duration-500 group-hover:translate-x-1">
            <h3 className="text-base font-semibold text-white mb-1 flex items-center gap-2">
              {project.title}
              {isExternal && (
                <svg className="w-3.5 h-3.5 text-white/40 group-hover:text-white/70 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              )}
            </h3>
            <p className="text-white/50 text-sm line-clamp-2 group-hover:text-white/60 transition-colors duration-300">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      {/* Hover glow effect */}
      <div className={cn(
        "absolute -bottom-1 -left-1 -right-1 h-32 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-2xl"
      )} />
    </a>
  );
}

// Default sample projects
const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Markdown Note",
    description:
      "A clean and minimalist note-taking application with Markdown support, real-time preview, and local storage persistence.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Markdown"],
    image: "/images/markdown-note.jpeg",
    link: "https://minimalist-markdown-note.vercel.app/",
    isExternal: true, // Opens directly in new tab
  },
  {
    id: "2",
    title: "Confess Web",
    description:
      "An anonymous confession platform where users can share their thoughts and feelings securely with end-to-end encryption.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase"],
    image: "/images/confesweb.png",
    link: "https://confdev.vercel.app/",
    isExternal: true, // Opens directly in new tab
  },
  {
    id: "3",
    title: "Finance Dashboard",
    description:
      "Real-time financial analytics dashboard with interactive charts, budget tracking, and expense categorization.",
    tags: ["Next.js", "D3.js", "PostgreSQL", "Prisma"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    link: "#",
  },
  {
    id: "4",
    title: "Calculator Python",
    description:
      "A Python-based calculator application with clean GUI and comprehensive mathematical operations including scientific functions.",
    tags: ["Python", "Tkinter", "GUI"],
    image: "/images/calculator.png",
    link: "#",
  },
];
