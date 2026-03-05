import { Children } from "react";
import Navbar from "./component/Navbar";
import { main } from "motion/react-client";
import HeroSection from "./component/HeroSection";
import FeaturesSection from "./component/FeaturesSection";

import WhychooseUs from "./component/WhychooseUs";
import TesimonialCard from "./component/TesimonialCard";
import UpcomingWebinar from "./component/UpcomingWebinar";

import Trainer from "./component/Trainer";
import ThreeDCardDemo from "./component/ThreeDCardDemo";
import Footer from "./component/Footer";

// import { AnimatedTooltip } from "./component/ui/animated-tooltip";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] anitialiased bg-grid-whitr/[0.02]">
      {/* <h1 className="text-4xl font-bold text-center mt-20">Welcome to Music Website</h1> */}
      <HeroSection />
      <FeaturesSection />
      <WhychooseUs />
      <TesimonialCard />
      <UpcomingWebinar />

      <Trainer />
      <Footer />
      {/* <ThreeDCardDemo /> */}
    </main>
  );
}
