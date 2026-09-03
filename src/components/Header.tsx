"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { navigationItems, brand, kidsCta, audienceFromPath } from "@/data/site";
import AudienceToggle from "./AudienceToggle";
import AppDownload from "./AppDownload";
import PrimaryCTA from "./PrimaryCTA";
import { MenuIcon, CloseIcon } from "./Icons";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  // The header is shared; only its primary action changes with the audience.
  const isKids = audienceFromPath(pathname) === "kids";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Mobile panel: lock the page, close on Escape, keep focus inside. */
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const items = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  /* Must portal to document.body. Sticky + backdrop-filter on <header> make it a
     containing block for position:fixed, which collapses the panel/scrim to the
     bar height (~0 usable menu). */
  const menu =
    mounted &&
    createPortal(
      <>
        {open && (
          <div
            className={styles.scrim}
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
        )}
        <div
          id="mobile-menu"
          ref={panelRef}
          className={styles.panel}
          hidden={!open}
          aria-hidden={!open}
        >
          <nav aria-label="Mobile">
            <ul className={styles.panelList}>
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    className={styles.panelLink}
                    href={isKids ? `/${item.href}` : item.href}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.panelFoot}>
            <AudienceToggle />
            {isKids ? (
              <a
                className="btn btn--primary"
                href={kidsCta.href}
                onClick={() => setOpen(false)}
              >
                {kidsCta.shortLabel}
              </a>
            ) : (
              <PrimaryCTA copy="short" microcopy="default" align="center" />
            )}
            <div
              className={styles.panelDownload}
              onClick={(e) => {
                if ((e.target as HTMLElement).closest("a")) setOpen(false);
              }}
            >
              <AppDownload variant="badges" align="center" />
            </div>
          </div>
        </div>
      </>,
      document.body,
    );

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.compact : ""} ${open ? styles.menuOpen : ""}`}
    >
      <div className={styles.inner}>
        <a href={isKids ? "/" : "#top"} className={styles.logo} aria-label={`${brand.name} — home`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-navy.png" alt="" width={340} height={191} />
        </a>

        <nav className={`${styles.nav} ${isKids ? styles.navKids : ""}`} aria-label="Primary">
          <ul className={styles.navList}>
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a className={styles.navLink} href={isKids ? `/${item.href}` : item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.right}>
          <div className={styles.toggle}>
            <AudienceToggle />
          </div>
          {isKids ? (
            <a className={`btn btn--primary btn--sm ${styles.cta} ${styles.ctaLink}`} href={kidsCta.href}>
              {kidsCta.shortLabel}
            </a>
          ) : (
            <PrimaryCTA copy="short" size="sm" withArrow={false} className={styles.cta} />
          )}
          <button
            ref={toggleRef}
            type="button"
            className={styles.burger}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
            <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      {menu}
    </header>
  );
}
