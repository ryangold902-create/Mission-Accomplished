"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { audiences, audienceFromPath } from "@/data/site";
import styles from "./AudienceToggle.module.css";

/**
 * Parents / Kids segmented control.
 *
 * Both experiences are live, so this is real navigation rather than local
 * state: each option is a link, the current one carries `aria-current="page"`,
 * and selection is signalled by weight, fill and an underline as well as
 * colour so it never depends on colour alone.
 */
export default function AudienceToggle({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname();
  const currentId = audienceFromPath(pathname);

  return (
    <div className={`${styles.wrap} ${compact ? styles.compact : ""}`}>
      <nav className={styles.group} aria-label="Choose who this site is for">
        {audiences.map((a) => {
          const active = a.id === currentId;
          return (
            <Link
              key={a.id}
              href={a.href}
              /* The two audiences are separate full-page experiences, so the
                 default viewport prefetch makes every parent visit also pull
                 the Kids payload (and vice versa) for a link most visitors
                 never take. Navigation is unaffected. */
              prefetch={false}
              className={`${styles.option} ${active ? styles.active : ""}`}
              aria-current={active ? "page" : undefined}
            >
              {active && <span className={styles.dot} aria-hidden="true" />}
              {a.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
