import { whoWeServeAudiences } from "@/data/content";
import Reveal from "./Reveal";
import styles from "./WhoWeServe.module.css";

/** Ecosystem section — the three roles around a child. */
export default function WhoWeServe() {
  return (
    <section
      className={`${styles.section} env-cream`}
      id="who-we-serve"
      aria-labelledby="who-we-serve-title"
    >
      <div className="container">
        <Reveal className={styles.head}>
          <p className="eyebrow">Who we serve</p>
          <h2 className="h1" id="who-we-serve-title">
            Different roles.
            <em className="serif-italic">Same mission.</em>
          </h2>
          <p className={styles.lede}>
            Help every child reach their <span className={styles.summit}>summit</span>.
          </p>
        </Reveal>

        <ul className={styles.grid}>
          {whoWeServeAudiences.map((audience, i) => (
            <Reveal key={audience.id} as="li" delay={i * 80} className={styles.cardWrap}>
              <article className={styles.card}>
                <div className={styles.media}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className={styles.image}
                    src={audience.image.src}
                    alt={audience.image.alt}
                    width={audience.image.width}
                    height={audience.image.height}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className={styles.body}>
                  <h3 className={styles.title}>{audience.title}</h3>
                  <p className={styles.roles}>{audience.roles}</p>
                  <p className={styles.blurb}>{audience.blurb}</p>

                  <p className={styles.needsLabel}>They need</p>
                  <ul className={styles.needs}>
                    {audience.needs.map((need) => (
                      <li key={need}>
                        <span className={styles.tick} aria-hidden="true" />
                        {need}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal className={styles.closing} delay={200}>
          <p>
            Mission Accomplished helps everyone supporting a child work from the same information.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
