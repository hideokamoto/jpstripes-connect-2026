import type { Metadata } from 'next';
import { LegalNav } from '@/components/LegalNav';

export const metadata: Metadata = {
  title: 'キャンセル・返金ポリシー — JP_Stripes Connect 2026',
  description:
    'JP_Stripes Connect 2026 懇親会参加権の購入に関するキャンセル・返金の特約。',
};

export default function Cancellation() {
  return (
    <article>
      <header className="legal-head">
        <div className="num">Legal</div>
        <h1>
          キャンセル・<em>返金ポリシー</em>
        </h1>
        <div className="meta">最終更新日: 2026年5月25日</div>
      </header>

      <div className="legal-body">
        <p>
          JP_Stripes Connect 2026 懇親会参加権の購入に関する返金条件です。
          <a href="/legal/terms/">利用規約</a>
          ・
          <a href="/legal/privacy/">プライバシーポリシー</a>
          とあわせて、お申込み時点で同意いただいたものとみなします。
        </p>

        <h2>1. お客様都合によるキャンセル</h2>
        <ul>
          <li>2026年7月25日（土）23:59 まで — 全額返金</li>
          <li>2026年7月26日（日）00:00 以降 — 返金不可</li>
        </ul>
        <p>
          キャンセル・名義変更は
          <a
            href="https://forms.gle/pPfUy12C7DfQ8UND9"
            target="_blank"
            rel="noopener noreferrer"
          >
            お問い合わせフォーム
          </a>
          より、お名前・申込日・申込時のメールアドレスを添えてご連絡ください。名義変更は 7 月 25 日 23:59 まで無料で承ります。
        </p>

        <h2>2. 主催者都合・不可抗力による中止</h2>
        <p>
          主催者都合で中止する場合は全額返金します。天災・感染症の流行等、不可抗力により中止する場合は、状況に応じて返金の有無を判断し、参加者に通知します。
        </p>

        <h2>3. 返金の反映</h2>
        <p>返金はお支払いに使用したクレジットカードへ行います。明細への反映まで 5〜30 営業日程度かかる場合があります。</p>

        <LegalNav current="/legal/cancellation/" />
      </div>
    </article>
  );
}
