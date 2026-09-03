"use client";

import { useId, useState } from "react";
import type { PricingPlan } from "@/data/content";
import { Plus, Minus } from "./Icons";
import PrimaryCTA from "./PrimaryCTA";
import styles from "./Pricing.module.css";

export default function PricingCard({ plan }: { plan: PricingPlan }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <article className={`${styles.card} ${plan.primary ? styles.cardPrimary : ""}`}>
      {plan.badge && (
        <span className={`${styles.badge} ${plan.badgeTone === "peach" ? styles.badgePeach : styles.badgeBlue}`}>
          {plan.badge}
        </span>
      )}

      <p className={styles.index}>{plan.index}</p>
      <h3 className={styles.name}>{plan.name}</h3>

      <p className={styles.price}>
        {plan.price}
        {plan.priceSuffix && <span className={styles.priceSuffix}>{plan.priceSuffix}</span>}
      </p>

      {/* Reserved row keeps all four cards the same height when collapsed. */}
      <p className={styles.commitment} aria-hidden={!plan.commitment || undefined}>
        {plan.commitment ?? " "}
      </p>
      <p className={styles.summary}>{plan.summary}</p>

      <div className={styles.action}>
        {plan.primary ? (
          <PrimaryCTA bare size="sm" arrowSize={16} anchorClassName={styles.cardBtn} />
        ) : (
          <button
            type="button"
            className={`btn btn--outline btn--sm ${styles.cardBtn}`}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Hide details" : "View details"}
            {open ? <Minus size={15} /> : <Plus size={15} />}
          </button>
        )}
      </div>

      {/* Details stay collapsed by default so the grid reads simply. */}
      <div id={panelId} className={styles.details} hidden={!open}>
        <p className={styles.detailsLabel}>What&rsquo;s included</p>
        <ul className={styles.detailsList}>
          {plan.includes.map((item) => (
            <li key={item}>
              <span className={styles.tick} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <p className={styles.footnote}>{plan.footnote}</p>
    </article>
  );
}
