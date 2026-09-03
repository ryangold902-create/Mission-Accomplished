import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KidsHero from "@/components/kids/KidsHero";
import PickYourMission from "@/components/kids/PickYourMission";
import OneStepAtATime from "@/components/kids/OneStepAtATime";
import ClimbYourMountain from "@/components/kids/ClimbYourMountain";
import MissionComplete from "@/components/kids/MissionComplete";

export const metadata: Metadata = {
  title: "Mission Accomplished — Ready for your mission",
  description:
    "Big things feel easier when you only have to focus on what's next. Try a Mission Accomplished mission and see how one step at a time moves you forward.",
};

/**
 * The Kids experience. Same header, footer, grid and design tokens as the
 * parent site — only the section set changes.
 */
export default function KidsPage() {
  return (
    <>
      <Header />
      <main id="main">
        <KidsHero />
        <PickYourMission />
        <OneStepAtATime />
        <ClimbYourMountain />
        <MissionComplete />
      </main>
      <Footer audience="kids" />
    </>
  );
}
