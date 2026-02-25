import { Script } from "@/components/ui/script";

interface StructuredDataProps {
  name?: string;
  jobTitle?: string;
  email?: string;
  sameAs?: string[];
  url?: string;
}

export function PersonStructuredData({
  name = "Gilank",
  jobTitle = "Full-Stack Developer",
  email = "lankdevv@gmail.com",
  sameAs = [
    "https://github.com/theclipperss1-create",
    "https://www.linkedin.com/in/m-gilank/",
    "https://x.com/TuckerNash68095",
  ],
  url = process.env.NEXT_PUBLIC_SITE_URL || "https://gilank-portfolio.vercel.app",
}: StructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    email,
    url,
    sameAs,
    image: `${url}/og-image.png`,
    description:
      "A passionate full-stack developer creating elegant solutions that blend design, technology, and innovation.",
    knowsAbout: [
      "Web Development",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    worksLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "Indonesia",
      },
    },
  };

  return (
    <Script
      id="structured-data-person"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

interface WebSiteStructuredDataProps {
  name?: string;
  url?: string;
  description?: string;
}

export function WebSiteStructuredData({
  name = "Gilank Portfolio",
  url = process.env.NEXT_PUBLIC_SITE_URL || "https://gilank-portfolio.vercel.app",
  description = "A professional portfolio showcasing elegant solutions that blend design, technology, and innovation.",
}: WebSiteStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
    publisher: {
      "@type": "Person",
      name: "Gilank",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${url}/#search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Script
      id="structured-data-website"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
