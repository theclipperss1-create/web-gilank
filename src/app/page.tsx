import { Hero } from "@/components/hero";
import { BentoGrid } from "@/components/bento-grid";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FadeIn, ScaleIn } from "@/components/micro-interactions";
import { BodyText, SectionHeading, Caption } from "@/components/typography";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero
        title="Crafting Digital Excellence"
        subtitle="Hi There, I'm Gilank"
        description="A passionate developer creating elegant solutions that blend design, technology, and innovation."
      />

      {/* About Section */}
      <section id="about" className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Profile Image */}
            <ScaleIn>
              <div
                className={cn(
                  "relative aspect-square max-w-md mx-auto",
                  "rounded-3xl overflow-hidden",
                  "bg-gradient-to-br from-white/[0.08] to-transparent",
                  "border border-white/5",
                  "p-3",
                  "transition-all duration-500",
                  "hover:border-white/10 hover:shadow-2xl hover:shadow-white/[0.05]"
                )}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden transition-transform duration-700 hover:scale-[1.02]">
                  <Image
                    src="/images/profile.jpeg"
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="text-4xl md:text-5xl font-semibold text-white">
                    2+
                  </div>
                  <p className="text-white/60 text-xs uppercase tracking-widest mt-1">
                    Years Experience
                  </p>
                </div>
              </div>
            </ScaleIn>

            {/* Right - Content */}
            <FadeIn direction="left" delay={200}>
              <Caption className="mb-4">About Me</Caption>
              <SectionHeading className="text-white mb-6">
                Building products that matter
              </SectionHeading>
              <BodyText className="mb-6 text-white/70">
                Full Stack Developer by trade, Vibe Coder by spirit. I build products that don&apos;t just work—they hit. Over 2 years of crafting digital spaces where technical precision meets high energy aesthetics. I care about the stack, but I care more about the flow. If it doesn&apos;t feel right, it isn&apos;t finished.
              </BodyText>
              <BodyText className="text-white/70">
                My approach is rooted in the belief that great design should be
                invisible – it should feel natural, intuitive, and effortless.
                Every project is an opportunity to push boundaries and create
                something extraordinary.
              </BodyText>

              {/* Skills */}
              <div className="mt-10">
                <p className="text-xs font-medium text-white/40 uppercase tracking-widest mb-4">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "React", url: "https://react.dev" },
                    { name: "Next.js", url: "https://nextjs.org" },
                    { name: "TypeScript", url: "https://www.typescriptlang.org" },
                    { name: "Node.js", url: "https://nodejs.org" },
                    { name: "Python", url: "https://www.python.org" },
                    { name: "AWS", url: "https://aws.amazon.com" },
                    { name: "PostgreSQL", url: "https://www.postgresql.org" },
                    { name: "Figma", url: "https://www.figma.com" },
                  ].map((skill) => (
                    <a
                      key={skill.name}
                      href={skill.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "px-4 py-2 text-xs rounded-full",
                        "bg-white/[0.03] border border-white/5",
                        "text-white/60",
                        "transition-all duration-300",
                        "hover:bg-white/[0.06] hover:border-white/10 hover:text-white"
                      )}
                    >
                      {skill.name}
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Work Section - Bento Grid */}
      <section id="work">
        <BentoGrid
          title="Selected Work"
          subtitle="Featured Projects"
          className="bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"
        />
      </section>

      {/* Services Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <Caption className="mb-4 text-center">What I Do</Caption>
            <SectionHeading className="text-white mb-4 text-center">
              Services & Expertise
            </SectionHeading>
            <p className="text-white/60 text-center max-w-2xl mx-auto mb-16">
              Delivering high-quality solutions tailored to your needs
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Web Development",
                description: "Custom websites built with modern technologies like React, Next.js, and TypeScript.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Mobile-First Design",
                description: "Applications that work perfectly on all devices with mobile-optimized experiences.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                ),
                title: "Database & Backend",
                description: "Robust backend solutions with Supabase, PostgreSQL, and Node.js.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Cyber Security",
                description: "Security assessments, vulnerability analysis, and threat detection.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Performance",
                description: "Speed optimization for faster load times and better search rankings.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                title: "Support",
                description: "Ongoing maintenance and support with quick response times.",
              },
            ].map((service, index) => (
              <FadeIn key={service.title} delay={index * 50} direction="up">
                <div
                  className={cn(
                    "group p-6 rounded-2xl",
                    "bg-white/[0.02] border border-white/5",
                    "transition-all duration-500",
                    "hover:bg-white/[0.04] hover:border-white/10 hover:shadow-2xl hover:shadow-white/[0.02]",
                    "hover:-translate-y-1"
                  )}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/70 mb-4 group-hover:scale-105 group-hover:text-white transition-all duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { value: "30+", label: "Projects Completed" },
                { value: "20+", label: "Happy Clients" },
                { value: "2+", label: "Years Experience" },
                { value: "100%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <FadeIn key={stat.label} delay={index * 100} direction="up">
                  <div className="text-center p-6">
                    <div className="text-4xl md:text-5xl font-semibold text-white mb-2">
                      {stat.value}
                    </div>
                    <p className="text-xs text-white/50 uppercase tracking-widest">
                      {stat.label}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
