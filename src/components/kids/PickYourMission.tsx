"use client";

import { featuredMission } from "@/data/kids";
import Reveal from "../Reveal";
import { useScrollableRegion } from "./useScrollableRegion";
import styles from "./PickYourMission.module.css";

/** Kids reference 02 — one example mission broken into clear steps. */
export default function PickYourMission() {
  const previewRef = useScrollableRegion<HTMLDivElement>("Mission preview — scrolls sideways");
  const { label, illustration, steps, preview } = featuredMission;

  return (
    <section className={`${styles.section} env-cream`} id="pick-your-mission" aria-labelledby="pick-title">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <Reveal>
              <p className="eyebrow">Pick your mission</p>
              <h2 className="kids-display" id="pick-title">
                What do you
                <br />
                want to tackle?
              </h2>
              <p className={`kids-lede ${styles.support}`}>
                Here&rsquo;s how one mission breaks into clear steps.
              </p>
            </Reveal>

            <Reveal delay={90}>
              <article className={styles.breakdown} aria-labelledby="mission-example-title">
                <div className={styles.breakdownHead}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className={styles.breakdownArt}
                    src={illustration}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                  />
                  <h3 className={styles.breakdownTitle} id="mission-example-title">
                    {label}
                  </h3>
                </div>
                <ol className={styles.steps}>
                  {steps.map((step, index) => (
                    <li key={step.id}>
                      <span className={styles.stepNum} aria-hidden="true">
                        {index + 1}
                      </span>
                      <span>{step.text}</span>
                    </li>
                  ))}
                </ol>
              </article>
            </Reveal>
          </div>

          <Reveal className={styles.preview} delay={140}>
            <div ref={previewRef} className={styles.previewCard}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={preview.poster}
                alt={preview.alt}
                width={950}
                height={280}
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className={styles.previewNote} role="status">
              {label} &mdash; here&rsquo;s how it breaks down.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
