# Progres Kerja Proyek: Portofolio Gilank V2

Berkas ini memantau backlog tugas, pencapaian, dan target jangka pendek proyek secara real-time.

## Status Saat Ini
* **Fase:** Restrukturisasi Awal (Selesai) → Setup Front-end (Sedang Berjalan)

## Daftar Backlog

### Fase 1: Restrukturisasi & Pembersihan Awal
* [x] Memindahkan file Next.js lama ke `/old-nextjs`
* [x] Membuat folder `front-end`, `back-end`, dan `.antigravity`
* [x] Membuat file konfigurasi utama `.antigravity/ANTIGRAVITY.md`
* [x] Membuat file `.antigravity/AGENTS.md`
* [x] Membuat file memori `.antigravity/memory/project-context.md`
* [x] Membuat file pelacak progres `.antigravity/memory/progress.md`

### Fase 2: Setup Front-end (React + Vite + TypeScript)
* [ ] Inisialisasi proyek React + Vite di folder `/front-end`
* [ ] Setup Tailwind CSS v4
* [ ] Mengunduh dependensi (`framer-motion`, `gsap`, `lucide-react`, dll.)
* [ ] Setup struktur dasar folder dan font di `/front-end/src`

### Fase 3: Pembuatan Komponen Portofolio Premium
* [ ] Floating Glass Pill Navigation Bar (dengan i18n switcher)
* [ ] Center Hero Wide H1 (judul max 2-3 baris)
* [ ] Bento Grid 2.0 & Liquid Glass About Section
* [ ] Minimalist Text List Projects Section (dengan hover preview & modal iframe)
* [ ] Experience Pinned Timeline (GSAP ScrollTrigger)
* [ ] Certifications Bento Grid
* [ ] Pembaca Blog Markdown Lokal
* [ ] Formulir Kontak terhubung ke Backend API

### Fase 4: Setup & Pembuatan Back-end (Cloudflare Workers)
* [ ] Inisialisasi Cloudflare Workers di folder `/back-end`
* [ ] Pembuatan fungsi router POST `/api/contact`
* [ ] Integrasi Resend Email API untuk pengiriman pesan formulir kontak

### Fase 5: Verifikasi Akhir & Laporan
* [ ] Pengetesan lokal front-end dan back-end
* [ ] Audit responsivitas mobile dan performa render
* [ ] Pembuatan berkas `walkthrough.md`
