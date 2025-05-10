# Palindrome Checker

## Deskripsi Proyek

Palindrome Checker adalah aplikasi web sederhana yang memungkinkan pengguna untuk memeriksa apakah sebuah kata atau kalimat adalah palindrom. Palindrom adalah kata atau kalimat yang dapat dibaca sama baik dari depan maupun dari belakang, dengan mengabaikan huruf besar-kecil, tanda baca, dan spasi.

## Fitur

- Input text untuk memasukkan kata atau kalimat
- Tombol untuk memeriksa apakah input adalah palindrom
- Tampilan hasil dengan warna berbeda untuk palindrom dan bukan palindrom
- Contoh yang dapat diklik untuk pengujian cepat
- Dukungan tombol Enter untuk memeriksa palindrom
- Desain responsif yang berfungsi di berbagai ukuran layar

## Teknologi yang Digunakan

- HTML5
- CSS3
- JavaScript (Vanilla JS)

## Penjelasan Kode

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Palindrome Checker</title>
  <!-- CSS styling disini -->
</head>
<body>
  <div class="container">
    <h1>Palindrome Checker</h1>
    <p class="description">
      A palindrome is a word or phrase that reads the same backwards as forwards, ignoring punctuation, case, and spacing.
    </p>
    
    <div class="input-group">
      <input type="text" id="text-input" placeholder="Enter text to check...">
      <button id="check-btn">Check</button>
    </div>
    
    <div id="result" class="hidden"></div>
    
    <div class="examples">
      <h3>Examples to try:</h3>
      <ul>
        <li data-example="A man, a plan, a canal. Panama">A man, a plan, a canal. Panama</li>
        <li data-example="race car">race car</li>
        <li data-example="never odd or even">never odd or even</li>
        <li data-example="0_0 (: /-\ :) 0-0">0_0 (: /-\ :) 0-0</li>
        <li data-example="not a palindrome">not a palindrome</li>
      </ul>
    </div>
  </div>
  
  <footer>&copy; 2025 Palindrome Checker</footer>

  <!-- JavaScript disini -->
</body>
</html>
```

#### Penjelasan Struktur HTML:

1. **Container**: Elemen utama yang menampung seluruh konten aplikasi.
2. **Judul dan Deskripsi**: Menjelaskan tujuan dan apa itu palindrom.
3. **Input Group**: 
   - Input field (`id="text-input"`) tempat pengguna memasukkan teks
   - Tombol Check (`id="check-btn"`) untuk memulai proses pemeriksaan
4. **Result**: Elemen (`id="result"`) yang akan menampilkan hasil pemeriksaan
5. **Examples**: Bagian contoh yang berisi kata dan kalimat yang bisa dicoba
   - Setiap contoh memiliki atribut `data-example` yang berisi teks yang akan dimasukkan ke input
6. **Footer**: Informasi copyright

### CSS

CSS dalam aplikasi ini berfungsi untuk:

1. **Tata Letak**: Mengatur posisi elemen-elemen di halaman
   - Menggunakan flexbox untuk penataan elemen
   - Responsif untuk berbagai ukuran layar

2. **Tampilan Visual**:
   - Warna latar belakang dan teks
   - Bayangan untuk efek kedalaman
   - Border radius untuk sudut melengkung
   - Transisi untuk efek hover

3. **Feedback Visual**:
   - Kelas `.palindrome` dengan latar belakang hijau untuk hasil positif
   - Kelas `.not-palindrome` dengan latar belakang merah untuk hasil negatif
   - Kelas `.hidden` untuk menyembunyikan elemen

### JavaScript

JavaScript dalam aplikasi ini menangani semua logika dan interaksi. Berikut penjelasan detail setiap bagian:

```javascript
// Mendapatkan elemen-elemen DOM
const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');
const exampleItems = document.querySelectorAll('.examples li');
```

#### Penjelasan: 

- **Mendapatkan Elemen DOM**: Kode ini mengambil referensi ke elemen-elemen HTML yang akan dimanipulasi.
- `document.getElementById('text-input')` mendapatkan elemen input tempat pengguna memasukkan teks.
- `document.getElementById('check-btn')` mendapatkan tombol untuk menjalankan pemeriksaan.
- `document.getElementById('result')` mendapatkan elemen untuk menampilkan hasil.
- `document.querySelectorAll('.examples li')` mendapatkan semua elemen contoh yang dapat diklik.

```javascript
// Menambahkan event listener ke tombol check
checkBtn.addEventListener('click', checkPalindrome);
```

#### Penjelasan:

- **Event Listener untuk Tombol**: Kode ini menambahkan pendengar kejadian (event listener) pada tombol check.
- Ketika tombol diklik, fungsi `checkPalindrome` akan dijalankan.
- Event listener adalah cara JavaScript mendeteksi dan merespons interaksi pengguna.

```javascript
// Menambahkan event listener ke input teks untuk tombol Enter
textInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    checkPalindrome();
  }
});
```

#### Penjelasan:

- **Event Listener untuk Tombol Enter**: Kode ini menambahkan event listener untuk mendeteksi saat pengguna menekan tombol keyboard.
- `event.key === 'Enter'` memeriksa apakah tombol yang ditekan adalah Enter.
- Jika tombol Enter ditekan, fungsi `checkPalindrome` dijalankan, sama seperti ketika tombol check diklik.
- Fitur ini meningkatkan pengalaman pengguna dengan memberi cara alternatif untuk menjalankan pemeriksaan.

```javascript
// Menambahkan event listener ke item contoh
exampleItems.forEach(item => {
  item.addEventListener('click', function() {
    textInput.value = this.dataset.example;
    checkPalindrome();
  });
});
```

#### Penjelasan:

- **Event Listener untuk Contoh**: Kode ini menambahkan event listener ke setiap item contoh.
- `forEach` adalah metode array yang menerapkan fungsi yang sama untuk setiap elemen dalam koleksi.
- Ketika contoh diklik:
  1. Nilai dari atribut `data-example` ditempatkan di dalam input teks (`textInput.value = this.dataset.example`).
  2. Fungsi `checkPalindrome` dijalankan untuk segera memeriksa contoh tersebut.
- `this.dataset.example` mengakses nilai atribut `data-example` dari elemen yang diklik.

```javascript
// Fungsi untuk memeriksa apakah input adalah palindrom
function checkPalindrome() {
  // Mendapatkan nilai input
  const inputText = textInput.value.trim();
  
  // Memeriksa apakah input kosong
  if (!inputText) {
    alert('Please input a value');
    return;
  }
  
  // Menentukan apakah teks adalah palindrom
  const isPalindrome = isPalindromeCheck(inputText);
  
  // Menampilkan hasil
  resultDiv.textContent = `${inputText} is ${isPalindrome ? 'a' : 'not a'} palindrome`;
  resultDiv.className = isPalindrome ? 'palindrome' : 'not-palindrome';
  resultDiv.classList.remove('hidden');
}
```

#### Penjelasan Detail:

- **Fungsi checkPalindrome**:
  1. **Mendapatkan Nilai Input**: 
     - `textInput.value` mengambil teks yang dimasukkan pengguna.
     - `.trim()` menghapus spasi di awal dan akhir teks.
  
  2. **Validasi Input**: 
     - `if (!inputText)` memeriksa apakah input kosong (string kosong dianggap falsy).
     - Jika kosong, menampilkan peringatan dan menghentikan fungsi dengan `return`.
  
  3. **Pemeriksaan Palindrom**: 
     - Memanggil fungsi `isPalindromeCheck` dan menyimpan hasilnya (true/false) dalam `isPalindrome`.
  
  4. **Menampilkan Hasil**: 
     - `resultDiv.textContent = ...` mengatur teks yang ditampilkan.
     - Menggunakan template literal (`${...}`) untuk menyisipkan nilai variabel dalam string.
     - `isPalindrome ? 'a' : 'not a'` adalah operator ternary yang memilih teks berdasarkan nilai boolean.
  
  5. **Mengatur Kelas CSS**: 
     - `resultDiv.className = ...` mengatur kelas CSS berdasarkan hasil pemeriksaan.
     - Jika palindrom, menggunakan kelas `.palindrome` (latar belakang hijau).
     - Jika bukan palindrom, menggunakan kelas `.not-palindrome` (latar belakang merah).
  
  6. **Menampilkan Hasil**: 
     - `resultDiv.classList.remove('hidden')` menghapus kelas `.hidden`, sehingga elemen hasil menjadi terlihat.

```javascript
// Fungsi untuk menentukan apakah sebuah string adalah palindrom
function isPalindromeCheck(str) {
  // Mengubah ke huruf kecil dan menghapus semua karakter non-alfanumerik
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Memeriksa apakah string yang sudah dibersihkan adalah palindrom
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
}
```

#### Penjelasan Detail:

- **Fungsi isPalindromeCheck**:
  1. **Membersihkan String**: 
     - `.toLowerCase()` mengubah semua huruf menjadi huruf kecil untuk perbandingan yang tidak peka huruf besar/kecil.
     - `.replace(/[^a-z0-9]/g, '')` menghapus semua karakter yang bukan huruf atau angka.
     - Ekspresi reguler `/[^a-z0-9]/g` dijelaskan:
       - `[^...]` cocok dengan karakter yang TIDAK ada dalam kurung siku.
       - `a-z` adalah rentang huruf kecil.
       - `0-9` adalah rentang angka.
       - `/g` adalah flag global, yang berarti mencocokkan semua kemunculan, bukan hanya yang pertama.
  
  2. **Membalik String**: 
     - `.split('')` memecah string menjadi array karakter.
     - `.reverse()` membalikkan urutan array.
     - `.join('')` menggabungkan array karakter kembali menjadi string.
  
  3. **Membandingkan**: 
     - `return cleanStr === reversedStr` membandingkan string asli yang sudah dibersihkan dengan string yang dibalik.
     - Operasi `===` adalah perbandingan ketat yang mengembalikan `true` jika kedua string sama persis.
     - Jika sama, fungsi mengembalikan `true` (adalah palindrom).
     - Jika berbeda, fungsi mengembalikan `false` (bukan palindrom).

## Prinsip Kerja Palindrome Checker

1. **Input Teks**: Pengguna memasukkan kata atau kalimat yang ingin diperiksa.

2. **Proses Pemeriksaan**: 
   - Teks dibersihkan dari karakter non-alfanumerik dan diubah menjadi huruf kecil.
   - Teks yang sudah dibersihkan dibalik dan dibandingkan dengan teks asli yang sudah dibersihkan.

3. **Output Hasil**: 
   - Jika teks asli dan teks yang dibalik sama, maka hasilnya adalah palindrom.
   - Jika berbeda, maka bukan palindrom.
   - Hasil ditampilkan dengan warna berbeda untuk memberi umpan balik visual.

## Contoh Palindrom

1. "A man, a plan, a canal. Panama" → "amanaplanacanalpanama" (palindrom)
2. "race car" → "racecar" (palindrom)
3. "never odd or even" → "neveroddoreven" (palindrom)
4. "not a palindrome" → "notapalindrome" (bukan palindrom)

## Optimasi dan Praktik Terbaik

1. **Efisiensi Kode**: 
   - Menggunakan metode bawaan JavaScript untuk manipulasi string
   - Menghindari pengulangan yang tidak perlu

2. **Pengalaman Pengguna**: 
   - Umpan balik visual yang jelas dengan warna berbeda
   - Beberapa cara untuk menjalankan pemeriksaan (klik tombol, tekan Enter)
   - Contoh yang dapat diklik untuk pengujian cepat

3. **Validasi Input**:
   - Memeriksa input kosong
   - Membersihkan input sebelum pemeriksaan

4. **Aksesibilitas**:
   - Warna kontras yang baik
   - Struktur HTML yang semantik
   - Teks yang jelas dan deskriptif

## Kesimpulan

Palindrome Checker adalah aplikasi web sederhana namun efektif yang mendemonstrasikan prinsip-prinsip dasar JavaScript, manipulasi DOM, dan pemrosesan string. Aplikasi ini menggunakan beberapa teknik pemrograman front-end yang penting, seperti event handling, manipulasi string, dan pembaruan dinamis pada tampilan pengguna.

---

Proyek ini dikembangkan sebagai bagian dari pembelajaran pemrograman web dasar dan diharapkan dapat membantu dalam memahami konsep-konsep fundamental HTML, CSS, dan JavaScript.