"use client";

import { useRef, useState } from "react";
import { insightCarouselData } from "@/data/content";
import { founder } from "@/data/site";
import { ArrowDown } from "./Icons";
import Reveal from "./Reveal";
import styles from "./InsightCarousel.module.css";

/**
 * PDF pp.3–5 are three states of one module, not three sections.
 * Implemented as a WAI-ARIA tab set: roving tabindex, arrow/Home/End keys,
 * and a crossfade between panels. Inactive panels stay in the DOM for the
 * transition but are `inert`, so they are out of the focus and a11y trees.
 */
export default function InsightCarousel() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const last = insightCarouselData.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = active === last ? 0 : active + 1;
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = active === 0 ? last : active - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className={styles.section} id="why-it-feels-confusing" aria-labelledby="insight-title">
      <div className={styles.grid}>
        {/* Full-bleed background for the pale panel; the copy below still sits
            on the page column so nothing is double-centred. */}
        <span className={styles.panelBg} aria-hidden="true" />

        <div className={styles.panel}>
          <Reveal className={styles.panelInner}>
            <p className="eyebrow">Why it can feel so confusing</p>
            <h2 className="h1" id="insight-title">
              What looks like one thing can be something else entirely.
            </h2>
            <span className={styles.rule} aria-hidden="true" />
            <p className={styles.support}>
              The clues often connect in ways that aren&rsquo;t obvious from the outside.
            </p>
            {/* PLACEHOLDER anchor: the statics contain no "Our Story" section,
                so the nav item scrolls to the founder moment on the page. */}
            <figure className={styles.quote} id="our-story">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={founder.portrait}
                alt={`${founder.name}, ${founder.credentials}, founder of Mission Accomplished`}
                width={468}
                height={655}
              />
              <figcaption>
                Parents often ask {founder.name.split(" ")[0]}:
                <em>&ldquo;How did you know that?&rdquo;</em>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* ------------------------------------------------------ right stage */}
        <div className={styles.stage}>
          <div className={styles.stack}>
            {insightCarouselData.map((item, i) => (
              <div
                key={item.id}
                id={`insight-panel-${item.id}`}
                role="tabpanel"
                aria-labelledby={`insight-tab-${item.id}`}
                className={`${styles.pane} ${i === active ? styles.paneActive : ""}`}
                inert={i !== active ? true : undefined}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={styles.photo}
                  src={item.image}
                  alt={item.alt}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
                <div className={styles.card}>
                  <p className={styles.cardNum}>{item.number}</p>
                  <p className={styles.cardLabel}>What you see</p>
                  <blockquote className={styles.cardQuote}>
                    &ldquo;{item.see}&rdquo;
                  </blockquote>
                  <hr className={styles.cardRule} />
                  <p className={styles.cardLabel}>What may be underneath</p>
                  <ul className={styles.cardList}>
                    {item.underneath.map((u) => (
                      <li key={u}>
                        <span className={styles.bullet} aria-hidden="true" />
                        {u}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div
            className={styles.tabs}
            role="tablist"
            aria-label="What you see, and what may be underneath"
            onKeyDown={onKeyDown}
          >
            {insightCarouselData.map((item, i) => (
              <button
                key={item.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                id={`insight-tab-${item.id}`}
                role="tab"
                type="button"
                aria-selected={i === active}
                aria-controls={`insight-panel-${item.id}`}
                tabIndex={i === active ? 0 : -1}
                className={`${styles.tab} ${i === active ? styles.tabActive : ""}`}
                onClick={() => setActive(i)}
              >
                <span className={styles.tabNum}>{item.number}</span>
                <span className={styles.tabLabel}>{item.tab}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <Reveal className={styles.closing}>
        <p>
          {"When you understand what may be underneath, "}
          <em className="serif-italic">you can change what happens next.</em>
        </p>
        <ArrowDown className={styles.arrow} size={20} />
      </Reveal>
    </section>
  );
}
