import styles from "./ProductMedia.module.css";

export interface MediaSource {
  /** Still frame. Also the poster when video sources are supplied. */
  poster: string;
  /** Optional screen recordings — drop these in later, nothing else changes. */
  mp4?: string;
  webm?: string;
  alt: string;
  width?: number;
  height?: number;
}

interface Props {
  media: MediaSource;
  /**
   * "device" wraps the media in a CSS tablet bezel — use for flat, front-facing
   * screen captures. "bare" renders the supplied composite as-is, which is what
   * the statics provide today (the tablets there are photographed at an angle,
   * so the device is part of the image). Either way the media itself is a
   * separate, swappable asset.
   */
  frame?: "bare" | "device";
  className?: string;
  priority?: boolean;
  /** Elevate with the standard product shadow. */
  raised?: boolean;
}

export default function ProductMedia({
  media,
  frame = "bare",
  className = "",
  priority = false,
  raised = false,
}: Props) {
  const hasVideo = Boolean(media.mp4 || media.webm);

  const inner = hasVideo ? (
    <>
      {/* Video is hidden entirely under prefers-reduced-motion; the poster
          image below takes over, so no motion is forced on anyone. */}
      <video
        className={styles.video}
        poster={media.poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={media.alt}
      >
        {media.webm && <source src={media.webm} type="video/webm" />}
        {media.mp4 && <source src={media.mp4} type="video/mp4" />}
      </video>
      <img className={styles.motionFallback} src={media.poster} alt={media.alt} />
    </>
  ) : (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      className={styles.media}
      src={media.poster}
      alt={media.alt}
      width={media.width}
      height={media.height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      {...(priority ? { fetchPriority: "high" as const } : {})}
    />
  );

  if (frame === "device") {
    return (
      <div className={`${styles.device} ${raised ? styles.raised : ""} ${className}`}>
        <div className={styles.bezel}>
          <div className={styles.screen}>{inner}</div>
        </div>
      </div>
    );
  }

  return <div className={`${styles.bare} ${raised ? styles.raised : ""} ${className}`}>{inner}</div>;
}
