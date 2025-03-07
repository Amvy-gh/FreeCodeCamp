# CSS Gallery Styling

## 📌 Struktur CSS untuk Galeri Gambar

### 🎨 Styling Galeri
```css
.gallery {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 16px;
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px 10px;
}
```

✅ **Penjelasan**:
- `display: flex;` → Mengaktifkan **Flexbox**.
- `flex-direction: row;` → Menyusun gambar **secara horizontal**.
- `flex-wrap: wrap;` → Jika layar kecil, gambar akan **turun ke bawah**.
- `justify-content: center;` → Memposisikan gambar **ke tengah**.
- `gap: 16px;` → Memberi **jarak antar gambar**.
- `max-width: 1400px;` → Maksimal **lebar galeri 1400px**.
- `margin: 0 auto;` → Galeri akan berada **di tengah halaman**.

### 🖼 Styling Gambar dalam Galeri
```css
.gallery img {
    width: 100%;
    max-width: 350px;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
}
```

✅ **Penjelasan**:
- `width: 100%;` → Lebar gambar penuh dengan batas **maksimal 350px**.
- `height: 300px;` → Tinggi gambar tetap **300px**.
- `object-fit: cover;` → Gambar akan **menyesuaikan ukuran** tanpa terdistorsi.
- `border-radius: 10px;` → Membuat sudut gambar **sedikit membulat**.

### 🔹 Efek Tambahan dengan `::after`
```css
.gallery::after {
    content: "";
    width: 350px;
}
```

✅ **Penjelasan**:
- `::after` digunakan untuk menciptakan **elemen kosong** setelah semua gambar.
- `width: 350px;` → Memastikan galeri tetap **terstruktur rapi**.

---
🚀 **Dengan CSS ini, galeri gambar Anda akan tampil lebih menarik dan responsif!** ✨