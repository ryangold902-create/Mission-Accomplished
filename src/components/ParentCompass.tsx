import ProductMedia from "./ProductMedia";
import Reveal from "./Reveal";
import { ArrowDown } from "./Icons";
import styles from "./ParentCompass.module.css";

/**
 * PDF p.7 — deliberately the calmest section on the page. The product UI is
 * the proof, so the copy stays to exactly what the statics show.
 */
export default function ParentCompass() {
  return (
    <section
      className={`${styles.section} seam-t seam-b`}
      style={{ "--seam-color": "var(--color-blue-mist)" } as React.CSSProperties}
      id="parent-support" aria-labelledby="compass-title">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.copy}>
          <p className="eyebrow">It starts with you</p>
          <h2 className="h1" id="compass-title">
            Before we help your child,
            <em className="serif-italic">we help you.</em>
          </h2>
          <p className={styles.secondary}>
            You&rsquo;ve asked four times.
            <br />
            You&rsquo;re both frustrated.
            <br />
            What do you try next?
          </p>
          <p className={styles.support}>
            Your Compass gives you a judgment-free place to figure out what may be going on and
            what to try next.
          </p>
        </Reveal>

        <Reveal className={styles.product} delay={120}>
          <ProductMedia
            raised
            media={{
              poster: "/assets/compass-product.webp",
              width: 956,
              height: 715,
              alt: "The Mission Accomplished parent check-in on a tablet: “How are YOU doing right now?” with Happy, Calm, Worried, Exhausted, Frustrated and Overwhelmed — Frustrated is selected — next to the Meet Your Compass panel describing the personal support tool.",
            }}
          />
        </Reveal>
      </div>

      <Reveal className={styles.closing}>
        <p>Helping your child starts with feeling supported yourself.</p>
        <ArrowDown className={styles.arrow} size={20} />
      </Reveal>
    </section>
  );
}
