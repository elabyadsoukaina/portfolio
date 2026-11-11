import { ArrowDown, Download, Loader2 } from 'lucide-react';
import { profile } from '@/data/portfolio';
import useCvDownload from '@/hooks/useCvDownload';

export default function Hero() {
  const { download, isLoading } = useCvDownload();

  return (
    <section id="accueil" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.12),transparent_60%)]" />
      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm font-semibold text-emerald-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            {profile.status}
          </span>
        </div>

        <h1 className="animate-fade-up mt-8 text-5xl font-bold leading-[1.1] tracking-tight text-slate-50 [animation-delay:100ms] sm:text-6xl lg:text-7xl">
          {profile.firstName} <span className="text-emerald-400">{profile.lastName}</span>
        </h1>

        <p className="animate-fade-up mt-4 text-xl text-slate-300 [animation-delay:200ms] sm:text-2xl">
          {profile.title}
        </p>

        <p className="animate-fade-up mt-6 max-w-2xl text-base leading-relaxed text-slate-400 [animation-delay:300ms]">
        Master en Intelligence Artificielle et Licence en Informatique, passionnée par le développement de solutions intelligentes et désireuse de mettre mes compétences au service de projets innovants.
        </p>

        <div className="animate-fade-up mt-10 flex flex-wrap items-center gap-4 [animation-delay:400ms]">
          <a
            href="#projets"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-300"
          >
            Voir mes projets
            <ArrowDown className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={download}
            disabled={isLoading}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-400/60 hover:text-emerald-300 disabled:cursor-wait disabled:opacity-70"
          >
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
            Télécharger mon CV
          </button>
        </div>
      </div>
    </section>
  );
}
