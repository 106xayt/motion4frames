import { SectionLabel } from "@/components/ui/SectionLabel";
import { contentSystem } from "@/lib/data";

export function ContentSystem() {
  return (
    <section className="px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#111111] p-6 md:p-12">
        <SectionLabel>Content System</SectionLabel>

        <h2 className="max-w-5xl text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.05em] md:text-7xl">
          Not just a video.
          <br />
          A complete content system.
        </h2>

        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55 md:text-base">
          Motion4Frames does not deliver one clip and disappear. We build visual
          systems designed to be used across your brand, website, social media
          and campaigns.
        </p>

        <div className="mt-12 grid gap-3 md:grid-cols-7">
          {contentSystem.map((item, index) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-black/40 p-5 transition hover:border-[#E10600]/50"
            >
              <p className="text-xs text-[#E10600]">
                {String(index + 1).padStart(2, "0")}
              </p>

              <p className="mt-10 text-xs font-medium uppercase tracking-[0.18em] text-white/80">
                {item}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            "Cinematic product visuals",
            "Short-form video assets",
            "Campaign-ready content",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-black/30 p-5"
            >
              <div className="mb-6 h-px w-10 bg-[#E10600]" />
              <p className="text-sm uppercase tracking-[0.18em] text-white/70">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}