# Antigravity Project Configuration: Portofolio Gilank V2

Selamat datang di konfigurasi utama agen Antigravity untuk portofolio Gilank V2. Berkas ini mendefinisikan arsitektur teknis dan status integrasi proyek.

## Arsitektur Proyek

* **Front-end:** React + Vite + TypeScript + Tailwind CSS v4 + Framer Motion + GSAP
  * Repositori: `/front-end`
  * Desain: Forced Dark Mode, Parkinsans & Geist Sans fonts, Bento Grid 2.0, Liquid Glass, Minimalist Text List dengan hover preview, Pinned Scroll Experience.
* **Back-end:** Cloudflare Workers (TypeScript)
  * Repositori: `/back-end`
  * Fungsi: Mengamankan integrasi Resend Email API untuk formulir kontak.
* **Database:** Firebase Firestore (NoSQL Document DB untuk penyimpanan data tambahan)
* **Storage:** Supabase Storage (Gratis, untuk menyimpan berkas CV/media)
* **Analitik:** Google Analytics

## Konfigurasi Skill Aktif

Proyek ini mendayagunakan kemampuan khusus dari pustaka keahlian Antigravity:
1. `design-taste-frontend` - Mengontrol detail estetika, spacing, layout asimetris, dan micro-interactions.
2. `gpt-taste` - Menerapkan struktur AIDA sinematik, aturan besi judul H1 maksimal 2 baris, dan peniadaan label murah.
3. `caveman` (Level: *lite*) - Mengatur komunikasi agen agar ringkas, teknis, dan padat.
4. `workspace-architect` - Mengatur keselarasan struktur repositori.

## Panduan Instalasi Lokal

### Front-end
1. Masuk ke folder `/front-end`
2. Jalankan `npm install` untuk memasang seluruh dependensi.
3. Jalankan `npm run dev` untuk menyalakan server lokal di `http://localhost:5173`.

### Back-end
1. Masuk ke folder `/back-end`
2. Jalankan `npm install`
3. Jalankan `npx wrangler dev` untuk menjalankan server Workers lokal.
