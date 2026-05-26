import Link from 'next/link';

const links = [
  { href: '/legal/tokushoho/', label: '特定商取引法に基づく表記' },
  { href: '/legal/privacy/', label: 'プライバシーポリシー' },
  { href: '/legal/cancellation/', label: 'キャンセル・返金ポリシー' },
  { href: '/legal/terms/', label: '利用規約' },
];

export function LegalNav({ current }: { current: string }) {
  return (
    <nav className="legal-nav" aria-label="法務文書">
      {links
        .filter((l) => l.href !== current)
        .map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
    </nav>
  );
}
