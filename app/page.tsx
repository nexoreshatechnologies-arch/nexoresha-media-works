import Hero from "@/sections/Hero";
import Companies from "@/sections/Companies";
import Vision from "@/sections/Vision";
import FeaturedHighlights from "@/sections/FeaturedHighlights";
import Packages from "@/sections/Packages";
import Customize from "@/sections/Customize";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Hero landing segment */}
      <Hero />

      {/* Trusted By brands scrolling ticker */}
      <Companies />

      {/* Our Vision and founders profiles segment */}
      <Vision />

      {/* Case studies showreel preview cards */}
      <FeaturedHighlights />

      {/* Fixed pricing tiers packages */}
      <Packages />

      {/* Dynamic shopping package builder */}
      <Customize />
    </div>
  );
}
