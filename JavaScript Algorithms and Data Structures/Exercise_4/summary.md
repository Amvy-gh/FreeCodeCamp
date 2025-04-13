# 🎨 Random Background Color Changer

A mini web project using **HTML, CSS, and JavaScript** that lets you change the background color of the page to a random dark-themed color with a single click. Perfect for beginners learning DOM and event handling.

---

## ✅ Fitur

- Ganti warna background secara acak
- Tampilkan HEX code warna saat ini
- Desain dark theme yang clean
- Hover effect pada tombol

---

## 🧠 Cara Kerja Kode

### HTML (`index.html`)
- Menyusun struktur halaman:
  - `<h1>` untuk judul
  - `<section>` untuk menampilkan HEX code
  - `<button>` untuk trigger event
  - `<script>` untuk load JavaScript

### JavaScript (`script.js`)
- `darkColorsArr`: array berisi warna-warna gelap
- `getRandomIndex()`: ambil index acak
- `changeBackgroundColor()`: ambil warna acak, ganti background dan teks HEX
- `btn.onclick = changeBackgroundColor`: trigger fungsi saat tombol diklik (tanpa `()` karena kita pasang *referensi fungsi*)

### CSS (`styles.css`)
- Styling dark-theme untuk body
- Styling tombol dengan gradient dan hover effect
- Responsive dan rapi

---

## 🔁 Alur Aplikasi

1. Halaman dibuka
2. User klik tombol
3. Warna background berubah
4. HEX code tampil sesuai warna
5. Ulangi dan eksplor warna random lainnya

---

## 📚 Yang Dipelajari

- DOM selection & manipulation
- Event handling dengan `.onclick`
- Cara membuat fungsi acak di JavaScript
- Pemisahan struktur (HTML), logika (JS), dan tampilan (CSS)

---

## 💡 Ide Upgrade

- Tombol copy HEX code
- Animasi transisi warna
- History warna yang pernah dipilih
- Tambahkan efek suara biar makin seru

---

## ✍️ Dibuat Oleh

**Anjes Money Maker Money**  
Let's code and make the web vibrant 🎨🔥
