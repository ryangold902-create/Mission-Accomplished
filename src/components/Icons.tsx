/* Line-art icon set matching the statics: 1.6px strokes, round caps/joins.
   All icons are decorative by default (aria-hidden); text always carries the
   meaning, so nothing here needs a label. */

type P = { className?: string; size?: number };
const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none" as const,
  "aria-hidden": true,
  focusable: "false" as const,
});
const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const ArrowRight = ({ className, size = 18 }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M4 12h15M13 6l6 6-6 6" {...stroke} />
  </svg>
);

export const ArrowDown = ({ className, size = 18 }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M12 4v15M6 13l6 6 6-6" {...stroke} />
  </svg>
);

export const Star = ({ className, size = 24 }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M12 3.4l2.6 5.3 5.9.85-4.25 4.15 1 5.9L12 16.8l-5.25 2.8 1-5.9L3.5 9.55l5.9-.85L12 3.4z" {...stroke} />
  </svg>
);

export const Heart = ({ className, size = 24 }: P) => (
  <svg {...base(size)} className={className}>
    <path
      d="M12 20s-7.2-4.35-7.2-9.15A4.05 4.05 0 0112 8.6a4.05 4.05 0 017.2 2.25C19.2 15.65 12 20 12 20z"
      {...stroke}
    />
  </svg>
);

export const ShieldCheck = ({ className, size = 24 }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M12 3.2l6.6 2.6v5c0 4.3-2.8 7.6-6.6 9.2-3.8-1.6-6.6-4.9-6.6-9.2v-5L12 3.2z" {...stroke} />
    <path d="M9 11.8l2.1 2.1 4-4.2" {...stroke} />
  </svg>
);

export const Lightbulb = ({ className, size = 24 }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M9.4 16.4a5.6 5.6 0 115.2 0v1.7a1.4 1.4 0 01-1.4 1.4h-2.4a1.4 1.4 0 01-1.4-1.4v-1.7z" {...stroke} />
    <path d="M10.2 20.9h3.6" {...stroke} />
  </svg>
);

export const Sparkle = ({ className, size = 24 }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M12 3.6l1.7 4.7 4.7 1.7-4.7 1.7L12 16.4l-1.7-4.7-4.7-1.7 4.7-1.7L12 3.6z" {...stroke} />
    <path d="M18.6 15.2l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7.7-1.9z" {...stroke} />
  </svg>
);

export const People = ({ className, size = 24 }: P) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="6.4" r="2.5" {...stroke} />
    <circle cx="5.4" cy="9.4" r="2" {...stroke} />
    <circle cx="18.6" cy="9.4" r="2" {...stroke} />
    <path d="M7.8 15.6a4.4 4.4 0 018.4 0" {...stroke} />
    <path d="M2.6 17a3.4 3.4 0 014.3-2.2M21.4 17a3.4 3.4 0 00-4.3-2.2" {...stroke} />
  </svg>
);

export const Compass = ({ className, size = 24 }: P) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="12" r="8.2" {...stroke} />
    <path d="M15.1 8.9l-1.7 4.5-4.5 1.7 1.7-4.5 4.5-1.7z" {...stroke} />
  </svg>
);

export const Person = ({ className, size = 24 }: P) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="8.2" r="3.2" {...stroke} />
    <path d="M5.8 19.2a6.2 6.2 0 0112.4 0" {...stroke} />
  </svg>
);

export const Chart = ({ className, size = 24 }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M4 16.6l4.6-4.8 3.1 2.6 5-5.4" {...stroke} />
    <path d="M13.4 8.6h3.9v3.9" {...stroke} />
  </svg>
);

export const Summit = ({ className, size = 24 }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M2.6 18.4l5.2-7.2 3 3.6 3.4-5.2 7.2 8.8H2.6z" {...stroke} />
    <path d="M16.4 9.6V3.4" {...stroke} />
    <path d="M16.4 3.8h4.3l-1.2 1.7 1.2 1.7h-4.3z" fill="var(--color-orange)" stroke="none" />
  </svg>
);

/* -- Program pillar marks (pp.13) -------------------------------------- */

export const ChildMark = ({ className, size = 40 }: P) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden focusable="false" className={className}>
    <circle cx="18.5" cy="19" r="9.4" {...stroke} />
    <path d="M13.5 9.8c1.6 2.3 8.4 2.3 10 0" {...stroke} />
    <circle cx="15.4" cy="18.4" r="1" fill="currentColor" />
    <circle cx="21.6" cy="18.4" r="1" fill="currentColor" />
    <path d="M15.8 22.6c1.6 1.5 3.8 1.5 5.4 0" {...stroke} />
    <path
      d="M30.4 22.6l1.3 2.6 2.9.4-2.1 2 .5 2.9-2.6-1.4-2.6 1.4.5-2.9-2.1-2 2.9-.4 1.3-2.6z"
      stroke="var(--color-orange)"
      strokeWidth={1.6}
      strokeLinejoin="round"
    />
  </svg>
);

export const HeartMark = ({ className, size = 40 }: P) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden focusable="false" className={className}>
    <path
      d="M20 32s-11-6.6-11-14a6.2 6.2 0 0111-3.9A6.2 6.2 0 0131 18c0 7.4-11 14-11 14z"
      {...stroke}
    />
    <path d="M20 7.4V3.6M13.4 9.1l-1.8-3.3M26.6 9.1l1.8-3.3" stroke="var(--color-orange)" strokeWidth={1.7} strokeLinecap="round" />
  </svg>
);

export const JenileeMark = ({ className, size = 40 }: P) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden focusable="false" className={className}>
    <path d="M12.4 20.4c0-6 3.4-9.6 7.6-9.6s7.6 3.6 7.6 9.6" {...stroke} />
    <path d="M15.6 17.6c0 4 2 6.6 4.4 6.6s4.4-2.6 4.4-6.6" {...stroke} />
    <path d="M12.6 13.8c-1.5 3.4-1.3 7.6.4 10.6M27.4 13.8c1.5 3.4 1.3 7.6-.4 10.6" {...stroke} />
    <path d="M9.6 33.4a10.6 10.6 0 0120.8 0" {...stroke} />
    <circle cx="17.8" cy="18.6" r=".9" fill="currentColor" />
    <circle cx="22.2" cy="18.6" r=".9" fill="currentColor" />
  </svg>
);

/* -- controls ---------------------------------------------------------- */

export const Plus = ({ className, size = 16 }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M12 5v14M5 12h14" {...stroke} />
  </svg>
);

export const Minus = ({ className, size = 16 }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M5 12h14" {...stroke} />
  </svg>
);

export const MenuIcon = ({ className, size = 22 }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M3.5 7h17M3.5 12h17M3.5 17h17" {...stroke} />
  </svg>
);

export const CloseIcon = ({ className, size = 22 }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M6 6l12 12M18 6L6 18" {...stroke} />
  </svg>
);

export const LockIcon = ({ className, size = 24 }: P) => (
  <svg {...base(size)} className={className}>
    <rect x="5.5" y="11" width="13" height="9.5" rx="1.8" {...stroke} />
    <path d="M8.2 11V8.2a3.8 3.8 0 017.6 0V11" {...stroke} />
  </svg>
);

export const pathIcons = { compass: Compass, person: Person, chart: Chart, summit: Summit };
export const pillarIcons = { child: ChildMark, heart: HeartMark, jenilee: JenileeMark };
