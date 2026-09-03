import { reframeSteps } from "@/data/content";
import AppDownload from "./AppDownload";
import ProductMedia from "./ProductMedia";
import Reveal from "./Reveal";
import { Person, Star } from "./Icons";
import styles from "./HowItWorks.module.css";

const Target = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9.2" stroke="var(--color-navy)" strokeWidth="1.7" />
    <circle cx="12" cy="12" r="4.8" stroke="var(--color-orange)" strokeWidth="1.7" />
    <circle cx="12" cy="12" r="1.5" fill="var(--color-navy)" />
  </svg>
);

const Smile = ({ className }: { className?: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <circle cx="12" cy="12" r="8.6" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="9.3" cy="10.4" r="1" fill="currentColor" />
    <circle cx="14.7" cy="10.4" r="1" fill="currentColor" />
    <path d="M8.8 14.4c1.9 1.8 4.5 1.8 6.4 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const Check = ({ done }: { done?: boolean }) =>
  done ? (
    <span className={styles.checkDone} aria-hidden="true">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M5 12.6l4.4 4.4L19 7.4" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  ) : (
    <span className={styles.checkEmpty} aria-hidden="true" />
  );

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how-it-works" aria-labelledby="hiw-title">
      {/* Atmospheric mountain bridging the three product states. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.mountain} src="/assets/howitworks-mountain.webp" alt="" aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.head}>
          <p className="eyebrow">How it works</p>
          <h2 className="h1" id="hiw-title">
            One overwhelming task.
            <em className="serif-italic">One clear next step.</em>
          </h2>
          <p className={styles.lede}>
            You tell Mission Accomplished what&rsquo;s hard.
            <br />
            We help turn it into a challenge your child can understand, start, and finish.
          </p>
        </Reveal>

        <ol className={styles.beats}>
          {/* ------------------------------------------------------ 1 parent */}
          <li className={styles.beat}>
            <Reveal>
              <p className={styles.beatLabel}>Parent</p>
              <div className={styles.figure}>
                <ProductMedia
                  frame="device"
                  raised
                  media={{
                    poster: "/assets/howitworks-parent-screen.webp",
                    width: 440,
                    height: 400,
                    alt: "The Mission Accomplished parent view: a Create a challenge form filled in with “Clean your room.” and “Very often” selected.",
                  }}
                />
              </div>
              <p className={styles.caption}>
                <span className={styles.captionIcon}>
                  <Person size={20} />
                </span>
                You start with the real-life challenge.
              </p>
            </Reveal>
          </li>

          {/* --------------------------------------- 2 the reframe (a card) */}
          <li className={`${styles.beat} ${styles.beatCenter}`}>
            <Reveal delay={110}>
              <p className={styles.beatLabel}>Mission Accomplished reframes it</p>
              <div className={styles.reframe}>
                <div className={styles.reframeHead}>
                  <Target />
                  <span>Clean Room</span>
                </div>
                <p className={styles.reframeIntro}>
                  Mission Accomplished turns one big ask into manageable steps.
                </p>
                <ul className={styles.stepList}>
                  {reframeSteps.map((step, i) => (
                    <li key={step.text} className={`${styles.step} ${i === 0 ? styles.stepDone : ""}`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={step.icon} alt="" width={72} height={72} aria-hidden="true" />
                      <span>{step.text}</span>
                      <Check done={i === 0} />
                    </li>
                  ))}
                </ul>
              </div>
              <p className={styles.caption}>
                <span className={styles.captionIcon}>
                  <Star size={20} />
                </span>
                Mission Accomplished turns one big ask into manageable steps.
              </p>
            </Reveal>
          </li>

          {/* ------------------------------------------------------- 3 child */}
          <li className={styles.beat}>
            <Reveal delay={220}>
              <p className={styles.beatLabel}>Child</p>
              <div className={styles.figure}>
                <ProductMedia
                  frame="device"
                  raised
                  media={{
                    poster: "/assets/howitworks-child-screen.webp",
                    width: 440,
                    height: 400,
                    alt: "The Mission Accomplished child view: the Clean Room challenge showing one step in progress, what is up next, Maddy cheering and today's progress at 2 of 5 steps.",
                  }}
                />
              </div>
              <p className={styles.caption}>
                <span className={styles.captionIcon}>
                  <Smile />
                </span>
                Maddy sees what&rsquo;s next — not the whole mountain.
              </p>
            </Reveal>
          </li>
        </ol>

        <Reveal className={styles.closing}>
          <p>One challenge at a time. Real progress every time.</p>
          <p className={styles.closingMark}>Mission accomplished.</p>
          {/* Secondary to the assessment CTA above the fold, but a clearly
              visible app path once someone has read the whole product story. */}
          <AppDownload variant="introBadges" align="center" className={styles.appDownload} />
        </Reveal>
      </div>
    </section>
  );
}
