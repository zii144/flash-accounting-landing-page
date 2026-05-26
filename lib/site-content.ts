export const siteContent = {
  brand: {
    name: "黑白記帳｜追蹤無感消費",
    nameEn: "Flash Accounting",
    tagline: "追蹤無感消費，零摩擦記帳，重掌財務主導權。",
    description:
      "早上超商隨手加購的茶葉蛋、下午點外送多付的 $45 運費、高鐵沒趕上補票的差額、還有默默扣款三年的 $90 iCloud 空間——這些無感漏財，才是戶頭變薄的真正元兇。",
  },
  download: {
    appStoreUrl: "#",
    googlePlayUrl: "#",
    appStoreLabel: "App Store 免費下載",
    googlePlayLabel: "Android 平台即將推出",
    googlePlayEnabled: false,
  },
  nav: [
    { name: "功能", href: "#features" },
    { name: "如何使用", href: "#how-it-works" },
    { name: "畫面預覽", href: "#screenshots" },
    { name: "方案", href: "#pricing" },
    { name: "常見問題", href: "#faq" },
  ],
  hero: {
    eyebrow: "這個月沒大買，為什麼戶頭還是這麼少？",
    headlinePrefix: "沒花大錢，",
    rotatingWords: ["錢怎麼不見了", "是無感漏財", "是幽靈消費", "該記一筆了"],
    stats: [
      { value: "3 秒", label: "記完一筆", company: "零摩擦記帳" },
      { value: "6", label: "種語言支援", company: "多語介面" },
      { value: "200", label: "筆本機免費額度", company: "本機優先" },
      { value: "隨時", label: "匯出", company: "資料在你手上" },
    ],
  },
  features: {
    eyebrow: "功能",
    title: "看清每一筆",
    titleMuted: "無感消費。",
    items: [
      {
        number: "01",
        title: "追蹤無感消費",
        descriptionParts: [
          { text: "手搖、外送、小額訂閱——" },
          { text: "幽靈消費", highlight: true },
          { text: "加起來比你想像的多。記下一筆，統計頁一眼看清本月" },
          { text: "無感漏財總額", highlight: true },
          { text: "。" },
        ],
        visual: "deploy",
      },
      {
        number: "02",
        title: "零摩擦記帳",
        descriptionParts: [
          { text: "金額、描述", highlight: true },
          { text: "，" },
          { text: "三秒", highlight: true },
          { text: "完成。沒有複雜分類、沒有惱人提醒、沒有打開就想關的介面。" },
          { text: "記完就走", highlight: true },
          { text: "，生活不被打斷。" },
        ],
        visual: "ai",
      },
      {
        number: "03",
        title: "揪出訂閱疲勞",
        descriptionParts: [
          { text: "把固定" },
          { text: "訂閱", highlight: true },
          { text: "當成支出記下來，每月統計幫你發現「原來我在養這麼多 App」。建立" },
          { text: "消費防火牆", highlight: true },
          { text: "，殺掉" },
          { text: "寄生蟲", highlight: true },
          { text: "訂閱。" },
        ],
        visual: "collab",
      },
      {
        number: "04",
        title: "穩私優先，本機儲存",
        descriptionParts: [
          { text: "離線", highlight: true },
          { text: "可用，" },
          { text: "資料只存本機", highlight: true },
          { text: "。可選 Pro 解鎖雲端同步帳本，換機也不丟資料。支援繁體中文、深色模式與多語介面。" },
        ],
        visual: "security",
      },
    ],
  },
  howItWorks: {
    eyebrow: "如何使用",
    title: "三步驟，",
    titleMuted: "重掌財務主導權。",
    status: "本機優先 · 免登入即可開始",
    steps: [
      {
        number: "I",
        title: "三秒記一筆",
        description: "輸入金額與描述，點「記支出」或「記收入」。介面極簡，三秒就能記完一筆。",
        preview: `金額：85
描述：手搖飲

[ 記支出 ]  [ 記收入 ]`,
      },
      {
        number: "II",
        title: "看清無感漏財",
        description: "記帳畫面會顯示淨額總計，每筆支出與收入都清楚列出，幽靈消費無所遁形。",
        preview: `總計：$12,480

- $85   支出  手搖飲
- $320  支出  外送
+ $3200 收入  接案入帳`,
      },
      {
        number: "III",
        title: "統計訂閱與支出",
        description: "切到統計畫面，按日或按月查看。可篩選本週、本月，也能依金額或時間排序，訂閱疲勞一眼就看懂。",
        preview: `收入    +$3,200
支出    -$1,952
淨額    +$1,248

篩選：本月 | 排序：最新`,
      },
    ],
  },
  localFirst: {
    eyebrow: "本機優先",
    title: "資料永遠",
    titleBreak: "在你手上。",
    description:
      "黑白記帳預設只在本機儲存。不必註冊就能開始記帳；需要備份時，也可選擇雲端同步帳本。",
    stats: [
      { value: "200", label: "筆本機免費額度" },
      { value: "0", label: "強制登入" },
      { value: "隨時", label: "匯出備份" },
    ],
    highlights: [
      { title: "資料存在手機裡", detail: "快速、可靠，沒網路也能用" },
      { title: "200 筆免費額度", detail: "足夠開始記帳與試用" },
      { title: "可選雲端同步", detail: "需要時可跨裝置備份" },
      { title: "一鍵匯出試算表", detail: "備份帶著走" },
      { title: "編輯與刪除", detail: "隨時修正每一筆" },
      { title: "分頁瀏覽", detail: "大量紀錄也能順暢捲動" },
    ],
  },
  metrics: {
    eyebrow: "數據說話",
    title: "專注工具，",
    titleBreak: "沒有雜訊。",
    items: [
      { value: 2, suffix: "", label: "主要分頁——記帳與統計" },
      { value: 6, suffix: "", label: "語言支援" },
      { value: 200, suffix: "", label: "本機免費筆數" },
      { value: 5, suffix: "", label: "時間篩選——全部到本年" },
    ],
  },
  languages: {
    eyebrow: "語言與藍圖",
    title: "為各地使用者",
    titleBreak: "而設計。",
    description: "支援裝置語言偵測，繁體中文完整在地化。",
    descriptionBreak: "更多功能持續推出。",
    items: [
      { name: "繁體中文", native: "繁體中文" },
      { name: "English", native: "English" },
      { name: "日本語", native: "日本語" },
      { name: "Español", native: "Español" },
      { name: "Français", native: "Français" },
      { name: "Deutsch", native: "Deutsch" },
    ],
    comingSoon: [
      { name: "雲端備份與同步", category: "Pro 功能" },
      { name: "收據掃描 + OCR", category: "即將推出" },
      { name: "PDF 與試算表匯出", category: "即將推出" },
    ],
  },
  privacy: {
    eyebrow: "穩私",
    title: "你的財務，",
    titleBreak: "你的裝置。",
    description:
      "黑白記帳以本機優先為設計核心。不必註冊就能記帳；需要備份時，也可選擇雲端同步。",
    badges: ["離線可用", "只存本機", "隨時匯出", "可選登入", "雲端同步"],
    items: [
      {
        title: "本機優先",
        description: "交易預設存在你的裝置。不必註冊，打開就能記帳。",
      },
      {
        title: "可選登入",
        description: "只有需要雲端同步時才登入。iOS 可選 Apple 登入（需設定）。",
      },
      {
        title: "你掌控資料",
        description: "隨時匯出試算表備份、編輯或刪除單筆，或在設定中清除全部紀錄。",
      },
      {
        title: "可選雲端同步",
        description: "需要時可跨裝置備份，換機也能還原。設定頁可推送或拉取雲端資料。",
      },
    ],
  },
  testimonials: {
    label: "使用者怎麼說",
    marqueeLabel: "記帳該是零摩擦的",
    marqueeItems: [
      "三秒記帳",
      "極簡介面",
      "離線模式",
      "隨時匯出",
      "統計分析",
      "深色模式",
      "多語支援",
      "雲端同步",
    ],
    items: [
      {
        quote: "這個月沒大買，戶頭怎麼還是變少？記了兩週才發現，手搖和外送才是元兇。",
        author: "陳小姐",
        role: "自由工作者",
        company: "台北",
        metric: "揪出無感漏財",
      },
      {
        quote: "討厭記帳 App 一堆分類。這個金額加描述就完，三秒關 App，終於堅持下來。",
        author: "王先生",
        role: "小企業主",
        company: "台中",
        metric: "零摩擦記帳",
      },
      {
        quote: "把訂閱一筆一筆記下來，才嚇到原來每月固定扣這麼多。該清的寄生蟲終於清了。",
        author: "林小姐",
        role: "上班族",
        company: "高雄",
        metric: "看清訂閱疲勞",
      },
      {
        quote: "繁體中文介面很順，深色模式晚上記帳也舒服。資料在本機，用起來安心。",
        author: "黃先生",
        role: "設計師",
        company: "香港",
        metric: "本機優先安心",
      },
    ],
  },
  pricing: {
    eyebrow: "方案",
    title: "免費開始。",
    titleMuted: "準備好再同步。",
    description: "本機記帳完全免費。需要備份與跨裝置同步時，再升級 Pro。",
    annualBadge: "年付 $14.99",
    footnote: "Pro 價格為示意，實際以 App Store / Google Play 為準。",
    plans: [
      {
        name: "免費",
        description: "本機記帳，零門檻開始",
        price: { monthly: 0, annual: 0 },
        features: [
          "本機最多 200 筆紀錄",
          "支出與收入記帳",
          "統計篩選與排序",
          "試算表匯出",
          "6 語言 + 深色模式",
          "免登入即可使用",
        ],
        cta: "免費下載",
        popular: false,
      },
      {
        name: "Pro",
        description: "雲端同步帳本，換機不丟資料",
        price: { monthly: 1.99, annual: 1.25 },
        features: [
          "包含免費版全部功能",
          "無上限雲端儲存",
          "推送本機至雲端",
          "從雲端還原至本機",
          "換機資料還原",
          "可選 Apple 登入",
          "恢復購買",
        ],
        cta: "解鎖雲端同步",
        popular: true,
      },
      {
        name: "即將推出",
        description: "更多省時功能",
        price: { monthly: null, annual: null },
        features: [
          "收據掃描 + OCR",
          "自動填入金額與商家",
          "PDF 匯出",
          "試算表範本",
          "更聰明的分類",
          "更多匯出格式",
        ],
        cta: "加入等候",
        popular: false,
      },
    ],
  },
  cta: {
    title: "準備好",
    titleBreak: "重掌財務主導權？",
    description:
      "從看清每一筆無感消費開始。下載黑白記帳，三秒記一筆，把幽靈消費全部抓出來。",
    footnote: "免費開始 · 本機 200 筆",
  },
  footer: {
    links: {
      產品: [
        { name: "功能", href: "#features" },
        { name: "如何使用", href: "#how-it-works" },
        { name: "方案", href: "#pricing" },
        { name: "常見問題", href: "#faq" },
        { name: "語言", href: "#integrations" },
      ],
      App: [
        { name: "記帳分頁", href: "#screenshots" },
        { name: "統計分頁", href: "#screenshots" },
        { name: "設定", href: "#screenshots" },
        { name: "語言選擇", href: "#integrations" },
      ],
      公司: [
        { name: "關於", href: "#" },
        { name: "支援", href: "#" },
        { name: "穩私", href: "#" },
        { name: "聯絡", href: "#" },
      ],
      法律: [
        { name: "隱私政策", href: "#" },
        { name: "服務條款", href: "#" },
        { name: "資料與穩私", href: "#security" },
      ],
    },
    social: [
      { name: "Threads", href: "#" },
      { name: "Instagram", href: "#" },
      { name: "App Store", href: "#" },
    ],
    status: "本機優先 · 只存手機",
  },
} as const;

export const appScreenshots = [
  {
    id: "accounting",
    title: "記帳",
    description: "金額、描述，三秒完成。淨額總計一眼看清，幽靈消費無所遁形。",
    src: "/screenshots/accounting.png",
    alt: "黑白記帳記帳畫面，顯示支出輸入表單與交易列表",
  },
  {
    id: "statistics",
    title: "統計",
    description: "收入、支出、淨額摘要卡片。按日或按月、篩選時間、排序紀錄。",
    src: "/screenshots/statistics.png",
    alt: "黑白記帳統計畫面，顯示摘要卡片與分組列表",
  },
  {
    id: "settings",
    title: "設定",
    description: "試算表匯出、語言切換、本機額度與可選雲端同步。",
    src: "/screenshots/settings.png",
    alt: "黑白記帳設定畫面，顯示匯出與語言選項",
  },
] as const;
