/* =========================================================================
   Central site configuration.

   PRIMARY CTA
   -----------
   The business decision between an assessment-first and an app-download-first
   funnel is unresolved. The statics are assessment-first, so `PRIMARY_ACTION`
   ships as "assessment".

   Every CTA in the site reads from `primaryCta` / `secondaryActions` below —
   no component hardcodes a label or href. To flip the whole site to an
   app-download-first funnel later, change PRIMARY_ACTION to "appDownload".
   Nothing else needs to be touched.
   ========================================================================= */

export type ActionKey = "assessment" | "appDownload";

export const PRIMARY_ACTION: ActionKey = "assessment";

export interface CtaDefinition {
  /** Compact label — header, sticky bar, tight spaces. */
  shortLabel: string;
  /** Tightest label — sits in the footer's link row beside the nav items. */
  navLabel: string;
  /** Sentence-case label used in body sections. */
  label: string;
  href: string;
  /** Line shown under the button. */
  microcopy: string;
  /** Alternate microcopy for the "no credit card" contexts. */
  microcopyAlt: string;
  external: boolean;
}

export const ACTIONS: Record<ActionKey, CtaDefinition> = {
  assessment: {
    shortLabel: "Start Free Assessment",
    navLabel: "Free Assessment",
    label: "Start the free assessment",
    // PLACEHOLDER: confirm the production assessment destination before launch.
    href: "https://form.jotform.com/261734874780165",
    microcopy: "Free · About 5 minutes",
    microcopyAlt: "No credit card required. Free to try.",
    external: true,
  },
  appDownload: {
    shortLabel: "Get the App",
    navLabel: "Get the App",
    label: "Download Mission Accomplished",
    href: "#get-the-app",
    microcopy: "Free to download · iOS and Android",
    microcopyAlt: "No credit card required. Free to try.",
    external: false,
  },
};

export const primaryCta: CtaDefinition = ACTIONS[PRIMARY_ACTION];

/** App-store links stay secondary while the funnel is assessment-first. */
export const appStores = {
  ios: {
    label: "Download on the App Store",
    href: "#", // PLACEHOLDER: App Store listing URL
    image: "/assets/badge-appstore.png",
  },
  android: {
    label: "Get it on Google Play",
    href: "#", // PLACEHOLDER: Google Play listing URL
    image: "/assets/badge-googleplay.png",
  },
};

/* ------------------------------------------------------- app download ----
   The app is a real secondary path, surfaced in five places (hero, how it
   works, try tonight, pricing, footer). Every one of them reads from here —
   there is no second set of store URLs anywhere in the codebase, so wiring
   the real listings is a one-place change.

   This is deliberately NOT a second primary CTA: the assessment stays the
   only solid orange button on the page. */
export const appAccess = {
  /** Quiet inline text link. */
  linkLabel: "Download the app",
  /** Where the text link points until a real store-router URL exists. */
  href: "#get-the-app", // PLACEHOLDER: app landing / smart banner URL
  /** Lead-in used where badges follow a product explanation. */
  intro: "See the real experience in the app.",
  /** Pricing panel framing — the app is for everyone, not just members. */
  pricingPrompt: "Want to start in the app?",
  stores: appStores,
};

/* --------------------------------------------------------------- nav ---- */

export interface NavItem {
  label: string;
  href: string;
}

/** Shared by the header and the footer so the IA cannot drift apart. */
export const navigationItems: NavItem[] = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Our Story", href: "#our-story" },
];

export const legalItems: NavItem[] = [
  { label: "Privacy", href: "/privacy" }, // PLACEHOLDER: legal pages not yet written
  { label: "Terms", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
];

/* Both audiences are live. The toggle is real navigation between the two
   experiences, which share one header, footer and design system. */
export const audiences = [
  { id: "parents", label: "For Parents", href: "/" },
  { id: "kids", label: "For Kids", href: "/kids" },
] as const;

export type AudienceId = (typeof audiences)[number]["id"];

/** One place decides the audience, so header, toggle and footer cannot desync. */
export function audienceFromPath(pathname: string | null | undefined): AudienceId {
  return pathname?.startsWith("/kids") ? "kids" : "parents";
}

/**
 * The Kids header/hero action. It is a different action from the assessment
 * (it starts the on-page mission demo rather than the funnel), so it lives
 * here beside `primaryCta` rather than being hardcoded in components.
 * The parent conversion CTA inside the Kids handoff still uses `primaryCta`.
 */
export const kidsCta = {
  shortLabel: "Try a Mission",
  label: "Try a mission",
  href: "#pick-your-mission",
  microcopy: "Made for kids. Guided by experts.",
};

export const founder = {
  name: "Jenilee Woltman",
  credentials: "M.S.Ed., CCC-SLP",
  roles: ["Clinician", "Mom", "Founder"],
  portrait: "/assets/jenilee.jpg",
};

export const brand = {
  name: "Mission Accomplished",
  tagline: "Helping neurodivergent families find a clearer path forward.",
  copyrightYear: 2026,
};
