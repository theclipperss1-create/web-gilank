import { useState, useEffect } from "react";
import { type Language, translations } from "./lib/i18n";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  const lang: Language = "en";
  const [activeSection, setActiveSection] = useState<string>("about");

  const t = translations[lang];

  // Scroll spy to update active section in navbar
  useEffect(() => {
    const sections = ["about", "services", "projects", "contact"];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for trigger point

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative min-h-[100dvh] bg-canvas text-zinc-100 antialiased overflow-x-hidden w-full max-w-full">
      <Navigation
        t={t}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <Hero
        t={t}
        onViewProjects={() => scrollToSection("projects")}
        onContactMe={() => scrollToSection("contact")}
      />

      <About t={t} />

      <Services t={t} />

      <Projects t={t} />

      <Contact t={t} />

      {/* Footer (Minimalist, Non-Cliché) */}
      <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-white/5 bg-canvas relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} M Gilank Putra Ramadhan. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/theclipperss1-create"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/m-gilank-putra-ramadhan-a127a7419/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
