import Reveal from "../Reveal";
import { Star, Heart, ShieldCheck } from "../Icons";
import styles from "./KidsChips.module.css";

const chipIcons = { star: Star, heart: Heart, shield: ShieldCheck };

export interface KidsChip {
  id: string;
  icon: keyof typeof chipIcons;
  text: string;
}

interface KidsChipsProps {
  items: readonly KidsChip[];
  /** Section-level spacing only — the strip itself never varies. */
  className?: string;
}

/**
 * The three-up reassurance strip beneath the mission picker (reference 02) and
 * the demo (reference 03). Identical in both places, so it lives once.
 */
export default function KidsChips({ items, className = "" }: KidsChipsProps) {
  return (
    <Reveal className={`${styles.chips} ${className}`.trim()}>
      <ul>
        {items.map((c) => {
          const Icon = chipIcons[c.icon];
          return (
            <li key={c.id}>
              <Icon size={22} className={styles[c.icon]} />
              {c.text}
            </li>
          );
        })}
      </ul>
    </Reveal>
  );
}
