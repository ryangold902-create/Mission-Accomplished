import Header from "./Header";
import Footer from "./Footer";
import styles from "./LegalDocument.module.css";

interface LegalDocumentProps {
  eyebrow: string;
  title: string;
  effective: string;
  children: React.ReactNode;
}

/** Shared chrome for Privacy / Terms / future legal pages. */
export default function LegalDocument({
  eyebrow,
  title,
  effective,
  children,
}: LegalDocumentProps) {
  return (
    <>
      <Header />
      <main id="main" className={styles.main}>
        <article className="container">
          <header className={styles.head}>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="h1">{title}</h1>
            <p className={styles.meta}>{effective}</p>
          </header>
          <div className={styles.body}>{children}</div>
        </article>
      </main>
      <Footer />
    </>
  );
}
