import { Metadata } from "next";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/micro-interactions";
import { SectionHeading, BodyText, Caption } from "@/components/typography";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

// Sample project data - in production, fetch from CMS or database
const projects = {
  "markdown-note": {
    title: "Markdown Note",
    description:
      "A clean and minimalist note-taking application with Markdown support, real-time preview, and local storage persistence.",
    longDescription:
      "Markdown Note is a streamlined note-taking application designed for writers, developers, and anyone who loves Markdown. Features include real-time preview, syntax highlighting, local storage persistence, and a distraction-free writing environment. The app supports full Markdown syntax with instant rendering, making it perfect for documentation, journaling, and quick notes.",
    image: "/images/markdown-note.jpeg",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Markdown", "LocalStorage"],
    link: "https://minimalist-markdown-note.vercel.app/",
    github: "https://github.com/theclipperss1-create",
    features: [
      "Real-time Markdown preview with instant rendering",
      "Full Markdown syntax support (headers, lists, code blocks, tables)",
      "Local storage persistence for automatic saving",
      "Dark mode for comfortable writing",
      "Responsive design for all devices",
      "Clean, distraction-free writing interface",
      "Export notes as Markdown files",
      "Syntax highlighting for code blocks",
    ],
    challenges:
      "Implementing a robust Markdown parser that handles all syntax correctly while maintaining fast real-time preview performance and preventing XSS vulnerabilities.",
    results:
      "A fast, reliable note-taking tool with sub-50ms preview updates. Used daily by developers and writers for documentation and personal notes.",
  },
  "confess-web": {
    title: "Confess Web",
    description:
      "An anonymous confession platform where users can share their thoughts and feelings securely with end-to-end encryption.",
    longDescription:
      "Confess Web is a secure platform that allows users to share their thoughts, feelings, and confessions anonymously. Built with modern web technologies, it features end-to-end encryption, real-time updates, and a beautiful, intuitive interface. The platform emphasizes user privacy and security while providing a space for honest expression.",
    image: "/images/confesweb.png",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase"],
    link: "https://confdev.vercel.app/",
    github: "https://github.com/theclipperss1-create",
    features: [
      "End-to-end encryption for all submissions",
      "Anonymous posting with optional identity reveal",
      "Real-time updates using Supabase subscriptions",
      "Moderation dashboard for content management",
      "Responsive design for all devices",
      "Dark mode support",
    ],
    challenges:
      "Implementing secure encryption while maintaining performance and creating an intuitive user experience that encourages honest expression.",
    results:
      "Successfully launched with over 1,000 active users and 5,000+ confessions shared. Achieved 99.9% uptime and sub-100ms response times.",
  },
  "finance-dashboard": {
    title: "Finance Dashboard",
    description:
      "Real-time financial analytics dashboard with interactive charts, budget tracking, and expense categorization.",
    longDescription:
      "A comprehensive financial dashboard that provides real-time insights into personal and business finances. Features interactive D3.js charts, automated expense categorization, budget tracking, and financial goal setting. The dashboard connects to multiple bank accounts and financial institutions through secure APIs.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Next.js", "D3.js", "PostgreSQL", "Prisma"],
    link: "#",
    github: "#",
    features: [
      "Real-time financial data synchronization",
      "Interactive D3.js charts and visualizations",
      "Automated expense categorization using ML",
      "Budget tracking with alerts",
      "Financial goal setting and progress tracking",
      "Multi-currency support",
    ],
    challenges:
      "Handling large datasets efficiently while maintaining smooth animations and real-time updates across multiple data sources.",
    results:
      "Reduced financial tracking time by 70% for beta users. Processed over $1M in tracked transactions with 99.9% accuracy.",
  },
  "calculator-python": {
    title: "Calculator Python",
    description:
      "A Python-based calculator application with clean GUI and comprehensive mathematical operations including scientific functions.",
    longDescription:
      "A feature-rich calculator application built with Python and Tkinter. Supports basic arithmetic, scientific calculations, graphing functions, and history tracking. The clean, intuitive interface makes complex calculations accessible to everyone from students to professionals.",
    image: "/images/calculator.png",
    tags: ["Python", "Tkinter", "GUI"],
    link: "#",
    github: "#",
    features: [
      "Basic and scientific calculation modes",
      "Graphing capabilities for functions",
      "Calculation history with recall",
      "Customizable themes",
      "Keyboard shortcuts",
      "Export calculations to file",
    ],
    challenges:
      "Creating an intuitive GUI that doesn't overwhelm users while providing access to advanced mathematical functions.",
    results:
      "Downloaded over 5,000 times. Used in educational settings for teaching programming and mathematics.",
  },
  "ecommerce-platform": {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with cart, checkout, payment integration, and admin dashboard for inventory management.",
    longDescription:
      "A complete e-commerce platform featuring product management, shopping cart, secure checkout with Stripe payments, order tracking, and a comprehensive admin dashboard. Built for scalability and performance, it handles everything from small boutiques to large retailers.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    tags: ["Next.js", "Stripe", "Supabase", "TypeScript"],
    link: "#",
    github: "#",
    features: [
      "Product catalog with search and filters",
      "Shopping cart with persistent storage",
      "Secure Stripe payment integration",
      "Order tracking and history",
      "Admin dashboard for inventory",
      "Email notifications",
    ],
    challenges:
      "Implementing secure payment processing while maintaining PCI compliance and providing a seamless checkout experience.",
    results:
      "Processed over $100K in transactions. Achieved 98% cart completion rate and sub-2-second page loads.",
  },
  "task-management": {
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates, team workspaces, and productivity analytics.",
    longDescription:
      "A modern task management application designed for teams. Features real-time collaboration, customizable workflows, time tracking, and detailed productivity analytics. Integrates with popular tools like Slack, GitHub, and Google Calendar.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "#",
    github: "#",
    features: [
      "Real-time collaboration with Socket.io",
      "Customizable Kanban boards",
      "Time tracking and reporting",
      "Team workspaces",
      "Integration with Slack and GitHub",
      "Mobile-responsive design",
    ],
    challenges:
      "Maintaining real-time synchronization across multiple users while handling conflicts and ensuring data consistency.",
    results:
      "Adopted by 50+ teams. Improved team productivity by an average of 35% according to user surveys.",
  },
  "weather-app": {
    title: "Weather Forecast App",
    description:
      "Beautiful weather application with 7-day forecasts, interactive maps, and severe weather alerts.",
    longDescription:
      "A comprehensive weather application providing accurate forecasts, interactive radar maps, and severe weather alerts. Features location-based services, customizable widgets, and a beautiful, intuitive interface that makes weather information accessible at a glance.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
    tags: ["React", "OpenWeather API", "Mapbox", "PWA"],
    link: "#",
    github: "#",
    features: [
      "7-day detailed forecasts",
      "Interactive radar maps",
      "Severe weather alerts",
      "Location-based services",
      "Progressive Web App support",
      "Customizable home screen widgets",
    ],
    challenges:
      "Presenting complex meteorological data in an accessible, visually appealing way while maintaining fast load times.",
    results:
      "Over 10,000 active users. 4.8-star rating on app stores. 95% user retention after 30 days.",
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.image ? [project.image] : [],
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-background">
      <Navigation />

      <article className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-6 md:px-12 lg:px-24 py-12 md:py-20">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white mb-8 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Projects
              </Link>

              <Caption className="mb-4">Case Study</Caption>
              <SectionHeading className="text-white mb-6">{project.title}</SectionHeading>
              <p className="text-white/70 text-lg max-w-3xl">{project.longDescription}</p>
            </FadeIn>

            {/* Project Image */}
            <FadeIn delay={200} className="mt-12">
              <div
                className={cn(
                  "relative rounded-2xl overflow-hidden",
                  "bg-white/[0.02] border border-white/5",
                  "aspect-video"
                )}
              >
                {project.image?.startsWith("http") ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                )}
              </div>
            </FadeIn>

            {/* Quick Info */}
            <FadeIn delay={300} className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-medium uppercase tracking-wider rounded-full bg-white/[0.05] border border-white/5 text-white/60"
                >
                  {tag}
                </span>
              ))}
            </FadeIn>

            {/* Links */}
            <FadeIn delay={400} className="mt-8 flex gap-4">
              {project.link && project.link.startsWith("http") && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center gap-2 px-6 py-3 rounded-full",
                    "bg-white text-black font-medium text-sm",
                    "transition-all duration-300 hover:bg-white/90 hover:scale-105"
                  )}
                >
                  View Live
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center gap-2 px-6 py-3 rounded-full",
                    "bg-white/[0.05] border border-white/10 text-white font-medium text-sm",
                    "transition-all duration-300 hover:bg-white/[0.1]"
                  )}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  Source Code
                </a>
              )}
            </FadeIn>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-6 md:px-12 lg:px-24 py-16 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <h2 className="text-2xl font-semibold text-white mb-8">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <FadeIn key={index} delay={index * 50}>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-white/70 text-sm">{feature}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Challenges & Results */}
        <section className="px-6 md:px-12 lg:px-24 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <FadeIn>
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-4">Challenges</h3>
                  <BodyText className="text-white/60">{project.challenges}</BodyText>
                </div>
              </FadeIn>
              <FadeIn delay={200}>
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-4">Results</h3>
                  <BodyText className="text-white/60">{project.results}</BodyText>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
