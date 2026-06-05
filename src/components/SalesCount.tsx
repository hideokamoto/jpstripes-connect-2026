'use client';

import { useEffect, useState } from 'react';

// webhook Worker の公開集計エンドポイント（GET /stats）。
// PII を含まない種別ごとの累計枚数を返す。未設定なら何も表示しない。
const STATS_API_URL = process.env.NEXT_PUBLIC_STATS_API_URL;

interface SalesStats {
  honpen: number;
  konshinkai: number;
  total: number;
}

export function SalesCount() {
  const [stats, setStats] = useState<SalesStats | null>(null);

  useEffect(() => {
    if (!STATS_API_URL) return;

    let active = true;
    fetch(STATS_API_URL)
      .then((res) => (res.ok ? (res.json() as Promise<SalesStats>) : null))
      .then((data) => {
        if (active && data) setStats(data);
      })
      .catch(() => {
        // 販促表示のため、取得失敗時は静かに非表示にする。
      });

    return () => {
      active = false;
    };
  }, []);

  // データ未取得・件数ゼロのときは何も描画しない。
  if (!stats || stats.total <= 0) return null;

  return (
    <div className="sales-count" role="status" aria-live="polite">
      <span className="sales-count-total">
        これまでに <em>{stats.total.toLocaleString('ja-JP')}</em> 枚 申し込まれました
      </span>
      <span className="sales-count-breakdown">
        本編 {stats.honpen.toLocaleString('ja-JP')}
        <span className="sep">・</span>
        懇親会 {stats.konshinkai.toLocaleString('ja-JP')}
      </span>
    </div>
  );
}
