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
  const vbX = vbParts[0] || 0;
  const vbY = vbParts[1] || 0;
  const vbW = vbParts[2] || 250;
  const vbH = vbParts[3] || 250;

  // Calibrate stroke thickness
  const strokeWidth = Number((Math.max(1.4, Math.min(3.2, vbW * 0.011))).toFixed(2));

  // Florida custom user-uploaded asset check
  const isFlorida = code === 'FL';

  return (
    <div className={`relative w-full max-w-[440px] flex items-center justify-center select-none bg-transparent ${className}`}>
      {isFlorida && !imgError ? (
        /* Florida: Official user-provided Florida map filled with Florida flag */
        <div className="relative w-full flex items-center justify-center group">
          <img
            src="/assets/aistudio/image_429763b5.png"
            alt="Florida State Map Filled with Florida Flag"
            className="w-full h-auto max-h-[440px] object-contain drop-shadow-[0_20px_35px_rgba(12,37,67,0.18)] transition-transform duration-500 group-hover:scale-[1.03]"
            onError={() => setImgError(true)}
          />
        </div>
      ) : (
        /* Dynamic SVG Flag-Filled State Map (Texas, Illinois, California, New York, etc.) */
        <svg
          viewBox={stateInfo.viewBox}
          className="w-full h-auto max-h-[440px] drop-shadow-[0_20px_35px_rgba(12,37,67,0.18)] transition-transform duration-500 hover:scale-[1.03]"
          style={{ overflow: 'visible', background: 'transparent' }}
        >
          <defs>
            {/* Exact State Silhouette Boundary Clip Path */}
            <clipPath id={`state-flag-clip-${code}`}>
              <path d={stateInfo.d} />
            </clipPath>

            {/* Depth filter for clean realism on white section */}
            <filter id={`map-elevation-${code}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#0c2543" floodOpacity="0.14" />
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#0c2543" floodOpacity="0.08" />
            </filter>
          </defs>

          {/* 1. Underlying Drop Shadow Silhouette */}
          <path
            d={stateInfo.d}
            fill="#FFFFFF"
            filter={`url(#map-elevation-${code})`}
          />

          {/* 2. Flag Filling the Exact State Map Silhouette */}
          <g clipPath={`url(#state-flag-clip-${code})`}>
            {/* Base white background */}
            <rect x={vbX - 2} y={vbY - 2} width={vbW + 4} height={vbH + 4} fill="#FFFFFF" />

            {code === 'TX' ? (
              /* Texas Flag Native Vector (Pixel-crisp at any resolution) */
              <g>
                {/* Blue vertical stripe covering western third of Texas */}
                <rect
                  x={vbX}
                  y={vbY}
                  width={vbW * 0.333}
                  height={vbH}
                  fill="#00205B"
                />

                {/* Iconic White Texas Lone Star */}
                <polygon
                  points="432.00,409.40 437.61,426.67 455.78,426.67 441.08,437.35 446.69,454.63 432.00,443.95 417.31,454.63 422.92,437.35 408.22,426.67 426.39,426.67"
                  fill="#FFFFFF"
                />

                {/* Top eastern stripe: Pure White */}
                <rect
                  x={vbX + vbW * 0.333}
                  y={vbY}
                  width={vbW * 0.667 + 2}
                  height={vbH * 0.5}
                  fill="#FFFFFF"
                />

                {/* Bottom eastern stripe: Bold Texas Red (#BF0D3E) */}
                <rect
                  x={vbX + vbW * 0.333}
                  y={vbY + vbH * 0.5}
                  width={vbW * 0.667 + 2}
                  height={vbH * 0.5 + 2}
                  fill="#BF0D3E"
                />
              </g>
            ) : code === 'IL' ? (
              /* Illinois Flag (White Field + Official Illinois Emblem & Text) */
              <g>
                <rect x={vbX} y={vbY} width={vbW} height={vbH} fill="#FFFFFF" />
                <image
                  href={stateInfo.flag}
                  x={vbX - vbW * 0.15}
                  y={vbY + vbH * 0.15}
                  width={vbW * 1.3}
                  height={vbH * 0.7}
                  preserveAspectRatio="xMidYMid meet"
                />
              </g>
            ) : code === 'CA' ? (
              /* California Republic Bear Flag filling California Silhouette */
              <g>
                <rect x={vbX} y={vbY} width={vbW} height={vbH} fill="#FFFFFF" />
                <image
                  href={stateInfo.flag}
                  x={vbX}
                  y={vbY + vbH * 0.18}
                  width={vbW}
                  height={vbH * 0.68}
                  preserveAspectRatio="xMidYMid meet"
                />
                {/* Red stripe along the bottom */}
                <rect x={vbX} y={vbY + vbH * 0.88} width={vbW} height={vbH * 0.12} fill="#B71234" />
              </g>
            ) : code === 'NY' ? (
              /* New York Flag (Navy Field + State Coat of Arms) */
              <g>
                <rect x={vbX} y={vbY} width={vbW} height={vbH} fill="#002147" />
                <image
                  href={stateInfo.flag}
                  x={vbX}
                  y={vbY}
                  width={vbW}
                  height={vbH}
                  preserveAspectRatio="xMidYMid slice"
                />
              </g>
            ) : (
              /* Dynamic Flag Map for any other US state */
              <image
                href={stateInfo.flag}
                x={vbX}
                y={vbY}
                width={vbW}
                height={vbH}
                preserveAspectRatio="none"
              />
            )}
          </g>

          {/* 3. Crisp State Silhouette Boundary Borders */}
          {/* Subtle Outer Brand Green Border */}
          <path
            d={stateInfo.d}
            fill="none"
            stroke="#98C340"
            strokeWidth={strokeWidth * 1.4}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.85"
            className="pointer-events-none"
          />

          {/* Fine Inner Navy Contour */}
          <path
            d={stateInfo.d}
            fill="none"
            stroke="#154377"
            strokeWidth={strokeWidth * 0.75}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="pointer-events-none"
          />
        </svg>
      )}
    </div>
  );
}

export default StateMapGraphic;
