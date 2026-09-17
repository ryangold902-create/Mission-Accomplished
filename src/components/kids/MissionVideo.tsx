"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollableRegion } from "./useScrollableRegion";
import styles from "./MissionVideo.module.css";

export interface VideoSources {
  mp4?: string;
  webm?: string;
}

interface Shot {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface Props {
  /** Real product screen shown until a recording is supplied. Also the poster. */
  poster: Shot;
  sources?: VideoSources;
  /** Caption shown above the media — this is the component's accessible label. */
  label?: string;
  className?: string;
}

/**
 * The replaceable product-demo container — one large video stage, not a
 * paired before/after (that lived here through V3 and is gone in V3.1).
 *
 * Supplying `sources.mp4` / `sources.webm` swaps the still for a real screen
 * recording inside the same frame, with the same styling, caption and
 * surrounding layout — nothing else changes.
 *
 * Video is muted, inline, never autoplays, and is not rendered at all under
 * `prefers-reduced-motion` (the poster is shown instead). A centre play
 * button starts playback; native browser controls stay available throughout.
 */
export default function MissionVideo({
  poster,
  sources,
  label = "See how it works",
  className = "",
}: Props) {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const stageRef = useScrollableRegion<HTMLDivElement>("Product screen — scrolls sideways");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const hasVideo = Boolean(sources?.mp4 || sources?.webm) && !reduceMotion;

  const play = async () => {
    const video = videoRef.current;
    if (!video) return;
    try {
      await video.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  return (
    /* A plain div, not <figure>: a figcaption would become the accessible name
       of the whole group and mask the real screen's alt text. */
    <div className={`${styles.frame} ${className}`}>
      <p className={styles.label}>
        <span className={styles.play} aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5.2v13.6L19 12z" />
          </svg>
        </span>
        {label}
        {!sources && <span className="visually-hidden"> — demo recording coming soon</span>}
      </p>

      {hasVideo ? (
        <div className={styles.stage}>
          <video
            ref={videoRef}
            className={styles.video}
            poster={poster.src}
            width={poster.width}
            height={poster.height}
            muted
            loop
            playsInline
            controls
            preload="metadata"
            aria-label={poster.alt}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          >
            {sources?.webm && <source src={sources.webm} type="video/webm" />}
            {sources?.mp4 && <source src={sources.mp4} type="video/mp4" />}
          </video>
          {!playing && (
            <button
              type="button"
              className={styles.playOverlay}
              onClick={play}
              aria-label={`Play video: ${poster.alt}`}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5.2v13.6L19 12z" />
              </svg>
            </button>
          )}
        </div>
      ) : (
        <div
          ref={stageRef}
          className={styles.stage}
          style={{ "--shot-max": `${poster.width}px` } as React.CSSProperties}
        >
          {/* Decorative "this plays" affordance — not a real control until a
              recording is supplied. */}
          <span className={styles.playOverlay} aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5.2v13.6L19 12z" />
            </svg>
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={styles.shot}
            src={poster.src}
            alt={poster.alt}
            width={poster.width}
            height={poster.height}
            loading="lazy"
            decoding="async"
          />
        </div>
      )}
    </div>
  );
}
