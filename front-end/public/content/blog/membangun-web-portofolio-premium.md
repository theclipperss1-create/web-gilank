# Membangun Web Portofolio dengan Estetika Premium

Desain sebuah situs web portofolio adalah kartu nama digital Anda sebagai seorang pengembang. Antarmuka yang biasa saja akan membuat karya Anda terlihat biasa saja, sedangkan antarmuka yang premium dan interaktif akan langsung menarik perhatian pengunjung.

Dalam artikel ini, kita akan membahas tiga pilar utama untuk meningkatkan kualitas visual portofolio Anda.

## 1. Tipografi Deterministik

Hindari penggunaan font bawaan browser yang membosankan seperti Arial atau Times New Roman, dan bahkan hindari font yang terlalu sering digunakan seperti *Inter* jika Anda ingin memberikan karakter unik pada portofolio Anda.

Gunakan font modern yang kuat seperti:
* **Parkinsans** atau **Satoshi** untuk judul besar (Display)
* **Geist Sans** atau **Outfit** untuk teks deskripsi (Body)

## 2. Materialitas & Efek Kaca (Liquid Glass)

Tren desain *Glassmorphic* modern membutuhkan sentuhan realisme fisik. Alih-alih hanya menggunakan filter blur latar belakang biasa (`backdrop-blur`), tambahkan:
* Border transparan tipis 1px (`border-white/10`)
* Bayangan dalam (*inner shadow*) 1px untuk mensimulasikan pembiasan cahaya pada ujung kaca fisik.

## 3. Animasi Fisika Pegas (Spring Physics)

Hindari transisi linier yang kaku. Manfaatkan pustaka animasi seperti **Framer Motion** untuk memberikan efek berat fisik pada interaksi. Setelan spring default yang sangat premium:
* `stiffness`: 100
* `damping`: 20

Dengan memadukan ketiga prinsip ini, portofolio Anda akan terasa hidup, interaktif, dan memberikan kesan pertama yang luar biasa bagi calon klien atau perekrut kerja.
