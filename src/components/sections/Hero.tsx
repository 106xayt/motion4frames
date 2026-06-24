import { SectionLabel } from "@/components/ui/SectionLabel";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-5 py-24 md:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(225,6,0,0.22),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.08),transparent_25%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.85))]" />

      <div className="absolute left-5 top-5 right-5 flex items-center justify-between border-b border-white/10 pb-5 text-[10px] uppercase tracking-[0.35em] text-white/40 md:left-10 md:right-10">
        <span>M4F</span>
        <span>Innovation in Motion</span>
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <SectionLabel>Motion4Frames / Innovation in Motion</SectionLabel>

        <h1 className="max-w-6xl text-6xl font-semibold uppercase leading-[0.88] tracking-[-0.08em] md:text-8xl lg:text-9xl">
          Your product is better than it looks.
        </h1>

        <p className="mt-8 max-w-xl text-base leading-7 text-white/60 md:text-lg">
          Motion4Frames turns ordinary product presentation into cinematic
          visual experiences that capture attention.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#call-request"
            className="rounded-full bg-[#E10600] px-7 py-4 text-center text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-red-700"
          >
            Request a Call
          </a>

          <a
            href="#transformation"
            className="rounded-full border border-white/15 px-7 py-4 text-center text-xs font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:border-white/40"
          >
            See the Transformation
          </a>
        </div>
      </div>
    </section>
  );
}