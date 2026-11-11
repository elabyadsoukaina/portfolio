import { GraduationCap, MapPin } from 'lucide-react';
import { educations } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';

export default function Education() {
  return (
    <section id="formation" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Diplômes" title="Formation" />

      <div className="grid gap-6 md:grid-cols-2">
        {educations.map((edu) => (
          <div
            key={edu.degree}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 transition hover:-translate-y-1 hover:border-emerald-400/40"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                <GraduationCap className="h-6 w-6" />
              </span>
              <span className="rounded-full border border-emerald-400/30 px-3 py-1 text-xs font-semibold text-emerald-300">
                {edu.level}
              </span>
            </div>

            <h3 className="mt-6 text-xl font-semibold leading-snug text-slate-50">{edu.degree}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{edu.school}</p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-slate-500">
              <MapPin className="h-4 w-4" />
              {edu.city}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
