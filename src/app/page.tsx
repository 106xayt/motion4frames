import { Header } from "@/components/sections/Header";
import { HeroVideo } from "@/components/sections/HeroVideo";
import { Intro } from "@/components/sections/Intro";
import { FeaturedCase } from "@/components/sections/FeaturedCase";
import { ManyLooks } from "@/components/sections/ManyLooks";
import { StillToVideo } from "@/components/sections/StillToVideo";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroVideo />
        <Intro />
        <ManyLooks />
        <FeaturedCase />
        <StillToVideo />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
