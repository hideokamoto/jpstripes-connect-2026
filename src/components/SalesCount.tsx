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

function isSalesStats(data: unknown): data is SalesStats {
  if (typeof data !== 'object' || data === null) return false;
  const s = data as Record<string, unknown>;
  return (
    typeof s.total === 'number' &&
    typeof s.honpen === 'number' &&
    typeof s.konshinkai === 'number'
  );
}

/**
 * チケット申込枚数（種別ごとの内訳）を webhook Worker の /stats から取得して表示する。
 * URL 未設定・取得失敗・件数ゼロ時は何も描画しない（販促表示のため静かにフォールバック）。
 */
export function SalesCount() {
  const [stats, setStats] = useState<SalesStats | null>(null);

  useEffect(() => {
    if (!STATS_API_URL) return;

    // ネットワーク遅延や無応答で待ち続けないようタイムアウトで中断し、アンマウント時もキャンセルする。
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    fetch(STATS_API_URL, { signal: controller.signal })
      .then((res) => (res.ok ? (res.json() as Promise<unknown>) : null))
      .then((data) => {
        // API が想定外のレスポンス（欠落・型不一致）を返しても落ちないよう検証する。
        if (isSalesStats(data)) setStats(data);
      })
      .catch(() => {
        // 取得失敗・中断時は静かに非表示にする。
      });

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
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
