import { skillGroups } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';

export default function Skills() {
  return (
    <section id="competences" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Expertise" title="Compétences" />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition duration-300 hover:border-emerald-400/40"
          >
            <h3 className="text-base font-semibold text-slate-50">{group.category}</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-slate-700 bg-slate-800/60 px-2.5 py-1 text-xs font-medium text-slate-300 transition hover:border-emerald-400/50 hover:text-emerald-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
