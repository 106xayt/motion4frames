import { ImageCard } from "@/components/ui/ImageCard";

export function Hero() {
  return (
    <section className="min-h-screen bg-[#050505] px-5 pb-16 pt-6 text-white md:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a
          href="#"
          className="text-sm font-semibold uppercase tracking-[0.28em] transition hover:text-[#E10600]"
        >
          Motion4Frames
        </a>

        <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.18em] text-white/55 md:flex">
          <a
            href="#transformation"
            className="rounded-full border border-transparent px-4 py-2 transition hover:border-[#E10600] hover:text-[#E10600]"
          >
            Transformation
          </a>

          <a
            href="#what-we-create"
            className="rounded-full border border-transparent px-4 py-2 transition hover:border-[#E10600] hover:text-[#E10600]"
          >
            Still To Video
          </a>

          <a
            href="#case-collaboration"
            className="rounded-full border border-transparent px-4 py-2 transition hover:border-[#E10600] hover:text-[#E10600]"
          >
            Request a call
          </a>
        </nav>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 pt-20 md:grid-cols-[0.95fr_1.05fr] md:items-center md:pt-28">
        <div>
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#E10600]">
            Visual positioning for product-based brands.
          </p>

          <h1 className="max-w-3xl text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.06em] md:text-8xl">
            Your product deserves more attention.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/60 md:text-lg">
            Motion4Frames turns ordinary product visuals into cinematic brand
            moments built for social media, websites, ads and launch campaigns.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#transformation"
              className="rounded-full border border-[#E10600] bg-[#E10600] px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-transparent hover:text-[#E10600] hover:shadow-[0_0_35px_rgba(225,6,0,0.35)]"
            >
              See the transformation
            </a>

            <a
              href="#case-collaboration"
              className="rounded-full border border-white/15 px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:border-[#E10600] hover:text-[#E10600] hover:shadow-[0_0_35px_rgba(225,6,0,0.22)]"
            >
              Request a call
            </a>
          </div>
        </div>

<div className="grid gap-4">
  <div className="grid gap-4 sm:grid-cols-2">
    <ImageCard
      src="/images/klokke/klokke1.jpg"
      alt="Cinematic watch product visual"
      eyebrow="Premium product"
      label="Built for attention"
      className="min-h-[260px]"
    />

    <ImageCard
      src="/images/redbull/redbull5.jpg"
      alt="Red Bull campaign visual"
      eyebrow="Launch asset"
      label="Social-ready product visual"
      className="min-h-[260px]"
    />
  </div>

  <ImageCard
    src="/images/bil/bil3.jpg"
    alt="Cinematic automotive campaign visual"
    eyebrow="Campaign visual"
    label="Cinematic brand moment"
    className="min-h-[300px]"
    imageClassName="object-cover object-[center_58%]"
  />
</div>

      </div>
    </section>
  );
}