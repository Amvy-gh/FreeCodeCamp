# 📌 Fungsi `aria-label`
`aria-label` digunakan untuk memberikan label teks yang dapat dibaca oleh pembaca layar (screen reader) pada elemen HTML. Ini sangat berguna untuk meningkatkan aksesibilitas pada halaman web.

### Contoh Penggunaan:
```html
<button aria-label="Close">X</button>
```
📌 **Penjelasan:**
- Pembaca layar akan membaca "Close" ketika fokus berada pada tombol tersebut, meskipun teks yang terlihat hanya "X".

---

# 📌 Elemen Semantik vs Non-Semantik
| Elemen Semantik | Elemen Non-Semantik |
|----------------|--------------------|
| `<header>`    | `<div id="header">`  |
| `<nav>`       | `<div class="menu">`  |
| `<section>`   | `<div class="section">`  |
| `<article>`   | `<div class="article">`  |

📌 **Keuntungan Elemen Semantik:**
- Mempermudah SEO dan aksesibilitas.
- Memudahkan pengembang memahami struktur kode.
- Lebih mudah diakses oleh pembaca layar.

---

# 📌 Fungsi `region`
Digunakan untuk membantu aksesibilitas dengan menandai bagian penting dalam halaman web.

✅ **Manfaat:**
- Membantu pembaca layar (screen reader) mengenali bagian penting.
- Harus memiliki judul yang bisa diakses dengan `aria-labelledby`.

---

# 📌 Struktur `<textarea>`
```html
<textarea id="css-textarea" name="css-questions" rows="5" cols="24"></textarea>
```
✅ **Penjelasan:**
- `rows="5"` → Menentukan tinggi area teks sebanyak 5 baris.
- `cols="24"` → Menentukan lebar area teks sebanyak 24 karakter.

---

# 📌 Menambahkan Nomor Otomatis ke `<h3>`
Gunakan `counter-increment` untuk membuat penomoran otomatis pada elemen `<h3>`.

```css
h3 {
    counter-increment: question-counter;
}
h3::before {
    content: "Question #" counter(question-counter) ": ";
}
```
📌 **Hasilnya:**
- Setiap elemen `<h3>` akan diberi nomor secara otomatis.

🚀 **Semoga bermanfaat!** ✨

