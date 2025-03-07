# 🎨 Warna dalam CSS: HSL & RGBA

## 🌈 HSL (Hue, Saturation, Lightness)
HSL digunakan untuk mendefinisikan warna berdasarkan Hue (warna dasar), Saturation (kejenuhan), dan Lightness (kecerahan).

### 📌 Format:
```css
background: hsl(Hue, Saturation%, Lightness%);
```

### 🎨 Contoh Penggunaan:
```css
background: linear-gradient(hsl(186, 76%, 16%), hsl(223, 90%, 60%), hsl(240, 56%, 42%));
```

### 📝 Penjelasan:
- **H (Hue)** → Warna dasar dalam derajat **(0° - 360°)**:
  - `0°` → **Merah**
  - `120°` → **Hijau**
  - `240°` → **Biru**
- **S (Saturation)** → Kejenuhan warna **(0% - 100%)**:
  - `0%` → **Abu-abu** (tidak ada warna)
  - `100%` → **Warna paling murni**
- **L (Lightness)** → Kecerahan warna **(0% - 100%)**:
  - `0%` → **Hitam**
  - `50%` → **Warna normal**
  - `100%` → **Putih**

---

## 🌟 RGBA & HSL(A) dalam `box-shadow`
RGBA dan HSLA digunakan untuk menambahkan transparansi pada warna dengan nilai **Alpha (A)**.

### 📌 Format:
```css
box-shadow: [offset-x] [offset-y] [blur-radius] [spread-radius] [color];
```

### 🎨 Contoh dengan RGBA:
```css
box-shadow: 0 0 20px 0 rgba(83, 14, 14, 0.8);
```

### 🎨 Contoh dengan HSLA:
```css
box-shadow: 0 0 20px 0 hsla(223, 59%, 31%, 0.8);
```

### 📝 Penjelasan:
- **offset-x** → Posisi bayangan ke kanan/kiri (**0px** berarti tidak bergeser)
- **offset-y** → Posisi bayangan ke atas/bawah (**0px** berarti tidak bergeser)
- **blur-radius** → Seberapa kabur bayangan (**20px** → semakin besar, semakin buram)
- **spread-radius** → Seberapa besar bayangan melebar (**0px** berarti tidak melebar)
- **color** → Warna bayangan
- **A (Alpha)** → Transparansi **(0 - 1)**:
  - `0` → **Transparan**
  - `1` → **Tidak transparan**
  - `0.8` → **80% terlihat, 20% transparan**

---

## 🎯 **Kesimpulan**
- ✅ **HSL** lebih mudah dibaca untuk pengaturan warna.
- ✅ Gunakan **RGBA/HSLA** untuk mengontrol transparansi warna.
- ✅ **box-shadow** membantu menambahkan efek bayangan yang menarik.

🚀 **Semoga bermanfaat!** ✨

