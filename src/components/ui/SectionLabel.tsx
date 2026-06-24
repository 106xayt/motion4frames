type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`mb-4 text-[11px] font-medium uppercase tracking-[0.5em] text-[#E10600] ${className}`}
    >
      {children}
    </p>
  );
}