import { primaryCta } from "@/data/site";
import { ArrowRight } from "./Icons";
import styles from "./PrimaryCTA.module.css";

interface Props {
  /**
   * "label" = sentence case for body sections, "short" = compact for the
   * header, "nav" = tightest form, for the footer's link row.
   */
  copy?: "label" | "short" | "nav";
  /**
   * Button skin. "plain" takes `.btn` only, for call sites that supply their
   * own fill; "none" drops the button classes entirely, for links that are
   * styled as navigation.
   */
  variant?: "primary" | "outline" | "plain" | "none";
  size?: "md" | "sm";
  /** Show the supporting line under the button. */
  microcopy?: false | "default" | "alt";
  withArrow?: boolean;
  arrowSize?: number;
  align?: "start" | "center";
  /** Class for the wrapper that stacks the button and its microcopy. */
  className?: string;
  /** Class for the anchor itself. */
  anchorClassName?: string;
  /** Render just the anchor — no wrapper, no microcopy. */
  bare?: boolean;
}

const variantClass = {
  primary: "btn btn--primary",
  outline: "btn btn--outline",
  plain: "btn",
  none: "",
} as const;

/**
 * The single place a primary call to action is rendered.
 * Label, destination and microcopy all come from `primaryCta` in data/site.ts,
 * so the funnel can be switched globally without touching any section.
 *
 * `anchorClassName` and `bare` exist so a section can style or place the link
 * itself without re-deriving the href and the external target/rel pair — that
 * spread lives here and nowhere else.
 */
export default function PrimaryCTA({
  copy = "label",
  variant = "primary",
  size = "md",
  microcopy = false,
  withArrow = true,
  arrowSize,
  align = "start",
  className = "",
  anchorClassName = "",
  bare = false,
}: Props) {
  const label =
    copy === "short" ? primaryCta.shortLabel : copy === "nav" ? primaryCta.navLabel : primaryCta.label;
  const note =
    microcopy === "alt"
      ? primaryCta.microcopyAlt
      : microcopy === "default"
        ? primaryCta.microcopy
        : null;

  const cx = (...parts: (string | false)[]) => parts.filter(Boolean).join(" ");

  const anchor = (
    <a
      className={cx(
        variantClass[variant],
        variant !== "none" && size === "sm" && "btn--sm",
        anchorClassName,
      )}
      href={primaryCta.href}
      {...(primaryCta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {label}
      {withArrow && <ArrowRight size={arrowSize} />}
    </a>
  );

  if (bare) return anchor;

  return (
    <div className={cx(styles.wrap, align === "center" && styles.center, className)}>
      {anchor}
      {note && <p className={styles.note}>{note}</p>}
    </div>
  );
}
