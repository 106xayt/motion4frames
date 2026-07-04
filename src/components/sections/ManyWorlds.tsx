import { ImageCard } from "@/components/ui/ImageCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

const perfumeWorlds = [
  {
    label: "Midnight",
    src: "/images/parfyme/parfyme1.jpg",
  },
  {
    label: "Emerald",
    src: "/images/parfyme/parfyme2.jpg",
  },
  {
    label: "Violet",
    src: "/images/parfyme/parfyme3.jpg",
  },
  {
    label: "Amber",
    src: "/images/parfyme/parfyme4.jpg",
  },
  {
    label: "Neon",
    src: "/images/parfyme/parfyme5.jpg",
  },
  {
    label: "Ice blue",
    src: "/images/parfyme/parfyme6.jpg",
  },
];

export function ManyWorlds() {
  return (
    <section className="bg-[#050505] px-5 py-24 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>One Product. Many Worlds.</SectionLabel>

        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <h2 className="text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.05em] md:text-7xl">
            One product.
            <br />
            Many worlds.
          </h2>

          <div>
            <p className="max-w-xl text-sm leading-7 text-white/60 md:text-base">
              The same product can be positioned through different emotions,
              colors, seasons and campaign moods.
            </p>

            <p className="mt-4 max-w-xl text-lg font-medium leading-7 text-white md:text-2xl">
              This is how products become campaigns, not just posts.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {perfumeWorlds.map((world) => (
            <ImageCard
              key={world.label}
              src={world.src}
              alt={`${world.label} perfume campaign visual`}
              eyebrow="Perfume world"
              label={world.label}
              className="min-h-[360px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}