import { Hero } from "@/components/hero";
import { BentoGrid } from "@/components/bento-grid";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FadeIn, ScaleIn } from "@/components/micro-interactions";
import { BodyText, SectionHeading, Caption } from "@/components/typography";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero
        title="Crafting Digital Excellence"
        subtitle="Hello, My Name is Gilank"
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
                  "rounded-[32px]",
                  "glass-card",
                  "overflow-hidden"
                )}
              >
                {/* Profile Image - Ganti src dengan path foto kamu */}
                <img
                  src="/images/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient for style */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Optional: Experience badge di pojok */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-4xl md:text-5xl font-bold text-white text-tight">
                    2+
                  </div>
                  <p className="text-white/80 text-xs uppercase tracking-widest mt-1">
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
              <BodyText className="mb-6">
                I&apos;m a full-stack vibe coder with a passion for creating beautiful,
                functional, and user-centered digital experiences. With over 2 years
                of experience in web development, I specialize in building products
                that combine aesthetic excellence with technical precision.
              </BodyText>
              <BodyText>
                My approach is rooted in the belief that great design should be
                invisible – it should feel natural, intuitive, and effortless.
                Every project is an opportunity to push boundaries and create
                something extraordinary.
              </BodyText>

              {/* Skills */}
              <div className="mt-10">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Node.js",
                    "Python",
                    "AWS",
                    "PostgreSQL",
                    "Figma",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm rounded-full bg-white/[0.05] border border-white/10 text-muted-foreground"
                    >
                      {skill}
                    </span>
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

      {/* Stats Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { value: "50+", label: "Projects Completed" },
                { value: "30+", label: "Happy Clients" },
                { value: "5+", label: "Years Experience" },
                { value: "10+", label: "Awards Won" },
              ].map((stat, index) => (
                <FadeIn key={stat.label} delay={index * 100} direction="up">
                  <div
                    className={cn(
                      "text-center p-8 rounded-[24px]",
                      "glass-card",
                      "transition-all duration-500 ease-apple-slow",
                      "hover:border-white/20 hover:shadow-lg hover:shadow-white/[0.05]"
                    )}
                  >
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2 text-tight">
                      {stat.value}
                    </div>
                    <p className="text-sm text-muted-foreground uppercase tracking-widest">
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
