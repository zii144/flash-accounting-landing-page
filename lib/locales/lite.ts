// Lite overlay — what the site says while the app ships without payments
// (lib/payments.ts). getLocaleContent() applies it on top of each dictionary, so the
// paid copy in lib/site-content.ts, lib/faq-content.ts and lib/locales/<code>.ts
// stays untouched and comes back the moment PAYMENTS_ENABLED flips.
//
// Every rule below names the exact string or value it expects. If a dictionary
// changes and a target is missing, applyLite() throws — the static export fails
// instead of quietly shipping paid copy in one locale.

import type {
  DescriptionPart,
  FaqItem,
  LocaleContent,
  Screenshot,
  SiteContent,
} from "./types";

interface LiteCopy {
  /** Replaces the last descriptionPart of feature "04" — the one selling Pro sync. */
  readonly privacyFeatureTail: string;
  readonly localFirstDescription: string;
  /** Label of the "100%" local-first stat that takes the free-record-cap stat's place. */
  readonly onDeviceLabel: string;
  /** Label of the "4" metric that takes the free-record-cap metric's place. */
  readonly chartTypesLabel: string;
  readonly privacyDescription: string;
  readonly ctaFootnote: string;
  readonly faqSectionDescription: string;
  readonly settingsScreenshotDescription: string;
  /** Value of that stat; "100%" unless the locale writes percentages differently. */
  readonly onDeviceValue?: string;
  /** New privacy-item descriptions without "by default", keyed by the item's exact title. */
  readonly privacyItemDescriptions: Readonly<Record<string, string>>;
  /** New answers, keyed by the exact question they replace. */
  readonly faqAnswers: Readonly<Record<string, string>>;
  /** Exact entries that only make sense while payments are on. */
  readonly drop: {
    readonly highlights: readonly string[];
    readonly badges: readonly string[];
    readonly privacyItems: readonly string[];
    readonly marquee: readonly string[];
    readonly comingSoon: readonly string[];
    readonly faq: readonly string[];
  };
}

const LITE_COPY: Readonly<Record<string, LiteCopy>> = {
  zh: {
    privacyFeatureTail: "。支援繁體中文、深色模式與多語介面。",
    localFirstDescription: "黑白記帳只在本機儲存。不必註冊就能開始記帳；想備份時，隨時匯出試算表。",
    onDeviceLabel: "本機儲存",
    chartTypesLabel: "圖表類型——圓餅、矩形圖、長條、折線",
    privacyDescription: "黑白記帳以本機優先為設計核心。不必註冊就能記帳，資料只留在你的手機裡。",
    ctaFootnote: "免費下載 · 免登入",
    faqSectionDescription: "快速了解 Flash Accounting 的定位、隱私模式與支援平台。",
    settingsScreenshotDescription: "試算表匯出與匯入、智慧標籤詞彙、語言與幣別切換。",
    faqAnswers: {
      "資料存在哪裡？安全嗎？":
        "所有交易只存在你的裝置本機，離線可用，不必註冊。你隨時可匯出試算表備份、編輯或刪除紀錄，資料掌控權在你手上。",
      "需要註冊帳號才能使用嗎？":
        "不需要。黑白記帳不必註冊、也不用登入，打開就能記帳，資料只存在你的裝置上。",
    },
    privacyItemDescriptions: {
      "本機優先":
        "交易只存在你的裝置。不必註冊，打開就能記帳。",
    },
    drop: {
      highlights: ["500 筆免費額度", "可選雲端同步"],
      badges: ["可選登入", "雲端同步"],
      privacyItems: ["可選登入", "可選雲端同步"],
      marquee: ["雲端同步"],
      comingSoon: ["雲端備份與同步"],
      faq: ["免費版、Plus 和 Pro 差在哪？"],
    },
  },
  en: {
    privacyFeatureTail: ". Dark mode and a fully multilingual interface included.",
    localFirstDescription: "Black White Accounting stores everything on your device. Start logging without an account, and export a spreadsheet backup whenever you like.",
    onDeviceLabel: "stored on your device",
    chartTypesLabel: "chart types — pie, treemap, bar, and line",
    privacyDescription: "Black White Accounting is designed local-first. Log expenses without an account — your data stays on your phone.",
    ctaFootnote: "Free download · No sign-up",
    faqSectionDescription: "Quick answers about what Flash Accounting is, its privacy model, and supported platforms.",
    settingsScreenshotDescription: "Spreadsheet export and import, the Smart Label Glossary, and language and currency switching.",
    faqAnswers: {
      "Where is my data stored? Is it safe?":
        "Every transaction is stored only on your device and works offline — no registration needed. You can export a spreadsheet backup, edit, or delete records at any time; your data stays under your control.",
      "Do I need an account to use it?":
        "No. There's no sign-up and no login — open the app and start logging. Everything stays on your device.",
    },
    privacyItemDescriptions: {
      "Local-first":
        "Transactions are stored on your device. No registration — open the app and start logging.",
    },
    drop: {
      highlights: ["500 free records", "Optional cloud sync"],
      badges: ["Optional sign-in", "Cloud sync"],
      privacyItems: ["Optional sign-in", "Optional cloud sync"],
      marquee: ["Cloud sync"],
      comingSoon: ["Cloud backup & sync"],
      faq: ["What's the difference between Free, Plus, and Pro?"],
    },
  },
  ja: {
    privacyFeatureTail: "。ダークモードと完全多言語のインターフェースにも対応しています。",
    localFirstDescription: "白黒家計簿は、すべてを端末内に保存します。アカウントなしで記録を始められて、バックアップはいつでもスプレッドシートに書き出せます。",
    onDeviceLabel: "端末内に保存",
    chartTypesLabel: "種類のグラフ——円・ツリーマップ・棒・折れ線",
    privacyDescription: "白黒家計簿はローカルファースト設計。アカウントなしで記録でき、データは端末の中だけに残ります。",
    ctaFootnote: "無料ダウンロード · 登録不要",
    faqSectionDescription: "Flash Accountingとはどんなアプリか、プライバシーの考え方、対応プラットフォームをまとめました。",
    settingsScreenshotDescription: "スプレッドシートの書き出しと読み込み、スマートラベル用語集、言語と通貨の切り替え。",
    faqAnswers: {
      "データはどこに保存される？安全？":
        "すべての取引は端末内にのみ保存され、オフラインで使えます。登録は不要です。スプレッドシートへのバックアップ出力、記録の編集・削除はいつでも可能——データの主導権はあなたにあります。",
      "アカウント登録は必要？":
        "不要です。登録もログインもなしで、アプリを開けばすぐに記録できます。データはすべて端末内に保存されます。",
    },
    privacyItemDescriptions: {
      "ローカルファースト":
        "取引は端末内に保存。登録不要——アプリを開いたら、すぐ記録を始められます。",
    },
    drop: {
      highlights: ["無料で500件まで", "クラウド同期はオプション"],
      badges: ["ログインは任意", "クラウド同期"],
      privacyItems: ["ログインは任意", "クラウド同期はオプション"],
      marquee: ["クラウド同期"],
      comingSoon: ["クラウドバックアップ＆同期"],
      faq: ["無料版・Plus・Proの違いは？"],
    },
  },
  ko: {
    privacyFeatureTail: "됩니다. 다크 모드와 완전한 다국어 인터페이스도 기본입니다.",
    localFirstDescription: "흑백가계부는 모든 데이터를 기기에만 저장합니다. 계정 없이 바로 기록을 시작하고, 백업은 언제든 스프레드시트로 내보내세요.",
    onDeviceLabel: "기기에 저장",
    chartTypesLabel: "가지 차트——원형·트리맵·막대·꺾은선",
    privacyDescription: "흑백가계부는 로컬 우선으로 설계되었습니다. 계정 없이 기록을 시작하고, 데이터는 기기에만 남습니다.",
    ctaFootnote: "무료 다운로드 · 회원가입 없음",
    faqSectionDescription: "Flash Accounting이 어떤 앱인지, 프라이버시 모델, 지원 플랫폼을 빠르게 확인하세요.",
    settingsScreenshotDescription: "스프레드시트 내보내기·가져오기, 스마트 라벨 용어집, 언어·통화 전환.",
    faqAnswers: {
      "데이터는 어디에 저장되나요? 안전한가요?":
        "모든 거래 내역은 기기에만 저장되고 오프라인에서도 동작하며, 회원가입이 필요 없습니다. 스프레드시트 백업 내보내기, 기록 수정·삭제도 언제든 가능——데이터 주도권은 항상 사용자에게 있습니다.",
      "계정을 만들어야 하나요?":
        "아니요. 회원가입도 로그인도 없이 앱을 열면 바로 기록할 수 있습니다. 모든 데이터는 기기에만 저장됩니다.",
    },
    privacyItemDescriptions: {
      "로컬 우선":
        "거래 내역은 기기에 저장됩니다. 회원가입 없이, 앱을 열자마자 기록할 수 있습니다.",
    },
    drop: {
      highlights: ["무료 500건", "선택형 클라우드 동기화"],
      badges: ["선택형 로그인", "클라우드 동기화"],
      privacyItems: ["선택형 로그인", "선택형 클라우드 동기화"],
      marquee: ["클라우드 동기화"],
      comingSoon: ["클라우드 백업과 동기화"],
      faq: ["무료, Plus, Pro는 뭐가 다른가요?"],
    },
  },
  es: {
    privacyFeatureTail: ". Incluye modo oscuro e interfaz totalmente multilingüe.",
    localFirstDescription: "Contabilidad B/N guarda todo en tu dispositivo. Empieza a anotar sin crear cuenta y exporta una copia en hoja de cálculo cuando quieras.",
    onDeviceLabel: "en tu dispositivo",
    chartTypesLabel: "tipos de gráfico: circular, treemap, barras y líneas",
    privacyDescription: "Contabilidad B/N está diseñada con enfoque local primero. Anota gastos sin cuenta: tus datos se quedan en tu móvil.",
    ctaFootnote: "Descarga gratis · Sin registro",
    faqSectionDescription: "Respuestas rápidas sobre qué es Flash Accounting, su modelo de privacidad y las plataformas compatibles.",
    settingsScreenshotDescription: "Exportación e importación en hoja de cálculo, glosario de etiquetas inteligentes y cambio de idioma y moneda.",
    faqAnswers: {
      "¿Dónde se guardan mis datos? ¿Están seguros?":
        "Cada movimiento se guarda solo en tu dispositivo y funciona sin conexión, sin registro. Puedes exportar una copia en hoja de cálculo, editar o eliminar registros en cualquier momento; tus datos siguen bajo tu control.",
      "¿Necesito una cuenta para usarla?":
        "No. No hace falta registrarse ni iniciar sesión: abre la app y empieza a anotar. Todo se queda en tu dispositivo.",
    },
    privacyItemDescriptions: {
      "Local primero":
        "Tus movimientos se guardan en el dispositivo. Sin registro: abre la app y empieza a anotar.",
    },
    drop: {
      highlights: ["500 registros gratis", "Nube opcional"],
      badges: ["Inicio de sesión opcional", "Sincronización en la nube"],
      privacyItems: ["Inicio de sesión opcional", "Nube opcional"],
      marquee: ["Sincronización en la nube"],
      comingSoon: ["Respaldo y sincronización en la nube"],
      faq: ["¿Cuál es la diferencia entre Gratis, Plus y Pro?"],
    },
  },
  fr: {
    privacyFeatureTail: ". Mode sombre et interface entièrement multilingue inclus.",
    localFirstDescription: "Compta Noir & Blanc stocke tout sur votre appareil. Commencez à noter sans compte et exportez une sauvegarde en tableur quand vous le souhaitez.",
    onDeviceLabel: "sur votre appareil",
    chartTypesLabel: "types de graphiques — camembert, treemap, barres et courbes",
    privacyDescription: "Compta Noir & Blanc est conçue local d'abord. Notez vos dépenses sans compte : vos données restent sur votre téléphone.",
    ctaFootnote: "Téléchargement gratuit · Sans inscription",
    faqSectionDescription: "Des réponses rapides sur ce qu'est Flash Accounting, son modèle de confidentialité et ses plateformes.",
    settingsScreenshotDescription: "Export et import tableur, glossaire d'étiquettes intelligentes, changement de langue et de devise.",
    faqAnswers: {
      "Où sont stockées mes données ? Est-ce sûr ?":
        "Chaque transaction est stockée uniquement sur votre appareil et fonctionne hors ligne — aucune inscription requise. Vous pouvez exporter une sauvegarde en tableur, modifier ou supprimer des entrées à tout moment ; vos données restent sous votre contrôle.",
      "Faut-il un compte pour l'utiliser ?":
        "Non. Ni inscription ni connexion : ouvrez l'app et commencez à noter. Tout reste sur votre appareil.",
    },
    privacyItemDescriptions: {
      "Local d'abord":
        "Les transactions sont stockées sur votre appareil. Aucune inscription — ouvrez l'app et commencez à noter.",
    },
    drop: {
      highlights: ["500 entrées gratuites", "Synchro cloud optionnelle"],
      badges: ["Connexion optionnelle", "Synchro cloud"],
      privacyItems: ["Connexion optionnelle", "Synchro cloud optionnelle"],
      marquee: ["Synchro cloud"],
      comingSoon: ["Sauvegarde et synchro cloud"],
      faq: ["Quelle est la différence entre Gratuit, Plus et Pro ?"],
    },
  },
  de: {
    privacyFeatureTail: ". Dunkelmodus und komplett mehrsprachige Oberfläche inklusive.",
    localFirstDescription: "SchwarzWeiß Finanzen speichert alles auf deinem Gerät. Fang ohne Konto an zu erfassen und exportiere jederzeit ein Backup als Tabelle.",
    onDeviceLabel: "auf deinem Gerät",
    chartTypesLabel: "Diagrammtypen — Kreis, Treemap, Balken und Linie",
    privacyDescription: "SchwarzWeiß Finanzen ist lokal zuerst gebaut. Erfasse Ausgaben ohne Konto – deine Daten bleiben auf deinem Handy.",
    ctaFootnote: "Gratis laden · Ohne Anmeldung",
    faqSectionDescription: "Schnelle Antworten dazu, was Flash Accounting ist — Privatsphäre-Modell und unterstützte Plattformen.",
    settingsScreenshotDescription: "Tabellen-Export und -Import, Smart-Label-Glossar, Sprach- und Währungswechsel.",
    faqAnswers: {
      "Wo werden meine Daten gespeichert? Sind sie sicher?":
        "Jede Transaktion wird nur auf deinem Gerät gespeichert und funktioniert offline — keine Registrierung nötig. Du kannst jederzeit ein Backup als Tabelle exportieren, Einträge bearbeiten oder löschen; deine Daten bleiben unter deiner Kontrolle.",
      "Brauche ich ein Konto?":
        "Nein. Keine Registrierung, kein Login — App öffnen und loslegen. Alles bleibt auf deinem Gerät.",
    },
    privacyItemDescriptions: {
      "Lokal zuerst":
        "Transaktionen werden auf deinem Gerät gespeichert. Keine Registrierung — App öffnen und loslegen.",
    },
    drop: {
      highlights: ["500 Einträge gratis", "Optionaler Cloud-Sync"],
      badges: ["Optionaler Login", "Cloud-Sync"],
      privacyItems: ["Optionaler Login", "Optionaler Cloud-Sync"],
      marquee: ["Cloud-Sync"],
      comingSoon: ["Cloud-Backup & Sync"],
      faq: ["Was ist der Unterschied zwischen Kostenlos, Plus und Pro?"],
    },
  },
  it: {
    privacyFeatureTail: ". Incluse la modalità scura e un'interfaccia completamente multilingue.",
    localFirstDescription: "Conti Bianco Nero salva tutto sul tuo dispositivo. Inizia a registrare senza account ed esporta un backup in foglio di calcolo quando vuoi.",
    onDeviceLabel: "sul tuo dispositivo",
    chartTypesLabel: "tipi di grafico: torta, treemap, barre e linee",
    privacyDescription: "Conti Bianco Nero è progettata local-first. Registra le spese senza account: i tuoi dati restano sul telefono.",
    ctaFootnote: "Download gratuito · Senza registrazione",
    faqSectionDescription: "Risposte rapide su cos'è Flash Accounting, il suo modello di privacy e le piattaforme supportate.",
    settingsScreenshotDescription: "Esportazione e importazione in foglio di calcolo, glossario etichette smart, cambio di lingua e valuta.",
    faqAnswers: {
      "Dove sono salvati i miei dati? Sono al sicuro?":
        "Ogni transazione è salvata solo sul tuo dispositivo e funziona offline, senza bisogno di registrarti. Puoi esportare un backup in foglio di calcolo, modificare o eliminare i record in qualsiasi momento: i dati restano sotto il tuo controllo.",
      "Serve un account per usarla?":
        "No. Niente registrazione né login: apri l'app e inizia a registrare. Tutto resta sul tuo dispositivo.",
    },
    privacyItemDescriptions: {
      "Local-first":
        "Le transazioni restano sul tuo dispositivo. Nessuna registrazione: apri l'app e inizia a segnare.",
    },
    drop: {
      highlights: ["500 record gratuiti", "Sync cloud opzionale"],
      badges: ["Login opzionale", "Sync cloud"],
      privacyItems: ["Login opzionale", "Sync cloud opzionale"],
      marquee: ["Sync cloud"],
      comingSoon: ["Backup e sync cloud"],
      faq: ["Che differenza c'è tra Gratis, Plus e Pro?"],
    },
  },
  pt: {
    privacyFeatureTail: ". Modo escuro e interface totalmente multilíngue inclusos.",
    localFirstDescription: "A Conta Preto e Branco guarda tudo no seu aparelho. Comece a lançar sem criar conta e exporte um backup em planilha quando quiser.",
    onDeviceLabel: "no seu aparelho",
    chartTypesLabel: "tipos de gráfico — pizza, treemap, barras e linhas",
    privacyDescription: "A Conta Preto e Branco é privada por padrão. Lance gastos sem criar conta: seus dados ficam no seu celular.",
    ctaFootnote: "Download grátis · Sem cadastro",
    faqSectionDescription: "Respostas rápidas sobre o que é o Flash Accounting, seu modelo de privacidade e as plataformas suportadas.",
    settingsScreenshotDescription: "Exportação e importação de planilha, glossário de rótulos inteligentes e troca de idioma e moeda.",
    faqAnswers: {
      "Onde meus dados ficam guardados? É seguro?":
        "Cada transação fica só no seu aparelho e funciona offline — sem cadastro. Você pode exportar um backup em planilha, editar ou apagar registros a qualquer momento; seus dados seguem sob seu controle.",
      "Preciso de conta para usar?":
        "Não. Não precisa de cadastro nem de login: abra o app e comece a lançar. Tudo fica no seu aparelho.",
    },
    privacyItemDescriptions: {
      "Privada por padrão":
        "As transações ficam no seu aparelho. Sem cadastro — abra o app e comece a lançar.",
    },
    drop: {
      highlights: ["500 registros grátis", "Nuvem opcional"],
      badges: ["Login opcional", "Sinc. na nuvem"],
      privacyItems: ["Login opcional", "Nuvem opcional"],
      marquee: ["Sincronização na nuvem"],
      comingSoon: ["Backup e sincronização na nuvem"],
      faq: ["Qual a diferença entre Grátis, Plus e Pro?"],
    },
  },
  ru: {
    privacyFeatureTail: ". В комплекте тёмная тема и полностью многоязычный интерфейс.",
    localFirstDescription: "«Чёрно-белый учёт» хранит всё на вашем устройстве. Начните записывать без аккаунта, а резервную копию в виде таблицы экспортируйте в любой момент.",
    onDeviceLabel: "на вашем устройстве",
    chartTypesLabel: "вида диаграмм — круговая, древовидная, столбчатая и линейная",
    privacyDescription: "«Чёрно-белый учёт» спроектирован по принципу локального хранения. Записывайте расходы без аккаунта — данные остаются на вашем телефоне.",
    ctaFootnote: "Скачайте бесплатно · Без регистрации",
    faqSectionDescription: "Коротко о том, что такое Flash Accounting: приватность и поддерживаемые платформы.",
    settingsScreenshotDescription: "Экспорт и импорт таблиц, глоссарий умных меток, смена языка и валюты.",
    faqAnswers: {
      "Где хранятся мои данные? Это безопасно?":
        "Каждая операция хранится только на вашем устройстве и доступна офлайн — регистрация не нужна. В любой момент можно экспортировать резервную копию в таблицу, отредактировать или удалить записи — данные остаются под вашим контролем.",
      "Нужен ли аккаунт, чтобы пользоваться приложением?":
        "Нет. Ни регистрации, ни входа — откройте приложение и начинайте записывать. Всё хранится на вашем устройстве.",
    },
    privacyItemDescriptions: {
      "Локальное хранение":
        "Операции хранятся на вашем устройстве. Без регистрации — откройте приложение и записывайте.",
    },
    drop: {
      highlights: ["500 бесплатных записей", "Опциональная синхронизация"],
      badges: ["Вход по желанию", "Облачная синхронизация"],
      privacyItems: ["Вход по желанию", "Опциональная облачная синхронизация"],
      marquee: ["Облачная синхронизация"],
      comingSoon: ["Облачный бэкап и синхронизация"],
      faq: ["В чём разница между «Бесплатно», Plus и Pro?"],
    },
  },
  hi: {
    privacyFeatureTail: "। डार्क मोड और पूरी तरह बहुभाषी इंटरफ़ेस साथ में।",
    localFirstDescription: "ब्लैक व्हाइट हिसाब सब कुछ आपके डिवाइस पर रखता है। बिना अकाउंट लिखना शुरू करें, और जब चाहें स्प्रेडशीट में बैकअप एक्सपोर्ट करें।",
    onDeviceLabel: "आपके डिवाइस पर",
    chartTypesLabel: "तरह के चार्ट — पाई, ट्रीमैप, बार और लाइन",
    privacyDescription: "ब्लैक व्हाइट हिसाब लोकल-फ़र्स्ट सोच से बना है। बिना अकाउंट खर्च लिखें — डेटा आपके फ़ोन पर ही रहता है।",
    ctaFootnote: "मुफ़्त डाउनलोड · बिना साइन-अप",
    faqSectionDescription: "Flash Accounting क्या है, प्राइवेसी मॉडल और सपोर्टेड प्लैटफ़ॉर्म — झटपट जवाब।",
    settingsScreenshotDescription: "स्प्रेडशीट एक्सपोर्ट और इम्पोर्ट, स्मार्ट लेबल शब्दावली, भाषा और करेंसी बदलना।",
    faqAnswers: {
      "मेरा डेटा कहाँ रहता है? क्या यह सुरक्षित है?":
        "हर लेन-देन सिर्फ़ आपके डिवाइस पर रहता है और ऑफ़लाइन काम करता है — किसी रजिस्ट्रेशन की ज़रूरत नहीं। आप कभी भी स्प्रेडशीट में बैकअप एक्सपोर्ट कर सकते हैं, रिकॉर्ड एडिट या डिलीट कर सकते हैं — डेटा पर नियंत्रण आपका ही रहता है।",
      "क्या इस्तेमाल के लिए अकाउंट ज़रूरी है?":
        "नहीं। न साइन-अप, न लॉगिन — ऐप खोलें और लिखना शुरू करें। सारा डेटा आपके डिवाइस पर ही रहता है।",
    },
    privacyItemDescriptions: {
      "लोकल-फ़र्स्ट":
        "लेन-देन आपके डिवाइस पर सेव होते हैं। कोई रजिस्ट्रेशन नहीं — ऐप खोलिए और लिखना शुरू कीजिए।",
    },
    drop: {
      highlights: ["500 मुफ़्त रिकॉर्ड", "वैकल्पिक क्लाउड सिंक"],
      badges: ["वैकल्पिक साइन-इन", "क्लाउड सिंक"],
      privacyItems: ["वैकल्पिक साइन-इन", "वैकल्पिक क्लाउड सिंक"],
      marquee: ["क्लाउड सिंक"],
      comingSoon: ["क्लाउड बैकअप और सिंक"],
      faq: ["मुफ़्त, Plus और Pro में क्या फ़र्क है?"],
    },
  },
  id: {
    privacyFeatureTail: ". Termasuk mode gelap dan antarmuka multibahasa penuh.",
    localFirstDescription: "Akuntansi Hitam Putih menyimpan semuanya di perangkatmu. Mulai mencatat tanpa akun, dan ekspor cadangan spreadsheet kapan saja.",
    onDeviceLabel: "di perangkatmu",
    chartTypesLabel: "jenis grafik — pai, treemap, batang, dan garis",
    privacyDescription: "Akuntansi Hitam Putih dirancang lokal lebih dulu. Catat pengeluaran tanpa akun — datamu tetap di ponselmu.",
    ctaFootnote: "Unduh gratis · Tanpa daftar",
    faqSectionDescription: "Jawaban singkat tentang apa itu Flash Accounting, model privasinya, dan platform yang didukung.",
    settingsScreenshotDescription: "Ekspor dan impor spreadsheet, Glosarium Label Pintar, serta ganti bahasa dan mata uang.",
    faqAnswers: {
      "Di mana dataku disimpan? Aman tidak?":
        "Setiap transaksi hanya tersimpan di perangkatmu dan bisa diakses offline — tanpa registrasi. Kamu bisa mengekspor cadangan spreadsheet, mengedit, atau menghapus catatan kapan saja; datamu tetap dalam kendalimu.",
      "Perlu akun untuk memakainya?":
        "Tidak. Tanpa daftar dan tanpa login — buka aplikasinya dan langsung catat. Semua data tetap di perangkatmu.",
    },
    privacyItemDescriptions: {
      "Lokal lebih dulu":
        "Transaksi tersimpan di perangkatmu. Tanpa registrasi — buka aplikasinya dan langsung catat.",
    },
    drop: {
      highlights: ["500 catatan gratis", "Sinkronisasi cloud opsional"],
      badges: ["Login opsional", "Sinkronisasi cloud"],
      privacyItems: ["Login opsional", "Sinkronisasi cloud opsional"],
      marquee: ["Sinkronisasi cloud"],
      comingSoon: ["Cadangan & sinkronisasi cloud"],
      faq: ["Apa beda Gratis, Plus, dan Pro?"],
    },
  },
  tr: {
    privacyFeatureTail: ". Karanlık mod ve tamamen çok dilli arayüz dahil.",
    localFirstDescription: "Siyah Beyaz Muhasebe her şeyi cihazında saklar. Hesap açmadan kaydetmeye başla, yedeğini istediğin an tablo olarak dışa aktar.",
    onDeviceLabel: "cihazında",
    chartTypesLabel: "grafik türü — pasta, treemap, çubuk ve çizgi",
    privacyDescription: "Siyah Beyaz Muhasebe yerel öncelikli tasarlandı. Hesap açmadan harcama kaydet — verilerin telefonunda kalır.",
    ctaFootnote: "Ücretsiz indir · Kayıt gerekmez",
    faqSectionDescription: "Flash Accounting'in ne olduğu, gizlilik modeli ve desteklenen platformlar hakkında hızlı yanıtlar.",
    settingsScreenshotDescription: "Tablo dışa ve içe aktarımı, Akıllı Etiket Sözlüğü, dil ve para birimi değiştirme.",
    faqAnswers: {
      "Verilerim nerede saklanıyor? Güvende mi?":
        "Her işlem yalnızca cihazında saklanır ve çevrimdışı çalışır — kayıt olmak gerekmez. İstediğin an tablo olarak yedek alabilir, kayıtları düzenleyebilir ya da silebilirsin; verilerin kontrolü hep sende kalır.",
      "Kullanmak için hesap gerekiyor mu?":
        "Hayır. Kayıt da giriş de yok — uygulamayı aç ve hemen kaydetmeye başla. Tüm veriler cihazında kalır.",
    },
    privacyItemDescriptions: {
      "Yerel öncelikli":
        "İşlemler cihazında saklanır. Kayıt olmak yok — uygulamayı aç ve yazmaya başla.",
    },
    onDeviceValue: "%100",
    drop: {
      highlights: ["500 ücretsiz kayıt", "İsteğe bağlı bulut senkronu"],
      badges: ["İsteğe bağlı giriş", "Bulut senkronu"],
      privacyItems: ["İsteğe bağlı giriş", "İsteğe bağlı bulut senkronu"],
      marquee: ["Bulut senkronu"],
      comingSoon: ["Bulut yedekleme ve senkron"],
      faq: ["Ücretsiz, Plus ve Pro arasındaki fark ne?"],
    },
  },
  vi: {
    privacyFeatureTail: ". Có sẵn chế độ tối và giao diện đa ngôn ngữ.",
    localFirstDescription: "Sổ Đen Trắng lưu mọi thứ trên thiết bị của bạn. Bắt đầu ghi không cần tài khoản, và xuất bản sao lưu ra bảng tính bất cứ lúc nào.",
    onDeviceLabel: "trên máy bạn",
    chartTypesLabel: "kiểu biểu đồ — tròn, treemap, cột và đường",
    privacyDescription: "Sổ Đen Trắng được thiết kế ưu tiên trên máy. Ghi chi tiêu không cần tài khoản — dữ liệu ở lại trên điện thoại của bạn.",
    ctaFootnote: "Tải miễn phí · Không cần đăng ký",
    faqSectionDescription: "Giải đáp nhanh về Flash Accounting: app này là gì, mô hình riêng tư và nền tảng hỗ trợ.",
    settingsScreenshotDescription: "Xuất và nhập bảng tính, từ điển nhãn thông minh, đổi ngôn ngữ và tiền tệ.",
    faqAnswers: {
      "Dữ liệu của tôi lưu ở đâu? Có an toàn không?":
        "Mọi giao dịch chỉ lưu trên thiết bị của bạn và dùng offline được — không cần đăng ký tài khoản. Xuất bảng tính để sao lưu, sửa hay xóa bản ghi bất cứ lúc nào; dữ liệu luôn nằm trong tầm kiểm soát của bạn.",
      "Có cần tài khoản mới dùng được không?":
        "Không. Không cần đăng ký, không cần đăng nhập — mở app là ghi được ngay. Mọi dữ liệu đều nằm trên máy bạn.",
    },
    privacyItemDescriptions: {
      "Ưu tiên trên máy":
        "Giao dịch được lưu trên thiết bị của bạn. Không cần đăng ký — mở app là ghi được ngay.",
    },
    drop: {
      highlights: ["500 bản ghi miễn phí", "Đồng bộ đám mây tùy chọn"],
      badges: ["Đăng nhập tùy chọn", "Đồng bộ đám mây"],
      privacyItems: ["Đăng nhập tùy chọn", "Đồng bộ đám mây tùy chọn"],
      marquee: ["Đồng bộ đám mây"],
      comingSoon: ["Sao lưu & đồng bộ đám mây"],
      faq: ["Miễn phí, Plus và Pro khác nhau thế nào?"],
    },
  },
  th: {
    privacyFeatureTail: " มาพร้อมโหมดมืดและอินเทอร์เฟซหลายภาษาเต็มรูปแบบ",
    localFirstDescription: "บัญชีขาวดำเก็บทุกอย่างไว้ในเครื่องของคุณ เริ่มจดได้เลยโดยไม่ต้องมีบัญชี และส่งออกสเปรดชีตไว้สำรองได้ทุกเมื่อ",
    onDeviceLabel: "อยู่ในเครื่องคุณ",
    chartTypesLabel: "รูปแบบกราฟ — วงกลม ทรีแมป แท่ง และเส้น",
    privacyDescription: "บัญชีขาวดำออกแบบมาให้เก็บข้อมูลในเครื่องเป็นหลัก จดรายจ่ายได้โดยไม่ต้องมีบัญชี ข้อมูลอยู่ในมือถือของคุณเท่านั้น",
    ctaFootnote: "ดาวน์โหลดฟรี · ไม่ต้องสมัคร",
    faqSectionDescription: "คำตอบสั้น ๆ ว่า Flash Accounting คืออะไร โมเดลความเป็นส่วนตัว และแพลตฟอร์มที่รองรับ",
    settingsScreenshotDescription: "ส่งออกและนำเข้าสเปรดชีต อภิธานป้ายอัจฉริยะ สลับภาษาและสกุลเงิน",
    faqAnswers: {
      "ข้อมูลเก็บไว้ที่ไหน? ปลอดภัยไหม?":
        "ทุกรายการเก็บอยู่ในเครื่องของคุณเท่านั้น ใช้แบบออฟไลน์ได้ ไม่ต้องสมัครสมาชิก คุณส่งออกสเปรดชีตไว้สำรอง แก้ไข หรือลบรายการได้ตลอดเวลา — ข้อมูลอยู่ภายใต้การควบคุมของคุณเสมอ",
      "ต้องมีบัญชีถึงจะใช้ได้ไหม?":
        "ไม่ต้องเลย ไม่ต้องสมัคร ไม่ต้องล็อกอิน เปิดแอปแล้วจดได้ทันที ข้อมูลทั้งหมดอยู่ในเครื่องของคุณ",
    },
    privacyItemDescriptions: {
      "เก็บในเครื่องเป็นหลัก":
        "ทุกรายการเก็บในเครื่องของคุณ ไม่ต้องสมัครสมาชิก — เปิดแอปแล้วจดได้เลย",
    },
    drop: {
      highlights: ["ฟรี 500 รายการ", "ซิงก์คลาวด์เมื่อต้องการ"],
      badges: ["ล็อกอินเมื่อต้องการ", "ซิงก์คลาวด์"],
      privacyItems: ["ล็อกอินเมื่อต้องการ", "ซิงก์คลาวด์แบบเลือกได้"],
      marquee: ["ซิงก์คลาวด์"],
      comingSoon: ["สำรองและซิงก์ผ่านคลาวด์"],
      faq: ["แผนฟรี Plus และ Pro ต่างกันยังไง?"],
    },
  },
  pl: {
    privacyFeatureTail: ". Tryb ciemny i w pełni wielojęzyczny interfejs w zestawie.",
    localFirstDescription: "Czarno-białe finanse przechowują wszystko na twoim urządzeniu. Zacznij zapisywać bez zakładania konta, a kopię zapasową wyeksportuj do arkusza, kiedy chcesz.",
    onDeviceLabel: "na twoim urządzeniu",
    chartTypesLabel: "rodzaje wykresów — kołowy, treemap, słupkowy i liniowy",
    privacyDescription: "Czarno-białe finanse są zaprojektowane w duchu „najpierw lokalnie”. Zapisuj wydatki bez konta — dane zostają na twoim telefonie.",
    ctaFootnote: "Pobierz za darmo · Bez rejestracji",
    faqSectionDescription: "Szybkie odpowiedzi: czym jest Flash Accounting, jak dba o prywatność i na jakich platformach działa.",
    settingsScreenshotDescription: "Eksport i import arkusza, słownik inteligentnych etykiet, zmiana języka i waluty.",
    faqAnswers: {
      "Gdzie są przechowywane moje dane? Czy są bezpieczne?":
        "Każda transakcja jest zapisywana wyłącznie na twoim urządzeniu i działa offline — bez rejestracji. W każdej chwili wyeksportujesz kopię zapasową do arkusza, poprawisz lub usuniesz zapisy; dane pozostają pod twoją kontrolą.",
      "Czy potrzebuję konta, żeby korzystać z aplikacji?":
        "Nie. Bez rejestracji i bez logowania — otwórz aplikację i od razu zapisuj. Wszystko zostaje na twoim urządzeniu.",
    },
    privacyItemDescriptions: {
      "Najpierw lokalnie":
        "Transakcje są zapisywane na twoim urządzeniu. Bez rejestracji — otwierasz aplikację i zapisujesz.",
    },
    drop: {
      highlights: ["500 darmowych zapisów", "Opcjonalna synchronizacja"],
      badges: ["Logowanie opcjonalne", "Sync z chmurą"],
      privacyItems: ["Logowanie opcjonalne", "Opcjonalna synchronizacja"],
      marquee: ["Sync z chmurą"],
      comingSoon: ["Kopia i synchronizacja w chmurze"],
      faq: ["Czym różnią się plany Darmowy, Plus i Pro?"],
    },
  },
};

/**
 * Words that only appear in paid copy. Checked over the whole lite result, so paid copy
 * newly *added* to a dictionary fails the build too, not only a renamed target.
 */
const PAID_COPY = /\bPro\b|\bPlus\b|#pricing/;

/** The free-record-cap value used by the hero stat, the local-first stat and the metric. */
const CAP_VALUE = "500";

function fail(where: string, message: string): never {
  throw new Error(`lite overlay (${where}): ${message} — update lib/locales/lite.ts`);
}

function dropExact<T>(
  items: readonly T[],
  keyOf: (item: T) => string,
  targets: readonly string[],
  where: string
): T[] {
  for (const target of targets) {
    if (!items.some((item) => keyOf(item) === target)) {
      fail(where, `"${target}" not found`);
    }
  }
  return items.filter((item) => !targets.includes(keyOf(item)));
}

function replaceOne<T>(
  items: readonly T[],
  match: (item: T) => boolean,
  next: (item: T) => T,
  where: string
): T[] {
  const count = items.filter(match).length;
  if (count !== 1) fail(where, `expected exactly one match, found ${count}`);
  return items.map((item) => (match(item) ? next(item) : item));
}

export function applyLite(code: string, content: LocaleContent): LocaleContent {
  const copy = LITE_COPY[code];
  if (!copy) fail(code, "no lite copy for this locale");
  const s = content.siteContent;
  const at = (part: string) => `${code} ${part}`;

  const noSignIn = s.localFirst.stats.find((stat) => stat.value === "0");
  if (!noSignIn) fail(at("localFirst.stats"), 'no "0" sign-in stat to reuse');

  const siteContent: SiteContent = {
    ...s,
    nav: s.nav.filter((link) => link.href !== "#pricing"),
    hero: {
      ...s.hero,
      stats: replaceOne(
        s.hero.stats,
        (stat) => stat.value === CAP_VALUE,
        (stat) => ({ value: "0", label: noSignIn.label, company: stat.company }),
        at("hero.stats")
      ),
    },
    features: {
      ...s.features,
      items: replaceOne(
        s.features.items,
        (item) => item.number === "04",
        (item) => {
          const last = item.descriptionParts[item.descriptionParts.length - 1];
          if (!last?.text.includes("Pro")) fail(at("features 04"), "last part no longer mentions Pro");
          const parts: DescriptionPart[] = [
            ...item.descriptionParts.slice(0, -1),
            { text: copy.privacyFeatureTail },
          ];
          return { ...item, descriptionParts: parts };
        },
        at("features 04")
      ),
    },
    localFirst: {
      ...s.localFirst,
      description: copy.localFirstDescription,
      stats: replaceOne(
        s.localFirst.stats,
        (stat) => stat.value === CAP_VALUE,
        () => ({ value: copy.onDeviceValue ?? "100%", label: copy.onDeviceLabel }),
        at("localFirst.stats")
      ),
      highlights: dropExact(
        s.localFirst.highlights,
        (item) => item.title,
        copy.drop.highlights,
        at("localFirst.highlights")
      ),
    },
    metrics: {
      ...s.metrics,
      items: replaceOne(
        s.metrics.items,
        (item) => item.value === Number(CAP_VALUE),
        () => ({ value: 4, suffix: "", label: copy.chartTypesLabel }),
        at("metrics")
      ),
    },
    languages: {
      ...s.languages,
      comingSoon: dropExact(
        s.languages.comingSoon,
        (item) => item.name,
        copy.drop.comingSoon,
        at("languages.comingSoon")
      ),
    },
    privacy: {
      ...s.privacy,
      description: copy.privacyDescription,
      badges: dropExact(s.privacy.badges, (badge) => badge, copy.drop.badges, at("privacy.badges")),
      items: Object.entries(copy.privacyItemDescriptions).reduce(
        (items, [title, description]) =>
          replaceOne(
            items,
            (item) => item.title === title,
            (item) => ({ ...item, description }),
            at(`privacy.items "${title}"`)
          ),
        dropExact(s.privacy.items, (item) => item.title, copy.drop.privacyItems, at("privacy.items"))
      ),
    },
    testimonials: {
      ...s.testimonials,
      marqueeItems: dropExact(
        s.testimonials.marqueeItems,
        (item) => item,
        copy.drop.marquee,
        at("testimonials.marquee")
      ),
    },
    // The pricing section is not rendered while payments are off, but the client
    // LocaleProvider still serializes this content into every page's payload. Empty
    // it so plans and prices are not shipped invisibly either.
    pricing: {
      eyebrow: "",
      title: "",
      titleMuted: "",
      description: "",
      annualBadge: "",
      footnote: "",
      plans: [],
    },
    ui: {
      ...s.ui,
      monthlyLabel: "",
      annualLabel: "",
      billingToggleAria: "",
      popularBadge: "",
      oneTimeSuffix: "",
      perMonthSuffix: "",
      comingSoonPrice: "",
    },
    cta: { ...s.cta, footnote: copy.ctaFootnote },
    faqSection: { ...s.faqSection, description: copy.faqSectionDescription },
    footer: {
      ...s.footer,
      links: Object.fromEntries(
        Object.entries(s.footer.links).map(([group, links]) => [
          group,
          links.filter((link) => link.href !== "#pricing"),
        ])
      ),
    },
  };

  let faqItems: FaqItem[] = dropExact(
    content.faqItems,
    (item) => item.question,
    copy.drop.faq,
    at("faq")
  );
  for (const [question, answer] of Object.entries(copy.faqAnswers)) {
    faqItems = replaceOne(
      faqItems,
      (item) => item.question === question,
      (item) => ({ ...item, answer }),
      at(`faq "${question}"`)
    );
  }

  const appScreenshots: Screenshot[] = replaceOne(
    content.appScreenshots,
    (shot) => shot.id === "settings",
    (shot) => ({ ...shot, description: copy.settingsScreenshotDescription }),
    at("screenshots.settings")
  );

  const lite: LocaleContent = { ...content, siteContent, faqItems, appScreenshots };
  const leaked = JSON.stringify(lite).match(PAID_COPY);
  if (leaked) fail(code, `paid copy "${leaked[0]}" survived the overlay`);
  return lite;
}
