const PLAYLIST = "PLr8gucIRpGCH9HRuWLCAgIjiNyWUQBpO0";
const PLAYLIST_URL = `https://www.youtube.com/playlist?list=${PLAYLIST}`;

function videoUrl(id: string) {
  return `https://www.youtube.com/watch?v=${id}&list=${PLAYLIST}`;
}
function thumbUrl(id: string) {
  return `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;
}

type Session = {
  time: string;
  duration: string;
  track: string;
  label: string;
  title: string;
  desc: string;
  by: string;
  org: string;
  videoId?: string;
};

const SESSIONS: Session[] = [
  {
    time: "12:45", duration: "15 min", track: "—", label: "Opening",
    title: "オープニング／ご挨拶",
    desc: "6年ぶりの Connect 開催。実行委員より、当日の流れと2つのトラックの楽しみ方をご案内。",
    by: "岡本 秀高 ほか実行委員", org: "JP_Stripes 実行委員会",
  },
  {
    time: "13:00", duration: "40 min", track: "K", label: "Keynote",
    title: "Stripeの今とこれから — 決済とAIがもたらすビジネスの可能性",
    desc: "Stripe の最新ビジョンと日本市場戦略。決済インフラの進化、AI による業務効率化／顧客体験、そして AI コマース・Agentic Commerce Protocol まで。",
    by: "Daniel Heffernan", org: "ストライプジャパン株式会社 共同代表取締役",
    videoId: "9XxgO4xyxWQ",
  },
  {
    time: "13:40", duration: "50 min", track: "Comm", label: "Community",
    title: "RevOps力が増す、Stripeコミュニティ活用のススメ",
    desc: "サッポロ・岡山・福岡の各 JP_Stripes コミュニティリーダーが集合。最新アップデートの追従と他社事例から学ぶ、コミュニティの実用的な使い方。",
    by: "小島 英揮（モデレータ）/ 三浦 一樹 / 古里 武士 / 清家 史郎",
    org: "Stripe / Heptagon / DIGITALJET / Fusic",
    videoId: "wt4TnmFPubM",
  },
  {
    time: "14:30", duration: "40 min", track: "B", label: "RevOps",
    title: "SaaSのビジネス・顧客解像度を高めるためのRevOpsへの挑戦",
    desc: "決済データを起点にビジネス・顧客の解像度を上げる RevOps の実践。Helpfeel と STUDIO、それぞれの取り組みと組織の動かし方。",
    by: "秋山 博紀 / 八木", org: "株式会社Helpfeel / STUDIO株式会社",
    videoId: "Z2HuxUtMrjY",
  },
  {
    time: "15:10", duration: "40 min", track: "A", label: "Update",
    title: "浦島太郎にならないための、Stripe最新動向キャッチアップ",
    desc: "API バージョン、flexible billing_mode、Checkout Session の新要素、Connect Embedded Components — 直近アップデートを高速で把握する1本。",
    by: "齊藤 光正", org: "Stripe Professional Services Team",
    // TODO: replace with direct video ID once confirmed
  },
  {
    time: "15:50", duration: "10 min", track: "LT", label: "Sponsor LT",
    title: "スポンサーLT — Stripe導入戦略とビジネスモデル設計",
    desc: "Stripe を活用した導入戦略とビジネスモデル設計の知見をスポンサー枠で共有。",
    by: "サイオステクノロジー登壇者", org: "サイオステクノロジー株式会社",
    videoId: "dr1KKBzs0KM",
  },
  {
    time: "16:10", duration: "40 min", track: "A", label: "Subscriptions",
    title: "Stripeでサブスクを立ち上げ／運用する際のカンどころ",
    desc: "10年運用の Atmoph と新規導入の TBS が語る、サブスクの立ち上げ・支払い情報サポート・クロスデバイス UX・無料プラン戦略・3DS2・Payment Records API。",
    by: "亀田 涼 / 中野 恭兵（モデレータ：岡本 秀高）",
    org: "TBSテレビ (LMS) / 株式会社Atmoph",
    videoId: "1GPgY1s_IcM",
  },
  {
    time: "16:50", duration: "40 min", track: "A", label: "Connect",
    title: "Stripe Connect運用10年のリアル — プラットフォーム決済、成功の勘所と次の一手",
    desc: "favy のサブスクプラットフォームを 10 年支えてきた Connect 運用の現場知。返金・税／インボイス対応、Stripe Terminal を使った次の一手まで。",
    by: "森 / 真崎 克宏", org: "株式会社favy / 株式会社DIGITALJET",
    videoId: "pfau5P1NW3c",
  },
  {
    time: "17:30", duration: "5 min", track: "LT", label: "LT",
    title: "Stripeで3Dセキュアを実装する",
    desc: "日本の 3DS2 義務化を踏まえた、Stripe での 3D Secure 実装方法のライトニングトーク。",
    by: "KenKen (@KenKen127_)", org: "個人登壇",
    // TODO: replace with direct video ID once confirmed
  },
  {
    time: "17:50", duration: "10 min", track: "—", label: "Closing",
    title: "クロージング",
    desc: "1日の振り返り、懇親会の案内。次回 Connect 2026 への橋渡し。",
    by: "実行委員会", org: "JP_Stripes 実行委員会",
    // TODO: replace with direct video ID once confirmed
  },
];

function ArchiveRow({ s }: { s: Session }) {
  const href = s.videoId ? videoUrl(s.videoId) : PLAYLIST_URL;
  const ariaLabel = s.videoId
    ? `${s.title} を YouTube で視聴`
    : `${s.title} — プレイリストで視聴`;

  return (
    <li className="ar-row" data-track={s.track}>
      {s.videoId ? (
        <a className="ar-thumb" href={href} target="_blank" rel="noopener" aria-label={ariaLabel}>
          <img loading="lazy" src={thumbUrl(s.videoId)} alt="" width={320} height={180} />
          <span className="ar-play" aria-hidden="true">▶</span>
        </a>
      ) : (
        <a className="ar-thumb is-empty" href={PLAYLIST_URL} target="_blank" rel="noopener" aria-label={ariaLabel} />
      )}
      <div className="ar-meta">
        <div className="ar-time">{s.time}<span className="dur">{s.duration}</span></div>
        <div className="ar-pill" data-t={s.track}>{s.label}</div>
      </div>
      <div className="ar-body">
        <div className="ar-title">
          <span className="ar-time-inline">{s.time} · {s.label} · </span>
          {s.title}
        </div>
        <div className="ar-desc">{s.desc}</div>
        <div className="ar-by">{s.by} <span className="org">— {s.org}</span></div>
      </div>
      <a className="ar-watch" href={href} target="_blank" rel="noopener">
        {s.videoId ? "Watch ↗" : "Playlist ↗"}
      </a>
    </li>
  );
}

export function Past() {
  return (
    <section className="s" id="past">
      <div className="container">
        <div className="section-mast">
          <div>
            <div className="num">№ 06 — Archive</div>
            <h2>
              Past
              <br />
              <em>Conferences.</em>
            </h2>
          </div>
        </div>

        <div className="past-card">
          <div>
            <div className="meta">Connect 2025 — 6年ぶりの開催</div>
            <h3>
              理論と実践、
              <br />
              <em>そして未来。</em>
            </h3>
            <p>
              2025.11.23 Sun · TECH HUB YOKOHAMA。Stripe Daniel Heffernan氏の基調講演から、Connect運用10年のリアルまで。11セッション・13名のスピーカーで、今さら聞けないを、今こそ聞いた1日でした。<strong>全セッションのアーカイブ動画を YouTube で公開中。</strong>
            </p>
            <a href="https://connect2025.jpstripes.com/" target="_blank" rel="noopener">
              公式サイト・アーカイブを見る ↗
            </a>
          </div>
          <div className="past-stats">
            <div className="past-stat">
              <div className="n">11</div>
              <div className="l">Sessions</div>
            </div>
            <div className="past-stat">
              <div className="n">13</div>
              <div className="l">Speakers</div>
            </div>
            <div className="past-stat">
              <div className="n">5.5h</div>
              <div className="l">Conference</div>
            </div>
            <div className="past-stat">
              <div className="n">11</div>
              <div className="l">
                <a href={PLAYLIST_URL} target="_blank" rel="noopener">Videos ↗</a>
              </div>
            </div>
          </div>
        </div>

        <div className="past-archive">
          <div className="archive-head">
            <div>
              <div className="num">№ 06.1 — Session Archive</div>
              <h3>
                <em>11 sessions,</em>
                <br />
                on tape.
              </h3>
              <p className="deck">
                2025年の全セッションを YouTube プレイリストで視聴できます。当日の流れを追える目次として。サムネをクリックすると、その回からプレイリスト連続再生に乗ります。
              </p>
            </div>
            <div className="head-cta">
              <a className="btn btn-ghost" href={PLAYLIST_URL} target="_blank" rel="noopener">
                プレイリストを開く ↗
              </a>
            </div>
          </div>

          <ol className="archive-list">
            {SESSIONS.map((s) => (
              <ArchiveRow key={s.time + s.title} s={s} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
