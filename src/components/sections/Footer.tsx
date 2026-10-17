import { footer, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-14 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em]">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm text-white/55">{footer.tagline}</p>
        </div>

        <nav className="grid grid-cols-2 gap-x-10 gap-y-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/60 sm:grid-cols-3">
          {footer.links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[#E10600]">
              {l.label}
            </a>
          ))}
          <a href={site.instagram} target="_blank" rel="noreferrer" className="hover:text-[#E10600]">
            Instagram
          </a>
          {site.email && (
            <a href={`mailto:${site.email}`} className="hover:text-[#E10600]">
              E-post
            </a>
          )}
        </nav>
      </div>
      <p className="mx-auto mt-12 max-w-7xl text-xs text-white/35">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}
