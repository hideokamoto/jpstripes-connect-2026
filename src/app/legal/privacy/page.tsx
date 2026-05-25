import type { Metadata } from 'next';
import { LegalNav } from '@/components/LegalNav';

export const metadata: Metadata = {
  title: 'プライバシーポリシー — JP_Stripes Connect 2026',
  description:
    'JP_Stripes Connect 2026 における個人情報の取り扱いについて定めたプライバシーポリシー。',
};

export default function Privacy() {
  return (
    <article>
      <header className="legal-head">
        <div className="num">Legal</div>
        <h1>
          プライバシー<em>ポリシー</em>
        </h1>
        <div className="meta">最終更新日: 2026年5月25日</div>
      </header>

      <div className="legal-body">
        <p>
          JP_Stripes（代表：岡本秀高）（以下「当団体」）は、JP_Stripes Connect 2026（以下「本イベント」）の運営にあたり、取得した個人情報を以下のとおり取り扱います。
        </p>

        <h2>1. 取得する情報</h2>
        <ul>
          <li>氏名、メールアドレス、所属（会社名・部署名）</li>
          <li>連絡先電話番号（任意）</li>
          <li>お問い合わせ内容</li>
          <li>イベント当日に撮影される写真・動画</li>
        </ul>
        <p>
          クレジットカード情報は決済代行の Stripe が直接処理し、当団体は取得・保存しません。
        </p>

        <h2>2. 利用目的</h2>
        <ul>
          <li>本イベントの申込受付、参加者管理、当日受付</li>
          <li>本イベントに関するご連絡</li>
          <li>お問い合わせへの対応</li>
        </ul>

        <h2>3. 委託先</h2>
        <p>利用目的の達成に必要な範囲で、以下の事業者に取扱いを委託します。</p>
        <ul>
          <li>ストライプジャパン株式会社 — 決済処理</li>
          <li>株式会社ビープラウド — 参加管理（connpass）</li>
          <li>Google LLC — お問い合わせフォーム（Google フォーム）、イベント配信・録画の公開（YouTube）</li>
          <li>Slack Technologies, LLC — お問い合わせ対応のためのチーム内連絡</li>
          <li>株式会社ヌーラボ — お問い合わせ管理（Backlog）</li>
          <li>Zoom Communications, Inc. — オンライン配信、リモート登壇、運営打ち合わせ</li>
        </ul>
        <p>
          上記のうち Google LLC、Slack Technologies, LLC、Zoom Communications, Inc. は米国に所在する事業者です。
        </p>

        <h2>4. 写真・動画</h2>
        <p>
          本イベントでは記録・広報を目的として会場内で写真・動画を撮影し、オンライン配信（Zoom 等）を行うことがあります。これらは当団体のウェブサイト、SNS、YouTube 等で公開されることがあります。掲載を希望されない場合は、
          <a
            href="https://forms.gle/pPfUy12C7DfQ8UND9"
            target="_blank"
            rel="noopener noreferrer"
          >
            お問い合わせフォーム
          </a>
          よりご連絡ください。
        </p>

        <h2>5. お問い合わせ</h2>
        <p>
          個人情報の取扱いに関するお問い合わせは、
          <a
            href="https://forms.gle/pPfUy12C7DfQ8UND9"
            target="_blank"
            rel="noopener noreferrer"
          >
            お問い合わせフォーム
          </a>
          までご連絡ください。
        </p>

        <LegalNav current="/legal/privacy/" />
      </div>
    </article>
  );
}
