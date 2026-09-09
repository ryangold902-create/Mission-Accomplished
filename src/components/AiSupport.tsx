import AppDownload from "./AppDownload";
import PrimaryCTA from "./PrimaryCTA";
import Reveal from "./Reveal";
import styles from "./AiSupport.module.css";

/**
 * Closes the parents page after pricing: 24/7 support framing, then the
 * shared assessment / app-download panel.
 */
export default function AiSupport() {
  return (
    <section
      className={styles.section}
      id="ai-support"
      aria-labelledby="ai-support-title"
    >
      <div className="container">
        <Reveal className={styles.head}>
          <h2 className="h1" id="ai-support-title">
            {"Not sure where to start? "}
            <em className="serif-italic">Support is always within reach.</em>
          </h2>
          <p className={styles.body}>
            When you&rsquo;re stuck on what to do next, Mission Accomplished gives you 24/7
            AI-powered support to help you understand what may be behind the challenge and find a
            practical next step. Whether it&rsquo;s morning, bedtime, or 2 AM, you don&rsquo;t have
            to figure it out alone.
          </p>
        </Reveal>

        <Reveal className={styles.final} delay={80}>
          <div className={styles.finalCta}>
            <PrimaryCTA microcopy="default" align="center" />
          </div>

          {/* Secondary path — stays quiet next to the assessment CTA. */}
          <AppDownload variant="prompt" align="center" className={styles.member} />
        </Reveal>
      </div>
    </section>
  );
}
