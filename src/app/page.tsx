import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SummitJourney from "@/components/SummitJourney";
import InsightCarousel from "@/components/InsightCarousel";
import HowItWorks from "@/components/HowItWorks";
import ParentCompass from "@/components/ParentCompass";
import WhoWeServe from "@/components/WhoWeServe";
import AiSupport from "@/components/AiSupport";
import TryTonight from "@/components/TryTonight";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <InsightCarousel />
        <HowItWorks />
        <SummitJourney />
        <ParentCompass />
        <WhoWeServe />
        <AiSupport />
        <TryTonight />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
