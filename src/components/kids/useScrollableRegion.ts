"use client";

import { useEffect, useRef } from "react";

/**
 * Keeps a sideways-scrolling region reachable by keyboard.
 *
 * Both Kids product sheets are wider than the column on small screens and
 * scroll sideways rather than compressing their step rows to hairlines. A
 * region that scrolls but holds nothing focusable is unreachable without a
 * mouse (axe: `scrollable-region-focusable`), so it needs a tab stop — but
 * only while it actually overflows. On a wide screen, where the whole sheet is
 * already visible, a permanent tab stop is just noise, so the attributes are
 * removed again.
 */
export function useScrollableRegion<T extends HTMLElement>(label: string) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const sync = () => {
      if (el.scrollWidth > el.clientWidth + 1) {
        el.setAttribute("tabindex", "0");
        el.setAttribute("role", "group");
        el.setAttribute("aria-label", label);
      } else {
        el.removeAttribute("tabindex");
        el.removeAttribute("role");
        el.removeAttribute("aria-label");
      }
    };

    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    window.addEventListener("resize", sync);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", sync);
    };
  }, [label]);

  return ref;
}
