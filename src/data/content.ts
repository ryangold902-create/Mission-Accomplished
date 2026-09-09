/* =========================================================================
   Section content. Repeated structures live here as data so the markup
   stays a single template per pattern (PDF pp. 1–14).
   ========================================================================= */

/* -- p.2  Summit journey ------------------------------------------------ */
export interface Milestone {
  id: string;
  label: string;
  line: string;
  /** Position of the route dot on the mountain image, in % of the image box. */
  dot: { x: number; y: number };
  /** Where the label sits relative to the dot. */
  side: "left" | "right";
  /**
   * Vertical nudge for the label card, in container-width units. The statics
   * do not centre every label on its waypoint — the summit label sits higher,
   * with the connector meeting its lower line.
   */
  labelShift?: string;
}

export const milestones: Milestone[] = [
  {
    id: "support",
    label: "More support",
    line: "We do it together.",
    dot: { x: 6.2, y: 77.2 },
    side: "left",
  },
  {
    id: "routine",
    label: "Building routine",
    line: "I still need a reminder.",
    dot: { x: 50.0, y: 48.3 },
    side: "right",
  },
  {
    id: "independence",
    label: "Greater independence",
    line: "I've got this.",
    dot: { x: 57.0, y: 25.8 },
    side: "right",
    labelShift: "-1.5cqw",
  },
];

/* -- pp.3–5  "How did you know that?" carousel -------------------------- */
export interface Insight {
  id: string;
  number: string;
  tab: string;
  see: string;
  underneath: string[];
  image: string;
  alt: string;
}

export const insightCarouselData: Insight[] = [
  {
    id: "task-initiation",
    number: "01",
    tab: "Task initiation",
    see: "They know what to do, but they just won't start.",
    underneath: ["Task initiation", "Executive functioning", "Regulation"],
    image: "/assets/carousel-01.webp",
    alt: "A boy sitting on a bench by the front door, slowly putting on his shoes with his backpack still on.",
  },
  {
    id: "sensory-language",
    number: "02",
    tab: "Sensory & language",
    see: "They only want the same few foods.",
    underneath: ["Sensory predictability", "Language", "Regulation"],
    image: "/assets/carousel-02.webp",
    alt: "A girl at a kitchen table in front of a plate of pasta and toast, turned away from the food.",
  },
  {
    id: "transitions",
    number: "03",
    tab: "Transitions",
    see: "Plans change and everything falls apart.",
    underneath: ["Transitions", "Uncertainty", "Regulation"],
    image: "/assets/carousel-03.webp",
    alt: "A mother kneeling in an entryway, helping her young daughter zip a jacket before leaving the house.",
  },
];

/* -- p.6  How it works -------------------------------------------------- */
export const reframeSteps = [
  {
    icon: "/assets/step-basket.png",
    iconAlt: "Laundry basket",
    text: "Pop any clothes from the floor into the laundry basket",
  },
  {
    icon: "/assets/step-books.png",
    iconAlt: "Stack of books",
    text: "Put 5 books back on the shelf or in a neat stack",
  },
  {
    icon: "/assets/step-teddy.png",
    iconAlt: "Stuffed animals and toys",
    text: "Give your stuffies and toys a cozy spot to rest",
  },
  {
    icon: "/assets/step-bed.png",
    iconAlt: "Bed with blanket and pillow",
    text: "Smooth out your blanket and fluff your pillow",
  },
  {
    icon: "/assets/step-sparkle.png",
    iconAlt: "Sparkle highlight",
    text: "Take one last look and pick your favorite tidy spot to show off",
  },
];

/* -- pp.8–12  Try one tonight ------------------------------------------- */
export interface Scenario {
  id: string;
  tab: string;
  instead: string;
  tryThis: string;
  illustration: string;
  alt: string;
}

export const tryTonightScenarios: Scenario[] = [
  {
    id: "mornings",
    tab: "Mornings",
    instead: "Go get ready.",
    tryThis:
      "First challenge: can you get your socks and shoes on before I finish filling your water bottle?",
    illustration: "/assets/illus-mornings.png",
    alt: "Line illustration of a pair of sneakers next to a water bottle.",
  },
  {
    id: "homework",
    tab: "Homework",
    instead: "Go do your homework.",
    tryThis: "Can you find the first thing that needs to be done and bring it here?",
    illustration: "/assets/illus-homework.png",
    alt: "Line illustration of an open notebook with a pencil.",
  },
  {
    id: "clean-up",
    tab: "Clean-up",
    instead: "Clean your room.",
    tryThis: "I wonder how fast you can find three things that belong in the trash?",
    illustration: "/assets/illus-cleanup.png",
    alt: "Line illustration of a wastebasket with paper scraps beside it.",
  },
  {
    id: "transitions",
    tab: "Transitions",
    instead: "We have to leave now.",
    tryThis: "You've got one last thing before we go. What do you want it to be?",
    illustration: "/assets/illus-transitions.png",
    alt: "Line illustration of a backpack next to a pair of shoes.",
  },
  {
    id: "bedtime",
    tab: "Bedtime",
    instead: "Go get ready for bed.",
    tryThis: "First mission: pajamas or teeth — you pick.",
    illustration: "/assets/illus-bedtime.png",
    alt: "Line illustration of folded pajamas with a toothbrush cup and a crescent moon.",
  },
];

/* -- p.13  The whole program -------------------------------------------- */
export interface ProgramPillar {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  icon: "child" | "heart" | "jenilee";
  featured?: boolean;
}

export const programPillars: ProgramPillar[] = [
  {
    id: "child",
    eyebrow: "For your child",
    title: "Everyday missions",
    body: "Challenges broken into manageable steps, rewards, streaks and progress toward the summit.",
    icon: "child",
  },
  {
    id: "you",
    eyebrow: "For you",
    title: "Parent support",
    body: "Check-ins, Your Compass, progress insights, community and tools for difficult moments.",
    icon: "heart",
  },
  {
    id: "jenilee",
    eyebrow: "With Jenilee",
    title: "Personalized guidance",
    body: "Consultations that help you understand patterns, set priorities and decide what to work on next.",
    icon: "jenilee",
    featured: true,
  },
];

/* -- p.14  Pricing ------------------------------------------------------ */
export interface PricingPlan {
  id: string;
  index: string;
  name: string;
  price: string;
  priceSuffix?: string;
  commitment?: string;
  summary: string;
  footnote: string;
  badge?: string;
  badgeTone?: "blue" | "peach";
  /** Only the entry plan carries the primary action. */
  primary?: boolean;
  includes: string[];
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "discovery",
    index: "01",
    name: "Discovery",
    price: "Free",
    summary: "Find out where to start.",
    footnote: "No payment. No commitment.",
    primary: true,
    includes: [
      "The free assessment about what feels hardest right now",
      "A clear read on what may be going on underneath",
      "A recommended next step for your family",
      "No card required, and nothing to cancel",
    ],
  },
  {
    id: "introduction",
    index: "02",
    name: "Introduction",
    price: "$67",
    priceSuffix: "once",
    summary: "One month to get oriented.",
    footnote: "One-time payment.",
    includes: [
      "One month of full app access for your child",
      "Challenges broken into manageable steps",
      "Your Compass and parent check-ins",
      "Progress insights across the month",
    ],
  },
  {
    id: "progress",
    index: "03",
    name: "Progress",
    price: "$147",
    priceSuffix: "/mo",
    commitment: "3-month commitment",
    summary: "Short-term guided support.",
    footnote: "Cancel anytime.",
    badge: "Most flexible",
    badgeTone: "blue",
    includes: [
      "Everything in Introduction",
      "Personalized guidance from Jenilee",
      "Invite your co-parent, teacher or therapist",
      "Priority support for difficult moments",
    ],
  },
  {
    id: "summit",
    index: "04",
    name: "Summit",
    price: "$119",
    priceSuffix: "/mo",
    commitment: "12-month commitment",
    summary: "Long-term support for the whole family.",
    footnote: "Best value over time.",
    badge: "Best monthly value",
    badgeTone: "peach",
    includes: [
      "Everything in Progress",
      "A full year of consultations with Jenilee",
      "Long-term progress tracking toward the summit",
      "The best monthly rate we offer",
    ],
  },
];

export const pricingPath = [
  { id: "discovery", label: "Discovery", icon: "compass" },
  { id: "introduction", label: "Introduction", icon: "person" },
  { id: "progress", label: "Progress", icon: "chart" },
  { id: "summit", label: "Summit", icon: "summit" },
] as const;

/* -- Who we serve (parents / teachers / therapists) --------------------- */
export interface AudienceCard {
  id: string;
  title: string;
  roles: string;
  blurb: string;
  needs: string[];
  image: { src: string; width: number; height: number; alt: string };
}

export const whoWeServeAudiences: AudienceCard[] = [
  {
    id: "parents",
    title: "Parents & Caregivers",
    roles: "Moms · Dads · Guardians",
    blurb: "Need clarity, confidence, and support between appointments.",
    needs: [
      "Real answers",
      "Daily guidance",
      "Less overwhelm",
      "Better communication",
      "Measurable progress",
      "Hope",
    ],
    image: {
      src: "/assets/who-we-serve-parents.jpeg",
      width: 1280,
      height: 960,
      alt: "A parent and child smiling together while looking at a tablet.",
    },
  },
  {
    id: "teachers",
    title: "Teachers & Educators",
    roles: "Teachers · Special Education · School Staff",
    blurb: "Need visibility into what is working beyond the classroom.",
    needs: [
      "Shared goals",
      "Better coordination",
      "Progress visibility",
      "Classroom strategies",
      "Faster interventions",
      "Consistent support",
    ],
    image: {
      src: "/assets/who-we-serve-teachers.jpeg",
      width: 1280,
      height: 960,
      alt: "A teacher and student smiling together at a classroom desk.",
    },
  },
  {
    id: "therapists",
    title: "Therapists & Clinicians",
    roles: "SLPs · OTs · Behavioral Specialists",
    blurb: "Need continuity between sessions and real-world implementation.",
    needs: [
      "Parent alignment",
      "School alignment",
      "Better outcomes",
      "Activity tracking",
      "Data visibility",
      "Long-term progress",
    ],
    image: {
      src: "/assets/who-we-serve-therapists.jpeg",
      width: 1280,
      height: 960,
      alt: "A clinician and child smiling while playing with stacking rings.",
    },
  },
];
