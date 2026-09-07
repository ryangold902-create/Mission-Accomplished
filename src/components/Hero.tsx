import { founder } from "@/data/site";
import PrimaryCTA from "./PrimaryCTA";
import ProductMedia from "./ProductMedia";
import Reveal from "./Reveal";
import { Star, Heart, ShieldCheck } from "./Icons";
import styles from "./Hero.module.css";

const trust = [
  { Icon: Star, tone: styles.star, text: "Built for kids who need routines that work." },
  { Icon: Heart, tone: styles.heart, text: "Made for parents who want support that helps." },
  { Icon: ShieldCheck, tone: styles.shield, text: "Guided by expertise you can trust." },
];

export default function Hero() {
  // env-dawn: the shared cream -> pale-blue field, so the hero reads as one
  // continuous environment instead of the two-region gradient it had.
  return (
    <section
      className={`${styles.hero} env-dawn seam-b`}
      style={{ "--seam-color": "var(--color-cream)" } as React.CSSProperties}
      id="top"
    >
      <div className={styles.grid}>
        <Reveal className={styles.copy}>
          <p className={`eyebrow ${styles.eyebrow}`}>
            You&rsquo;ve asked your child four times.
            <br />
            Nothing&rsquo;s happened.
          </p>

          <h1 className="display">
            You know your child is capable.
            <em className="serif-italic">So why does everything feel so hard?</em>
          </h1>

          <p className={styles.support}>
            You&rsquo;re not failing.
            <br />
            You&rsquo;re not alone.
            <br />
            And there&rsquo;s no judgment here.
          </p>

          <PrimaryCTA microcopy="default" className={styles.cta} />

          <div className={styles.founder}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={styles.portrait}
              src={founder.portrait}
              alt={`${founder.name}, founder of Mission Accomplished`}
              width={468}
              height={655}
            />
            <div>
              <p className={styles.founderName}>
                <strong>{founder.name},</strong> {founder.credentials}
              </p>
              <p className={styles.founderRoles}>
                {founder.roles.map((role, i) => (
                  <span key={role}>
                    {i > 0 && <span className={styles.sep} aria-hidden="true" />}
                    {role}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className={styles.product} delay={120}>
          <ProductMedia
            priority
            media={{
              poster: "/assets/hero-product.webp",
              width: 969,
              height: 793,
              alt: "The Mission Accomplished parent view on a tablet: the Clean Room challenge broken into five steps, with Maddy's progress, today's streak and a +10 XP reward.",
            }}
          />
        </Reveal>
      </div>

      <Reveal className={styles.trustWrap} delay={160}>
        <ul className={styles.trust}>
          {trust.map(({ Icon, tone, text }) => (
            <li key={text} className={styles.trustItem}>
              <Icon className={`${styles.trustIcon} ${tone}`} size={26} />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
