"use client";

import { useEffect, useRef, useState } from "react";

export function Venue() {
  const [mapLoadError, setMapLoadError] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mapElement = mapRef.current;
    if (!mapElement) return;

    // Set a timeout to detect if the map fails to load
    const timeoutId = setTimeout(() => {
      // Check if the map has been initialized by Geolonia
      const hasMapContent = mapElement.querySelector('.maplibregl-canvas');
      if (!hasMapContent) {
        setMapLoadError(true);
      }
    }, 5000); // 5 second timeout

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="s" id="venue">
      <div className="container">
        <div className="section-mast">
          <div>
            <div className="num">№ 04 — Venue</div>
            <h2>
              Yokohama,
              <br />
              <em>once again.</em>
            </h2>
          </div>
          <p className="deck">2025に続き、横浜での開催。岩崎学園情報科学専門学校にて。</p>
        </div>

        <div className="venue-block">
          <div className="venue-figure">
            <div
              ref={mapRef}
              className="geolonia"
              data-lat="35.469008"
              data-lng="139.621716"
              data-zoom="16"
              data-style="geolonia/basic"
            />
            {mapLoadError && (
              <a
                className="map-fallback"
                href="https://maps.google.com/?q=35.469008,139.621716"
                target="_blank"
                rel="noopener noreferrer"
              >
                地図を開く
              </a>
            )}
          </div>
          <div className="venue-text">
            <h3>
              <a
                href="https://isc.iwasaki.ac.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                岩崎学園
                <br />
                <em>情報科学専門学校</em>
              </a>
            </h3>
            <div className="place">
              相鉄岩崎学園ビル<br />
              〒221-0835 神奈川県横浜市神奈川区鶴屋町2丁目17
            </div>
            <div className="access">
              <h4>Access</h4>
              <ul>
                <li>
                  <span className="k">JR各線 / 相鉄線 / 東急線 / 横浜市営地下鉄</span>横浜駅 きた西口 徒歩1分
                </li>
                <li>
                  <span className="k">京急線</span>横浜駅 徒歩5分
                </li>
                <li>
                  <span className="k">羽田空港から</span>京急で約25分
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
