"use client";

import { useRef, useState } from "react";
import { tryTonightScenarios } from "@/data/content";
import { useAssessmentUnlock } from "@/hooks/useAssessmentUnlock";
import PrimaryCTA from "./PrimaryCTA";
import Reveal from "./Reveal";
import { ArrowRight, Lightbulb, LockIcon } from "./Icons";
import styles from "./TryTonight.module.css";

/**
 * PDF pp.8–12 — try-tonight strategies. Gated behind the free assessment:
 * CTA first, strategies blurred until JotForm redirects with ?assessment=complete.
 */
export default function TryTonight() {
  const { unlocked, ready } = useAssessmentUnlock();
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const scenario = tryTonightScenarios[active];

  const select = (i: number) => {
    if (!unlocked) return;
    setActive(i);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!unlocked) return;
    const last = tryTonightScenarios.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = active === last ? 0 : active + 1;
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = active === 0 ? last : active - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    select(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section
      className={`${styles.section} env-sky seam-b`}
      style={{ "--seam-color": "var(--color-cream)" } as React.CSSProperties}
      id="try-tonight"
      aria-labelledby="try-title"
    >
      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.head}>
          <p className="eyebrow">Try it for yourself</p>
          <h2 className="h1" id="try-title">
            Try one small change tonight.
          </h2>
          <p className={styles.lede}>
            Choose a moment that tends to go sideways.
            <br />
            We&rsquo;ll show you a different way to frame it.
          </p>
        </Reveal>

        <Reveal className={styles.gate} delay={60}>
          <PrimaryCTA microcopy="default" align="start" className={styles.gateCta} />
          {!unlocked && ready && (
            <p className={styles.gateNote}>
              Complete the free assessment to unlock example strategies.
            </p>
          )}
        </Reveal>

        <div
          className={`${styles.strategies} ${!ready ? styles.strategiesPending : ""} ${ready && !unlocked ? styles.strategiesLocked : ""}`}
          aria-hidden={!unlocked}
        >
          {!unlocked && (
            <div className={styles.lockOverlay} aria-hidden="true">
              <span className={styles.lockBadge}>
                <LockIcon size={22} />
                <span>Unlock with the free assessment</span>
              </span>
            </div>
          )}

          <div
            className={styles.tabs}
            role="tablist"
            aria-label="Everyday moments"
            onKeyDown={onKeyDown}
          >
            {tryTonightScenarios.map((s, i) => (
              <button
                key={s.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                id={`try-tab-${s.id}`}
                role="tab"
                type="button"
                aria-selected={i === active}
                aria-controls={`try-panel-${s.id}`}
                tabIndex={unlocked && i === active ? 0 : -1}
                disabled={!unlocked}
                className={`${styles.tab} ${i === active ? styles.tabActive : ""}`}
                onClick={() => select(i)}
              >
                {s.tab}
              </button>
            ))}
          </div>

          <div
            id={`try-panel-${scenario.id}`}
            role="tabpanel"
            aria-labelledby={`try-tab-${scenario.id}`}
            className={styles.panel}
            key={scenario.id}
            inert={!unlocked ? true : undefined}
          >
            <div className={styles.cards}>
              <div className={`${styles.card} ${styles.cardInstead}`}>
                <p className={styles.cardLabel}>Instead of</p>
                <p className={styles.instead}>&ldquo;{scenario.instead}&rdquo;</p>
                <hr className={styles.cardRule} />
                <p className={styles.cardFoot}>
                  Big request.
                  <br />
                  No clear starting point.
                </p>
              </div>

              <div className={styles.turn} aria-hidden="true">
                <span className={styles.turnArrow}>
                  <ArrowRight size={22} />
                </span>
                <span className={styles.turnText}>
                  Turn it
                  <br />
                  into a
                  <br />
                  mission
                </span>
              </div>

              <div className={`${styles.card} ${styles.cardTry}`}>
                <div className={styles.tryBody}>
                  <div className={styles.tryCopy}>
                    <p className={`${styles.cardLabel} ${styles.cardLabelOrange}`}>Try this</p>
                    <p className={styles.tryThis}>&ldquo;{scenario.tryThis}&rdquo;</p>
                    <hr className={styles.cardRule} />
                    <p className={styles.cardFoot}>
                      One clear challenge.
                      <br />
                      One visible first step.
                    </p>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className={styles.illus}
                    src={scenario.illustration}
                    alt={scenario.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

            <div className={styles.why}>
              <span className={styles.whyIcon}>
                <Lightbulb size={20} />
              </span>
              <p>
                <strong>Why this can help</strong>
                <span>
                  It gives the task a clear beginning and makes the first step feel smaller.
                </span>
              </p>
            </div>
          </div>

          <div className={styles.another}>
            <span className={styles.anotherRule} aria-hidden="true" />
            <p>Want to see another idea?</p>
            <button
              type="button"
              className={`btn btn--outline btn--sm ${styles.anotherBtn}`}
              onClick={() => select((active + 1) % tryTonightScenarios.length)}
              disabled={!unlocked}
            >
              Show me another
              <ArrowRight size={16} />
            </button>
            <span className={styles.anotherRule} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
