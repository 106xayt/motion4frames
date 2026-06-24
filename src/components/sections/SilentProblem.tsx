import { SectionLabel } from "@/components/ui/SectionLabel";
import { problemCards } from "@/lib/data";

export function SilentProblem() {
  return (
    <section className="px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>The Silent Problem</SectionLabel>

        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <h2 className="text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Most businesses look less valuable than they are.
          </h2>

          <p className="max-w-xl text-sm leading-7 text-white/55 md:text-base">
            You may have a strong product, real results and a story worth
            telling. But in the market, everything is often presented through
            flat visuals, generic content and forgettable posts.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {problemCards.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-white/10 bg-[#111111] p-6 transition hover:border-[#E10600]/50"
            >
              <div className="mb-10 h-px w-12 bg-[#E10600] transition group-hover:w-20" />

              <h3 className="text-sm font-medium uppercase tracking-[0.25em]">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/45">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 border-l border-[#E10600] pl-6">
          <p className="max-w-2xl text-2xl font-medium leading-tight text-white md:text-4xl">
            The best product does not always win. The product that stops
            attention does.
          </p>
        </div>
      </div>
    </section>
  );
}