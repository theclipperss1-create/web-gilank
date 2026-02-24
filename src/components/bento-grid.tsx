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
}

interface BentoGridProps {
  projects?: Project[];
  className?: string;
  title?: string;
  subtitle?: string;
}

/**
 * Bento Grid Work Gallery
 * Clean uniform grid layout
 */
export function BentoGrid({
  projects = defaultProjects,
  className,
  title = "Selected Work",
  subtitle = "Featured Projects",
}: BentoGridProps) {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
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
}

function BentoCard({ project, index, isVisible }: BentoCardProps) {
  const CardWrapper = project.link ? "a" : "article";

  return (
    <CardWrapper
      data-index={index}
      href={project.link || "#"}
      target={project.link?.startsWith("http") ? "_blank" : undefined}
      rel={project.link?.startsWith("http") ? "noopener noreferrer" : undefined}
      className={cn(
        "group relative block",
        "rounded-2xl overflow-hidden",
        "bg-white/[0.02] border border-white/5",
        "transition-all duration-500",
        "hover:bg-white/[0.04] hover:border-white/10",
        "hover:shadow-2xl hover:shadow-white/[0.02]",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8",
        project.link && "cursor-pointer"
      )}
    >
      {/* Card Content */}
      <div className="relative h-full min-h-[280px] flex flex-col">
        {/* Image */}
        {project.image ? (
          <div className="relative flex-1 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </div>
        ) : (
          <div className="flex-1 bg-gradient-to-br from-white/[0.05] to-transparent" />
        )}

        {/* Content */}
        <div className="relative z-10 p-5 flex flex-col gap-3">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider rounded-full bg-white/[0.05] border border-white/5 text-white/50"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title & Description */}
          <div>
            <h3 className="text-base font-semibold text-white mb-1">
              {project.title}
            </h3>
            <p className="text-white/50 text-sm line-clamp-2">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}

// Default sample projects
const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Confess Web",
    description:
      "An anonymous confession platform where users can share their thoughts and feelings securely.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase"],
    image: "/images/confesweb.png",
    link: "https://confdev.vercel.app/",
  },
  {
    id: "2",
    title: "Finance Dashboard",
    description:
      "Real-time financial analytics dashboard with interactive charts and data visualization.",
    tags: ["React", "D3.js", "Node.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    link: "#",
  },
  {
    id: "3",
    title: "Calculator Python",
    description:
      "A Python-based calculator application with clean UI and comprehensive mathematical operations.",
    tags: ["Python", "Tkinter", "GUI"],
    image: "/images/calculator.png",
    link: "#",
  },
];
