import PageHero from '@/components/PageHero';
import DocumentViewer from '@/components/DocumentViewer';
import { GraduationCap, Award, Building2, Calendar, CheckCircle2 } from 'lucide-react';

const infoItems = [
  { icon: GraduationCap, label: 'Qualifikation', value: 'Installations- und Gebäudetechniker' },
  { icon: Award, label: 'Hauptmodul', value: 'Gas- und Sanitärtechnik' },
  { icon: CheckCircle2, label: 'Lehrabschlussprüfung', value: 'Bestanden' },
  { icon: Building2, label: 'Ausgestellt durch', value: 'Wirtschaftskammer Wien' },
  { icon: Calendar, label: 'Datum', value: '25. März 2025' },
];

export default function Lehrabschluss() {
  return (
    <div className="animate-fade-in">
      <PageHero
        label="Abschluss"
        title="Lehrabschluss"
        subtitle="Installations- und Gebäudetechnik"
      />

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="container-tech">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="order-2 lg:order-1">
              <p className="section-label">Berufsqualifikation</p>
              <h2 className="mt-2 heading-2">Lehrabschlussprüfung</h2>
              <div className="mt-4 h-px w-16 bg-teal-600" />

              <div className="mt-8 space-y-5">
                {infoItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 rounded border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-slate-100 border border-slate-200 text-teal-700">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-700">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:sticky lg:top-24 lg:self-start">
              <DocumentViewer
                filePath="/Lehrabschluss.pdf"
                title="Lehrabschluss – Tufan Dönmezyürek"
                viewLabel="Lehrabschluss ansehen"
                openLabel="PDF öffnen"
                downloadLabel="PDF herunterladen"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
