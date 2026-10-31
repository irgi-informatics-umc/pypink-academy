// Level 7 Lessons for PyPink Academy
export const lessonsL7 = [
  // ==========================================
  // LEVEL 7: Kode kompleks
  // ==========================================
  {
    slug: 'decorator-generator',
    title: 'Decorator dan Generator',
    level: 7,
    levelName: 'Kode kompleks',
    duration: 10,
    difficulty: 'Menantang',
    description: 'Membungkus fungsi dengan pita kado (@decorator) dan menghasilkan data hemat memori (yield).',
    icon: 'fa-wand-magic-sparkles',
    pipiTip: 'Decorator itu kayak bando lucu di kepala kucing: fungsinya tetap kucing, tapi penampilannya jadi bertambah manis!',
    funFact: 'Generator menggunakan kata kunci yield dan hanya menghitung data saat diminta (lazy evaluation), sehingga bisa memproses miliaran data tanpa membuat memori RAM penuh!',
    analogy: {
      title: 'Kado berpita cantik dan keran air dispenser',
      paragraphs: [
        'Bayangkan kamu punya kado kue cokelat. Kamu membungkusnya dengan kotak kado berpita pink dan memasang stiker wangi (<strong>Decorator</strong>). Kuenya tetap sama, tapi sekarang punya fitur tambahan sebelum dan sesudah dibuka!',
        'Lalu apa itu <strong>Generator</strong>? Bayangkan kamu haus: alih-alih menampung seluruh air satu galon ke ember besar sekaligus (boros tempat), kamu cukup menekan tuas dispenser untuk mengeluarkan air satu gelas saat kamu butuh minum (<code>yield</code>)!'
      ]
    },
    concept: {
      title: 'Dua Fitur Sakti Python Tingkat Lanjut',
      lead: 'Bagaimana engineer senior mengoptimalkan kode mereka.',
      points: [
        '<strong>Decorator (@nama):</strong> Fungsi yang menerima fungsi lain sebagai argumen dan memperluas perilakunya tanpa mengubah isi aslinya.',
        '<strong>Generator (Fungsi dengan yield):</strong> Menghasilkan nilai satu per satu dan menangguhkan eksekusinya sampai diminta lagi oleh iterasi berikutnya.',
        '<strong>Hemat Memori:</strong> Generator tidak menyimpan seluruh deret angka di RAM, sangat cocok untuk big data.'
      ]
    },
    codeExample: {
      filename: 'sakti_tingkat_lanjut.py',
      code: `import time

# 1. Decorator pengukur kecepatan fungsi
def ukur_waktu(fungsi):
    def pembungkus(*args, **kwargs):
        awal = time.time()
        hasil = fungsi(*args, **kwargs)
        selesai = time.time()
        print(f"⏱️ Fungsi '{fungsi.__name__}' selesai dalam {(selesai-awal)*1000:.2f} ms")
        return hasil
    return pembungkus

# 2. Generator pencetak kupon jajan hemat memori
def buat_kupon(jumlah):
    for i in range(1, jumlah + 1):
        yield f"KUPON-PIPI-{i:03d} 🎟️"

@ukur_waktu
def bagikan_hadiah():
    kupon_stream = buat_kupon(3)
    for k in kupon_stream:
        print(f"Ambil: {k}")

bagikan_hadiah()`,
      highlight: [4, 15, 19, 20],
      explanations: [
        'Baris 4-11: <code>ukur_waktu</code> adalah decorator yang mencatat durasi eksekusi fungsi.',
        'Baris 15: kata kunci <code>yield</code> mengubah fungsi biasa menjadi Generator.',
        'Baris 19: simbol <code>@ukur_waktu</code> memasang pembungkus ke fungsi <code>bagikan_hadiah</code> secara instan.'
      ]
    },
    trap: {
      title: 'Awas Jebakan: Mengira yield Menghentikan Fungsi Selamanya',
      text: 'Berbeda dengan <code>return</code> yang menyelesaikan fungsi secara permanen, <code>yield</code> hanya "menjeda sejenak" (pause) dan menyimpan status fungsi di memori hingga putaran berikutnya memanggil <code>next()</code>.'
    },
    practice: {
      instruction: 'Buat generator angka kelipatan 5 yang menghasilkan 3 angka pertama dengan yield!',
      code: `def kelipatan_lima():
    yield 5
    yield 10
    yield 15

for nilai in kelipatan_lima():
    print(f"Angka: {nilai} ✨")`
    },
    quizzes: [
      {
        id: 'dec-q1',
        question: 'Simbol apa yang digunakan di atas nama fungsi untuk memasang sebuah Decorator di Python?',
        options: ['#', '@', '$'],
        answer: 1,
        explanation: 'Simbol @ (at-sign) diletakkan tepat di atas deklarasi fungsi untuk menerapkan decorator.'
      },
      {
        id: 'dec-q2',
        question: 'Kata kunci apa yang membedakan fungsi Generator dari fungsi biasa?',
        options: ['return', 'yield', 'produce'],
        answer: 1,
        explanation: 'Fungsi yang memuat kata kunci yield otomatis menjadi fungsi generator di Python.'
      },
      {
        id: 'dec-q3',
        question: 'Apa keunggulan utama menggunakan generator untuk memproses data yang sangat besar?',
        options: ['Data langsung otomatis terkirim ke email', 'Sangat hemat memori karena data diproduksi satu per satu saat dibutuhkan', 'Tidak memerlukan koneksi listrik'],
        answer: 1,
        explanation: 'Generator bersifat lazy evaluation, hanya mengalokasikan memori untuk satu item aktif pada satu waktu.'
      }
    ],
    takeaways: [
      'Gunakan decorator (<code>@</code>) untuk menambahkan fitur logging, timing, atau autentikasi.',
      'Gunakan generator (<code>yield</code>) saat memproses antrean data besar agar hemat RAM.',
      'Generator mengingat posisi jeda terakhirnya untuk melanjutkan di panggilan berikutnya.'
    ]
  },

  {
    slug: 'context-manager-type-hints',
    title: 'Context Manager & Type Hints',
    level: 7,
    levelName: 'Kode kompleks',
    duration: 9,
    difficulty: 'Lumayan',
    description: 'Menulis kode profesional yang aman dengan pintu with dan petunjuk tipe data yang jelas.',
    icon: 'fa-signature',
    pipiTip: 'Type hints itu seperti label komposisi di kemasan skincare: memberi tahu editor jenis data apa yang diharapkan!',
    funFact: 'Type hints di Python bersifat opsional dan tidak mengubah cara kerja runtime, tapi sangat disukai oleh editor VS Code untuk autocomplete super pintar!',
    analogy: {
      title: 'Pintu otomatis swalayan dan papan petunjuk jalan',
      paragraphs: [
        'Pernah masuk minimarket dengan pintu sensor otomatis? Begitu kamu mendekat pintunya terbuka, dan saat kamu sudah lewat pintunya tertutup rapat sendiri. Itulah cara kerja <strong>Context Manager</strong> (<code>with</code>): membuka saat masuk, membersihkan saat keluar.',
        'Lalu <strong>Type Hints</strong> itu seperti plang petunjuk jalan di bandara: "Jalur Koper Khusus Ukuran Sedang". Membantu kamu dan teman satu timmu tahu persis tipe data apa yang harus disiapkan tanpa perlu saling tanya.'
      ]
    },
    concept: {
      title: 'Standar Kode Perusahaan Modern',
      lead: 'Bagaimana membuat kode yang mudah dipahami rekan kerja dan minim bug.',
      points: [
        '<strong>Type Hints Variabel:</strong> <code>nama: str = "Pipi"</code> dan <code>umur: int = 1</code>.',
        '<strong>Type Hints Fungsi:</strong> <code>def hitung(a: int, b: int) -&gt; int:</code> menunjukkan tipe masukan dan tipe kembalian.',
        '<strong>Custom Context Manager:</strong> Dibuat dengan modul <code>contextlib.contextmanager</code> atau class dengan metode <code>__enter__</code> dan <code>__exit__</code>.'
      ]
    },
    codeExample: {
      filename: 'kode_profesional.py',
      code: `from contextlib import contextmanager

# 1. Custom Context Manager untuk menghias sesi ngoding
@contextmanager
def sesi_ngoding(nama_sesi: str):
    print(f"🌸 Memulai sesi: {nama_sesi} (Lampu belajar ON)")
    try:
        yield
    finally:
        print(f"🌸 Sesi {nama_sesi} selesai! (Lampu belajar OFF)\\n")

# 2. Fungsi dengan Type Hints lengkap
def format_struk(item: str, harga: float, jumlah: int) -> str:
    total: float = harga * jumlah
    return f"{item} x{jumlah} = Rp{total:,.0f}"

with sesi_ngoding("Belajar Python Bareng Pipi"):
    pesan: str = format_struk("Mochi Matcha", 12500.0, 3)
    print(f"Hasil: {pesan}")`,
      highlight: [4, 7, 13, 14, 17],
      explanations: [
        'Baris 4-10: <code>@contextmanager</code> memungkinkan kita membuat blok <code>with</code> kustom yang otomatis mengeksekusi bagian pembuka dan penutup.',
        'Baris 13: <code>item: str, harga: float, jumlah: int -&gt; str</code> adalah type hints yang sangat memperjelas kontrak fungsi.',
        'Baris 17: pemanggilan menggunakan blok <code>with</code> menjamin pesan penutup selalu dicetak.'
      ]
    },
    trap: {
      title: 'Awas Jebakan: Mengira Type Hints Memblokir Tipe Lain di Runtime',
      text: 'Python tidak akan membatalkan program jika kamu memasukkan angka ke parameter bertipe <code>str</code>. Type hints hanyalah petunjuk untuk linter dan editor. Untuk pemeriksaan ketat, gunakan alat bantu seperti <code>mypy</code>!'
    },
    practice: {
      instruction: 'Lengkapi fungsi sapaan di bawah dengan type hints yang tepat!',
      code: `def sapa_pengguna(nama: str, poin: int) -> str:
    return f"Halo {nama}, kamu mengumpulkan {poin} bintang! ⭐"

print(sapa_pengguna("Nabila", 150))`
    },
    quizzes: [
      {
        id: 'type-q1',
        question: 'Bagaimana cara menuliskan type hint bahwa fungsi mengembalikan nilai bertipe boolean?',
        options: ['def cek() returns bool:', 'def cek() -> bool:', 'def cek() : bool'],
        answer: 1,
        explanation: 'Di Python, tanda panah -> sebelum tanda titik dua digunakan untuk menandai tipe nilai kembalian fungsi.'
      },
      {
        id: 'type-q2',
        question: 'Metode dunder (double underscore) apa yang wajib dimiliki sebuah class agar bisa digunakan pada pernyataan "with"?',
        options: ['__start__ dan __stop__', '__enter__ dan __exit__', '__open__ dan __close__'],
        answer: 1,
        explanation: 'Protokol context manager di Python diatur oleh sepasang metode __enter__ dan __exit__.'
      },
      {
        id: 'type-q3',
        question: 'Apa manfaat terbesar menuliskan type hints pada proyek tim?',
        options: ['Membuat ukuran file Python menjadi lebih kecil', 'Editor bisa memberi saran autocomplete yang presisi dan mencegah salah tipe data', 'Mempercepat kecepatan download internet'],
        answer: 1,
        explanation: 'Type hints mempermudah proses code review, debugging, dan integrasi fitur autocomplete di editor modern.'
      }
    ],
    takeaways: [
      'Gunakan type hints (<code>: tipe</code> dan <code>-&gt; tipe</code>) agar kodemu mudah dipahami.',
      'Gunakan context manager (<code>with</code>) untuk mengelola sumber daya yang perlu dibuka dan ditutup.',
      'Modul <code>contextlib</code> mempermudah pembuatan context manager berbasis generator.'
    ]
  },

  {
    slug: 'regex-json',
    title: 'Regex Dasar & Mengolah JSON',
    level: 7,
    levelName: 'Kode kompleks',
    duration: 9,
    difficulty: 'Menantang',
    description: 'Mencocokkan pola teks (regex) dan bertukar data antar server di internet menggunakan JSON.',
    icon: 'fa-code-compare',
    pipiTip: 'JSON itu kayak paspor internasional data: semua bahasa pemrograman di dunia bisa membaca JSON!',
    funFact: 'Sintaks JSON sangat mirip dengan Dictionary di Python, hanya saja di JSON nilai boolean ditulis dengan huruf kecil (true/false)!',
    analogy: {
      title: 'Detektif pola sidik jari dan paket parsel pos',
      paragraphs: [
        'Bayangkan kamu punya tumpukan surat dan ingin mencari amplop yang ada nomor teleponnya. Polanya jelas: angka-angka dengan strip pemisah. <strong>Regex (Regular Expressions)</strong> adalah kaca pembesar detektif yang bisa mencocokkan pola tersebut dalam sekejap!',
        'Lalu apa itu <strong>JSON</strong>? Bayangkan kamu mengirim paket kue ke teman di luar negeri. Supaya kurir dan penerima paham isinya tanpa salah tafsir, kamu menempel label standar internasional dengan daftar bahan dan penerimanya.'
      ]
    },
    concept: {
      title: 'Dua Keahlian Wajib Web Developer',
      lead: 'Validasi ketikan formulir dan format pertukaran data standar internet.',
      points: [
        '<strong>Modul re (Regex):</strong> <code>re.search()</code> mencari pola, <code>\\d+</code> untuk angka, <code>[a-zA-Z]</code> untuk huruf.',
        '<strong>json.dumps(obj):</strong> Mengubah dictionary Python menjadi teks string JSON (sering dikirim ke web/API).',
        '<strong>json.loads(teks):</strong> Mengubah teks JSON dari internet kembali menjadi Dictionary Python yang ramah diakses.',
        '<strong>ensure_ascii=False:</strong> Menjaga agar karakter khusus dan emoji tidak diubah menjadi kode escape.'
      ]
    },
    codeExample: {
      filename: 'web_data.py',
      code: `import re
import json

# 1. Regex: memeriksa apakah format username hanya huruf & angka kawaii
username_input = "pipi_cute2026"
pola_valid = r"^[a-zA-Z0-9_]{4,15}$"

if re.match(pola_valid, username_input):
    print(f"✅ Username '{username_input}' valid dan cantik!")
else:
    print("❌ Username tidak sesuai aturan.")

# 2. JSON: mengubah data profil kucing menjadi teks JSON
profil_kucing = {
    "nama": "Boba",
    "umur": 3,
    "hobi": ["makan snack", "tidur di kardus"],
    "aktif": True
}

teks_json = json.dumps(profil_kucing, indent=2, ensure_ascii=False)
print("\\nData JSON siap kirim:")
print(teks_json)

# Membaca kembali teks JSON ke dictionary Python
data_kembali = json.loads(teks_json)
print(f"\\nHobi pertama Boba: {data_kembali['hobi'][0]} 🐾")`,
      highlight: [6, 8, 20, 25],
      explanations: [
        'Baris 6: pola regex <code>r"^[a-zA-Z0-9_]{4,15}$"</code> memastikan panjangnya 4-15 karakter huruf, angka, atau underscore.',
        'Baris 8: <code>re.match()</code> mencocokkan pola sejak karakter pertama string.',
        'Baris 20: <code>json.dumps()</code> mengonversi dictionary menjadi teks JSON dengan indentasi rapi 2 spasi.',
        'Baris 25: <code>json.loads()</code> mem-parsing teks JSON kembali menjadi Dictionary Python.'
      ]
    },
    trap: {
      title: 'Awas Jebakan: Beda dumps (dengan S) dan dump (tanpa S)',
      text: 'Ingat kuncinya: <code>json.dumps()</code> (ada huruf s = String) dipakai untuk mengubah ke teks string di memori. Sedangkan <code>json.dump()</code> (tanpa s) dipakai untuk langsung menulis ke objek file disk!'
    },
    practice: {
      instruction: 'Ubah teks JSON berikut menjadi dictionary Python dan cetak nama camilannya!',
      code: `import json
data_teks = '{"camilan": "Mochi Strawberry", "harga": 15000}'
kamus = json.loads(data_teks)
print(f"Camilan: {kamus['camilan']} seharga Rp{kamus['harga']:,} 🍓")`
    },
    quizzes: [
      {
        id: 'json-q1',
        question: 'Fungsi manakah yang digunakan untuk mem-parsing teks JSON menjadi dictionary di Python?',
        options: ['json.stringify()', 'json.loads()', 'json.to_dict()'],
        answer: 1,
        explanation: 'Fungsi json.loads() (load string) mengonversi teks berformat JSON menjadi objek Python.'
      },
      {
        id: 'json-q2',
        question: 'Dalam pola Regex, simbol \\d merepresentasikan karakter apa?',
        options: ['Sembarang huruf alfabet', 'Karakter digit angka (0-9)', 'Tanda baca titik'],
        answer: 1,
        explanation: 'Simbol escape \\d adalah singkatan dari digit (angka 0 sampai 9).'
      },
      {
        id: 'json-q3',
        question: 'Mengapa huruf \'r\' sering diletakkan di depan pola regex seperti r"\\d+"?',
        options: ['Menandakan raw string agar tanda backslash (\\) tidak dianggap karakter escape khusus', 'Menandakan string berwarna merah (red)', 'Membuat pencarian berjalan mundur (reverse)'],
        answer: 0,
        explanation: 'Awalan huruf r menandakan Raw String sehingga backslash diproses secara literal oleh mesin regex.'
      }
    ],
    takeaways: [
      'Gunakan modul <code>re</code> untuk mencocokkan pola teks formulir.',
      'Gunakan <code>json.loads()</code> untuk membaca dan <code>json.dumps()</code> untuk menulis JSON.',
      'Gunakan raw string (<code>r"..."</code>) saat menyusun ekspresi regex.'
    ]
  },

  {
    slug: 'pytest-async-struktur',
    title: 'pytest, Async Dasar, & Struktur Proyek Rapi',
    level: 7,
    levelName: 'Kode kompleks',
    duration: 10,
    difficulty: 'Menantang',
    description: 'Menyusun arsitektur folder proyek standar dunia industri, pengujian pytest, dan tugas paralel async.',
    icon: 'fa-diagram-project',
    pipiTip: 'Struktur folder yang rapi bikin calon rekan kerja atau interviewer langsung jatuh cinta sama kodemu!',
    funFact: 'Framework pytest otomatis menemukan semua file yang diawali test_ tanpa kamu perlu mendaftarkannya satu per satu!',
    analogy: {
      title: 'Pantry dapur bintang lima dan oven timer cerdas',
      paragraphs: [
        'Bayangkan dapur restoran bintang lima: bumbu di rak bumbu, bahan segar di chiller, piring bersih di lemari atas. Itulah <strong>Struktur Proyek Rapi</strong> (ada folder <code>src/</code>, <code>tests/</code>, dan <code>README.md</code>).',
        'Lalu apa itu <strong>Async</strong>? Bayangkan kamu memanggang kue: setelah adonan masuk oven, kamu tidak berdiri mematung menatap pintu oven selama 30 menit! Kamu bisa sambil mencuci mangkuk dan menyiapkan whipped cream (<code>await</code>).'
      ]
    },
    concept: {
      title: 'Tiga Keterampilan Developer Python Profesional',
      lead: 'Bagaimana membangun aplikasi berskala besar yang siap dipelihara bertahun-tahun.',
      points: [
        '<strong>Struktur Proyek:</strong> Folder <code>src/</code> untuk logika inti, <code>tests/</code> untuk pengujian, <code>README.md</code> sebagai petunjuk.',
        '<strong>pytest:</strong> Framework pengujian paling populer, cukup buat file <code>test_fitur.py</code> dengan fungsi <code>test_...()</code>.',
        '<strong>async / await:</strong> Menjalankan tugas yang memerlukan waktu tunggu I/O (seperti download internet) tanpa memblokir program utama.',
        '<strong>asyncio.run():</strong> Pintu masuk utama untuk mengeksekusi coroutine async di Python modern.'
      ]
    },
    codeExample: {
      filename: 'arsitektur_modern.py',
      code: `import asyncio

# Contoh 1: Fungsi async (memasak sambil menyiapkan meja)
async def panggang_kue(nama: str, waktu_detik: int):
    print(f"🧁 [1/2] Memasukkan adonan {nama} ke oven...")
    await asyncio.sleep(waktu_detik)  # simulasi menunggu tanpa macet
    print(f"✨ [2/2] Ting! Kue {nama} matang sempurna!")
    return f"{nama} hangat"

async def kegiatan_dapur():
    # Menjalankan dua tugas oven secara bersamaan
    hasil = await asyncio.gather(
        panggang_kue("Croissant", 1),
        panggang_kue("Muffin Cokelat", 1)
    )
    print(f"Siap saji: {hasil}")

# Menjalankan event loop
asyncio.run(kegiatan_dapur())`,
      highlight: [4, 6, 12, 19],
      explanations: [
        'Baris 4: <code>async def</code> menandai fungsi sebagai coroutine yang bisa ditangguhkan.',
        'Baris 6: <code>await asyncio.sleep()</code> menunggu tanpa membuat komputer macet total (non-blocking).',
        'Baris 12: <code>asyncio.gather()</code> menjalankan beberapa tugas secara paralel sekaligus.',
        'Baris 19: <code>asyncio.run()</code> menjalankan fungsi async dari tingkat utama.'
      ]
    },
    trap: {
      title: 'Awas Jebakan: Lupa Kata Kunci await pada Fungsi Async',
      text: 'Jika kamu memanggil fungsi async tanpa kata kunci <code>await</code> di depannya, fungsinya tidak akan langsung dieksekusi dan Python akan memunculkan peringatan <code>RuntimeWarning: coroutine was never awaited</code>!'
    },
    practice: {
      instruction: 'Jalankan simulasi async menyeduh teh boba berikut!',
      code: `import asyncio

async def seduh_teh():
    print("Mulai menyeduh teh melati... 🍵")
    await asyncio.sleep(0.5)
    print("Aroma teh sudah harum semerbak! ✨")

asyncio.run(seduh_teh())`
    },
    quizzes: [
      {
        id: 'arch-q1',
        question: 'Bagaimana penamaan fungsi yang otomatis dikenali oleh pytest untuk dijalankan sebagai tes?',
        options: ['Diawali dengan kata test_ (misal: test_hitung)', 'Diawali dengan run_test_', 'Harus diakhiri kata _ok'],
        answer: 0,
        explanation: 'pytest secara konvensi mencari fungsi yang diawali dengan kata "test_" di dalam file "test_*.py".'
      },
      {
        id: 'arch-q2',
        question: 'Kata kunci apa yang digunakan untuk memanggil fungsi async dan menunggu hasilnya selesai?',
        options: ['wait', 'await', 'pause'],
        answer: 1,
        explanation: 'Kata kunci "await" digunakan untuk menunggu selesainya eksekusi sebuah coroutine async.'
      },
      {
        id: 'arch-q3',
        question: 'Di dalam struktur proyek Python yang rapi, folder apa yang biasanya menampung kode sumber utama aplikasi?',
        options: ['bin/', 'src/', 'temp/'],
        answer: 1,
        explanation: 'Folder src/ (source) adalah konvensi standar industri untuk menampung kode utama aplikasi.'
      }
    ],
    takeaways: [
      'Gunakan struktur folder <code>src/</code> dan <code>tests/</code> untuk kerapian proyek.',
      'Gunakan <code>pytest</code> untuk pengujian otomatis yang elegan.',
      'Gunakan <code>async</code> dan <code>await</code> untuk proses I/O yang efisien.'
    ]
  },

  {
    slug: 'proyek-api',
    title: 'Proyek Akhir & Integrasi API',
    level: 7,
    levelName: 'Kode kompleks',
    duration: 12,
    difficulty: 'Menantang',
    description: 'Puncak petualanganmu: mengambil data cuaca dari internet dan memilih 4 ide mini project siap banggakan!',
    icon: 'fa-trophy',
    pipiTip: 'Selamat kamu sudah sampai di garis akhir kurikulum! Pipi bangga banget sama perjuangan dan ketekunanmu 🎓🐍✨',
    funFact: 'API (Application Programming Interface) adalah jembatan digital yang menghubungkan jutaan aplikasi di seluruh dunia agar bisa saling bertukar informasi!',
    analogy: {
      title: 'Restoran drive-thru dan panggung wisuda kelulusan',
      paragraphs: [
        'Bayangkan kamu lapar di tengah malam dan datang ke drive-thru. Kamu tidak perlu masuk ke dapur restoran atau melihat koki memasak. Kamu cukup bicara ke mikrofon pemesanan (<strong>API Endpoint</strong>), membayar, dan makanan hangat diserahkan ke tanganmu lewat jendela (<strong>Response JSON</strong>).',
        'Hari ini adalah panggung wisuda kecilmu di PyPink Academy! Semua ilmu dari Level 1 (print) sampai Level 7 (arsitektur dan API) sekarang siap kamu satukan menjadi proyek nyata yang bisa kamu tunjukkan ke teman, guru, atau calon perekrut.'
      ]
    },
    concept: {
      title: 'Menghubungkan Python ke Dunia Luar via HTTP',
      lead: 'Cara mengambil data real-time dari internet dan 4 inspirasi proyek penutup.',
      points: [
        '<strong>HTTP Request:</strong> Mengirim permintaan <code>GET</code> ke alamat URL server untuk mengambil data terbaru.',
        '<strong>Parsing Response:</strong> Server biasanya membalas dalam format teks JSON yang langsung kita ubah jadi Dictionary.',
        '<strong>Status Code 200:</strong> Tanda bahwa permintaan berhasil diterima dan dijawab dengan sukses.',
        '<strong>4 Pilihan Mini Project Akhir:</strong> (1) To-Do List CLI estetik, (2) Kalkulator jajan & promo, (3) Game tebak angka misteri, (4) Pencatat keuangan santai.'
      ]
    },
    codeExample: {
      filename: 'ambil_data_web.py',
      code: `import json
import urllib.request

def ambil_cuaca_santai(kota: str = "Jakarta"):
    """Mengambil simulasi data ramalan cuaca via API."""
    print(f"🌐 Menghubungi satelit cuaca untuk kota {kota}...")
    
    # Contoh struktur data kembalian API cuaca modern
    simulasi_respon_api = """{
        "status": 200,
        "kota": "Jakarta",
        "cuaca": "Cerah Berawan ⛅",
        "suhu_celsius": 28.5,
        "saran_pipi": "Waktu yang tepat buat jalan santai sambil beli es kopi!"
    }"""
    
    data = json.loads(simulasi_respon_api)
    return data

hasil = ambil_cuaca_santai("Bandung")
print(f"Status Server: {hasil['status']} OK")
print(f"Kondisi Cuaca : {hasil['cuaca']}")
print(f"Suhu Udara    : {hasil['suhu_celsius']} °C")
print(f"Pesan Pipi    : {hasil['saran_pipi']} ✨")`,
      highlight: [10, 18, 22, 25],
      explanations: [
        'Baris 10: data dari internet biasanya berupa string JSON terstruktur.',
        'Baris 18: <code>json.loads()</code> membedah string JSON menjadi dictionary Python dalam hitungan milidetik.',
        'Baris 22-25: mengekstrak informasi spesifik dari dictionary untuk ditampilkan ke pengguna dengan sopan.'
      ]
    },
    trap: {
      title: 'Awas Jebakan: Mengabaikan Timeout & Error Jaringan',
      text: 'Di dunia nyata, koneksi internet pengguna bisa putus atau server tujuan sedang down. Selalu bungkus pemanggilan HTTP request di dalam blok <code>try-except</code> dengan penanganan error timeout agar aplikasimu tidak membeku!'
    },
    practice: {
      instruction: 'Pilih satu ide mini project akhirmu dan cetak nama proyek yang ingin kamu buat pertama kali!',
      code: `proyek_pilihan = "To-Do List CLI Estetik dengan Simpanan File JSON"
print(f"Proyek akhir yang akan kubuat: {proyek_pilihan} 🚀")
print("Pipi siap mendampingi proses ngodingmu sampai tuntas! 💖")`
    },
    quizzes: [
      {
        id: 'api-q1',
        question: 'Metode HTTP apa yang paling umum digunakan untuk mengambil (mengunduh) data dari sebuah API?',
        options: ['POST', 'GET', 'DELETE'],
        answer: 1,
        explanation: 'Metode HTTP GET digunakan secara standar untuk meminta dan membaca data dari server.'
      },
      {
        id: 'api-q2',
        question: 'Berapa angka HTTP status code yang menandakan permintaan berhasil dengan sukses?',
        options: ['200', '404', '500'],
        answer: 0,
        explanation: 'Status code 200 OK adalah standar universal bahwa permintaan berhasil diproses.'
      },
      {
        id: 'api-q3',
        question: 'Apa langkah selanjutnya setelah kamu menyelesaikan kurikulum 7 level di PyPink Academy?',
        options: ['Berhenti ngoding selamanya', 'Membangun proyek portofolio sendiri dan terus mengeksplorasi ide kreatif', 'Menghapus Python dari laptop'],
        answer: 1,
        explanation: 'Kunci menjadi programmer handal adalah mempraktikkan ilmu dengan terus berkarya dan membuat proyek nyata!'
      }
    ],
    takeaways: [
      'API menghubungkan kodemu dengan layanan luar seperti cuaca, peta, dan AI.',
      'Gunakan <code>json.loads()</code> untuk memproses data balasan server.',
      'Selamat! Kamu telah menguasai dasar hingga tingkat lanjut Python bersama Pipi! 🎓✨'
    ]
  }
];

