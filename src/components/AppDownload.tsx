import { appAccess } from "@/data/site";
import { ArrowRight } from "./Icons";
import styles from "./AppDownload.module.css";

type Variant = "link" | "badges" | "introBadges" | "prompt";

interface Props {
  /**
   * "link"        quiet inline text link (hero, try tonight, footer)
   * "badges"      the two store badges alone
   * "introBadges" lead-in line + badges (how it works)
   * "prompt"      pricing framing question + badges
   */
  variant?: Variant;
  /** Small connective word before the link, e.g. "or". */
  prefix?: string;
  align?: "start" | "center";
  className?: string;
}

function Badges() {
  return (
    <ul className={styles.badges}>
      {[appAccess.stores.ios, appAccess.stores.android].map((store) => (
        <li key={store.label}>
          <a href={store.href} aria-label={store.label}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={store.image} alt={store.label} width={180} height={60} loading="lazy" decoding="async" />
          </a>
        </li>
      ))}
    </ul>
  );
}

/**
 * The secondary app-download path.
 *
 * The assessment stays the only solid orange button on the page, so this is
 * deliberately quiet in every variant — a text link or a pair of official
 * store badges, never a competing filled CTA. Labels and URLs come from
 * `appAccess` in data/site.ts, so the five placements cannot drift apart.
 */
export default function AppDownload({
  variant = "link",
  prefix,
  align = "start",
  className = "",
}: Props) {
  const cx = (...p: (string | false | undefined)[]) => p.filter(Boolean).join(" ");
  const wrap = cx(styles.wrap, align === "center" && styles.center, className);

  if (variant === "badges") {
    return (
      <div className={wrap}>
        <Badges />
      </div>
    );
  }

  if (variant === "introBadges" || variant === "prompt") {
    return (
      <div className={wrap}>
        <p className={variant === "prompt" ? styles.prompt : styles.intro}>
          {variant === "prompt" ? appAccess.pricingPrompt : appAccess.intro}
        </p>
        <Badges />
      </div>
    );
  }

  return (
    <p className={cx(styles.linkRow, align === "center" && styles.center, className)}>
      {prefix && <span className={styles.prefix}>{prefix} </span>}
      <a className={styles.link} href={appAccess.href}>
        {appAccess.linkLabel}
        <ArrowRight size={15} />
      </a>
    </p>
  );
}
