import PageHero from '@/components/PageHero';
import { ShieldCheck, Database, Eye, Cookie } from 'lucide-react';

const sections = [
  {
    icon: Eye,
    title: 'Tracking & Analyse',
    text: 'Diese Website verwendet kein Google Analytics, keinen Meta Pixel und keine weiteren Tracking- oder Marketingdienste. Es findet keine Analyse des Nutzungsverhaltens statt.',
  },
  {
    icon: Cookie,
    title: 'Cookies',
    text: 'Da keine zustimmungspflichtigen Dienste verwendet werden, kommt diese Website ohne Cookie-Banner aus. Es werden keine Werbe- oder Tracking-Cookies gesetzt.',
  },
  {
    icon: Database,
    title: 'Datenverarbeitung',
    text: 'Diese Website ist eine statische Website ohne Backend oder Datenbank. Es werden keine personenbezogenen Daten serverseitig verarbeitet oder gespeichert.',
  },
  {
    icon: ShieldCheck,
    title: 'Externe Inhalte',
    text: 'Schriftarten werden lokal eingebunden. Es findet keine automatische Datenübertragung an externe Font-Anbieter statt. Bilder werden von externen Quellen geladen, dabei werden jedoch keine personenbezogenen Daten übertragen.',
  },
];

export default function Datenschutz() {
  return (
    <div className="animate-fade-in">
      <PageHero label="Rechtliches" title="Datenschutz" />

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="container-narrow">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-base leading-relaxed text-slate-600">
              Der Schutz Ihrer persönlichen Daten ist wichtig. Nachfolgend
              informieren wir über die Datenschutzpraxis dieser Website.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            {sections.map((s, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-slate-100 border border-slate-200 text-teal-700">
                  <s.icon size={20} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {s.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs leading-relaxed text-slate-400">
              Diese Datenschutzinformation wird bei Änderungen der Website oder
              der eingesetzten Dienste entsprechend aktualisiert.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
