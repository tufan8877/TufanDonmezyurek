import PageHero from '@/components/PageHero';
import { certificates, certificatePlaceholders } from '@/data/certificates';
import { Award, FileText, Clock } from 'lucide-react';

export default function Zertifikate() {
  return (
    <div className="animate-fade-in">
      <PageHero
        label="Zertifikate"
        title="Zertifikate & Schulungen"
        subtitle="Fachliche Weiterbildung und Herstellerqualifikationen"
      />

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="container-tech">
          {certificates.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {certificates.map((cert, i) => (
                <div key={i} className="card-tech group flex flex-col">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded bg-slate-100 border border-slate-200 text-teal-700">
                      <Award size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                        {cert.manufacturer}
                      </p>
                      <p className="text-sm text-slate-500">{cert.year}</p>
                    </div>
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">
                    {cert.courseName}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">{cert.issuer}</p>
                  <div className="mt-auto pt-6">
                    <a
                      href={cert.filePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full justify-center"
                    >
                      <FileText size={16} />
                      Zertifikat ansehen
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="mb-10 grid gap-6 sm:grid-cols-3">
                {certificatePlaceholders.map((manufacturer, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-dashed border-slate-300 bg-white p-6 text-center"
                  >
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded bg-slate-100 border border-slate-200 text-slate-400">
                      <Award size={24} />
                    </div>
                    <p className="mt-4 text-sm font-semibold text-slate-600">
                      {manufacturer}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">Folgt</p>
                  </div>
                ))}
              </div>

              <div className="mx-auto max-w-2xl rounded-lg border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 border border-slate-200">
                  <Clock size={28} className="text-slate-400" />
                </div>
                <p className="mt-5 text-base leading-relaxed text-slate-600">
                  Die entsprechenden Schulungs- und Weiterbildungsnachweise
                  werden hier laufend ergänzt.
                </p>
              </div>
            </>
          )}

          <div className="mt-10 rounded-lg border border-slate-200 bg-white p-5">
            <div className="flex items-start gap-3">
              <FileText size={18} className="mt-0.5 shrink-0 text-slate-400" />
              <p className="text-xs leading-relaxed text-slate-400">
                Zertifikate werden nach Upload der entsprechenden PDF-Dokumente
                automatisch an dieser Stelle angezeigt.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
