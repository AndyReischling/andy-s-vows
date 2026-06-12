import type { SVGProps } from "react";

/**
 * Hand-authored flourish SVGs mirroring the supplied riso/letterpress
 * reference assets. All strokes use `currentColor` so the `.ornament-*`
 * helper classes drive their color on light vs. dark panels.
 */

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Symmetric horizontal flourish — center sprig flanked by scrolling vines. */
export function FiligreeHorizontal(props: SVGProps<SVGSVGElement>) {
  // Right half (origin center x=210, baseline y=40). Mirrored for the left.
  const half =
    "M210 40 C 224 40 226 28 238 28 C 250 28 250 40 264 40 " +
    "C 292 40 300 31 328 36 " +
    "C 352 40 349 23 369 25 C 386 27 385 47 367 46 C 357 45 358 37 366 38";

  return (
    <svg
      viewBox="0 0 420 64"
      role="presentation"
      aria-hidden="true"
      {...props}
    >
      {/* center sprig */}
      <path {...strokeProps} d="M210 42 L210 14" />
      <path
        {...strokeProps}
        d="M210 16 C 204 9 204 3 210 1 C 216 3 216 9 210 16 Z"
      />
      {/* right + mirrored left vines */}
      <path {...strokeProps} d={half} />
      <g transform="translate(420,0) scale(-1,1)">
        <path {...strokeProps} d={half} />
      </g>
      {/* dots */}
      <circle cx="291" cy="31" r="2.4" fill="currentColor" />
      <circle cx="129" cy="31" r="2.4" fill="currentColor" />
    </svg>
  );
}

/** Top-left corner scrollwork bracket. Rotate via CSS for other corners. */
export function FiligreeCorner(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 120 120"
      role="presentation"
      aria-hidden="true"
      {...props}
    >
      {/* corner spine */}
      <path {...strokeProps} d="M8 8 L112 8" />
      <path {...strokeProps} d="M8 8 L8 112" />
      {/* curls along the top arm */}
      <path
        {...strokeProps}
        d="M36 8 C 36 22 50 24 52 14 C 53 9 47 7 46 12"
      />
      <path
        {...strokeProps}
        d="M66 8 C 66 24 84 26 86 14 C 87 8 80 7 79 13"
      />
      <path
        {...strokeProps}
        d="M96 8 C 96 26 116 28 118 16"
      />
      {/* curls along the left arm */}
      <path
        {...strokeProps}
        d="M8 36 C 22 36 24 50 14 52 C 9 53 7 47 12 46"
      />
      <path
        {...strokeProps}
        d="M8 66 C 24 66 26 84 14 86 C 8 87 7 80 13 79"
      />
      <path
        {...strokeProps}
        d="M8 96 C 26 96 28 116 16 118"
      />
      {/* corner flourish */}
      <path
        {...strokeProps}
        d="M8 8 C 28 28 30 18 42 30 C 30 18 40 16 8 8"
      />
    </svg>
  );
}

/** Small divider sprig set between sections. */
export function DividerSprig(props: SVGProps<SVGSVGElement>) {
  const half =
    "M120 22 C 132 22 134 12 146 14 C 160 16 158 28 170 26 " +
    "C 188 23 190 12 206 16 C 220 20 218 9 232 12";

  return (
    <svg
      viewBox="0 0 240 36"
      role="presentation"
      aria-hidden="true"
      {...props}
    >
      {/* center tick */}
      <path {...strokeProps} d="M120 26 L120 6" />
      <circle cx="120" cy="4" r="2" fill="currentColor" />
      {/* right + mirrored left */}
      <path {...strokeProps} d={half} />
      <g transform="translate(240,0) scale(-1,1)">
        <path {...strokeProps} d={half} />
      </g>
      <circle cx="178" cy="20" r="1.8" fill="currentColor" />
      <circle cx="62" cy="20" r="1.8" fill="currentColor" />
    </svg>
  );
}
