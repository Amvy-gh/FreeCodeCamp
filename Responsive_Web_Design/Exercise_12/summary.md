# README - Magazine

## Magazine Website

### Deskripsi
Ini adalah sebuah halaman web dengan tema majalah yang menampilkan artikel tentang kurikulum baru freeCodeCamp. Halaman ini dirancang menggunakan HTML dan CSS dengan pendekatan grid layout untuk tata letak yang responsif.

## Struktur File
- **index.html** → File utama yang berisi struktur HTML.
- **styles.css** → File CSS yang digunakan untuk mengatur tampilan dan layout halaman.

## Penjelasan HTML

```html
<!DOCTYPE html>
<html lang="en">
```
Deklarasi doctype dan bahasa yang digunakan dalam dokumen.

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Magazine</title>
  <link href="https://fonts.googleapis.com/css?family=Anton%7CBaskervville%7CRaleway&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
  <link rel="stylesheet" href="styles.css" />
</head>
```
- **meta charset**: Mengatur encoding karakter UTF-8.
- **meta viewport**: Membuat halaman responsif di perangkat mobile.
- **title**: Menentukan judul halaman.
- **link ke Google Fonts**: Mengimpor font Anton, Baskervville, dan Raleway.
- **link ke Font Awesome**: Menyediakan ikon sosial media.
- **link ke CSS eksternal**: Menghubungkan halaman dengan file `styles.css`.

### Struktur Utama
```html
<main>
  <section class="heading">...</section>
  <section class="text">...</section>
  <section class="text text-with-images">...</section>
</main>
```
Struktur utama terdiri dari:
1. **Heading** → Menampilkan gambar utama, judul, dan informasi penulis.
2. **Text** → Menampilkan isi artikel.
3. **Text with Images** → Menampilkan sejarah kurikulum dan gambar.

## Penjelasan CSS

### Reset dan Pengaturan Dasar
```css
*,
::before,
::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
```
- Menghilangkan margin dan padding default.
- Menggunakan `box-sizing: border-box;` agar padding tidak menambah ukuran elemen.

```css
html {
  font-size: 62.5%;
}
```
- Mengatur **font-size** dasar agar 1rem = 10px.

```css
body {
  font-family: 'Baskervville', serif;
  color: linen;
  background-color: rgb(20, 30, 40);
}
```
- Menggunakan font Baskervville.
- Warna teks linen dengan latar belakang biru gelap.

### Struktur Grid
```css
main {
  display: grid;
  grid-template-columns: minmax(2rem, 1fr) minmax(min-content, 94rem) minmax(2rem, 1fr);
  row-gap: 3rem;
}
```
- **Menggunakan Grid Layout** dengan 3 kolom.
- Kolom utama berada di tengah dengan lebar maksimal 94rem.

### Heading
```css
.hero {
  grid-column: 1 / -1;
  position: relative;
}
.hero-title {
  text-align: center;
  color: orangered;
  font-size: 8rem;
}
.hero-subtitle {
  font-size: 2.4rem;
  color: orangered;
  text-align: center;
}
```
- **`.hero`** → Menjadikan header menempati seluruh kolom grid.
- **`.hero-title`** → Mengatur judul utama dengan warna oranye dan ukuran besar.
- **`.hero-subtitle`** → Subtitle berukuran lebih kecil dengan warna yang sama.

### Penulis dan Tanggal Publikasi
```css
.author {
  font-size: 2rem;
  font-family: "Raleway", sans-serif;
}
.publish-date {
  color: rgba(255, 255, 255, 0.5);
}
```
- **`.author`** → Mengatur informasi penulis dengan font Raleway.
- **`.publish-date`** → Memberi efek transparan pada tanggal.

### Media Sosial
```css
.social-icons {
  display: grid;
  font-size: 3rem;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
}
```
- **Menggunakan Grid Layout** untuk ikon sosial media.
- Ikon diatur agar sejajar dengan ukuran font 3rem.

### Artikel
```css
.text {
  grid-column: 2 / 3;
  font-size: 1.8rem;
  letter-spacing: 0.6px;
  column-width: 25rem;
  text-align: justify;
}
```
- **`.text`** → Mengatur tata letak artikel agar lebih mudah dibaca.
- **`column-width: 25rem;`** → Membuat teks terbagi dalam kolom kecil.
- **`text-align: justify;`** → Merapikan teks agar lebih rapi.

### Kutipan
```css
.quote {
  color: #00beef;
  font-size: 2.4rem;
  text-align: center;
  font-family: "Raleway", sans-serif;
}
.quote::before {
  content: '" ';
}
.quote::after {
  content: ' "';
}
```
- **Menambahkan kutipan dengan efek sebelum dan sesudah tanda kutip.**

### Sejarah Kurikulum (List dan Gambar)
```css
.lists {
  list-style-type: none;
  margin-top: 2rem;
}
.lists li {
  margin-bottom: 1.5rem;
}
.list-title, .list-subtitle {
  color: #00beef;
}
```
- **Mengatur daftar sejarah kurikulum dengan warna dan spasi yang sesuai.**

### Gambar dalam Artikel
```css
.image-wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(3, min-content);
  gap: 2rem;
  place-items: center;
}
.image-1, .image-3 {
  grid-column: 1 / -1;
}
```
- **`.image-wrapper`** → Menjadikan gambar dalam tata letak grid.
- **`.image-1, .image-3`** → Gambar lebih besar dari yang lainnya.

### Responsiveness
```css
@media only screen and (max-width: 720px) {
  .image-wrapper {
    grid-template-columns: 1fr;
  }
}
```
- **Mengatur ulang tata letak gambar pada layar kecil.**

```css
@media only screen and (max-width: 550px) {
  .hero-title {
    font-size: 6rem;
  }
  .social-icons {
    font-size: 2rem;
  }
}
```
- **Mengubah ukuran teks dan ikon agar lebih sesuai pada layar kecil.**

## Kesimpulan
- Website ini dirancang menggunakan **CSS Grid Layout** untuk tampilan responsif.
- **Typography** dan **warna** dipilih untuk meningkatkan estetika visual.
- Menggunakan **media queries** untuk penyesuaian tampilan di berbagai ukuran layar.