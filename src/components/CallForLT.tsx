import Link from 'next/link';

export function CallForLT() {
  return (
    <section className="s" id="call-for-lt">
      <div className="container">
        <div className="sponsor-cta">
          <div>
            <h4>
              LT 登壇者 <em>募集中</em>
            </h4>
            <p>
              発表は5分程度、登壇経験は問いません。Stripe 実装・運用・設計、Billing / Connect
              の活用、失敗談や改善事例など、Stripe に関する内容なら歓迎です。
            </p>
          </div>
          <Link className="nav-cta" href="/blog/call-for-lt-speakers/">
            応募する
          </Link>
        </div>
      </div>
    </section>
  );
}
