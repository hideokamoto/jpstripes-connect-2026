'use client';

import { useEffect, useRef, useState } from 'react';

const TARGET = new Date('2026-08-01T10:00:00+09:00').getTime();

type Parts = { d: string; h: string; m: string; s: string };

function compute(): Parts {
  const diff = TARGET - Date.now();
  const d = Math.max(0, Math.floor(diff / 86400000));
  const h = Math.max(0, Math.floor((diff % 86400000) / 3600000));
  const m = Math.max(0, Math.floor((diff % 3600000) / 60000));
  const s = Math.max(0, Math.floor((diff % 60000) / 1000));
  return {
    d: String(d).padStart(3, '0'),
    h: String(h).padStart(2, '0'),
    m: String(m).padStart(2, '0'),
    s: String(s).padStart(2, '0'),
  };
}

function Cell({ value, len, label, code }: { value: string; len: number; label: string; code: string }) {
  const prevRef = useRef(value);
  useEffect(() => {
    prevRef.current = value;
  }, [value]);
  const digits = value.padStart(len, '0').split('');
  return (
    <div className="cd-cell">
      <div className="cd-num">
        {digits.map((digit, i) => (
          <Digit key={i} digit={digit} />
        ))}
      </div>
      <div className="cd-cap">
        <span>{label}</span>
        <em>{code}</em>
      </div>
    </div>
  );
}

function Digit({ digit }: { digit: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const prev = useRef(digit);
  useEffect(() => {
    if (prev.current !== digit && ref.current) {
      ref.current.animate(
        [
          { transform: 'translateY(-30%)', opacity: 0 },
          { transform: 'translateY(0)', opacity: 1 },
        ],
        { duration: 300, easing: 'cubic-bezier(.5,1.6,.4,1)' }
      );
      prev.current = digit;
    }
  }, [digit]);
  return (
    <span className="digit" ref={ref}>
      {digit}
    </span>
  );
}

export function Countdown() {
  // SSR-safe: render zeros first, then update on client.
  const [parts, setParts] = useState<Parts>({ d: '000', h: '00', m: '00', s: '00' });

  useEffect(() => {
    setParts(compute());
    const id = setInterval(() => setParts(compute()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="cd-wrap">
      <div className="cd-head">
        <span>Time until doors open · 2026.08.01 10:00 JST</span>
        <span className="live">Live countdown</span>
      </div>
      <div className="cd-strip">
        <Cell value={parts.d} len={3} label="days" code="D" />
        <Cell value={parts.h} len={2} label="hours" code="H" />
        <Cell value={parts.m} len={2} label="minutes" code="M" />
        <Cell value={parts.s} len={2} label="seconds" code="S" />
      </div>
    </div>
  );
}
