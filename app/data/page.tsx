import type { Metadata } from "next";
import Link from "next/link";
import { InfoPage } from "@/components/info/info-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "資料與安全 · Data & Security",
  description:
    "黑白記帳（Flash Accounting）資料策略總覽：本機優先架構、可選雲端同步、備份匯出與刪除。How Flash Accounting stores, syncs, and protects your data.",
  alternates: { canonical: "/data/" },
};

const mail = (
  <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
);

const en = (
  <>
    <h1>Data &amp; Security</h1>
    <p className="meta">
      Black White Accounting (黑白記帳) · How your data is stored, synced, and
      protected
    </p>

    <div className="callout">
      <p>
        <strong>In one sentence:</strong> your records live on your device by
        default; cloud sync is optional, tied to your account, and deletable at
        any time. This page is a plain-language overview — the binding details
        are in the <Link href="/privacy">Privacy Policy</Link> and{" "}
        <Link href="/terms">Terms &amp; Conditions</Link>.
      </p>
    </div>

    <h2>Local-first architecture</h2>
    <p>
      Every record you enter is written to a local database on your device.
      All core features — recording, statistics, filtering, and export — work
      fully offline. No network is required, and no account is required.
    </p>

    <h2>What stays on your device</h2>
    <ul>
      <li>Income and expense records (amount, type, optional description, date)</li>
      <li>Glossary terms and app settings (language, appearance, preferences)</li>
      <li>
        A queue of pending cloud writes (used only when cloud sync is enabled;
        failed writes are retried on the next sync)
      </li>
    </ul>

    <h2>What happens when you enable cloud sync (Pro)</h2>
    <ul>
      <li>
        Your income and expense records are synced to Cloud Firestore (Google)
        so they can be restored on your other devices.
      </li>
      <li>
        Synced data is tied to your account and transmitted over encrypted
        connections.
      </li>
      <li>
        Your device keeps a local copy as a cache — you can keep recording
        offline, and changes sync when you are back online.
      </li>
      <li>
        Settings includes manual controls: push local records to the cloud, or
        pull the cloud copy to this device.
      </li>
    </ul>

    <h2>Backups and export</h2>
    <ul>
      <li>Export your ledger to CSV at any time from Settings.</li>
      <li>CSV import is also available if you are moving from another tool.</li>
      <li>
        With cloud sync disabled, your data exists only on your device — keep a
        CSV or device backup if the records matter to you.
      </li>
    </ul>

    <h2>Deletion and retention</h2>
    <ul>
      <li>
        <strong>Local:</strong> delete individual records, clear all records in
        Settings, or uninstall the app — local data is gone with it.
      </li>
      <li>
        <strong>Cloud:</strong> delete synced records from within the app, or
        request account and data deletion in Settings or by emailing {mail}.
        Deletion requests are completed within 30 days.
      </li>
    </ul>

    <h2>What we never do</h2>
    <ul>
      <li>No advertising and no advertising SDKs</li>
      <li>No sale or rental of personal data</li>
      <li>No tracking across third-party apps or websites</li>
      <li>No collection of your precise location or contacts</li>
    </ul>

    <h2>Third-party services</h2>
    <p>The app relies on a small, fixed set of processors:</p>
    <ul>
      <li>
        <strong>Apple</strong> — App Store distribution and payment processing
      </li>
      <li>
        <strong>Google Firebase</strong> — optional sign-in (Firebase
        Authentication) and Pro cloud sync (Cloud Firestore)
      </li>
      <li>
        <strong>RevenueCat</strong> — purchase validation and entitlement
        management
      </li>
      <li>
        <strong>Sentry</strong> — crash reporting in production builds
      </li>
    </ul>
    <p>
      Full details, including links to each provider&apos;s privacy policy, are
      in the <Link href="/privacy">Privacy Policy</Link>.
    </p>

    <h2>Questions?</h2>
    <p>
      Email {mail}, or see the <Link href="/support">Support page</Link> for
      common questions.
    </p>
  </>
);

const zh = (
  <>
    <h1>資料與安全</h1>
    <p className="meta">
      黑白記帳（Black White Accounting）· 資料如何儲存、同步與保護
    </p>

    <div className="callout">
      <p>
        <strong>一句話說明：</strong>
        您的記帳資料預設只存在您的裝置上；雲端同步是可選的、與您的帳號綁定，且隨時可以刪除。本頁為白話總覽——具拘束力的完整內容請見
        <Link href="/privacy">隱私權政策</Link>與
        <Link href="/terms">服務條款</Link>。
      </p>
    </div>

    <h2>本機優先架構</h2>
    <p>
      您輸入的每一筆記錄都寫入裝置上的本機資料庫。所有核心功能——記帳、統計、篩選、匯出——完全離線可用，不需要網路，也不需要帳號。
    </p>

    <h2>留在裝置上的資料</h2>
    <ul>
      <li>收入與支出記錄（金額、類型、選填描述、日期）</li>
      <li>詞彙表與 App 設定（語言、外觀、偏好）</li>
      <li>
        待同步的雲端寫入佇列（僅在啟用雲端同步時使用；失敗的寫入會於下次同步時重試）
      </li>
    </ul>

    <h2>啟用雲端同步後（Pro）</h2>
    <ul>
      <li>
        您的收支記錄會同步至 Cloud
        Firestore（Google），以便在其他裝置還原。
      </li>
      <li>同步資料與您的帳號綁定，並以加密連線傳輸。</li>
      <li>
        裝置保留本機快取——離線仍可繼續記帳，恢復連線後自動同步。
      </li>
      <li>
        「設定」提供手動控制：將本機記錄推送至雲端，或從雲端拉取到此裝置。
      </li>
    </ul>

    <h2>備份與匯出</h2>
    <ul>
      <li>隨時可在「設定」將帳本匯出為 CSV。</li>
      <li>也支援 CSV 匯入，方便從其他工具搬家。</li>
      <li>
        未啟用雲端同步時，資料只存在於您的裝置——重要記錄請保留 CSV
        或裝置備份。
      </li>
    </ul>

    <h2>刪除與保留</h2>
    <ul>
      <li>
        <strong>本機：</strong>可刪除單筆記錄、於「設定」清除全部記錄，或解除安裝
        App——本機資料隨之刪除。
      </li>
      <li>
        <strong>雲端：</strong>可在 App
        內刪除同步記錄，或於「設定」請求刪除帳號與資料，也可來信 {mail}
        。刪除請求會在 30 天內完成。
      </li>
    </ul>

    <h2>我們絕不會做的事</h2>
    <ul>
      <li>不投放廣告、不內建廣告 SDK</li>
      <li>不出售或出租個人資料</li>
      <li>不跨第三方 App 或網站追蹤</li>
      <li>不收集精確位置或通訊錄</li>
    </ul>

    <h2>第三方服務</h2>
    <p>本 App 只依賴少數固定的服務商：</p>
    <ul>
      <li>
        <strong>Apple</strong> — App Store 發行與付款處理
      </li>
      <li>
        <strong>Google Firebase</strong> — 可選登入（Firebase
        Authentication）與 Pro 雲端同步（Cloud Firestore）
      </li>
      <li>
        <strong>RevenueCat</strong> — 購買驗證與權益管理
      </li>
      <li>
        <strong>Sentry</strong> — 正式版當機回報
      </li>
    </ul>
    <p>
      完整細節（含各服務商隱私權政策連結）請見
      <Link href="/privacy">隱私權政策</Link>。
    </p>

    <h2>還有問題？</h2>
    <p>
      歡迎來信 {mail}，或先到<Link href="/support">支援頁面</Link>
      查看常見問題。
    </p>
  </>
);

export default function DataPage() {
  return <InfoPage en={en} zh={zh} />;
}
