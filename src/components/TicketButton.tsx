'use client';

import Script from 'next/script';

// Stripe の buy-button は Web Component（カスタム要素）のため、JSX の型を拡張する。
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-buy-button': React.HTMLAttributes<HTMLElement> & {
        'buy-button-id': string;
        'publishable-key': string;
      };
    }
  }
}

// publishable key は公開前提の値（シークレットではない）。
const PUBLISHABLE_KEY =
  'pk_live_51TVLfSGbTZifRHVZRbViwpjiF79kchA2E59V3n1jW2jGPGeIq7488HaW2DttWtbty8pdcE1EqinmlHLbConzengO00tgDRtFso';

export function TicketButton({ buyButtonId }: { buyButtonId: string }) {
  return (
    <>
      <Script src="https://js.stripe.com/v3/buy-button.js" strategy="afterInteractive" />
      <stripe-buy-button buy-button-id={buyButtonId} publishable-key={PUBLISHABLE_KEY} />
    </>
  );
}
