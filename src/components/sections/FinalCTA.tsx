import { SectionLabel } from "@/components/ui/SectionLabel";

export function FinalCTA() {
  return (
    <section className="relative flex min-h-screen items-center px-5 py-24 md:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(225,6,0,0.18),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25),#050505)]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionLabel>Motion4Frames</SectionLabel>

        <h2 className="text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.07em] md:text-8xl">
          Your competitors sell products.
          <br />
          We help brands sell experiences.
        </h2>

        <a
          href="#call-request"
          className="mt-10 inline-flex rounded-full bg-[#E10600] px-7 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-red-700"
        >
          Request a Call
        </a>

        <p className="mt-8 text-sm uppercase tracking-[0.35em] text-white/35">
          M4F makes value visible.
        </p>
      </div>
    </section>
  );
}