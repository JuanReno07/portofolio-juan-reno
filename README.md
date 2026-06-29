# Website Portofolio - Yosafat Juan Reno

Website portofolio profesional berkinerja tinggi, responsif, dan ramah SEO untuk **Yosafat Juan Reno** (IT Infrastructure & Senior Support Officer). Website ini dirancang khusus untuk memposisikan Yosafat sebagai tenaga profesional infrastruktur IT yang kompeten, aman, dan berpengalaman.

---

## 🛠️ Teknologi yang Digunakan

* **Core Framework**: [Next.js](https://nextjs.org/) (App Router, React 19)
* **Language**: [TypeScript](https://www.typescript.org/) (Strict typing, bebas error linter)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Menggunakan variabel CSS kustom berbasis palet warna foto asli)
* **Animations**: [Framer Motion](https://www.framer.com/motion/) (Animasi scroll viewport mikro yang halus)
* **Icons**: [Lucide React](https://lucide.dev/) (Untuk ikon standar) & SVG kustom (untuk LinkedIn)
* **Background Effect**: Canvas interaktif berbasis node jaringan berkecepatan tinggi yang merespons kursor mouse secara efisien.

---

## 🚀 Panduan Menjalankan Proyek secara Lokal

### 1. Instalasi Dependencies
Instal semua paket dependensi Node.js menggunakan npm:
```bash
npm install
```

### 2. Jalankan Server Pengembangan
Jalankan proyek dalam mode pengembangan:
```bash
npm run dev
```
Buka browser Anda dan kunjungi [http://localhost:3000](http://localhost:3000) untuk melihat website.

### 3. Build untuk Produksi
Lakukan verifikasi tipe data TypeScript dan optimasi statis proyek:
```bash
npm run build
```

### 4. Jalankan Server Produksi Lokal
Jalankan hasil build produksi lokal Anda:
```bash
npm run start
```

---

## 📂 Struktur Folder Proyek

```
├── public/
│   ├── documents/             # Lokasi berkas CV/Resume (Yosafat-Juan-Reno-CV.pdf)
│   └── images/                # Seluruh gambar portofolio teroptimasi (Portrait, Racks, Team)
├── src/
│   ├── app/
│   │   ├── globals.css        # Konfigurasi Tailwind, scrollbar, dan font sistem
│   │   ├── layout.tsx         # Struktur HTML, metadata SEO, dan data terstruktur Person JSON-LD
│   │   ├── page.tsx           # Halaman utama Next.js (Server Component)
│   │   ├── robots.ts          # Aturan robot indeks mesin pencari
│   │   └── sitemap.ts         # Peta situs (sitemap) dinamis berbasis domain produksi
│   ├── components/
│   │   ├── layout/            # Tata letak komponen global (Navigation & Footer)
│   │   ├── ui/                # Komponen kecil reusable (DownloadCVButton, MetricCard, Reveal, Icons)
│   │   └── effects/           # Animasi background node canvas interaktif
│   ├── sections/              # Bagian-bagian halaman (Hero, About, Experience, Expertise, Work, Gallery, Contact)
│   ├── data/
│   │   └── portfolio.ts       # Database teks dan data utama website
│   └── lib/
│       └── types/
│           └── portfolio.ts   # Definisi skema TypeScript
```

---

## ✍️ Panduan Pembaruan Konten & Teks

Seluruh data teks, deskripsi pekerjaan, pencapaian, jumlah aset, dan kontak dikumpulkan dalam satu berkas terpusat:
👉 **[src/data/portfolio.ts](file:///d:/001.%20Yosafat/Project%20Porto/JuanReno/src/data/portfolio.ts)**

Untuk mengubah teks atau statistik:
1. Buka `src/data/portfolio.ts`.
2. Ubah data di dalam variabel ekspor seperti `personalInfo`, `metrics`, `experience`, `expertise`, `caseStudies`, atau `education`.
3. Simpan berkas tersebut. Halaman lokal Anda akan otomatis diperbarui (*hot-reload*).

---

## 📷 Panduan Mengganti Gambar

Gambar yang aktif digunakan di dalam website diletakkan di dalam folder `public/images/`.
Untuk mengganti foto dengan foto baru:
1. Pindahkan berkas foto baru Anda ke:
   👉 **`public/images/`**
2. Gunakan nama berkas yang sama untuk menimpa foto lama:
   * `yosafat-juan-reno-portrait.jpg` (Foto Hero utama)
   * `infrastructure-work-yosafat.jpg` (Foto di bagian About)
   * `yosafat-juan-reno-formal.jpg` (Foto formal di bagian Education)
   * `network-rack-mikrotik-fortigate.jpg` (Foto detail switch/firewall rack di Gallery)
   * `server-rack-nutanix-hp.jpg` (Foto server rack di Gallery)
   * `it-team-coordination.jpg` (Foto tim IT di Gallery)

---

## 📄 Panduan Pengaturan berkas CV / Resume

Tombol unduhan CV menggunakan sistem deteksi otomatis berbasis server:
1. Berkas CV asli Anda diletakkan di:
   👉 **`public/documents/Yosafat-Juan-Reno-CV.pdf`**
2. **Perilaku Tombol**:
   * **Jika CV Ada**: Tombol **Download CV** akan muncul secara otomatis di Header (Navbar) dan bagian Hero, siap diunduh oleh pengunjung.
   * **Jika CV Tidak Ada**: Tombol **Download CV** akan disembunyikan secara otomatis dari tampilan publik tanpa menampilkan error atau peringatan teknis apa pun ke pengunjung.

---

## 🔗 Tautan LinkedIn & Media Sosial

Portofolio ini mendukung penyembunyian tombol media sosial secara otomatis jika data belum tersedia:
1. Jika tautan LinkedIn Anda belum siap, kosongkan nilai `linkedin` di berkas `src/data/portfolio.ts`:
   ```typescript
   linkedin: "",
   ```
2. Tombol LinkedIn di bagian Hero, Footer, dan Contact akan otomatis disembunyikan dari pengunjung. Jika sudah siap, cukup isi nilainya (misal: `https://www.linkedin.com/in/username-anda`) dan tombol akan muncul secara otomatis.

---

## 🌐 Konfigurasi Domain Produksi (Variabel Lingkungan)

Proyek ini menggunakan variabel lingkungan kustom `NEXT_PUBLIC_SITE_URL` untuk mengatur URL kanonikal, peta situs (sitemap), data terstruktur SEO, dan Open Graph secara dinamis.

1. Di komputer lokal Anda, buat file `.env.local` (diabaikan oleh git) jika Anda ingin menguji secara manual, atau cukup buat di Vercel:
   ```env
   NEXT_PUBLIC_SITE_URL=https://yosafat-juan-reno-portfolio.vercel.app
   ```
2. Jika tidak diatur, proyek akan otomatis menggunakan fallback default `http://localhost:3000` untuk mode pengembangan lokal.
3. Contoh konfigurasi variabel lingkungan dapat dilihat pada berkas **[.env.example](file:///d:/001.%20Yosafat/Project%20Porto/JuanReno/.env.example)**.
