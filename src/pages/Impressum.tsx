import PageHero from '@/components/PageHero';

export default function Impressum() {
  return (
    <div className="animate-fade-in">
      <PageHero label="Rechtliches" title="Impressum" />

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="container-narrow space-y-6">
          <div>
            <p className="section-label">Angaben gemäß § 5 MedienG</p>
            <div className="mt-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-base font-semibold text-slate-900">
                Tufan Dönmezyürek
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Wien, Österreich
              </p>
            </div>
          </div>

          <div>
            <p className="section-label">Kontaktmöglichkeit</p>
            <div className="mt-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm space-y-2">
              <p className="text-sm text-slate-600">
                E-Mail:{' '}
                <a
                  href="mailto:tufandonmezyurek@gmail.com"
                  className="text-teal-700 transition-colors hover:text-teal-800"
                >
                  tufandonmezyurek@gmail.com
                </a>
              </p>
              <p className="text-sm text-slate-600">
                Telefon:{' '}
                <a
                  href="tel:+436766166646"
                  className="text-teal-700 transition-colors hover:text-teal-800"
                >
                  0676 61 666 46
                </a>
              </p>
            </div>
          </div>

          <div>
            <p className="section-label">Hinweis</p>
            <div className="mt-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm leading-relaxed text-slate-500">
                Diese Website ist eine persönliche Bewerbungswebsite und dient
                ausschließlich der Präsentation des beruflichen Profils. Es
                handelt sich nicht um einen Gewerbebetrieb.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
