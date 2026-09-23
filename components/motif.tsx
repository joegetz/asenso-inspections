/**
 * Asenso motif system. Gayaman (Kalinga centipede; protection) is the signature
 * register. Hard rules from the brand kit:
 *   1. One pattern moment per surface. Logo OR pattern, never both competing.
 *   2. Density belongs inside a bounded panel or band, with clean space beside it.
 *   3. Monochrome gold. Never a second color inside a motif.
 */

const GOLD = "#B8924A";

/**
 * Pattern definitions, rendered once per document (see app/layout.tsx).
 * Referenced by id from any inline SVG on the page.
 */
export function BrandDefs() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="0"
      height="0"
      className="absolute"
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
    >
      <defs>
        {/* horizontal gayaman legs, 9 x 9 unit */}
        <pattern
          id="asenso-gayaman-h"
          x="0"
          y="0"
          width="9"
          height="9"
          patternUnits="userSpaceOnUse"
        >
          <rect x="2.6" y="0" width="2.4" height="2.6" fill={GOLD} />
          <rect x="2.6" y="6.4" width="2.4" height="2.6" fill={GOLD} />
        </pattern>
        {/* vertical gayaman legs, 26.1 x 7.6 unit */}
        <pattern
          id="asenso-gayaman-v"
          x="0"
          y="0"
          width="26.1"
          height="7.6"
          patternUnits="userSpaceOnUse"
        >
          <rect x="15.9" y="2.4" width="2.3" height="1.9" fill={GOLD} />
          <rect x="21.8" y="2.4" width="2.3" height="1.9" fill={GOLD} />
        </pattern>
      </defs>
    </svg>
  );
}

/**
 * The signature register as a thin horizontal rule. Document furniture:
 * section dividers, band edges. Tiles to any width.
 */
export function GayamanRule({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="none"
      className={`block w-full h-[9px] ${className ?? ""}`}
    >
      {/* No viewBox: user units are CSS pixels, so the register renders at its
          true 9px scale and tiles horizontally instead of stretching. */}
      <rect width="100%" height="9" fill="url(#asenso-gayaman-h)" />
      <rect x="0" y="3.2" width="100%" height="2.6" fill={GOLD} />
    </svg>
  );
}

/**
 * Vertical edge panel. One bounded density moment on a surface, with clean
 * space beside it. Tiles to any height.
 */
export function GayamanPanel({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="none"
      className={`block w-[26px] h-full ${className ?? ""}`}
    >
      {/* No viewBox: true 26.1px-wide register, tiling vertically. */}
      <rect width="26.1" height="100%" fill="url(#asenso-gayaman-v)" />
      <rect x="18.9" y="0" width="2.2" height="100%" fill={GOLD} />
      <rect x="12.2" y="0" width="1.3" height="100%" fill={GOLD} />
    </svg>
  );
}

/**
 * The house mark. Tao row, bar, pula row, bar, tiktiko row. One mark, used
 * at every size. There is no reduced variant.
 */
export function AsensoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        d="M10.20 4.20L12.65 13.02L11.23 16.36L11.23 19.40L9.17 19.40L9.17 16.36L7.75 13.02ZM17.25 4.20L19.70 13.02L18.28 16.36L18.28 19.40L16.22 19.40L16.22 16.36L14.80 13.02ZM24.30 4.20L26.75 13.02L25.33 16.36L25.33 19.40L23.27 19.40L23.27 16.36L21.85 13.02ZM31.35 4.20L33.80 13.02L32.38 16.36L32.38 19.40L30.32 19.40L30.32 16.36L28.90 13.02ZM38.40 4.20L40.85 13.02L39.43 16.36L39.43 19.40L37.37 19.40L37.37 16.36L35.95 13.02Z"
        fill={GOLD}
      />
      <rect x="6.6" y="20.6" width="34.8" height="2.5" fill={GOLD} />
      <g fill={GOLD}>
        <circle cx="10.20" cy="27.4" r="2.0" />
        <circle cx="17.25" cy="27.4" r="2.0" />
        <circle cx="24.30" cy="27.4" r="2.0" />
        <circle cx="31.35" cy="27.4" r="2.0" />
        <circle cx="38.40" cy="27.4" r="2.0" />
      </g>
      <rect x="6.6" y="31.8" width="34.8" height="2.2" fill={GOLD} />
      <path
        d="M6.60 36.00L11.80 40.40L17.00 36.00L22.20 40.40L27.40 36.00L32.60 40.40L37.80 36.00L43.00 40.40L43.00 43.80L37.80 39.40L32.60 43.80L27.40 39.40L22.20 43.80L17.00 39.40L11.80 43.80L6.60 39.40Z"
        fill={GOLD}
      />
    </svg>
  );
}
