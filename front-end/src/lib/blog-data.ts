export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  language: "id" | "en";
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "membangun-web-portofolio-premium",
    title: "Membangun Web Portofolio dengan Estetika Premium",
    date: "2026-06-20",
    summary: "Bagaimana cara merancang antarmuka portofolio yang bersih, interaktif, dan menonjol menggunakan prinsip desain modern dan kurva fisika.",
    language: "id",
    tags: ["Desain", "Web", "React"]
  },
  {
    slug: "building-premium-portfolio-websites",
    title: "Building Portfolio Websites with Premium Aesthetics",
    date: "2026-06-20",
    summary: "How to design clean, interactive, and outstanding portfolio interfaces using modern design principles and spring physics.",
    language: "en",
    tags: ["Design", "Web", "React"]
  },
  {
    slug: "mengapa-memilih-cloudflare-workers",
    title: "Mengapa Memilih Cloudflare Workers untuk API Serverless",
    date: "2026-06-15",
    summary: "Melihat lebih dalam keunggulan arsitektur Cloudflare Workers dibanding serverless function tradisional, termasuk tanpa adanya cold start.",
    language: "id",
    tags: ["Backend", "Serverless", "Cloudflare"]
  },
  {
    slug: "why-choose-cloudflare-workers",
    title: "Why Choose Cloudflare Workers for Serverless APIs",
    date: "2026-06-15",
    summary: "A deep dive into the benefits of Cloudflare Workers compared to traditional serverless functions, including zero cold start.",
    language: "en",
    tags: ["Backend", "Serverless", "Cloudflare"]
  }
];
