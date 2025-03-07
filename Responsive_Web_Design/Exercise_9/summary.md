## CSS Selectors

### 1️⃣ span[class~="sr-only"]
Memilih elemen `<span>` yang memiliki kelas "sr-only".
`~="sr-only"` berarti memilih elemen yang memiliki kata "sr-only" dalam daftar kelasnya (dipisahkan oleh spasi).

**Contoh:**
```html
<span class="sr-only hidden">Hidden Text</span> <!-- Dipilih karena ada "sr-only" -->
<span class="hidden sr-only">Hidden Text</span> <!-- Dipilih karena ada "sr-only" -->
<span class="hidden">Visible Text</span> <!-- Tidak dipilih karena tidak ada "sr-only" -->
```
📌 **Fungsinya:** Menyembunyikan teks dari tampilan tetapi tetap dapat diakses oleh screen reader.

---

### 2️⃣ #years span[class]
Memilih semua elemen `<span>` di dalam elemen dengan `id="years"` yang memiliki atribut `class`.

**Contoh:**
```html
<div id="years">
  <span class="year">2020</span> <!-- Dipilih karena ada atribut class -->
  <span>2021</span> <!-- Tidak dipilih karena tidak ada class -->
</div>
```
📌 **Fungsinya:** Memberi gaya khusus hanya pada elemen `<span>` yang memiliki class dalam div `#years`.

---

### 3️⃣ tr[class="total"]
Memilih hanya elemen `<tr>` yang memiliki tepat satu kelas dengan nilai "total". Tidak akan memilih `<tr>` dengan lebih dari satu kelas.

**Contoh:**
```html
<tr class="total"> <!-- Dipilih -->
<tr class="total extra"> <!-- Tidak dipilih karena ada kelas tambahan -->
```
📌 **Fungsinya:** Menentukan gaya khusus untuk baris total dalam tabel.

---

### 4️⃣ tr[class="total"] th
Memilih elemen `<th>` yang berada dalam `<tr class="total">`.

**Contoh:**
```html
<tr class="total">
  <th>Total Assets</th> <!-- Dipilih -->
</tr>
```
📌 **Fungsinya:** Mengatur tampilan sel `<th>` dalam baris total.

---

### 5️⃣ tr.total td { ... }
Memilih semua `<td>` yang ada di dalam elemen `<tr>` yang memiliki kelas total.
Bedanya dengan `tr[class="total"]` → Ini lebih fleksibel karena bisa memilih `<tr>` dengan banyak kelas, misalnya "total highlight".

**Contoh:**
```html
<tr class="total">
  <td>$500</td> <!-- Dipilih -->
</tr>
<tr class="total highlight">
  <td>$600</td> <!-- Dipilih juga -->
</tr>
```
📌 **Fungsinya:** Mengatur tampilan semua `<td>` dalam baris total.

---

### 6️⃣ tr.total td:nth-of-type(3)
Memilih kolom ke-3 (`td:nth-of-type(3)`) dari baris yang memiliki kelas total.

**Contoh:**
```html
<tr class="total">
  <td>$100</td>
  <td>$200</td>
  <td>$300</td> <!-- Dipilih -->
</tr>
```
📌 **Fungsinya:** Mengatur tampilan nilai dalam kolom ke-3 di baris total.

---

### 7️⃣ tr.data th .description
Memilih elemen dengan kelas `.description` yang ada di dalam `<th>` yang ada di dalam baris `<tr>` dengan kelas "data".

**Contoh:**
```html
<tr class="data">
  <th>Cash <span class="description">This is cash on hand.</span></th> <!-- Dipilih -->
</tr>
```
📌 **Fungsinya:** Memberi gaya khusus pada deskripsi dalam baris data.

---

### 8️⃣ tr.data td
Memilih semua `<td>` dalam `<tr>` yang memiliki kelas "data".

**Contoh:**
```html
<tr class="data">
  <td>$100</td> <!-- Dipilih -->
  <td>$200</td> <!-- Dipilih -->
</tr>
```
📌 **Fungsinya:** Mengatur tampilan semua data di dalam baris transaksi.

