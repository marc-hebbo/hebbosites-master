import ClientSection from "@/components/client-section";
import CallToActionSection from "@/components/cta-section";
import FeatureCardSection from "@/components/feature-card-section";
import HeroSection from "@/components/hero-section";
import Particles from "@/components/magicui/particles";
import { SphereMask } from "@/components/magicui/sphere-mask";
import PricingSection from "@/components/pricing-section";
import AnimatedTickers from "@/components/ticker-section";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { WobbleCard } from "@/components/ui/wobble-card";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

// Define the items array
const items = [
  {
    id: 1,
    name: 'Karim Saade',
    designation: 'Team Lead',
    image: '/karim.png',
  },
  {
    id: 2,
    name: 'Karim Saade',
    designation: 'Team Lead',
    image: '/karim.png',
  },
  {
    id: 3,
    name: 'Karim Saade',
    designation: 'Team Lead',
    image: '/karim.png',
  },
  {
    id: 4,
    name: 'Karim Saade',
    designation: 'Team Lead',
    image: '/karim.png',
  },
  // Add more items as needed
];

export default async function Page() {
  return (
    <>
      <HeroSection />
      <ClientSection />
      <FeatureCardSection />
      <AnimatedTickers />
      <SphereMask />
      
      <CallToActionSection />
      <Particles
        className="absolute inset-0 -z-10"
        quantity={50}
        ease={70}
        size={0.05}
        staticity={40}
        color={"#ffffff"}
      />

      {/* Add the AnimatedTooltip component here */}
      <AnimatedTooltip items={items} />
    </>
  );
}
