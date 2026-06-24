import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Transformation() {
  return (
    <section id="transformation" className="px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <SectionLabel>Transformation</SectionLabel>

          <h2 className="text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Same product.
            <br />
            Different perception.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/55 md:text-base">
            Drag to reveal what changes when a product is treated like a
            premium brand.
          </p>
        </div>

        <BeforeAfterSlider
          beforeImage="/images/redbull-before.png"
          afterImage="/images/redbull-after.png"
        />  
      </div>
    </section>
  );
}