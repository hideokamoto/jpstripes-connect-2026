import { ChapterNav } from './ChapterNav';

export function Theme() {
  return (
    <section className="s" id="theme">
      <div className="container">
        <div className="section-mast">
          <div>
            <div className="num">№ 01 — Theme</div>
            <h2>
              <em>The business model,</em>
              <br />
              quietly
              <br />
              rewritten.
            </h2>
          </div>
          <p className="deck">
            JP_Stripes Connect 2026 のテーマ。人が買う時代から、エージェントが買う時代へ。Stripe を軸に、マネタイズの次の形を探る。
          </p>
        </div>

        <p className="pull-quote">
          <span className="mark">「</span>AI時代のマネタイズに、
          <br />
          確立された正解は<em>まだない。</em><span className="mark">」</span>
        </p>

        <div className="theme-read">
          <ChapterNav />

          <div className="theme-body">
            <h3 id="th-1">
              SaaS — <em>課金モデルの</em>再発明
            </h3>
            <p>
              月額固定のサブスクリプションが当たり前だった。けれど推論のたびにコストが動くAIプロダクトでは、使った分だけ支払うトークンベース・従量課金・ハイブリッドが現実的な選択肢になる。
              <strong>「いくら、どう請求するか」そのものが、プロダクトの競争力になりはじめている。</strong>
            </p>

            <h3 id="th-2">
              Commerce — <em>エージェントが</em>買う
            </h3>
            <p>
              これまで、カートに入れてボタンを押すのは人間だった。これからは、AIエージェントが比較し、選び、決済する。Agentic
              Commerce。「誰が買うのか」という前提が変わるとき、チェックアウトも、与信も、不正対策も設計し直しになる。
            </p>

            <h3 id="th-3">
              Platform — <em>決済そのものが</em>プロダクト
            </h3>
            <p>
              決済は長らく「最後に付け足す機能」だった。けれどプラットフォーム型ビジネスでは、入金設計・手数料分配・コンプライアンスこそが事業の中核になる。
              <strong>Stripe Connect が示すように、決済は単なる機能から、プロダクトそのものへ姿を変えている。</strong>
            </p>

            <h3 id="th-4">
              2026年8月、<em>横浜で。</em>
            </h3>
            <p>
              ビジネスモデルが静かに書き換わるいま、その最前線をセッションとハンズオンで確かめにいく。Stripe を軸に、SaaS・Commerce・Platform の次の形を探る1日。— 2026年8月1日、横浜でお会いしましょう。
            </p>
          </div>

          <aside className="sidenotes">
            <div className="sidenote">
              <div className="k">01 — Field note</div>
              <em>&quot;サブスクのままでいいのか&quot;</em>
              価格表を作り直すたびに思う。AI時代の最適な課金モデルは、まだ手探りだ。
            </div>
            <div className="sidenote">
              <div className="k">02 — Field note</div>
              <em>&quot;顧客がAIになる&quot;</em>
              SDKのドキュメントには載っていない、ビジネス設計そのものの話を聞きたい。
            </div>
            <div className="sidenote">
              <div className="k">03 — Theme</div>
              <em>Find your model.</em>
              AI時代のマネタイズ方法を、ここで一緒に探そう。それが2026年のテーマです。
            </div>
          </aside>
        </div>

        <div className="theme-three">
          <div className="it">
            <div className="num">01</div>
            <h4>
              SaaS、<em>課金を再発明</em>
            </h4>
            <p>月額から従量・トークンベースへ。最適な値付けが、そのまま競争力になる。</p>
          </div>
          <div className="it">
            <div className="num">02</div>
            <h4>
              Commerce、<em>顧客はAIに</em>
            </h4>
            <p>人が買う前提が崩れる。エージェント時代のチェックアウトを考える。</p>
          </div>
          <div className="it">
            <div className="num">03</div>
            <h4>
              Platform、<em>決済を主役に</em>
            </h4>
            <p>付け足す機能から、事業の中核へ。Connect が拓くプラットフォーム決済。</p>
          </div>
        </div>
      </div>
    </section>
  );
}
