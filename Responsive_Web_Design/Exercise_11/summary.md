# README - City Skyline CSS Explanation

## CSS Explanation

### 1️⃣ Root Variables
```css
:root {
    --building-color1: #aa80ff;
    --building-color2: #66cc99;
    --building-color3: #cc6699;
    --building-color4: #538cc6;
    --window-color1: #bb99ff;
    --window-color2: #8cd9b3;
    --window-color3: #d98cb3;
    --window-color4: #8cb3d9;
}
```
**Penjelasan:**
- Mendefinisikan variabel warna untuk bangunan dan jendela.
- Memudahkan pengubahan warna di seluruh stylesheet dengan hanya mengganti nilai variabel.

📌 **Fungsi:** Meningkatkan keterbacaan kode dan mempermudah penyesuaian desain.

---

### 2️⃣ Universal Selector
```css
* {
    box-sizing: border-box;
}
```
**Penjelasan:**
- `*` → Menerapkan aturan ke semua elemen dalam dokumen HTML.
- `box-sizing: border-box;` → Memastikan padding dan border tidak menambah ukuran total elemen.

📌 **Fungsi:** Mempermudah pengaturan ukuran elemen tanpa mempengaruhi tata letak secara tidak terduga.

---

### 3️⃣ Body Styling
```css
body {
    height: 100vh;
    margin: 0;
    overflow: hidden;
}
```
**Penjelasan:**
- `height: 100vh;` → Mengisi tinggi layar penuh.
- `margin: 0;` → Menghilangkan margin default.
- `overflow: hidden;` → Mencegah scroll yang tidak diinginkan.

📌 **Fungsi:** Memastikan bahwa seluruh tampilan tetap dalam viewport dan tidak ada scroll yang muncul.

---

### 4️⃣ Sky Background
```css
.sky {
    background: radial-gradient(
        closest-corner circle at 15% 15%,
        #ffcf33,
        #ffcf33 20%,
        #ffff66 21%,
        #bbeeff 100%
    );
}
```
**Penjelasan:**
- Menggunakan `radial-gradient` untuk menciptakan efek langit dengan matahari terbit.
- Warna gradasi dari kuning ke biru meniru efek alami cahaya matahari.

📌 **Fungsi:** Memberikan latar belakang yang menyerupai langit dengan efek pencahayaan alami.

---

### 5️⃣ Building Wrappers
```css
.building-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
}
```
**Penjelasan:**
- `display: flex;` → Menggunakan flexbox untuk menyusun bangunan secara fleksibel.
- `flex-direction: column;` → Menyusun elemen secara vertikal.
- `align-items: center;` → Memusatkan elemen secara horizontal.

📌 **Fungsi:** Memastikan elemen bangunan tersusun dengan rapi dalam satu kolom.

---

### 6️⃣ Foreground & Background Buildings
```css
.background-buildings, .foreground-buildings {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
    position: absolute;
    top: 0;
}
```
**Penjelasan:**
- Mengatur tampilan bangunan depan dan belakang agar berada di posisi tetap dalam layar.
- `align-items: flex-end;` → Menempatkan bangunan di bagian bawah layar.
- `justify-content: space-evenly;` → Menyebar bangunan secara merata.

📌 **Fungsi:** Mengatur posisi elemen bangunan agar tampak alami dalam komposisi skyline.

---

### 7️⃣ Responsive Design
```css
@media (max-width: 1000px) {
    :root {
        --building-color1: #000;
        --building-color2: #000;
        --building-color3: #000;
        --building-color4: #000;
        --window-color1: #777;
        --window-color2: #777;
        --window-color3: #777;
        --window-color4: #777;
    }
    .sky {
        background: radial-gradient(
            closest-corner circle at 15% 15%,
            #ccc,
            #ccc 20%,
            #445 21%,
            #223 100%
        );
    }
}
```
**Penjelasan:**
- Saat layar lebih kecil dari 1000px, warna bangunan berubah menjadi hitam dan langit menjadi lebih gelap.
- `@media (max-width: 1000px)` → Menerapkan aturan ini hanya untuk layar kecil.

📌 **Fungsi:** Meningkatkan keterbacaan dan estetika desain untuk layar kecil dengan mengubah skema warna menjadi lebih kontras.

---

## Kesimpulan
Kode ini membuat tampilan skyline kota dengan efek latar belakang dan foreground yang rapi menggunakan CSS. Dengan memanfaatkan **flexbox**, **gradien warna**, serta **media queries**, desain ini mampu memberikan pengalaman visual yang dinamis dan responsif.