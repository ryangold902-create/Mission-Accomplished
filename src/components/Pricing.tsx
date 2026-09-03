import { pricingPlans, pricingPath } from "@/data/content";
import AppDownload from "./AppDownload";
import { pathIcons, People } from "./Icons";
import PricingCard from "./PricingCard";
import PrimaryCTA from "./PrimaryCTA";
import Reveal from "./Reveal";
import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <section className={styles.section} id="pricing" aria-labelledby="pricing-title">
      <div className="container">
        <Reveal className={styles.head}>
          <p className="eyebrow">Choose your path</p>
          <h2 className="h1" id="pricing-title">
            Start free. Add support when you&rsquo;re ready.
          </h2>
          <p className={styles.lede}>
            Every family starts somewhere different. Choose the level of support that fits where you
            are right now.
          </p>
        </Reveal>

        {/* --------------------------------------------------- the path ---- */}
        <Reveal className={styles.path}>
          <ol className={styles.pathList}>
            {pricingPath.map((step) => {
              const Icon = pathIcons[step.icon];
              return (
                <li key={step.id} className={styles.pathStep}>
                  <span className={styles.pathIcon}>
                    <Icon size={22} />
                  </span>
                  <span className={styles.pathLabel}>{step.label}</span>
                </li>
              );
            })}
          </ol>
        </Reveal>

        {/* ------------------------------------------------------- cards ---- */}
        <div className={styles.cards}>
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 70} className={styles.cardWrap}>
              <PricingCard plan={plan} />
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.guest}>
          <People size={22} />
          <p>
            Therapists invited by families receive free guest access — no subscription required.
          </p>
        </Reveal>

        {/* ------------------------------------------------- final CTA ---- */}
        <Reveal className={styles.final}>
          <div className={styles.finalCopy}>
            <h3 className={styles.finalTitle}>Not sure where to start?</h3>
            <p>
              That&rsquo;s exactly what the free assessment is for. Tell us what feels hardest right
              now, and we&rsquo;ll help you understand the next step.
            </p>
          </div>

          <div className={styles.finalCta}>
            <PrimaryCTA microcopy="default" align="center" />
          </div>

          {/* V3.1: was "Already part of Mission Accomplished?", which implied the
              app is only for existing customers. AppDownload's prompt variant
              reframes it as a second path in rather than a returning-user
              shortcut, while staying secondary to the assessment beside it. */}
          <AppDownload variant="prompt" align="center" className={styles.member} />
        </Reveal>
      </div>
    </section>
  );
}
