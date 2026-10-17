import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Contact } from "@/components/sections/Contact";
import { Pending, Section } from "@/components/ui/primitives";
import { finnTeaser } from "@/lib/content";

export const metadata: Metadata = {
  title: "Selg bil på FINN",
  description: "Bedre bilder til FINN-annonsen din. Bilen vises slik den faktisk er.",
  alternates: { canonical: "/finn" },
};

// Første versjon: enkel side så lenkene virker.
// Brief: problem, før/etter, kundetyper, pakker, prosess og eget FINN-skjema kommer her.
export default function FinnPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Section>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#E10600]">FINN</p>
          <h1 className="max-w-3xl text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.04em] md:text-7xl">
            {finnTeaser.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">{finnTeaser.text}</p>
          <Pending label="TEKST AVVENTER: før/etter, pakker, priser og prosess" className="mt-8" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={finnTeaser.image}
            alt="Eksempel på FINN-annonse med bilder fra Motion4Frames"
            className="mt-12 w-full max-w-sm rounded-2xl border border-white/10"
          />
        </Section>
        <Contact source="finn" />
      </main>
      <Footer />
    </>
  );
}
