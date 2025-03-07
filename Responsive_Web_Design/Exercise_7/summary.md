# CSS Divider dan Text Formatting

## 📌 Divider (Garis Pembatas)
Gunakan `.divider` untuk membuat garis pembatas horizontal dalam elemen.

```css
.divider {
    border-bottom: 1px solid #080808;
    margin: 2px 0;
}
```
**Penjelasan:**
- `border-bottom` → Menambahkan garis bawah dengan ketebalan 1px dan warna `#080808`.
- `margin` → Memberikan jarak atas dan bawah sebesar 2px.

---

## 📌 Divider dengan Seleksi Khusus
Gunakan `.daily-value p:not(.no-divider)` untuk menambahkan garis bawah pada semua elemen `<p>` dalam `.daily-value`, kecuali yang memiliki kelas `.no-divider`.

```css
.daily-value p:not(.no-divider) {
    border-bottom: 1px solid #888989;
}
```
**Penjelasan:**
- `.daily-value p` → Memilih semua `<p>` dalam `.daily-value`.
- `:not(.no-divider)` → Mengecualikan elemen `<p>` yang memiliki kelas `.no-divider`.

---

## 📌 Penggunaan `<span>` untuk Pengeditan Spesifik
Gunakan `<span>` jika ingin melakukan perubahan gaya dalam suatu elemen tanpa memengaruhi tata letak keseluruhan.

```html
<p>Ini adalah <span style="color: red; font-weight: bold;">teks yang diedit</span> di dalam paragraf.</p>
```
**Penjelasan:**
- `<span>` → Elemen inline yang dapat digunakan untuk mengedit bagian tertentu dari teks tanpa memengaruhi struktur keseluruhan.

---

## 📌 Menentukan Indentasi Paragraf
Gunakan `text-indent` untuk menyesuaikan indentasi baris pertama teks dalam paragraf.

```css
p {
    text-indent: 8px;
}
```
**Penjelasan:**
- `text-indent: 8px;` → Baris pertama teks akan menjorok ke dalam sejauh 8 piksel.
- `text-indent: -8px;` → Baris pertama teks akan menjorok keluar sejauh 8 piksel ke kiri.

📌 **Contoh Penggunaan**
```html
<p style="text-indent: 20px;">Paragraf ini memiliki indentasi sebesar 20 piksel di awal baris pertama.</p>
```

---

🚀 **Semoga bermanfaat!** ✨