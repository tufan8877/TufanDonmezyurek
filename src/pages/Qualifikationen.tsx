import PageHero from '@/components/PageHero';
import SectionTitle from '@/components/SectionTitle';
import SkillCard from '@/components/SkillCard';
import { qualifications, trainings } from '@/data/qualifications';
import { Wrench, Award, Info } from 'lucide-react';

export default function Qualifikationen() {
  return (
    <div className="animate-fade-in">
      <PageHero
        label="Qualifikationen"
        title="Fachliche Qualifikationen"
        subtitle="Technische Kompetenzen und berufliche Schwerpunkte"
      />

      <section className="border-b border-slate-200 bg-slate-50 py-12 sm:py-16">
        <div className="container-tech">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {qualifications.map((q, i) => (
              <SkillCard
                key={i}
                title={q.title}
                icon={q.icon}
                items={q.items}
                asList
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="container-tech">
          <SectionTitle
            label="Weiterbildung"
            title="Herstellerschulungen / Technische Weiterbildung"
          />

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {trainings.map((t, i) => (
              <div key={i} className="card-tech">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-slate-100 border border-slate-200 text-teal-700">
                    <Award size={20} />
                  </div>
                  <h3 className="heading-3">{t.manufacturer}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  Erfahrung bzw. Schulungen im Bereich der Produkte und Systeme
                  dieses Herstellers.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-5">
            <Info size={20} className="mt-0.5 shrink-0 text-slate-400" />
            <p className="text-sm leading-relaxed text-slate-500">
              Detaillierte Nachweise zu Schulungen und Weiterbildungen finden
              sich auf der Seite{' '}
              <a
                href="/zertifikate"
                className="text-teal-700 transition-colors hover:text-teal-800"
              >
                Zertifikate
              </a>
              . Die dortigen Dokumente werden laufend ergänzt.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
