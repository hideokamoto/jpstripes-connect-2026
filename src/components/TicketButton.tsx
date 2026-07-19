// Stripe の buy-button は Web Component（カスタム要素）のため、hono/jsx の型を拡張する。
declare module 'hono/jsx' {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-buy-button': {
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
  return <stripe-buy-button buy-button-id={buyButtonId} publishable-key={PUBLISHABLE_KEY} />;
}
