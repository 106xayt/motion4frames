import { CallRequest } from "@/components/sections/CallRequest";
import { ContentSystem } from "@/components/sections/ContentSystem";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { SilentProblem } from "@/components/sections/SilentProblem";
import { Transformation } from "@/components/sections/Transformation";
import { WhyMotionSells } from "@/components/sections/WhyMotionSells";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-[#F5F5F5]">
      <Hero />
      <SilentProblem />
      <Transformation />
      <WhyMotionSells />
      <ContentSystem />
      <CallRequest />
      <FinalCTA />
    </main>
  );
}