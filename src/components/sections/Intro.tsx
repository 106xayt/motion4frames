import { intro } from "@/lib/content";
import { Heading, Label, Section } from "@/components/ui/primitives";

export function Intro() {
  return (
    <Section className="border-b border-white/5">
      <Label>{intro.label}</Label>
      <Heading>{intro.title}</Heading>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">{intro.text}</p>
    </Section>
  );
}
