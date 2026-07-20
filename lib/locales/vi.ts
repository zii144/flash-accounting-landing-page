import type { LocaleContent } from "./types";

// Vietnamese dictionary. Terminology follows the App Store vi metadata
// (fastlane/metadata/vi in the app repo): "Sổ Đen Trắng", "ghi chi tiêu
// không ma sát" (frictionless logging), "bẫy đăng ký" (subscription
// fatigue), "chi tiêu ma" (ghost spending), "rò rỉ vô hình" (invisible
// money leaks), "tường lửa chi tiêu" (spending firewall), "đăng ký ký
// sinh" (parasite subscriptions).
const dict: LocaleContent = {
  seo: {
    title: "Sổ Đen Trắng — Ghi một khoản chi trong 3 giây",
    description:
      "Sổ Đen Trắng (Flash Accounting) — app ghi chi tiêu tối giản cho iOS: 3 giây một khoản, dữ liệu trên máy, không cần tài khoản. Thấy rõ cà phê, giao đồ ăn và gói đăng ký âm thầm rút ví bạn.",
  },
  siteContent: {
    brand: {
      name: "Sổ Đen Trắng",
      nameEn: "Flash Accounting",
      tagline:
        "Theo dõi những khoản chi bạn không để ý. Ghi không ma sát. Lấy lại quyền kiểm soát.",
      description:
        "Ly cà phê tiện tay mua trên đường đi làm, $4 phí giao đồ ăn buổi trưa, cuốc xe công nghệ lúc trễ giờ, và khoản $2.99 iCloud âm thầm gia hạn suốt ba năm — chính những khoản rò rỉ vô hình này, chứ không phải món đồ lớn, mới là lý do số dư cứ vơi dần.",
    },
    download: {
      appStoreUrl: "#",
      googlePlayUrl: "#",
      appStoreLabel: "Tải miễn phí trên App Store",
      googlePlayLabel: "Android sắp ra mắt",
      googlePlayEnabled: false,
    },
    nav: [
      { name: "Tính năng", href: "#features" },
      { name: "Cách dùng", href: "#how-it-works" },
      { name: "Ảnh màn hình", href: "#screenshots" },
      { name: "Bảng giá", href: "#pricing" },
      { name: "Hỏi đáp", href: "#faq" },
    ],
    hero: {
      eyebrow: "Tháng này không mua gì lớn — sao số dư vẫn giảm?",
      headlinePrefix: "Không tiêu gì lớn,",
      rotatingWords: [
        "tiền đi đâu mất rồi",
        "là rò rỉ vô hình",
        "là chi tiêu ma",
        "ghi lại ngay thôi",
      ],
      stats: [
        { value: "3 giây", label: "ghi xong một khoản", company: "Ghi không ma sát" },
        { value: "16", label: "ngôn ngữ hỗ trợ", company: "Giao diện đa ngữ" },
        { value: "500", label: "bản ghi miễn phí trên máy", company: "Ưu tiên trên máy" },
        { value: "Mọi lúc", label: "xuất dữ liệu", company: "Dữ liệu trong tay bạn" },
      ],
    },
    features: {
      eyebrow: "Tính năng",
      title: "Nhìn rõ từng khoản",
      titleMuted: "chi tiêu vô hình.",
      items: [
        {
          number: "01",
          title: "Theo dõi chi tiêu vô hình",
          descriptionParts: [
            { text: "Cà phê, trà sữa, giao đồ ăn, gói đăng ký nhỏ — " },
            { text: "chi tiêu ma", highlight: true },
            {
              text: " cộng lại nhiều hơn bạn nghĩ. Ghi từng khoản, trang thống kê cho bạn thấy ngay ",
            },
            { text: "tổng rò rỉ vô hình", highlight: true },
            { text: " của tháng này." },
          ],
          visual: "deploy",
        },
        {
          number: "02",
          title: "Ghi chi tiêu không ma sát",
          descriptionParts: [
            { text: "Số tiền, mô tả", highlight: true },
            { text: " — xong trong " },
            { text: "ba giây", highlight: true },
            {
              text: ". Không danh mục phức tạp, không nhắc nhở dai dẳng, không màn hình rối muốn đóng ngay khi mở. ",
            },
            { text: "Ghi xong là đi", highlight: true },
            { text: ", cuộc sống không bị ngắt quãng." },
          ],
          visual: "ai",
        },
        {
          number: "03",
          title: "Vạch trần bẫy đăng ký",
          descriptionParts: [
            { text: "Ghi các gói " },
            { text: "đăng ký", highlight: true },
            {
              text: " định kỳ thành chi tiêu, tóm tắt tháng sẽ cho thấy bạn đang âm thầm “nuôi” bao nhiêu app. Dựng ",
            },
            { text: "tường lửa chi tiêu", highlight: true },
            { text: " và cắt hết những gói đăng ký " },
            { text: "ký sinh", highlight: true },
            { text: "." },
          ],
          visual: "collab",
        },
        {
          number: "04",
          title: "Riêng tư trước hết, lưu trên máy",
          descriptionParts: [
            { text: "Dùng offline được", highlight: true },
            { text: ", và " },
            { text: "dữ liệu ở lại trên máy bạn", highlight: true },
            {
              text: ". Pro tùy chọn mở đồng bộ đám mây để sổ chi tiêu còn nguyên khi đổi điện thoại. Có sẵn chế độ tối và giao diện đa ngôn ngữ.",
            },
          ],
          visual: "security",
        },
      ],
    },
    howItWorks: {
      eyebrow: "Cách dùng",
      title: "Ba bước để",
      titleMuted: "lấy lại quyền kiểm soát.",
      status: "Ưu tiên trên máy · Bắt đầu không cần đăng nhập",
      steps: [
        {
          number: "I",
          title: "Ba giây ghi một khoản",
          description:
            "Nhập số tiền và mô tả, rồi chạm “Ghi chi” hoặc “Ghi thu”. Giao diện tối giản — mỗi khoản chỉ mất khoảng ba giây.",
          preview: `Số tiền: 4.50
Mô tả: cà phê

[ Ghi chi ]  [ Ghi thu ]`,
        },
        {
          number: "II",
          title: "Nhìn rõ khoản rò vô hình",
          description:
            "Sổ ghi hiển thị tổng ròng cập nhật liên tục, từng khoản chi và thu liệt kê rõ ràng. Chi tiêu ma hết đường lẩn trốn.",
          preview: `Tổng: $12,480

- $4.50   Chi   cà phê
- $18     Chi   giao đồ ăn
+ $3,200  Thu   dự án freelance`,
        },
        {
          number: "III",
          title: "Soi lại đăng ký và chi tiêu",
          description:
            "Chuyển sang thống kê, xem theo ngày hoặc theo tháng. Lọc theo tuần hay tháng, sắp xếp theo số tiền hoặc thời gian — bẫy đăng ký lộ ra ngay trước mắt.",
          preview: `Thu nhập  +$3,200
Chi tiêu  -$1,952
Ròng      +$1,248

Lọc: Tháng này | Sắp xếp: Mới nhất`,
        },
      ],
    },
    localFirst: {
      eyebrow: "Ưu tiên trên máy",
      title: "Dữ liệu luôn",
      titleBreak: "trong tay bạn.",
      description:
        "Sổ Đen Trắng mặc định lưu mọi thứ trên thiết bị của bạn. Bắt đầu ghi không cần tài khoản; chỉ bật đồng bộ đám mây khi bạn muốn sao lưu.",
      stats: [
        { value: "500", label: "bản ghi miễn phí trên máy" },
        { value: "0", label: "lần ép đăng nhập" },
        { value: "Mọi lúc", label: "xuất & sao lưu" },
      ],
      highlights: [
        { title: "Dữ liệu nằm trong điện thoại", detail: "Nhanh, ổn định, không mạng vẫn dùng" },
        { title: "500 bản ghi miễn phí", detail: "Quá đủ để bắt đầu ghi và dùng thử" },
        { title: "Đồng bộ đám mây tùy chọn", detail: "Sao lưu đa thiết bị khi bạn cần" },
        { title: "Xuất bảng tính một chạm", detail: "Mang bản sao lưu đi bất cứ đâu" },
        { title: "Sửa và xóa", detail: "Chỉnh lại bất kỳ khoản nào, bất cứ lúc nào" },
        { title: "Duyệt theo trang", detail: "Cuộn mượt kể cả khi có rất nhiều bản ghi" },
      ],
    },
    metrics: {
      eyebrow: "Những con số",
      title: "Một công cụ tập trung,",
      titleBreak: "không nhiễu.",
      items: [
        { value: 2, suffix: "", label: "tab chính — sổ ghi và thống kê" },
        { value: 16, suffix: "", label: "ngôn ngữ hỗ trợ" },
        { value: 500, suffix: "", label: "bản ghi miễn phí trên máy" },
        { value: 5, suffix: "", label: "bộ lọc thời gian — từ toàn bộ đến năm nay" },
      ],
    },
    languages: {
      eyebrow: "Ngôn ngữ & lộ trình",
      title: "Thiết kế cho người dùng",
      titleBreak: "ở khắp mọi nơi.",
      description: "Tự nhận diện ngôn ngữ thiết bị, bản địa hóa đầy đủ.",
      descriptionBreak: "Nhiều tính năng mới đang trên đường đến.",
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
        { name: "Sao lưu & đồng bộ đám mây", category: "Tính năng Pro" },
        { name: "Quét hóa đơn + OCR", category: "Sắp ra mắt" },
        { name: "Xuất PDF & bảng tính", category: "Sắp ra mắt" },
      ],
    },
    privacy: {
      eyebrow: "Riêng tư",
      title: "Tài chính của bạn,",
      titleBreak: "thiết bị của bạn.",
      description:
        "Sổ Đen Trắng được thiết kế ưu tiên trên máy. Ghi chi tiêu không cần tài khoản; chỉ bật đồng bộ đám mây khi bạn muốn sao lưu.",
      badges: [
        "Dùng offline",
        "Chỉ lưu trên máy",
        "Xuất mọi lúc",
        "Đăng nhập tùy chọn",
        "Đồng bộ đám mây",
      ],
      items: [
        {
          title: "Ưu tiên trên máy",
          description:
            "Giao dịch mặc định lưu trên thiết bị của bạn. Không cần đăng ký — mở app là ghi được ngay.",
        },
        {
          title: "Đăng nhập tùy chọn",
          description:
            "Chỉ đăng nhập khi bạn muốn đồng bộ đám mây. iOS hỗ trợ Đăng nhập bằng Apple.",
        },
        {
          title: "Bạn làm chủ dữ liệu",
          description:
            "Xuất bảng tính sao lưu bất cứ lúc nào, sửa hay xóa từng khoản, hoặc xóa toàn bộ bản ghi trong Cài đặt.",
        },
        {
          title: "Đồng bộ đám mây tùy chọn",
          description:
            "Sao lưu đa thiết bị và khôi phục khi đổi máy. Đẩy hoặc kéo dữ liệu đám mây ngay trong Cài đặt.",
        },
      ],
    },
    testimonials: {
      label: "Người dùng nói gì",
      marqueeLabel: "Ghi chi tiêu phải là không ma sát",
      marqueeItems: [
        "Ghi trong 3 giây",
        "Giao diện tối giản",
        "Chế độ offline",
        "Xuất mọi lúc",
        "Thống kê",
        "Chế độ tối",
        "16 ngôn ngữ",
        "Đồng bộ đám mây",
      ],
      items: [
        {
          quote:
            "Tháng này không mua gì lớn, sao số dư vẫn giảm? Ghi được hai tuần mới vỡ lẽ — cà phê và giao đồ ăn mới là thủ phạm.",
          author: "Thu Hà",
          role: "Freelancer",
          company: "TP.HCM",
          metric: "Bắt được khoản rò vô hình",
        },
        {
          quote:
            "Tôi ghét mấy app chi tiêu cả rừng danh mục. App này chỉ số tiền cộng mô tả, ba giây là xong. Cuối cùng tôi cũng duy trì được thói quen.",
          author: "Minh Quân",
          role: "Chủ kinh doanh nhỏ",
          company: "Hà Nội",
          metric: "Ghi không ma sát",
        },
        {
          quote:
            "Ghi từng gói đăng ký một mà giật mình — mỗi tháng tự gia hạn nhiều đến vậy. Đám đăng ký ký sinh cuối cùng cũng bị hủy sạch.",
          author: "Ngọc Anh",
          role: "Nhân viên văn phòng",
          company: "Đà Nẵng",
          metric: "Lộ rõ bẫy đăng ký",
        },
        {
          quote:
            "Giao diện mượt, chế độ tối ban đêm nhìn rất dịu mắt. Dữ liệu nằm trên máy mình — dùng mà thấy yên tâm hẳn.",
          author: "Đức Long",
          role: "Nhà thiết kế",
          company: "Cần Thơ",
          metric: "An tâm vì dữ liệu trên máy",
        },
      ],
    },
    pricing: {
      eyebrow: "Bảng giá",
      title: "Bắt đầu miễn phí.",
      titleMuted: "Sẵn sàng rồi hãy đồng bộ.",
      description:
        "Ghi trên máy hoàn toàn miễn phí. Mua Plus một lần để bỏ giới hạn bản ghi, hoặc nâng cấp Pro để sao lưu và đồng bộ đa thiết bị.",
      annualBadge: "$14.99/năm",
      footnote:
        "Giá Plus và Pro chỉ mang tính tham khảo — xem App Store / Google Play để biết giá chính thức.",
      plans: [
        {
          id: "free",
          name: "Miễn phí",
          description: "Ghi trên máy, không rào cản",
          price: { monthly: 0, annual: 0, oneTime: null },
          features: [
            "Tối đa 500 bản ghi trên máy",
            "Ghi chi tiêu và thu nhập",
            "Thống kê, lọc và sắp xếp",
            "Xuất bảng tính",
            "16 ngôn ngữ + chế độ tối",
            "Không cần đăng nhập",
          ],
          cta: "Tải miễn phí",
          popular: false,
        },
        {
          id: "plus",
          name: "Plus",
          description: "Mua một lần, ghi không giới hạn trên máy",
          price: { monthly: null, annual: null, oneTime: 14.99 },
          features: [
            "Mọi thứ trong gói Miễn phí",
            "Bản ghi trên máy không giới hạn",
            "Mua một lần, không thuê bao",
            "Không tài khoản, không đám mây",
            "Dữ liệu ở lại trên máy bạn",
            "Khôi phục giao dịch mua",
          ],
          cta: "Mở khóa không giới hạn trên máy",
          popular: false,
        },
        {
          id: "pro",
          name: "Pro",
          description: "Sổ đồng bộ đám mây, đổi máy không mất dữ liệu",
          price: { monthly: 1.99, annual: 1.25, oneTime: null },
          features: [
            "Mọi thứ trong gói Plus",
            "Lưu trữ đám mây không giới hạn",
            "Đẩy bản ghi trên máy lên đám mây",
            "Khôi phục từ đám mây",
            "Lấy lại dữ liệu trên máy mới",
            "Đăng nhập bằng Apple tùy chọn",
            "Khôi phục giao dịch mua",
          ],
          cta: "Mở khóa đồng bộ đám mây",
          popular: true,
        },
        {
          id: "coming-soon",
          name: "Sắp ra mắt",
          description: "Thêm nhiều tính năng tiết kiệm thời gian",
          price: { monthly: null, annual: null, oneTime: null },
          features: [
            "Quét hóa đơn + OCR",
            "Tự điền số tiền và cửa hàng",
            "Xuất PDF",
            "Mẫu bảng tính",
            "Phân loại thông minh hơn",
            "Thêm định dạng xuất",
          ],
          cta: "Vào danh sách chờ",
          popular: false,
        },
      ],
    },
    cta: {
      title: "Sẵn sàng lấy lại",
      titleBreak: "quyền kiểm soát tiền bạc?",
      description:
        "Mọi thứ bắt đầu từ việc nhìn rõ những khoản chi bạn thường bỏ sót. Tải Sổ Đen Trắng, ghi một khoản trong ba giây và tóm gọn hết đám chi tiêu ma.",
      footnote: "Bắt đầu miễn phí · 500 bản ghi trên máy",
    },
    faqSection: {
      eyebrow: "Hỏi đáp",
      title: "Về Sổ Đen Trắng",
      description:
        "Giải đáp nhanh về Flash Accounting: app này là gì, mô hình riêng tư, các gói và nền tảng hỗ trợ.",
    },
    screenshotsSection: {
      eyebrow: "Màn hình app",
      title: "Giao diện tối giản,",
      titleMuted: "nhìn một cái là hiểu.",
      description:
        "Hai tab chính: sổ ghi và thống kê. Cài đặt chỉ cách một chạm — ghi không ma sát, xong là đóng.",
    },
    footer: {
      links: {
        "Sản phẩm": [
          { name: "Tính năng", href: "#features" },
          { name: "Cách dùng", href: "#how-it-works" },
          { name: "Bảng giá", href: "#pricing" },
          { name: "Hỏi đáp", href: "#faq" },
          { name: "Ngôn ngữ", href: "#integrations" },
        ],
        "Ứng dụng": [
          { name: "Tab sổ ghi", href: "#screenshots" },
          { name: "Tab thống kê", href: "#screenshots" },
          { name: "Cài đặt", href: "#screenshots" },
          { name: "Chọn ngôn ngữ", href: "#integrations" },
        ],
        "Công ty": [
          { name: "Giới thiệu", href: "#" },
          { name: "Hỗ trợ", href: "/support" },
          { name: "Riêng tư", href: "/privacy" },
          { name: "Liên hệ", href: "/support" },
        ],
        "Pháp lý": [
          { name: "Chính sách quyền riêng tư", href: "/privacy" },
          { name: "Điều khoản sử dụng", href: "/terms" },
          { name: "Dữ liệu & quyền riêng tư", href: "/data" },
        ],
      },
      social: [
        { name: "Threads", href: "#" },
        { name: "Instagram", href: "#" },
        { name: "App Store", href: "#" },
      ],
      status: "Ưu tiên trên máy · Chỉ lưu trên điện thoại",
      copyright: "2026 Sổ Đen Trắng. Bảo lưu mọi quyền.",
    },
    ui: {
      monthlyLabel: "Theo tháng",
      annualLabel: "Theo năm",
      billingToggleAria: "Chuyển sang thanh toán theo năm",
      popularBadge: "Đồng bộ đám mây",
      oneTimeSuffix: "một lần",
      perMonthSuffix: "/tháng",
      comingSoonPrice: "Sắp ra mắt",
      favoriteFeature: "Tính năng yêu thích",
      panelTitle: "Năng lực tích hợp",
      panelStatus: "Dùng offline được",
      heroImageAlt: "Màn hình sổ ghi của Sổ Đen Trắng",
      mockMonthlyAutopay: "Trừ tự động",
      mockForgotWhy: "Đăng ký rồi quên",
      mockAutoRenews: "Tự gia hạn",
      mockMonthlyFixedSpend: "Chi cố định tháng",
      mockExpenseButton: "Ghi chi",
      mockIncomeButton: "Ghi thu",
      mockNetTotal: "Tổng ròng",
      mockThisMonth: "Tháng này",
      mockByAmount: "Theo số tiền",
    },
  },
  faqItems: [
    {
      question: "Sổ Đen Trắng (Flash Accounting) là gì?",
      answer:
        "Sổ Đen Trắng (Flash Accounting) là app ghi chi tiêu cá nhân trên iOS, tập trung bắt các khoản chi vô hình bằng cách ghi không ma sát. Nhập số tiền và mô tả là xong trong khoảng ba giây — đủ để lộ diện cà phê, giao đồ ăn và những gói đăng ký nhỏ đang âm thầm bào mòn số dư của bạn.",
    },
    {
      question: "Khác gì các app chi tiêu thông thường?",
      answer:
        "App bỏ hẳn danh mục phức tạp và nhắc nhở dai dẳng, chỉ giữ cách ghi tối giản: số tiền cộng mô tả. Giao diện đen trắng thuần, ưu tiên trên máy, dùng được mà không cần đăng nhập, kèm trang thống kê cho thấy ngay khoản rò rỉ vô hình và bẫy đăng ký của tháng này.",
    },
    {
      question: "Dữ liệu của tôi lưu ở đâu? Có an toàn không?",
      answer:
        "Mặc định mọi giao dịch chỉ lưu trên thiết bị của bạn và dùng offline được — không cần đăng ký tài khoản. Khi muốn sao lưu, bạn có thể bật đồng bộ đám mây tùy chọn của gói Pro. Xuất bảng tính, sửa hay xóa bản ghi bất cứ lúc nào; dữ liệu luôn nằm trong tầm kiểm soát của bạn.",
    },
    {
      question: "Có cần tài khoản mới dùng được không?",
      answer:
        "Không. Gói miễn phí ghi tối đa 500 bản ghi hoàn toàn trên máy. Bạn chỉ đăng nhập khi muốn đồng bộ đám mây và khôi phục đa thiết bị (iOS hỗ trợ Đăng nhập bằng Apple).",
    },
    {
      question: "Hỗ trợ những ngôn ngữ nào?",
      answer:
        "16 ngôn ngữ: 繁體中文, English, 日本語, Español, Français, Deutsch, हिन्दी, Português, Русский, Bahasa Indonesia, 한국어, Italiano, Türkçe, Tiếng Việt, ไทย và Polski — kèm chế độ tối và tự nhận diện ngôn ngữ thiết bị.",
    },
    {
      question: "Miễn phí, Plus và Pro khác nhau thế nào?",
      answer:
        "Gói Miễn phí gồm tối đa 500 bản ghi trên máy, ghi chi tiêu và thu nhập, thống kê với lọc và sắp xếp, xuất bảng tính và giao diện 16 ngôn ngữ. Plus (giá tham khảo $14.99, mua một lần) bỏ giới hạn để ghi không giới hạn trên máy — không thuê bao, không tài khoản, không đám mây. Pro (giá tham khảo $1.99/tháng hoặc $14.99/năm) gồm mọi thứ trong Plus, thêm lưu trữ đám mây không giới hạn, đẩy lên đám mây, khôi phục từ đám mây và lấy lại dữ liệu trên máy mới.",
    },
    {
      question: "Bao giờ có bản Android?",
      answer:
        "Bản Android đang trong kế hoạch nhưng chưa có trên Google Play. Hãy theo dõi trang chính thức hoặc trang App Store để cập nhật tin ra mắt.",
    },
    {
      question: "Sổ Đen Trắng dành cho ai?",
      answer:
        "Người muốn ghi thật nhanh, không vướng danh mục phức tạp; freelancer, dân văn phòng và chủ kinh doanh nhỏ đang truy tìm chi tiêu vô hình và bẫy đăng ký; và người coi trọng quyền riêng tư, muốn dữ liệu chỉ nằm trên máy mình.",
    },
  ],
  appScreenshots: [
    {
      id: "accounting",
      title: "Sổ ghi",
      description:
        "Số tiền, mô tả, xong trong ba giây. Tổng ròng luôn hiện rõ, chi tiêu ma không còn chỗ trốn.",
      src: "/screenshots/accounting.png",
      alt: "Màn hình sổ ghi của Sổ Đen Trắng với biểu mẫu nhập chi tiêu và danh sách giao dịch",
    },
    {
      id: "statistics",
      title: "Thống kê",
      description:
        "Thẻ tóm tắt thu nhập, chi tiêu và số ròng. Xem theo ngày hoặc tháng, lọc theo thời gian, sắp xếp bản ghi.",
      src: "/screenshots/statistics.png",
      alt: "Màn hình thống kê của Sổ Đen Trắng với thẻ tóm tắt và danh sách nhóm",
    },
    {
      id: "settings",
      title: "Cài đặt",
      description:
        "Xuất bảng tính, đổi ngôn ngữ, hạn mức bản ghi trên máy và đồng bộ đám mây tùy chọn.",
      src: "/screenshots/settings.png",
      alt: "Màn hình cài đặt của Sổ Đen Trắng với tùy chọn xuất dữ liệu và ngôn ngữ",
    },
  ],
};

export default dict;
