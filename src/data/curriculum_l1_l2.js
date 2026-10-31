// Level 1 and Level 2 Lessons for PyPink Academy
export const lessonsL1L2 = [
  // ==========================================
  // LEVEL 1: Kenalan dulu
  // ==========================================
  {
    slug: 'kenalan-python',
    title: 'Kenalan dengan Python',
    level: 1,
    levelName: 'Kenalan dulu',
    duration: 6,
    difficulty: 'Gampang',
    description: 'Mengenal Python, kenapa bahasanya ramah banget buat pemula, dan apa saja yang bisa kamu buat dengannya.',
    icon: 'fa-wand-magic-sparkles',
    pipiTip: 'Anggap belajar ngoding kayak belajar bahasa baru saat liburan. Santai aja, kita mulai dari sapaan pertama dulu ya!',
    funFact: 'Nama Python bukan diambil dari jenis ular loh! Penciptanya, Guido van Rossum, suka banget acara komedi TV BBC era 70-an bernama "Monty Python\'s Flying Circus".',
    analogy: {
      title: 'Python itu kayak bahasa sahabat karibmu',
      paragraphs: [
        'Bayangkan kamu punya sahabat yang pintar banget, tapi dia nggak suka bahasa yang ribet dan berbelit-belit. Kalau kamu minta tolong "Tolong ingetin aku beli susu", dia langsung paham tanpa kamu harus menyebutkan rumus fisika atau pasal hukum.',
        'Nah, Python itu persis seperti sahabat tadi! Dibandingkan bahasa pemrograman lain yang penuh titik koma (<code>;</code>) dan tanda kurung kurawal (<code>{}</code>), Python dirancang agar enak dibaca seperti bahasa Inggris sehari-hari.'
      ]
    },
    concept: {
      title: 'Kenapa Banyak Orang Jatuh Cinta sama Python?',
      lead: 'Python adalah bahasa pemrograman serbaguna (<em>general-purpose</em>) yang dipakai oleh pemula hingga ilmuwan di NASA dan pengembang AI kelas dunia.',
      points: [
        '<strong>Sintaks Bersih & Rapi:</strong> Kamu nggak perlu pusing mengingat simbol aneh. Cukup tulis instruksi yang jelas.',
        '<strong>Serbaguna:</strong> Bisa untuk bikin website, analisis data, kecerdasan buatan (AI), otomatisasi tugas harian, sampai game sederhana.',
        '<strong>Komunitas Super Hangat:</strong> Jutaan programmer di seluruh dunia siap berbagi tutorial, pustaka gratis, dan jawaban kalau kamu bingung.'
      ]
    },
    codeExample: {
      filename: 'sapa_dunia.py',
      code: `# Program pertama kita di PyPink Academy
pesan = "Halo dunia! Aku siap belajar Python bareng Pipi 🐍"
print(pesan)
print("Rasanya semanis segelas boba dingin 🧋")`,
      highlight: [2, 3],
      explanations: [
        '<code>#</code> adalah komentar. Python akan mengabaikannya, ini catatan buat kita manusia.',
        '<code>pesan = "..."</code>: kita membuat wadah bernama <code>pesan</code> yang berisi kalimat manis.',
        '<code>print(pesan)</code>: perintah untuk menampilkan isi wadah <code>pesan</code> ke layar terminal.',
        '<code>print("...")</code>: kamu juga bisa langsung menampilkan teks tanpa menyimpannya di wadah lebih dulu.'
      ]
    },
    trap: {
      title: 'Awas Jebakan: Huruf Besar & Kecil Berbeda!',
      text: 'Python itu <em>case-sensitive</em>. Kalau kamu menulis <code>Print()</code> dengan huruf P kapital, Python bakal bingung dan mengira itu perintah yang belum pernah dia dengar. Selalu tulis <code>print()</code> dengan huruf kecil ya!'
    },
    practice: {
      instruction: 'Ganti pesan di bawah dengan nama kamu dan camilan favoritmu hari ini!',
      code: `nama = "Mira"
camilan = "Donat matcha 🍩"
print(f"Halo, namaku {nama} dan aku lagi ngemil {camilan}!")`
    },
    quizzes: [
      {
        id: 'kenalan-q1',
        question: 'Dari mana asal usul nama Python?',
        options: ['Dari jenis ular boa peliharaan penciptanya', 'Dari serial komedi Monty Python', 'Dari singkatan Pretty Young Total Network'],
        answer: 1,
        explanation: 'Guido van Rossum memberi nama Python karena menyukai tayangan komedi Monty Python!'
      },
      {
        id: 'kenalan-q2',
        question: 'Bagaimana penulisan fungsi print yang benar di Python?',
        options: ['PRINT("Halo")', 'Print("Halo")', 'print("Halo")'],
        answer: 2,
        explanation: 'Python peka huruf besar-kecil (case-sensitive), jadi perintah bawaan wajib ditulis huruf kecil: print().'
      },
      {
        id: 'kenalan-q3',
        question: 'Apa fungsi tanda pagar (#) di awal baris kode?',
        options: ['Membuat teks jadi tebal', 'Menandai komentar agar tidak dieksekusi Python', 'Menghubungkan Python ke internet'],
        answer: 1,
        explanation: 'Tanda # digunakan untuk menulis komentar yang hanya dibaca manusia.'
      }
    ],
    takeaways: [
      'Python itu ramah pemula karena sintaksnya mirip bahasa Inggris biasa.',
      'Gunakan perintah <code>print()</code> untuk menampilkan teks ke layar.',
      'Python peka terhadap huruf besar dan kecil (case-sensitive).'
    ]
  },

  {
    slug: 'install-python-editor',
    title: 'Install Python & Editor Kode',
    level: 1,
    levelName: 'Kenalan dulu',
    duration: 8,
    difficulty: 'Gampang',
    description: 'Menyiapkan dapur ngodingmu: instal Python 3.12+ dan pasang Visual Studio Code agar nyaman menulis kode.',
    icon: 'fa-laptop-code',
    pipiTip: 'Saat menginstal Python di Windows, jangan lupa centang kotak "Add python.exe to PATH". Itu kunci ajaibnya!',
    funFact: 'VS Code punya ribuan tema warna imut seperti pastel pink, kawaii aesthetic, sampai lofi aesthetic!',
    analogy: {
      title: 'Dapur koki dan buku resep',
      paragraphs: [
        'Mau masak kue yang lezat tentu butuh kompor (mesin yang memproses) dan buku catatan resep (tempat menulis bahan-bahannya).',
        'Di dunia ngoding, Python adalah "kompornya" (mesin runtime yang menjalankan kode), sedangkan VS Code adalah "buku catatan cantiknya" (editor teks tempat kita mengetik kode dengan rapi dan nyaman).'
      ]
    },
    concept: {
      title: 'Langkah Mudah Menyiapkan Lingkungan Belajar',
      lead: 'Cukup dua aplikasi gratis ini untuk memulai petualangan ngodingmu di laptop atau komputermu.',
      points: [
        '<strong>1. Unduh Python:</strong> Kunjungi situs resmi <code>python.org</code> dan unduh versi stabil terbaru (Python 3.12+).',
        '<strong>2. Centang "Add to PATH":</strong> Pada installer Windows, centang kotak paling bawah agar perintah python bisa dipanggil dari terminal mana saja.',
        '<strong>3. Pasang VS Code:</strong> Unduh dari <code>code.visualstudio.com</code>, editor gratis paling populer di dunia saat ini.',
        '<strong>4. Pasang Ekstensi Python:</strong> Buka tab Extensions di VS Code (ikon kotak-kotak di samping kiri), cari "Python" dari Microsoft, lalu klik Install.'
      ]
    },
    codeExample: {
      filename: 'cek_versi.py',
      code: `# Cek apakah Python sudah bekerja dengan baik di komputermu
import sys

print("Versi Python yang kamu pakai saat ini:")
print(sys.version)
print("Selamat, dapur ngodingmu sudah siap! 🎉")`,
      highlight: [2, 5],
      explanations: [
        '<code>import sys</code>: mengambil alat bawaan Python untuk memeriksa sistem komputermu.',
        '<code>sys.version</code>: variabel bawaan yang menyimpan angka versi Python yang sedang berjalan.',
        'Kalau angka depannya adalah 3 (misal 3.12.x), artinya kamu sudah memakai Python versi modern!'
      ]
    },
    trap: {
      title: 'Awas Jebakan: Lupa Centang "Add to PATH"',
      text: 'Kalau kamu membuka terminal dan mengetik <code>python</code> tapi muncul tulisan "command not found" atau malah membuka Microsoft Store, kemungkinan besar kamu lupa mencentang opsi "Add python.exe to PATH" saat instalasi. Buka kembali file installer, pilih Modify, lalu centang opsi tersebut.'
    },
    practice: {
      instruction: 'Jalankan kode ini di playground untuk melihat versi Python yang dijalankan browser!',
      code: `import platform
print(f"Sistem operasi Python ini: {platform.system()} 💻")
print(f"Versi rilis: {platform.release()}")`
    },
    quizzes: [
      {
        id: 'install-q1',
        question: 'Apa fungsi mencentang "Add python.exe to PATH" saat instalasi di Windows?',
        options: ['Supaya wallpaper laptop berubah jadi pink', 'Supaya perintah python bisa dijalankan langsung dari terminal/CMD', 'Supaya komputer bisa menjalankan game berat'],
        answer: 1,
        explanation: 'Menambahkan ke PATH membuat sistem operasi mengenali lokasi perintah python dari command line mana saja.'
      },
      {
        id: 'install-q2',
        question: 'Editor kode apa yang paling direkomendasikan dan gratis untuk pemula?',
        options: ['Microsoft Word', 'Notepad bawaan', 'Visual Studio Code'],
        answer: 2,
        explanation: 'Visual Studio Code memiliki fitur pewarnaan kode, deteksi error otomatis, dan terminal terintegrasi yang sangat memudahkan pemula.'
      },
      {
        id: 'install-q3',
        question: 'Bagaimana cara mengecek versi Python melalui terminal?',
        options: ['python --version', 'python tolong cek versi', 'check python now'],
        answer: 0,
        explanation: 'Perintah standar di terminal untuk mengecek versi adalah "python --version" atau "python -V".'
      }
    ],
    takeaways: [
      'Python bertindak sebagai mesin penerjemah, VS Code sebagai editor tempat mengetik.',
      'Selalu centang opsi "Add python.exe to PATH" saat menginstal di Windows.',
      'Pasang ekstensi resmi Python di VS Code untuk fitur auto-complete dan cek kesalahan otomatis.'
    ]
  },

  {
    slug: 'komentar-dan-error',
    title: 'Komentar & Membaca Pesan Error',
    level: 1,
    levelName: 'Kenalan dulu',
    duration: 7,
    difficulty: 'Gampang',
    description: 'Menulis catatan rahasia di kode dan belajar tenang membaca pesan error tanpa rasa panik.',
    icon: 'fa-bug-slash',
    pipiTip: 'Pesan error itu bukan tanda kamu gagal, tapi surat cinta dari Python yang memberi tahu letak typo-mu!',
    funFact: 'Istilah "bug" di komputer bermula dari ngengat (serangga sungguhan) yang tersangkut di mesin komputer Harvard Mark II tahun 1947!',
    analogy: {
      title: 'Sticky note di cermin dan alarm pengingat',
      paragraphs: [
        'Komentar itu seperti menempelkan <em>sticky note</em> lucu di cermin meja rias: isinya pengingat buat kamu sendiri ("jangan lupa pakai sunscreen"), tapi orang lain yang lewat nggak perlu ikut menjalankan itu.',
        'Sedangkan pesan error itu seperti alarm pintu mobil yang bunyi saat kamu lupa menutup pintu rapat. Dia nggak marah, dia cuma bilang: "Hei, ada baut yang belum pas di baris ke-3!"'
      ]
    },
    concept: {
      title: 'Dua Sahabat Programmer: Komentar & Traceback',
      lead: 'Belajar memahami apa yang dikatakan Python saat sesuatu tidak berjalan sesuai rencana.',
      points: [
        '<strong>Komentar Satu Baris:</strong> Diawali tanda pagar <code>#</code>. Apapun setelah tanda ini di baris yang sama akan diabaikan Python.',
        '<strong>Komentar Multibaris:</strong> Bisa menggunakan tanda kutip tiga (<code>"""..."""</code>), sering dipakai untuk dokumentasi (docstring).',
        '<strong>SyntaxError:</strong> Terjadi kalau kamu salah tata bahasa, misal lupa tutup tanda kutip atau kurung.',
        '<strong>NameError:</strong> Terjadi kalau kamu memanggil nama variabel yang belum pernah kamu buat sebelumnya.'
      ]
    },
    codeExample: {
      filename: 'sahabat_error.py',
      code: `# Ini adalah komentar: catatan untuk teman kelompok atau diri sendiri
nama_kucing = "Boba"  # Nama kucing kesayangan

# Python akan menampilkan ini dengan lancar:
print(f"Kucingku namanya {nama_kucing} 🐱")

# Kalau baris bawah ini dinyalakan, akan memicu NameError:
# print(makanan_favorit) # makanan_favorit belum pernah dibuat!`,
      highlight: [1, 5, 8],
      explanations: [
        'Baris 1 dan 2 diawali <code>#</code>, jadi Python melompatinya tanpa memproses.',
        'Baris 5 mencetak nama Boba dengan f-string yang manis.',
        'Baris 8 sengaja dimatikan (diberi tanda pagar/dikomentari) agar tidak memicu <code>NameError</code>.'
      ]
    },
    trap: {
      title: 'Awas Jebakan: Tanda Kutip yang Tidak Klop',
      text: 'Membuka teks dengan tanda kutip ganda <code>"</code> tapi menutupnya dengan tanda kutip tunggal <code>\'</code> akan menyebabkan <code>SyntaxError: unterminated string literal</code>. Pastikan pasangan kutipnya serasi ya!'
    },
    practice: {
      instruction: 'Perbaiki baris kode berikut agar tidak error lagi dan tampilkan hasilnya!',
      code: `# Kode ini awalnya ada typo, yuk perbaiki:
pesan_rahasia = "Pipi sayang kamu"
print(pesan_rahasia)`
    },
    quizzes: [
      {
        id: 'error-q1',
        question: 'Apa arti pesan error "NameError: name \'camilan\' is not defined"?',
        options: ['Komputer kehabisan memori', 'Variabel \'camilan\' dipanggil sebelum dibuat nilainya', 'Python tidak suka dengan nama camilan'],
        answer: 1,
        explanation: 'NameError berarti Python mencari sebuah nama variabel tapi belum pernah didefinisikan sebelumnya.'
      },
      {
        id: 'error-q2',
        question: 'Kapan komentar diabaikan oleh Python?',
        options: ['Hanya saat komputer mati', 'Selalu diabaikan saat kode dijalankan', 'Hanya diabaikan jika ada tulisan huruf kecil'],
        answer: 1,
        explanation: 'Komentar selalu diabaikan oleh interpreter Python karena tujuannya khusus untuk manusia pembaca kode.'
      },
      {
        id: 'error-q3',
        question: 'Apa langkah pertama yang harus kamu lakukan saat melihat error merah di terminal?',
        options: ['Panik lalu instal ulang laptop', 'Baca baris paling bawah untuk melihat jenis error dan nomor barisnya', 'Hapus semua file'],
        answer: 1,
        explanation: 'Trik programmer handal: baca baris paling bawah dari pesan error untuk melihat jenis error dan letak barisnya!'
      }
    ],
    takeaways: [
      'Gunakan tanda pagar <code>#</code> untuk menulis penjelasan kode yang rapi.',
      'Error adalah petunjuk, bukan vonis bersalah. Baca baris dan nama errornya.',
      'Periksa tanda kutip berpasangan dan kurung tutup sebelum menjalankan program.'
    ]
  },

  // ==========================================
  // LEVEL 2: Dasar-dasar
  // ==========================================
  {
    slug: 'variabel-tipe-data',
    title: 'Variabel & Tipe Data',
    level: 2,
    levelName: 'Dasar-dasar',
    duration: 8,
    difficulty: 'Gampang',
    description: 'Menyimpan barang di kotak bekal berlabel: berkenalan dengan angka, teks, dan status benar/salah.',
    icon: 'fa-box-archive',
    pipiTip: 'Beri nama variabel yang jelas, kayak namain folder foto: daripada cuma "x", lebih baik "harga_mochi".',
    funFact: 'Python secara otomatis menebak tipe datamu! Kamu nggak perlu menulis "int x = 5" seperti di bahasa C atau Java.',
    analogy: {
      title: 'Variabel itu kotak bekal berlabel manis',
      paragraphs: [
        'Bayangkan kamu punya beberapa kotak bekal transparan di dapur. Kotak pertama kamu tempeli stiker "camilan" lalu diisi mochi. Kotak kedua kamu beri label "jumlah" lalu diisi angka 5. Kotak ketiga berlabel "rasa_manis" dan diisi tanda centang (True).',
        'Di Python, kotak bekal itu disebut <strong>variabel</strong>, dan isi di dalamnya disebut <strong>nilai (value)</strong> yang memiliki <strong>tipe data</strong> tertentu.'
      ]
    },
    concept: {
      title: 'Empat Tipe Data Primadona di Python',
      lead: 'Setiap data punya jenisnya masing-masing agar Python tahu cara memperlakukannya.',
      points: [
        '<strong>str (String):</strong> Teks atau tulisan, wajib diapit tanda kutip (contoh: <code>"Matcha Latte"</code>).',
        '<strong>int (Integer):</strong> Bilangan bulat tanpa koma desimal (contoh: <code>4</code>, <code>100</code>, <code>-2</code>).',
        '<strong>float (Floating Point):</strong> Angka pecahan atau berkoma desimal, pakai tanda titik (contoh: <code>18.5</code>, <code>3.14</code>).',
        '<strong>bool (Boolean):</strong> Nilai logika yang hanya bernilai <code>True</code> (benar) atau <code>False</code> (salah).'
      ]
    },
    codeExample: {
      filename: 'kotak_bekal.py',
      code: `# Menyiapkan kotak-kotak bekal kita
nama_menu = "Strawberry Mochi"  # str (teks)
porsi = 3                       # int (bilangan bulat)
harga_satuan = 8500.5           # float (desimal)
diskon_pelajar = True           # bool (benar/salah)

# Memeriksa tipe data dengan fungsi bawaan type()
print(f"Menu: {nama_menu} (tipe: {type(nama_menu).__name__})")
print(f"Porsi: {porsi} (tipe: {type(porsi).__name__})")
print(f"Harga: Rp{harga_satuan} (tipe: {type(harga_satuan).__name__})")
print(f"Dapat diskon? {diskon_pelajar}")`,
      highlight: [2, 3, 4, 5],
      explanations: [
        'Baris 2: teks <code>"Strawberry Mochi"</code> disimpan di variabel <code>nama_menu</code>.',
        'Baris 3: angka bulat <code>3</code> disimpan di variabel <code>porsi</code>.',
        'Baris 4: angka desimal menggunakan titik <code>.</code>, bukan koma.',
        'Baris 5: <code>True</code> diawali huruf kapital T (begitu juga <code>False</code> dengan F kapital).',
        '<code>type(nama_menu).__name__</code> dipakai untuk melihat nama tipe datanya secara rapi.'
      ]
    },
    trap: {
      title: 'Awas Jebakan: Angka di Dalam Tanda Kutip',
      text: 'Jika kamu menulis <code>harga = "5000"</code> (dengan tanda kutip), Python menganggapnya sebagai teks biasa (str), bukan angka! Jika kamu menjumlahkan <code>"5" + "5"</code> hasilnya adalah <code>"55"</code>, bukan <code>10</code>. Hilangkan tanda kutip jika ingin menyimpan angka matematika!'
    },
    practice: {
      instruction: 'Buatlah data profil kucingmu dengan 4 tipe data yang berbeda, lalu cetak hasilnya!',
      code: `nama_kucing = "Luna"
umur_tahun = 2
berat_kg = 3.8
suka_dielus = True

print(f"{nama_kucing} berumur {umur_tahun} th, berat {berat_kg} kg. Suka dielus: {suka_dielus}")`
    },
    quizzes: [
      {
        id: 'var-q1',
        question: 'Manakah penulisan variabel yang bertipe float?',
        options: ['jarak = 12', 'jarak = "12.5"', 'jarak = 12.5'],
        answer: 2,
        explanation: 'Float adalah angka yang memiliki desimal bertanda titik tanpa tanda kutip.'
      },
      {
        id: 'var-q2',
        question: 'Apa hasil dari ekspresi type(True)?',
        options: ['<class \'str\'>', '<class \'bool\'>', '<class \'int\'>'],
        answer: 1,
        explanation: 'True dan False adalah nilai dari kelas Boolean (bool).'
      },
      {
        id: 'var-q3',
        question: 'Manakah nama variabel yang sesuai aturan konvensi PEP 8 di Python?',
        options: ['harga_camilan_manis', 'Harga-Camilan', '1_harga_camilan'],
        answer: 0,
        explanation: 'Aturan PEP 8 menyarankan snake_case (huruf kecil dipisah garis bawah) dan tidak boleh diawali angka.'
      }
    ],
    takeaways: [
      'Variabel menyimpan nilai yang bisa digunakan berkali-kali.',
      'Empat tipe data dasar: str (teks), int (bulat), float (desimal), bool (logika).',
      'Gunakan snake_case untuk penamaan variabel yang bersih dan mudah dibaca.'
    ]
  },

  {
    slug: 'input-output',
    title: 'Input & Output Interaktif',
    level: 2,
    levelName: 'Dasar-dasar',
    duration: 7,
    difficulty: 'Gampang',
    description: 'Mengobrol dua arah dengan programmu: menerima ketikan keyboard dan membalas dengan manis.',
    icon: 'fa-comments',
    pipiTip: 'Ingat baik-baik: apapun yang diketik pengguna lewat input() akan selalu diterima Python dalam bentuk teks (str)!',
    funFact: 'Fungsi input() di Python punya parameter prompt bawaan, jadi kamu bisa menulis pesan di dalam tanda kurungnya langsung!',
    analogy: {
      title: 'Pelayan ramah di kasir kedai kopi',
      paragraphs: [
        'Ketika kamu datang ke kedai kopi, kasir ramah menyapa: "Halo kak, mau pesan minuman apa?". Kamu lalu menjawab: "Caramel Latte". Kasir mencatat pesananmu, lalu barista menyiapkan minuman dan menyerahkannya padamu.',
        'Di Python, kasir ramah itu adalah fungsi <code>input()</code> yang menunggu kamu mengetik, sedangkan barista yang menyerahkan minuman ke tanganmu adalah <code>print()</code>!'
      ]
    },
    concept: {
      title: 'Cara Berkomunikasi dengan Pengguna',
      lead: 'Program yang interaktif terasa hidup karena bisa menanggapi kemauan pengguna.',
      points: [
        '<strong>input("Pesan prompt"):</strong> Menampilkan pesan ajakan, menjeda program, lalu menunggu pengguna menekan Enter.',
        '<strong>Hasil input selalu str:</strong> Meskipun pengguna mengetik angka <code>100</code>, Python menyimpannya sebagai string <code>"100"</code>.',
        '<strong>print(..., sep=" ", end="\\n"):</strong> Bisa menerima beberapa data sekaligus dan mengatur pemisah serta akhiran baris.'
      ]
    },
    codeExample: {
      filename: 'kafe_pipi.py',
      code: `# Program kasir kafe mini yang ramah
print("✨ Selamat datang di Kafe Kucing Pipi ✨")
nama_pelanggan = "Aira"  # Simulasi input untuk demo
pesanan = "Matcha Ice Cream"

# Menyapa pelanggan dengan sopan
print(f"Senang bertemu denganmu, {nama_pelanggan}!")
print(f"Satu porsi {pesanan} sedang disiapkan barista 🍵")`,
      highlight: [2, 7, 8],
      explanations: [
        'Baris 2 mencetak banner pembuka selamat datang.',
        'Di terminal sungguhan, kamu bisa mengganti baris 3 dengan <code>nama_pelanggan = input("Siapa namamu? ")</code>.',
        'Baris 7 dan 8 menggabungkan variabel ke dalam kalimat menggunakan f-string.'
      ]
    },
    trap: {
      title: 'Awas Jebakan: Langsung Menjumlahkan Hasil input()',
      text: 'Karena hasil <code>input()</code> selalu berupa teks, kode seperti <code>angka = input("Angka: ") + 10</code> akan error <code>TypeError: can only concatenate str to str</code>. Kamu wajib membungkusnya dengan <code>int()</code> terlebih dahulu!'
    },
    practice: {
      instruction: 'Jalankan simulasi kasir berikut dan ubah nama camilan serta ucapan terima kasihnya!',
      code: `pelanggan = "Nadia"
item = "Croissant Cokelat 🥐"
print("Struk Pesanan:")
print(f"Nama: {pelanggan}")
print(f"Item: {item}")
print("Terima kasih sudah mampir! Pipi tunggu kedatangannya lagi 💖")`
    },
    quizzes: [
      {
        id: 'io-q1',
        question: 'Jika pengguna mengetik angka 25 pada input(), apa tipe data yang diterima Python?',
        options: ['int', 'str', 'float'],
        answer: 1,
        explanation: 'Fungsi input() selalu menghasilkan string (str) terlepas dari karakter apa yang diketik.'
      },
      {
        id: 'io-q2',
        question: 'Bagaimana cara meminta input umur sekaligus mengubahnya menjadi angka bulat?',
        options: ['umur = int(input("Umurmu: "))', 'umur = input(int("Umurmu: "))', 'umur = to_integer(input("Umurmu: "))'],
        answer: 0,
        explanation: 'Bungkus pemanggilan input() di dalam fungsi int() agar langsung dikonversi ke bilangan bulat.'
      },
      {
        id: 'io-q3',
        question: 'Apa fungsi parameter end="" pada print("Hai", end=" ")?',
        options: ['Menghentikan program seketika', 'Menentukan karakter penutup agar tidak langsung ganti baris baru', 'Menghapus teks sebelumnya'],
        answer: 1,
        explanation: 'Secara default print mencetak baris baru (\\n). Mengubah parameter end membuat teks berikutnya tetap berada di baris yang sama.'
      }
    ],
    takeaways: [
      'Gunakan <code>input()</code> untuk menerima masukan dari pengguna.',
      'Hasil <code>input()</code> selalu bertipe data string (<code>str</code>).',
      'Gunakan <code>print()</code> untuk menampilkan respon hasil olahan komputermu.'
    ]
  },

  {
    slug: 'operator',
    title: 'Operator & Hitung-hitungan',
    level: 2,
    levelName: 'Dasar-dasar',
    duration: 8,
    difficulty: 'Gampang',
    description: 'Menghitung belanjaan dan mengecek syarat logika dengan operator matematika dan perbandingan.',
    icon: 'fa-calculator',
    pipiTip: 'Beda antara / dan //: kalau / hasilnya selalu berkoma (float), tapi // membulatkan ke bawah jadi bilangan bulat!',
    funFact: 'Di Python, tanda pangkat tidak memakai topi (^), melainkan bintang ganda (**). Misalnya 2 ** 3 hasilnya 8!',
    analogy: {
      title: 'Kalkulator belanja dan kasir yang adil',
      paragraphs: [
        'Saat kamu patungan beli seloyang pizza bersama 3 sahabatmu, kamu perlu menghitung: berapa total harga, dibagi 4 dapat berapa potong per orang, dan apakah ada sisa potongan di kotak?',
        'Operator di Python bekerja persis seperti asisten keuanganmu: ada yang jago berhitung (aritmatika), jago membandingkan harga (perbandingan), dan jago memutuskan syarat (logika).'
      ]
    },
    concept: {
      title: 'Tiga Kelompok Operator Penting',
      lead: 'Kuasai simbol-simbol ini untuk membuat perhitungan dan syarat cerdas di kodemu.',
      points: [
        '<strong>Aritmatika:</strong> <code>+</code> (tambah), <code>-</code> (kurang), <code>*</code> (kali), <code>/</code> (bagi pecahan), <code>//</code> (bagi bulat), <code>%</code> (sisa bagi/modulo), <code>**</code> (pangkat).',
        '<strong>Perbandingan:</strong> <code>==</code> (sama dengan), <code>!=</code> (tidak sama), <code>&gt;</code> (lebih besar), <code>&lt;</code> (lebih kecil), <code>&gt;=</code>, <code>&lt;=</code>. Hasilnya selalu <code>True</code> atau <code>False</code>.',
        '<strong>Logika:</strong> <code>and</code> (keduanya wajib benar), <code>or</code> (salah satu cukup benar), <code>not</code> (membalikkan nilai kebenaran).'
      ]
    },
    codeExample: {
      filename: 'patungan_jajan.py',
      code: `# Menghitung patungan jajan mochi
total_tagihan = 45000
jumlah_teman = 4

biaya_per_orang = total_tagihan / jumlah_teman
pembagian_bulat = total_tagihan // jumlah_teman
sisa_uang = total_tagihan % jumlah_teman

# Memeriksa syarat dengan operator perbandingan & logika
uang_di_dompet = 15000
cukup_uang = uang_di_dompet >= biaya_per_orang
bawa_e_wallet = True
bisa_bayar = cukup_uang or bawa_e_wallet

print(f"Biaya persis per orang: Rp{biaya_per_orang}")
print(f"Sisa pembagian kasir: Rp{sisa_uang}")
print(f"Apakah kamu bisa bayar jajan? {bisa_bayar} ✨")`,
      highlight: [5, 6, 7, 12, 14],
      explanations: [
        'Baris 5: <code>/</code> menghasilkan <code>11250.0</code> (float).',
        'Baris 6: <code>//</code> membuang pecahan dan mengambil bagian bulatnya.',
        'Baris 7: <code>%</code> (modulo) mengembalikan sisa pembagian.',
        'Baris 12: <code>&gt;=</code> membandingkan apakah 15000 lebih besar atau sama dengan 11250 (True).',
        'Baris 14: operator <code>or</code> bernilai True karena salah satu syarat terpenuhi.'
      ]
    },
    trap: {
      title: 'Awas Jebakan: Beda Antara = dan ==',
      text: 'Satu tanda sama dengan (<code>=</code>) digunakan untuk MENYIMPAN nilai ke variabel (penugasan). Dua tanda sama dengan (<code>==</code>) digunakan untuk MEMBANDINGKAN apakah dua nilai itu sama persis. Jangan tertukar ya!'
    },
    practice: {
      instruction: 'Hitung apakah sisa saldo setelah membeli boba cukup untuk ongkos pulang naik ojol!',
      code: `saldo = 50000
harga_boba = 24000
ongkos_ojol = 18000

sisa_saldo = saldo - harga_boba
cukup_pulang = sisa_saldo >= ongkos_ojol
print(f"Sisa saldo: Rp{sisa_saldo}")
print(f"Cukup untuk ongkos pulang? {cukup_pulang} 🛵")`
    },
    quizzes: [
      {
        id: 'op-q1',
        question: 'Berapakah hasil dari operasi 14 % 4 di Python?',
        options: ['3', '2', '3.5'],
        answer: 1,
        explanation: '14 dibagi 4 menghasilkan 3 dengan sisa 2. Modulo (%) mengembalikan angka sisanya, yaitu 2.'
      },
      {
        id: 'op-q2',
        question: 'Operator apa yang digunakan untuk menghitung 3 pangkat 4?',
        options: ['3 ^ 4', '3 ** 4', '3 // 4'],
        answer: 1,
        explanation: 'Di Python, operasi eksponen atau pangkat menggunakan operator bintang ganda (**).'
      },
      {
        id: 'op-q3',
        question: 'Jika lapar = True dan punya_uang = False, apa hasil dari (lapar and punya_uang)?',
        options: ['True', 'False', 'None'],
        answer: 1,
        explanation: 'Operator "and" hanya akan menghasilkan True jika KEDUA belah pihak bernilai True.'
      }
    ],
    takeaways: [
      'Gunakan <code>//</code> untuk pembagian bulat dan <code>%</code> untuk sisa bagi.',
      'Gunakan <code>==</code> untuk memeriksa kesamaan nilai, bukan <code>=</code>.',
      'Operator logika (<code>and</code>, <code>or</code>, <code>not</code>) menggabungkan syarat keputusan.'
    ]
  },

  {
    slug: 'f-string-konversi',
    title: 'F-String & Konversi Tipe Data',
    level: 2,
    levelName: 'Dasar-dasar',
    duration: 8,
    difficulty: 'Gampang',
    description: 'Menyusun kalimat estetik dengan f-string dan menyulap tipe data sesuai kebutuhan program.',
    icon: 'fa-wand-magic',
    pipiTip: 'Cukup tambahkan huruf f kecil di depan tanda kutip pembuka: f"Halo {nama}!". Praktis dan cantik!',
    funFact: 'F-string (Formatted String Literals) diperkenalkan di Python 3.6 dan kini jadi cara format teks terfavorit di dunia Python!',
    analogy: {
      title: 'Kamera polaroid dengan bingkai custom',
      paragraphs: [
        'Sebelum ada f-string, menggabungkan kata di Python rasanya seperti menempel potongan huruf koran pakai lem: <code>"Halo " + nama + ", umurmu " + str(umur)</code>. Melelahkan dan rawan salah spasi!',
        'F-string itu seperti foto polaroid dengan jendela transparan: kamu tinggal membuat template kalimat yang rapi, lalu meletakkan nama variabel di dalam kurung kurawal <code>{...}</code>. Python otomatis mengisinya!'
      ]
    },
    concept: {
      title: 'Menyulap Tipe Data & Merapikan Angka',
      lead: 'Dua keahlian penting untuk membuat output aplikasi terlihat profesional dan ramah dibaca.',
      points: [
        '<strong>Casting / Konversi Tipe:</strong> <code>int("25")</code> menjadi angka bulat, <code>float("15.7")</code> menjadi desimal, <code>str(100)</code> menjadi teks.',
        '<strong>Ekspresi di dalam f-string:</strong> Kamu bisa langsung berhitung di dalam kurung kurawal, misalnya <code>{harga * 2}</code>.',
        '<strong>Format Angka Ribuan:</strong> Tulis <code>{total:,}</code> untuk otomatis memunculkan pemisah ribuan (misal 50,000).',
        '<strong>Format Desimal:</strong> Tulis <code>{nilai:.2f}</code> untuk membatasi 2 angka di belakang koma.'
      ]
    },
    codeExample: {
      filename: 'struk_cantik.py',
      code: `# Mengubah teks input menjadi angka matematika
input_jumlah = "4"
input_harga = "12500"

# Konversi tipe data (casting)
jumlah = int(input_jumlah)
harga = float(input_harga)
total = jumlah * harga
pajak = total * 0.11
total_akhir = total + pajak

# Menampilkan struk belanja yang estetik
print(f"Jumlah item : {jumlah} porsi")
print(f"Subtotal    : Rp{total:,.2f}")
print(f"PPN (11%)   : Rp{pajak:,.2f}")
print(f"Total Bayar : Rp{total_akhir:,.2f} 🧾")`,
      highlight: [5, 6, 13, 14, 15],
      explanations: [
        'Baris 5-6: mengubah string hasil ketikan menjadi <code>int</code> dan <code>float</code>.',
        'Baris 13: <code>{total:,.2f}</code> menampilkan pemisah koma ribuan dan dua digit desimal.',
        'Semua variabel disisipkan ke dalam kalimat tanpa tanda plus <code>+</code> yang berantakan.'
      ]
    },
    trap: {
      title: 'Awas Jebakan: Mengonversi Teks Non-Angka',
      text: 'Fungsi <code>int()</code> hanya bisa mengubah teks yang memang berisi angka murni. Jika kamu mencoba <code>int("sepuluh")</code> atau <code>int("12.5")</code>, Python akan memicu <code>ValueError</code>. Pastikan format teksnya valid sebelum dikonversi!'
    },
    practice: {
      instruction: 'Buatlah ucapan ulang tahun dengan menghitung umur tahun depan menggunakan f-string!',
      code: `nama = "Gia"
umur_sekarang = 17
print(f"Selamat bertambah usia, {nama}!")
print(f"Tahun depan kamu bakal genap berusia {umur_sekarang + 1} tahun! 🎂✨")`
    },
    quizzes: [
      {
        id: 'fstr-q1',
        question: 'Bagaimana sintaks f-string yang benar di Python?',
        options: ['format("Halo {nama}")', 'f"Halo {nama}"', 'string(Halo {nama})'],
        answer: 1,
        explanation: 'F-string ditandai dengan huruf f tepat sebelum tanda kutip pembuka string.'
      },
      {
        id: 'fstr-q2',
        question: 'Apa fungsi format :.2f di dalam kurung kurawal f-string?',
        options: ['Mengubah teks menjadi huruf kapital', 'Menampilkan angka dengan 2 angka di belakang koma desimal', 'Membagi angka dengan 2'],
        answer: 1,
        explanation: 'Format :.2f menentukan presisi floating point menjadi tepat 2 angka desimal.'
      },
      {
        id: 'fstr-q3',
        question: 'Apa tipe data hasil dari operasi str(4500)?',
        options: ['int', 'float', 'str'],
        answer: 2,
        explanation: 'Fungsi str() mengonversi nilai apapun menjadi tipe data string (teks).'
      }
    ],
    takeaways: [
      'Gunakan f-string untuk menyusun teks dan variabel secara ringkas dan bersih.',
      'Gunakan <code>int()</code>, <code>float()</code>, dan <code>str()</code> untuk mengubah tipe data.',
      'Gunakan format <code>:,</code> untuk pemisah ribuan dan <code>:.2f</code> untuk desimal.'
    ]
  }
];

