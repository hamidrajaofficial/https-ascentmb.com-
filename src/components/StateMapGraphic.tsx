import React, { useState } from 'react';
import { STATE_MAP_DATA, StateMapInfo } from '../data/stateMapData';

export interface StateMapGraphicProps {
  stateName?: string;
  className?: string;
}

export function StateMapGraphic({ stateName = 'Texas', className = '' }: StateMapGraphicProps) {
  const [imgError, setImgError] = useState(false);

  // Normalize state name to key code
  const normalized = stateName.trim().toLowerCase();
  let code = 'TX';
  if (normalized.includes('illinois') || normalized === 'il') code = 'IL';
  else if (normalized.includes('texas') || normalized === 'tx') code = 'TX';
  else if (normalized.includes('florida') || normalized === 'fl') code = 'FL';
  else if (normalized.includes('california') || normalized === 'ca') code = 'CA';
  else if (normalized.includes('new york') || normalized === 'ny') code = 'NY';

  const stateInfo: StateMapInfo = STATE_MAP_DATA[code] || STATE_MAP_DATA['TX'];

  // ViewBox dimensions
  const vbParts = stateInfo.viewBox.split(' ').map(Number);
  const vbW = vbParts[2] || 250;
  const vbH = vbParts[3] || 250;

  // Calibrate stroke thickness so stroke appearance is crisp and uniform across all coordinate scales
  const strokeWidth = Number((Math.max(1.5, Math.min(3.6, vbW * 0.0125))).toFixed(2));

  // Flag positioning & dimensions
  const flagW = stateInfo.flagWidth || Math.min(vbW, vbH) * 0.35;
  const flagH = stateInfo.flagHeight || flagW * 0.66;
  const flagX = stateInfo.centerX - flagW / 2;
  const flagY = stateInfo.centerY - flagH / 2;

  // Font sizing for state label
  const fontSize = Number((Math.max(4.5, Math.min(14, vbW * 0.052))).toFixed(1));
  const textY = flagY + flagH + fontSize * 1.35;

  const isIllinois = code === 'IL';

  return (
    <div className={`relative w-full max-w-[440px] flex items-center justify-center select-none bg-transparent ${className}`}>
      {/* 
        Pure SVG State Map Silhouette
        100% Transparent container - No background card, box, or rectangle
      */}
      <svg
        viewBox={stateInfo.viewBox}
        className="w-full h-auto max-h-[440px] filter drop-shadow-[0_18px_32px_rgba(0,0,0,0.48)] transition-transform duration-500 hover:scale-[1.02]"
        style={{ overflow: 'visible', background: 'transparent' }}
      >
        <defs>
          {/* Light Brand Gradient for Map Silhouette Fill (Light white to subtle pale lime tint) */}
          <linearGradient id={`map-fill-grad-${code}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="68%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F4F9EB" />
          </linearGradient>

          {/* Soft drop shadow for embedded state flag badge */}
          <filter id={`flag-badge-shadow-${code}`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0c2543" floodOpacity="0.28" />
          </filter>

          {/* Clip path for the exact state outline */}
          <clipPath id={`state-clip-${code}`}>
            <path d={stateInfo.d} />
          </clipPath>
        </defs>

        {/* 1. Base State Silhouette: Light Brand Fill + Brand Green Border (#98C340) */}
        <path
          d={stateInfo.d}
          fill={`url(#map-fill-grad-${code})`}
          stroke="#98C340"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-all duration-300"
        />

        {/* 2. Inner subtle contour accent */}
        <path
          d={stateInfo.d}
          fill="none"
          stroke="#154377"
          strokeWidth={strokeWidth * 0.35}
          strokeOpacity="0.22"
          className="pointer-events-none"
        />

        {/* 3. Unique Authentic State Flag & Seal Rendering */}
        {isIllinois ? (
          /* Illinois: Official eagle emblem and 'ILLINOIS' text sitting naturally on the white map silhouette */
          <g className="pointer-events-none">
            <image
              href={!imgError ? stateInfo.flag : stateInfo.fallbackFlag}
              x={flagX - 2}
              y={flagY}
              width={flagW + 4}
              height={flagH}
              preserveAspectRatio="xMidYMid meet"
              onError={() => setImgError(true)}
            />
          </g>
        ) : (
          /* Texas, Florida, California, New York, etc.: Authentic State Flag Emblem + Bold Navy State Label */
          <g className="pointer-events-none">
            {/* Elegant Flag Plate with Brand Green Border and Soft Depth */}
            <rect
              x={flagX}
              y={flagY}
              width={flagW}
              height={flagH}
              rx={Math.max(2, vbW * 0.015)}
              ry={Math.max(2, vbW * 0.015)}
              fill="#FFFFFF"
              stroke="#98C340"
              strokeWidth={Math.max(0.8, strokeWidth * 0.45)}
              filter={`url(#flag-badge-shadow-${code})`}
            />

            {/* Authentic State Flag Image */}
            <image
              href={!imgError ? stateInfo.flag : stateInfo.fallbackFlag}
              x={flagX + 0.5}
              y={flagY + 0.5}
              width={flagW - 1}
              height={flagH - 1}
              preserveAspectRatio="none"
              style={{ clipPath: `inset(0px round ${Math.max(2, vbW * 0.015)}px)` }}
              onError={() => setImgError(true)}
            />

            {/* Fine outer highlight ring */}
            <rect
              x={flagX}
              y={flagY}
              width={flagW}
              height={flagH}
              rx={Math.max(2, vbW * 0.015)}
              ry={Math.max(2, vbW * 0.015)}
              fill="none"
              stroke="#154377"
              strokeWidth={Math.max(0.4, strokeWidth * 0.2)}
              strokeOpacity="0.3"
            />

            {/* Official State Name Typography (Bold, Navy #154377) */}
            <text
              x={stateInfo.centerX}
              y={textY}
              textAnchor="middle"
              fill="#154377"
              fontSize={fontSize}
              fontWeight="800"
              letterSpacing={Math.max(0.6, fontSize * 0.12)}
              fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
            >
              {stateInfo.name.toUpperCase()}
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}

export default StateMapGraphic;
