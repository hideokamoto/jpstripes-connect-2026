import type { Metadata } from 'next';
import { LegalNav } from '@/components/LegalNav';

export const metadata: Metadata = {
  title: 'プライバシーポリシー — JP_Stripes Connect 2026',
  description:
    'JP_Stripes Connect 2026 における個人情報の取り扱いについて定めたプライバシーポリシー。参加申込・決済は Stripe Payment Links で行います。',
};

export default function Privacy() {
  return (
    <article>
      <header className="legal-head">
        <div className="num">Legal</div>
        <h1>
          プライバシー<em>ポリシー</em>
        </h1>
        <div className="meta">最終更新日: 2026年5月31日</div>
      </header>

      <div className="legal-body">
        <p>
          JP_Stripes（代表：岡本秀高）（以下「当団体」）は、JP_Stripes Connect 2026（以下「本イベント」）の運営にあたり、取得した個人情報を以下のとおり取り扱います。
        </p>

        <h2>1. 取得する情報</h2>
        <ul>
          <li>氏名、メールアドレス、所属（会社名・部署名）</li>
          <li>会社 URL</li>
          <li>役職</li>
          <li>Stripe をご利用かどうか（はい／いいえ）</li>
          <li>イベント後アンケートの回答（5段階評価および自由記述）</li>
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
          <li>イベント後アンケートの集計・改善への活用</li>
        </ul>

        <h2>3. 委託先</h2>
        <p>利用目的の達成に必要な範囲で、以下の事業者に取扱いを委託します。</p>
        <ul>
          <li>ストライプジャパン株式会社 — 参加申込の受付、参加者情報の収集、決済処理</li>
          <li>株式会社ビープラウド — イベント告知（connpass）</li>
          <li>Google LLC — お問い合わせフォーム（Google フォーム）、イベント配信・録画の公開（YouTube）</li>
          <li>Slack Technologies, LLC — お問い合わせ対応のためのチーム内連絡</li>
          <li>株式会社ヌーラボ — お問い合わせ管理（Backlog）</li>
          <li>Zoom Communications, Inc. — オンライン配信、リモート登壇、運営打ち合わせ</li>
        </ul>
        <p>
          上記のうち Google LLC、Slack Technologies, LLC、Zoom Communications, Inc. は米国に所在する事業者です。
        </p>

        <h2>4. 第三者提供（Stripe Community Builders プログラム）</h2>
        <p>
          本イベントは Stripe Community Builders プログラムの一環として開催されます。参加者ご本人が申込フォーム（Stripe Payment Links のカスタムフィールド）上で明示的に同意された場合に限り、以下の情報を Stripe, Inc. に提供します。
        </p>
        <ul>
          <li>氏名、メールアドレス、所属（会社名・部署名）、会社 URL、役職</li>
        </ul>
        <p><strong>提供目的：</strong> Stripe Community Builders プログラムの運営および実績報告</p>
        <p><strong>提供先：</strong> Stripe, Inc.（米国カリフォルニア州サンフランシスコ）</p>
        <p>
          この提供は任意であり、同意いただけない場合でも本イベントへの参加に一切支障はありません。また、同意後に撤回を希望される場合は、下記お問い合わせ窓口までご連絡ください。
        </p>

        <h3>外国にある第三者への提供（個人情報保護法第28条）</h3>
        <p>
          Stripe, Inc. は日本国外（米国）に所在する事業者であるため、以下の情報をご確認ください。
        </p>
        <ul>
          <li>
            <strong>（a）提供先の所在国：</strong>米国（カリフォルニア州）
          </li>
          <li>
            <strong>（b）当該国における個人情報保護制度：</strong>米国には日本の個人情報保護法に相当する包括的な連邦法は存在しませんが、セクター別の連邦法（GLBA 等）や州法（カリフォルニア州消費者プライバシー法 CCPA/CPRA 等）が適用されます。個人情報保護委員会が公表する各国制度の情報もあわせてご参照ください。
          </li>
          <li>
            <strong>（c）提供先が講ずる保護措置：</strong>Stripe, Inc. は EU-U.S. Data Privacy Framework への参加その他の適切な保護措置を講じており、詳細は{' '}
            <a
              href="https://stripe.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stripe プライバシーポリシー
            </a>
            をご参照ください。
          </li>
        </ul>

        <h2>5. 写真・動画</h2>
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

        <h2>6. お問い合わせ</h2>
        <p>
          個人情報の取扱いに関するお問い合わせ、および第三者提供への同意の撤回については、
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
