type ImageCardProps = {
  src: string;
  alt: string;
  label?: string;
  eyebrow?: string;
  className?: string;
  imageClassName?: string;
};

export function ImageCard({
  src,
  alt,
  label,
  eyebrow,
  className = "",
  imageClassName = "",
}: ImageCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#111111] transition duration-300 hover:border-[#E10600] hover:shadow-[0_0_45px_rgba(225,6,0,0.22)] ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover transition duration-500 group-hover:scale-[1.04] ${imageClassName}`}
        draggable={false}
      />

      {(label || eyebrow) && (
        <>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/70 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-5">
            {eyebrow && (
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#E10600]">
                {eyebrow}
              </p>
            )}

            {label && (
              <p className="max-w-[16rem] text-sm font-semibold uppercase leading-5 tracking-[0.18em] text-white">
                {label}
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
}