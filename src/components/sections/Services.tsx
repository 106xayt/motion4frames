import { services } from "@/lib/content";
import { Heading, Label, Section } from "@/components/ui/primitives";

export function Services() {
  return (
    <Section id="tjenester" className="bg-[#0a0a0a]">
      <Label>{services.label}</Label>
      <Heading>{services.title}</Heading>
      <ul className="mt-12 grid border-t border-white/10 md:grid-cols-2">
        {services.items.map((item, i) => (
          <li
            key={item}
            className="flex items-baseline gap-5 border-b border-white/10 py-6 md:odd:border-r md:odd:pr-8 md:even:pl-8"
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-[#E10600]">0{i + 1}</span>
            <span className="text-lg font-semibold uppercase tracking-[0.06em] md:text-xl">{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
