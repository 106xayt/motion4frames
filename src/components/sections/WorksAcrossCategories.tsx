import { ImageCard } from "@/components/ui/ImageCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function WorksAcrossCategories() {
  return (
    <section className="bg-[#0A0A0A] px-5 py-24 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-end">
          <div>
            <SectionLabel>This Works Across Categories</SectionLabel>

            <h2 className="text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.05em] md:text-7xl">
              If you have a product, we can build attention around it.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-white/60 md:text-base">
            Different businesses need different visual energy. A car needs
            status. A drink needs freshness. A beauty product needs trust. A
            fashion product needs texture and identity.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#111111] transition duration-300 hover:border-[#E10600] hover:shadow-[0_0_45px_rgba(225,6,0,0.18)]">
            <ImageCard
              src="/images/redbull/redbull4.jpg"
              alt="Beverage campaign visual"
              eyebrow="Beverage / FMCG"
              label="Flavor, energy and seasonality"
              className="min-h-[340px] rounded-none border-0"
            />

            <div className="p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] transition duration-300 group-hover:text-[#E10600]">
                Beverage / FMCG
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Flavor, energy and seasonality built around the product.
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#111111] transition duration-300 hover:border-[#E10600] hover:shadow-[0_0_45px_rgba(225,6,0,0.18)]">
            <ImageCard
              src="/images/bil/bil5.jpg"
              alt="Automotive campaign visual"
              eyebrow="Automotive"
              label="Status, motion and performance"
              className="min-h-[340px] rounded-none border-0"
            />

            <div className="p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] transition duration-300 group-hover:text-[#E10600]">
                Automotive / Premium Products
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Mood, status and performance presented with cinematic weight.
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#111111] transition duration-300 hover:border-[#E10600] hover:shadow-[0_0_45px_rgba(225,6,0,0.18)]">
            <ImageCard
              src="/images/klokke/klokke5.jpg"
              alt="Watch campaign visual"
              eyebrow="Accessories"
              label="Detail, material and desire"
              className="min-h-[340px] rounded-none border-0"
            />

            <div className="p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] transition duration-300 group-hover:text-[#E10600]">
                Accessories
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Details, materials and lifestyle around the object.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}