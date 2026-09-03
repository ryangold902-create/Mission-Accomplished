import { journeyStats } from "@/data/kids";
import Reveal from "../Reveal";
import styles from "./ClimbYourMountain.module.css";

/**
 * Kids reference 04 — the real kid-side dashboard is the visual, not an
 * invented game UI. The chips beneath are a website-level summary only.
 *
 * V3.1: this is the one Kids section that keeps the full mountain
 * photograph — every other section dropped it to cut the repetition, so
 * this is now deliberately the page's strongest mountain moment.
 */
export default function ClimbYourMountain() {
  return (
    <section className={`${styles.section} env-cream`} id="climb" aria-labelledby="climb-title">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={`kids-mountain ${styles.mountain}`} src="/assets/summit-mountain-portrait.jpg" alt="" aria-hidden="true" width={657} height={1224} loading="lazy" decoding="async" />

      <div className="container">
        <div className={styles.grid}>
          <Reveal className={styles.copy}>
            <p className="eyebrow">Kids journey</p>
            <h2 className="kids-display" id="climb-title">
              Every mission
              <br />
              moves you
              <br />
              forward.
            </h2>
            <p className={`kids-lede ${styles.support}`}>
              Finish missions. Build streaks. Reach new milestones.
            </p>
            <span className={styles.trail} aria-hidden="true">
              <svg width="220" height="90" viewBox="0 0 220 90" fill="none">
                <path
                  d="M4 78C46 74 74 66 104 50S164 20 214 8"
                  stroke="var(--color-orange)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="12 10"
                />
                <path d="M203 2l14 6-13 8z" fill="var(--color-orange)" />
              </svg>
            </span>
          </Reveal>

          <Reveal delay={110}>
            <div className={styles.boardFrame}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/kids/app-journey.webp"
                alt="Maddy's Mission Accomplished journey: her position marked along the mountain route, the next milestone at Level 3, and milestone badges running from Level 2 up to the summit."
                width={980}
                height={584}
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>
        </div>

        <Reveal className={styles.stats}>
          <ul>
            {journeyStats.map((s) => (
              <li key={s.id}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.icon} alt="" aria-hidden="true" width={28} height={28} />
                <span>
                  <span className={styles.statLabel}>{s.label}</span>
                  <span className={`${styles.statValue} ${styles[s.tone]}`}>{s.value}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
