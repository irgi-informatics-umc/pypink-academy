# PyPink Academy

Website belajar Python berbahasa Indonesia, dibangun dengan Astro dan menghasilkan situs statis untuk Vercel.

## Menjalankan secara lokal

Gunakan Node.js 22 atau versi LTS yang kompatibel dengan Astro 5.

```sh
npm install
npm run dev
```

Buka URL lokal yang ditampilkan Astro (umumnya `http://localhost:4321`). Untuk membuat build statis dan melihat hasilnya:

```sh
npm run build
npm run preview
```

## Struktur folder

```text
src/
  components/       Komponen Astro (header, Pipi, CodeBlock, quiz, callout)
  data/             Kurikulum terstruktur dalam lessons.json
  layouts/           BaseLayout dan LessonLayout
  pages/             Beranda, peta belajar, materi, dan halaman pendukung
  styles/
    global.css        Token warna/tema, tipografi, dan primitive
    pages/
      site.css        Header/footer, hero, roadmap, dan layout umum
      learning.css    Komponen belajar dan halaman materi
      responsive.css  Penyesuaian breakpoint lama
      redesign.css    Pola mobile-first, desktop editorial, dan aksesibilitas sentuh
public/
  assets/js/         Tema, progres, animasi IntersectionObserver, dan Playground
  favicon.svg        Ikon Pipi
scripts/
  audit-ui.mjs        Screenshot dan pemeriksaan visual otomatis
astro.config.mjs     Output statis, URL situs, dan tema Shiki
```

## Audit UI

Pasang Chromium Playwright sekali setelah menginstal dependency:

```sh
npm i -D playwright
npx playwright install chromium
npm run dev
```

Di terminal kedua jalankan `node scripts/audit-ui.mjs`. Skrip memeriksa halaman pada enam ukuran viewport, tema terang/gelap, serta emulasi iPhone 14 dan Pixel 7. Screenshot tersimpan di `scratch/screenshots/`; `AUDIT_BASE_URL` dapat dipakai untuk menguji server preview pada URL lain.

## Menambah materi

Tambahkan objek materi baru ke `src/data/lessons.json`. Astro akan membuat halaman `/belajar/<slug>/` secara otomatis dengan highlight Shiki, tombol salin kode, kuis interaktif, dan progres tersimpan di localStorage. Format data lengkap:

```json
{
  "slug": "f-string-camilan",
  "title": "F-String untuk Camilan",
  "level": 2,
  "levelName": "Dasar-dasar",
  "duration": 8,
  "difficulty": "Gampang",
  "description": "Menyisipkan variabel ke teks dengan cantik dan rapi.",
  "icon": "fa-cookie-bite",
  "pipiTip": "Tulis huruf f kecil di depan tanda kutip pembuka ya!",
  "funFact": "F-string hadir di Python 3.6 dan langsung jadi favorit!",
  "analogy": {
    "title": "Bingkai foto polaroid berlabel",
    "paragraphs": ["Bayangkan polaroid yang langsung mencetak namamu..."]
  },
  "concept": {
    "title": "Sintaks f-string di Python",
    "lead": "Cara tercepat dan paling bersih menyusun kalimat dinamis.",
    "points": ["<strong>Ekspresi:</strong> Masukkan variabel ke kurung kurawal {...}."]
  },
  "codeExample": {
    "filename": "camilan.py",
    "code": "snack = 'Mochi'\nprint(f'Ngemil {snack} bareng Pipi')",
    "highlight": [2],
    "explanations": ["Baris 2 mencetak kalimat dengan f-string."]
  },
  "trap": {
    "title": "Awas Jebakan: Lupa Huruf f",
    "text": "Jika lupa huruf f, kurung kurawal akan dicetak apa adanya."
  },
  "practice": {
    "instruction": "Coba buat f-string dengan nama kucing favoritmu!",
    "code": "kucing = 'Boba'\nprint(f'Kucingku: {kucing}')"
  },
  "quizzes": [
    {
      "id": "contoh-q1",
      "question": "Huruf apa yang ditaruh di depan string untuk f-string?",
      "options": ["f", "s", "p"],
      "answer": 0,
      "explanation": "Gunakan awalan huruf f (atau F) sebelum tanda kutip."
    }
  ],
  "takeaways": [
    "F-string diawali huruf f.",
    "Variabel dimasukkan ke dalam kurung kurawal {}.",
    "Sangat bersih dan sesuai standar PEP 8."
  ]
}
```

## Deploy ke Vercel

Impor repository di Vercel dan pilih preset **Astro**. Tidak perlu adapter server karena `astro.config.mjs` menggunakan `output: 'static'`. Perintah build adalah `npm run build`; direktori hasilnya `dist/`. Pastikan properti `site` di konfigurasi Astro memakai domain produksi agar canonical dan sitemap benar.

## Catatan fitur

- Tema, progres, dan streak disimpan lokal di browser; data tidak disinkronkan antarperangkat.
- Playground memuat Pyodide versi 0.29.3 dari CDN hanya ketika tombol Jalankan ditekan.
- Tipografi memakai font sistem agar tampilan dasar tetap cepat dan tersedia tanpa permintaan font eksternal.
- Pyodide memerlukan koneksi jaringan dan hanya diunduh ketika tombol Jalankan ditekan.
