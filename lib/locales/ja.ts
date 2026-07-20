import type { LocaleContent } from "./types";

// Japanese dictionary. Terminology follows the App Store ja metadata
// (fastlane/metadata/ja in the app repo): 「ストレスフリーな記録」
// (frictionless logging), 「気づかない支出を見える化」 (invisible
// spending), 「サブスクの罠」 (subscription fatigue), plus the coined
// terms 「幽霊出費」 (ghost spending), 「見えないお金の漏れ」 (invisible
// money leaks), 「支出のファイアウォール」 (spending firewall) and
// 「寄生サブスク」 (parasite subscriptions).
const dict: LocaleContent = {
  seo: {
    title: "白黒家計簿 — 3秒で記録できるミニマル家計簿",
    description:
      "白黒家計簿（Flash Accounting）は、3秒で記録できるミニマルなiOS家計簿アプリ。端末内保存・登録不要。コーヒー、デリバリー、サブスク——残高を静かに減らす気づかない支出を見える化します。",
  },
  siteContent: {
    brand: {
      name: "白黒家計簿",
      nameEn: "Flash Accounting",
      tagline:
        "気づかない支出を見える化。ストレスフリーな記録で、お金の主導権を取り戻す。",
      description:
        "通勤途中で買うコンビニコーヒー、ランチのデリバリーで払う $4 の配達料、終電を逃した夜のタクシー、そして3年間静かに引き落とされ続ける $2.99 の iCloud——残高が減る本当の犯人は大きな買い物ではなく、こうした見えないお金の漏れです。",
    },
    download: {
      appStoreUrl: "#",
      googlePlayUrl: "#",
      appStoreLabel: "App Storeで無料ダウンロード",
      googlePlayLabel: "Android版は近日公開",
      googlePlayEnabled: false,
    },
    nav: [
      { name: "機能", href: "#features" },
      { name: "使い方", href: "#how-it-works" },
      { name: "スクリーンショット", href: "#screenshots" },
      { name: "料金プラン", href: "#pricing" },
      { name: "よくある質問", href: "#faq" },
    ],
    hero: {
      eyebrow: "今月は大きな買い物なし。なのに、なぜ残高が減ってる？",
      headlinePrefix: "大きな出費はないのに、",
      rotatingWords: [
        "お金はどこへ消えた？",
        "静かに漏れている",
        "犯人は幽霊出費",
        "今すぐ記録しよう",
      ],
      stats: [
        { value: "3秒", label: "で1件記録", company: "ストレスフリーな記録" },
        { value: "16", label: "言語に対応", company: "多言語インターフェース" },
        { value: "500", label: "件まで無料でローカル保存", company: "ローカルファースト" },
        { value: "いつでも", label: "エクスポート", company: "データはあなたの手に" },
      ],
    },
    features: {
      eyebrow: "機能",
      title: "気づかない支出を、",
      titleMuted: "すべて見える化。",
      items: [
        {
          number: "01",
          title: "気づかない支出を見える化",
          descriptionParts: [
            { text: "コーヒー、デリバリー、少額サブスク——" },
            { text: "幽霊出費", highlight: true },
            {
              text: "は、積み重なると想像以上。1件ずつ記録すれば、統計ページで今月の",
            },
            { text: "見えないお金の漏れの合計", highlight: true },
            { text: "がひと目でわかります。" },
          ],
          visual: "deploy",
        },
        {
          number: "02",
          title: "ストレスフリーな記録",
          descriptionParts: [
            { text: "金額と内容", highlight: true },
            { text: "を入れて、" },
            { text: "約3秒", highlight: true },
            {
              text: "で完了。複雑なカテゴリも、しつこいリマインダーも、開いた瞬間に閉じたくなる画面もありません。",
            },
            { text: "記録したら、すぐ日常へ", highlight: true },
            { text: "。" },
          ],
          visual: "ai",
        },
        {
          number: "03",
          title: "サブスクの罠を把握",
          descriptionParts: [
            { text: "毎月の" },
            { text: "サブスク", highlight: true },
            {
              text: "を支出として記録すれば、月次サマリーで「こんなに払い続けていたのか」に気づけます。",
            },
            { text: "支出のファイアウォール", highlight: true },
            { text: "を築いて、" },
            { text: "寄生サブスク", highlight: true },
            { text: "を切り捨てましょう。" },
          ],
          visual: "collab",
        },
        {
          number: "04",
          title: "プライバシー優先、端末内保存",
          descriptionParts: [
            { text: "オフラインで使える", highlight: true },
            { text: "うえ、" },
            { text: "データは端末内に保存", highlight: true },
            {
              text: "。オプションのProでクラウド同期を有効にすれば、機種変更しても家計簿はそのまま。ダークモードと完全多言語のインターフェースにも対応しています。",
            },
          ],
          visual: "security",
        },
      ],
    },
    howItWorks: {
      eyebrow: "使い方",
      title: "3ステップで、",
      titleMuted: "お金の主導権を取り戻す。",
      status: "ローカルファースト · 登録なしで今すぐ開始",
      steps: [
        {
          number: "I",
          title: "3秒で1件記録",
          description:
            "金額と内容を入力して、「支出」または「収入」をタップ。ミニマルな画面だから、1件あたり約3秒で記録できます。",
          preview: `金額：4.50
内容：コーヒー

[ 支出 ]  [ 収入 ]`,
        },
        {
          number: "II",
          title: "見えない漏れに気づく",
          description:
            "家計簿画面には差引合計が常に表示され、支出も収入もすっきり一覧に。幽霊出費はもう隠れられません。",
          preview: `合計：$12,480

- $4.50   支出  コーヒー
- $18     支出  デリバリー
+ $3,200  収入  フリーランス報酬`,
        },
        {
          number: "III",
          title: "サブスクと支出を振り返る",
          description:
            "統計に切り替えて、日別・月別で確認。今週・今月で絞り込み、金額順・時間順で並べ替え——サブスクの罠がひと目でわかります。",
          preview: `収入    +$3,200
支出    -$1,952
差引    +$1,248

絞り込み：今月 | 並べ替え：新しい順`,
        },
      ],
    },
    localFirst: {
      eyebrow: "ローカルファースト",
      title: "データはいつも、",
      titleBreak: "あなたの手の中に。",
      description:
        "白黒家計簿は、すべてを端末内に保存するのが基本。アカウントなしで記録を始められて、バックアップが欲しくなったときだけクラウド同期をオンにできます。",
      stats: [
        { value: "500", label: "件まで無料でローカル保存" },
        { value: "0", label: "強制ログイン" },
        { value: "いつでも", label: "エクスポート＆バックアップ" },
      ],
      highlights: [
        { title: "データはスマホの中に", detail: "高速・確実、ネットなしでも使える" },
        { title: "無料で500件まで", detail: "記録を始めて試すには十分な容量" },
        { title: "クラウド同期はオプション", detail: "必要なときだけ端末間でバックアップ" },
        { title: "ワンタップでスプレッドシート出力", detail: "バックアップをどこへでも" },
        { title: "編集と削除", detail: "どの記録もいつでも修正できる" },
        { title: "ページ送りで快適表示", detail: "記録が増えてもスムーズにスクロール" },
      ],
    },
    metrics: {
      eyebrow: "数字で見る",
      title: "集中できるツール、",
      titleBreak: "ノイズはゼロ。",
      items: [
        { value: 2, suffix: "", label: "つのメインタブ——家計簿と統計" },
        { value: 16, suffix: "", label: "言語に対応" },
        { value: 500, suffix: "", label: "件まで無料でローカル保存" },
        { value: 5, suffix: "", label: "種類の期間フィルター——全期間から今年まで" },
      ],
    },
    languages: {
      eyebrow: "言語とロードマップ",
      title: "世界中のユーザーの",
      titleBreak: "ために設計。",
      description: "端末の言語を自動検出し、完全ローカライズ。",
      descriptionBreak: "新機能も続々登場予定。",
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
        { name: "クラウドバックアップ＆同期", category: "Pro機能" },
        { name: "レシートスキャン + OCR", category: "近日公開" },
        { name: "PDF＆スプレッドシート出力", category: "近日公開" },
      ],
    },
    privacy: {
      eyebrow: "プライバシー",
      title: "あなたの家計は、",
      titleBreak: "あなたの端末に。",
      description:
        "白黒家計簿はローカルファースト設計。アカウントなしで記録でき、バックアップが欲しいときだけクラウド同期をオンにできます。",
      badges: [
        "オフラインで使える",
        "端末内のみ保存",
        "いつでもエクスポート",
        "ログインは任意",
        "クラウド同期",
      ],
      items: [
        {
          title: "ローカルファースト",
          description:
            "取引は初期設定で端末内に保存。登録不要——アプリを開いたら、すぐ記録を始められます。",
        },
        {
          title: "ログインは任意",
          description:
            "クラウド同期を使いたいときだけログイン。iOSでは「Appleでサインイン」に対応しています。",
        },
        {
          title: "データの主導権はあなたに",
          description:
            "いつでもスプレッドシートでバックアップを出力、1件ずつ編集・削除、設定から全記録の消去もできます。",
        },
        {
          title: "クラウド同期はオプション",
          description:
            "端末間でバックアップして、機種変更後も復元。設定からクラウドへの送信・取得ができます。",
        },
      ],
    },
    testimonials: {
      label: "ユーザーの声",
      marqueeLabel: "家計簿はストレスフリーであるべき",
      marqueeItems: [
        "3秒で記録",
        "ミニマルな画面",
        "オフライン対応",
        "いつでもエクスポート",
        "統計機能",
        "ダークモード",
        "16言語対応",
        "クラウド同期",
      ],
      items: [
        {
          quote:
            "今月は大きな買い物をしていないのに、なぜか残高が減っている。2週間記録して、やっとわかりました——犯人はコーヒーとデリバリーでした。",
          author: "佐藤さん",
          role: "フリーランス",
          company: "東京",
          metric: "見えない漏れを発見",
        },
        {
          quote:
            "カテゴリだらけの家計簿アプリが苦手でした。これは金額と内容だけ、3秒で閉じられる。初めて記帳が続いています。",
          author: "田中さん",
          role: "小さな会社の経営者",
          company: "大阪",
          metric: "ストレスフリーな記録",
        },
        {
          quote:
            "サブスクを1件ずつ記録してみたら、毎月こんなに自動で引き落とされていたのかと衝撃。寄生サブスクをやっと解約できました。",
          author: "鈴木さん",
          role: "会社員",
          company: "名古屋",
          metric: "サブスクの罠を把握",
        },
        {
          quote:
            "動作がなめらかで、ダークモードは夜でも目にやさしい。データはスマホの中だけ——それが何より安心です。",
          author: "高橋さん",
          role: "デザイナー",
          company: "福岡",
          metric: "ローカルファーストの安心感",
        },
      ],
    },
    pricing: {
      eyebrow: "料金プラン",
      title: "無料で始める。",
      titleMuted: "同期は必要になってから。",
      description:
        "ローカル記録は完全無料。件数の上限を外したいなら買い切りのPlus、バックアップと端末間同期が必要ならProへアップグレード。",
      annualBadge: "年額 $14.99",
      footnote:
        "PlusとProの価格は目安です。正式な価格は App Store / Google Play をご確認ください。",
      plans: [
        {
          id: "free",
          name: "無料",
          description: "ローカル記録、ハードルはゼロ",
          price: { monthly: 0, annual: 0, oneTime: null },
          features: [
            "ローカル保存 最大500件",
            "支出と収入の記録",
            "統計・絞り込み・並べ替え",
            "スプレッドシート出力",
            "16言語 + ダークモード",
            "ログイン不要",
          ],
          cta: "無料でダウンロード",
          popular: false,
        },
        {
          id: "plus",
          name: "Plus",
          description: "1回買い切り、ローカル記録が無制限に",
          price: { monthly: null, annual: null, oneTime: 14.99 },
          features: [
            "無料版の全機能",
            "ローカル記録が無制限",
            "1回買い切り、サブスクなし",
            "アカウント不要、クラウド不要",
            "データは端末内のみ",
            "購入の復元",
          ],
          cta: "ローカル無制限をアンロック",
          popular: false,
        },
        {
          id: "pro",
          name: "Pro",
          description: "クラウド同期で、機種変更しても家計簿はそのまま",
          price: { monthly: 1.99, annual: 1.25, oneTime: null },
          features: [
            "Plusの全機能",
            "クラウド保存が無制限",
            "ローカル記録をクラウドへ送信",
            "クラウドから復元",
            "新しいスマホでデータ復元",
            "「Appleでサインイン」に対応（任意）",
            "購入の復元",
          ],
          cta: "クラウド同期をアンロック",
          popular: true,
        },
        {
          id: "coming-soon",
          name: "近日公開",
          description: "時短につながる新機能",
          price: { monthly: null, annual: null, oneTime: null },
          features: [
            "レシートスキャン + OCR",
            "金額と店名を自動入力",
            "PDF出力",
            "スプレッドシートのテンプレート",
            "より賢い分類",
            "さらに多くの出力形式",
          ],
          cta: "ウェイトリストに登録",
          popular: false,
        },
      ],
    },
    cta: {
      title: "そろそろ、お金の主導権を",
      titleBreak: "取り戻しませんか？",
      description:
        "まずは、見落としていた支出をすべて見えるようにすることから。白黒家計簿をダウンロードして、3秒で1件記録——幽霊出費を残らず捕まえましょう。",
      footnote: "無料で開始 · ローカル500件まで",
    },
    faqSection: {
      eyebrow: "よくある質問",
      title: "白黒家計簿について",
      description:
        "Flash Accountingとはどんなアプリか、プライバシーの考え方、料金プラン、対応プラットフォームをまとめました。",
    },
    screenshotsSection: {
      eyebrow: "アプリ画面",
      title: "ミニマルな画面で、",
      titleMuted: "ひと目でわかる。",
      description:
        "メインタブは家計簿と統計の2つだけ。設定もワンタップ——ストレスフリーに記録して、終わったらすぐ閉じる。",
    },
    footer: {
      links: {
        プロダクト: [
          { name: "機能", href: "#features" },
          { name: "使い方", href: "#how-it-works" },
          { name: "料金プラン", href: "#pricing" },
          { name: "よくある質問", href: "#faq" },
          { name: "対応言語", href: "#integrations" },
        ],
        アプリ: [
          { name: "家計簿タブ", href: "#screenshots" },
          { name: "統計タブ", href: "#screenshots" },
          { name: "設定", href: "#screenshots" },
          { name: "言語切り替え", href: "#integrations" },
        ],
        会社情報: [
          { name: "このアプリについて", href: "#" },
          { name: "サポート", href: "/support" },
          { name: "プライバシー", href: "/privacy" },
          { name: "お問い合わせ", href: "/support" },
        ],
        法的情報: [
          { name: "プライバシーポリシー", href: "/privacy" },
          { name: "利用規約", href: "/terms" },
          { name: "データとプライバシー", href: "/data" },
        ],
      },
      social: [
        { name: "Threads", href: "#" },
        { name: "Instagram", href: "#" },
        { name: "App Store", href: "#" },
      ],
      status: "ローカルファースト · 保存はスマホの中だけ",
      copyright: "2026 白黒家計簿. All rights reserved.",
    },
    ui: {
      monthlyLabel: "月額",
      annualLabel: "年額",
      billingToggleAria: "年額プランに切り替える",
      popularBadge: "クラウド同期",
      oneTimeSuffix: "買い切り",
      perMonthSuffix: "/月",
      comingSoonPrice: "近日公開",
      favoriteFeature: "お気に入り機能",
      panelTitle: "内蔵機能",
      panelStatus: "オフラインOK",
      heroImageAlt: "白黒家計簿の家計簿画面",
      mockMonthlyAutopay: "毎月の自動課金",
      mockForgotWhy: "なぜ契約したっけ",
      mockAutoRenews: "自動更新",
      mockMonthlyFixedSpend: "今月の固定費",
      mockExpenseButton: "支出",
      mockIncomeButton: "収入",
      mockNetTotal: "差引合計",
      mockThisMonth: "今月",
      mockByAmount: "金額順",
    },
  },
  faqItems: [
    {
      question: "白黒家計簿（Flash Accounting）とは？",
      answer:
        "白黒家計簿（Flash Accounting）は、気づかない支出の見える化とストレスフリーな記録に特化したiOS向け個人家計簿アプリです。金額と内容を入れるだけ、約3秒で1件記録完了——コーヒー、デリバリー、少額サブスクなど、残高を静かに減らす幽霊出費が見えてきます。",
    },
    {
      question: "ほかの家計簿アプリと何が違うの？",
      answer:
        "複雑なカテゴリやしつこいリマインダーを捨てて、「金額 + 内容」だけのミニマルな記録に絞りました。白と黒だけの画面、ローカルファースト、ログインなしで開始OK。統計ページを開けば、今月の見えないお金の漏れとサブスクの罠がひと目でわかります。",
    },
    {
      question: "データはどこに保存される？安全？",
      answer:
        "初期設定では、すべての取引は端末内にのみ保存され、オフラインで使えます。登録は不要です。バックアップが欲しいときは、オプションのProクラウド同期を利用できます。スプレッドシートへの出力、記録の編集・削除はいつでも可能——データの主導権はあなたにあります。",
    },
    {
      question: "アカウント登録は必要？",
      answer:
        "不要です。無料版は最大500件まで、すべて端末内で記録できます。ログインが必要になるのは、クラウド同期や端末間の復元を使いたいときだけです（iOSでは「Appleでサインイン」に対応）。",
    },
    {
      question: "対応している言語は？",
      answer:
        "16言語に対応：繁體中文、English、日本語、Español、Français、Deutsch、हिन्दी、Português、Русский、Bahasa Indonesia、한국어、Italiano、Türkçe、Tiếng Việt、ไทย、Polski。さらにダークモードと端末言語の自動検出にも対応しています。",
    },
    {
      question: "無料版・Plus・Proの違いは？",
      answer:
        "無料版は、ローカル最大500件の記録、支出と収入の記録、絞り込み・並べ替え付きの統計、スプレッドシート出力、16言語のインターフェースを含みます。Plus（目安価格 $14.99 買い切り）は件数上限を撤廃してローカル記録が無制限に——サブスクなし、アカウント不要、クラウド不要。Pro（目安価格 月額 $1.99 / 年額 $14.99）はPlusの全機能に加えて、無制限のクラウド保存、クラウドへの送信、クラウドからの復元、機種変更時のデータ復元が使えます。",
    },
    {
      question: "Android版はいつ出る？",
      answer:
        "Android版は計画中ですが、まだGoogle Playには公開されていません。公式サイトまたはApp Storeページで最新の公開情報をご確認ください。",
    },
    {
      question: "白黒家計簿はどんな人向け？",
      answer:
        "複雑なカテゴリなしでサッと記録したい人。気づかない支出とサブスクの罠を突き止めたいフリーランス、会社員、小さな会社の経営者。そして、データを自分の端末だけに置いておきたいプライバシー重視の人にぴったりです。",
    },
  ],
  appScreenshots: [
    {
      id: "accounting",
      title: "家計簿",
      description:
        "金額と内容を入れて、約3秒で完了。差引合計が常に見えるから、幽霊出費はもう隠れられません。",
      src: "/screenshots/accounting.png",
      alt: "白黒家計簿の家計簿画面。支出の入力フォームと取引リストを表示",
    },
    {
      id: "statistics",
      title: "統計",
      description:
        "収入・支出・差引のサマリーカード。日別・月別の表示、期間の絞り込み、記録の並べ替えに対応。",
      src: "/screenshots/statistics.png",
      alt: "白黒家計簿の統計画面。サマリーカードとグループ化されたリストを表示",
    },
    {
      id: "settings",
      title: "設定",
      description:
        "スプレッドシート出力、言語切り替え、ローカル保存の上限、オプションのクラウド同期。",
      src: "/screenshots/settings.png",
      alt: "白黒家計簿の設定画面。エクスポートと言語のオプションを表示",
    },
  ],
};

export default dict;
