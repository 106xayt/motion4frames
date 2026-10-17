import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Pending, Section } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Personvern",
  alternates: { canonical: "/personvern" },
};

export default function PersonvernPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Section>
          <h1 className="text-4xl font-semibold uppercase tracking-[-0.03em] md:text-6xl">Personvern</h1>
          <Pending label="TEKST AVVENTER: bør gjennomgås før lansering" className="mt-6" />
          <div className="mt-10 max-w-2xl space-y-6 text-base leading-7 text-white/70">
            <p>
              Når du sender en henvendelse via skjemaet på nettsiden, mottar vi navn, bedrift, telefon eller
              e-post og meldingen din. Opplysningene brukes kun til å svare på henvendelsen.
            </p>
            <p>
              Henvendelser sendes til oss på e-post via tjenesteleverandøren Resend. Vi deler ikke
              opplysningene med andre og sletter dem når de ikke lenger trengs.
            </p>
            <p>
              Nettsiden bruker Vercel Analytics for anonym besøksstatistikk. Den bruker ikke informasjonskapsler
              og lagrer ikke personopplysninger.
            </p>
            <p>
              Du kan når som helst be om innsyn i eller sletting av opplysninger vi har om deg ved å kontakte oss.
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
