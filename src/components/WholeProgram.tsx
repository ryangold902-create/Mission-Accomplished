import { programPillars } from "@/data/content";
import { pillarIcons, People, Heart } from "./Icons";
import PrimaryCTA from "./PrimaryCTA";
import Reveal from "./Reveal";
import styles from "./WholeProgram.module.css";

export default function WholeProgram() {
  return (
    <section className={styles.section} id="program" aria-labelledby="program-title">
      <div className="container">
        <Reveal className={styles.head}>
          <p className="eyebrow">The whole program</p>
          <h2 className="h1" id="program-title">
            More than an app.
            <br />
            Support built around your family.
          </h2>
          <p className={styles.lede}>
            Mission Accomplished combines everyday tools for your child, support for you, and
            personalized guidance from Jenilee.
          </p>
        </Reveal>

        <ul className={styles.cards}>
          {programPillars.map((p, i) => {
            const Icon = pillarIcons[p.icon];
            return (
              <li key={p.id}>
                <Reveal
                  delay={i * 90}
                  className={`${styles.card} ${p.featured ? styles.cardFeatured : ""}`}
                >
                  <span className={styles.iconWrap}>
                    <Icon size={40} />
                  </span>
                  <p className={styles.cardEyebrow}>{p.eyebrow}</p>
                  <h3 className="h3">{p.title}</h3>
                  <hr className={styles.cardRule} />
                  <p className={styles.cardBody}>{p.body}</p>
                </Reveal>
              </li>
            );
          })}
        </ul>

        {/* ---------------------------------------------- connected support */}
        <Reveal className={styles.connected}>
          <span className={styles.connectedIcon}>
            <People size={26} />
          </span>
          <h3 className={styles.connectedTitle}>Bring the people supporting your child with you.</h3>
          <p className={styles.roles}>
            {["Co-parent", "Teacher", "Therapist"].map((r, i) => (
              <span key={r}>
                {i > 0 && <span className={styles.dot} aria-hidden="true" />}
                {r}
              </span>
            ))}
          </p>
          <p className={styles.connectedSub}>
            Invite your team so everyone can work from the same playbook.
          </p>
        </Reveal>

        {/* ---------------------------------------------------- bottom strip */}
        <Reveal className={styles.strip}>
          <span className={styles.stripIcon}>
            <Heart size={24} />
          </span>
          <div className={styles.stripCopy}>
            <p className={styles.stripTitle}>Not sure which is right for you?</p>
            <p className={styles.stripSub}>
              The free assessment helps us understand what your family needs.
            </p>
          </div>
          <PrimaryCTA bare anchorClassName={styles.stripCta} />
        </Reveal>
      </div>
    </section>
  );
}
