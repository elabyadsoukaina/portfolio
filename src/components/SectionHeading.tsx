interface SectionHeadingProps {
  eyebrow: string;
  title: string;
}

export default function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-14">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-[1.2] tracking-tight text-slate-50 sm:text-4xl">{title}</h2>
      <div className="mt-6 h-px w-24 bg-gradient-to-r from-emerald-400 to-transparent" />
    </div>
  );
}
