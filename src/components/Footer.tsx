import { navigationItems, legalItems, brand, type AudienceId } from "@/data/site";
import AppDownload from "./AppDownload";
import MountainLine from "./MountainLine";
import PrimaryCTA from "./PrimaryCTA";
import styles from "./Footer.module.css";

/**
 * Shared footer. The Kids variant keeps the brand, legal links and mountain
 * system but drops the pricing-led navigation and the assessment CTA — the
 * parent funnel is reached through the grown-up hand-off instead.
 */
export default function Footer({ audience = "parents" }: { audience?: AudienceId }) {
  const isKids = audience === "kids";
  return (
    <footer className={`on-navy ${styles.footer}`}>
      <MountainLine />

      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/logo-white.png" alt={brand.name} width={340} height={191} />
            <p className={styles.tagline}>{brand.tagline}</p>
          </div>

          <nav aria-label="Footer">
            <ul className={styles.nav}>
              {isKids ? (
                <li>
                  <a className={styles.navLink} href="/">
                    For grown-ups
                  </a>
                </li>
              ) : (
                <>
                  {navigationItems.map((item) => (
                    <li key={item.href}>
                      <a className={styles.navLink} href={item.href}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <PrimaryCTA
                      bare
                      copy="nav"
                      variant="none"
                      withArrow={false}
                      anchorClassName={`${styles.navLink} ${styles.navCta}`}
                    />
                  </li>
                  <li>
                    <AppDownload variant="link" />
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {brand.copyrightYear} {brand.name}
          </p>
          <ul className={styles.legal}>
            {legalItems.map((item) => (
              <li key={item.href}>
                <a className={styles.legalLink} href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
