import { ArrowUpRight, Github } from 'lucide-react';
import { projects } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';

export default function Projects() {
  return (
    <section id="projets" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Réalisations" title="Projets" />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-8 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-xl hover:shadow-emerald-500/5"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold leading-snug text-slate-50">{project.name}</h3>
              <Github className="h-6 w-6 shrink-0 text-slate-500 transition group-hover:text-emerald-400" />
            </div>

            <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-300"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-emerald-400 transition hover:text-emerald-300"
            >
              Voir le dépôt GitHub
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
