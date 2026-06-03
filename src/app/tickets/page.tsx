import type { Metadata } from 'next';
import Link from 'next/link';
import { TicketButton } from '@/components/TicketButton';

// 本編のみ（無料）と 本編＋懇親会（2,000円・税込）の 2 種類の Stripe buy button。
const BUY_BUTTON_HONPEN = 'buy_btn_1TeDepGbTZifRHVZnvlIMeLS';
const BUY_BUTTON_KONSHINKAI = 'buy_btn_1TeDSUGbTZifRHVZsvFTdN8Y';

export const metadata: Metadata = {
  title: '参加申し込み — JP_Stripes Connect 2026',
  description:
    'JP_Stripes Connect 2026 の参加チケット申し込みページ。本編参加（無料）または懇親会込み参加（2,000円・税込）をお選びください。2026年8月1日（土）横浜。',
};

export default function Tickets() {
  return (
    <article className="tickets">
      <header className="tickets-head">
        <div className="num">Registration — 参加申し込み</div>
        <h1>
          チケットを選んで
          <br />
          <em>申し込む。</em>
        </h1>
        <p className="deck">
          JP_Stripes Connect 2026 への参加チケットです。カンファレンス本編は無料、懇親会まで参加する場合は懇親会込みチケットをお選びください。下の各チケットのボタンから、それぞれの申し込みにお進みいただけます。お支払いは Stripe のセキュアな決済画面で完結します。
        </p>
        <dl className="tickets-meta">
          <div>
            <dt>Date</dt>
            <dd>
              2026.08.01 Sat
              <span className="small">本編 12:30 — 18:00 / 懇親会 18:30 —</span>
            </dd>
          </div>
          <div>
            <dt>Place</dt>
            <dd>
              Yokohama
              <span className="small">情報科学専門学校・相鉄岩崎学園ビル5F</span>
            </dd>
          </div>
        </dl>
      </header>

      <section className="ticket-tiers" aria-label="チケットの種類">
        <div className="ticket-tier">
          <div className="ticket-tier-top">
            <span className="kind">本編参加チケット</span>
            <span className="price">
              <em>無料</em>
            </span>
          </div>
          <p className="ticket-tier-lead">
            カンファレンス本編（キーノート・全セッション）に参加できます。まずは話を聞きにきたい方へ。
          </p>
          <ul className="ticket-feats">
            <li>キーノート・Track A / B 全セッション</li>
            <li>会場での聴講・ネットワーキング</li>
            <li>事前のお支払いは不要</li>
          </ul>
          <div className="ticket-tier-cta">
            <TicketButton buyButtonId={BUY_BUTTON_HONPEN} />
          </div>
        </div>

        <div className="ticket-tier featured">
          <div className="ticket-badge">懇親会まで参加するなら</div>
          <div className="ticket-tier-top">
            <span className="kind">懇親会込み参加チケット</span>
            <span className="price">
              <em>¥2,000</em>
              <span className="tax">税込</span>
            </span>
          </div>
          <p className="ticket-tier-lead">
            本編に加えて、登壇者・参加者と語り合える懇親会（18:30 開始見込み）まで参加できます。
          </p>
          <ul className="ticket-feats">
            <li>本編参加チケットの内容すべて</li>
            <li>懇親会（飲食つき）への参加</li>
            <li>登壇者・参加者との交流の場</li>
          </ul>
          <div className="ticket-tier-cta">
            <TicketButton buyButtonId={BUY_BUTTON_KONSHINKAI} />
          </div>
        </div>
      </section>

      <p className="ticket-note">
        決済は Stripe により安全に処理されます。お申し込みをもって
        <Link href="/legal/terms/">利用規約</Link>・
        <Link href="/legal/privacy/">プライバシーポリシー</Link>・
        <Link href="/legal/cancellation/">キャンセル・返金ポリシー</Link>
        に同意いただいたものとみなします。懇親会参加費に関する表示は
        <Link href="/legal/tokushoho/">特定商取引法に基づく表記</Link>
        をご確認ください。
      </p>
    </article>
  );
}
