import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { ImageCard } from "@/components/ui/ImageCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Transformation() {
  return (
    <section
      id="transformation"
      className="bg-[#0A0A0A] px-5 py-24 text-white md:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <SectionLabel>Before / After</SectionLabel>

            <h2 className="text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.05em] md:text-7xl">
              From product to attention.
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-sm leading-7 text-white/60 md:text-base">
              Most businesses already have the product. What changes everything
              is how it is framed.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/60 md:text-base">
              We take one product and build a visual direction around it, so it
              feels more premium, more memorable and more campaign-ready.
            </p>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#E10600]">
              Same product. Different perception.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-[#111111] p-3 transition duration-300 hover:border-[#E10600] hover:shadow-[0_0_60px_rgba(225,6,0,0.18)]">
          <BeforeAfterSlider
            beforeImage="/images/redbull-before.png"
            afterImage="/images/redbull-after.png"
          />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <ImageCard
            src="/images/klokke/klokke2.jpg"
            alt="Cinematic watch transformation"
            eyebrow="Premium product"
            label="From object to desire"
            className="min-h-[360px]"
          />

          <ImageCard
            src="/images/bil/bil7.jpg"
            alt="Cinematic automotive transformation"
            eyebrow="Automotive"
            label="From vehicle to status"
            className="min-h-[360px]"
          />
        </div>
      </div>
    </section>
  );
}