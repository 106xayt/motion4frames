import { featuredCase as c } from "@/lib/content";
import { Deliverables, Heading, Label, LoopVideo, Photo, Section, TagBadge } from "@/components/ui/primitives";

export function FeaturedCase() {
  return (
    <Section>
      <Label>{c.label}</Label>
      <div className="grid gap-10 md:grid-cols-[minmax(0,360px)_1fr] md:items-start">
        <div className="relative mx-auto aspect-[9/16] w-full max-w-[360px] overflow-hidden rounded-[2rem] border border-white/10">
          <LoopVideo src={c.video} poster={c.poster} />
          <div className="absolute left-4 top-4">
            <TagBadge tag={c.tag} />
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-white/50">
            {c.client} · {c.car}
          </p>
          <Heading className="mt-3">{c.title}</Heading>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/65">{c.description}</p>
          <div className="mt-6">
            <Deliverables items={c.deliverables} />
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3">
            {c.results.map((r) => (
              <Photo key={r.src} src={r.src} alt={r.alt} className="aspect-[3/2]" />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
