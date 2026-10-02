import type { Metadata } from "next";
import Link from "next/link";
import { InfoPage } from "@/components/info/info-page";
import { PAYMENTS_ENABLED } from "@/lib/payments";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "支援 · Support",
  description: PAYMENTS_ENABLED
    ? "黑白記帳（Flash Accounting）支援與常見問題：備份、恢復購買、取消訂閱、雲端同步疑難排解。Support and FAQ for Flash Accounting."
    : "黑白記帳（Flash Accounting）支援與常見問題：資料儲存、備份、匯入與語言設定。Support and FAQ for Flash Accounting.",
  alternates: { canonical: "/support/" },
};

const mail = (
  <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
);

const issues = (
  <a href={siteConfig.githubIssuesUrl} rel="noopener">
    GitHub Issues
  </a>
);

// Purchase, subscription and cloud-sync questions. The app ships without payments
// for now (lib/payments.ts), so these render only when PAYMENTS_ENABLED is true.
const enPaidQuestions = (
  <>
    <h3>I bought Plus or Pro but it isn&apos;t active on my new device.</h3>
    <p>
      Open Settings in the app and tap &quot;Restore Purchases&quot; while
      signed in to the same Apple ID you used for the original purchase.
    </p>

    <h3>How do I cancel the Pro subscription?</h3>
    <p>
      Subscriptions are managed by Apple: open your device Settings → your name
      → Subscriptions, and cancel there. Deleting the app does not cancel a
      subscription.
    </p>

    <h3>Cloud sync looks out of date. What can I do?</h3>
    <p>
      Settings includes manual recovery actions: push your local records to the
      cloud, or pull the cloud copy to this device. Failed cloud writes are
      queued locally and retried on the next sync.
    </p>
  </>
);

const zhPaidQuestions = (
  <>
    <h3>我買了 Plus 或 Pro，但新裝置上沒有生效。</h3>
    <p>
      請在 App
      的「設定」點選「恢復購買」，並確認裝置登入的是當初購買時的同一個 Apple
      ID。
    </p>

    <h3>如何取消 Pro 訂閱？</h3>
    <p>
      訂閱由 Apple 管理：前往裝置「設定」→ 您的名稱
      →「訂閱」進行取消。刪除 App 不會取消訂閱。
    </p>

    <h3>雲端同步看起來不是最新的，怎麼辦？</h3>
    <p>
      「設定」提供手動復原動作：將本機記錄推送至雲端，或從雲端拉取到此裝置。失敗的雲端寫入會在本機排隊，於下次同步時重試。
    </p>
  </>
);

const en = (
  <>
    <h1>Support</h1>
    <p className="meta">Black White Accounting (黑白記帳)</p>

    <div className="callout">
      <p>
        <strong>Contact us.</strong> Email {mail} and we will get back to you
        as soon as we can. Bug reports are also welcome on {issues}.
      </p>
    </div>

    <h2>Frequently asked questions</h2>

    <h3>Where is my data stored?</h3>
    {PAYMENTS_ENABLED ? (
      <p>
        On your device, in a local database. Nothing leaves your device unless
        you sign in and enable the Pro cloud sync. See the{" "}
        <Link href="/privacy">Privacy Policy</Link> for details.
      </p>
    ) : (
      <p>
        On your device, in a local database. Your records never leave your
        device. See the <Link href="/privacy">Privacy Policy</Link> for details.
      </p>
    )}

    <h3>How do I back up my records?</h3>
    {PAYMENTS_ENABLED ? (
      <p>
        Use CSV export in Settings for a manual backup, or upgrade to Pro to sync
        your ledger to the cloud so it survives switching phones.
      </p>
    ) : (
      <p>
        Use CSV export in Settings for a manual backup. On a new phone, bring
        the file back with CSV import.
      </p>
    )}

    {PAYMENTS_ENABLED && enPaidQuestions}

    <h3>How do I change the app language?</h3>
    <p>
      Settings → Language. The app ships in 16 languages plus a
      &quot;Device&quot; option that follows your system language.
    </p>

    {PAYMENTS_ENABLED && (
      <>
        <h3>What is the free record limit?</h3>
        <p>
          The Basic tier stores a limited number of records locally (the current
          limit is shown in the app). Plus removes the limit with a one-time
          purchase; Pro adds cloud sync as a subscription.
        </p>
      </>
    )}

    <h3>Can I import old records?</h3>
    <p>
      Yes — CSV import is available in Settings. Export from your previous tool
      as CSV and match the columns shown in the import screen.
    </p>

    <h2>Still stuck?</h2>
    <p>
      Email {mail} with your device model, iOS version, app version, and a
      description of what happened. Screenshots help a lot.
    </p>
  </>
);

const zh = (
  <>
    <h1>支援</h1>
    <p className="meta">黑白記帳（Black White Accounting）</p>

    <div className="callout">
      <p>
        <strong>聯絡我們：</strong>來信 {mail}
        ，我們會盡快回覆。也歡迎到 {issues} 回報問題。
      </p>
    </div>

    <h2>常見問題</h2>

    <h3>我的資料存在哪裡？</h3>
    {PAYMENTS_ENABLED ? (
      <p>
        存在您裝置上的本機資料庫。除非您登入並啟用 Pro
        雲端同步，資料不會離開裝置。詳見
        <Link href="/privacy">隱私權政策</Link>。
      </p>
    ) : (
      <p>
        存在您裝置上的本機資料庫，記錄不會離開裝置。詳見
        <Link href="/privacy">隱私權政策</Link>。
      </p>
    )}

    <h3>如何備份記錄？</h3>
    {PAYMENTS_ENABLED ? (
      <p>
        可在「設定」使用 CSV 匯出手動備份，或升級 Pro
        將帳本同步至雲端，換機也不會遺失。
      </p>
    ) : (
      <p>
        可在「設定」使用 CSV 匯出手動備份；換新手機時，再用 CSV
        匯入把記錄帶回來。
      </p>
    )}

    {PAYMENTS_ENABLED && zhPaidQuestions}

    <h3>如何切換 App 語言？</h3>
    <p>
      「設定」→「語言」。App 支援 16
      種語言，以及跟隨系統的「裝置」選項。
    </p>

    {PAYMENTS_ENABLED && (
      <>
        <h3>免費筆數上限是多少？</h3>
        <p>
          Basic 方案的本機記錄有筆數上限（目前上限顯示於 App 內）。Plus
          一次性買斷即可解除上限；Pro 以訂閱方式再加上雲端同步。
        </p>
      </>
    )}

    <h3>可以匯入舊記錄嗎？</h3>
    <p>
      可以——「設定」提供 CSV 匯入。請先從您原本的工具匯出
      CSV，並比照匯入畫面顯示的欄位格式。
    </p>

    <h2>還是沒解決？</h2>
    <p>
      請來信 {mail}，附上裝置型號、iOS 版本、App
      版本與問題描述，若能附上截圖更好。
    </p>
  </>
);

export default function SupportPage() {
  return <InfoPage en={en} zh={zh} />;
}
