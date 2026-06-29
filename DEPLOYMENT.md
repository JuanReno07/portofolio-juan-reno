# Panduan Deployment - Portofolio Yosafat Juan Reno

Dokumen ini berisi panduan langkah demi langkah untuk mengunggah proyek portofolio ini ke GitHub dan melakukan deployment secara gratis menggunakan Vercel.

---

## 💻 Perintah Lokal (Local Commands)

Sebelum melakukan deployment, pastikan proyek berjalan dengan baik secara lokal menggunakan perintah berikut:

1. **Menginstal Dependencies**:
   ```bash
   npm install
   ```
2. **Menjalankan Server Pengembangan Lokal**:
   ```bash
   npm run dev
   ```
   *Buka [http://localhost:3000](http://localhost:3000) (atau port yang tertera pada terminal) di browser Anda.*
3. **Memeriksa Linter & Tipe Data**:
   ```bash
   npm run lint
   ```
   *Memastikan tidak ada error atau warning TypeScript dan ESLint.*
4. **Membuat Build Produksi**:
   ```bash
   npm run build
   ```
   *Mengompilasi proyek menjadi file statis siap produksi.*
5. **Menjalankan Build Produksi Lokal**:
   ```bash
   npm run start
   ```

---

## 🚀 Langkah-langkah Deployment ke Vercel (Gratis)

### Langkah 1: Membuat Repositori GitHub
1. Masuk ke akun [GitHub](https://github.com/) Anda.
2. Buat repositori baru dengan mengklik **New** (atau kunjungi `https://github.com/new`).
3. Beri nama repositori (contoh: `yosafat-juan-reno-portfolio`).
4. Atur visibilitas ke **Public** atau **Private** sesuai preferensi Anda.
5. Jangan centang opsi "Add a README.md", "Add .gitignore", atau lisensi (karena proyek ini sudah memilikinya).
6. Klik **Create repository**.

### Langkah 2: Mengunggah Proyek ke GitHub
Gunakan terminal (Git Bash, Command Prompt, atau PowerShell) di dalam folder proyek Anda (`D:\001. Yosafat\Project Porto\JuanReno`), lalu jalankan perintah berikut:

```bash
# Inisialisasi Git
git init

# Tambahkan semua file ke staging (kecuali yang diabaikan oleh .gitignore)
git add .

# Buat commit pertama
git commit -m "feat: initial commit portofolio siap produksi"

# Buat branch utama
git branch -M main

# Hubungkan ke repositori GitHub Anda (ganti URL di bawah dengan URL repositori Anda)
git remote add origin https://github.com/USERNAME-ANDA/NAMA-REPOSITORI-ANDA.git

# Unggah file ke GitHub
git push -u origin main
```

---

### Langkah 3: Import ke Vercel
1. Masuk ke akun [Vercel](https://vercel.com/) Anda (buat akun gratis jika belum punya, direkomendasikan masuk menggunakan akun GitHub).
2. Di dashboard Vercel, klik tombol **Add New...** dan pilih **Project**.
3. Di bawah bagian **Import Git Repository**, cari repositori GitHub yang baru saja Anda buat (contoh: `yosafat-juan-reno-portfolio`) dan klik **Import**.
4. Di bagian **Configure Project**:
   * **Framework Preset**: Pastikan terpilih **Next.js**.
   * **Root Directory**: Biarkan default (`./`).
   * **Build and Development Settings**: Biarkan default.
   * **Environment Variables**: Tambahkan variabel lingkungan berikut:
     * **Name**: `NEXT_PUBLIC_SITE_URL`
     * **Value**: Ganti dengan URL sementara Vercel Anda (misalnya `https://yosafat-juan-reno-portfolio.vercel.app`) atau biarkan sementara jika belum tahu. Anda dapat mengeditnya nanti.
5. Klik tombol **Deploy**.
6. Tunggu sekitar 1-2 menit hingga proses build selesai. Selamat! Website Anda sekarang sudah online.

---

### Langkah 4: Memperbarui Environment Variable di Vercel
Setelah deployment selesai, Vercel akan memberikan domain gratis (contoh: `https://yosafat-juan-reno-XXXX.vercel.app`). Agar metadata, sitemap, dan SEO website merujuk ke domain yang benar:

1. Di dashboard proyek Vercel Anda, masuk ke menu **Settings** > **Environment Variables**.
2. Cari variabel `NEXT_PUBLIC_SITE_URL` yang Anda buat sebelumnya, klik edit (tiga titik di kanan), dan perbarui nilainya dengan URL resmi yang diberikan Vercel (contoh: `https://yosafat-juan-reno-portfolio.vercel.app`).
3. Klik **Save**.
4. Masuk ke tab **Deployments** di Vercel, klik tombol opsi (tiga titik) di deployment terbaru Anda, dan pilih **Redeploy** untuk memperbarui build dengan URL yang baru.

---

### Langkah 5: Memverifikasi Unduhan CV PDF
1. Setelah website online, buka URL website Anda.
2. Karena file CV telah diletakkan di `public/documents/Yosafat-Juan-Reno-CV.pdf` di dalam proyek, tombol **Download CV** akan muncul secara otomatis.
3. Klik tombol **Download CV** dan pastikan browser langsung mengunduh file `Yosafat-Juan-Reno-CV.pdf` dengan benar.

---

### Langkah 6: Menghubungkan Domain Kustom (Opsional)
Jika Anda memiliki domain kustom pribadi (contoh: `yosafatjuanreno.com`):
1. Di dashboard proyek Vercel, masuk ke **Settings** > **Domains**.
2. Masukkan domain Anda dan klik **Add**.
3. Ikuti panduan DNS (menambahkan CNAME atau A Record) yang disediakan oleh Vercel di penyedia domain Anda (seperti Niagahoster, Domainesia, GoDaddy, dsb.).
4. Perbarui variabel `NEXT_PUBLIC_SITE_URL` di Vercel dengan domain kustom baru Anda dan lakukan **Redeploy**.
