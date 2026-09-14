import PageHero from '@/components/PageHero';
import SectionTitle from '@/components/SectionTitle';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import { experience, education, knowledge } from '@/data/experience';
import { GraduationCap, Languages, Monitor, Car } from 'lucide-react';

const knowledgeIcons = [Languages, Monitor, Car];

export default function Lebenslauf() {
  return (
    <div className="animate-fade-in">
      <PageHero
        label="Lebenslauf"
        title="Lebenslauf"
        subtitle="Beruflicher Werdegang & Qualifikationen"
      />

      <section className="border-b border-slate-200 bg-slate-50 py-12 sm:py-16">
        <div className="container-tech">
          <SectionTitle label="Werdegang" title="Berufserfahrung" />
          <div className="mt-10">
            <ExperienceTimeline items={experience} />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-12 sm:py-16">
        <div className="container-tech">
          <SectionTitle label="Bildung" title="Ausbildung" />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {education.map((item, i) => (
              <div key={i} className="card-tech">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-slate-100 border border-slate-200 text-teal-700">
                    <GraduationCap size={20} />
                  </div>
                  {item.period && (
                    <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                      {item.period}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {item.institution}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{item.description}</p>
                {item.focus && (
                  <p className="mt-2 text-sm text-slate-600">
                    <span className="text-slate-400">Schwerpunkt: </span>
                    {item.focus}
                  </p>
                )}
                {item.note && (
                  <p className="mt-3 rounded border border-teal-200 bg-teal-50 px-3 py-2 text-xs text-teal-800">
                    {item.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="container-tech">
          <SectionTitle label="Zusatzqualifikationen" title="Weitere Kenntnisse" />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {knowledge.map((group, i) => {
              const Icon = knowledgeIcons[i] || Languages;
              return (
                <div key={i} className="card-tech">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-slate-100 border border-slate-200 text-teal-700">
                      <Icon size={20} />
                    </div>
                    <h3 className="heading-3">{group.category}</h3>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {group.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
