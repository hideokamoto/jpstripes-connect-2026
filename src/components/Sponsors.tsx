type Sponsor = {
  name: string;
  alt: string;
  href: string;
  logo: string;
};

type Tier = {
  key: string;
  label: string;
  jp: string;
  sponsors: Sponsor[];
};

const TIERS: Tier[] = [
  {
    key: 'platinum',
    label: 'Platinum',
    jp: 'プラチナスポンサー',
    sponsors: [
      { name: 'Stripe', alt: 'Stripe', href: 'https://stripe.com', logo: '/sponsors/Stripe_logo.png' },
    ],
  },
  {
    key: 'gold',
    label: 'Gold',
    jp: 'ゴールドスポンサー',
    sponsors: [
      { name: 'アンチパターン', alt: '株式会社アンチパターン', href: 'https://anti-pattern.co.jp', logo: '/sponsors/anti-pattern.png' },
    ],
  },
  {
    key: 'silver',
    label: 'Silver',
    jp: 'シルバースポンサー',
    sponsors: [
      { name: 'revtrona', alt: 'revtrona', href: 'https://revtrona.com', logo: '/sponsors/Revtrona.png' },
    ],
  },
  {
    key: 'tool',
    label: 'Tool',
    jp: 'ツールスポンサー',
    sponsors: [
      { name: 'Nulab', alt: '株式会社ヌーラボ', href: 'https://nulab.com/ja/', logo: '/sponsors/Nulab_logo.png' },
    ],
  },
  {
    key: 'logo',
    label: 'Logo',
    jp: 'ロゴスポンサー',
    sponsors: [
      { name: 'DIGITALJET', alt: '株式会社DIGITALJET', href: 'https://digitaljet.co.jp', logo: '/sponsors/digitaljet.png' },
    ],
  },
];

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  return (
    <a
      className="sp-logo-card"
      href={sponsor.href}
      target="_blank"
      rel="sponsored noopener noreferrer"
      aria-label={sponsor.alt}
    >
      <img loading="lazy" src={sponsor.logo} alt={sponsor.alt} />
    </a>
  );
}

export function Sponsors() {
  return (
    <section className="s" id="sponsors">
      <div className="container">
        <div className="section-mast">
          <div>
            <div className="num">№ 05 — Sponsors</div>
            <h2>
              Backed by
              <br />
              <em>the community.</em>
            </h2>
          </div>
          <p className="deck">本イベントは、以下のスポンサー企業のご支援により開催されます。決済とビジネスの知恵を、コミュニティと共に広げてくれる仲間たちです。</p>
        </div>

        {TIERS.map((tier) => (
          <div className="sp-tier" data-tier={tier.key} key={tier.key}>
            <h3>
              <em>{tier.label}</em> Sponsor
              <span className="tier-jp">{tier.jp}</span>
            </h3>
            <div className="sp-grid-tier">
              {tier.sponsors.map((s) => (
                <SponsorCard key={s.name} sponsor={s} />
              ))}
            </div>
          </div>
        ))}

        <div className="sponsor-cta">
          <div>
            <h4>
              Sponsor <em>Inquiries</em>
            </h4>
            <p>スポンサーシップの詳細・特典資料をご希望の方は、運営までお問い合わせください。</p>
          </div>
          <a
            className="right"
            href="https://connect2025.jpstripes.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            [ Contact ↗ ]
          </a>
        </div>
      </div>
    </section>
  );
}
