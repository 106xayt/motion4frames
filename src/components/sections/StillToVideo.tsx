import { SectionLabel } from "@/components/ui/SectionLabel";

export function StillToVideo() {
  return (
    <section
      id="what-we-create"
      className="bg-[#050505] px-5 py-24 text-white md:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1fr_0.85fr] md:items-center">
          <div>
            <SectionLabel>Still to Video</SectionLabel>

            <h2 className="text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.05em] md:text-7xl">
              From still photos to quality videos.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/60 md:text-base">
              Motion4Frames turns simple product visuals into cinematic motion
              assets built for websites, ads, reels and launch campaigns.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-[#111111] p-5 transition duration-300 hover:border-[#E10600] hover:shadow-[0_0_35px_rgba(225,6,0,0.16)]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E10600]">
                  01
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em]">
                  Product images
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#111111] p-5 transition duration-300 hover:border-[#E10600] hover:shadow-[0_0_35px_rgba(225,6,0,0.16)]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E10600]">
                  02
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em]">
                  Motion assets
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#111111] p-5 transition duration-300 hover:border-[#E10600] hover:shadow-[0_0_35px_rgba(225,6,0,0.16)]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E10600]">
                  03
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em]">
                  Launch content
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[320px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111] transition duration-300 hover:border-[#E10600] hover:shadow-[0_0_60px_rgba(225,6,0,0.22)] md:max-w-[360px]">
            <video
              src="/videos/m4f-showreel.mov"
              className="aspect-[9/16] w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />

            <div className="border-t border-white/10 bg-black/80 p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#E10600]">
                Motion output
              </p>

              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                Built for scroll-stopping product attention
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}