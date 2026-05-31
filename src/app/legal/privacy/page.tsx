import type { Metadata } from 'next';
import { LegalNav } from '@/components/LegalNav';

export const metadata: Metadata = {
  title: 'プライバシーポリシー — JP_Stripes Connect 2026',
  description:
    'JP_Stripes Connect 2026 における個人情報の取り扱い。Stripe Payment Links による申込受付、および Stripe Community Builders プログラムへの情報提供（外国第三者提供）を含みます。',
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
          <li>Stripe を利用しているか（はい / いいえ）</li>
          <li>連絡先電話番号（任意）</li>
          <li>お問い合わせ内容</li>
          <li>イベント後アンケートの回答（5段階評価および自由記述）</li>
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
          <li>
            Stripe Community Builders プログラムの運営・実績報告のための、プログラム運営チームへの情報提供
            （詳細は「4. 第三者提供」を参照）
          </li>
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
          本イベントは Stripe Community Builders プログラムの一環として開催されます。当団体は、同プログラムの運営・実績報告を目的として、下記の参加者情報を Stripe, Inc.（米国）のコミュニティ運営チームに提供します。
        </p>
        <p>
          <strong>提供する情報：</strong>氏名、メールアドレス、所属（会社名・部署名）、会社 URL、役職、Stripe 利用有無、イベント後アンケート回答
        </p>
        <p>
          本イベントへの申込（Stripe Payment Links フォームの送信）をもって、本第三者提供へのご同意をいただいたものとみなします。なお、本提供は参加の前提条件であり、任意のオプトインではありません。
        </p>
        <h3>個人情報保護法第 28 条に基づく情報（外国にある第三者への提供）</h3>
        <ul>
          <li>
            <strong>（a）提供先の所在国：</strong>アメリカ合衆国（米国）
          </li>
          <li>
            <strong>（b）米国における個人情報保護制度：</strong>
            米国には日本の個人情報保護法に相当する包括的な連邦法は存在しません（2026年5月現在）。州レベルではカリフォルニア州消費者プライバシー法（CCPA/CPRA）等が存在し、米国連邦取引委員会（FTC）が不公正・欺瞞的なプライバシー慣行を規制しています。個人情報保護委員会が公表する外国における個人情報の保護に関する制度等の調査についても、
            <a
              href="https://www.ppc.go.jp/personalinfo/legal/kaiseihogohou/#gaikoku"
              target="_blank"
              rel="noopener noreferrer"
            >
              個人情報保護委員会ウェブサイト
            </a>
            をご参照ください。
          </li>
          <li>
            <strong>（c）提供先が講ずる個人情報保護のための措置：</strong>
            Stripe, Inc. は、欧州連合の標準契約条項（Standard Contractual Clauses）の採用および GDPR（EU 一般データ保護規則）への対応を含む、適切な個人情報保護措置を講じています。詳細は Stripe のプライバシーポリシー（
            <a
              href="https://stripe.com/jp/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://stripe.com/jp/privacy
            </a>
            ）をご参照ください。
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
