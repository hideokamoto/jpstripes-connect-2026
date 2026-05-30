import { ChapterNav } from './ChapterNav';

export function Theme() {
  return (
    <section className="s" id="theme">
      <div className="container">
        <div className="section-mast">
          <div>
            <div className="num">№ 01 — Theme</div>
            <h2>
              <em>Find out</em>
              <br />
              how to monetize
              <br />
              in the AI era.
            </h2>
          </div>
          <p className="deck">
            JP_Stripes Connect 2026 のテーマ。AIで何を売り、いくらに値づけし、どう課金するか — その答えを、現場の経験と一緒に探す。
          </p>
        </div>

        <p className="pull-quote">
          <span className="mark">「</span>AIで何を売り、いくらに値づけし、どう課金するか<span className="mark">」</span>
          <br />
          正解が、まだ<em>出そろっていない。</em>
        </p>

        <div className="theme-read">
          <ChapterNav />

          <div className="theme-body">
            <h3 id="th-1">
              次のどれかに<em>心当たりがあれば</em>
            </h3>
            <p>
              価格を上げるか、上げないか。3ヶ月、決められないでいる。AIを載せた新機能の料金モデルも、コスト試算も、どうにもしっくりこない。AIによる決済などの新しい取引に、自社のプロダクトをどう対応すれば良いかわからない。プラットフォームビジネスの運用は安定したが、GMVが伸び悩んでいる。決済手段か、UX か、どこに手を入れるべきか分からない。
            </p>
            <p>
              <strong>どれかひとつでも当てはまるなら、横浜に来る理由があります。</strong>
            </p>

            <h3 id="th-2">
              扱う<em>領域</em>
            </h3>
            <p>
              SaaSビジネスの料金設計、エージェント時代の決済導線にサブスクリプション運用、Connectを使ったプラットフォームや決済・課金・収益にまつわる現場の判断を、半日かけて持ち寄ります。
            </p>

            <h3 id="th-3">
              悩みと経験を<em>共有する</em>
            </h3>
            <p>
              昨年のイベントでは、パネリストや登壇者のリアルな悩み・試行錯誤の数々に、多くの方が共感しました。運用を見据えた割り切りの判断やデータの利活用と社内コミュニケーション、そして請求管理や決済にまつわる失敗談など、綺麗な成功体験だけではない、実際の現場で起きる悩みや知見を共有する場所です。
            </p>
            <p>
              立派な実績がなくても、語れる経験が浅くても、迷っている問いがひとつあれば、それが誰かの言語化を引き出します。<strong>聞く側のつもりで来た人が、休憩中の立ち話で、いちばん深い話をしていることが、毎回あります。</strong>
            </p>

            <h3 id="th-4">
              2026.8.1 SAT、<em>横浜で会いましょう。</em>
            </h3>
            <p>
              AI時代のマネタイズ方法を、ひとりで抱えずに探す半日へ。— 2026年8月1日、横浜でお会いしましょう。
            </p>
          </div>

          <aside className="sidenotes">
            <div className="sidenote">
              <div className="k">01 — Field note</div>
              <em>&quot;AIの原価が、前提を変えた&quot;</em>
              料金モデルの常識がリセットされつつある。エージェントが買い手にも売り手にもなる時代に、既存の課金設計はどこまで通用するか。
            </div>
            <div className="sidenote">
              <div className="k">02 — Field note</div>
              <em>&quot;社内に経験者がいない&quot;</em>
              AIマネタイズは、どの会社も手探りの最中。だからこそ、現場の判断を持ち寄ることに意味がある。
            </div>
            <div className="sidenote">
              <div className="k">03 — Theme</div>
              <em>ひとりで決めない、ということ。</em>
              それが2026年のテーマです。
            </div>
          </aside>
        </div>

        <div className="theme-three">
          <div className="it">
            <div className="num">01</div>
            <h4>
              料金設計を、<em>現場の知恵で</em>
            </h4>
            <p>SaaSの価格改定、AI機能の課金モデル。正解がない問いを、同じ状況の現場と一緒に探す。</p>
          </div>
          <div className="it">
            <div className="num">02</div>
            <h4>
              エージェント時代の<em>決済導線を</em>
            </h4>
            <p>AIが買い手にも売り手にもなる時代の決済・サブスクリプション運用を、実例から学ぶ。</p>
          </div>
          <div className="it">
            <div className="num">03</div>
            <h4>
              プラットフォームの<em>次の一手を</em>
            </h4>
            <p>Connect を使った運用が安定したその先。GMV を伸ばすための決済手段・UX の現場判断。</p>
          </div>
        </div>
      </div>
    </section>
  );
}
