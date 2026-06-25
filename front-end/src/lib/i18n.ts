export type Language = "id" | "en";

export const translations = {
  id: {
    nav: {
      about: "Tentang",
      services: "Layanan",
      projects: "Proyek",
      contact: "Kontak",
    },
    hero: {
      title: "Membangun Keunggulan Digital",
      subtitle: "Halo, Saya Gilank",
      description: "Seorang pengembang penuh semangat yang menciptakan solusi elegan yang memadukan desain, teknologi, dan inovasi.",
      ctaPrimary: "Lihat Proyek",
      ctaSecondary: "Hubungi Saya",
    },
    about: {
      subtitle: "Tentang Saya",
      title: "Membangun produk yang bermakna",
      p1: "Full Stack Developer secara profesi, Vibe Coder secara jiwa. Saya membangun produk yang tidak hanya berfungsi—tetapi juga memberikan dampak mendalam. Lebih dari 2 tahun merancang ruang digital tempat ketepatan teknis bertemu dengan estetika berenergi tinggi. Saya peduli dengan teknologi, tetapi saya lebih peduli dengan alur (flow). Jika rasanya belum pas, maka belum selesai.",
      p2: "Pendekatan saya berakar pada keyakinan bahwa desain yang hebat harus terasa tidak kasat mata – terasa alami, intuitif, dan tanpa usaha. Setiap proyek adalah kesempatan untuk melampaui batas dan menciptakan sesuatu yang luar biasa.",
      techHeader: "Teknologi Utama",
      experienceCard: "Pengalaman Kerja",
      experienceYears: "2+ Tahun",
      projectsCard: "Proyek Selesai",
      projectsCount: "20+ Proyek",
      locationCard: "Lokasi Saya",
      locationName: "Tangerang Selatan",
    },
    services: {
      subtitle: "Layanan & Keahlian",
      title: "Layanan yang saya tawarkan",
      list: [
        {
          name: "Pengembangan Web",
          description: "Situs web kustom yang dibangun dengan teknologi modern seperti React, Next.js, dan TypeScript."
        },
        {
          name: "Desain Mobile-First",
          description: "Aplikasi yang berfungsi sempurna di semua perangkat dengan pengalaman yang dioptimalkan untuk seluler."
        },
        {
          name: "Database & Backend",
          description: "Solusi backend yang kuat dengan Supabase, PostgreSQL, dan Node.js."
        },
        {
          name: "Keamanan Siber",
          description: "Penilaian keamanan, analisis kerentanan, dan deteksi ancaman."
        },
        {
          name: "Performa",
          description: "Optimasi kecepatan untuk waktu pemuatan yang lebih cepat dan peringkat pencarian yang lebih baik."
        },
        {
          name: "Dukungan",
          description: "Pemeliharaan dan dukungan berkala dengan waktu respons yang cepat."
        }
      ]
    },
    projects: {
      subtitle: "Karya Terpilih",
      title: "Proyek yang saya buat",
      viewDemo: "Kunjungi Live Demo",
      closeDemo: "Tutup",
      list: [
        {
          id: "1",
          title: "Groupify",
          category: "Web Application / Collaboration",
          description: "Platform web kolaboratif yang berfungsi untuk mengacak, membuat, dan mengorganisasi kelompok secara otomatis berdasarkan daftar nama yang dimasukkan, dilengkapi dengan tampilan yang bersih dan fungsional.",
          image: "/images/groupify.png",
          demoUrl: "https://groupify-six.vercel.app/",
          tags: ["React", "Vite", "Firebase", "Tailwind CSS", "JavaScript"]
        },
        {
          id: "2",
          title: "Markdown Note",
          category: "Productivity Tool",
          description: "Aplikasi pencatatan berbasis web dengan antarmuka minimalis yang mendukung format Markdown penuh, pratinjau langsung secara real-time, dan penyimpanan data lokal yang persisten.",
          image: "/images/markdown-note.png",
          demoUrl: "https://minimalist-markdown-note.vercel.app/",
          tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Markdown"]
        },
        {
          id: "3",
          title: "Confess Web",
          category: "Web Application",
          description: "Wadah ekspresi anonim yang aman, memfasilitasi pengguna untuk berbagi pemikiran dan keluh kesah secara privat dengan perlindungan enkripsi end-to-end yang kuat.",
          image: "/images/confesweb.png",
          demoUrl: "https://confdev.vercel.app/",
          tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase"]
        },
        {
          id: "4",
          title: "Bearly AI",
          category: "AI Productivity",
          description: "Asisten produktivitas pintar berbasis AI yang dirancang untuk mempercepat pembuatan konten (copywriting), merangkum hasil riset, serta melakukan analisis teks secara mendalam.",
          image: "/images/bearly-ai.png",
          demoUrl: "https://bearly-ai.vercel.app/",
          tags: ["React", "Vite", "OpenAI API", "Framer Motion"]
        },
        {
          id: "5",
          title: "Pusaka Busana",
          category: "Cultural Digital Gallery",
          description: "Platform galeri digital interaktif yang didedikasikan untuk melestarikan, mendokumentasikan, serta memamerkan keanekaragaman dan keindahan pakaian adat tradisional dari berbagai daerah di Indonesia.",
          image: "/images/pusaka-busana.png",
          demoUrl: "https://pusaka-busana.vercel.app/",
          tags: ["React", "Tailwind CSS", "Supabase", "i18n"]
        },
        {
          id: "6",
          title: "Repeat Lank",
          category: "Habit Tracker",
          description: "Aplikasi pelacak kebiasaan harian yang dirancang untuk membangun rutinitas positif melalui visualisasi tren mingguan yang analitis dan sistem pelacakan streak yang interaktif.",
          image: "/images/repeat-lank.png",
          demoUrl: "https://repeat-lank.web.app/",
          tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"]
        },
        {
          id: "7",
          title: "Safthoo",
          category: "E-Commerce / Marketplace",
          description: "Platform e-commerce dan marketplace sepatu modern yang menghadirkan pengalaman berbelanja interaktif, katalog produk yang dinamis, serta transaksi yang mulus layaknya retail brand global terkemuka.",
          image: "/images/safthoo.png",
          demoUrl: "https://safthoo.web.app/",
          tags: ["React", "Vite", "Tailwind CSS"]
        }
      ]
    },
    contact: {
      subtitle: "Mari Berkolaborasi",
      title: "Hubungi Saya",
      description: "Punya proyek menarik atau ingin berdiskusi tentang peluang kerja sama? Kirimkan pesan melalui formulir di bawah ini, saya akan merespons secepat mungkin.",
      nameLabel: "Nama Lengkap",
      emailLabel: "Alamat Email",
      messageLabel: "Pesan Anda",
      sendButton: "Kirim Pesan",
      sendingButton: "Mengirim...",
      success: "Pesan Anda berhasil terkirim. Terima kasih!",
      error: "Terjadi kesalahan saat mengirim pesan. Silakan coba lagi."
    }
  },
  en: {
    nav: {
      about: "About",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      title: "Crafting Digital Excellence",
      subtitle: "Hi There, I'm Gilank",
      description: "A passionate developer creating elegant solutions that blend design, technology, and innovation.",
      ctaPrimary: "View Projects",
      ctaSecondary: "Get in Touch",
    },
    about: {
      subtitle: "About Me",
      title: "Building products that matter",
      p1: "Full Stack Developer by trade, Vibe Coder by spirit. I build products that don't just work—they hit. Over 2 years of crafting digital spaces where technical precision meets high energy aesthetics. I care about the stack, but I care more about the flow. If it doesn't feel right, it isn't finished.",
      p2: "My approach is rooted in the belief that great design should be invisible – it should feel natural, intuitive, and effortless. Every project is an opportunity to push boundaries and create something extraordinary.",
      techHeader: "Core Technologies",
      experienceCard: "Work Experience",
      experienceYears: "2+ Years",
      projectsCard: "Projects Completed",
      projectsCount: "20+ Projects",
      locationCard: "My Location",
      locationName: "South Tangerang",
    },
    services: {
      subtitle: "Services & Expertise",
      title: "Services I offer",
      list: [
        {
          name: "Web Development",
          description: "Custom websites built with modern technologies like React, Next.js, and TypeScript."
        },
        {
          name: "Mobile-First Design",
          description: "Applications that work perfectly on all devices with mobile-optimized experiences."
        },
        {
          name: "Database & Backend",
          description: "Robust backend solutions with Supabase, PostgreSQL, and Node.js."
        },
        {
          name: "Cyber Security",
          description: "Security assessments, vulnerability analysis, and threat detection."
        },
        {
          name: "Performance",
          description: "Speed optimization for faster load times and better search rankings."
        },
        {
          name: "Support",
          description: "Ongoing maintenance and support with quick response times."
        }
      ]
    },
    projects: {
      subtitle: "Selected Works",
      title: "Projects I have built",
      viewDemo: "Visit Live Demo",
      closeDemo: "Close",
      list: [
        {
          id: "1",
          title: "Groupify",
          category: "Web Application / Collaboration",
          description: "A collaborative web application designed to automatically generate, randomize, and organize groups based on customized name lists, featuring a clean and highly functional interface.",
          image: "/images/groupify.png",
          demoUrl: "https://groupify-six.vercel.app/",
          tags: ["React", "Vite", "Firebase", "Tailwind CSS", "JavaScript"]
        },
        {
          id: "2",
          title: "Markdown Note",
          category: "Productivity Tool",
          description: "A streamlined, minimalist web application for note-taking, featuring comprehensive Markdown support, real-time live preview, and persistent local storage capabilities.",
          image: "/images/markdown-note.png",
          demoUrl: "https://minimalist-markdown-note.vercel.app/",
          tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Markdown"]
        },
        {
          id: "3",
          title: "Confess Web",
          category: "Web Application",
          description: "A secure, privacy-focused anonymous confession platform that enables users to share thoughts and feelings safely, backed by robust end-to-end encryption.",
          image: "/images/confesweb.png",
          demoUrl: "https://confdev.vercel.app/",
          tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase"]
        },
        {
          id: "4",
          title: "Bearly AI",
          category: "AI Productivity",
          description: "An intelligent AI-driven productivity assistant engineered to streamline content generation, synthesize research findings, and perform advanced textual analysis.",
          image: "/images/bearly-ai.png",
          demoUrl: "https://bearly-ai.vercel.app/",
          tags: ["React", "Vite", "OpenAI API", "Framer Motion"]
        },
        {
          id: "5",
          title: "Pusaka Busana",
          category: "Cultural Digital Gallery",
          description: "An immersive digital gallery platform dedicated to preserving, documenting, and showcasing the rich diversity and beauty of traditional Indonesian heritage attire.",
          image: "/images/pusaka-busana.png",
          demoUrl: "https://pusaka-busana.vercel.app/",
          tags: ["React", "Tailwind CSS", "Supabase", "i18n"]
        },
        {
          id: "6",
          title: "Repeat Lank",
          category: "Habit Tracker",
          description: "A personal habit-tracking application designed to cultivate positive routines through analytical weekly visualizations and a motivational streak system.",
          image: "/images/repeat-lank.png",
          demoUrl: "https://repeat-lank.web.app/",
          tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"]
        },
        {
          id: "7",
          title: "Safthoo",
          category: "E-Commerce / Marketplace",
          description: "A modern shoe e-commerce and marketplace platform engineered to deliver an interactive shopping experience, dynamic product catalogs, and seamless transactions inspired by leading global footwear brands.",
          image: "/images/safthoo.png",
          demoUrl: "https://safthoo.web.app/",
          tags: ["React", "Vite", "Tailwind CSS"]
        }
      ]
    },
    contact: {
      subtitle: "Let's Collaborate",
      title: "Get in Touch",
      description: "Have an interesting project or want to discuss a partnership? Send a message through the form below, and I'll get back to you as soon as possible.",
      nameLabel: "Full Name",
      emailLabel: "Email Address",
      messageLabel: "Your Message",
      sendButton: "Send Message",
      sendingButton: "Sending...",
      success: "Your message was successfully sent. Thank you!",
      error: "An error occurred while sending the message. Please try again."
    }
  }
};
