"use client";

import { useEffect, useState } from "react";
import { TagBadge } from "@/components/ui/primitives";
import type { Tag } from "@/lib/content";

export type Gallery = { name: string; tag: Tag; cover: string; images: string[] };

const arrow =
  "absolute top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-black/60 text-2xl text-white backdrop-blur transition hover:border-[#E10600] hover:text-[#E10600] md:h-14 md:w-14";

export function GalleryCovers({ galleries }: { galleries: Gallery[] }) {
  const [open, setOpen] = useState<{ g: Gallery; i: number } | null>(null);

  const close = () => setOpen(null);
  const step = (d: number) =>
    setOpen((o) => (o ? { g: o.g, i: (o.i + d + o.g.images.length) % o.g.images.length } : o));

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {galleries.map((g) => (
          <button
            key={g.name}
            type="button"
            onClick={() => setOpen({ g, i: 0 })}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 text-left focus-visible:outline-2 focus-visible:outline-[#E10600]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={g.cover}
              alt={`${g.name} – forside`}
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent p-6">
              <TagBadge tag={g.tag} />
              <p className="mt-3 text-3xl font-semibold uppercase tracking-[0.06em]">{g.name}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/60 group-hover:text-[#E10600]">
                Se alle {g.images.length} bilder →
              </p>
            </div>
          </button>
        ))}
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${open.g.name} galleri`}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Lukk"
            onClick={close}
            className="absolute right-4 top-4 z-10 grid h-12 w-12 place-items-center rounded-full border border-white/25 bg-black/60 text-2xl hover:border-[#E10600] hover:text-[#E10600]"
          >
            ×
          </button>

          <p className="absolute left-5 top-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            {open.g.name} · {open.i + 1} / {open.g.images.length}
          </p>

          <button
            type="button"
            aria-label="Forrige bilde"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className={`${arrow} left-3 md:left-6`}
          >
            ‹
          </button>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={open.g.images[open.i]}
            src={open.g.images[open.i]}
            alt={`${open.g.name} ${open.i + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[calc(100vw-2rem)] rounded-xl object-contain md:max-w-[calc(100vw-10rem)]"
          />

          <button
            type="button"
            aria-label="Neste bilde"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className={`${arrow} right-3 md:right-6`}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
