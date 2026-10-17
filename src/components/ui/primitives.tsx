import type { ReactNode } from "react";
import { showPendingLabels, type Tag } from "@/lib/content";

export const btnPrimary =
  "inline-block rounded-full border border-[#E10600] bg-[#E10600] px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-transparent hover:text-[#E10600]";

export const btnSecondary =
  "inline-block rounded-full border border-white/25 bg-black/30 px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur transition hover:border-[#E10600] hover:text-[#E10600]";

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-20 px-5 py-20 md:px-10 md:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function Label({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#E10600]">
      {children}
    </p>
  );
}

export function Heading({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`max-w-3xl text-3xl font-semibold uppercase leading-[0.95] tracking-[-0.04em] md:text-6xl ${className}`}
    >
      {children}
    </h2>
  );
}

export function TagBadge({ tag }: { tag: Tag }) {
  const color = tag === "Kundeoppdrag" ? "border-emerald-400/40 text-emerald-300" : "border-amber-400/40 text-amber-300";
  return (
    <span
      className={`inline-block rounded-full border bg-black/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] backdrop-blur ${color}`}
    >
      {tag}
    </span>
  );
}

/** Marks temporary content. Hidden when showPendingLabels is false. */
export function Pending({ label, className = "" }: { label?: string; className?: string }) {
  if (!showPendingLabels || !label) return null;
  return (
    <span
      className={`pointer-events-none inline-block rounded border border-dashed border-yellow-300/70 bg-black/70 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-300 ${className}`}
    >
      {label}
    </span>
  );
}

export function Photo({
  src,
  alt,
  className = "",
  caption,
}: {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
}) {
  return (
    <figure className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#111] ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" draggable={false} />
      {caption && (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4 text-xs font-semibold uppercase tracking-[0.18em]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function LoopVideo({
  src,
  poster,
  className = "",
}: {
  src: string;
  poster: string;
  className?: string;
}) {
  return (
    <video
      src={src}
      poster={poster}
      className={`h-full w-full object-cover ${className}`}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    />
  );
}

export function Deliverables({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((d) => (
        <li
          key={d}
          className="rounded-full border border-white/15 px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-white/70"
        >
          {d}
        </li>
      ))}
    </ul>
  );
}
