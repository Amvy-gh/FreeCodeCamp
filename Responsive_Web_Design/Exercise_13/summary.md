# README - Ferris Wheel CSS Explanation

## CSS Explanation

### 1️⃣ Wheel Styling
```css
.wheel {
    border: 2px solid black;
    border-radius: 50%;
    margin-left: 50px;
    position: absolute;
    height: 55vw;
    width: 55vw;
    max-width: 500px;
    max-height: 500px;
    animation-name: wheel;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
```
**Penjelasan:**
- `border: 2px solid black;` → Menambahkan garis tepi hitam setebal 2px.
- `border-radius: 50%;` → Membuat elemen berbentuk lingkaran.
- `margin-left: 50px;` → Memberi jarak dari kiri sebesar 50px.
- `position: absolute;` → Memungkinkan penempatan spesifik di dalam halaman.
- `height: 55vw; width: 55vw;` → Ukuran roda akan menyesuaikan dengan ukuran layar.
- `max-width: 500px; max-height: 500px;` → Membatasi ukuran maksimum roda.
- `animation: wheel 10s linear infinite;` → Memutar roda selama 10 detik secara terus menerus.

📌 **Fungsi:** Membuat roda bianglala berbentuk lingkaran yang dapat berputar.

---

### 2️⃣ Line Styling
```css
.line {
    background-color: black;
    width: 50%;
    height: 2px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: 0% 0%;
}
```
**Penjelasan:**
- `background-color: black;` → Memberikan warna hitam pada garis.
- `width: 50%; height: 2px;` → Menentukan ukuran garis.
- `position: absolute;` → Mengatur posisi absolut dalam roda.
- `top: 50%; left: 50%;` → Meletakkan garis di tengah roda.
- `transform-origin: 0% 0%;` → Titik rotasi berada di pusat roda.

📌 **Fungsi:** Membentuk jari-jari roda bianglala.

---

### 3️⃣ Rotasi Garis
```css
.line:nth-of-type(2) { transform: rotate(60deg); }
.line:nth-of-type(3) { transform: rotate(120deg); }
.line:nth-of-type(4) { transform: rotate(180deg); }
.line:nth-of-type(5) { transform: rotate(240deg); }
.line:nth-of-type(6) { transform: rotate(300deg); }
```
**Penjelasan:**
- Masing-masing garis diputar dengan sudut tertentu agar tersebar merata.
- `rotate(60deg), rotate(120deg), dst.` → Memutar garis dengan sudut spesifik.

📌 **Fungsi:** Menyebarkan jari-jari roda secara merata.

---

### 4️⃣ Cabin Styling
```css
.cabin {
    background-color: red;
    width: 20%;
    height: 20%;
    position: absolute;
    border: 2px solid;
    transform-origin: 50% 0%;
    animation: cabins 10s ease-in-out infinite;
}
```
**Penjelasan:**
- `background-color: red;` → Memberikan warna merah pada kabin.
- `width: 20%; height: 20%;` → Menentukan ukuran kabin.
- `position: absolute;` → Memungkinkan kabin berada pada posisi spesifik.
- `border: 2px solid;` → Menambahkan garis tepi.
- `transform-origin: 50% 0%;` → Titik rotasi berada di atas kabin.
- `animation: cabins 10s ease-in-out infinite;` → Kabin berubah warna dan berputar dalam 10 detik secara terus menerus.

📌 **Fungsi:** Membentuk kabin bianglala yang bergerak.

---

### 5️⃣ Posisi Kabin
```css
.cabin:nth-of-type(1) { right: -8.5%; top: 50%; }
.cabin:nth-of-type(2) { right: 17%; top: 93.5%; }
.cabin:nth-of-type(3) { right: 67%; top: 93.5%; }
.cabin:nth-of-type(4) { left: -8.5%; top: 50%; }
.cabin:nth-of-type(5) { left: 17%; top: 7%; }
.cabin:nth-of-type(6) { right: 17%; top: 7%; }
```
**Penjelasan:**
- Menggunakan `nth-of-type()` untuk mengatur posisi masing-masing kabin di sekitar roda.
- Menyesuaikan `left` atau `right` serta `top` agar tersebar merata.

📌 **Fungsi:** Mengatur letak kabin agar membentuk lingkaran.

---

### 6️⃣ Animasi Roda
```css
@keyframes wheel {
     0% { transform: rotate(0deg); }
     100% { transform: rotate(360deg); }
}
```
**Penjelasan:**
- `0% { transform: rotate(0deg); }` → Roda berada pada posisi awal.
- `100% { transform: rotate(360deg); }` → Roda berputar penuh.

📌 **Fungsi:** Membuat roda berputar secara terus menerus.

---

### 7️⃣ Animasi Kabin
```css
@keyframes cabins {
    0% { transform: rotate(0deg); }
    25% { background-color: yellow; }
    50% { background-color: purple; }
    75% { background-color: yellow; }
    100% { transform: rotate(-360deg); }
}
```
**Penjelasan:**
- `0% { transform: rotate(0deg); }` → Kabin pada posisi awal.
- `25%` dan `75%` → Kabin berubah warna menjadi kuning.
- `50%` → Kabin berubah warna menjadi ungu.
- `100% { transform: rotate(-360deg); }` → Kabin bergerak berlawanan dengan roda agar tetap sejajar.

📌 **Fungsi:** Membuat kabin berputar berlawanan arah dengan roda agar tetap tegak dan berubah warna selama animasi.

---

## Kesimpulan
Kode ini membuat roda bianglala menggunakan HTML dan CSS murni dengan elemen `div` dan `span`. Dengan menggunakan animasi CSS, roda dapat berputar dan kabin tetap tegak serta berubah warna. Semua elemen diatur dengan posisi absolut agar tampilan tetap sesuai dalam berbagai ukuran layar.