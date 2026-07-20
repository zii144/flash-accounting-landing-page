import type { LocaleContent } from "./types";

// Turkish dictionary. Terminology follows the App Store tr metadata
// (fastlane/metadata/tr in the app repo): "hayalet harcamalar" (ghost
// spending), "görünmez para sızıntıları" (invisible money leaks),
// "abonelik tuzağı" (subscription fatigue/trap), "sürtünmesiz kayıt"
// (frictionless logging), "harcama güvenlik duvarı" (spending firewall),
// "parazit abonelikler" (parasite subscriptions).
const dict: LocaleContent = {
  seo: {
    title: "Siyah Beyaz Muhasebe — 3 saniyede harcama kaydet",
    description:
      "Siyah Beyaz Muhasebe (Flash Accounting): sade bir iOS harcama takipçisi. 3 saniyede kayıt, yerel öncelikli, hesap gerekmez. Bakiyeni sessizce eriten kahve, teslimat ve abonelikleri gör.",
  },
  siteContent: {
    brand: {
      name: "Siyah Beyaz Muhasebe",
      nameEn: "Flash Accounting",
      tagline:
        "Fark etmediğin harcamaları takip et. Sürtünmesiz kayıt. Kontrolü geri al.",
      description:
        "İşe giderken alınan kahve, öğlen teslimatına ödenen $4 servis ücreti, kaçan trenden sonra alınan yeni bilet ve üç yıldır sessizce yenilenen $2.99'luk iCloud ücreti — bakiyeni eriten şey büyük alışverişler değil, bu görünmez para sızıntıları.",
    },
    download: {
      appStoreUrl: "#",
      googlePlayUrl: "#",
      appStoreLabel: "App Store'da ücretsiz",
      googlePlayLabel: "Android çok yakında",
      googlePlayEnabled: false,
    },
    nav: [
      { name: "Özellikler", href: "#features" },
      { name: "Nasıl çalışır", href: "#how-it-works" },
      { name: "Ekran görüntüleri", href: "#screenshots" },
      { name: "Fiyatlandırma", href: "#pricing" },
      { name: "SSS", href: "#faq" },
    ],
    hero: {
      eyebrow: "Bu ay büyük alışveriş yok — peki bakiye neden düştü?",
      headlinePrefix: "Büyük harcama yok,",
      rotatingWords: [
        "para nereye gitti",
        "görünmez para sızıntısı",
        "bunlar hayalet harcamalar",
        "kaydetme zamanı",
      ],
      stats: [
        { value: "3 sn", label: "bir harcama kaydı", company: "Sürtünmesiz kayıt" },
        { value: "16", label: "dil desteği", company: "Çok dilli arayüz" },
        { value: "500", label: "ücretsiz yerel kayıt", company: "Yerel öncelikli" },
        { value: "İstediğin an", label: "dışa aktarım", company: "Verilerin senin elinde" },
      ],
    },
    features: {
      eyebrow: "Özellikler",
      title: "Görünmeyen her harcamayı",
      titleMuted: "tek tek gör.",
      items: [
        {
          number: "01",
          title: "Fark etmediğin harcamaları yakala",
          descriptionParts: [
            { text: "Kahveler, teslimatlar, küçük abonelikler — " },
            { text: "hayalet harcamalar", highlight: true },
            {
              text: " sandığından çok daha hızlı birikir. Her birini kaydet; istatistik sayfası bu ayın ",
            },
            { text: "toplam görünmez sızıntısını", highlight: true },
            { text: " tek bakışta gösterir." },
          ],
          visual: "deploy",
        },
        {
          number: "02",
          title: "Sürtünmesiz kayıt",
          descriptionParts: [
            { text: "Tutar, açıklama", highlight: true },
            { text: " — " },
            { text: "üç saniyede", highlight: true },
            {
              text: " bitti. Karmaşık kategoriler yok, rahatsız edici hatırlatmalar yok, açar açmaz kapatmak istediğin ekran yok. ",
            },
            { text: "Kaydet ve devam et", highlight: true },
            { text: " — günün bölünmesin." },
          ],
          visual: "ai",
        },
        {
          number: "03",
          title: "Abonelik tuzağını ortaya çıkar",
          descriptionParts: [
            { text: "Tekrarlayan " },
            { text: "abonelikleri", highlight: true },
            {
              text: " gider olarak yaz; aylık özet, sessizce kaç uygulamayı beslediğini ortaya çıkarır. ",
            },
            { text: "Harcama güvenlik duvarını", highlight: true },
            { text: " kur ve " },
            { text: "parazit", highlight: true },
            { text: " abonelikleri kes." },
          ],
          visual: "collab",
        },
        {
          number: "04",
          title: "Önce gizlilik, cihazında saklanır",
          descriptionParts: [
            { text: "Çevrimdışı çalışır", highlight: true },
            { text: " ve " },
            { text: "verilerin cihazında kalır", highlight: true },
            {
              text: ". İsteğe bağlı Pro, bulut senkronunu açar; defterin telefon değiştirsen de seninle gelir. Karanlık mod ve tamamen çok dilli arayüz dahil.",
            },
          ],
          visual: "security",
        },
      ],
    },
    howItWorks: {
      eyebrow: "Nasıl çalışır",
      title: "Üç adımda",
      titleMuted: "kontrolü geri al.",
      status: "Yerel öncelikli · Giriş yapmadan başla",
      steps: [
        {
          number: "I",
          title: "Üç saniyede bir kayıt",
          description:
            "Tutarı ve açıklamayı yaz, sonra \"Gider\" ya da \"Gelir\"e dokun. Arayüz son derece sade — bir kayıt yaklaşık üç saniye sürer.",
          preview: `Tutar: 4.50
Açıklama: kahve

[ Gider ]  [ Gelir ]`,
        },
        {
          number: "II",
          title: "Görünmez sızıntıları gör",
          description:
            "Defter, güncel net toplamı gösterir; her gider ve gelir tek tek listelenir. Hayalet harcamaların saklanacak yeri kalmaz.",
          preview: `Toplam: $12,480

- $4.50   Gider  kahve
- $18     Gider  teslimat
+ $3,200  Gelir  serbest iş`,
        },
        {
          number: "III",
          title: "Abonelikleri ve harcamaları incele",
          description:
            "İstatistiklere geç; güne ya da aya göre görüntüle. Haftaya veya aya göre filtrele, tutara ya da zamana göre sırala — abonelik tuzağı tek bakışta ortaya çıkar.",
          preview: `Gelir    +$3,200
Gider    -$1,952
Net      +$1,248

Filtre: Bu ay | Sıralama: En yeni`,
        },
      ],
    },
    localFirst: {
      eyebrow: "Yerel öncelikli",
      title: "Verilerin hep",
      titleBreak: "senin elinde.",
      description:
        "Siyah Beyaz Muhasebe varsayılan olarak her şeyi cihazında saklar. Hesap açmadan kaydetmeye başla; bulut senkronunu yalnızca yedek istediğinde aç.",
      stats: [
        { value: "500", label: "ücretsiz yerel kayıt" },
        { value: "0", label: "zorunlu giriş" },
        { value: "İstediğin an", label: "dışa aktarım ve yedek" },
      ],
      highlights: [
        { title: "Veriler telefonunda yaşar", detail: "Hızlı, güvenilir, internetsiz de çalışır" },
        { title: "500 ücretsiz kayıt", detail: "Başlamak ve denemek için fazlasıyla yeterli" },
        { title: "İsteğe bağlı bulut senkronu", detail: "Gerektiğinde cihazlar arası yedekle" },
        { title: "Tek dokunuşla tablo dışa aktarımı", detail: "Yedeğini yanında taşı" },
        { title: "Düzenle ve sil", detail: "Her kaydı istediğin an düzelt" },
        { title: "Sayfalı gezinme", detail: "Çok sayıda kayıtta bile akıcı kaydırma" },
      ],
    },
    metrics: {
      eyebrow: "Rakamlar",
      title: "Odaklı bir araç,",
      titleBreak: "sıfır gürültü.",
      items: [
        { value: 2, suffix: "", label: "ana sekme — defter ve istatistik" },
        { value: 16, suffix: "", label: "dil desteği" },
        { value: 500, suffix: "", label: "ücretsiz yerel kayıt" },
        { value: 5, suffix: "", label: "zaman filtresi — tüm zamanlardan bu yıla" },
      ],
    },
    languages: {
      eyebrow: "Diller ve yol haritası",
      title: "Her yerdeki kullanıcılar",
      titleBreak: "için tasarlandı.",
      description: "Cihaz dilini algılar, tam yerelleştirme sunar.",
      descriptionBreak: "Daha fazla özellik yolda.",
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
        { name: "Bulut yedekleme ve senkron", category: "Pro özelliği" },
        { name: "Fiş tarama + OCR", category: "Çok yakında" },
        { name: "PDF ve tablo dışa aktarımı", category: "Çok yakında" },
      ],
    },
    privacy: {
      eyebrow: "Gizlilik",
      title: "Senin finansların,",
      titleBreak: "senin cihazın.",
      description:
        "Siyah Beyaz Muhasebe yerel öncelikli tasarlandı. Hesap açmadan harcama kaydet; bulut senkronunu yalnızca yedek istediğinde aç.",
      badges: [
        "Çevrimdışı çalışır",
        "Yalnızca cihazda",
        "İstediğin an dışa aktar",
        "İsteğe bağlı giriş",
        "Bulut senkronu",
      ],
      items: [
        {
          title: "Yerel öncelikli",
          description:
            "İşlemler varsayılan olarak cihazında saklanır. Kayıt olmak yok — uygulamayı aç ve yazmaya başla.",
        },
        {
          title: "İsteğe bağlı giriş",
          description:
            "Yalnızca bulut senkronu istediğinde giriş yap. iOS'ta Apple ile Giriş kullanılabilir.",
        },
        {
          title: "Verilerin kontrolü sende",
          description:
            "İstediğin an tablo olarak yedek al, tek tek kayıtları düzenle ya da sil, veya Ayarlar'dan tüm kayıtları temizle.",
        },
        {
          title: "İsteğe bağlı bulut senkronu",
          description:
            "Cihazlar arası yedekle, telefon değiştirince geri yükle. Ayarlar'dan bulut verisini gönder ya da çek.",
        },
      ],
    },
    testimonials: {
      label: "Kullanıcılar ne diyor",
      marqueeLabel: "Harcama takibi sürtünmesiz olmalı",
      marqueeItems: [
        "3 saniyede kayıt",
        "Sade arayüz",
        "Çevrimdışı mod",
        "İstediğin an dışa aktar",
        "İstatistikler",
        "Karanlık mod",
        "16 dil",
        "Bulut senkronu",
      ],
      items: [
        {
          quote:
            "Bu ay büyük bir şey almadım, bakiye neden düştü? İki hafta kayıt tutunca gördüm — suçlu kahve ve paket servismiş.",
          author: "Elif",
          role: "Serbest çalışan",
          company: "İstanbul",
          metric: "Görünmez sızıntıları yakaladı",
        },
        {
          quote:
            "Bitmek bilmeyen kategorili harcama uygulamalarından nefret ederim. Bunda tutar artı açıklama; üç saniyede çıkıyorum. Sonunda bırakmadan devam edebildim.",
          author: "Mert",
          role: "Küçük işletme sahibi",
          company: "Ankara",
          metric: "Sürtünmesiz kayıt",
        },
        {
          quote:
            "Abonelikleri tek tek yazınca şoke oldum — her ay otomatik yenilenen bir sürü şey varmış. Parazitler sonunda iptal edildi.",
          author: "Zeynep",
          role: "Ofis çalışanı",
          company: "İzmir",
          metric: "Abonelik tuzağını ortaya çıkardı",
        },
        {
          quote:
            "Arayüz çok akıcı, karanlık mod gece gözü yormuyor. Verilerim telefonumda kalıyor — içim rahat.",
          author: "Emre",
          role: "Tasarımcı",
          company: "Bursa",
          metric: "Yerel öncelikli iç rahatlığı",
        },
      ],
    },
    pricing: {
      eyebrow: "Fiyatlandırma",
      title: "Ücretsiz başla.",
      titleMuted: "Hazır olunca senkronla.",
      description:
        "Yerel takip tamamen ücretsiz. Tek seferlik Plus satın alımıyla sınırsız kayda geç ya da yedekleme ve cihazlar arası senkron için Pro'ya yükselt.",
      annualBadge: "$14.99/yıl",
      footnote:
        "Plus ve Pro fiyatları örnektir — kesin fiyatlar için App Store / Google Play'e bak.",
      plans: [
        {
          id: "free",
          name: "Ücretsiz",
          description: "Yerel takip, sıfır engel",
          price: { monthly: 0, annual: 0, oneTime: null },
          features: [
            "500 yerel kayda kadar",
            "Gider ve gelir kaydı",
            "İstatistik, filtre ve sıralama",
            "Tablo dışa aktarımı",
            "16 dil + karanlık mod",
            "Giriş gerekmez",
          ],
          cta: "Ücretsiz indir",
          popular: false,
        },
        {
          id: "plus",
          name: "Plus",
          description: "Tek seferlik satın alım, sınırsız yerel kayıt",
          price: { monthly: null, annual: null, oneTime: 14.99 },
          features: [
            "Ücretsiz plandaki her şey",
            "Sınırsız yerel kayıt",
            "Bir kez öde, abonelik yok",
            "Hesap yok, bulut yok",
            "Verilerin cihazında kalır",
            "Satın alımları geri yükle",
          ],
          cta: "Sınırsız yereli aç",
          popular: false,
        },
        {
          id: "pro",
          name: "Pro",
          description: "Telefon değişse de yaşayan bulut senkronlu defter",
          price: { monthly: 1.99, annual: 1.25, oneTime: null },
          features: [
            "Plus'taki her şey",
            "Sınırsız bulut depolama",
            "Yerel kayıtları buluta gönder",
            "Buluttan geri yükle",
            "Yeni telefonda verini kurtar",
            "İsteğe bağlı Apple ile Giriş",
            "Satın alımları geri yükle",
          ],
          cta: "Bulut senkronunu aç",
          popular: true,
        },
        {
          id: "coming-soon",
          name: "Çok yakında",
          description: "Zaman kazandıran daha fazla özellik",
          price: { monthly: null, annual: null, oneTime: null },
          features: [
            "Fiş tarama + OCR",
            "Tutar ve işyerini otomatik doldurma",
            "PDF dışa aktarımı",
            "Tablo şablonları",
            "Daha akıllı kategorilendirme",
            "Daha fazla dışa aktarım biçimi",
          ],
          cta: "Bekleme listesine katıl",
          popular: false,
        },
      ],
    },
    cta: {
      title: "Paranın kontrolünü",
      titleBreak: "geri almaya hazır mısın?",
      description:
        "Her şey, normalde kaçırdığın harcamaları görmekle başlar. Siyah Beyaz Muhasebe'yi indir, üç saniyede bir kayıt gir ve hayalet harcamaları yakala.",
      footnote: "Ücretsiz başla · 500 yerel kayıt",
    },
    faqSection: {
      eyebrow: "SSS",
      title: "Siyah Beyaz Muhasebe hakkında",
      description:
        "Flash Accounting'in ne olduğu, gizlilik modeli, planları ve desteklenen platformlar hakkında hızlı yanıtlar.",
    },
    screenshotsSection: {
      eyebrow: "Uygulama ekranları",
      title: "Sade bir arayüz,",
      titleMuted: "tek bakışta anlaşılır.",
      description:
        "İki ana sekme: defter ve istatistik. Ayarlar bir dokunuş uzakta — sürtünmesiz kayıt, işin bitince kapat.",
    },
    footer: {
      links: {
        "Ürün": [
          { name: "Özellikler", href: "#features" },
          { name: "Nasıl çalışır", href: "#how-it-works" },
          { name: "Fiyatlandırma", href: "#pricing" },
          { name: "SSS", href: "#faq" },
          { name: "Diller", href: "#integrations" },
        ],
        "Uygulama": [
          { name: "Defter sekmesi", href: "#screenshots" },
          { name: "İstatistik sekmesi", href: "#screenshots" },
          { name: "Ayarlar", href: "#screenshots" },
          { name: "Dil seçici", href: "#integrations" },
        ],
        "Şirket": [
          { name: "Hakkında", href: "#" },
          { name: "Destek", href: "/support" },
          { name: "Gizlilik", href: "/privacy" },
          { name: "İletişim", href: "/support" },
        ],
        "Yasal": [
          { name: "Gizlilik Politikası", href: "/privacy" },
          { name: "Şartlar ve Koşullar", href: "/terms" },
          { name: "Veri ve Gizlilik", href: "/data" },
        ],
      },
      social: [
        { name: "Threads", href: "#" },
        { name: "Instagram", href: "#" },
        { name: "App Store", href: "#" },
      ],
      status: "Yerel öncelikli · Yalnızca telefonunda",
      copyright: "2026 Siyah Beyaz Muhasebe. Tüm hakları saklıdır.",
    },
    ui: {
      monthlyLabel: "Aylık",
      annualLabel: "Yıllık",
      billingToggleAria: "Yıllık faturalandırmayı aç/kapat",
      popularBadge: "Bulut senkronu",
      oneTimeSuffix: "tek seferlik",
      perMonthSuffix: "/ay",
      comingSoonPrice: "Çok yakında",
      favoriteFeature: "Favori özellik",
      panelTitle: "Yerleşik yetenekler",
      panelStatus: "Çevrimdışı çalışır",
      heroImageAlt: "Siyah Beyaz Muhasebe defter ekranı",
      mockMonthlyAutopay: "Otomatik ödeme",
      mockForgotWhy: "Neden abone?",
      mockAutoRenews: "Oto. yenilenir",
      mockMonthlyFixedSpend: "Sabit giderler",
      mockExpenseButton: "Gider",
      mockIncomeButton: "Gelir",
      mockNetTotal: "Net toplam",
      mockThisMonth: "Bu ay",
      mockByAmount: "Tutara göre",
    },
  },
  faqItems: [
    {
      question: "Siyah Beyaz Muhasebe (Flash Accounting) nedir?",
      answer:
        "Siyah Beyaz Muhasebe (Flash Accounting), fark etmediğin harcamaları sürtünmesiz kayıtla yakalamaya odaklanan bir iOS kişisel harcama takip uygulamasıdır. Tutarı ve açıklamayı gir, yaklaşık üç saniyede işin bitsin — bakiyeni sessizce eriten kahveleri, teslimatları ve küçük abonelikleri görmeye yeter.",
    },
    {
      question: "Diğer harcama uygulamalarından farkı ne?",
      answer:
        "Karmaşık kategorileri ve rahatsız edici hatırlatmaları bırakır; tutar artı açıklamadan oluşan sade kayda odaklanır. Arayüz yalın siyah-beyazdır, yerel önceliklidir ve giriş yapmadan kullanılabilir; istatistik sayfası bu ayın görünmez sızıntılarını ve abonelik tuzağını tek bakışta gösterir.",
    },
    {
      question: "Verilerim nerede saklanıyor? Güvende mi?",
      answer:
        "Varsayılan olarak her işlem yalnızca cihazında saklanır ve çevrimdışı çalışır — kayıt olmak gerekmez. Yedek istediğinde isteğe bağlı Pro bulut senkronu kullanılabilir. İstediğin an tablo olarak dışa aktarabilir, kayıtları düzenleyebilir ya da silebilirsin; verilerin kontrolü hep sende kalır.",
    },
    {
      question: "Kullanmak için hesap gerekiyor mu?",
      answer:
        "Hayır. Ücretsiz sürüm 500 kayda kadar her şeyi tamamen cihazında tutar. Yalnızca bulut senkronu ve cihazlar arası geri yükleme istediğinde giriş yaparsın (iOS'ta Apple ile Giriş kullanılabilir).",
    },
    {
      question: "Hangi diller destekleniyor?",
      answer:
        "16 dil: 繁體中文, English, 日本語, Español, Français, Deutsch, हिन्दी, Português, Русский, Bahasa Indonesia, 한국어, Italiano, Türkçe, Tiếng Việt, ไทย ve Polski — ayrıca karanlık mod ve otomatik cihaz dili algılama.",
    },
    {
      question: "Ücretsiz, Plus ve Pro arasındaki fark ne?",
      answer:
        "Ücretsiz plan 500 yerel kayda kadar takip, gider ve gelir kaydı, filtreli ve sıralamalı istatistikler, tablo dışa aktarımı ve 16 dilli arayüz sunar. Plus (örnek fiyat $14.99, tek seferlik) kayıt sınırını kaldırır ve sınırsız yerel takip sağlar — abonelik yok, hesap yok, bulut yok. Pro (örnek fiyat aylık $1.99 ya da yıllık $14.99) Plus'taki her şeye ek olarak sınırsız bulut depolama, buluta gönderme, buluttan geri yükleme ve yeni telefonda veri kurtarma içerir.",
    },
    {
      question: "Android sürümü ne zaman geliyor?",
      answer:
        "Android sürümü planlanıyor ama henüz Google Play'de değil. Çıkış haberleri için resmi siteyi ya da App Store sayfasını takip et.",
    },
    {
      question: "Siyah Beyaz Muhasebe kimler için?",
      answer:
        "Karmaşık kategoriler olmadan hızlı kayıt isteyenler; görünmez harcamaların ve abonelik tuzağının peşine düşen serbest çalışanlar, ofis çalışanları ve küçük işletme sahipleri; ve verilerinin kendi cihazında kalmasını isteyen, gizliliğe önem veren kullanıcılar için.",
    },
  ],
  appScreenshots: [
    {
      id: "accounting",
      title: "Defter",
      description:
        "Tutar, açıklama, üç saniyede bitti. Net toplam, hayalet harcamaları hep göz önünde tutar.",
      src: "/screenshots/accounting.png",
      alt: "Gider formu ve işlem listesiyle Siyah Beyaz Muhasebe defter ekranı",
    },
    {
      id: "statistics",
      title: "İstatistik",
      description:
        "Gelir, gider ve net özet kartları. Güne ya da aya göre görüntüle, zamana göre filtrele, kayıtlarını sırala.",
      src: "/screenshots/statistics.png",
      alt: "Özet kartları ve gruplanmış listelerle Siyah Beyaz Muhasebe istatistik ekranı",
    },
    {
      id: "settings",
      title: "Ayarlar",
      description:
        "Tablo dışa aktarımı, dil değiştirme, yerel kayıt sınırı ve isteğe bağlı bulut senkronu.",
      src: "/screenshots/settings.png",
      alt: "Dışa aktarma ve dil seçenekleriyle Siyah Beyaz Muhasebe ayarlar ekranı",
    },
  ],
};

export default dict;
