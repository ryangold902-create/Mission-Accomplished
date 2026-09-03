import { aiSupportBadges } from "@/data/content";
import Reveal from "./Reveal";
import styles from "./AiSupport.module.css";

/** Parent homepage — 24/7 AI support (client-approved claims). */
export default function AiSupport() {
  return (
    <section
      className={`${styles.section} seam-t`}
      style={{ "--seam-color": "var(--color-blue-mist)" } as React.CSSProperties}
      id="ai-support"
      aria-labelledby="ai-support-title"
    >
      <div className="container">
        <Reveal className={styles.inner}>
          <p className="eyebrow">24/7 AI Support</p>
          <h2 className="h1" id="ai-support-title">
            Support that doesn&rsquo;t clock out.
            <br />
            <em className="serif-italic">Real help at 2 a.m., not a callback on Monday.</em>
          </h2>
          <p className={styles.body}>
            Mission Accomplished&rsquo;s proprietary AI support is live in the app and professionally
            trained by a licensed speech-language pathologist (CCC-SLP). When your child is melting down
            in the middle of the night, or your therapist is off the clock, you get calm, expert-backed
            guidance in the moment, not days later.
          </p>
          <ul className={styles.badges} aria-label="AI support highlights">
            {aiSupportBadges.map((badge) => (
              <li key={badge}>{badge}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
