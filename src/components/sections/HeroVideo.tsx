"use client";

import { useSyncExternalStore } from "react";
import { hero } from "@/lib/content";
import { btnPrimary, btnSecondary } from "@/components/ui/primitives";

const QUERY = "(max-width: 767px)";

export function HeroVideo() {
  // null on the server, so only one video file is ever downloaded
  const mobile = useSyncExternalStore<boolean | null>(
    (cb) => {
      const mq = window.matchMedia(QUERY);
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia(QUERY).matches,
    () => null,
  );

  const src = mobile ? hero.videoMobile : hero.videoDesktop;
  const poster = mobile ? hero.posterMobile : hero.posterDesktop;

  return (
    // Mobile: the wide video sits above the text so the whole car stays visible.
    // Desktop: full-screen video with the text on top.
    <section className="relative w-full bg-black pt-16 md:h-[100svh] md:min-h-[600px] md:pt-0">
      <div className="relative aspect-[1918/994] w-full md:absolute md:inset-0 md:aspect-auto md:h-full">
        {mobile !== null && (
          <video
            key={src}
            src={src}
            poster={poster}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        )}
        <div className="absolute inset-x-0 bottom-0 hidden h-1/2 bg-gradient-to-t from-black/90 to-transparent md:block" />
      </div>

      <div className="relative px-5 pb-12 pt-8 md:absolute md:inset-x-0 md:bottom-0 md:px-10 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="max-w-4xl text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] md:text-8xl">
            {hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/75 md:text-lg">{hero.subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={hero.primary.href} className={btnPrimary}>
              {hero.primary.label}
            </a>
            <a href={hero.secondary.href} className={btnSecondary}>
              {hero.secondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
