import fs from "node:fs";
import path from "node:path";
import { manyLooks as m } from "@/lib/content";
import { Heading, Label, Section } from "@/components/ui/primitives";
import { GalleryCovers, type Gallery } from "@/components/ui/GalleryCovers";

const IMAGE = /\.(jpe?g|png|webp|avif)$/i;

// Reads every image in public/media/uttrykk/<folder>, sorted by file name.
function imagesIn(folder: string) {
  const dir = path.join(process.cwd(), "public", "media", "uttrykk", folder);
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => IMAGE.test(f))
      .sort((a, b) => a.localeCompare(b, "nb", { numeric: true }))
      .map((f) => `/media/uttrykk/${folder}/${f}`);
  } catch {
    return [];
  }
}

export function ManyLooks() {
  const galleries: Gallery[] = m.galleries.flatMap((g) => {
    const images = imagesIn(g.folder);
    if (images.length === 0) return [];
    // An image named "forside.*" becomes the cover; otherwise the first image.
    const cover = images.find((src) => /\/forside\.[a-z]+$/i.test(src)) ?? images[0];
    return [{ name: g.name, tag: g.tag, cover, images: [cover, ...images.filter((i) => i !== cover)] }];
  });

  return (
    <Section id="arbeid" className="bg-[#0a0a0a]">
      <Label>{m.label}</Label>
      <Heading>{m.title}</Heading>
      <p className="mt-6 max-w-xl text-base leading-7 text-white/65">{m.text}</p>
      <div className="mt-12">
        <GalleryCovers galleries={galleries} />
      </div>
    </Section>
  );
}
