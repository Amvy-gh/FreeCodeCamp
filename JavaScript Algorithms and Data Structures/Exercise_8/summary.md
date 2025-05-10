# Date Formatter Project

## Deskripsi
Proyek ini adalah aplikasi sederhana yang memungkinkan pengguna untuk melihat tanggal saat ini dalam berbagai format. Pengguna dapat memilih format tanggal yang diinginkan dari dropdown, dan tanggal akan diperbarui secara dinamis sesuai pilihan mereka.

## Struktur File
- **index.html**: File HTML utama yang berisi struktur dasar aplikasi.
- **styles.css**: File CSS untuk styling aplikasi.
- **script.js**: File JavaScript untuk logika aplikasi.

## Penjelasan Kode

### index.html
- **`<link rel="stylesheet" href="./styles.css" />`**: Menghubungkan file CSS untuk styling.
- **`<div class="title-container">`**: Container untuk judul aplikasi dan ikon tanggal.
- **`<h1 class="title">Today's Date</h1>`**: Menampilkan judul "Today's Date".
- **`<svg class="date-svg">`**: Ikon SVG untuk dekorasi.
- **`<div class="dropdown-container">`**: Container untuk dropdown pilihan format tanggal.
- **`<select name="date-options" id="date-options">`**: Dropdown untuk memilih format tanggal.
- **`<p id="current-date"></p>`**: Paragraf untuk menampilkan tanggal saat ini.
- **`<script src="./script.js"></script>`**: Menghubungkan file JavaScript untuk logika aplikasi.

### styles.css
- **`body`**: Mengatur warna latar belakang dan teks.
- **`.title-container`**: Styling untuk container judul.
- **`.dropdown-container`**: Styling untuk dropdown.
- **`select`**: Styling untuk elemen dropdown.
- **`#current-date`**: Styling untuk paragraf tanggal.
- **`@media (max-width: 375px)`**: Media query untuk perangkat kecil.

### script.js
- **`const currentDateParagraph`**: Mengambil elemen paragraf untuk menampilkan tanggal.
- **`const dateOptionsSelectElement`**: Mengambil elemen dropdown untuk pilihan format tanggal.
- **`const date = new Date();`**: Membuat objek tanggal baru.
- **`const day, month, year, hours, minutes`**: Mendapatkan bagian-bagian dari tanggal saat ini.
- **`const formattedDate`**: Format default tanggal dalam format "dd-mm-yyyy".
- **`currentDateParagraph.textContent = formattedDate;`**: Menampilkan tanggal default.
- **`dateOptionsSelectElement.addEventListener("change", () => { ... })`**: Menambahkan event listener untuk mengubah format tanggal berdasarkan pilihan pengguna.
- **`switch (dateOptionsSelectElement.value)`**: Logika untuk mengubah format tanggal.
  - **`case "yyyy-mm-dd"`**: Format "yyyy-mm-dd".
  - **`case "mm-dd-yyyy-h-mm"`**: Format "mm-dd-yyyy h:mm".
  - **`default`**: Format default "dd-mm-yyyy".