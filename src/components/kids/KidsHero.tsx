import { kidsCta } from "@/data/site";
import ProductMedia from "../ProductMedia";
import Reveal from "../Reveal";
import { ArrowRight, ShieldCheck } from "../Icons";
import styles from "./KidsHero.module.css";

/** Kids reference 01. */
export default function KidsHero() {
  return (
    <section className={`${styles.hero} env-dawn`} id="top">
      {/* V3.1: the product screenshot is now the hero's subject, not this
          photograph — see .mountain in KidsHero.module.css for why it is
          tuned down to a faint atmospheric hint instead of a backdrop. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={`kids-mountain ${styles.mountain}`} src="/assets/summit-mountain-portrait.jpg" alt="" aria-hidden="true" width={657} height={1224} decoding="async" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.confetti} src="/assets/kids/confetti.webp" alt="" aria-hidden="true" width={1600} height={900} loading="lazy" decoding="async" />

      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.copy}>
          <p className="eyebrow">Hey, adventurer!</p>
          <h1 className="kids-serif">
            Ready for
            <br />
            your <span className="accent">mission</span>
          </h1>
          <p className={`kids-lede ${styles.support}`}>
            Big things feel easier when you only have to focus on what&rsquo;s next.
          </p>

          <a className={`btn btn--primary ${styles.cta}`} href={kidsCta.href}>
            {kidsCta.label}
            <ArrowRight size={20} />
          </a>

          <p className={styles.trust}>
            <ShieldCheck size={20} />
            {kidsCta.microcopy}
          </p>
        </Reveal>

        <Reveal className={styles.product} delay={120}>
          <ProductMedia
            priority
            frame="device"
            media={{
              poster: "/assets/kids/app-dashboard.webp",
              /* True pixel size of the capture (880x678, landscape) — the
                 previous 670x862 was stale from an earlier portrait crop and
                 was forcing the wrong aspect ratio onto the current asset. */
              width: 880,
              height: 678,
              alt: "The Mission Accomplished kids dashboard: Maddy's mountain route with milestones from Level 2 to the summit, her streak, and the Clean Room challenge ready to start.",
            }}
          />
        </Reveal>
      </div>
    </section>
  );
}
