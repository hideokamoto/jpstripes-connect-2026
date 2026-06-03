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

const BUY_BUTTON_ID = 'buy_btn_1TeDSUGbTZifRHVZsvFTdN8Y';
const PUBLISHABLE_KEY =
  'pk_live_51TVLfSGbTZifRHVZRbViwpjiF79kchA2E59V3n1jW2jGPGeIq7488HaW2DttWtbty8pdcE1EqinmlHLbConzengO00tgDRtFso';

export function TicketButton() {
  return (
    <>
      <Script src="https://js.stripe.com/v3/buy-button.js" strategy="afterInteractive" />
      <stripe-buy-button
        buy-button-id={BUY_BUTTON_ID}
        publishable-key={PUBLISHABLE_KEY}
      />
    </>
  );
}
