# README - Cat Painting CSS Explanation

## CSS Explanation

### 1️⃣ Universal Selector
```css
* {
    box-sizing: border-box;
}
```
**Penjelasan:**
- `*` → Memilih semua elemen dalam dokumen HTML.
- `box-sizing: border-box;` → Memastikan bahwa padding dan border tidak menambah ukuran total elemen.

📌 **Fungsi:** Mencegah elemen bertambah besar karena padding atau border, sehingga lebih mudah dalam mengatur layout.

---

### 2️⃣ Body Styling
```css
body {
    background-color: #c9d2fc;
}
```
**Penjelasan:**
- `background-color: #c9d2fc;` → Mengatur warna latar belakang halaman.

📌 **Fungsi:** Memberikan warna latar belakang biru muda pada halaman.

---

### 3️⃣ Cat Head Styling
```css
.cat-head {
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background: linear-gradient(#5e5e5e 85%, #45454f 100%);
    width: 205px;
    height: 180px;
    border: 1px solid #000;
    border-radius: 46%;
}
```
**Penjelasan:**
- `position: absolute;` → Memposisikan elemen secara absolut relatif terhadap elemen induknya.
- `right: 0; left: 0; top: 0; bottom: 0;` → Membuat elemen berada di tengah secara horizontal dan vertikal.
- `margin: auto;` → Memastikan elemen tetap di tengah.
- `background: linear-gradient(#5e5e5e 85%, #45454f 100%);` →
  - `linear-gradient(...)` → Membuat efek gradasi warna.
  - `#5e5e5e 85%` → Warna abu-abu tua digunakan hingga 85% dari tinggi elemen.
  - `#45454f 100%` → Warna lebih gelap dimulai setelah 85% dan mengisi hingga 100%.
- `width: 205px;` → Mengatur lebar kepala kucing.
- `height: 180px;` → Mengatur tinggi kepala kucing.
- `border: 1px solid #000;` → Menambahkan garis tepi hitam dengan ketebalan 1px.
- `border-radius: 46%;` → Membuat bentuk kepala menjadi oval.

📌 **Fungsi:** Membentuk kepala kucing dengan efek gradasi untuk memberikan tampilan lebih realistis.

---

### 4️⃣ Cat Ears Styling
```css
.cat-left-ear {
    position: absolute;
    top: -26px;
    left: -31px;
    z-index: 1;
    border-top-left-radius: 90px;
    border-top-right-radius: 10px;
    transform: rotate(-45deg);
    border-left: 35px solid transparent;
    border-right: 35px solid transparent;
    border-bottom: 70px solid #5e5e5e;
}
```
**Penjelasan:**
- `position: absolute;` → Memastikan telinga diposisikan relatif terhadap kepala.
- `top: -26px; left: -31px;` → Mengatur posisi telinga kiri di atas kepala.
- `z-index: 1;` → Memastikan telinga berada di atas kepala.
- `border-top-left-radius: 90px;` → Membuat sisi kiri atas telinga melengkung.
- `border-top-right-radius: 10px;` → Memberikan sedikit lengkungan pada sisi kanan atas.
- `transform: rotate(-45deg);` → Memutar telinga kiri agar miring.
- `border-left: 35px solid transparent;` → Membentuk segitiga dengan sisi kiri transparan.
- `border-right: 35px solid transparent;` → Membentuk segitiga dengan sisi kanan transparan.
- `border-bottom: 70px solid #5e5e5e;` → Warna abu-abu untuk bagian bawah segitiga (telinga kucing).

📌 **Fungsi:** Membentuk telinga kiri kucing dengan efek segitiga dan sedikit melengkung.


---

### 5️⃣ Cat Eyes Styling
```css
.cat-left-eye {
    position: absolute;
    top: 54px;
    left: 39px;
    border-radius: 60%;
    transform: rotate(25deg);
    width: 30px;
    height: 40px;
    background-color: #000;
}
```
**Penjelasan:**
- `position: absolute;` → Memastikan mata diposisikan relatif terhadap kepala.
- `top: 54px; left: 39px;` → Mengatur posisi mata kiri.
- `border-radius: 60%;` → Membentuk mata menjadi oval.
- `transform: rotate(25deg);` → Memiringkan mata ke arah tertentu.
- `width: 30px; height: 40px;` → Menentukan ukuran mata.
- `background-color: #000;` → Mata berwarna hitam.

📌 **Fungsi:** Membentuk mata kiri kucing dengan bentuk oval dan warna hitam.

---

### 6️⃣ Cat Nose Styling
```css
.cat-nose {
    position: absolute;
    top: 108px;
    left: 85px;
    border-top-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    transform: rotate(180deg);
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 20px solid #442c2c;
}
```
**Penjelasan:**
- `position: absolute;` → Memastikan hidung diposisikan relatif terhadap kepala.
- `top: 108px; left: 85px;` → Mengatur posisi hidung di tengah kepala.
- `border-top-left-radius: 50%; border-bottom-right-radius: 50%; border-bottom-left-radius: 50%;` → Membentuk sudut hidung menjadi bulat.
- `transform: rotate(180deg);` → Memutar elemen agar bagian bawah menjadi atas.
- `border-left: 15px solid transparent; border-right: 15px solid transparent;` → Membentuk segitiga untuk bagian hidung.
- `border-bottom: 20px solid #442c2c;` → Warna coklat gelap untuk hidung.

📌 **Fungsi:** Membentuk hidung kucing dalam bentuk segitiga bulat.

---

## Kesimpulan
Kode ini menggunakan CSS murni untuk membuat ilustrasi wajah kucing dengan berbagai properti seperti **border-radius, transform, dan linear-gradient**. Kombinasi ini menghasilkan efek visual yang menarik tanpa memerlukan gambar tambahan.
