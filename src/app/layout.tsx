import type { Metadata } from "next";
import { Geist, Geist_Mono, Parkinsans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { PersonStructuredData, WebSiteStructuredData } from "@/components/structured-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const parkinsans = Parkinsans({
  variable: "--font-parkinsans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://gilank-portfolio.vercel.app"),
  title: {
    default: "Gilank | Full-Stack Developer",
    template: "%s | Gilank Portfolio",
  },
  description:
    "A passionate full-stack developer creating elegant solutions that blend design, technology, and innovation. Specializing in React, Next.js, and modern web technologies.",
  keywords: [
    "web developer",
    "full-stack developer",
    "React",
    "Next.js",
    "TypeScript",
    "portfolio",
    "freelance developer",
    "web development",
  ],
  authors: [{ name: "Gilank", url: process.env.NEXT_PUBLIC_SITE_URL || "https://gilank-portfolio.vercel.app" }],
  creator: "Gilank",
  publisher: "Gilank",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://gilank-portfolio.vercel.app",
    siteName: "Gilank Portfolio",
    title: "Gilank | Full-Stack Developer",
    description:
      "A passionate full-stack developer creating elegant solutions that blend design, technology, and innovation.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Gilank Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gilank | Full-Stack Developer",
    description:
      "A passionate full-stack developer creating elegant solutions that blend design, technology, and innovation.",
    images: ["/og-image.svg"],
    creator: "@TuckerNash68095",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${parkinsans.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
          forcedTheme="dark"
        >
          {children}
          <Toaster position="bottom-center" richColors />
          <PersonStructuredData />
          <WebSiteStructuredData />
        </ThemeProvider>
      </body>
    </html>
  );
}
