import { rental as r } from "@/lib/content";
import { Deliverables, Heading, Label, LoopVideo, Photo, Section, TagBadge } from "@/components/ui/primitives";

export function Rental() {
  return (
    <Section className="bg-[#0a0a0a]">
      <Label>{r.label}</Label>
      <div className="grid gap-10 md:grid-cols-[1fr_minmax(0,360px)] md:items-start">
        <div>
          <div className="flex items-center gap-3">
            <TagBadge tag={r.tag} />
            <span className="text-xs uppercase tracking-[0.25em] text-white/50">{r.client}</span>
          </div>
          <Heading className="mt-4">{r.title}</Heading>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/65">{r.text}</p>
          <div className="mt-6">
            <Deliverables items={r.deliverables} />
          </div>

          {r.quote && (
            <blockquote className="mt-8 border-l-2 border-[#E10600] pl-5 text-lg italic text-white/80">
              «{r.quote.text}»
              <footer className="mt-2 text-xs not-italic uppercase tracking-[0.2em] text-white/50">
                {r.quote.name}
              </footer>
            </blockquote>
          )}

          <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {r.gallery.map((g) => (
              <Photo key={g.src} src={g.src} alt={g.alt} className="aspect-[9/16]" />
            ))}
          </div>
        </div>

        <div className="relative mx-auto aspect-[9/16] w-full max-w-[360px] overflow-hidden rounded-[2rem] border border-white/10 md:order-none">
          <LoopVideo src={r.video} poster={r.poster} />
        </div>
      </div>
    </Section>
  );
}
