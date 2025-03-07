# 📌 Struktur & Analisis Formulir

## 🔹 Struktur Formulir

```html
<form method="post" action='https://register-demo.freecodecamp.org'>
  <fieldset>
    <label for="first-name">Enter Your First Name:
      <input id="first-name" name="first-name" type="text" required />
    </label>
  </fieldset>
</form>

<label for="referrer">How did you hear about us?
  <select id="referrer" name="referrer">
    <option value="">(select one)</option>
  </select>
</label>
```

📌 **Penjelasan:**
- `<form>` → Elemen utama formulir dengan metode POST.
- `<fieldset>` → Mengelompokkan elemen dalam formulir.
- `<label>` → Label untuk input agar lebih mudah diklik.
- `<input>` → Input teks dengan atribut `required`.
- `<select>` → Dropdown untuk memilih opsi.

---

## 🔹 Analisis Pola Input dengan Regex

```html
<input type="text" pattern="[a-z0-5]{8,}" />
```

📌 **Penjelasan `pattern="[a-z0-5]{8,}"`**
- `[a-z0-5]` → Hanya boleh menggunakan huruf kecil (a-z) dan angka (0-5).
- `{8,}` → Minimal 8 karakter (tidak ada batas maksimal).

---

## 🎨 CSS Styling

### 1️⃣ **Menghilangkan Border Bawah Fieldset Terakhir**
```css
fieldset:last-of-type {
    border-bottom: none;
}
```
📌 **Penjelasan:**
- Pseudo-class `last-of-type` memilih `<fieldset>` terakhir dalam parent-nya, bukan berdasarkan class atau ID.

### 2️⃣ **Mengembalikan Lebar ke Default**
```css
width: unset;
```
📌 **Penjelasan:**
- Menghapus modifikasi lebar yang diterapkan sebelumnya dan kembali ke nilai bawaan browser.
- Berguna untuk memastikan input radio atau elemen lain tidak terpengaruh oleh CSS lain.

### 3️⃣ **Menjaga Posisi Radio Button Secara Vertikal**
```css
vertical-align: middle;
```
📌 **Penjelasan:**
- Memastikan posisi elemen inline (seperti radio button) tetap sejajar secara vertikal dengan teks di sebelahnya.

### 4️⃣ **Mengatur Elemen agar Berada di Baris Baru**
```css
display: block;
```
📌 **Penjelasan:**
- Mengubah elemen inline menjadi blok agar otomatis pindah ke baris baru.

### 5️⃣ **Menargetkan Input Submit di CSS**
```css
input[type="submit"] {
  /* Tambahkan styling di sini */
}
```
📌 **Penjelasan:**
- Memilih `<input>` dengan `type="submit"` untuk penyesuaian gaya tombol submit.

---

## 🚀 **Kesimpulan**
- ✅ **Gunakan `fieldset:last-of-type`** untuk styling elemen terakhir.
- ✅ **Gunakan `width: unset;`** untuk mengembalikan lebar default elemen input.
- ✅ **Gunakan `vertical-align: middle;`** untuk posisi radio button sejajar dengan teks.
- ✅ **Gunakan `display: block;`** agar elemen tampil di baris baru.
- ✅ **Gunakan `input[type="submit"]`** untuk mengatur tombol submit.

✨ **Semoga bermanfaat!** 🎯

