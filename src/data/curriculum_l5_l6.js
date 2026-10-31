// Level 5 and Level 6 Lessons for PyPink Academy
export const lessonsL5L6 = [
  // ==========================================
  // LEVEL 5: Fungsi & modul
  // ==========================================
  {
    slug: 'fungsi',
    title: 'Fungsi: Resep Masakan Andalanmu',
    level: 5,
    levelName: 'Fungsi & modul',
    duration: 9,
    difficulty: 'Gampang',
    description: 'Membungkus langkah kerja ke dalam satu nama resep agar bisa dipanggil berkali-kali tanpa lelah.',
    icon: 'fa-mortar-pestle',
    pipiTip: 'Fungsi itu kayak tombol blender: kamu masukkan buah (parameter), tekan tombol, lalu keluar jus segar (return)!',
    funFact: 'Kata kunci "def" di Python adalah kependekan dari "define" (mendefinisikan fungsi).',
    analogy: {
      title: 'Buku resep kue tart andalan',
      paragraphs: [
        'Bayangkan kamu punya resep rahasia membuat pancake terenak di dunia. Ada 7 langkah: pecahkan telur, tuang susu, aduk tepung, panaskan wajan, dan seterusnya.',
        'Kalau setiap kali ada teman yang minta pancake kamu harus menulis ulang 7 langkah itu di kertas baru, tanganmu pasti pegal! Jauh lebih praktis kalau kamu beri nama resep itu: <code>bikin_pancake()</code>. Kapanpun mau, tinggal panggil namanya!'
      ]
    },
    concept: {
      title: 'Anatomi Sebuah Fungsi di Python',
      lead: 'Bagaimana membuat dan menggunakan fungsi buatanmu sendiri.',
      points: [
        '<strong>def nama_fungsi(parameter):</strong> Mendeklarasikan resep fungsi baru.',
        '<strong>Parameter vs Argumen:</strong> Parameter adalah variabel penampung di dalam definisi fungsi; argumen adalah nilai nyata yang dikirim saat fungsi dipanggil.',
        '<strong>return:</strong> Mengirimkan hasil olahan fungsi kembali ke pemanggil. Tanpa return, fungsi akan mengembalikan <code>None</code>.',
        '<strong>Default Argument:</strong> Menentukan nilai cadangan jika pengguna tidak mengirimkan argumen tertentu.'
      ]
    },
    codeExample: {
      filename: 'dapur_resep.py',
      code: `# Mendefinisikan fungsi peracik minuman
def racik_boba(rasa, porsi=1, manis="sedang"):
    """Fungsi untuk menghitung dan menyiapkan pesanan boba."""
    pesan = f"{porsi} gelas Boba {rasa} (manis: {manis})"
    return f"Siap disajikan: {pesan} 🧋"

# Memanggil fungsi dengan berbagai cara
pesanan_1 = racik_boba("Matcha")  # memakai nilai default porsi & manis
pesanan_2 = racik_boba("Taro", porsi=2, manis="less sugar")

print(pesanan_1)
print(pesanan_2)`,
      highlight: [2, 5, 8, 9],
      explanations: [
        'Baris 2: mendefinisikan fungsi dengan parameter default <code>porsi=1</code> dan <code>manis="sedang"</code>.',
        'Baris 5: <code>return</code> mengembalikan string hasil olahan ke tempat fungsi dipanggil.',
        'Baris 8: pemanggilan hanya mengirim rasa <code>"Matcha"</code>, sisanya memakai nilai bawaan default.',
        'Baris 9: pemanggilan memakai keyword argument yang sangat jelas dibaca.'
      ]
    },
    trap: {
      title: 'Awas Jebakan: Lupa Menggunakan return',
      text: 'Banyak pemula mengira <code>print()</code> di dalam fungsi itu sama dengan <code>return</code>. Kalau kamu menulis <code>total = hitung_harga()</code> padahal fungsinya hanya berisi print tanpa return, maka variabel <code>total</code> akan bernilai <code>None</code> dan tidak bisa dipakai berhitung lagi!'
    },
    practice: {
      instruction: 'Buat fungsi hitung_diskon yang menerima harga dan persen diskon, lalu kembalikan harga akhirnya!',
      code: `def hitung_diskon(harga, persen=10):
    potongan = harga * (persen / 100)
    return harga - potongan

total = hitung_diskon(50000, 20)
print(f"Harga setelah diskon: Rp{total:,.0f} ✨")`
    },
    quizzes: [
      {
        id: 'func-q1',
        question: 'Kata kunci apa yang digunakan untuk mendefinisikan fungsi di Python?',
        options: ['function', 'def', 'create'],
        answer: 1,
        explanation: 'Di Python, pembuatan fungsi selalu diawali dengan kata kunci "def".'
      },
      {
        id: 'func-q2',
        question: 'Apa nilai kembalian dari fungsi yang tidak memiliki pernyataan return?',
        options: ['0', 'False', 'None'],
        answer: 2,
        explanation: 'Jika sebuah fungsi selesai dieksekusi tanpa menemui return, Python otomatis mengembalikan nilai None.'
      },
      {
        id: 'func-q3',
        question: 'Apa fungsi dari default parameter pada "def sapa(nama=\'Teman\'):"?',
        options: ['Memaksa pengguna mengetik nama', 'Menyediakan nilai cadangan jika pemanggil tidak mengirim argumen nama', 'Menghapus nama yang dikirim'],
        answer: 1,
        explanation: 'Default argument bertindak sebagai nilai pengganti jika argumen tidak diisi saat pemanggilan.'
      }
    ],
    takeaways: [
      'Bungkus blok kode yang sering digunakan ke dalam fungsi dengan kata kunci <code>def</code>.',
      'Gunakan <code>return</code> untuk mengirimkan hasil perhitungan keluar dari fungsi.',
      'Manfaatkan default parameter untuk membuat fungsi lebih fleksibel digunakan.'
    ]
  },

  {
    slug: 'fungsi-lanjutan',
    title: 'Parameter, Scope, *args, & **kwargs',
    level: 5,
    levelName: 'Fungsi & modul',
    duration: 9,
    difficulty: 'Menantang',
    description: 'Menerima topping tak terbatas dengan *args dan **kwargs, serta memahami batas wilayah variabel.',
    icon: 'fa-boxes-packing',
    pipiTip: '*args itu untuk daftar topping ekstra, sedangkan **kwargs untuk catatan khusus pesanan!',
    funFact: 'Tanda bintang satu (*) membungkus argumen menjadi tuple, sedangkan tanda bintang ganda (**) membungkusnya jadi dictionary!',
    analogy: {
      title: 'Prasmanan topping es krim dan kamar pribadi',
      paragraphs: [
        'Pernah ke kedai es krim yang membebaskanmu memilih topping sesukamu? Ada yang mau 1 topping, ada yang mau 5 topping. Pelayan memakai wadah fleksibel bernama <code>*args</code> untuk menampung semuanya.',
        'Lalu apa itu <strong>Scope</strong>? Bayangkan kamarmu sendiri (variabel lokal): barang-barang di kamarmu hanya bisa kamu lihat. Berbeda dengan lampu taman kompleks perumahan (variabel global) yang bisa dilihat oleh seluruh warga!'
      ]
    },
    concept: {
      title: 'Fleksibilitas Argumen & Batas Wilayah Scope',
      lead: 'Mekanisme lanjutan untuk merancang fungsi sekelas pustaka profesional.',
      points: [
        '<strong>*args:</strong> Menampung sejumlah argumen posisi tambahan ke dalam bentuk <code>tuple</code>.',
        '<strong>**kwargs:</strong> Menampung sejumlah argumen bernama (keyword) tambahan ke dalam bentuk <code>dict</code>.',
        '<strong>Local Scope:</strong> Variabel yang dibuat di dalam fungsi hanya hidup selama fungsi tersebut berjalan.',
        '<strong>Global Scope:</strong> Variabel yang dibuat di tingkat utama file dan bisa dibaca dari mana saja.'
      ]
    },
    codeExample: {
      filename: 'pesanan_custom.py',
      code: `# Toko kue dengan pesanan serba bebas
toko_aktif = True  # Variabel global

def racik_dessert(nama_dasar, *toppings, **catatan_khusus):
    """Menerima topping berapapun dan catatan tambahan apapun."""
    print(f"\\n🍰 Menu: {nama_dasar}")
    if toppings:
        print(f"Topping tambahan ({len(toppings)}): {', '.join(toppings)}")
    if catatan_khusus:
        print("Catatan dapur:")
        for kunci, nilai in catatan_khusus.items():
            print(f"  - {kunci}: {nilai}")

racik_dessert("Waffle Matcha", "Keju", "Cokelat Crunch", "Almond", meja=7, takeaway=True)`,
      highlight: [4, 7, 9, 14],
      explanations: [
        '<code>*toppings</code>: mengumpulkan <code>"Keju"</code>, <code>"Cokelat Crunch"</code>, dan <code>"Almond"</code> ke dalam satu tuple.',
        '<code>**catatan_khusus</code>: menangkap <code>meja=7</code> dan <code>takeaway=True</code> menjadi dictionary.',
        'Fungsi ini sangat luwes dan tidak akan pernah error meskipun jumlah topping berubah-ubah.'
      ]
    },
    trap: {
      title: 'Awas Jebakan: Mengubah Variabel Global Sembarangan',
      text: 'Meskipun fungsi bisa membaca variabel global, mencoba mengubah nilainya di dalam fungsi tanpa deklarasi kata kunci <code>global</code> akan memicu pembuatan variabel lokal baru dengan nama yang sama, atau bahkan error <code>UnboundLocalError</code>!'
    },
    practice: {
      instruction: 'Buat fungsi hitung_total_harga yang menjumlahkan semua angka yang dimasukkan ke *harga!',
      code: `def hitung_total(*daftar_harga):
    return sum(daftar_harga)

total_jajan = hitung_total(15000, 22000, 8000, 10000)
print(f"Total belanjaan hari ini: Rp{total_jajan:,} 🛍️")`
    },
    quizzes: [
      {
        id: 'scope-q1',
        question: 'Tipe data apakah yang dihasilkan dari parameter *args di dalam fungsi?',
        options: ['List', 'Tuple', 'Dictionary'],
        answer: 1,
        explanation: 'Python otomatis mengemas semua argumen posisi berlebih dari *args menjadi sebuah Tuple.'
      },
      {
        id: 'scope-q2',
        question: 'Tipe data apakah yang dihasilkan dari parameter **kwargs di dalam fungsi?',
        options: ['Set', 'String', 'Dictionary'],
        answer: 2,
        explanation: 'Parameter bertanda bintang ganda **kwargs mengemas argumen bernama menjadi Dictionary (key: value).'
      },
      {
        id: 'scope-q3',
        question: 'Di mana variabel yang dibuat di dalam sebuah fungsi bisa diakses?',
        options: ['Hanya di dalam fungsi itu sendiri (local scope)', 'Di seluruh file komputer mana saja', 'Di terminal saja'],
        answer: 0,
        explanation: 'Variabel yang dibuat di dalam fungsi memiliki scope lokal dan akan terhapus dari memori saat fungsi selesai.'
      }
    ],
    takeaways: [
      'Gunakan <code>*args</code> untuk menangkap argumen posisi fleksibel sebagai tuple.',
      'Gunakan <code>**kwargs</code> untuk menangkap argumen bernama sebagai dictionary.',
      'Variabel lokal terlindungi di dalam fungsinya dan tidak mencemari variabel global.'
    ]
  },

  {
    slug: 'lambda-stdlib-modul',
    title: 'Lambda & Library Standar Python',
    level: 5,
    levelName: 'Fungsi & modul',
    duration: 9,
    difficulty: 'Lumayan',
    description: 'Fungsi kilat satu baris dan menjelajahi gudang senjata bawaan: math, random, dan datetime.',
    icon: 'fa-box-open',
    pipiTip: 'Modul standar Python itu kayak gudang harta karun: gratis dan sudah terpasang tanpa perlu download apapun!',
    funFact: 'Filosofi Python dikenal dengan semboyan "Batteries Included", artinya fitur-fitur penting sudah lengkap tersedia sejak pertama diinstal!',
    analogy: {
      title: 'Kotak peralatan tukang serba ada',
      paragraphs: [
        'Bayangkan kamu baru beli rumah baru dan di garasinya sudah ada satu kotak perkakas super lengkap: ada meteran ukur (<code>math</code>), ada dadu undian berhadiah (<code>random</code>), dan ada jam dinding kalender (<code>datetime</code>).',
        'Kamu nggak perlu membuat meteran atau jam sendiri dari kayu dan kawat. Cukup buka kotaknya dengan mantra <code>import</code>, dan alat tersebut langsung siap kamu gunakan!'
      ]
    },
    concept: {
      title: 'Tiga Modul Primadona & Fungsi Kilat Lambda',
      lead: 'Alat-alat wajib yang membuat kodemu berdaya tinggi secara instan.',
      points: [
        '<strong>Lambda (Fungsi Anonim):</strong> <code>lambda parameter: ekspresi</code> untuk fungsi mungil satu baris tanpa nama.',
        '<strong>Modul math:</strong> Menyediakan perhitungan canggih seperti akar kuadrat (<code>math.sqrt</code>) dan pembulatan ke atas (<code>math.ceil</code>).',
        '<strong>Modul random:</strong> Menghasilkan undian acak (<code>random.choice</code>, <code>random.randint</code>).',
        '<strong>Modul datetime:</strong> Mengambil tanggal dan waktu saat ini (<code>datetime.date.today()</code>).'
      ]
    },
    codeExample: {
      filename: 'gudang_ajaib.py',
      code: `import math
import random
from datetime import date

# 1. Lambda: fungsi kilat menghitung PPN 11%
hitung_ppn = lambda harga: harga * 0.11
print(f"PPN Rp50.000: Rp{hitung_ppn(50000):,.0f}")

# 2. Random: undian camilan keberuntungan
menu = ["Mochi Stroberi 🍓", "Matcha Latte 🍵", "Boba Brown Sugar 🧋"]
pilihan_pipi = random.choice(menu)
print(f"Camilan keberuntunganmu hari ini: {pilihan_pipi}")

# 3. Datetime: mencetak tanggal hari ini
hari_ini = date.today()
print(f"Tanggal transaksi: {hari_ini.strftime('%d-%m-%Y')} ✨")`,
      highlight: [1, 2, 3, 6, 11, 16],
      explanations: [
        'Baris 1-3: mengimpor modul bawaan <code>math</code>, <code>random</code>, dan <code>datetime</code>.',
        'Baris 6: fungsi lambda singkat tanpa perlu sintaks <code>def</code> yang panjang.',
        'Baris 11: <code>random.choice()</code> memilih salah satu elemen secara acak dan adil.',
        'Baris 16: <code>.strftime(\'%d-%m-%Y\')</code> memformat tanggal menjadi gaya Indonesia (tanggal-bulan-tahun).'
      ]
    },
    trap: {
      title: 'Awas Jebakan: Menamai File Sendiri Sama dengan Nama Modul',
      text: 'Jangan pernah menamai file kodingmu dengan nama <code>random.py</code> atau <code>math.py</code>! Jika kamu melakukannya, saat kamu menulis <code>import random</code>, Python akan mengimpor filemu sendiri yang kosong dan memicu <code>AttributeError</code>.'
    },
    practice: {
      instruction: 'Buat dadu angka acak 1 sampai 6 menggunakan modul random!',
      code: `import random
angka_dadu = random.randint(1, 6)
print(f"Dadu Pipi berputar dan menghasilkan angka: {angka_dadu} 🎲")`
    },
    quizzes: [
      {
        id: 'stdlib-q1',
        question: 'Bagaimana sintaks pembuatan fungsi anonim (lambda) di Python?',
        options: ['def lambda(x): return x * 2', 'lambda x: x * 2', 'x => x * 2'],
        answer: 1,
        explanation: 'Di Python, fungsi lambda ditulis dengan sintaks: lambda parameter: ekspresi.'
      },
      {
        id: 'stdlib-q2',
        question: 'Fungsi dari modul random apa yang paling tepat untuk memilih 1 pemenang dari daftar nama di list?',
        options: ['random.randint()', 'random.choice()', 'random.sample_one()'],
        answer: 1,
        explanation: 'random.choice(koleksi) secara otomatis memilih satu elemen acak dari sebuah sequence/list.'
      },
      {
        id: 'stdlib-q3',
        question: 'Mengapa Python sering dijuluki bahasa yang memiliki filosofi "Batteries Included"?',
        options: ['Karena hemat baterai laptop', 'Karena pustaka standarnya (standard library) sangat lengkap dan siap pakai', 'Karena bisa mengisi daya HP'],
        answer: 1,
        explanation: 'Istilah ini mengacu pada kelengkapan modul standar bawaan Python yang sudah sangat kaya fungsi sejak awal diinstal.'
      }
    ],
    takeaways: [
      'Gunakan <code>lambda</code> untuk fungsi mini satu kali pakai.',
      'Manfaatkan modul bawaan seperti <code>math</code>, <code>random</code>, dan <code>datetime</code>.',
      'Hindari menamai file kodingmu sendiri sama persis dengan nama modul standar.'
    ]
  },

  {
    slug: 'modul',
    title: 'Modul & Import Mandiri',
    level: 5,
    levelName: 'Fungsi & modul',
    duration: 8,
    difficulty: 'Gampang',
    description: 'Memecah kode panjang menjadi beberapa file rapi yang bisa saling bekerja sama.',
    icon: 'fa-puzzle-piece',
    pipiTip: 'File Python berekstensi .py yang kamu simpan bisa langsung diimpor ke file lain layaknya modul pro!',
    funFact: 'Variabel rahasia __name__ bernilai "__main__" jika file dijalankan langsung, dan berisi nama file jika sedang diimpor!',
    analogy: {
      title: 'Kotak makeup terpisah per kategori',
      paragraphs: [
        'Kalau kamu menyimpan lipstik, eyeshadow, kuas, skincare, dan parfum semuanya dicampur di satu kantong plastik kresek, kamu pasti stres saat mencari lip balm.',
        'Jauh lebih rapi kalau kamu punya kotak terpisah: satu kotak untuk kuas, satu untuk bibir. Di Python, file terpisah ini disebut <strong>modul</strong>. Program utamamu tinggal meminjam fungsi dari modul yang tepat saat dibutuhkan!'
      ]
    },
    concept: {
      title: 'Cara Mengatur File Modular di Proyekmu',
      lead: 'Langkah memecah proyek besar menjadi bagian-bagian yang mudah dirawat.',
      points: [
        '<strong>import nama_file:</strong> Mengimpor seluruh isi file modul ke dalam file saat ini.',
        '<strong>from nama_file import fungsi:</strong> Mengimpor bagian tertentu saja agar bisa dipanggil langsung namanya.',
        '<strong>as (Alias):</strong> Memberi nama panggilan pendek agar tidak pegal mengetik (misal <code>import math as m</code>).',
        '<strong>if __name__ == "__main__":</strong> Blok kode penjaga yang hanya berjalan jika file tersebut dieksekusi langsung, bukan diimpor.'
      ]
    },
    codeExample: {
      filename: 'kalkulator_diskon.py',
      code: `# File: kalkulator_diskon.py (modul pembantu)
def hitung_harga_akhir(harga, diskon_persen=10):
    """Menghitung harga setelah dipotong diskon."""
    potongan = harga * (diskon_persen / 100)
    return harga - potongan

# File: main.py (program utama yang mengimpor modul di atas)
# from kalkulator_diskon import hitung_harga_akhir as diskon

harga_baju = 150000
tagihan = hitung_harga_akhir(harga_baju, diskon_persen=25)
print(f"Harga baju diskon: Rp{tagihan:,.0f} 👗✨")`,
      highlight: [2, 11, 12],
      explanations: [
        'Baris 2-5: fungsi diletakkan di file terpisah agar bisa dipakai berulang kali di berbagai program.',
        'Baris 9: contoh pemanggilan modul dengan alias <code>as diskon</code>.',
        'Membuat kode proyek jadi modular, rapi, dan mudah didebug saat ada kesalahan.'
      ]
    },
    trap: {
      title: 'Awas Jebakan: Modul Berada di Folder yang Salah',
      text: 'Jika kamu mengimpor file buatanmu sendiri, pastikan file tersebut berada di folder yang sama (satu direktori) dengan file utama yang memanggilnya, atau berada di dalam folder package yang memiliki file <code>__init__.py</code>.'
    },
    practice: {
      instruction: 'Ubah fungsi di bawah seolah-olah kamu mengimpor modul sapaan khusus dari Pipi!',
      code: `def sapa_teman(nama):
    return f"Hai {nama}, Pipi senang kamu belajar sampai Level 5! 💖"

print(sapa_teman("Zahra"))`
    },
    quizzes: [
      {
        id: 'mod-q1',
        question: 'Bagaimana cara mengimpor hanya fungsi "sqrt" dari modul "math"?',
        options: ['import sqrt from math', 'from math import sqrt', 'take sqrt from math'],
        answer: 1,
        explanation: 'Sintaks resmi Python untuk mengambil komponen spesifik adalah: from modul import komponen.'
      },
      {
        id: 'mod-q2',
        question: 'Apa fungsi kata kunci "as" saat melakukan impor?',
        options: ['Untuk mengubah kode menjadi bahasa asing', 'Memberi nama alias atau nama panggilan pengganti', 'Menghapus modul asli'],
        answer: 1,
        explanation: 'Kata kunci "as" digunakan untuk aliasing (misal import datetime as dt).'
      },
      {
        id: 'mod-q3',
        question: 'Apa nilai dari variabel bawaan __name__ jika file dijalankan langsung oleh pengguna?',
        options: ['"__main__"', '"run"', '"true"'],
        answer: 0,
        explanation: 'Jika file dieksekusi secara langsung, Python memberi nilai string "__main__" ke variabel spesial __name__.'
      }
    ],
    takeaways: [
      'Pecah kode panjang menjadi beberapa file modul berekstensi <code>.py</code>.',
      'Gunakan <code>from ... import ...</code> untuk mengimpor fungsi spesifik.',
      'Gunakan <code>if __name__ == "__main__":</code> untuk melindungi kode uji coba modul.'
    ]
  },

  // ==========================================
  // LEVEL 6: Lebih serius
  // ==========================================
  {
    slug: 'file-dan-error',
    title: 'File Handling & Exception Handling',
    level: 6,
    levelName: 'Lebih serius',
    duration: 10,
    difficulty: 'Lumayan',
    description: 'Menyimpan catatan abadi ke dalam file teks dan menangani error tak terduga dengan sabar.',
    icon: 'fa-shield-heart',
    pipiTip: 'Selalu pakai "with open(...)" saat buka file: pintunya otomatis ditutup rapat walau listrik tiba-tiba padam!',
    funFact: 'Parameter encoding="utf-8" sangat penting agar teks dengan huruf non-latin dan emoji tidak menjadi tulisan aneh!',
    analogy: {
      title: 'Buku harian rahasia dan payung saat badai',
      paragraphs: [
        'Selama ini, semua variabel yang kita buat hilang saat program dimatikan (seperti tulisan di papan tulis yang dihapus). Menyimpan ke <strong>file</strong> itu seperti menulis di buku harian berhalaman kertas: tulisannya tetap ada besok pagi!',
        'Sedangkan <strong>try-except</strong> itu seperti sedia payung sebelum hujan. Kamu tahu bisa saja ada badai (file hilang, pengguna salah ketik), jadi kamu siapkan tindakan darurat agar acaramu tidak bubar berantakan.'
      ]
    },
    concept: {
      title: 'Membaca File & Menjinakkan Crash Program',
      lead: 'Dua pilar utama untuk membuat aplikasi yang kokoh dan tahan banting.',
      points: [
        '<strong>Context Manager with open():</strong> Membuka file dan otomatis menutupnya kembali setelah blok selesai.',
        '<strong>Mode File:</strong> <code>"r"</code> (read/baca), <code>"w"</code> (write/tulis ulang dari awal), <code>"a"</code> (append/tambah di baris akhir).',
        '<strong>try:</strong> Blok kode yang kita curigai berpotensi memicu error.',
        '<strong>except JenisError:</strong> Aksi penyelamatan jika error tersebut benar-benar terjadi.',
        '<strong>finally:</strong> Blok pembersihan yang selalu dijalankan apapun yang terjadi.'
      ]
    },
    codeExample: {
      filename: 'buku_harian.py',
      code: `# Menulis dan membaca catatan harian secara aman
nama_file = "catatan_jajan.txt"

# Menulis catatan baru
try:
    with open(nama_file, "w", encoding="utf-8") as f:
        f.write("Beli Mochi Strawberry 🍓 - Rp15.000\\n")
        f.write("Beli Es Kopi Susu ☕ - Rp18.000\\n")
    print("Catatan berhasil tersimpan di file! 📝")

    # Membaca kembali isi catatan
    with open(nama_file, "r", encoding="utf-8") as f:
        isi = f.read()
    print("\\nIsi Catatan:")
    print(isi)

except OSError as error:
    print(f"Gagal memproses file: {error}")
finally:
    print("Pipi selesai merapikan buku harian ✨")`,
      highlight: [6, 12, 17, 19],
      explanations: [
        'Baris 6: <code>with open(..., "w")</code> membuka file dalam mode tulis dan menjamin file tertutup otomatis.',
        '<code>encoding="utf-8"</code> memastikan karakter khusus dan emoji tersimpan sempurna tanpa rusak.',
        'Baris 12: mode <code>"r"</code> membuka file untuk membaca seluruh isinya dengan <code>f.read()</code>.',
        'Baris 17: menangani kemungkinan kegagalan akses sistem file tanpa membuat program langsung mati/crash.'
      ]
    },
    trap: {
      title: 'Awas Jebakan: Mode "w" Menghapus Seluruh Isi File Lama',
      text: 'Hati-hati! Mode <code>"w"</code> akan menimpa dan MENGHAPUS bersih seluruh isi file lama jika file tersebut sudah ada sebelumnya. Jika kamu hanya ingin menambah baris baru di bagian bawah, gunakan mode append <code>"a"</code>!'
    },
    practice: {
      instruction: 'Gunakan try-except untuk menangkap error pembagian dengan angka 0!',
      code: `try:
    total_uang = 50000
    jumlah_orang = 0
    bagian = total_uang / jumlah_orang
    print(f"Bagian per orang: Rp{bagian}")
except ZeroDivisionError:
    print("Ups, tidak bisa membagi uang kepada 0 orang! 😅")`
    },
    quizzes: [
      {
        id: 'file-q1',
        question: 'Mengapa penggunaan "with open(...)" sangat dianjurkan dibanding open() biasa?',
        options: ['Karena membuat file otomatis terenkripsi', 'Karena otomatis menutup file setelah selesai meskipun terjadi error', 'Supaya ukuran file lebih kecil'],
        answer: 1,
        explanation: 'Context manager "with" menjamin file descriptor selalu ditutup kembali dengan aman tanpa kebocoran resource.'
      },
      {
        id: 'file-q2',
        question: 'Mode file apa yang digunakan untuk menambah teks baru di ujung file tanpa menghapus teks lama?',
        options: ['"r"', '"w"', '"a"'],
        answer: 2,
        explanation: 'Mode "a" (append) menambahkan data baru di bagian akhir file tanpa menimpa data yang sudah ada.'
      },
      {
        id: 'file-q3',
        question: 'Kapan blok "finally:" di dalam struktur try-except akan dijalankan?',
        options: ['Hanya jika terjadi error', 'Hanya jika tidak ada error', 'Selalu dijalankan dalam kondisi apapun'],
        answer: 2,
        explanation: 'Blok finally dijamin selalu dieksekusi, baik saat blok try berhasil maupun saat memicu exception.'
      }
    ],
    takeaways: [
      'Gunakan selalu <code>with open(..., encoding="utf-8")</code> saat membaca/menulis file.',
      'Mode <code>"w"</code> menimpa file lama, sedangkan mode <code>"a"</code> menambah baris baru.',
      'Gunakan <code>try-except</code> untuk menangani error tak terduga secara elegan.'
    ]
  },

  {
    slug: 'oop',
    title: 'Pemrograman Berorientasi Objek (OOP)',
    level: 6,
    levelName: 'Lebih serius',
    duration: 10,
    difficulty: 'Menantang',
    description: 'Menciptakan dunia dengan Class dan Object: cetakan kue, sifat kucing, dan hubungan keluarga.',
    icon: 'fa-shapes',
    pipiTip: 'Class itu cetakan kue martabak; sedangkan objek (object) adalah kue martabak nyata yang matang dari cetakan itu!',
    funFact: 'Di Python, hampir segalanya sebenarnya adalah sebuah objek: angka, teks, bahkan fungsi!',
    analogy: {
      title: 'Cetakan kue waffle dan kucing peliharaan nyata',
      paragraphs: [
        'Bayangkan kamu punya cetakan waffle berbentuk hati (ini adalah <strong>Class</strong>). Cetakan ini punya pola dasar: ada telinga, ada hidung, dan ada rasa.',
        'Saat kamu menuang adonan cokelat, jadi kue waffle bernama "Mochi". Saat menuang adonan matcha, jadi kue waffle bernama "Boba". Keduanya adalah <strong>Object</strong> nyata yang berasal dari satu cetakan yang sama, tapi punya sifat rasa dan warna yang unik!'
      ]
    },
    concept: {
      title: 'Empat Pilar Penting OOP di Python',
      lead: 'Cara programmer profesional memodelkan benda nyata ke dalam kode.',
      points: [
        '<strong>Class & Object:</strong> Class adalah cetakan biru (blueprint); Object adalah contoh nyata (instance) dari class tersebut.',
        '<strong>__init__ (Constructor):</strong> Metode khusus yang otomatis bekerja saat objek baru pertama kali dilahirkan.',
        '<strong>self:</strong> Penunjuk diri sendiri, menghubungkan variabel ke objek spesifik yang bersangkutan.',
        '<strong>Inheritance (Pewarisan):</strong> Mewariskan sifat dari class induk (hewan) ke class anak (kucing).'
      ]
    },
    codeExample: {
      filename: 'dunia_kucing.py',
      code: `# Class Induk: Hewan Peliharaan Umum
class HewanPeliharaan:
    def __init__(self, nama, umur):
        self.nama = nama
        self.umur = umur

    def info(self):
        return f"{self.nama} ({self.umur} tahun)"

# Class Anak (Inheritance): Kucing mewarisi HewanPeliharaan
class Kucing(HewanPeliharaan):
    def __init__(self, nama, umur, ras):
        super().__init__(nama, umur)  # panggil constructor induk
        self.ras = ras

    def bersuara(self):
        return f"{self.nama} bilang: Meooong! 🐾"

# Menciptakan objek kucing nyata
kucing_1 = Kucing("Mochi", 2, "British Shorthair")
print(kucing_1.info())
print(kucing_1.bersuara())`,
      highlight: [2, 3, 10, 11, 19],
      explanations: [
        'Baris 2: mendefinisikan class <code>HewanPeliharaan</code> dengan atribut <code>nama</code> dan <code>umur</code>.',
        'Baris 10: <code>class Kucing(HewanPeliharaan)</code> mewarisi seluruh kemampuan class induknya.',
        'Baris 12: <code>super().__init__(nama, umur)</code> mengoper data ke class induk secara elegan.',
        'Baris 19: melahirkan objek nyata <code>kucing_1</code> bertipe <code>Kucing</code>.'
      ]
    },
    trap: {
      title: 'Awas Jebakan: Lupa Menuliskan self di Parameter Pertama Method',
      text: 'Di Python, setiap method fungsi di dalam class WAJIB menyertakan <code>self</code> sebagai parameter pertamanya: <code>def bersuara(self):</code>. Jika kamu lupa menulis <code>self</code>, Python akan memicu <code>TypeError: takes 0 positional arguments but 1 was given</code>!'
    },
    practice: {
      instruction: 'Buat objek kucing baru bernama "Luna" yang berumur 1 tahun dan panggil suaranya!',
      code: `class KucingSederhana:
    def __init__(self, nama):
        self.nama = nama
    def sapa(self):
        return f"Meong, aku {self.nama} si kucing gemas! 🐱"

kucing_pipi = KucingSederhana("Luna")
print(kucing_pipi.sapa())`
    },
    quizzes: [
      {
        id: 'oop-q1',
        question: 'Apa fungsi utama dari method khusus __init__ di sebuah Class Python?',
        options: ['Menghapus objek dari memori', 'Menginisialisasi nilai awal saat objek baru pertama kali dibuat', 'Menghubungkan class ke internet'],
        answer: 1,
        explanation: '__init__ adalah constructor yang otomatis dijalankan saat sebuah instance objek baru diciptakan.'
      },
      {
        id: 'oop-q2',
        question: 'Apa arti dari parameter pertama "self" pada sebuah method class?',
        options: ['Menunjuk ke instance objek itu sendiri yang sedang diproses', 'Nama pencipta bahasa Python', 'Menandakan bahwa fungsi bersifat rahasia'],
        answer: 0,
        explanation: 'self mewakili objek itu sendiri sehingga method bisa mengakses dan memodifikasi atribut miliknya.'
      },
      {
        id: 'oop-q3',
        question: 'Konsep di mana sebuah class anak mewarisi method dan atribut dari class induk disebut apa?',
        options: ['Polymorphism', 'Inheritance (Pewarisan)', 'Encapsulation'],
        answer: 1,
        explanation: 'Inheritance memungkinkan class turunan mewarisi seluruh sifat dan perilaku dari class induknya.'
      }
    ],
    takeaways: [
      'Class adalah cetakan biru; Object adalah benda nyata hasil cetakan.',
      'Gunakan <code>__init__(self)</code> untuk mengatur nilai awal atribut objek.',
      'Manfaatkan pewarisan (inheritance) agar tidak perlu mengulang-ulang kode yang sama.'
    ]
  },

  {
    slug: 'venv-pip-dokumentasi',
    title: 'Virtual Environment, pip, & Membaca Docs',
    level: 6,
    levelName: 'Lebih serius',
    duration: 8,
    difficulty: 'Gampang',
    description: 'Menjaga kebersihan kamar ngoding dengan venv dan trik memasang pustaka dari seluruh dunia.',
    icon: 'fa-folder-tree',
    pipiTip: 'Satu proyek satu venv! Jangan campur aduk pustaka proyek website dengan proyek game ya.',
    funFact: 'PyPI (Python Package Index) menyimpan lebih dari 500.000 paket pustaka open-source gratis untukmu!',
    analogy: {
      title: 'Kamar kos terpisah dan toko swalayan pip',
      paragraphs: [
        'Bayangkan kamu punya dua hobi: merajut benang wol dan melukis cat minyak. Kalau kamu menaruh cat minyak di atas tumpukan wol rajutanmu, benangmu bakal kotor dan rusak!',
        'Virtual Environment (venv) itu seperti menyewa dua lemari terpisah: lemari Proyek A khusus cat, lemari Proyek B khusus benang. Lalu <code>pip</code> itu adalah kurir online yang mengantarkan paket barang apapun yang kamu pesan ke lemarimu!'
      ]
    },
    concept: {
      title: 'Tiga Kunci Kedewasaan Programmer Python',
      lead: 'Standar baku industri dalam mengelola dependensi proyek.',
      points: [
        '<strong>Membuat Venv:</strong> Jalankan perintah <code>python -m venv .venv</code> di folder proyekmu.',
        '<strong>Mengaktifkan Venv:</strong> Di Windows jalankan <code>.venv\\Scripts\\activate</code>, di Mac/Linux <code>source .venv/bin/activate</code>.',
        '<strong>pip install nama_paket:</strong> Memasang pustaka dari PyPI (misal: <code>pip install requests</code>).',
        '<strong>Membaca Dokumentasi:</strong> Buka situs resmi pustaka, baca bagian "Quickstart" pertama kali untuk contoh kode siap pakai.'
      ]
    },
    codeExample: {
      filename: 'perintah_terminal.sh',
      code: `# Langkah-langkah standar menyiapkan proyek Python profesional:

# 1. Buat lingkungan virtual baru bernama .venv
python -m venv .venv

# 2. Aktifkan venv tersebut di Windows:
.venv\\Scripts\\activate

# 3. Pasang paket pendukung, misalnya requests untuk internet
pip install requests

# 4. Simpan daftar belanjaan paket ke file teks
pip freeze > requirements.txt`,
      highlight: [4, 7, 10, 13],
      explanations: [
        'Baris 4 membuat folder terisolasi <code>.venv</code> yang menyimpan salinan Python mandiri.',
        'Baris 7 mengaktifkan lingkungan terisolasi tersebut (terminal akan memunculkan tanda <code>(.venv)</code>).',
        'Baris 10 mengunduh pustaka secara lokal di dalam folder proyek saja tanpa mengotori sistem laptopmu.',
        'Baris 13 mencatat versi paket agar teman timmu bisa menginstalnya dengan sekali klik.'
      ]
    },
    trap: {
      title: 'Awas Jebakan: Mengunggah Folder .venv ke Git / GitHub',
      text: 'Folder <code>.venv</code> ukurannya sangat besar dan berisi file biner khusus komputermu. Jangan pernah mengunggahnya ke GitHub! Cukup unggah file <code>requirements.txt</code>, dan biarkan temanmu membuat venv mereka sendiri.'
    },
    practice: {
      instruction: 'Bayangkan kamu mengaktifkan venv dan melihat versi pip di terminal komputermu!',
      code: `import sys
print(f"Alamat Python yang aktif saat ini:")
print(sys.executable)
print("Jika alamatnya mengarah ke folder .venv, selamat venv-mu aktif! 🌿")`
    },
    quizzes: [
      {
        id: 'venv-q1',
        question: 'Apa tujuan utama membuat Virtual Environment (venv) untuk setiap proyek?',
        options: ['Supaya baterai laptop tidak cepat habis', 'Mengisolasi pustaka dan versi paket agar tidak bertabrakan antar proyek', 'Mempercantik warna teks di VS Code'],
        answer: 1,
        explanation: 'Venv mencegah konflik versi paket antara proyek yang berbeda di komputer yang sama.'
      },
      {
        id: 'venv-q2',
        question: 'Perintah apa yang digunakan untuk memasang paket eksternal dari PyPI?',
        options: ['python download nama_paket', 'pip install nama_paket', 'get package nama_paket'],
        answer: 1,
        explanation: 'pip adalah package manager resmi Python; perintah untuk mengunduh adalah "pip install".'
      },
      {
        id: 'venv-q3',
        question: 'File apa yang biasanya digunakan untuk mencatat seluruh daftar pustaka proyek beserta versinya?',
        options: ['requirements.txt', 'daftar_belanja.docx', 'packages.json'],
        answer: 0,
        explanation: 'requirements.txt adalah nama file konvensi standar untuk mencatat dependensi proyek Python.'
      }
    ],
    takeaways: [
      'Selalu buat <code>venv</code> baru untuk setiap proyek ngoding baru.',
      'Gunakan <code>pip install</code> untuk memasang paket dari PyPI.',
      'Simpan dependensi di <code>requirements.txt</code> dan abaikan folder .venv di git.'
    ]
  },

  {
    slug: 'testing-venv',
    title: 'Pengujian Kode & Menjamin Program Sehat',
    level: 6,
    levelName: 'Lebih serius',
    duration: 9,
    difficulty: 'Lumayan',
    description: 'Menulis dokter pribadi untuk kodemu: menguji fitur otomatis agar bebas rasa cemas saat rilis.',
    icon: 'fa-vial-circle-check',
    pipiTip: 'Ngoding tanpa testing itu kayak jalan di atas tali tanpa jaring pengaman. Pakai test, hati jadi tenang!',
    funFact: 'Praktik menulis tes sebelum menulis fitur aslinya disebut TDD (Test-Driven Development)!',
    analogy: {
      title: 'Tester rasa di pabrik cokelat',
      paragraphs: [
        'Sebelum satu truk cokelat dikirim ke supermarket, selalu ada petugas pencicip yang menguji: apakah manisnya pas? Apakah bentuknya utuh? Apakah bungkusnya rapat?',
        'Di dunia software, kamu tidak perlu mencicipi setiap tombol secara manual setiap hari. Kamu bisa menulis instruksi uji otomatis (unit test) yang mengecek ratusan fitur hanya dalam 1 detik!'
      ]
    },
    concept: {
      title: 'Kekuatan Kata Kunci assert & Prinsip Testing',
      lead: 'Bagaimana membuktikan bahwa fungsimu benar-benar bekerja sesuai janji.',
      points: [
        '<strong>assert kondisi, "pesan":</strong> Mengecek apakah suatu kondisi bernilai True. Jika salah, Python otomatis melempar AssertionError.',
        '<strong>Unit Test:</strong> Pengujian pada unit terkecil kode (biasanya satu buah fungsi spesifik).',
        '<strong>Kasus Normal vs Kasus Ekstrem:</strong> Uji input wajar (misal harga 10000) dan input ekstrem (harga 0, harga minus, angka desimal).'
      ]
    },
    codeExample: {
      filename: 'cek_kualitas.py',
      code: `# Fungsi yang ingin kita uji kualitasnya
def hitung_ongkir(berat_kg, jarak_km):
    if berat_kg <= 0 or jarak_km <= 0:
        return 0
    return 10000 + (jarak_km * 2000)

# Uji coba otomatis dengan assert
print("Memulai pemeriksaan kualitas...")

assert hitung_ongkir(1, 5) == 20000, "Uji jarak 5km harusnya Rp20.000"
assert hitung_ongkir(0, 5) == 0,     "Berat 0 harusnya gratis ongkir"
assert hitung_ongkir(2, 10) == 30000, "Uji jarak 10km harusnya Rp30.000"

print("✅ Semua tes lolos! Fungsi ongkir sehat walafiat.")`,
      highlight: [2, 10, 11, 12],
      explanations: [
        'Baris 2: fungsi yang bertugas menghitung biaya pengiriman paket.',
        'Baris 10: <code>assert hitung_ongkir(1, 5) == 20000</code> membuktikan fungsi bekerja akurat.',
        'Jika suatu saat ada teman kelompokmu yang tak sengaja merusak rumus, perintah assert akan langsung berteriak memberi peringatan!'
      ]
    },
    trap: {
      title: 'Awas Jebakan: Menguji Hanya Kasus Sukses',
      text: 'Kesalahan paling sering adalah hanya mengetes saat pengguna memasukkan data yang benar. Jangan lupa uji juga saat pengguna memasukkan angka 0 atau angka negatif agar aplikasimu tidak kebingungan!'
    },
    practice: {
      instruction: 'Tulis assert sederhana untuk memeriksa apakah fungsi kuadrat menghasilkan angka yang benar!',
      code: `def kuadrat(x):
    return x * x

assert kuadrat(4) == 16, "Harusnya 4 kuadrat adalah 16"
assert kuadrat(5) == 25, "Harusnya 5 kuadrat adalah 25"
print("Tes kuadrat berhasil 100%! ⭐")`
    },
    quizzes: [
      {
        id: 'test-q1',
        question: 'Apa yang terjadi jika pernyataan assert di Python menerima kondisi yang bernilai False?',
        options: ['Program tetap berjalan santai', 'Python memicu AssertionError dan menghentikan eksekusi', 'Laptop otomatis mati'],
        answer: 1,
        explanation: 'Pernyataan assert akan memicu AssertionError jika ekspresi yang diuji bernilai False.'
      },
      {
        id: 'test-q2',
        question: 'Apa sebutan untuk pengujian yang fokus pada satu fungsi kecil secara terisolasi?',
        options: ['Unit Testing', 'Mega Testing', 'System Crashing'],
        answer: 0,
        explanation: 'Unit testing adalah pengujian komponen terkecil dari perangkat lunak (biasanya sebuah fungsi).'
      },
      {
        id: 'test-q3',
        question: 'Kapan waktu terbaik menjalankan kumpulan tes kodemu?',
        options: ['Hanya saat malam tahun baru', 'Setiap kali kamu selesai membuat atau mengubah fitur kode', 'Cukup sekali seumur hidup'],
        answer: 1,
        explanation: 'Menjalankan tes secara berkala memastikan perubahan kode baru tidak merusak fitur-fitur lama (mencegah regresi).'
      }
    ],
    takeaways: [
      'Gunakan <code>assert</code> untuk pengujian cepat kebenaran logika fungsi.',
      'Uji kasus normal, batas ekstrem, dan potensi masukan tidak wajar.',
      'Testing otomatis memberi rasa percaya diri tinggi saat ingin merilis kodemu.'
    ]
  }
];

