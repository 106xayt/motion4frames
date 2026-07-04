export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] px-5 py-10 text-white md:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1fr] md:items-end">
        <div>
          <p className="text-2xl font-semibold uppercase tracking-[-0.04em] transition hover:text-[#E10600]">
            Motion4Frames
          </p>

          <p className="mt-3 max-w-md text-sm leading-6 text-white/55">
            Visual positioning for product-based brands.
          </p>

          <p className="mt-6 max-w-md text-xs uppercase leading-5 tracking-[0.22em] text-white/35">
            Built for product visuals, short-form content, campaign assets and
            launch storytelling.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <nav className="flex flex-wrap gap-x-3 gap-y-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/55 md:justify-end">
            <a
              href="#"
              className="rounded-full border border-transparent px-3 py-2 transition hover:border-[#E10600] hover:text-[#E10600]"
            >
              Home
            </a>

            <a
              href="#transformation"
              className="rounded-full border border-transparent px-3 py-2 transition hover:border-[#E10600] hover:text-[#E10600]"
            >
              Transformation
            </a>

            <a
              href="#what-we-create"
              className="rounded-full border border-transparent px-3 py-2 transition hover:border-[#E10600] hover:text-[#E10600]"
            >
              Still To Video
            </a>

            <a
              href="#case-collaboration"
              className="rounded-full border border-transparent px-3 py-2 transition hover:border-[#E10600] hover:text-[#E10600]"
            >
              Request a call
            </a>

            <a
              href="https://www.instagram.com/motion4frames"
              className="rounded-full border border-transparent px-3 py-2 transition hover:border-[#E10600] hover:text-[#E10600]"
            >
              Instagram
            </a>
          </nav>

          <div className="flex flex-col gap-2 text-xs text-white/35 md:items-end">
            <p>© {new Date().getFullYear()} Motion4Frames. Innovation in Motion.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}