import type { Metadata } from 'next';
import { LegalNav } from '@/components/LegalNav';

export const metadata: Metadata = {
  title: '利用規約（参加規約） — JP_Stripes Connect 2026',
  description:
    'JP_Stripes Connect 2026 への参加申込みおよび参加に適用される利用規約（参加規約）。',
};

export default function Terms() {
  return (
    <article>
      <header className="legal-head">
        <div className="num">Legal</div>
        <h1>
          利用規約<em>（参加規約）</em>
        </h1>
        <div className="meta">最終更新日: 2026年5月25日</div>
      </header>

      <div className="legal-body">
        <p>
          JP_Stripes（代表：岡本秀高）（以下「当団体」）が主催する JP_Stripes Connect 2026（以下「本イベント」）に申込み・参加される方（以下「参加者」）は、本規約および
          <a href="/legal/privacy/">プライバシーポリシー</a>
          ・
          <a href="/legal/cancellation/">キャンセル・返金ポリシー</a>
          に同意したものとみなします。各ポリシーに定める事項については、当該ポリシーの定めが優先します。
        </p>

        <h2>1. 申込みと契約の成立</h2>
        <p>
          懇親会への参加申込みは connpass 上の申込フォームから行います。Stripe による決済完了をもって参加契約が成立します。カンファレンス本編は無料です。価格・支払条件は
          <a href="/legal/tokushoho/">特定商取引法に基づく表記</a>
          をご確認ください。
        </p>

        <h2>2. キャンセル・返金</h2>
        <p>
          <a href="/legal/cancellation/">キャンセル・返金ポリシー</a>
          に定めるとおりです。
        </p>

        <h2>3. 参加者の遵守事項</h2>
        <ul>
          <li>他の参加者・登壇者・スタッフ・会場関係者への迷惑行為・ハラスメントを行わないこと</li>
          <li>会場の利用規則・運営の指示に従うこと</li>
          <li>懇親会では酒類を提供するため、20歳未満の方は参加できません</li>
        </ul>
        <p>上記に違反した場合、退場を求めることがあり、この場合参加費の返金は行いません。</p>

        <h2>4. 個人情報・写真・動画</h2>
        <p>
          <a href="/legal/privacy/">プライバシーポリシー</a>
          に従います。
        </p>

        <h2>5. 免責</h2>
        <p>
          当団体は、プログラム・会場等を運営上の都合により変更することがあります。天災等により開催を中止・変更した場合の取扱いは
          <a href="/legal/cancellation/">キャンセル・返金ポリシー</a>
          に従います。当団体の故意または重過失による場合を除き、参加に関連して生じた損害について責任を負いません。
        </p>

        <h2>6. お問い合わせ</h2>
        <p>
          <a
            href="https://forms.gle/pPfUy12C7DfQ8UND9"
            target="_blank"
            rel="noopener noreferrer"
          >
            お問い合わせフォーム
          </a>
          までご連絡ください。
        </p>

        <LegalNav current="/legal/terms/" />
      </div>
    </article>
  );
}
