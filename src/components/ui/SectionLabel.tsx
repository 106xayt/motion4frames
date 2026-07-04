import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  className?: string;
};

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#E10600] ${className}`}
    >
      {children}
    </p>
  );
}