"use client";

import { useRef, useState } from "react";

type BeforeAfterSliderProps = {
  beforeImage: string;
  afterImage: string;
};

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState(50);

  function updatePosition(clientX: number) {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const nextPosition = Math.max(0, Math.min(100, (x / rect.width) * 100));

    setPosition(nextPosition);
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111] md:aspect-[16/9]"
      onMouseDown={(event) => updatePosition(event.clientX)}
      onMouseMove={(event) => {
        if (event.buttons === 1) updatePosition(event.clientX);
      }}
      onTouchStart={(event) => updatePosition(event.touches[0].clientX)}
      onTouchMove={(event) => updatePosition(event.touches[0].clientX)}
    >
      {/* AFTER image: full size, stationary */}
      <img
        src={afterImage}
        alt="Cinematic product presentation"
        className="absolute inset-0 h-full w-full object-cover object-center"
        draggable={false}
      />

      {/* BEFORE image: full size, stationary, clipped by slider */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      >
        <img
          src={beforeImage}
          alt="Ordinary product presentation"
          className="absolute inset-0 h-full w-full object-cover object-center"
          draggable={false}
        />
      </div>

      <div
        className="absolute top-0 z-20 h-full w-px bg-[#E10600]"
        style={{ left: `${position}%` }}
      />

      <button
        type="button"
        aria-label="Drag to reveal transformation"
        className="absolute top-1/2 z-30 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#E10600] bg-black/85 text-xl text-[#E10600] shadow-[0_0_35px_rgba(225,6,0,0.45)]"
        style={{ left: `${position}%` }}
      >
        ↔
      </button>

      <div className="absolute left-4 top-4 z-30 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-white/70 backdrop-blur">
        Before
      </div>

      <div className="absolute right-4 top-4 z-30 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-white/70 backdrop-blur">
        After
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-30 grid grid-cols-2 border-t border-white/10 bg-black/75 backdrop-blur">
        <div className="p-4 md:p-6">
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
            Raw. Flat.
          </p>
          <p className="mt-1 text-sm font-medium uppercase text-[#E10600]">
            Forgotten.
          </p>
        </div>

        <div className="border-l border-white/10 p-4 text-right md:p-6">
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
            Cinematic.
          </p>
          <p className="mt-1 text-sm font-medium uppercase text-[#E10600]">
            Remembered.
          </p>
        </div>
      </div>
    </div>
  );
}