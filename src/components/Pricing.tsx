import { pricingPlans, pricingPath } from "@/data/content";
import { pathIcons, People } from "./Icons";
import PricingCard from "./PricingCard";
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
      </div>
    </section>
  );
}
