# Agent Roles and Responsibilities: Portofolio Gilank V2

Berkas ini mendefinisikan pembagian peran agen kecerdasan buatan dalam pengembangan proyek ini.

## Agen Utama (Antigravity)
* **Peran:** Mengatur alur kerja keseluruhan, berinteraksi dengan pengguna, menyusun rencana implementasi, dan mendelegasikan tugas ke sub-agent jika diperlukan.
* **Fokus:** Menjaga kesesuaian arsitektur teknologi, kualitas estetika visual premium, dan kepatuhan terhadap aturan koding yang disepakati.

## Sub-Agent Terdedikasi (Rencana Delegasi)

1. **Research Agent (`research`)**
   * **Peran:** Melakukan pencarian pustaka eksternal, memeriksa dokumentasi API (seperti Firebase Firestore, Supabase Storage, atau Resend), dan melakukan audit keamanan pada modul.
   * **Pemicu:** Ketika membutuhkan riset mendalam tentang integrasi API baru tanpa membebani context window agen utama.

2. **Frontend Developer Sub-Agent**
   * **Peran:** Menulis komponen React, merapikan styling Tailwind CSS v4, mengonfigurasi transisi Framer Motion, dan menyetel animasi GSAP.
   * **Fokus:** Detail estetika pixel-perfect, responsivitas mobile, dan optimalisasi rendering client-side.

3. **Backend Developer Sub-Agent**
   * **Peran:** Mengembangkan kode Cloudflare Workers, mengatur routing API, menulis integrasi Resend, dan mengamankan kunci API.
   * **Fokus:** Performa serverless tanpa cold-start, validasi input yang aman, dan penanganan error yang andal.
