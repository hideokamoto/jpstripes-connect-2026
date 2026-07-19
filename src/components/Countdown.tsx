// 開場までのカウントダウン。SSR ではゼロ埋めの初期表示を出し、
// 実際の残り時間の計算・毎秒更新は /js/countdown.js（vanilla JS）が担う。
const TARGET_ISO = '2026-08-01T10:00:00+09:00';

function Cell({ len, label, code }: { len: number; label: string; code: string }) {
  return (
    <div className="cd-cell">
      <div className="cd-num" data-unit={code.toLowerCase()}>
        {Array.from({ length: len }, (_, i) => (
          <span key={i} className="digit">
            0
          </span>
        ))}
      </div>
      <div className="cd-cap">
        <span>{label}</span>
        <em>{code}</em>
      </div>
    </div>
  );
}

export function Countdown() {
  return (
    <div className="cd-wrap" data-countdown={TARGET_ISO}>
      <div className="cd-head">
        <span>Time until doors open · 2026.08.01 10:00 JST</span>
        <span className="live">Live countdown</span>
      </div>
      <div className="cd-strip">
        <Cell len={3} label="days" code="D" />
        <Cell len={2} label="hours" code="H" />
        <Cell len={2} label="minutes" code="M" />
        <Cell len={2} label="seconds" code="S" />
      </div>
    </div>
  );
}
