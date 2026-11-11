import { Briefcase, CalendarDays, MapPin } from 'lucide-react';
import { experiences } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Parcours" title="Expérience" />

      <ol className="relative space-y-8 border-l border-slate-800 pl-8">
        {experiences.map((exp) => (
          <li key={`${exp.company}-${exp.period}`} className="relative">
            <span className="absolute -left-[37px] top-2 flex h-4 w-4 items-center justify-center rounded-full bg-slate-950 ring-2 ring-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 transition hover:border-emerald-400/30">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-emerald-400" />
                  {exp.period}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-emerald-400" />
                  {exp.location}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-semibold text-slate-50">{exp.role}</h3>
              <p className="mt-1 inline-flex items-center gap-2 text-base font-medium text-emerald-300">
                <Briefcase className="h-4 w-4" />
                {exp.company}
              </p>

              <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-400 marker:text-emerald-400">
                {exp.missions.map((mission) => (
                  <li key={mission}>{mission}</li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2">
                {exp.tools.map((tool) => (
                  <li key={tool} className="rounded-md border border-slate-700 px-2.5 py-1 text-xs font-medium text-slate-300">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
