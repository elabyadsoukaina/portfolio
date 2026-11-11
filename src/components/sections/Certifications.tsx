import { Award, CalendarDays, ExternalLink } from 'lucide-react';
import { certifications } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Reconnaissance" title="Certifications" />

      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((cert) => (
          <div
            key={`${cert.name}-${cert.date}`}
            className="flex gap-5 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-emerald-400/40"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
              <Award className="h-6 w-6" />
            </span>

            <div className="flex flex-1 flex-col">
              <h3 className="text-lg font-semibold text-slate-50">{cert.name}</h3>
              <p className="mt-1 text-sm text-slate-400">{cert.issuer}</p>
              <p className="mt-2 inline-flex items-center gap-2 text-xs text-slate-500">
                <CalendarDays className="h-3.5 w-3.5" />
                Obtenue en {cert.date}
              </p>

              <a
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-emerald-400 transition hover:text-emerald-300"
              >
                Voir le certificat
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
