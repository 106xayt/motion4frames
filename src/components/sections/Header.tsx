"use client";

import { useState } from "react";
import { headerCta, nav, site } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-10">
        <a href="/" className="text-sm font-semibold uppercase tracking-[0.28em] hover:text-[#E10600]">
          {site.name}
        </a>

        <nav className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.18em] text-white/70 md:flex">
          {nav
            .filter((l) => l.href !== headerCta.href)
            .map((l) => (
              <a key={l.href} href={l.href} className="hover:text-[#E10600]">
                {l.label}
              </a>
            ))}
          <a
            href={headerCta.href}
            className="rounded-full bg-[#E10600] px-4 py-2 text-white transition hover:bg-white hover:text-black"
          >
            {headerCta.label}
          </a>
        </nav>

        <button
          type="button"
          className="text-xs font-semibold uppercase tracking-[0.2em] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Lukk" : "Meny"}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" className="border-t border-white/10 bg-black px-5 pb-6 md:hidden">
          {nav
            .filter((l) => l.href !== headerCta.href)
            .map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/10 py-4 text-sm font-semibold uppercase tracking-[0.18em]"
              >
                {l.label}
              </a>
            ))}
          <a
            href={headerCta.href}
            className="mt-5 block rounded-full bg-[#E10600] px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.2em]"
          >
            {headerCta.label}
          </a>
        </nav>
      )}
    </header>
  );
}
