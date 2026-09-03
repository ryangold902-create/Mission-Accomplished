import { milestones } from "@/data/content";
import Reveal from "./Reveal";
import styles from "./SummitJourney.module.css";

/**
 * PDF p.2. The mountain photograph carries the orange route, the waypoint dots
 * and the summit flag. The milestone labels that were baked into the static
 * were removed from the image and are rendered as real text here, so they stay
 * legible at every width, are readable by screen readers, and can be
 * translated later.
 */
export default function SummitJourney() {
  return (
    <section className={styles.section} aria-labelledby="summit-title">
      <div className={styles.grid}>
        <Reveal className={styles.copy}>
          <p className="eyebrow">Where we&rsquo;re headed</p>
          <h2 className="h1" id="summit-title">
            The goal isn&rsquo;t<br className="br-lg" /> perfect behavior.
            <em className="serif-italic">It&rsquo;s more independence.</em>
          </h2>
          <span className={styles.rule} aria-hidden="true" />
          <p className={styles.support}>
            Less reminding. More confidence. More moments where your child can say,
            &ldquo;I&rsquo;ve got this.&rdquo;
          </p>
        </Reveal>

        <div className={styles.scene}>
          {/* env-feather-b: fades the photo's bottom edge into the section's
              cream ground rather than ending on a hard horizontal line. */}
          <div className={`${styles.clip} env-feather-b`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={styles.photo}
            src="/assets/summit-mountain.jpg"
            alt="A child walking up a mountain trail, with an orange route marked ahead of them rising to a flag at the summit."
            width={869}
            height={995}
            loading="lazy"
            decoding="async"
          />
          </div>

          {/* Desktop / tablet: labels pinned to their waypoint on the route. */}
          <ul className={styles.points} aria-hidden="true">
            {milestones.map((m, i) => (
              <li
                key={m.id}
                className={`${styles.point} ${m.side === "left" ? styles.left : styles.right}`}
                style={{ left: `${m.dot.x}%`, top: `${m.dot.y}%` }}
              >
                {/* The anchor owns the centring transform; Reveal owns the
                    entrance transform. Keeping them on separate elements stops
                    the reveal's `transform: none` from cancelling the centring. */}
                <span className={styles.anchor}>
                <Reveal className={styles.pointInner} delay={i * 140}>
                  <span className={styles.connector} />
                  <span
                    className={styles.label}
                    style={
                      m.labelShift
                        ? ({ "--label-shift": m.labelShift } as React.CSSProperties)
                        : undefined
                    }
                  >
                    <span className={styles.labelTitle}>{m.label}</span>
                    <span className={styles.labelLine}>{m.line}</span>
                  </span>
                </Reveal>
                </span>
              </li>
            ))}
          </ul>
          <span className={styles.fade} aria-hidden="true" />

          {/* Mobile: the same milestones as a plain, readable list. */}
          <ul className={styles.stackedList}>
            {milestones.map((m) => (
              <li key={m.id} className={styles.stackedItem}>
                <span className={styles.stackedDot} aria-hidden="true" />
                <span>
                  <span className={styles.labelTitle}>{m.label}</span>
                  <span className={styles.labelLine}>{m.line}</span>
                </span>
              </li>
            ))}
          </ul>

          {/* One accessible description of the route for assistive tech. */}
          <ul className="visually-hidden">
            {milestones.map((m) => (
              <li key={m.id}>
                {m.label}: {m.line}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
