# Penguin Animasi CSS 🐧

![Animasi Penguin CSS](https://placeholder-for-penguin-screenshot.jpg)

## Gambaran Proyek

Proyek ini mendemonstrasikan kekuatan CSS dalam menciptakan animasi dan ilustrasi kompleks tanpa memerlukan JavaScript atau pustaka eksternal. Hasilnya adalah penguin lucu yang beranimasi dalam lanskap pegunungan yang melambai pada Anda!

## Fitur

- **Penguin Interaktif**: Penguin membesar saat diklik
- **Lambaian Tangan**: Tangan kiri penguin melambai secara terus-menerus menggunakan animasi CSS
- **Desain Responsif**: Tampilan menyesuaikan dengan berbagai ukuran layar
- **Implementasi Murni CSS**: Tidak memerlukan JavaScript untuk animasi atau interaksi

## Penjelasan Teknis

### Struktur HTML

File HTML membentuk struktur dasar dari animasi penguin. Berikut adalah penjelasan setiap elemen:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="./styles.css" />
    <title>Penguin</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>

  <body>
    <div class="left-mountain"></div>
    <div class="back-mountain"></div>
    <div class="sun"></div>
    <div class="penguin">
      <div class="penguin-head">
        <div class="face left"></div>
        <div class="face right"></div>
        <div class="chin"></div>
        <div class="eye left">
          <div class="eye-lid"></div>
        </div>
        <div class="eye right">
          <div class="eye-lid"></div>
        </div>
        <div class="blush left"></div>
        <div class="blush right"></div>
        <div class="beak top"></div>
        <div class="beak bottom"></div>
      </div>
      <div class="shirt">
        <div>💜</div>
        <p>I CSS</p>
      </div> 
      <div class="penguin-body">
        <div class="arm left"></div>
        <div class="arm right"></div>
        <div class="foot left"></div>
        <div class="foot right"></div>
      </div>
    </div>

    <div class="ground"></div>
  </body>
</html>
```

#### Penjelasan Elemen HTML:

1. **Latar Belakang Pemandangan**:
   - `<div class="left-mountain"></div>` - Menciptakan gunung di sisi kiri
   - `<div class="back-mountain"></div>` - Menciptakan gunung di belakang
   - `<div class="sun"></div>` - Menciptakan matahari
   - `<div class="ground"></div>` - Menciptakan dasar/tanah

2. **Struktur Penguin**:
   - `<div class="penguin">` - Elemen utama penguin
     - `<div class="penguin-head">` - Kepala penguin
       - Wajah (kiri dan kanan)
       - Dagu
       - Mata (kiri dan kanan dengan kelopak mata)
       - Rona pipi (kiri dan kanan)
       - Paruh (atas dan bawah)
     - `<div class="shirt">` - Baju penguin dengan simbol hati dan teks
     - `<div class="penguin-body">` - Badan penguin
       - Lengan (kiri dan kanan)
       - Kaki (kiri dan kanan)

### Penjelasan CSS Detail

#### 1️⃣ Variabel CSS
```css
:root {
  --penguin-face: white;
  --penguin-picorna: orange;
  --penguin-skin: gray;
}
```
**Penjelasan:**
- Mendefinisikan 3 variabel kustom yang dapat digunakan di seluruh stylesheet
- `--penguin-face`: Warna untuk wajah penguin (putih)
- `--penguin-picorna`: Warna untuk paruh dan kaki (oranye)
- `--penguin-skin`: Warna untuk kulit penguin (abu-abu)

#### 2️⃣ Pengaturan Latar Belakang
```css
body {
  background: linear-gradient(45deg, rgb(118, 201, 255), rgb(247, 255, 222));
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
```
**Penjelasan:**
- `background: linear-gradient` - Menciptakan latar belakang bergradasi dari biru muda ke kuning sangat muda
- `margin: 0; padding: 0;` - Menghilangkan semua margin dan padding bawaan
- `width: 100%; height: 100vh;` - Membuat latar belakang mengisi seluruh viewport
- `overflow: hidden;` - Mencegah scrollbar muncul

#### 3️⃣ Gunung Kiri
```css
.left-mountain {
  width: 300px;
  height: 300px;
  background: linear-gradient(rgb(203, 241, 228), rgb(80, 183, 255));
  position: absolute;
  transform: skew(0deg, 44deg);
  z-index: 2;
  margin-top: 100px;
}
```
**Penjelasan:**
- Menciptakan bentuk persegi dengan gradasi warna dari hijau muda ke biru
- `position: absolute;` - Memposisikan gunung secara absolut di layar
- `transform: skew(0deg, 44deg);` - Membuat bentuk miring untuk efek gunung
- `z-index: 2;` - Menempatkan gunung ini di atas gunung belakang
- `margin-top: 100px;` - Memberikan jarak dari atas layar

#### 4️⃣ Gunung Belakang
```css
.back-mountain {
  width: 300px;
  height: 300px;
  background: linear-gradient(rgb(203, 241, 228), rgb(47, 170, 255));
  position: absolute;
  z-index: 1;
  transform: rotate(45deg);
  left: 110px;
  top: 225px;
}
```
**Penjelasan:**
- Menciptakan bentuk persegi dengan gradasi hijau muda ke biru tua
- `transform: rotate(45deg);` - Memutar persegi membentuk seperti belah ketupat
- `z-index: 1;` - Menempatkan di belakang gunung kiri (z-index lebih rendah)
- `left: 110px; top: 225px;` - Memposisikan relatif terhadap sudut kiri atas layar

#### 5️⃣ Matahari
```css
.sun {
  width: 200px;
  height: 200px;
  background-color: yellow;
  position: absolute;
  border-radius: 50%;
  top: -75px;
  right: -75px;
}
```
**Penjelasan:**
- Membuat lingkaran kuning sebagai matahari
- `border-radius: 50%;` - Membuat bentuk lingkaran sempurna
- `top: -75px; right: -75px;` - Memposisikan matahari di sudut kanan atas dengan sebagian tersembunyi

#### 6️⃣ Penguin Utama
```css
.penguin {
  width: 300px;
  height: 300px;
  margin: auto;
  margin-top: 75px;
  z-index: 4;
  position: relative;
  transition: transform 1s ease-in-out 0ms;
}

.penguin * {
  position: absolute;
}

.penguin:active {
  transform: scale(1.5);
  cursor: not-allowed;
}
```
**Penjelasan:**
- Mendefinisikan wadah utama untuk penguin
- `margin: auto;` - Memusatkan penguin secara horizontal
- `z-index: 4;` - Memastikan penguin tampil di atas semua elemen lain
- `transition: transform 1s ease-in-out 0ms;` - Menambahkan efek transisi saat penguin berubah ukuran
- `.penguin * { position: absolute; }` - Semua elemen anak akan diposisikan secara absolut dalam penguin
- `.penguin:active { transform: scale(1.5); }` - Saat diklik, penguin akan membesar 1,5 kali
- `cursor: not-allowed;` - Mengubah kursor menjadi tanda larangan saat penguin diklik

#### 7️⃣ Kepala Penguin
```css
.penguin-head {
  width: 50%;
  height: 45%;
  background: linear-gradient(
    45deg,
    var(--penguin-skin),
    rgb(239, 240, 228)
  );
  border-radius: 70% 70% 65% 65%;
  top: 10%;
  left: 25%;
  z-index: 1;
}
```
**Penjelasan:**
- Membentuk kepala penguin dengan gradasi warna dari abu-abu ke putih kekuningan
- `width: 50%; height: 45%;` - Ukuran kepala relatif terhadap container penguin
- `border-radius: 70% 70% 65% 65%;` - Membuat bentuk bulat untuk kepala
- `top: 10%; left: 25%;` - Memposisikan kepala di bagian atas tubuh penguin
- `z-index: 1;` - Memastikan kepala tampil di atas elemen lain dalam penguin

#### 8️⃣ Wajah Penguin
```css
.face {
  width: 60%;
  height: 70%;
  background-color: var(--penguin-face);
  border-radius: 70% 70% 60% 60%;
  top: 15%;
}

.face.left {
  left: 5%;
}

.face.right {
  right: 5%;
}
```
**Penjelasan:**
- Menciptakan dua bagian wajah putih penguin (kiri dan kanan)
- Menggunakan variabel `--penguin-face` untuk warna
- Kedua bagian wajah memiliki bentuk oval melengkung dengan `border-radius`
- Pemosisian berbeda untuk bagian kiri dan kanan wajah

#### 9️⃣ Dagu Penguin
```css
.chin {
  width: 90%;
  height: 70%;
  background-color: var(--penguin-face);
  top: 25%;
  left: 5%;
  border-radius: 70% 70% 100% 100%;
}
```
**Penjelasan:**
- Menciptakan bagian dagu putih yang menghubungkan kedua sisi wajah
- Menggunakan bentuk lengkung yang lebih bulat di bagian bawah

#### 🔟 Mata Penguin
```css
.eye {
  width: 15%;
  height: 17%;
  background-color: black;
  top: 45%;
  border-radius: 50%;
}

.eye.left {
  left: 25%;
}

.eye.right {
  right: 25%;
}

.eye-lid {
  width: 150%;
  height: 100%;
  background-color: var(--penguin-face);
  top: 25%;
  left: -23%;
  border-radius: 50%;
}
```
**Penjelasan:**
- Menciptakan dua mata hitam berbentuk bulat
- Menambahkan kelopak mata yang berupa setengah lingkaran putih
- Kelopak mata diposisikan agar terlihat seperti penguin sedang berkedip

#### 1️⃣1️⃣ Rona Pipi
```css
.blush {
  width: 15%;
  height: 10%;
  background-color: pink;
  top: 65%;
  border-radius: 50%;
}

.blush.left {
  left: 15%;
}

.blush.right {
  right: 15%;
}
```
**Penjelasan:**
- Menambahkan dua rona pipi berwarna merah muda di bawah mata
- Menciptakan efek penguin yang imut dengan pipi merona

#### 1️⃣2️⃣ Paruh Penguin
```css
.beak {
  height: 10%;
  background-color: var(--penguin-picorna);
  border-radius: 50%;
}

.beak.top {
  width: 20%;
  top: 60%;
  left: 40%;
}

.beak.bottom {
  width: 16%;
  top: 65%;
  left: 42%;
}
```
**Penjelasan:**
- Menciptakan paruh dengan dua bagian (atas dan bawah)
- Menggunakan variabel `--penguin-picorna` untuk warna oranye
- Paruh bawah sedikit lebih kecil dan diposisikan di bawah paruh atas

#### 1️⃣3️⃣ Baju Penguin
```css
.shirt {
  font: bold 25px Helvetica, sans-serif;
  top: 165px;
  left: 127.5px;
  z-index: 1;
  color: #6a6969;
}

.shirt div {
  font-weight: initial;
  top: 22.5px;
  left: 12px;
}
```
**Penjelasan:**
- Menciptakan teks "I CSS" dengan simbol hati ungu (💜)
- Menggunakan font Helvetica tebal dengan ukuran 25px
- Diposisikan di bagian dada penguin
- `z-index: 1;` memastikan teks tampil di atas tubuh penguin

#### 1️⃣4️⃣ Tubuh Penguin
```css
.penguin-body {
  width: 53%;
  height: 45%;
  background: linear-gradient(
    45deg,
    rgb(134, 133, 133) 0%,
    rgb(234, 231, 231) 25%,
    white 67%
  );
  border-radius: 80% 80% 100% 100%;
  top: 40%;
  left: 23.5%;
}

.penguin-body::before {
  content: "";
  position: absolute;
  width: 50%;
  height: 45%;
  background-color: var(--penguin-skin);
  top: 10%;
  left: 25%;
  border-radius: 0% 0% 100% 100%;
  opacity: 70%;
}
```
**Penjelasan:**
- Membentuk tubuh penguin dengan gradasi dari abu-abu ke putih
- Menggunakan pseudo-element `::before` untuk menciptakan "dasi kupu-kupu" abu-abu di tengah tubuh
- Bentuk tubuh lebih bulat di bagian bawah dengan `border-radius: 80% 80% 100% 100%`

#### 1️⃣5️⃣ Lengan Penguin
```css
.arm {
  width: 30%;
  height: 60%;
  background: linear-gradient(
    90deg,
    var(--penguin-skin),
    rgb(209, 210, 199)
  );
  border-radius: 30% 30% 30% 120%;
  z-index: -1;
}

.arm.left {
  top: 35%;
  left: 5%;
  transform-origin: top left; 
  transform: rotate(130deg) scaleX(-1);
  animation: 3s linear infinite wave;
}

.arm.right {
  top: 0%;
  right: -5%;
  transform: rotate(-45deg);
}

@keyframes wave {
  10% {
    transform: rotate(110deg) scaleX(-1);
  }
  20% {
    transform: rotate(130deg) scaleX(-1);
  }
  30% {
    transform: rotate(110deg) scaleX(-1);
  }
  40% {
    transform: rotate(130deg) scaleX(-1);
  }
}
```
**Penjelasan:**
- Membuat dua lengan dengan gradasi abu-abu
- Lengan kiri diposisikan di sisi kiri dan diatur untuk melambai dengan animasi
- Lengan kanan diposisikan di sisi kanan dan diputar 45 derajat
- `z-index: -1;` membuat lengan tampil di belakang tubuh
- Animasi `wave` mengubah rotasi lengan kiri untuk menciptakan efek melambai
- `transform-origin: top left;` mengatur titik putar lengan kiri dari bagian atas kiri

#### 1️⃣6️⃣ Kaki Penguin
```css
.foot {
  width:  15%;
  height: 30%;
  background-color: var(--penguin-picorna);
  top: 85%;
  border-radius: 50%;
  z-index: -1;
}

.foot.left {
  left: 25%;
  transform: rotate(80deg);
}

.foot.right {
  right: 25%;
  transform: rotate(-80deg);
}
```
**Penjelasan:**
- Menciptakan dua kaki oranye berbentuk oval
- Menggunakan variabel `--penguin-picorna` untuk warna
- Memutar kaki agar mengarah ke luar (kiri dan kanan)
- `z-index: -1;` memastikan kaki tampil di belakang tubuh

#### 1️⃣7️⃣ Dasar/Tanah
```css
.ground {
  width: 100vw;
  height: calc(100vh - 300px);
  background: linear-gradient(90deg, rgb(88, 175, 236), rgb(182, 255, 255));
  z-index: 3;
  position: absolute;
  margin-top: -58px;
}
```
**Penjelasan:**
- Menciptakan dasar/tanah berupa es/salju dengan gradasi biru muda
- `width: 100vw;` membuat tanah selebar viewport
- `height: calc(100vh - 300px);` membuat tinggi tanah menyesuaikan dengan ukuran layar
- `z-index: 3;` memastikan tanah tampil di atas gunung tapi di bawah penguin
- `margin-top: -58px;` menyesuaikan posisi agar menumpuk dengan bagian bawah penguin

## Teknik CSS yang Digunakan

Proyek ini menampilkan berbagai teknik CSS modern, antara lain:

1. **Variabel CSS**: Penggunaan variabel kustom untuk warna
2. **Gradien Linear**: Digunakan di seluruh proyek untuk kedalaman visual
3. **Pemosisian**: Pemosisian absolut untuk penempatan elemen dengan tepat
4. **Transformasi**: Efek penskalaan, rotasi, dan kemiringan
5. **Pseudo-elemen**: Digunakan untuk membuat "dasi kupu-kupu" pada tubuh penguin
6. **Animasi Keyframe**: Menggerakkan lengan penguin dalam gerakan melambai
7. **Transisi**: Efek penskalaan halus saat penguin diklik
8. **Selektors CSS**: Berbagai jenis selektor untuk menargetkan elemen spesifik

## Animasi

Animasi melambai diimplementasikan dengan aturan `@keyframes`:

```css
@keyframes wave {
  10% {
    transform: rotate(110deg) scaleX(-1);
  }
  20% {
    transform: rotate(130deg) scaleX(-1);
  }
  30% {
    transform: rotate(110deg) scaleX(-1);
  }
  40% {
    transform: rotate(130deg) scaleX(-1);
  }
}
```

Perubahan sudut rotasi yang halus ini menciptakan gerakan melambai yang realistis.

## Cara Menjalankan

1. Unduh atau clone repositori ini
2. Buka file `index.html` di browser modern
3. Klik pada penguin untuk melihatnya membesar
4. Nikmati penguin yang melambai!

## Kustomisasi

Anda dapat menyesuaikan warna penguin dengan memodifikasi variabel CSS di bagian atas stylesheet:

```css
:root {
  --penguin-face: white;
  --penguin-picorna: orange;
  --penguin-skin: gray;
}
```

## Kesimpulan

Proyek ini menunjukkan kemampuan CSS modern dalam menciptakan ilustrasi dan animasi interaktif tanpa JavaScript. Dengan hanya menggunakan HTML dan CSS, kita dapat menciptakan karakter yang lucu, interaktif, dan responsif yang bekerja di semua browser modern.