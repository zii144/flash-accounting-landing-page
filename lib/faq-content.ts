export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "什麼是黑白記帳（Flash Accounting）？",
    answer:
      "黑白記帳（Flash Accounting）是一款 iOS 個人記帳 App，主打追蹤無感消費與零摩擦記帳。只需輸入金額與描述，約三秒即可記完一筆支出或收入，幫你看清手搖、外送、小額訂閱等幽靈消費。",
  },
  {
    question: "黑白記帳和一般記帳 App 有什麼不同？",
    answer:
      "黑白記帳捨棄複雜分類與惱人提醒，專注「金額 + 描述」極簡記帳。介面黑白極簡、本機優先、免登入即可開始，並提供統計頁讓你一眼看清本月無感漏財與訂閱疲勞。",
  },
  {
    question: "資料存在哪裡？安全嗎？",
    answer:
      "預設所有交易只存在你的裝置本機，離線可用，不必註冊。需要備份時可選 Pro 雲端同步帳本。你隨時可匯出試算表、編輯或刪除紀錄，資料掌控權在你手上。",
  },
  {
    question: "需要註冊帳號才能使用嗎？",
    answer:
      "不需要。黑白記帳免費版可直接在本機記帳，最多 500 筆紀錄。只有當你需要雲端同步、跨裝置還原時，才需登入（iOS 可選 Apple 登入）。",
  },
  {
    question: "黑白記帳支援哪些語言？",
    answer:
      "支援 16 種語言：繁體中文、English、日本語、Español、Français、Deutsch、हिन्दी、Português、Русский、Bahasa Indonesia、한국어、Italiano、Türkçe、Tiếng Việt、ไทย、Polski，並支援深色模式與裝置語言自動偵測。",
  },
  {
    question: "免費版、Plus 和 Pro 差在哪？",
    answer:
      "免費版提供本機最多 500 筆紀錄、支出與收入記帳、統計篩選排序、試算表匯出與 16 種語言介面。Plus（示意價格 $14.99 一次買斷）解除筆數上限，本機無限記帳，不用訂閱、免帳號免雲端，適合重視隱私的使用者。Pro（示意價格月付 $1.99、年付 $14.99）包含 Plus 全部功能，額外提供無上限雲端儲存、推送本機至雲端、從雲端還原與換機資料還原。",
  },
  {
    question: "Android 版本什麼時候推出？",
    answer:
      "Android 版目前規劃中，尚未上架 Google Play。請關注官網或 App Store 頁面以取得最新上架消息。",
  },
  {
    question: "適合誰使用黑白記帳？",
    answer:
      "適合想快速記帳、討厭複雜分類的使用者；想揪出無感消費與訂閱疲勞的自由工作者、上班族與小企業主；以及重視隱私、希望資料只存本機的使用者。",
  },
];
