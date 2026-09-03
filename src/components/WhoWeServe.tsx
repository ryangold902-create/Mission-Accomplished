import Reveal from "./Reveal";
import styles from "./WhoWeServe.module.css";

/** Ecosystem visual — Who We Serve infographic (parents, teachers, therapists). */
export default function WhoWeServe() {
  return (
    <section
      className={styles.section}
      id="who-we-serve"
      aria-label="Who we serve — parents, teachers, and therapists"
    >
      <div className={`container ${styles.frame}`}>
        <Reveal className={styles.media}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={styles.image}
            src="/assets/who-we-serve.jpeg"
            alt="Who we serve: Parents and caregivers need clarity and daily guidance; teachers and educators need shared goals and progress visibility; therapists and clinicians need continuity between sessions. Mission Accomplished helps everyone supporting a child work from the same information."
            width={1500}
            height={844}
            loading="lazy"
            decoding="async"
          />
        </Reveal>
      </div>
    </section>
  );
}
