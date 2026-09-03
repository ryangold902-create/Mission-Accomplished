"use client";

import { useEffect, useState } from "react";

export const ASSESSMENT_QUERY = "assessment";
export const ASSESSMENT_COMPLETE_VALUE = "complete";
export const ASSESSMENT_STORAGE_KEY = "ma_assessment_complete";

/**
 * Light gate for "Try one small change": unlock when JotForm redirects with
 * ?assessment=complete, persist in localStorage for this browser, then scroll
 * to #try-tonight. Not server-verified — intentional for a static site.
 */
export function useAssessmentUnlock() {
  const [unlocked, setUnlocked] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromRedirect =
      params.get(ASSESSMENT_QUERY) === ASSESSMENT_COMPLETE_VALUE;
    const fromStorage =
      window.localStorage.getItem(ASSESSMENT_STORAGE_KEY) === "1";

    if (fromRedirect) {
      window.localStorage.setItem(ASSESSMENT_STORAGE_KEY, "1");
      setUnlocked(true);

      const url = new URL(window.location.href);
      url.searchParams.delete(ASSESSMENT_QUERY);
      url.hash = "try-tonight";
      window.history.replaceState({}, "", url.pathname + url.search + url.hash);

      // Wait a tick so the unlocked UI is painted before scrolling.
      requestAnimationFrame(() => {
        document.getElementById("try-tonight")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    } else {
      setUnlocked(fromStorage);
    }

    setReady(true);
  }, []);

  return { unlocked, ready };
}
