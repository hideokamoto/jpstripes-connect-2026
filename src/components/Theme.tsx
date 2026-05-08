import { ChapterNav } from './ChapterNav';

export function Theme() {
  return (
    <section className="s" id="theme">
      <div className="container">
        <div className="section-mast">
          <div>
            <div className="num">№ 01 — Theme</div>
            <h2>
              <em>Don&apos;t carry</em>
              <br />
              payment decisions
              <br />
              alone.
            </h2>
          </div>
          <p className="deck">
            JP_Stripes Connect 2026 のテーマ。決済・サブスク・請求管理の判断を、コミュニティで分け合う。
          </p>
        </div>

        <p className="pull-quote">
          <span className="mark">「</span>うちの状況でどう判断すべきか<span className="mark">」</span>は、
          <br />
          誰も教えて<em>くれない。</em>
        </p>

        <div className="theme-read">
          <ChapterNav />

          <div className="theme-body">
            <h3 id="th-1">
              本番<em>でしか</em>試せない
            </h3>
            <p>
              運用にはステージング環境がない。価格改定は本番でしか試せない。チャーン対策の結果は、実際の解約数でしか分からない。Connect
              の手数料設計を間違えたら、既存加盟店との再交渉が待っている。
              <strong>ほとんどの人が、ぶっつけ本番の一発勝負を強いられている。</strong>
            </p>

            <h3 id="th-2">
              ドキュメントが<em>教えてくれない</em>こと
            </h3>
            <p>
              公式ドキュメントは「何ができるか」を教えてくれる。サポートは「技術的に正しいか」を教えてくれる。けれど、自分の事業のフェーズ、自分のチームの体制、自分の顧客の文脈を踏まえた判断は、結局のところ自分でするしかない。
            </p>
            <p>
              判断を支えるのは、似た状況で似た選択をしてきた人の話。失敗談、その後どうしたか、いま振り返ってどう思うか。— それは、Stack Overflow にも GitHub にも、まだ書かれていない。
            </p>

            <h3 id="th-3">
              経験を、<em>分け合う場</em>
            </h3>
            <p>
              JP_Stripes Connect は、Stripe をキーワードに決済・サブスク・請求管理の経験を共有する、年に一度の場。
              <strong>誰かの失敗談が、自分の落とし穴を避ける地図になる。</strong>
              誰かの成功事例が、自分の判断の根拠になる。誰かの悩みが、「自分だけじゃない」という安心になる。
            </p>

            <h3 id="th-4">
              2026年8月、<em>横浜で。</em>
            </h3>
            <p>
              ビジネスの最も困難で面白い領域を、コミュニティの力でより乗り越えよう。— 2026年8月1日、横浜でお会いしましょう。
            </p>
          </div>

          <aside className="sidenotes">
            <div className="sidenote">
              <div className="k">01 — Field note</div>
              <em>&quot;うちの場合は…&quot;</em>
              サポートに投げて返ってくるのは「仕様」。ほしいのは「同じ業種で同じ規模の人がどう運用しているか」。
            </div>
            <div className="sidenote">
              <div className="k">02 — Field note</div>
              <em>&quot;前職ではこうだった&quot;</em>
              が一番効く判断材料になる、ということが、年に一度この場で確認できる。
            </div>
            <div className="sidenote">
              <div className="k">03 — Theme</div>
              <em>Don&apos;t carry alone.</em>
              一人で抱えない、ということ。それが2026年のテーマです。
            </div>
          </aside>
        </div>

        <div className="theme-three">
          <div className="it">
            <div className="num">01</div>
            <h4>
              失敗談を、<em>地図に</em>
            </h4>
            <p>落とし穴を踏み抜く前に。誰かが踏んだ穴は、もう踏まなくていい。</p>
          </div>
          <div className="it">
            <div className="num">02</div>
            <h4>
              成功事例を、<em>根拠に</em>
            </h4>
            <p>「やってみた」の経験は、上司や経営層への提案を支える説得材料になる。</p>
          </div>
          <div className="it">
            <div className="num">03</div>
            <h4>
              悩みを、<em>安心に</em>
            </h4>
            <p>同じ問題に取り組む人と話すこと。それだけで、孤独な意思決定は少し軽くなる。</p>
          </div>
        </div>
      </div>
    </section>
  );
}
