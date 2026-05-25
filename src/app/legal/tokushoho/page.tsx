import type { Metadata } from 'next';
import { LegalNav } from '@/components/LegalNav';

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記 — JP_Stripes Connect 2026',
  description:
    'JP_Stripes Connect 2026 懇親会参加費に関する特定商取引法に基づく表記。',
};

export default function Tokushoho() {
  return (
    <article>
      <header className="legal-head">
        <div className="num">Legal</div>
        <h1>
          特定商取引法に基づく<em>表記</em>
        </h1>
        <div className="meta">最終更新日: 2026年5月25日</div>
      </header>

      <div className="legal-body">
        <p>本表記は、懇親会参加費（通信販売）に関する表示です。カンファレンス本編は無料です。</p>

        <dl>
          <dt>販売事業者</dt>
          <dd>JP_Stripes（代表：岡本秀高）</dd>

          <dt>所在地</dt>
          <dd>〒662-0046 兵庫県西宮市千歳町６番１６号２０１</dd>

          <dt>電話番号</dt>
          <dd>
            お問い合わせフォームにて承ります。電話番号はフォームよりご請求いただければ開示します。
          </dd>

          <dt>お問い合わせ</dt>
          <dd>
            <a
              href="https://forms.gle/pPfUy12C7DfQ8UND9"
              target="_blank"
              rel="noopener noreferrer"
            >
              お問い合わせフォーム
            </a>
          </dd>

          <dt>販売価格</dt>
          <dd>懇親会参加費 2,000円（税込）</dd>

          <dt>商品代金以外の必要料金</dt>
          <dd>インターネット接続料・通信料（お客様負担）</dd>

          <dt>お支払い方法・時期</dt>
          <dd>クレジットカード決済（Stripe）。申込時に即時決済されます。</dd>

          <dt>役務の提供時期</dt>
          <dd>
            2026年8月1日（土）18:30 開始見込み、学校法人岩崎学園 情報科学専門学校（神奈川県横浜市神奈川区鶴屋町2丁目17）
          </dd>

          <dt>キャンセル・返金</dt>
          <dd>
            <a href="/legal/cancellation/">キャンセル・返金ポリシー</a>
            に定めるとおりです。クーリング・オフは適用されません。
          </dd>

          <dt>適格請求書発行事業者登録番号</dt>
          <dd>登録なし。領収書は適格請求書（インボイス）には該当しません。</dd>
        </dl>

        <LegalNav current="/legal/tokushoho/" />
      </div>
    </article>
  );
}
