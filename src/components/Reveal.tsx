"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Stagger in ms — kept small; motion is restrained by design. */
  delay?: number;
  as?: ElementType;
  className?: string;
  id?: string;
}

/**
 * Gentle on-scroll reveal, built as progressive enhancement.
 *
 * The hidden starting state only applies once `js-motion` is on <html> (set by
 * an inline script in the document head), so with JavaScript unavailable or
 * broken every section renders fully visible. Anything already within the
 * viewport on mount is revealed immediately rather than waiting for an
 * intersection callback, which also keeps very tall viewports and print/
 * screenshot rendering correct. `prefers-reduced-motion` neutralises the
 * transition entirely (see globals.css).
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || shown) return;

    // Already on screen (or above it) — show without waiting for a callback.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.98) {
      setShown(true);
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    io.observe(node);

    // Safety net: never leave content hidden if the observer never fires.
    const failsafe = window.setTimeout(() => setShown(true), 2500);
    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [shown]);

  return (
    <Tag
      id={id}
      ref={ref}
      className={`reveal ${shown ? "is-in" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
