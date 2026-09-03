"use client";

import { useEffect, useRef, useState } from "react";
import { kidsCta } from "@/data/site";
import Reveal from "../Reveal";
import PrimaryCTA from "../PrimaryCTA";
import { ArrowRight, Summit } from "../Icons";
import styles from "./MissionComplete.module.css";

/**
 * Kids reference 05 — mission complete, then the hand-off to a parent.
 *
 * "Show my parents" reveals a parent-facing panel rather than dropping a
 * child into a pricing table. That panel's action is the shared
 * `primaryCta` from data/site.ts — the same assessment configuration the
 * parent site uses, not a second constant. Its copy is the generic hand-off
 * — it never assumes the child's name.
 */
export default function MissionComplete() {
  const [handoff, setHandoff] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Move focus to the revealed panel once React has actually unhidden it, so
  // keyboard and screen-reader users land on the new content.
  useEffect(() => {
    if (handoff) panelRef.current?.focus();
  }, [handoff]);

  return (
    <section className={`${styles.section} env-dawn`} id="mission-complete" aria-labelledby="complete-title">
      {/* Soft pastel stick confetti — desktop only (hidden on mobile). */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.confetti} src="/assets/kids/confetti-pastel-sticks.webp" alt="" aria-hidden="true" width={1600} height={900} loading="lazy" decoding="async" />

      <div className="container">
        <div className={styles.celebration}>
          <div className={styles.grid}>
          <Reveal className={styles.copy}>
            <p className="eyebrow">Mission complete</p>
            <h2 className="kids-serif" id="complete-title">
              Mission
              <br />
              accomplished.
            </h2>
            <p className={styles.did}>
              You did it! <span aria-hidden="true">🚀</span>
            </p>
            <span className={styles.rule} aria-hidden="true" />
            <p className={`kids-lede ${styles.support}`}>
              One mission down. Ready for the next one?
            </p>
          </Reveal>

          <Reveal className={styles.product} delay={110}>
            <div className={styles.productFrame}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/kids/app-level-up.webp"
                alt="The Mission Accomplished level-up screen: Level up! You are now Level 2, Rising Star, with a plus 25 XP bonus earned."
                width={760}
                height={861}
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>
        </div>
        </div>

        {/* ------------------------------------------------ kid → parent -- */}
        {/* Reveal owns the entrance transition; the inner element owns the
            grid transition, so neither overrides the other. */}
        <Reveal>
        <div className={`${styles.handoff} ${handoff ? styles.handoffOpen : ""}`}>
          <div className={styles.kidSide}>
            <span className={styles.kidIcon} aria-hidden="true">
              <Summit size={26} />
            </span>
            <div className={styles.kidCopy}>
              <p className={styles.kidTitle}>Want missions made for you?</p>
              <p className={styles.kidSub}>Show your parents what you just tried.</p>
            </div>
            <div className={styles.kidActions}>
              <button
                type="button"
                className={`btn btn--primary ${styles.showBtn}`}
                onClick={() => setHandoff(true)}
                aria-expanded={handoff}
                aria-controls="parent-panel"
              >
                Show my parents
                <ArrowRight size={17} />
              </button>
              <a className={`btn btn--outline ${styles.againBtn}`} href={kidsCta.href}>
                Try another mission
              </a>
            </div>
          </div>

          <div
            id="parent-panel"
            ref={panelRef}
            tabIndex={-1}
            className={styles.parentSide}
            hidden={!handoff}
          >
            <span className={styles.parentArrow} aria-hidden="true">
              <ArrowRight size={18} />
            </span>
            <div>
              {/* Generic by default — nothing here may assume the child's
                  name. Real session personalization can replace this later,
                  but the fallback must always read correctly on its own. */}
              <p className={styles.parentTitle}>
                You just tried a Mission Accomplished challenge.
              </p>
              <p className={styles.parentSub}>
                Want missions built around what&rsquo;s hardest for your family?
              </p>
              <PrimaryCTA bare variant="plain" arrowSize={17} anchorClassName={styles.parentCta} />
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
