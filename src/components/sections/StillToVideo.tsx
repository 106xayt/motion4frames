import { stillToVideo as s } from "@/lib/content";
import { Heading, LoopVideo, Section } from "@/components/ui/primitives";

export function StillToVideo() {
  return (
    <Section>
      <div className="grid gap-12 md:grid-cols-[1fr_minmax(0,340px)] md:items-center">
        <div>
          <Heading>{s.title}</Heading>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/65">{s.text}</p>
          <ol className="mt-10 grid gap-3 md:grid-cols-3">
            {s.steps.map((step, i) => (
              <li key={step} className="rounded-2xl border border-white/10 bg-[#111] p-5">
                <p className="text-xs font-semibold tracking-[0.22em] text-[#E10600]">0{i + 1}</p>
                <p className="mt-3 text-sm font-semibold uppercase leading-5 tracking-[0.1em]">{step}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="mx-auto aspect-[9/16] w-full max-w-[340px] overflow-hidden rounded-[2rem] border border-white/10">
          <LoopVideo src={s.video} poster={s.poster} />
        </div>
      </div>
    </Section>
  );
}
