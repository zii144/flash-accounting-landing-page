import type { LocaleContent } from "./types";

// Korean dictionary. Terminology follows the App Store ko metadata
// (fastlane/metadata/ko in the app repo): "놓치기 쉬운 소비" (ghost spending),
// "조용히 빠져나간 금액" (invisible money leaks), "구독 함정" (subscription
// fatigue), "마찰 없는 기록" (frictionless logging).
const dict: LocaleContent = {
  seo: {
    title: "흑백가계부 — 3초 만에 지출 기록",
    description:
      "흑백가계부(Flash Accounting)는 미니멀 iOS 가계부 앱입니다. 3초 기록, 로컬 우선, 회원가입 없음. 잔고를 조용히 갉아먹는 커피·배달·구독을 눈으로 확인하세요.",
  },
  siteContent: {
    brand: {
      name: "흑백가계부",
      nameEn: "Flash Accounting",
      tagline:
        "놓치기 쉬운 소비를 추적하고, 마찰 없이 기록하고, 돈의 주도권을 되찾으세요.",
      description:
        "출근길에 무심코 산 커피, 점심 배달비 $4, 막차를 놓쳐 탄 심야 택시, 그리고 3년째 조용히 갱신되는 $2.99 iCloud 요금——잔고가 자꾸 줄어드는 진짜 이유는 큰 지출이 아니라 이렇게 조용히 빠져나가는 돈입니다.",
    },
    download: {
      appStoreUrl: "#",
      googlePlayUrl: "#",
      appStoreLabel: "App Store에서 무료 다운로드",
      googlePlayLabel: "Android 출시 예정",
      googlePlayEnabled: false,
    },
    nav: [
      { name: "기능", href: "#features" },
      { name: "사용 방법", href: "#how-it-works" },
      { name: "화면 미리보기", href: "#screenshots" },
      { name: "요금제", href: "#pricing" },
      { name: "자주 묻는 질문", href: "#faq" },
    ],
    hero: {
      eyebrow: "이번 달 큰 지출도 없었는데, 잔고는 왜 줄었을까요?",
      headlinePrefix: "큰돈 쓴 것도 없는데,",
      rotatingWords: [
        "돈이 어디로 갔을까",
        "조용히 빠져나간 돈",
        "놓치기 쉬운 소비",
        "이제 기록할 차례",
      ],
      stats: [
        { value: "3초", label: "한 건 기록 완료", company: "마찰 없는 기록" },
        { value: "16", label: "개 언어 지원", company: "다국어 인터페이스" },
        { value: "500", label: "건 무료 로컬 기록", company: "로컬 우선" },
        { value: "언제든", label: "내보내기", company: "데이터는 내 손안에" },
      ],
    },
    features: {
      eyebrow: "기능",
      title: "놓치기 쉬운 소비까지",
      titleMuted: "전부 보이게.",
      items: [
        {
          number: "01",
          title: "놓치기 쉬운 소비 포착",
          descriptionParts: [
            { text: "커피, 배달, 소액 구독——" },
            { text: "놓치기 쉬운 소비", highlight: true },
            {
              text: "는 생각보다 많이 쌓입니다. 한 건씩 기록하면 통계 화면에서 이번 달 ",
            },
            { text: "조용히 빠져나간 금액", highlight: true },
            { text: "이 한눈에 보입니다." },
          ],
          visual: "deploy",
        },
        {
          number: "02",
          title: "마찰 없는 기록",
          descriptionParts: [
            { text: "금액과 내용", highlight: true },
            { text: "만 입력하면 " },
            { text: "3초", highlight: true },
            {
              text: " 만에 끝. 복잡한 카테고리도, 성가신 알림도, 열자마자 끄고 싶은 화면도 없습니다. ",
            },
            { text: "기록하고 바로 일상으로", highlight: true },
            { text: " 돌아가세요." },
          ],
          visual: "ai",
        },
        {
          number: "03",
          title: "구독 함정 확인",
          descriptionParts: [
            { text: "정기 " },
            { text: "구독", highlight: true },
            {
              text: "을 지출로 남겨 보세요. 월별 요약이 '내가 이렇게 많은 앱을 먹여 살리고 있었나'를 알려줍니다. ",
            },
            { text: "소비 방화벽", highlight: true },
            { text: "을 세우고 " },
            { text: "기생충", highlight: true },
            { text: " 같은 구독은 정리하세요." },
          ],
          visual: "collab",
        },
        {
          number: "04",
          title: "프라이버시 우선, 기기 저장",
          descriptionParts: [
            { text: "오프라인에서도 사용", highlight: true },
            { text: " 가능하고, " },
            { text: "데이터는 내 기기에만 저장", highlight: true },
            {
              text: "됩니다. 필요할 때 Pro로 클라우드 동기화를 켜면 기기를 바꿔도 장부가 그대로 유지됩니다. 다크 모드와 완전한 다국어 인터페이스도 기본입니다.",
            },
          ],
          visual: "security",
        },
      ],
    },
    howItWorks: {
      eyebrow: "사용 방법",
      title: "세 단계로",
      titleMuted: "돈의 주도권을 되찾으세요.",
      status: "로컬 우선 · 로그인 없이 바로 시작",
      steps: [
        {
          number: "I",
          title: "3초 만에 한 건 기록",
          description:
            "금액과 내용을 입력하고 '지출' 또는 '수입'을 탭하세요. 인터페이스가 미니멀해서 한 건 기록에 3초면 충분합니다.",
          preview: `금액: 4.50
내용: 커피

[ 지출 ]  [ 수입 ]`,
        },
        {
          number: "II",
          title: "조용히 새는 돈 확인",
          description:
            "가계부 화면에 순액 합계가 표시되고, 지출과 수입이 한 건씩 깔끔하게 정리됩니다. 놓치기 쉬운 소비도 숨을 곳이 없습니다.",
          preview: `합계: $12,480

- $4.50   지출  커피
- $18     지출  배달
+ $3,200  수입  외주 입금`,
        },
        {
          number: "III",
          title: "구독과 지출 리뷰",
          description:
            "통계 탭으로 전환해 일별·월별로 확인하세요. 주간·월간 필터와 금액·시간 정렬로 구독 함정이 한눈에 드러납니다.",
          preview: `수입   +$3,200
지출   -$1,952
순액   +$1,248

필터: 이번 달 | 정렬: 최신순`,
        },
      ],
    },
    localFirst: {
      eyebrow: "로컬 우선",
      title: "내 데이터는",
      titleBreak: "언제나 내 손안에.",
      description:
        "흑백가계부는 기본적으로 모든 데이터를 기기에만 저장합니다. 계정 없이 바로 기록을 시작하고, 백업이 필요할 때만 클라우드 동기화를 켜세요.",
      stats: [
        { value: "500", label: "건 무료 로컬 기록" },
        { value: "0", label: "강제 로그인" },
        { value: "언제든", label: "내보내기·백업" },
      ],
      highlights: [
        { title: "데이터는 휴대폰 안에", detail: "빠르고 안정적, 인터넷 없이도 OK" },
        { title: "무료 500건", detail: "기록 습관을 들이고 써 보기에 충분한 용량" },
        { title: "선택형 클라우드 동기화", detail: "필요할 때만 기기 간 백업" },
        { title: "원탭 스프레드시트 내보내기", detail: "백업을 어디든 가져가세요" },
        { title: "수정과 삭제", detail: "어떤 기록이든 언제든 고치기" },
        { title: "페이지 단위 탐색", detail: "기록이 많아도 부드러운 스크롤" },
      ],
    },
    metrics: {
      eyebrow: "숫자로 보기",
      title: "집중하는 도구,",
      titleBreak: "소음은 제로.",
      items: [
        { value: 2, suffix: "", label: "개 메인 탭——가계부와 통계" },
        { value: 16, suffix: "", label: "개 언어 지원" },
        { value: 500, suffix: "", label: "건 무료 로컬 기록" },
        { value: 5, suffix: "", label: "가지 기간 필터——전체부터 올해까지" },
      ],
    },
    languages: {
      eyebrow: "언어와 로드맵",
      title: "전 세계 사용자를",
      titleBreak: "위한 설계.",
      description: "기기 언어를 자동 감지하고, 완전한 현지화를 제공합니다.",
      descriptionBreak: "새 기능도 계속 추가됩니다.",
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
        { name: "클라우드 백업과 동기화", category: "Pro 기능" },
        { name: "영수증 스캔 + OCR", category: "출시 예정" },
        { name: "PDF·스프레드시트 내보내기", category: "출시 예정" },
      ],
    },
    privacy: {
      eyebrow: "프라이버시",
      title: "내 재정 기록은,",
      titleBreak: "내 기기 안에.",
      description:
        "흑백가계부는 로컬 우선으로 설계되었습니다. 계정 없이 기록을 시작하고, 백업이 필요할 때만 클라우드 동기화를 켜세요.",
      badges: ["오프라인 사용", "기기에만 저장", "언제든 내보내기", "선택형 로그인", "클라우드 동기화"],
      items: [
        {
          title: "로컬 우선",
          description:
            "거래 내역은 기본적으로 기기에 저장됩니다. 회원가입 없이, 앱을 열자마자 기록할 수 있습니다.",
        },
        {
          title: "선택형 로그인",
          description:
            "클라우드 동기화가 필요할 때만 로그인하세요. iOS에서는 Apple로 로그인을 지원합니다.",
        },
        {
          title: "데이터 주도권은 나에게",
          description:
            "언제든 스프레드시트로 백업을 내보내고, 개별 기록을 수정·삭제하거나 설정에서 전체 기록을 지울 수 있습니다.",
        },
        {
          title: "선택형 클라우드 동기화",
          description:
            "기기 간 백업과 폰 교체 시 복원을 지원합니다. 설정에서 클라우드로 올리거나 내려받을 수 있습니다.",
        },
      ],
    },
    testimonials: {
      label: "사용자 이야기",
      marqueeLabel: "가계부는 마찰이 없어야 합니다",
      marqueeItems: [
        "3초 기록",
        "미니멀 인터페이스",
        "오프라인 모드",
        "언제든 내보내기",
        "통계 분석",
        "다크 모드",
        "16개 언어",
        "클라우드 동기화",
      ],
      items: [
        {
          quote:
            "이번 달 큰 지출도 없는데 잔고가 왜 줄었나 했어요. 2주 기록해 보니 커피랑 배달이 범인이더라고요.",
          author: "김서연",
          role: "프리랜서",
          company: "서울",
          metric: "조용히 새는 돈 포착",
        },
        {
          quote:
            "카테고리만 잔뜩인 가계부 앱은 딱 질색이에요. 이건 금액에 내용만 쓰면 끝, 3초면 닫아요. 처음으로 꾸준히 쓰고 있어요.",
          author: "박준호",
          role: "자영업자",
          company: "부산",
          metric: "마찰 없는 기록",
        },
        {
          quote:
            "구독을 하나하나 기록해 보고 깜짝 놀랐어요. 매달 자동으로 빠져나가는 게 이렇게 많다니. 기생충 같은 구독은 드디어 다 해지했어요.",
          author: "이지은",
          role: "직장인",
          company: "대구",
          metric: "구독 함정 확인",
        },
        {
          quote:
            "인터페이스가 부드럽고 다크 모드라 밤에도 눈이 편해요. 데이터가 내 폰에만 있다는 게 제일 안심돼요.",
          author: "최민준",
          role: "디자이너",
          company: "성남",
          metric: "로컬 우선의 안심",
        },
      ],
    },
    pricing: {
      eyebrow: "요금제",
      title: "무료로 시작.",
      titleMuted: "동기화는 준비되면.",
      description:
        "로컬 기록은 완전히 무료입니다. 기록 개수 제한은 Plus 1회 구매로 해제하고, 백업과 기기 간 동기화가 필요하면 Pro로 업그레이드하세요.",
      annualBadge: "연 $14.99",
      footnote:
        "Plus와 Pro 가격은 참고용이며, 실제 가격은 App Store / Google Play 기준입니다.",
      plans: [
        {
          id: "free",
          name: "무료",
          description: "로컬 기록, 진입 장벽 제로",
          price: { monthly: 0, annual: 0, oneTime: null },
          features: [
            "로컬 기록 최대 500건",
            "지출·수입 기록",
            "통계, 필터, 정렬",
            "스프레드시트 내보내기",
            "16개 언어 + 다크 모드",
            "로그인 없이 사용",
          ],
          cta: "무료 다운로드",
          popular: false,
        },
        {
          id: "plus",
          name: "Plus",
          description: "1회 구매로 로컬 기록 무제한",
          price: { monthly: null, annual: null, oneTime: 14.99 },
          features: [
            "무료 버전의 모든 기능",
            "로컬 기록 무제한",
            "한 번 구매, 구독 없음",
            "계정도 클라우드도 불필요",
            "데이터는 기기에만 저장",
            "구매 복원",
          ],
          cta: "로컬 무제한 잠금 해제",
          popular: false,
        },
        {
          id: "pro",
          name: "Pro",
          description: "폰을 바꿔도 그대로인 클라우드 장부",
          price: { monthly: 1.99, annual: 1.25, oneTime: null },
          features: [
            "Plus의 모든 기능",
            "무제한 클라우드 저장",
            "로컬 기록을 클라우드로 업로드",
            "클라우드에서 복원",
            "새 폰에서 데이터 복구",
            "Apple로 로그인(선택)",
            "구매 복원",
          ],
          cta: "클라우드 동기화 시작하기",
          popular: true,
        },
        {
          id: "coming-soon",
          name: "출시 예정",
          description: "시간을 아껴 줄 다음 기능들",
          price: { monthly: null, annual: null, oneTime: null },
          features: [
            "영수증 스캔 + OCR",
            "금액·가맹점 자동 입력",
            "PDF 내보내기",
            "스프레드시트 템플릿",
            "더 똑똑한 분류",
            "더 많은 내보내기 형식",
          ],
          cta: "출시 알림 받기",
          popular: false,
        },
      ],
    },
    cta: {
      title: "이제 돈의 주도권을",
      titleBreak: "되찾을 준비 되셨나요?",
      description:
        "놓치던 지출이 보이기 시작할 때 모든 게 달라집니다. 흑백가계부를 다운로드하고 3초 만에 한 건 기록해, 조용히 빠져나가는 돈을 전부 잡아내세요.",
      footnote: "무료로 시작 · 로컬 500건",
    },
    faqSection: {
      eyebrow: "자주 묻는 질문",
      title: "흑백가계부에 대하여",
      description:
        "Flash Accounting이 어떤 앱인지, 프라이버시 모델, 요금제, 지원 플랫폼을 빠르게 확인하세요.",
    },
    screenshotsSection: {
      eyebrow: "앱 화면",
      title: "미니멀 인터페이스,",
      titleMuted: "한눈에 들어옵니다.",
      description:
        "메인 탭은 가계부와 통계 두 개. 설정은 한 번의 탭으로——마찰 없는 기록, 쓰고 바로 닫으세요.",
    },
    footer: {
      links: {
        제품: [
          { name: "기능", href: "#features" },
          { name: "사용 방법", href: "#how-it-works" },
          { name: "요금제", href: "#pricing" },
          { name: "자주 묻는 질문", href: "#faq" },
          { name: "언어", href: "#integrations" },
        ],
        앱: [
          { name: "가계부 탭", href: "#screenshots" },
          { name: "통계 탭", href: "#screenshots" },
          { name: "설정", href: "#screenshots" },
          { name: "언어 선택", href: "#integrations" },
        ],
        회사: [
          { name: "소개", href: "#" },
          { name: "지원", href: "/support" },
          { name: "프라이버시", href: "/privacy" },
          { name: "문의", href: "/support" },
        ],
        "법적 고지": [
          { name: "개인정보 처리방침", href: "/privacy" },
          { name: "이용약관", href: "/terms" },
          { name: "데이터와 프라이버시", href: "/data" },
        ],
      },
      social: [
        { name: "Threads", href: "#" },
        { name: "Instagram", href: "#" },
        { name: "App Store", href: "#" },
      ],
      status: "로컬 우선 · 내 폰에만 저장",
      copyright: "2026 흑백가계부. 모든 권리 보유.",
    },
    ui: {
      monthlyLabel: "월간",
      annualLabel: "연간",
      billingToggleAria: "연간 결제로 전환",
      popularBadge: "클라우드 동기화",
      oneTimeSuffix: "1회 구매",
      perMonthSuffix: "/월",
      comingSoonPrice: "출시 예정",
      favoriteFeature: "최애 기능",
      panelTitle: "기본 탑재 기능",
      panelStatus: "오프라인 사용",
      heroImageAlt: "흑백가계부 가계부 화면",
      mockMonthlyAutopay: "매달 자동 결제",
      mockForgotWhy: "왜 구독했더라",
      mockAutoRenews: "자동 갱신",
      mockMonthlyFixedSpend: "이달 고정 지출",
      mockExpenseButton: "지출",
      mockIncomeButton: "수입",
      mockNetTotal: "순액 합계",
      mockThisMonth: "이번 달",
      mockByAmount: "금액순",
    },
  },
  faqItems: [
    {
      question: "흑백가계부(Flash Accounting)는 어떤 앱인가요?",
      answer:
        "흑백가계부(Flash Accounting)는 놓치기 쉬운 소비를 마찰 없는 기록으로 잡아내는 iOS 개인 가계부 앱입니다. 금액과 내용만 입력하면 약 3초에 한 건 완료——커피, 배달, 소액 구독처럼 잔고를 조용히 갉아먹는 지출이 눈에 보이기 시작합니다.",
    },
    {
      question: "다른 가계부 앱과 뭐가 다른가요?",
      answer:
        "복잡한 카테고리와 성가신 알림을 버리고 '금액 + 내용'의 미니멀 기록에 집중했습니다. 인터페이스는 흑백으로 극도로 심플하고, 로컬 우선이라 로그인 없이 바로 쓸 수 있으며, 통계 화면에서 이번 달 조용히 빠져나간 금액과 구독 함정이 한눈에 보입니다.",
    },
    {
      question: "데이터는 어디에 저장되나요? 안전한가요?",
      answer:
        "기본적으로 모든 거래 내역은 기기에만 저장되고 오프라인에서도 동작하며, 회원가입이 필요 없습니다. 백업이 필요하면 선택형 Pro 클라우드 동기화를 켤 수 있습니다. 스프레드시트 내보내기, 기록 수정·삭제도 언제든 가능——데이터 주도권은 항상 사용자에게 있습니다.",
    },
    {
      question: "계정을 만들어야 하나요?",
      answer:
        "아니요. 무료 버전은 최대 500건까지 전부 기기에서만 기록합니다. 클라우드 동기화와 기기 간 복원이 필요할 때만 로그인하면 됩니다(iOS는 Apple로 로그인 지원).",
    },
    {
      question: "어떤 언어를 지원하나요?",
      answer:
        "16개 언어를 지원합니다: 繁體中文, English, 日本語, Español, Français, Deutsch, हिन्दी, Português, Русский, Bahasa Indonesia, 한국어, Italiano, Türkçe, Tiếng Việt, ไทย, Polski. 다크 모드와 기기 언어 자동 감지도 지원합니다.",
    },
    {
      question: "무료, Plus, Pro는 뭐가 다른가요?",
      answer:
        "무료 버전은 로컬 기록 최대 500건, 지출·수입 기록, 필터·정렬이 있는 통계, 스프레드시트 내보내기, 16개 언어 인터페이스를 제공합니다. Plus(참고 가격 $14.99, 1회 구매)는 기록 개수 제한을 없애 로컬 무제한으로 기록할 수 있습니다——구독도, 계정도, 클라우드도 없습니다. Pro(참고 가격 월 $1.99 또는 연 $14.99)는 Plus의 모든 기능에 무제한 클라우드 저장, 클라우드 업로드, 클라우드 복원, 새 폰에서의 데이터 복구를 더합니다.",
    },
    {
      question: "Android 버전은 언제 나오나요?",
      answer:
        "Android 버전은 준비 중이며 아직 Google Play에 출시되지 않았습니다. 공식 사이트나 App Store 페이지에서 출시 소식을 확인해 주세요.",
    },
    {
      question: "흑백가계부는 어떤 사람에게 맞나요?",
      answer:
        "복잡한 카테고리 없이 빠르게 기록하고 싶은 분, 놓치기 쉬운 소비와 구독 함정을 찾아내려는 프리랜서·직장인·자영업자, 그리고 데이터를 내 기기에만 두고 싶은 프라이버시 중시 사용자에게 잘 맞습니다.",
    },
  ],
  appScreenshots: [
    {
      id: "accounting",
      title: "가계부",
      description:
        "금액, 내용, 3초면 끝. 순액 합계가 항상 보여서 놓치기 쉬운 소비가 숨지 못합니다.",
      src: "/screenshots/accounting.png",
      alt: "흑백가계부 가계부 화면——지출 입력 폼과 거래 목록",
    },
    {
      id: "statistics",
      title: "통계",
      description:
        "수입·지출·순액 요약 카드. 일별·월별 보기, 기간 필터, 기록 정렬까지.",
      src: "/screenshots/statistics.png",
      alt: "흑백가계부 통계 화면——요약 카드와 그룹 목록",
    },
    {
      id: "settings",
      title: "설정",
      description:
        "스프레드시트 내보내기, 언어 전환, 로컬 기록 한도, 선택형 클라우드 동기화.",
      src: "/screenshots/settings.png",
      alt: "흑백가계부 설정 화면——내보내기와 언어 옵션",
    },
  ],
};

export default dict;
