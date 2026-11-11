import { FileDown, FileText, Loader2 } from 'lucide-react';
import { profile } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';
import useCvDownload from '@/hooks/useCvDownload';

export default function CvSection() {
  const { download, isLoading, error } = useCvDownload();

  return (
    <section id="cv" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Document" title="Mon CV" />

      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
        <div className="flex flex-col gap-4 border-b border-slate-800 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
              <FileText className="h-5 w-5" />
            </span>
            <div>
              <p className="font-semibold text-slate-50">CV complet</p>
              <p className="text-xs text-slate-500">Format PDF</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 sm:items-end">
            <button
              type="button"
              onClick={download}
              disabled={isLoading}
              className="inline-flex w-fit items-center gap-2 rounded-lg bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-emerald-300 disabled:cursor-wait disabled:opacity-70"
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <FileDown className="h-4 w-4" />}
              Télécharger le CV
            </button>
            {error && <p className="text-xs text-red-400">{error}</p>}
          </div>
        </div>

        <iframe
          src={`${profile.cvUrl}#view=FitH`}
          title="Aperçu du CV"
          className="h-[80vh] min-h-[480px] w-full bg-slate-800"
        />
      </div>
    </section>
  );
}
