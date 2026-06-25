# Project Context & Memory: Portofolio Gilank V2

Berkas ini menyimpan konteks domain, aturan teknis, dan skema data sebagai memori jangka panjang proyek.

## Aturan Domain & Konvensi Kode

### 1. Gaya Penulisan Kode (TypeScript & React)
* Wajib menggunakan TypeScript strict mode.
* Gunakan arrow functions untuk mendefinisikan komponen React: `const MyComponent: React.FC = () => { ... }` atau fungsi biasa yang bersih.
* Pisahkan komponen-komponen UI ke dalam folder `front-end/src/components` secara modular.
* Gunakan import path alias `@/` untuk merujuk ke folder `front-end/src/`.

### 2. Aturan CSS & Tailwind CSS v4
* Wajib menggunakan utility classes Tailwind CSS v4 untuk styling.
* Hindari memadukan Flexbox dengan perhitungan kalkulasi manual (`w-[calc(33%-1rem)]`), melainkan gunakan CSS Grid (`grid grid-cols-1 md:grid-cols-3 gap-6`).
* Jangan gunakan `h-screen` untuk bagian penuh halaman (Hero), selalu gunakan `min-h-[100dvh]` demi kestabilan tata letak di peramban mobile (iOS Safari).
* Semua teks angka yang padat atau statistikal wajib menggunakan font Monospace (`font-mono`).

### 3. Animasi & Interaktivitas
* Gunakan Framer Motion untuk transisi UI skala mikro (hover, modal, slide-in) dengan spring physics: `{ type: "spring", stiffness: 100, damping: 20 }`.
* Gunakan GSAP & ScrollTrigger untuk efek gulir halaman yang dinamis (seperti *Pinned Experience*).
* Pastikan seluruh animasi berat atau loop tak terbatas diisolasi di dalam komponen klien mikro untuk mencegah render ulang berlebih pada komponen induk.

---

## Skema Data

### 1. Formulir Kontak (Kontak Masuk)
Data dikirimkan dari Front-end ke Worker API:
* **Endpoint:** POST `/api/contact`
* **Payload:**
  ```json
  {
    "name": "Nama Pengirim (string)",
    "email": "Email Pengirim (string, format valid)",
    "message": "Isi pesan (string, minimal 10 karakter)"
  }
  ```
* **Response:**
  * Sukses: `200 OK` dengan JSON `{ "success": true, "message": "Message sent successfully" }`
  * Gagal: `400 Bad Request` atau `500 Internal Server Error` dengan rincian error yang jelas.

### 2. Blog (Markdown / MDX Lokal)
Artikel disimpan sebagai berkas `.md` di folder `front-end/src/content/blog/` dengan format frontmatter:
```markdown
---
title: "Judul Artikel"
date: "YYYY-MM-DD"
summary: "Ringkasan singkat artikel"
language: "id" | "en"
tags: ["React", "CSS"]
---
Konten artikel di sini...
```
