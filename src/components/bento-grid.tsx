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
  size?: "small" | "medium" | "large";
}

interface BentoGridProps {
  projects?: Project[];
  className?: string;
  title?: string;
  subtitle?: string;
}

/**
 * Bento Grid Work Gallery
 * Modern grid with hyper-rounded corners (32px radius)
 * Apple-style glassmorphism and smooth micro-interactions
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
        <div className="mb-16 md:mb-24">
          <Caption className="mb-4">{subtitle}</Caption>
          <SectionHeading className="text-white">{title}</SectionHeading>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
  const sizeClass =
    project.size === "large"
      ? "md:col-span-2 md:row-span-2"
      : project.size === "medium"
        ? "md:col-span-2"
        : "";

  return (
    <article
      data-index={index}
      className={cn(
        "group relative",
        "rounded-[32px] overflow-hidden",
        "glass-card",
        "transition-all duration-700 ease-apple-slow",
        "hover:shadow-2xl hover:shadow-white/[0.05]",
        "hover:border-white/20",
        sizeClass,
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-12 scale-95"
      )}
    >
      {/* Card Content */}
      <div className="relative h-full min-h-[280px] md:min-h-[320px] flex flex-col p-6 md:p-8">
        {/* Background Image/Gradient */}
        {project.image ? (
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-apple group-hover:scale-105"
            style={{ backgroundImage: `url(${project.image})` }}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent" />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full justify-end">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium uppercase tracking-wider"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  borderRadius: "100px",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title & Description */}
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 text-tight">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm md:text-base line-clamp-2">
            {project.description}
          </p>

          {/* Hover Arrow Indicator */}
          <div
            className="mt-4 flex items-center gap-2 text-white/80 group-hover:text-white transition-colors duration-300"
            style={{ opacity: 0, transform: "translateX(-10px)", transitionDelay: "100ms" }}
          >
            <span className="text-sm font-medium">View Project</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
          </div>
        </div>

        {/* Ultra-thin border highlight on hover */}
        <div
          className="absolute inset-0 rounded-[32px] pointer-events-none"
          style={{
            border: "1px solid rgba(255, 255, 255, 0)",
            transition: "border-color 0.5s ease",
          }}
        />
      </div>
    </article>
  );
}

// Default sample projects
const defaultProjects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management and seamless checkout experience.",
    tags: ["Next.js", "TypeScript", "Stripe"],
    size: "large",
  },
  {
    id: "2",
    title: "Finance Dashboard",
    description:
      "Real-time financial analytics dashboard with interactive charts and data visualization.",
    tags: ["React", "D3.js", "Node.js"],
    size: "medium",
  },
  {
    id: "3",
    title: "Health & Wellness App",
    description:
      "Mobile-first application for tracking fitness goals and nutrition with AI-powered insights.",
    tags: ["React Native", "Firebase", "ML"],
    size: "small",
  },
  {
    id: "4",
    title: "Design System",
    description:
      "Comprehensive UI component library with documentation and accessibility standards.",
    tags: ["Storybook", "Figma", "A11y"],
    size: "small",
  },
  {
    id: "5",
    title: "AI Content Generator",
    description:
      "Intelligent content creation tool powered by machine learning for marketing teams.",
    tags: ["Python", "TensorFlow", "AWS"],
    size: "medium",
  },
];
