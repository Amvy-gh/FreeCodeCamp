# 🥗 Calorie Counter

A simple web app built using **HTML, CSS, and JavaScript** that helps you track your calorie intake and exercise to stay on top of your daily nutrition goals. Perfect for beginners learning DOM manipulation, event handling, and basic calculations.

---

## ✅ Fitur

- Input anggaran kalori harian
- Tambahkan makanan dan olahraga beserta kalori masing-masing
- Hitung total kalori yang dikonsumsi dan dibakar
- Menampilkan status surplus atau defisit kalori
- Reset form untuk memulai kembali

---

## 🧠 Cara Kerja Kode

### HTML (`index.html`)
- Menyusun struktur halaman:
  - Input untuk **anggaran kalori**
  - Form untuk menambah makanan dan olahraga
  - Tombol untuk **add entry** dan **calculate calories**
  - Menampilkan hasil perhitungan surplus atau defisit kalori

### JavaScript (`script.js`)
- **addEntry()**: Fungsi untuk menambah input makanan atau olahraga
- **calculateCalories()**: Fungsi untuk menghitung total kalori yang dikonsumsi, dibakar, dan kalori yang tersisa
- **clearForm()**: Fungsi untuk menghapus semua inputan
- `budgetNumberInput.value`: Menyimpan anggaran kalori
- `output.innerHTML`: Menampilkan hasil perhitungan kalori

### CSS (`styles.css`)
- Styling halaman dengan tema bersih dan minimalis
- Styling form input, tombol, dan output
- Responsive layout yang cocok di berbagai ukuran layar

---

## 🔁 Alur Aplikasi

1. Halaman dibuka
2. User memasukkan anggaran kalori (misalnya 2500 kalori)
3. User menambahkan entri makanan atau olahraga
4. User klik tombol **Calculate Remaining Calories**
5. Kalori yang dikonsumsi dan dibakar dihitung, dan hasilnya ditampilkan (surplus atau defisit)
6. User dapat klik **Clear** untuk mereset form dan memulai lagi

---

## 📚 Yang Dipelajari

- DOM selection & manipulation
- Event handling dengan `.addEventListener()`
- Penggunaan array dan loop untuk mengelola input
- Pemisahan struktur (HTML), logika (JS), dan tampilan (CSS)

---

## 💡 Ide Upgrade

- Menambahkan fitur untuk menyimpan riwayat makanan dan olahraga
- Menambahkan grafik atau visualisasi kalori
- Menambahkan pengingat untuk konsumsi kalori harian
- Menambahkan fitur untuk menghitung makronutrisi (protein, lemak, karbohidrat)

---

## ✍️ Dibuat Oleh

**Anjes Money Maker Money**  
Keep track of your calories, stay healthy, and let's make the web awesome 💪🔥
