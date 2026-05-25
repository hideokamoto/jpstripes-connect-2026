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
        <p>
          本表記は、JP_Stripes Connect 2026 懇親会参加費（通信販売）に関する特定商取引法第11条に基づく表示です。
        </p>

        <dl>
          <dt>販売事業者</dt>
          <dd>JP_Stripes（代表：岡本秀高）</dd>

          <dt>運営統括責任者</dt>
          <dd>岡本秀高</dd>

          <dt>所在地</dt>
          <dd>〒662-0046 兵庫県西宮市千歳町６番１６号２０１</dd>

          <dt>電話番号</dt>
          <dd>
            お問い合わせはお問い合わせフォームにて承ります。電話番号については、下記お問い合わせ窓口にご請求いただければ、遅滞なく開示いたします。
          </dd>

          <dt>お問い合わせ窓口</dt>
          <dd>
            <a
              href="https://forms.gle/pPfUy12C7DfQ8UND9"
              target="_blank"
              rel="noopener noreferrer"
            >
              お問い合わせフォーム
            </a>
          </dd>

          <dt>ホームページURL</dt>
          <dd>
            <a href="https://jpstripes.com/" target="_blank" rel="noopener noreferrer">
              https://jpstripes.com/
            </a>
          </dd>

          <dt>適格請求書発行事業者登録番号</dt>
          <dd>
            当団体は適格請求書発行事業者の登録を受けていません。お渡しする領収書は適格請求書（インボイス）には該当せず、消費税の仕入税額控除の対象となりません。インボイス制度の経過措置により、2026年9月30日までは仕入税額相当額の80％、2026年10月1日以降2029年9月30日までは50％を控除できます。
          </dd>
        </dl>

        <h2>販売価格</h2>
        <div className="legal-scroll">
          <table>
            <thead>
              <tr>
                <th>商品</th>
                <th>価格（税込）</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>JP_Stripes Connect 2026 懇親会参加費</td>
                <td>2,000円（税込）</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>カンファレンス本編は無料です。特定商取引法に基づく表記の対象は懇親会参加費のみです。</p>

        <h2>商品代金以外の必要料金</h2>
        <ul>
          <li>消費税: 販売価格に含まれます</li>
          <li>インターネット接続料金、通信料: お客様のご負担となります</li>
          <li>振込手数料: クレジットカード決済のみのため発生しません</li>
        </ul>

        <h2>お支払い方法</h2>
        <p>クレジットカード決済（Stripe を利用）</p>
        <p>
          利用可能なクレジットカードブランド: Visa、Mastercard、JCB、American Express、Diners Club、Discover
        </p>

        <h2>お支払い時期</h2>
        <p>お申込み時にクレジットカード決済が即時実行されます。</p>

        <h2>役務（サービス）の提供時期</h2>
        <p>
          2026年8月1日（土）18:30 開始見込みより、開催地（相鉄岩崎学園ビル／学校法人岩崎学園 情報科学専門学校、〒221-0835 神奈川県横浜市神奈川区鶴屋町2丁目17）にて提供します。
        </p>

        <h2>申込みの撤回・解除に関する事項（キャンセル・返金について）</h2>
        <p>
          本イベント懇親会へのお申込みは、お客様都合によるキャンセルおよび返金の取り扱いを以下のとおり定めています。詳細は
          <a href="/legal/cancellation/">キャンセル・返金ポリシー</a>
          をご確認ください。
        </p>
        <p>
          なお、本イベントは特定商取引法上の通信販売に該当し、クーリング・オフ制度の適用はありません。返金条件は前述の特約として当事者間で定めるものです。
        </p>

        <h2>申込みの有効期限</h2>
        <p>申込ページ上に表示された申込締切日時まで（先着順、定員に達し次第締切）。</p>

        <h2>動作環境</h2>
        <p>決済画面の表示およびお申込み完了通知メールの受信に必要な環境:</p>
        <ul>
          <li>一般的なウェブブラウザ（Chrome、Safari、Firefox、Edge の最新版を推奨）</li>
          <li>受信可能なメールアドレス</li>
          <li>TLS 1.2 以降に対応した通信環境</li>
        </ul>

        <h2>役務の引渡し方法</h2>
        <p>
          申込み完了後、お客様のメールアドレス宛にお申込み確認メール（領収書を含む）を送信します。サービスの提供（懇親会への入場）はイベント当日、開催地で受付にお名前をお伝えいただくことで行います。
        </p>

        <h2>不良品・債務不履行の取扱い</h2>
        <p>
          会場の事情等により予定したサービスを提供できなかった場合は、別途
          <a href="/legal/cancellation/">キャンセル・返金ポリシー</a>
          に従い対応します。
        </p>

        <LegalNav current="/legal/tokushoho/" />
      </div>
    </article>
  );
}
