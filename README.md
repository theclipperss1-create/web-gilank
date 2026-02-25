# Web Gilank - Portfolio

A modern, professional portfolio website built with Next.js 15, featuring a beautiful Apple-inspired design, project showcase, contact form, and SEO optimization.

![Portfolio Preview](/public/og-image.png)

## 🚀 Features

- **Modern Design** - Apple-inspired aesthetics with smooth animations
- **Project Showcase** - Bento grid layout displaying your work
- **Project Detail Pages** - Individual case study pages for each project
- **Contact Form** - Integrated contact form with toast notifications
- **SEO Optimized** - Complete metadata, Open Graph, Twitter cards, and structured data
- **Responsive** - Works perfectly on all devices
- **Dark Mode** - Beautiful dark theme by default
- **Performance** - Optimized images, lazy loading, and fast load times
- **Accessibility** - WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** Tailwind CSS animations + custom transitions
- **Icons:** [Lucide React](https://lucide.dev/)
- **Forms:** Custom with [Sonner](https://sonner.emilkowal.ski/) toasts

## 📋 Prerequisites

Before you begin, ensure you have the following:
- Node.js 18+ installed
- A code editor (VS Code recommended)
- Git for version control

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd portofolio
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set up environment variables

Copy the `.env.example` file to `.env.local`:

```bash
cp .env.example .env.local
```

Update the values in `.env.local` with your actual credentials:

```env
# Domain Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Optional: Email service for contact form
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-your_google_analytics_id
```

### 4. Add your content

#### Update Profile Image
Replace `/public/images/profile.svg` with your actual photo:
- Recommended size: 400x400px or larger
- Format: JPG, PNG, or WebP
- Update the image reference in `src/app/page.tsx`

#### Update Projects
Edit the `defaultProjects` array in `src/components/bento-grid.tsx`:
```typescript
{
  id: "1",
  title: "Your Project",
  description: "Project description...",
  tags: ["React", "TypeScript"],
  image: "/images/your-project.png",
  link: "https://your-project.com",
}
```

#### Update Project Details
Edit project case studies in `src/app/projects/[slug]/page.tsx`:
- Update the `projects` object with your actual project data
- Add features, challenges, and results for each project

#### Update Personal Information
- **Name & Title:** Update in `src/app/layout.tsx` metadata
- **Social Links:** Update in `src/components/footer.tsx`
- **Skills:** Update in `src/app/page.tsx` About section

### 5. Start the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 📁 Project Structure

```
portofolio/
├── public/
│   ├── images/           # Project images and profile photo
│   ├── favicon.ico       # Site favicon
│   └── og-image.png      # Social sharing image
├── src/
│   ├── app/
│   │   ├── projects/
│   │   │   └── [slug]/
│   │   │       └── page.tsx    # Project detail page
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout with SEO
│   │   ├── page.tsx            # Home page
│   │   ├── sitemap.ts          # Dynamic sitemap
│   │   └── manifest.ts         # PWA manifest
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── bento-grid.tsx      # Project grid
│   │   ├── chat.tsx            # AI chat component
│   │   ├── contact-form.tsx    # Contact form
│   │   ├── footer.tsx          # Footer
│   │   ├── hero.tsx            # Hero section
│   │   ├── navigation.tsx      # Navigation bar
│   │   ├── structured-data.tsx # JSON-LD structured data
│   │   └── ...
│   └── lib/
│       ├── utils.ts            # Utility functions
│       └── ...
├── .env.example                # Environment variables template
├── next.config.ts              # Next.js configuration
└── package.json
```

## 🎨 Customization

### Colors
The color scheme is defined in `src/app/globals.css`. Modify the CSS variables to change the theme:

```css
:root {
  --background: #0a0a0a;
  --foreground: #ededed;
  /* ... */
}
```

### Fonts
Fonts are configured in `src/app/layout.tsx`. Change the Google Fonts imports to use different fonts.

### Animations
Animation classes use Tailwind's `animate-in` utilities. Modify in component files or add custom animations in `globals.css`.

## 📤 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Set environment variables
5. Deploy!

### Deploy to Other Platforms

```bash
npm run build
npm run start
```

Or export as static site:
```bash
npm run build
# Output in .next/static
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 📝 SEO Checklist

Before launching, make sure to:

- [ ] Update `metadataBase` in `layout.tsx` with your domain
- [ ] Create `/public/og-image.png` (1200x630px)
- [ ] Update all social media links in `footer.tsx`
- [ ] Generate and add favicon files
- [ ] Submit sitemap to Google Search Console
- [ ] Add Google Analytics ID (optional)
- [ ] Test with [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspired by Apple's aesthetic
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)

## 📬 Contact

Have questions? Reach out:
- **Email:** lankdevv@gmail.com
- **LinkedIn:** [linkedin.com/in/m-gilank](https://www.linkedin.com/in/m-gilank/)
- **GitHub:** [github.com/theclipperss1-create](https://github.com/theclipperss1-create)
- **Twitter:** [@TuckerNash68095](https://x.com/TuckerNash68095)

---

Built with ❤️ by Gilank
