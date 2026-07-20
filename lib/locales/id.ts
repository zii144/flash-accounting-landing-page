import type { LocaleContent } from "./types";

// Indonesian dictionary. Terminology follows the App Store id metadata
// (fastlane/metadata/id in the app repo): "Akuntansi Hitam Putih",
// "pencatatan tanpa gesekan", "pengeluaran hantu", "kebocoran tak terasa",
// "jebakan langganan", "firewall belanja", "langganan parasit".
const dict: LocaleContent = {
  seo: {
    title: "Akuntansi Hitam Putih — Catat pengeluaran dalam 3 detik",
    description:
      "Pelacak pengeluaran iOS minimalis: catat dalam 3 detik, data di perangkat, tanpa daftar. Lihat kopi, pesan-antar, dan langganan yang diam-diam menguras saldomu.",
  },
  siteContent: {
    brand: {
      name: "Akuntansi Hitam Putih",
      nameEn: "Flash Accounting",
      tagline:
        "Lacak pengeluaran yang tak pernah kamu sadari. Pencatatan tanpa gesekan. Ambil kembali kendali uangmu.",
      description:
        "Kopi yang dibeli di perjalanan ke kantor, ongkir $4 saat makan siang pesan-antar, ojek dadakan karena ketinggalan kereta, dan biaya iCloud $2.99 yang diam-diam diperpanjang selama tiga tahun — kebocoran tak terasa inilah, bukan belanja besar, yang membuat saldomu terus menipis.",
    },
    download: {
      appStoreUrl: "#",
      googlePlayUrl: "#",
      appStoreLabel: "Gratis di App Store",
      googlePlayLabel: "Android segera hadir",
      googlePlayEnabled: false,
    },
    nav: [
      { name: "Fitur", href: "#features" },
      { name: "Cara kerja", href: "#how-it-works" },
      { name: "Tangkapan layar", href: "#screenshots" },
      { name: "Harga", href: "#pricing" },
      { name: "FAQ", href: "#faq" },
    ],
    hero: {
      eyebrow: "Tak ada belanja besar bulan ini — kenapa saldo tetap turun?",
      headlinePrefix: "Tanpa belanja besar,",
      rotatingWords: [
        "ke mana perginya uang",
        "kebocoran tak terasa",
        "itu pengeluaran hantu",
        "saatnya mulai mencatat",
      ],
      stats: [
        { value: "3 dtk", label: "catat satu transaksi", company: "Pencatatan tanpa gesekan" },
        { value: "16", label: "bahasa didukung", company: "Antarmuka multibahasa" },
        { value: "500", label: "catatan lokal gratis", company: "Lokal lebih dulu" },
        { value: "Kapan saja", label: "ekspor data", company: "Datamu di tanganmu" },
      ],
    },
    features: {
      eyebrow: "Fitur",
      title: "Lihat jelas setiap",
      titleMuted: "pengeluaran tak terasa.",
      items: [
        {
          number: "01",
          title: "Lacak pengeluaran tak terasa",
          descriptionParts: [
            { text: "Kopi, pesan-antar, langganan kecil — " },
            { text: "pengeluaran hantu", highlight: true },
            {
              text: " kalau dijumlah lebih besar dari dugaanmu. Catat satu per satu, dan halaman statistik menampilkan ",
            },
            { text: "total kebocoran tak terasa", highlight: true },
            { text: " bulan ini dalam sekali lihat." },
          ],
          visual: "deploy",
        },
        {
          number: "02",
          title: "Pencatatan tanpa gesekan",
          descriptionParts: [
            { text: "Jumlah, deskripsi", highlight: true },
            { text: " — selesai dalam " },
            { text: "tiga detik", highlight: true },
            {
              text: ". Tanpa kategori rumit, tanpa pengingat mengganggu, tanpa layar penuh yang bikin ingin langsung ditutup. ",
            },
            { text: "Catat lalu lanjut", highlight: true },
            { text: " menjalani harimu." },
          ],
          visual: "ai",
        },
        {
          number: "03",
          title: "Bongkar jebakan langganan",
          descriptionParts: [
            { text: "Catat " },
            { text: "langganan", highlight: true },
            {
              text: " rutin sebagai pengeluaran, dan ringkasan bulanan menunjukkan berapa banyak aplikasi yang diam-diam kamu hidupi. Bangun ",
            },
            { text: "firewall belanja", highlight: true },
            { text: " dan basmi langganan " },
            { text: "parasit", highlight: true },
            { text: "." },
          ],
          visual: "collab",
        },
        {
          number: "04",
          title: "Privasi utama, tersimpan di perangkat",
          descriptionParts: [
            { text: "Bisa offline", highlight: true },
            { text: ", dan " },
            { text: "datamu tetap di perangkatmu", highlight: true },
            {
              text: ". Pro opsional membuka sinkronisasi cloud agar buku catatanmu tetap aman saat ganti ponsel. Termasuk mode gelap dan antarmuka multibahasa penuh.",
            },
          ],
          visual: "security",
        },
      ],
    },
    howItWorks: {
      eyebrow: "Cara kerja",
      title: "Tiga langkah untuk",
      titleMuted: "ambil kembali kendali.",
      status: "Lokal lebih dulu · Mulai tanpa login",
      steps: [
        {
          number: "I",
          title: "Catat dalam tiga detik",
          description:
            "Ketik jumlah dan deskripsi, lalu ketuk \"Pengeluaran\" atau \"Pemasukan\". Antarmukanya minimalis — satu catatan selesai sekitar tiga detik.",
          preview: `Jumlah: 4.50
Deskripsi: kopi

[ Pengeluaran ]  [ Pemasukan ]`,
        },
        {
          number: "II",
          title: "Lihat kebocoran tak terasa",
          description:
            "Buku catatan menampilkan total bersih berjalan, dengan setiap pengeluaran dan pemasukan tercantum jelas. Pengeluaran hantu tak punya tempat sembunyi.",
          preview: `Total: $12,480

- $4.50   Keluar  kopi
- $18     Keluar  pesan-antar
+ $3,200  Masuk   proyek lepas`,
        },
        {
          number: "III",
          title: "Tinjau langganan dan pengeluaran",
          description:
            "Beralih ke statistik dan lihat per hari atau per bulan. Filter per minggu atau bulan, urutkan berdasarkan jumlah atau waktu — jebakan langganan langsung kelihatan.",
          preview: `Pemasukan    +$3,200
Pengeluaran  -$1,952
Bersih       +$1,248

Filter: Bulan ini | Urut: Terbaru`,
        },
      ],
    },
    localFirst: {
      eyebrow: "Lokal lebih dulu",
      title: "Datamu selalu",
      titleBreak: "di tanganmu.",
      description:
        "Akuntansi Hitam Putih menyimpan semuanya di perangkatmu secara bawaan. Mulai mencatat tanpa akun; aktifkan sinkronisasi cloud hanya saat kamu butuh cadangan.",
      stats: [
        { value: "500", label: "catatan lokal gratis" },
        { value: "0", label: "login paksa" },
        { value: "Kapan saja", label: "ekspor & cadangan" },
      ],
      highlights: [
        { title: "Data tinggal di ponselmu", detail: "Cepat, andal, jalan tanpa internet" },
        { title: "500 catatan gratis", detail: "Cukup untuk mulai mencatat dan mencoba" },
        { title: "Sinkronisasi cloud opsional", detail: "Cadangkan lintas perangkat saat perlu" },
        { title: "Ekspor spreadsheet sekali ketuk", detail: "Bawa cadanganmu ke mana saja" },
        { title: "Edit dan hapus", detail: "Perbaiki catatan apa pun kapan pun" },
        { title: "Jelajah berhalaman", detail: "Tetap mulus meski catatan banyak" },
      ],
    },
    metrics: {
      eyebrow: "Angka bicara",
      title: "Alat yang fokus,",
      titleBreak: "nol kebisingan.",
      items: [
        { value: 2, suffix: "", label: "tab utama — catatan dan statistik" },
        { value: 16, suffix: "", label: "bahasa didukung" },
        { value: 500, suffix: "", label: "catatan lokal gratis" },
        { value: 5, suffix: "", label: "filter waktu — dari semua hingga tahun ini" },
      ],
    },
    languages: {
      eyebrow: "Bahasa & rencana",
      title: "Dirancang untuk pengguna",
      titleBreak: "di mana saja.",
      description: "Mendeteksi bahasa perangkatmu, dengan lokalisasi penuh.",
      descriptionBreak: "Lebih banyak fitur segera menyusul.",
      items: [
        { name: "繁體中文", native: "繁體中文" },
        { name: "English", native: "English" },
        { name: "日本語", native: "日本語" },
        { name: "Español", native: "Español" },
        { name: "Français", native: "Français" },
        { name: "Deutsch", native: "Deutsch" },
        { name: "हिन्दी", native: "हिन्दी" },
        { name: "Português", native: "Português" },
        { name: "Русский", native: "Русский" },
        { name: "Bahasa Indonesia", native: "Bahasa Indonesia" },
        { name: "한국어", native: "한국어" },
        { name: "Italiano", native: "Italiano" },
        { name: "Türkçe", native: "Türkçe" },
        { name: "Tiếng Việt", native: "Tiếng Việt" },
        { name: "ไทย", native: "ไทย" },
        { name: "Polski", native: "Polski" },
      ],
      comingSoon: [
        { name: "Cadangan & sinkronisasi cloud", category: "Fitur Pro" },
        { name: "Pindai struk + OCR", category: "Segera hadir" },
        { name: "Ekspor PDF & spreadsheet", category: "Segera hadir" },
      ],
    },
    privacy: {
      eyebrow: "Privasi",
      title: "Keuanganmu,",
      titleBreak: "perangkatmu.",
      description:
        "Akuntansi Hitam Putih dirancang lokal lebih dulu. Catat pengeluaran tanpa akun; nyalakan sinkronisasi cloud hanya saat butuh cadangan.",
      badges: [
        "Bisa offline",
        "Hanya di perangkat",
        "Ekspor kapan saja",
        "Login opsional",
        "Sinkronisasi cloud",
      ],
      items: [
        {
          title: "Lokal lebih dulu",
          description:
            "Transaksi tersimpan di perangkatmu secara bawaan. Tanpa registrasi — buka aplikasinya dan langsung catat.",
        },
        {
          title: "Login opsional",
          description:
            "Login hanya saat kamu ingin sinkronisasi cloud. Sign in with Apple tersedia di iOS.",
        },
        {
          title: "Kamu pegang kendali data",
          description:
            "Ekspor cadangan spreadsheet kapan saja, edit atau hapus satu catatan, atau bersihkan semua catatan di Pengaturan.",
        },
        {
          title: "Sinkronisasi cloud opsional",
          description:
            "Cadangkan lintas perangkat dan pulihkan saat ganti ponsel. Dorong atau tarik data cloud dari Pengaturan.",
        },
      ],
    },
    testimonials: {
      label: "Kata pengguna",
      marqueeLabel: "Mencatat pengeluaran seharusnya tanpa gesekan",
      marqueeItems: [
        "Catat 3 detik",
        "Antarmuka minimalis",
        "Mode offline",
        "Ekspor kapan saja",
        "Statistik",
        "Mode gelap",
        "16 bahasa",
        "Sinkronisasi cloud",
      ],
      items: [
        {
          quote:
            "Bulan ini tidak belanja besar, kok saldo tetap berkurang? Setelah dua minggu mencatat baru ketahuan — kopi dan pesan-antar biang keroknya.",
          author: "Sari",
          role: "Pekerja lepas",
          company: "Jakarta",
          metric: "Menangkap kebocoran tak terasa",
        },
        {
          quote:
            "Aku benci aplikasi keuangan dengan kategori tak ada habisnya. Yang ini cuma jumlah plus deskripsi, tiga detik langsung selesai. Akhirnya bisa konsisten.",
          author: "Rizky",
          role: "Pemilik usaha kecil",
          company: "Bandung",
          metric: "Pencatatan tanpa gesekan",
        },
        {
          quote:
            "Mencatat semua langganan satu per satu bikin kaget — banyak sekali yang diperpanjang otomatis tiap bulan. Langganan parasit akhirnya diberhentikan.",
          author: "Dewi",
          role: "Karyawan kantoran",
          company: "Surabaya",
          metric: "Membongkar jebakan langganan",
        },
        {
          quote:
            "Antarmukanya mulus dan mode gelap nyaman di mata saat malam. Dataku tetap di ponsel — itu yang bikin tenang.",
          author: "Bayu",
          role: "Desainer",
          company: "Yogyakarta",
          metric: "Tenang karena data lokal",
        },
      ],
    },
    pricing: {
      eyebrow: "Harga",
      title: "Mulai gratis.",
      titleMuted: "Sinkron saat siap.",
      description:
        "Pencatatan lokal sepenuhnya gratis. Buka catatan tanpa batas dengan sekali beli Plus, atau naik ke Pro untuk cadangan dan sinkronisasi lintas perangkat.",
      annualBadge: "$14.99/thn",
      footnote:
        "Harga Plus dan Pro bersifat indikatif — lihat App Store / Google Play untuk harga final.",
      plans: [
        {
          id: "free",
          name: "Gratis",
          description: "Pencatatan lokal, nol hambatan",
          price: { monthly: 0, annual: 0, oneTime: null },
          features: [
            "Hingga 500 catatan lokal",
            "Catat pengeluaran dan pemasukan",
            "Statistik, filter, dan pengurutan",
            "Ekspor spreadsheet",
            "16 bahasa + mode gelap",
            "Tanpa perlu login",
          ],
          cta: "Unduh gratis",
          popular: false,
        },
        {
          id: "plus",
          name: "Plus",
          description: "Sekali beli, catatan lokal tanpa batas",
          price: { monthly: null, annual: null, oneTime: 14.99 },
          features: [
            "Semua fitur Gratis",
            "Catatan lokal tanpa batas",
            "Beli sekali, tanpa langganan",
            "Tanpa akun, tanpa cloud",
            "Data tetap di perangkatmu",
            "Pulihkan pembelian",
          ],
          cta: "Buka lokal tanpa batas",
          popular: false,
        },
        {
          id: "pro",
          name: "Pro",
          description: "Buku catatan tersinkron cloud, aman saat ganti ponsel",
          price: { monthly: 1.99, annual: 1.25, oneTime: null },
          features: [
            "Semua fitur Plus",
            "Penyimpanan cloud tanpa batas",
            "Dorong catatan lokal ke cloud",
            "Pulihkan dari cloud",
            "Kembalikan data di ponsel baru",
            "Sign in with Apple opsional",
            "Pulihkan pembelian",
          ],
          cta: "Buka sinkronisasi cloud",
          popular: true,
        },
        {
          id: "coming-soon",
          name: "Segera hadir",
          description: "Lebih banyak fitur penghemat waktu",
          price: { monthly: null, annual: null, oneTime: null },
          features: [
            "Pindai struk + OCR",
            "Isi otomatis jumlah dan merchant",
            "Ekspor PDF",
            "Templat spreadsheet",
            "Kategorisasi lebih cerdas",
            "Lebih banyak format ekspor",
          ],
          cta: "Gabung daftar tunggu",
          popular: false,
        },
      ],
    },
    cta: {
      title: "Siap ambil kembali",
      titleBreak: "kendali uangmu?",
      description:
        "Semuanya dimulai dari melihat setiap pengeluaran yang biasanya terlewat. Unduh Akuntansi Hitam Putih, catat satu dalam tiga detik, dan tangkap pengeluaran hantu itu.",
      footnote: "Mulai gratis · 500 catatan lokal",
    },
    faqSection: {
      eyebrow: "FAQ",
      title: "Tentang Akuntansi Hitam Putih",
      description:
        "Jawaban singkat tentang apa itu Flash Accounting, model privasinya, paketnya, dan platform yang didukung.",
    },
    screenshotsSection: {
      eyebrow: "Layar aplikasi",
      title: "Antarmuka minimalis,",
      titleMuted: "jelas dalam sekali lihat.",
      description:
        "Dua tab utama: catatan dan statistik. Pengaturan cuma satu ketukan — pencatatan tanpa gesekan, tutup begitu selesai.",
    },
    footer: {
      links: {
        Produk: [
          { name: "Fitur", href: "#features" },
          { name: "Cara kerja", href: "#how-it-works" },
          { name: "Harga", href: "#pricing" },
          { name: "FAQ", href: "#faq" },
          { name: "Bahasa", href: "#integrations" },
        ],
        Aplikasi: [
          { name: "Tab catatan", href: "#screenshots" },
          { name: "Tab statistik", href: "#screenshots" },
          { name: "Pengaturan", href: "#screenshots" },
          { name: "Pilihan bahasa", href: "#integrations" },
        ],
        Perusahaan: [
          { name: "Tentang", href: "#" },
          { name: "Dukungan", href: "/support" },
          { name: "Privasi", href: "/privacy" },
          { name: "Kontak", href: "/support" },
        ],
        Legal: [
          { name: "Kebijakan Privasi", href: "/privacy" },
          { name: "Syarat & Ketentuan", href: "/terms" },
          { name: "Data & Privasi", href: "/data" },
        ],
      },
      social: [
        { name: "Threads", href: "#" },
        { name: "Instagram", href: "#" },
        { name: "App Store", href: "#" },
      ],
      status: "Lokal lebih dulu · Hanya di ponselmu",
      copyright: "2026 Akuntansi Hitam Putih. Hak cipta dilindungi.",
    },
    ui: {
      monthlyLabel: "Bulanan",
      annualLabel: "Tahunan",
      billingToggleAria: "Alihkan ke tagihan tahunan",
      popularBadge: "Sinkron cloud",
      oneTimeSuffix: "sekali bayar",
      perMonthSuffix: "/bln",
      comingSoonPrice: "Segera hadir",
      favoriteFeature: "Fitur favorit",
      panelTitle: "Kemampuan bawaan",
      panelStatus: "Bisa offline",
      heroImageAlt: "Layar catatan Akuntansi Hitam Putih",
      mockMonthlyAutopay: "Debit otomatis",
      mockForgotWhy: "Lupa alasannya",
      mockAutoRenews: "Auto-perpanjang",
      mockMonthlyFixedSpend: "Biaya tetap bulan ini",
      mockExpenseButton: "Pengeluaran",
      mockIncomeButton: "Pemasukan",
      mockNetTotal: "Total bersih",
      mockThisMonth: "Bulan ini",
      mockByAmount: "Per jumlah",
    },
  },
  faqItems: [
    {
      question: "Apa itu Akuntansi Hitam Putih (Flash Accounting)?",
      answer:
        "Akuntansi Hitam Putih (Flash Accounting) adalah aplikasi pencatat pengeluaran pribadi untuk iOS yang fokus menangkap pengeluaran tak terasa lewat pencatatan tanpa gesekan. Masukkan jumlah dan deskripsi, selesai sekitar tiga detik — cukup untuk membongkar kopi, pesan-antar, dan langganan kecil yang diam-diam menguras saldomu.",
    },
    {
      question: "Apa bedanya dengan aplikasi keuangan lain?",
      answer:
        "Aplikasi ini membuang kategori rumit dan pengingat mengganggu, lalu fokus pada pencatatan minimalis jumlah plus deskripsi. Antarmukanya hitam-putih polos, lokal lebih dulu, dan bisa dipakai tanpa login, dengan halaman statistik yang menampilkan kebocoran tak terasa dan jebakan langganan bulan ini dalam sekali lihat.",
    },
    {
      question: "Di mana dataku disimpan? Aman tidak?",
      answer:
        "Secara bawaan setiap transaksi hanya tersimpan di perangkatmu dan bisa diakses offline — tanpa registrasi. Saat butuh cadangan, sinkronisasi cloud Pro tersedia sebagai opsi. Kamu bisa mengekspor spreadsheet, mengedit, atau menghapus catatan kapan saja; datamu tetap dalam kendalimu.",
    },
    {
      question: "Perlu akun untuk memakainya?",
      answer:
        "Tidak. Paket gratis mencatat hingga 500 catatan sepenuhnya di perangkatmu. Kamu hanya perlu login saat ingin sinkronisasi cloud dan pemulihan lintas perangkat (Sign in with Apple tersedia di iOS).",
    },
    {
      question: "Bahasa apa saja yang didukung?",
      answer:
        "16 bahasa: 繁體中文, English, 日本語, Español, Français, Deutsch, हिन्दी, Português, Русский, Bahasa Indonesia, 한국어, Italiano, Türkçe, Tiếng Việt, ไทย, dan Polski — ditambah mode gelap dan deteksi bahasa perangkat otomatis.",
    },
    {
      question: "Apa beda Gratis, Plus, dan Pro?",
      answer:
        "Gratis mencakup hingga 500 catatan lokal, pencatatan pengeluaran dan pemasukan, statistik dengan filter dan pengurutan, ekspor spreadsheet, serta antarmuka 16 bahasa. Plus (harga indikatif $14.99 sekali bayar) menghapus batas catatan untuk pencatatan lokal tanpa batas — tanpa langganan, tanpa akun, tanpa cloud. Pro (harga indikatif $1.99/bulan atau $14.99/tahun) mencakup semua fitur Plus plus penyimpanan cloud tanpa batas, dorong ke cloud, pulihkan dari cloud, dan pemulihan data di ponsel baru.",
    },
    {
      question: "Kapan versi Android dirilis?",
      answer:
        "Versi Android sedang direncanakan tetapi belum tersedia di Google Play. Pantau situs resmi atau halaman App Store untuk kabar perilisannya.",
    },
    {
      question: "Untuk siapa Akuntansi Hitam Putih?",
      answer:
        "Orang yang ingin mencatat cepat tanpa kategori rumit; pekerja lepas, karyawan kantoran, dan pemilik usaha kecil yang memburu pengeluaran tak terasa dan jebakan langganan; serta pengguna yang peduli privasi dan ingin datanya tetap di perangkat sendiri.",
    },
  ],
  appScreenshots: [
    {
      id: "accounting",
      title: "Catatan",
      description:
        "Jumlah, deskripsi, selesai dalam tiga detik. Total bersih membuat pengeluaran hantu selalu terlihat.",
      src: "/screenshots/accounting.png",
      alt: "Layar catatan Akuntansi Hitam Putih dengan formulir pengeluaran dan daftar transaksi",
    },
    {
      id: "statistics",
      title: "Statistik",
      description:
        "Kartu ringkasan pemasukan, pengeluaran, dan saldo bersih. Lihat per hari atau bulan, filter waktu, urutkan catatanmu.",
      src: "/screenshots/statistics.png",
      alt: "Layar statistik Akuntansi Hitam Putih dengan kartu ringkasan dan daftar terkelompok",
    },
    {
      id: "settings",
      title: "Pengaturan",
      description:
        "Ekspor spreadsheet, ganti bahasa, batas catatan lokal, dan sinkronisasi cloud opsional.",
      src: "/screenshots/settings.png",
      alt: "Layar pengaturan Akuntansi Hitam Putih dengan opsi ekspor dan bahasa",
    },
  ],
};

export default dict;
