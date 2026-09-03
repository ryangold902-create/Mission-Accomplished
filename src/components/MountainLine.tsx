import styles from "./Footer.module.css";

/**
 * The footer mountain-line system: soft contour ranges with the orange route
 * rising to the summit flag. Drawn as SVG rather than cropped from the static
 * so it stays crisp and reflows cleanly across the full footer width.
 */
export default function MountainLine() {
  return (
    <svg
      className={styles.range}
      viewBox="0 0 1200 240"
      preserveAspectRatio="xMaxYMax slice"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" strokeLinejoin="round" strokeLinecap="round">
        {/* distant range */}
        <g stroke="rgba(255,255,255,0.16)" strokeWidth="1">
          <path d="M0 214 L96 168 L146 190 L212 150 L268 188 L318 166 L392 212" />
          <path d="M330 214 L420 158 L470 184 L534 142 L598 182 L646 162 L724 214" />
          <path d="M660 214 L742 166 L790 188 L846 152 L906 186 L950 168 L1024 214" />
        </g>

        {/* mid range */}
        <g stroke="rgba(255,255,255,0.3)" strokeWidth="1.1">
          <path d="M150 216 L252 150 L292 174 L352 128 L410 172 L452 152 L536 216" />
          <path d="M470 216 L566 158 L604 180 L660 138 L716 178 L758 158 L842 216" />
          <path d="M262 176 L286 160 M580 178 L604 162" />
        </g>

        {/* the summit */}
        <g stroke="rgba(255,255,255,0.46)" strokeWidth="1.3">
          <path d="M880 216 L1010 96 L1074 34 L1140 108 L1200 172" />
          <path d="M1038 78 L1058 100 L1080 62 L1098 92 L1122 74" />
          <path d="M1006 128 L1036 108 M1112 126 L1146 148" />
          <path d="M960 176 L992 150 M1150 178 L1180 196" />
        </g>
      </g>

      {/* the route */}
      <path
        d="M300 206 C 392 204, 452 196, 520 190 S 640 180, 704 162 S 812 132, 878 106 S 1000 66, 1064 40"
        fill="none"
        stroke="var(--color-orange)"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeDasharray="16 14"
      />
      <g fill="var(--color-orange)">
        <path d="M596 178 l12 6 -12 6 z" />
        <path d="M826 124 l12 6 -12 6 z" />
      </g>

      {/* summit flag */}
      <g>
        <path d="M1074 36 L1074 2" stroke="var(--color-orange)" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M1074 4 L1118 12 L1108 20 L1118 28 L1074 25 Z" fill="var(--color-orange)" />
      </g>
    </svg>
  );
}
