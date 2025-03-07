# Struktur Inputan dalam Formulir

## 📌 Struktur Dasar Formulir

```html
<form>
    <fieldset>
        <legend>Judul Fieldset 1</legend>
        <label for="input1">Label 1</label>
        <input type="text" id="input1" />
        
        <legend>Judul Fieldset 2</legend>
        <label for="input2">Label 2</label>
        <input type="text" id="input2" />
    </fieldset>
</form>
```

🔹 **Struktur di atas menjelaskan**:
- `<form>` → Elemen utama untuk form.
- `<fieldset>` → Kelompokkan elemen inputan terkait.
- `<legend>` → Judul dari kelompok inputan.
- `<label>` → Deskripsi untuk input yang lebih jelas.
- `<input>` → Elemen input untuk pengguna.

---

## 📌 Elemen List dengan Nomor
Gunakan **`<ol>`** (Ordered List) dan **`<li>`** (List Item) untuk membuat daftar bernomor.

```html
<ol>
    <li>Item pertama</li>
    <li>Item kedua</li>
    <li>Item ketiga</li>
</ol>
```

📌 **Hasilnya**:
1. Item pertama  
2. Item kedua  
3. Item ketiga  

---

## 📌 Menampilkan Gambar dengan Keterangan
Gunakan **`<figure>`** dan **`<figcaption>`** untuk menyertakan gambar dengan deskripsi.

```html
<figure>
    <img src="gambar.jpg" alt="Deskripsi Gambar">
    <figcaption>Keterangan gambar di sini</figcaption>
</figure>
```

📌 **Kegunaan**:
- `<figure>` → Mengelompokkan gambar dan caption.
- `<figcaption>` → Menambahkan deskripsi gambar.

---

## 📌 Membuat Teks Miring (Italic)
Gunakan **`<em>`** untuk menandai teks yang perlu ditekankan (*italic*).

```html
<p>Ini adalah <em>teks miring</em> dalam sebuah paragraf.</p>
```

📌 **Hasilnya**:  
Ini adalah *teks miring* dalam sebuah paragraf.

---

### 🎯 **Kesimpulan**
- ✅ Gunakan **`<fieldset>`** & **`<legend>`** untuk mengelompokkan form.
- ✅ Gunakan **`<ol>` & `<li>`** untuk daftar bernomor.
- ✅ Gunakan **`<figure>` & `<figcaption>`** untuk gambar dengan deskripsi.
- ✅ Gunakan **`<em>`** untuk menandai teks miring.

🚀 **Semoga bermanfaat!** ✨