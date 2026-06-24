import { SectionLabel } from "@/components/ui/SectionLabel";
import { whyMotionSells } from "@/lib/data";

export function WhyMotionSells() {
  return (
    <section className="px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Why Motion Sells</SectionLabel>

        <h2 className="max-w-4xl text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.05em] md:text-7xl">
          Motion turns attention into desire.
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {whyMotionSells.map((item) => (
            <div
              key={item.number}
              className="group rounded-3xl border border-white/10 bg-[#111111] p-6 transition hover:border-[#E10600]/50"
            >
              <p className="text-sm font-semibold text-[#E10600]">
                {item.number}
              </p>

              <h3 className="mt-12 text-xl font-medium uppercase tracking-[-0.02em]">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/50">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}