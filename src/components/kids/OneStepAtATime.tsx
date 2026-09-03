import { stepChips } from "@/data/kids";
import MissionVideo from "./MissionVideo";
import Reveal from "../Reveal";
import KidsChips from "./KidsChips";
import { Star } from "../Icons";
import styles from "./OneStepAtATime.module.css";

/**
 * Kids reference 03 — the product demo.
 *
 * One large video container holds the Clean Room challenge screen — the
 * poster is a real capture. Supplying `sources` to <MissionVideo> replaces
 * it with the real screen recording without touching this layout.
 */
export default function OneStepAtATime() {
  return (
    <section className={`${styles.section} env-sky`} id="one-step" aria-labelledby="one-step-title">
      <div className="container">
        <Reveal className={styles.head}>
          <p className="eyebrow">One step at a time</p>
          <h2 className="kids-serif" id="one-step-title">
            You don&rsquo;t have to do everything at once.
          </h2>
          <p className={`kids-lede ${styles.support}`}>
            We show one step, celebrate the win, and then show you what&rsquo;s next.
          </p>
        </Reveal>

        <div className={styles.demo}>
          <Reveal className={styles.videoWrap}>
            <MissionVideo
              poster={{
                src: "/assets/kids/demo-open.webp",
                width: 950,
                height: 280,
                alt: "The Clean Room challenge in the Mission Accomplished kids app: five steps, none complete yet, starting with “Pop any clothes from the floor into the laundry basket”.",
              }}
              /* PLACEHOLDER: drop the real recording in here — nothing else changes.
                 sources={{ mp4: "/assets/kids/clean-room.mp4", webm: "/assets/kids/clean-room.webm" }} */
            />
          </Reveal>

          <Reveal className={styles.aside} delay={120}>
            <Star size={26} className={styles.asideIcon} />
            <p>
              <strong>Nice work.</strong>
              <span>Here&rsquo;s what&rsquo;s next.</span>
            </p>
          </Reveal>
        </div>

        <KidsChips items={stepChips} className={styles.chips} />
      </div>
    </section>
  );
}
