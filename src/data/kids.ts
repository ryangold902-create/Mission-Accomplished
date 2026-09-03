/* =========================================================================
   Kids experience content (approved Kids references 01–05).

   Every product screen referenced here is a REAL Mission Accomplished
   kid-side capture from the approved asset pack. No app UI is recreated in
   HTML, and Maddy only ever appears inside those supplied assets.
   ========================================================================= */

import { reframeSteps } from "./content";

export interface MissionStep {
  id: string;
  text: string;
}

export interface FeaturedMission {
  id: string;
  label: string;
  illustration: string;
  /** First three Clean Room steps shown in the app — keep the website teaser short. */
  steps: MissionStep[];
  preview: { poster: string; alt: string };
}

/** Reference 02 — one live example until the multi-mission picker expands. */
export const featuredMission: FeaturedMission = {
  id: "clean-room",
  label: "Clean your room",
  illustration: "/assets/kids/mission-room-reset.webp",
  steps: reframeSteps.slice(0, 3).map((step, index) => ({
    id: (["laundry", "books", "toys"] as const)[index],
    text: step.text,
  })),
  preview: {
    poster: "/assets/kids/demo-open.webp",
    alt: "The Clean your room challenge in the Mission Accomplished kids app, broken into small steps your child can finish one at a time.",
  },
};

/** Reserved mission titles for a future multi-mission picker. */
export const reservedMissionLabels = [
  "Start your Homework",
  "Morning Routine",
] as const;

/** Reference 04 — website-level progress summary, not in-app UI. */
export interface JourneyStat {
  id: string;
  icon: string;
  label: string;
  value: string;
  tone: "green" | "orange" | "purple" | "flame" | "blue";
}

/* These read straight off `app-journey.webp` — the real dashboard shown beside
   them. If that capture is ever swapped, these values must be re-read from it. */
export const journeyStats: JourneyStat[] = [
  { id: "position", icon: "/assets/kids/icon-current_position_mountain.svg", label: "Current position", value: "On your way", tone: "green" },
  { id: "level", icon: "/assets/kids/icon-level_star.svg", label: "Level", value: "Level 2", tone: "orange" },
  { id: "xp", icon: "/assets/kids/icon-xp_sparkle.svg", label: "To next level", value: "75 XP to go", tone: "purple" },
  { id: "streak", icon: "/assets/kids/icon-streak_flame.svg", label: "Streak", value: "1 day", tone: "flame" },
  { id: "milestone", icon: "/assets/kids/icon-next_milestone_gift.svg", label: "Next milestone", value: "Lv. 3 at 200 XP", tone: "blue" },
];

/** Reference 03 — reassurance chips beneath the demo. */
export const stepChips = [
  { id: "confidence", icon: "star", text: "Small steps build big confidence." },
  { id: "progress", icon: "heart", text: "You see progress, one win at a time." },
  { id: "encouragement", icon: "shield", text: "Encouragement built into every step." },
] as const;

/* V3.1 removed the reference-02 trust strip (missionChips) — it was Parent
   conversion logic (kids/parents/experts trust chips) sitting under the Kids
   mission picker, not something a child needs mid-flow. stepChips above is
   the only chip set left in the Kids experience, and it stays. */
