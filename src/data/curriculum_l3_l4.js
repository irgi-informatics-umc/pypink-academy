// Level 3 and Level 4 Lessons for PyPink Academy
export const lessonsL3L4 = [
  // ==========================================
  // LEVEL 3: Alur program
  // ==========================================
  {
    slug: 'percabangan',
    title: 'Percabangan if, elif, dan else',
    level: 3,
    levelName: 'Alur program',
    duration: 8,
    difficulty: 'Gampang',
    description: 'Mengajarkan program mengambil keputusan bijak seperti memilih outfit sesuai cuaca.',
    icon: 'fa-code-branch',
    pipiTip: 'Indentasi (spasi menjorok ke dalam) di Python itu hukumnya wajib, persis seperti tata krama!',
    funFact: 'Python menggunakan 4 spasi sebagai standar indentasi resmi PEP 8, bukan tombol tab acak.',
    analogy: {
      title: 'Memilih minuman di kafe sesuai cuaca',
      paragraphs: [
        'Bayangkan kamu berdiri di depan pintu kafe. Kalau di luar hujan deras (if), kamu pesan cokelat panas. Tapi kalau cuacanya panas terik (elif), kamu pesan es matcha boba. Kalau cuacanya mendung biasa (else), kamu pesan air mineral saja.',
        'Itulah percabangan! Komputer mengevaluasi kondisi satu per satu dari atas ke bawah, dan hanya menjalankan blok kode yang syaratnya terpenuhi.'
      ]
    },
    concept: {
      title: 'Struktur Logika Pengambilan Keputusan',
      lead: 'Bagaimana Python membaca dan memilih jalan instruksi.',
      points: [
        '<strong>if kondisi:</strong> Syarat utama yang pertama kali dicek. Wajib diakhiri tanda titik dua (<code>:</code>).',
        '<strong>elif kondisi:</strong> Singkatan dari "else if", dipakai jika syarat sebelumnya salah tapi kamu punya syarat alternatif lain.',
        '<strong>else:</strong> Penampung terakhir jika SEMUA syarat di atas tidak ada yang cocok.',
        '<strong>Indentasi:</strong> Baris di bawah titik dua harus menjorok 4 spasi untuk menandai bahwa ia adalah bagian dari blok keputusan tersebut.'
      ]
    },
    codeExample: {
      filename: 'pilih_outfit.py',
      code: `cuaca = "hujan"
suhu_derajat = 21

if cuaca == "hujan" and suhu_derajat < 24:
    outfit = "Sweater rajut lilac + payung transparan 🌂"
elif cuaca == "panas":
    outfit = "Kaos katun adem + topi bucket 👒"
else:
    outfit = "Cardigan santai 🌸"

print(f"Rekomendasi Pipi hari ini: {outfit}")`,
      highlight: [4, 6, 8],
      explanations: [
        'Baris 4: mengecek dua syarat sekaligus menggunakan operator <code>and</code>.',
        'Karena kondisi baris 4 benar (True), Python menjalankan baris 5 dan langsung melompati baris 6-9.',
        'Perhatikan spasi di baris 5, 7, dan 9: itu adalah indentasi blok kode.'
      ]
    },
    trap: {
      title: 'Awas Jebakan: Lupa Titik Dua (:) & Indentasi Tabur',
      text: 'Kesalahan paling sering pemula adalah lupa mengetik titik dua <code>:</code> di ujung baris <code>if</code>, atau mencampur spasi dan tombol Tab. Gunakan selalu 4 spasi murni ya!'
    },
    practice: {
      instruction: 'Ubah nilai nilai_ujian di bawah dan periksa grade yang diberikan Pipi!',
      code: `nilai_ujian = 88

if nilai_ujian >= 90:
    grade = "A+ (Luar biasa pintarnya! ⭐)"
elif nilai_ujian >= 75:
    grade = "B (Keren banget, pertahankan! 💖)"
else:
    grade = "C (Tetap semangat, Pipi temani belajar lagi! 🍵)"

print(f"Hasil belajarmu: {grade}")`
    },
    quizzes: [
      {
        id: 'cabang-q1',
        question: 'Tanda baca apa yang wajib ada di akhir baris pernyataan if di Python?',
        options: ['Titik koma (;)', 'Titik dua (:)', 'Kurung kurawal ({})'],
        answer: 1,
        explanation: 'Di Python, setiap pembuka blok kode seperti if, elif, else wajib diakhiri tanda titik dua (:).'
      },
      {
        id: 'cabang-q2',
        question: 'Berapa jumlah spasi standar untuk indentasi blok kode di Python menurut PEP 8?',
        options: ['2 spasi', '4 spasi', '8 spasi'],
        answer: 1,
        explanation: 'Standar resmi Python PEP 8 merekomendasikan tepat 4 spasi untuk setiap level indentasi.'
      },
      {
        id: 'cabang-q3',
        question: 'Kapan blok di dalam "else:" akan dieksekusi?',
        options: ['Selalu dieksekusi setiap saat', 'Hanya jika semua kondisi if dan elif sebelumnya bernilai False', 'Hanya jika kondisi if bernilai True'],
        answer: 1,
        explanation: 'Blok else adalah jalan keluar cadangan yang hanya dijalankan ketika tidak ada satupun syarat if/elif yang terpenuhi.'
      }
    ],
    takeaways: [
      'Gunakan <code>if</code>, <code>elif</code>, dan <code>else</code> untuk alur logika keputusan.',
      'Selalu beri tanda titik dua <code>:</code> di akhir baris syarat.',
      'Gunakan indentasi 4 spasi konsisten untuk menandai isi blok instruksi.'
    ]
  },

  {
    slug: 'perulangan',
    title: 'Perulangan for dan while',
    level: 3,
    levelName: 'Alur program',
    duration: 9,
    difficulty: 'Gampang',
    description: 'Menyerahkan tugas membosankan yang berulang ke komputer tanpa rasa lelah.',
    icon: 'fa-rotate',
    pipiTip: 'Loop itu kayak memutar lagu favorit di playlist: kamu tahu kapan lagu dimulai dan kapan selesai!',
    funFact: 'Perulangan while yang lupa diberi kondisi berhenti disebut "infinite loop" alias loop abadi!',
    analogy: {
      title: 'Menyuap sereal dan memutar playlist lagu',
      paragraphs: [
        'Ada dua jenis perulangan dalam hidup: pertama, saat kamu memutar 5 lagu favorit di album K-pop (kamu tahu persis jumlah lagunya ada 5) — ini seperti <code>for loop</code>.',
        'Kedua, saat kamu menyuap semangkuk sereal: kamu terus menyuap <em>selama</em> mangkuk masih ada isinya. Begitu mangkuk kosong, kamu berhenti — ini persis seperti <code>while loop</code>!'
      ]
    },
    concept: {
      title: 'Dua Gaya Perulangan di Python',
      lead: 'Pilih perulangan yang paling cocok dengan situasimu.',
      points: [
        '<strong>for item in koleksi:</strong> Dipakai saat kamu ingin mengulang setiap anggota dari suatu daftar atau urutan tertentu.',
        '<strong>while kondisi:</strong> Dipakai saat kamu ingin terus mengulang instruksi <em>selama</em> suatu kondisi masih bernilai <code>True</code>.',
        '<strong>Variabel Counter:</strong> Pada while loop, pastikan ada nilai yang bertambah agar kondisi akhirnya bisa menjadi <code>False</code>.'
      ]
    },
    codeExample: {
      filename: 'putar_lagu.py',
      code: `# Contoh 1: for loop menjelajahi playlist
playlist = ["Ditto 🎧", "Cupid 💘", "Super Shy ✨"]
print("Daftar putar lagu favorit:")
for nomor, lagu in enumerate(playlist, start=1):
    print(f"{nomor}. Memutar {lagu}")

# Contoh 2: while loop menyendok boba
sisa_boba = 3
print("\\nMenikmati minuman boba:")
while sisa_boba > 0:
    print(f"Slurrp! Masih ada {sisa_boba} butir boba 🧋")
    sisa_boba -= 1  # kurangi 1 setiap sedotan

print("Habis! Segar banget~")`,
      highlight: [4, 5, 11, 13],
      explanations: [
        '<code>for nomor, lagu in enumerate(playlist, start=1)</code>: memudahkan kita mendapat nomor urut dan nama lagunya sekaligus.',
        'Baris 11: <code>while sisa_boba &gt; 0</code> memeriksa apakah sisa boba masih lebih dari 0.',
        'Baris 13: <code>sisa_boba -= 1</code> sangat krusial agar loop tidak berjalan selamanya.'
      ]
    },
    trap: {
      title: 'Awas Jebakan: Infinite Loop (Perulangan Abadi)',
      text: 'Jika kamu menulis <code>while sisa_boba &gt; 0:</code> tapi lupa mengurangi nilainya (<code>sisa_boba -= 1</code>), nilainya akan selalu 3 dan programmu akan berputar terus tanpa henti sampai komputer terasa panas! Tekan <code>Ctrl + C</code> di terminal untuk menghentikannya.'
    },
    practice: {
      instruction: 'Jalankan countdown peluncuran roket Pipi dengan perulangan while!',
      code: `hitung_mundur = 5
while hitung_mundur > 0:
    print(f"{hitung_mundur}...")
    hitung_mundur -= 1
print("Meluncur ke luar angkasa! 🚀✨")`
    },
    quizzes: [
      {
        id: 'loop-q1',
        question: 'Kapan sebaiknya kita memilih "for loop" daripada "while loop"?',
        options: ['Saat kita ingin loop berjalan selamanya', 'Saat kita sudah tahu pasti data atau jumlah perulangan yang ingin dijalani', 'Hanya saat program error'],
        answer: 1,
        explanation: 'For loop sangat ideal jika kita memiliki urutan data tertentu (seperti list atau range angka).'
      },
      {
        id: 'loop-q2',
        question: 'Apa akibat jika kondisi pada while loop tidak pernah bernilai False?',
        options: ['Program otomatis menghapus dirinya sendiri', 'Terjadi infinite loop yang tidak pernah berhenti', 'Laptop langsung restart'],
        answer: 1,
        explanation: 'Tanpa kondisi yang berubah menjadi False, while loop akan berputar selamanya (infinite loop).'
      },
      {
        id: 'loop-q3',
        question: 'Apa arti dari perintah sisa -= 1?',
        options: ['Sama dengan sisa = sisa - 1', 'Membuat nilai sisa jadi minus 1', 'Menghapus variabel sisa'],
        answer: 0,
        explanation: 'Operator penugasan -= 1 adalah cara singkat untuk mengurangi nilai variabel sebanyak 1.'
      }
    ],
    takeaways: [
      'Gunakan <code>for</code> untuk mengulang elemen dalam daftar/koleksi.',
      'Gunakan <code>while</code> saat ingin mengulang berdasarkan kondisi logika.',
      'Jangan lupa perbarui variabel kontrol di while loop agar terhindar dari infinite loop.'
    ]
  },

  {
    slug: 'range-kontrol-loop',
    title: 'range, break, continue, & pass',
    level: 3,
    levelName: 'Alur program',
    duration: 8,
    difficulty: 'Lumayan',
    description: 'Mengendalikan putaran loop dengan presisi: melompat, berhenti darurat, atau menitip tempat.',
    icon: 'fa-forward-step',
    pipiTip: 'Ingat rumus range(stop): angka akhirnya selalu eksklusif (tidak diikutsertakan)! Jadi range(5) cuma sampai 4.',
    funFact: 'Kata kunci "pass" sering dipakai programmer saat merancang kerangka kode yang belum sempat ditulis isinya!',
    analogy: {
      title: 'Tombol kendali remote pemutar musik',
      paragraphs: [
        'Saat mendengarkan lagu, kadang ada lagu yang ingin kamu lewati (tombol Next / <code>continue</code>). Kadang ada telepon darurat masuk sehingga kamu langsung menghentikan lagu seketika (tombol Stop / <code>break</code>).',
        'Lalu bagaimana dengan <code>pass</code>? Bayangkan kamu menempel stiker memo kosong "nanti diisi": tempatnya sudah disiapkan, tapi belum ada isinya supaya Python tidak marah saat memeriksa syntax.'
      ]
    },
    concept: {
      title: 'Peralatan Kendali Perulangan',
      lead: 'Empat alat kendali yang membuat kodemu jauh lebih lincah.',
      points: [
        '<strong>range(start, stop, step):</strong> Menghasilkan deret angka. Ingat, angka <code>stop</code> tidak diikutkan!',
        '<strong>break:</strong> Menghentikan perulangan saat itu juga dan langsung keluar dari loop.',
        '<strong>continue:</strong> Mengabaikan sisa baris di iterasi saat ini dan langsung melompat ke iterasi berikutnya.',
        '<strong>pass:</strong> Pernyataan hampa (placeholder) agar blok kode kosong tidak menyebabkan SyntaxError.'
      ]
    },
    codeExample: {
      filename: 'kendali_lagu.py',
      code: `# Contoh kombinasi range, continue, dan break
print("Memindai 6 lagu di radio:")

for i in range(1, 7):  # angka 1 sampai 6
    if i == 3:
        print(f"Lagu ke-{i} kena copyright, lewati! (continue) ⏩")
        continue  # lompat langsung ke lagu berikutnya
    
    if i == 5:
        print(f"Baterai habis di lagu ke-{i}! Hentikan! (break) 🛑")
        break     # berhenti total keluar dari loop
        
    print(f"Sedang memutar lagu ke-{i} 🎵")`,
      highlight: [4, 6, 8, 10, 12],
      explanations: [
        '<code>range(1, 7)</code> menghasilkan angka: 1, 2, 3, 4, 5, 6.',
        'Saat <code>i == 3</code>, perintah <code>continue</code> membuat print baris 14 tidak dijalankan untuk lagu ke-3.',
        'Saat <code>i == 5</code>, perintah <code>break</code> langsung memutus loop sehingga lagu ke-6 tidak pernah diperiksa.'
      ]
    },
    trap: {
      title: 'Awas Jebakan: Mengira range(1, 5) Menghasilkan Angka 5',
      text: 'Batas akhir pada <code>range(awal, akhir)</code> selalu berhenti satu langkah sebelum angka akhir. <code>range(1, 5)</code> hanya menghasilkan angka <code>1, 2, 3, 4</code>. Jika ingin angka 5 ikut serta, tuliskan <code>range(1, 6)</code>!'
    },
    practice: {
      instruction: 'Cetak angka genap dari 2 sampai 10 menggunakan range dengan langkah (step) 2!',
      code: `print("Deret angka genap lucu:")
for angka in range(2, 11, 2):
    print(f"Angka: {angka} 🌸")`
    },
    quizzes: [
      {
        id: 'range-q1',
        question: 'Berapa banyak angka yang dihasilkan oleh ekspresi range(4)?',
        options: ['3 angka (1, 2, 3)', '4 angka (0, 1, 2, 3)', '5 angka (0, 1, 2, 3, 4)'],
        answer: 1,
        explanation: 'range(4) menghasilkan 4 nilai dimulai dari 0: yaitu 0, 1, 2, dan 3.'
      },
      {
        id: 'range-q2',
        question: 'Apa yang terjadi ketika interpreter Python menemui perintah break di dalam loop?',
        options: ['Program berhenti dan keluar dari perulangan seketika', 'Loop melompat ke putaran berikutnya', 'Loop mengulang dari awal'],
        answer: 0,
        explanation: 'Perintah break langsung menghentikan eksekusi perulangan dan melanjutkan ke kode di luar loop.'
      },
      {
        id: 'range-q3',
        question: 'Kapan kata kunci "pass" sangat berguna digunakan?',
        options: ['Untuk mencetak password ke layar', 'Sebagai placeholder sementara pada fungsi atau blok yang belum ditulis isinya', 'Untuk mempercepat jalannya program'],
        answer: 1,
        explanation: 'pass adalah instruksi kosong (no-op) agar Python tidak error saat kita belum mengisi badan fungsi/loop.'
      }
    ],
    takeaways: [
      '<code>range(start, stop, step)</code> memiliki batas akhir yang eksklusif (tidak diikutkan).',
      'Gunakan <code>break</code> untuk berhenti seketika, dan <code>continue</code> untuk melompati satu putaran.',
      'Gunakan <code>pass</code> sebagai penanda tempat sementara di blok kode kosong.'
    ]
  },

  {
    slug: 'nested-loop-pola',
    title: 'Nested Loop & Pola Logika',
    level: 3,
    levelName: 'Alur program',
    duration: 9,
    difficulty: 'Lumayan',
    description: 'Menyusun perulangan di dalam perulangan untuk mencetak bentuk bintang dan tabel cantik.',
    icon: 'fa-cubes-stacked',
    pipiTip: 'Pikirkan nested loop kayak jam dinding: jarum menit harus berputar 60 kali dulu baru jarum jam bergeser 1 kali!',
    funFact: 'Nested loop sering dipakai dalam pembuatan game 2D untuk membaca koordinat peta baris (Y) dan kolom (X)!',
    analogy: {
      title: 'Kotak cokelat praline bertingkat',
      paragraphs: [
        'Bayangkan kamu punya kotak hadiah berisi cokelat praline. Kotak itu memiliki 3 baris (lantai), dan di setiap baris terdapat 4 butir cokelat dengan aneka rasa.',
        'Untuk memakan semua cokelat dengan tertib, kamu mulai dari Baris 1: ambil cokelat ke-1, ke-2, ke-3, ke-4. Baru setelah itu kamu pindah ke Baris 2. Inilah konsep <strong>nested loop</strong> (loop luar mengatur baris, loop dalam mengatur kolom)!'
      ]
    },
    concept: {
      title: 'Loop Luar vs Loop Dalam',
      lead: 'Bagaimana perulangan bersarang berinteraksi satu sama lain.',
      points: [
        '<strong>Outer Loop (Loop Luar):</strong> Berjalan lambat, menentukan perpindahan baris.',
        '<strong>Inner Loop (Loop Dalam):</strong> Berjalan cepat sampai tuntas untuk setiap SATU kali putaran loop luar.',
        '<strong>Pola Visual:</strong> Sangat melatih insting logika programmer untuk memanipulasi koordinat dua dimensi.',
        '<strong>print(..., end=""):</strong> Jangan lupa gunakan parameter end kosong agar karakter dicetak menyamping dalam satu baris.'
      ]
    },
    codeExample: {
      filename: 'pola_bintang.py',
      code: `# Mencetak segitiga bintang kawaii
tinggi = 4

print("Piramida Bintang Cantik:")
for baris in range(1, tinggi + 1):
    # Cetak bintang sebanyak nomor baris saat ini
    for kolom in range(baris):
        print("⭐", end=" ")
    print()  # ganti baris baru setelah loop kolom selesai`,
      highlight: [5, 7, 8, 9],
      explanations: [
        'Baris 5: loop luar mengatur baris ke-1 sampai ke-4.',
        'Baris 7: loop dalam berjalan sebanyak nilai <code>baris</code> saat itu.',
        'Baris 8: <code>end=" "</code> mencetak bintang berdampingan tanpa pindah baris.',
        'Baris 9: <code>print()</code> kosong dipanggil untuk membuat baris baru setelah semua bintang di baris itu tercetak.'
      ]
    },
    trap: {
      title: 'Awas Jebakan: Lupa print() untuk Ganti Baris',
      text: 'Jika kamu lupa menulis <code>print()</code> di akhir loop luar, semua bintang dari semua baris akan tercetak memanjang ke samping seperti satu garis panjang tak berujung!'
    },
    practice: {
      instruction: 'Cetak tabel perkalian mini (1 sampai 3) menggunakan nested loop!',
      code: `for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i}x{j}={i*j}", end="\\t")
    print()`
    },
    quizzes: [
      {
        id: 'nested-q1',
        question: 'Jika loop luar berputar 3 kali dan loop dalam berputar 4 kali, berapa kali isi loop dalam dieksekusi?',
        options: ['7 kali', '12 kali', '4 kali'],
        answer: 1,
        explanation: 'Total perulangan adalah perkalian keduanya: 3 x 4 = 12 kali.'
      },
      {
        id: 'nested-q2',
        question: 'Bagaimana cara mencetak karakter tanpa otomatis berganti baris baru di Python?',
        options: ['print("teks", newline=False)', 'print("teks", end="")', 'print_inline("teks")'],
        answer: 1,
        explanation: 'Parameter end="" menimpa karakter bawaan baris baru (\\n) menjadi teks kosong.'
      },
      {
        id: 'nested-q3',
        question: 'Dalam analogi jam dinding, manakah yang bertindak sebagai inner loop (loop dalam)?',
        options: ['Jarum jam', 'Jarum menit', 'Baterai jam'],
        answer: 1,
        explanation: 'Jarum menit berputar penuh berkali-kali sebelum jarum jam bergeser 1 kali, persis perilaku inner loop.'
      }
    ],
    takeaways: [
      'Nested loop adalah perulangan yang diletakkan di dalam perulangan lain.',
      'Loop luar mengatur baris horizontal, loop dalam mengatur item kolom.',
      'Gunakan <code>print(end="")</code> dan <code>print()</code> kosong untuk mengatur tata letak.'
    ]
  },

  // ==========================================
  // LEVEL 4: Struktur data
  // ==========================================
  {
    slug: 'string',
    title: 'Mengolah Teks dengan String',
    level: 4,
    levelName: 'Struktur data',
    duration: 8,
    difficulty: 'Gampang',
    description: 'Memotong, merapikan, dan menyulap tulisan teks dengan jurus-jurus string method bawaan.',
    icon: 'fa-font',
    pipiTip: 'Indeks di Python selalu dimulai dari angka 0! Karakter pertama ada di posisi 0, bukan 1.',
    funFact: 'String di Python bersifat "immutable", artinya teks aslinya tidak bisa diubah langsung, melainkan menghasilkan teks baru yang diperbarui!',
    analogy: {
      title: 'Koleksi gelang manik-manik berhuruf',
      paragraphs: [
        'Bayangkan kamu punya gelang manik-manik bertuliskan "P-I-P-I". Setiap butir manik punya nomor urut: manik pertama nomor 0, manik kedua nomor 1, dan seterusnya.',
        'Kamu bisa memilih memotong mengambil 2 butir saja, mengganti manik yang kotor jadi berkilau, atau membersihkan debu di ujung tali. Di Python, semua sulap teks ini sudah disediakan lewat <em>string method</em>!'
      ]
    },
    concept: {
      title: 'Metode Ajaib Pengolah Teks',
      lead: 'Fungsi-fungsi siap pakai untuk merapikan ketikan teks pengguna.',
      points: [
        '<strong>Indexing:</strong> <code>teks[0]</code> mengambil huruf pertama. <code>teks[-1]</code> mengambil huruf paling akhir.',
        '<strong>Merapikan Spasi:</strong> <code>teks.strip()</code> menghapus spasi liar di awal dan akhir ketikan.',
        '<strong>Huruf Besar/Kecil:</strong> <code>.lower()</code>, <code>.upper()</code>, dan <code>.title()</code> untuk kapitalisasi rapi.',
        '<strong>Pencarian & Penggantian:</strong> <code>.replace("lama", "baru")</code> dan <code>"kata" in teks</code> untuk cek keberadaan teks.'
      ]
    },
    codeExample: {
      filename: 'salon_teks.py',
      code: `# Teks jajan yang masih berantakan ketikannya
raw_input = "   kopi susu gula aren DINGIN   "

# Merapikan teks dengan method berantai
bersih = raw_input.strip()            # buang spasi ujung
rapi = bersih.title()                 # Kopi Susu Gula Aren Dingin
menu_baru = rapi.replace("Dingin", "Hangat ☕")

print(f"Asli : '{raw_input}'")
print(f"Rapi : '{rapi}'")
print(f"Ganti: '{menu_baru}'")
print(f"Huruf pertama: {rapi[0]} | Huruf terakhir: {rapi[-1]}")`,
      highlight: [5, 6, 7, 12],
      explanations: [
        '<code>.strip()</code> menghilangkan spasi tak sengaja yang sering diketik pengguna di keyboard HP.',
        '<code>.title()</code> membuat setiap awal kata berhuruf kapital estetik.',
        '<code>.replace("Dingin", "Hangat ☕")</code> menukar kata tertentu dengan kata baru.',
        '<code>rapi[-1]</code> adalah trik manis Python untuk mengambil huruf paling ujung kanan.'
      ]
    },
    trap: {
      title: 'Awas Jebakan: Mengira .upper() Mengubah Variabel Asli',
      text: 'Karena string itu <em>immutable</em>, memanggil <code>nama.upper()</code> sendirian tidak akan mengubah variabel <code>nama</code>. Kamu harus menampung hasilnya kembali: <code>nama = nama.upper()</code>!'
    },
    practice: {
      instruction: 'Ubah kalimat ini agar huruf awalnya kapital semua dan spasi berlebihnya hilang!',
      code: `judul = "  belajar python bareng pipi si ular imut  "
judul_rapi = judul.strip().title()
print(f"Hasil: {judul_rapi} ✨")`
    },
    quizzes: [
      {
        id: 'str-q1',
        question: 'Berapa indeks untuk mengambil huruf pertama dari sebuah string di Python?',
        options: ['1', '0', '-1'],
        answer: 1,
        explanation: 'Indeks urutan di Python menganut sistem zero-based indexing (dimulai dari angka 0).'
      },
      {
        id: 'str-q2',
        question: 'Method apa yang digunakan untuk membuang spasi di awal dan akhir teks?',
        options: ['.clean()', '.strip()', '.delete_space()'],
        answer: 1,
        explanation: 'Method .strip() secara khusus menghapus whitespace di sisi kiri dan kanan string.'
      },
      {
        id: 'str-q3',
        question: 'Apa hasil dari ekspresi "pipi"[-1]?',
        options: ['"p"', '"i"', 'Error karena angka minus'],
        answer: 1,
        explanation: 'Indeks negatif -1 mengarah pada elemen terakhir string "pipi", yaitu huruf "i".'
      }
    ],
    takeaways: [
      'Indeks string dimulai dari 0 untuk huruf pertama dan -1 untuk huruf terakhir.',
      'Gunakan <code>.strip()</code>, <code>.lower()</code>, dan <code>.title()</code> untuk merapikan teks.',
      'String bersifat immutable; method menghasilkan teks baru tanpa mengubah teks aslinya.'
    ]
  },

  {
    slug: 'list-dan-dict',
    title: 'List dan Dictionary',
    level: 4,
    levelName: 'Struktur data',
    duration: 9,
    difficulty: 'Gampang',
    description: 'Menata koleksi barang: rak sepatu berurutan (list) dan buku telepon berlabel (dictionary).',
    icon: 'fa-table-list',
    pipiTip: 'List pakai kurung siku [ ], sedangkan dictionary pakai kurung kurawal { } dengan pasangan key: value!',
    funFact: 'Di Python 3.7 ke atas, urutan penyimpanan kunci pada dictionary dijamin tetap terjaga sesuai waktu dimasukkan!',
    analogy: {
      title: 'Kotak pensil warna dan lemari berkas berlabel',
      paragraphs: [
        '<strong>List</strong> itu seperti kotak pensil warna: spidol pink di urutan ke-0, spidol mint di urutan ke-1. Posisinya ditentukan oleh nomor urut angka.',
        'Sedangkan <strong>Dictionary</strong> itu seperti buku menu kafe atau kartu identitas: kamu mencari data bukan berdasarkan nomor urut, melainkan berdasarkan label namanya (misal mencari <code>"harga"</code> atau <code>"topping"</code>).'
      ]
    },
    concept: {
      title: 'Dua Struktur Data Paling Populer',
      lead: 'Hampir semua aplikasi di dunia memanfaatkan list dan dictionary untuk menyimpan data pengguna.',
      points: [
        '<strong>List (Daftar Berurutan):</strong> Dibuat dengan <code>[]</code>. Bisa ditambah dengan <code>.append()</code> dan dihapus dengan <code>.remove()</code>.',
        '<strong>Dictionary (Kamus Key-Value):</strong> Dibuat dengan <code>{}</code> dalam format <code>kunci: nilai</code>.',
        '<strong>Mengakses Data:</strong> List diakses via angka indeks <code>koleksi[0]</code>, Dict diakses via nama kuncinya <code>koleksi["nama"]</code>.'
      ]
    },
    codeExample: {
      filename: 'toko_skincare.py',
      code: `# List: daftar produk skincare di keranjang
keranjang = ["Sunscreen Spf 50", "Lip Balm Peach", "Moisturizer"]
keranjang.append("Sheet Mask Matcha")  # tambah item baru

# Dictionary: detail lengkap satu produk
produk_favorit = {
    "nama": "Lip Balm Peach 🍑",
    "harga": 35000,
    "stok": 12,
    "tersedia": True
}

print(f"Keranjang belanja ({len(keranjang)} item): {keranjang[0]}")
print(f"Produk unggulan : {produk_favorit['nama']}")
print(f"Harga normal    : Rp{produk_favorit['harga']}")`,
      highlight: [2, 3, 6, 13, 14],
      explanations: [
        'Baris 2: membuat list berisi 3 string item.',
        'Baris 3: <code>.append()</code> menyisipkan item baru ke antrean paling belakang.',
        'Baris 6-11: membuat dictionary dengan 4 properti kunci (<code>nama</code>, <code>harga</code>, dll).',
        'Baris 14: mengakses nilai dictionary menggunakan kurung siku dan nama kuncinya <code>produk_favorit[\'harga\']</code>.'
      ]
    },
    trap: {
      title: 'Awas Jebakan: KeyError & IndexError',
      text: 'Jika kamu memanggil indeks list yang melebihi jumlah itemnya (misal indeks ke-10 di list isi 3), akan muncul <code>IndexError</code>. Sedangkan jika memanggil kunci dictionary yang tidak terdaftar, akan muncul <code>KeyError</code>. Gunakan <code>dict.get("kunci", default)</code> untuk akses yang lebih aman!'
    },
    practice: {
      instruction: 'Tambahkan camilan baru ke list dan ubah harga di dictionary berikut!',
      code: `jajan = ["Mochi", "Boba"]
jajan.append("Waffle")

menu = {"nama": "Waffle Cokelat", "harga": 22000}
menu["harga"] = 20000  # beri diskon

print(f"Daftar jajan: {jajan}")
print(f"Harga promo {menu['nama']}: Rp{menu['harga']} ✨")`
    },
    quizzes: [
      {
        id: 'listdict-q1',
        question: 'Tanda kurung apa yang digunakan untuk membuat sebuah list kosong di Python?',
        options: ['( )', '[ ]', '{ }'],
        answer: 1,
        explanation: 'Kurung siku [ ] adalah sintaks resmi pembuatan list di Python.'
      },
      {
        id: 'listdict-q2',
        question: 'Method apa yang digunakan untuk menyisipkan elemen baru ke urutan paling akhir sebuah list?',
        options: ['.insert_last()', '.append()', '.push()'],
        answer: 1,
        explanation: 'Di Python, method bawaan list untuk menambah elemen di akhir adalah .append().'
      },
      {
        id: 'listdict-q3',
        question: 'Bagaimana struktur pasangan data di dalam dictionary?',
        options: ['index -> value', 'key: value', 'item = data'],
        answer: 1,
        explanation: 'Dictionary menyimpan pasangan kunci dan nilai (key: value) yang dipisahkan tanda titik dua.'
      }
    ],
    takeaways: [
      'Gunakan <code>list</code> untuk kumpulan data yang memiliki urutan teratur.',
      'Gunakan <code>dict</code> untuk kumpulan data yang memiliki label atribut jelas.',
      'Akses list dengan nomor urut angka <code>[i]</code> dan dict dengan kunci teks <code>["key"]</code>.'
    ]
  },

  {
    slug: 'tuple-set',
    title: 'Tuple dan Set',
    level: 4,
    levelName: 'Struktur data',
    duration: 8,
    difficulty: 'Lumayan',
    description: 'Wadah paten yang anti-berubah (tuple) dan kantong ajaib anti-duplikat (set).',
    icon: 'fa-layer-group',
    pipiTip: 'Kalau datanya nggak boleh diubah-ubah sama siapa pun (misal koordinat GPS atau tanggal lahir), simpan di Tuple!',
    funFact: 'Set otomatis menyaring dan membuang elemen duplikat secepat kilat berkat mekanisme hash table di dalamnya!',
    analogy: {
      title: 'Plakat terukir permanen dan kantong stiker unik',
      paragraphs: [
        '<strong>Tuple</strong> itu seperti plakat medali kejuaraan yang sudah diukir nama dan tanggal: paten, abadi, dan tidak boleh ada yang mencoret-coret nilainya (<em>immutable</em>).',
        'Sedangkan <strong>Set</strong> itu seperti kolektor stiker pintar: kalau kamu dapat 3 stiker kucing yang gambarnya sama persis, si kolektor cuma menyimpan satu saja di albumnya karena dia anti-duplikat!'
      ]
    },
    concept: {
      title: 'Ciri Khas Tuple dan Set',
      lead: 'Dua wadah spesial dengan kegunaan yang sangat spesifik dan efisien.',
      points: [
        '<strong>Tuple:</strong> Dibuat dengan tanda kurung biasa <code>()</code>. Begitu dibuat, isinya tidak bisa ditambah, dihapus, atau diubah.',
        '<strong>Set:</strong> Dibuat dengan tanda kurung kurawal <code>{}</code> tanpa pasangan titik dua. Setiap nilainya unik tanpa duplikat.',
        '<strong>Operasi Himpunan:</strong> Set mendukung irisan (<code>&amp;</code>), gabungan (<code>|</code>), dan selisih (<code>-</code>).'
      ]
    },
    codeExample: {
      filename: 'wadah_spesial.py',
      code: `# Tuple: ukuran kanvas foto polaroid (lebar, tinggi)
resolusi_polaroid = (1080, 1920)

# Set: daftar stiker yang dikumpulkan (duplikat otomatis dibuang)
stiker_koleksi = {"bintang", "hati", "kucing", "hati", "bintang"}

# Operasi himpunan antar set
stiker_teman = {"kucing", "pelangi", "awan"}
stiker_sama = stiker_koleksi & stiker_teman  # irisan

print(f"Resolusi tetap: {resolusi_polaroid[0]}x{resolusi_polaroid[1]}")
print(f"Stiker unikku : {stiker_koleksi}")
print(f"Stiker kembar kita: {stiker_sama} 💖")`,
      highlight: [2, 5, 9, 12],
      explanations: [
        'Baris 2: <code>resolusi_polaroid</code> adalah tuple yang aman dari perubahan tak sengaja.',
        'Baris 5: kata <code>"hati"</code> dan <code>"bintang"</code> ditulis dua kali, tetapi Python otomatis hanya menyimpannya satu kali.',
        'Baris 9: operator <code>&amp;</code> mencari elemen yang sama-sama dimiliki kedua orang (irisan).'
      ]
    },
    trap: {
      title: 'Awas Jebakan: Tuple Satu Elemen',
      text: 'Jika kamu ingin membuat tuple dengan 1 anggota saja, kamu wajib memberi koma di belakangnya: <code>satu = ("mochi",)</code>. Jika tanpa koma <code>satu = ("mochi")</code>, Python menganggapnya string biasa di dalam kurung matematika!'
    },
    practice: {
      instruction: 'Gunakan set untuk menyaring daftar hobi berikut agar tidak ada yang dobel!',
      code: `daftar_hobi = ["ngoding", "baca komik", "ngoding", "tidur", "baca komik"]
hobi_unik = set(daftar_hobi)
print(f"Daftar hobi tanpa duplikat: {hobi_unik} 🌸")`
    },
    quizzes: [
      {
        id: 'tupleset-q1',
        question: 'Manakah sifat utama dari struktur data Tuple di Python?',
        options: ['Bisa ditambah item baru kapan saja', 'Immutable (tidak dapat diubah isinya)', 'Selalu mengurutkan angka otomatis'],
        answer: 1,
        explanation: 'Tuple bersifat immutable, artinya elemen-elemen di dalamnya tidak bisa dimodifikasi setelah dibuat.'
      },
      {
        id: 'tupleset-q2',
        question: 'Apa hasil dari ekspresi len(set([1, 1, 2, 2, 3]))?',
        options: ['5', '3', '2'],
        answer: 1,
        explanation: 'Set menyaring angka duplikat sehingga menyisakan elemen {1, 2, 3}, yang berjumlah 3 item.'
      },
      {
        id: 'tupleset-q3',
        question: 'Operator apa yang digunakan untuk mencari irisan (elemen yang sama) antara dua Set?',
        options: ['|', '&', '+'],
        answer: 1,
        explanation: 'Operator ampersand (&) digunakan untuk mencari intersection (irisan) antara dua set.'
      }
    ],
    takeaways: [
      'Gunakan <code>tuple ()</code> untuk data permanen yang tidak boleh berubah.',
      'Gunakan <code>set {}</code> untuk menyaring duplikat dan operasi himpunan matematika.',
      'Tuple satu elemen wajib memiliki koma di ujungnya: <code>(nilai,)</code>.'
    ]
  },

  {
    slug: 'comprehension',
    title: 'List Comprehension',
    level: 4,
    levelName: 'Struktur data',
    duration: 8,
    difficulty: 'Lumayan',
    description: 'Menulis perulangan pembuatan list dalam satu baris anggun dan ringkas.',
    icon: 'fa-wand-sparkles',
    pipiTip: 'Rumus cepatnya: [apa_yang_dihasilkan for item in koleksi if syaratnya]!',
    funFact: 'List comprehension sering dieksekusi lebih cepat oleh mesin Python dibanding for-loop manual biasa!',
    analogy: {
      title: 'Mesin pemotong kue cetak otomatis',
      paragraphs: [
        'Cara lama membuat adonan kue: ambil satu per satu, bentuk bulat, lalu masukkan ke loyang (butuh 4-5 baris kode loop).',
        'List comprehension itu seperti mesin cetak otomatis: kamu taruh adonan di satu ujung, atur cetakan bintang, dan dalam sekejap loyang sudah penuh dengan kue berbentuk seragam hanya dengan satu instruksi!'
      ]
    },
    concept: {
      title: 'Menulis Kode Bersih Gaya "Pythonic"',
      lead: 'Teknik khas Python yang membuat kode terasa elegan dan menghemat banyak baris.',
      points: [
        '<strong>Sintaks Dasar:</strong> <code>[ekspresi for item in koleksi]</code>.',
        '<strong>Dengan Filter Syarat:</strong> <code>[ekspresi for item in koleksi if kondisi]</code>.',
        '<strong>Kelebihan:</strong> Menghilangkan kebutuhan membuat list kosong dan memanggil <code>.append()</code> berulang kali.'
      ]
    },
    codeExample: {
      filename: 'promo_jajan.py',
      code: `# Daftar harga jajan asli
daftar_harga = [12000, 25000, 8000, 30000, 15000]

# Cara elegan: beri diskon 20% HANYA untuk makanan di atas Rp10.000
harga_promo = [int(h * 0.8) for h in daftar_harga if h >= 10000]

# Membuat daftar nama camilan bertanda bintang
menu = ["boba", "mochi", "croissant"]
menu_kawaii = [f"⭐ {item.title()}" for item in menu]

print(f"Harga promo: {harga_promo}")
print(f"Menu estetik: {menu_kawaii}")`,
      highlight: [5, 9],
      explanations: [
        'Baris 5: <code>[int(h * 0.8) for h in daftar_harga if h &gt;= 10000]</code> melakukan filtering sekaligus perhitungan harga diskon dalam 1 baris.',
        'Baris 9: mengubah setiap string di list menu menjadi format title dengan emoji bintang.',
        'Hasilnya instan tanpa perlu membuat variabel penampung kosong terlebih dahulu.'
      ]
    },
    trap: {
      title: 'Awas Jebakan: Terlalu Rumit Sampai Sulit Dibaca',
      text: 'Meskipun list comprehension itu keren, jangan menumpuk logika yang terlalu panjang atau beranak-pinak di satu baris. Pedoman Zen of Python berbunyi: <em>"Readability counts"</em> (keterbacaan kode adalah yang utama)!'
    },
    practice: {
      instruction: 'Buatlah list baru yang berisi angka kuadrat dari 1 sampai 5 menggunakan list comprehension!',
      code: `kuadrat = [angka ** 2 for angka in range(1, 6)]
print(f"Angka kuadrat: {kuadrat} ✨")`
    },
    quizzes: [
      {
        id: 'comp-q1',
        question: 'Apa hasil dari ekspresi [x * 2 for x in [1, 2, 3]]?',
        options: ['[1, 2, 3, 1, 2, 3]', '[2, 4, 6]', '[2, 2, 2]'],
        answer: 1,
        explanation: 'Setiap elemen x (1, 2, 3) dikalikan dengan 2 menghasilkan [2, 4, 6].'
      },
      {
        id: 'comp-q2',
        question: 'Di bagian mana kita meletakkan filter syarat pada list comprehension dasar?',
        options: ['Di paling depan sebelum kurung siku', 'Di bagian paling akhir setelah for ... in ...', 'Di dalam tanda kurung kurawal terpisah'],
        answer: 1,
        explanation: 'Klausul filter syarat diletakkan di akhir: [ekspresi for item in list if syarat].'
      },
      {
        id: 'comp-q3',
        question: 'Apa keuntungan utama memakai list comprehension?',
        options: ['Membuat komputer bisa bicara', 'Kode lebih ringkas, mudah dibaca, dan seringkali lebih cepat dieksekusi', 'Otomatis menyimpan kode ke cloud'],
        answer: 1,
        explanation: 'List comprehension membuat pembuatan list baru menjadi deklaratif, singkat, dan berkinerja tinggi.'
      }
    ],
    takeaways: [
      'List comprehension menggantikan pola loop append konvensional.',
      'Bisa dilengkapi filter kondisi dengan menyisipkan klausa <code>if</code> di akhir.',
      'Gunakan secukupnya dan utamakan kode yang tetap nyaman dibaca teman timmu.'
    ]
  },

  {
    slug: 'slicing-sort-search',
    title: 'Slicing, Mengurutkan, & Mencari Data',
    level: 4,
    levelName: 'Struktur data',
    duration: 9,
    difficulty: 'Lumayan',
    description: 'Memotong sepotong kue data, menyusun dari yang termurah, dan melacak keberadaan nilai.',
    icon: 'fa-arrow-down-a-z',
    pipiTip: 'Trik sulap membalik urutan list atau teks di Python: cukup pakai syntax [::-1]!',
    funFact: 'Fungsi sorted() tidak mengubah list aslinya, sedangkan method .sort() mengubah langsung susunan list aslinya di tempat!',
    analogy: {
      title: 'Memotong kue lapis dan menata rak buku',
      paragraphs: [
        'Bayangkan kamu punya kue lapis warna-warni yang panjang. Kamu ingin memotong dan mengambil lapisan dari lapis ke-2 sampai lapis ke-4 saja. Di Python, operasi potong memotong ini disebut <strong>slicing</strong>.',
        'Setelah itu, kamu ingin menata buku komik di rak: diurutkan dari seri awal sampai seri terbaru (sorting), dan mengecek apakah komik edisi spesial ada di rak tersebut (searching).'
      ]
    },
    concept: {
      title: 'Rumus Slicing & Pengurutan',
      lead: 'Manipulasi deret data dengan ekspresi ringkas bawaan Python.',
      points: [
        '<strong>Slicing [start:stop:step]:</strong> Mengambil cuplikan data dari indeks <code>start</code> hingga sebelum <code>stop</code>.',
        '<strong>sorted(koleksi):</strong> Menghasilkan list baru yang sudah terurut rapi.',
        '<strong>koleksi.sort(reverse=True):</strong> Mengurutkan list secara langsung dari nilai terbesar ke terkecil.',
        '<strong>Operator in:</strong> Memeriksa apakah suatu nilai ada di dalam list (contoh: <code>"mochi" in jajan</code>).'
      ]
    },
    codeExample: {
      filename: 'olah_koleksi.py',
      code: `# Daftar playlist lagu santai
lagu = ["Ditto", "OMG", "Hype Boy", "Super Shy", "Cookie"]

# Slicing: ambil 3 lagu pertama
top_tiga = lagu[0:3]

# Membalik urutan dengan langkah mundur -1
terbalik = lagu[::-1]

# Mengurutkan berdasarkan abjad A-Z
lagu_urut = sorted(lagu)

# Mencari keberadaan lagu
ada_ditto = "Ditto" in lagu

print(f"Top 3 : {top_tiga}")
print(f"Dibalik : {terbalik}")
print(f"Abjad : {lagu_urut}")
print(f"Ada lagu Ditto? {ada_ditto} 🎧")`,
      highlight: [5, 8, 11, 14],
      explanations: [
        'Baris 5: <code>lagu[0:3]</code> mengambil indeks 0, 1, dan 2.',
        'Baris 8: <code>[::-1]</code> adalah cara cepat membalik list dari belakang ke depan.',
        'Baris 11: <code>sorted()</code> menyusun data sesuai urutan abjad secara otomatis.',
        'Baris 14: operator <code>in</code> mengembalikan nilai Boolean (True/False).'
      ]
    },
    trap: {
      title: 'Awas Jebakan: Mengira .sort() Mengembalikan List Baru',
      text: 'Method <code>list.sort()</code> mengurutkan data langsung di tempat dan mengembalikan nilai <code>None</code>. Jadi jangan menulis <code>hasil = daftar.sort()</code> karena <code>hasil</code> akan bernilai kosong! Gunakan <code>hasil = sorted(daftar)</code> jika ingin disimpan ke variabel baru.'
    },
    practice: {
      instruction: 'Baliklah kata sandi rahasia berikut menggunakan trik slicing [::-1]!',
      code: `sandi_terbalik = "ipip_gnidogn"
sandi_asli = sandi_terbalik[::-1]
print(f"Kata sandi terbaca: {sandi_asli} 🔑")`
    },
    quizzes: [
      {
        id: 'slice-q1',
        question: 'Apa hasil dari ekspresi [10, 20, 30, 40][1:3]?',
        options: ['[10, 20]', '[20, 30]', '[20, 30, 40]'],
        answer: 1,
        explanation: 'Slicing dari indeks 1 hingga sebelum 3 mengambil elemen indeks 1 (20) dan indeks 2 (30).'
      },
      {
        id: 'slice-q2',
        question: 'Bagaimana cara cepat membalik teks atau list dari belakang ke depan di Python?',
        options: ['[::reverse]', '[::-1]', '[back:front]'],
        answer: 1,
        explanation: 'Slicing dengan langkah -1 ([::-1]) melangkah mundur dari akhir ke awal.'
      },
      {
        id: 'slice-q3',
        question: 'Operator apa yang digunakan untuk memeriksa keberadaan suatu item di dalam list?',
        options: ['has', 'in', 'exists'],
        answer: 1,
        explanation: 'Kata kunci "in" digunakan untuk keanggotaan koleksi di Python.'
      }
    ],
    takeaways: [
      'Gunakan sintaks <code>[start:stop:step]</code> untuk mengambil irisan data.',
      'Gunakan <code>sorted()</code> untuk salinan terurut dan <code>.sort()</code> untuk urut di tempat.',
      'Gunakan operator <code>in</code> untuk mencari keberadaan elemen secara praktis.'
    ]
  }
];

