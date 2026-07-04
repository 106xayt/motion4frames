import { Hero } from "@/components/sections/Hero";
import { Transformation } from "@/components/sections/Transformation";
import { ManyWorlds } from "@/components/sections/ManyWorlds";
import { WorksAcrossCategories } from "@/components/sections/WorksAcrossCategories";
import { StillToVideo } from "@/components/sections/StillToVideo";
import { CallRequest } from "@/components/sections/CallRequest";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Transformation />
      <ManyWorlds />
      <WorksAcrossCategories />
      <StillToVideo />
      <CallRequest />
      <Footer />
    </main>
  );
}