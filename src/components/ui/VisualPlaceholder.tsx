type VisualPlaceholderProps = {
  label: string;
  eyebrow?: string;
  className?: string;
};

export function VisualPlaceholder({
  label,
  eyebrow = "Image placeholder",
  className = "",
}: VisualPlaceholderProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0A0A0A] text-white transition duration-300 hover:border-[#E10600] hover:shadow-[0_0_45px_rgba(225,6,0,0.22)] ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(225,6,0,0.34),transparent_34%),radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.12),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_38%)]" />

      <div className="absolute inset-4 rounded-[1.25rem] border border-dashed border-white/20 transition duration-300 group-hover:border-[#E10600]/70" />

      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 transition duration-300 group-hover:border-[#E10600]/60 group-hover:bg-[#E10600]/10" />

      <div className="absolute left-1/2 top-1/2 h-px w-24 -translate-x-1/2 bg-white/20 transition duration-300 group-hover:bg-[#E10600]" />
      <div className="absolute left-1/2 top-1/2 h-24 w-px -translate-y-1/2 bg-white/20 transition duration-300 group-hover:bg-[#E10600]" />

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/70 to-transparent" />

      <div className="relative flex h-full min-h-[240px] flex-col justify-between p-5">
        <div className="flex items-center justify-between gap-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/45 transition duration-300 group-hover:text-[#E10600]">
            {eyebrow}
          </p>

          <div className="h-2.5 w-2.5 rounded-full bg-[#E10600] shadow-[0_0_18px_rgba(225,6,0,0.8)]" />
        </div>

        <div>
          <div className="mb-4 h-px w-14 bg-[#E10600]" />

          <p className="max-w-[16rem] text-sm font-semibold uppercase leading-5 tracking-[0.18em] text-white">
            {label}
          </p>

          <p className="mt-3 text-xs uppercase tracking-[0.24em] text-white/35">
            Replace with final visual
          </p>
        </div>
      </div>
    </div>
  );
}