import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Wrench, Search, Flame, Headphones, Gauge, MapPin } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import { images } from '@/data/images';

const competencies = [
  {
    icon: 'wrench',
    title: 'Wartung & Service',
    description: 'Regelmäßige Wartung und vorbeugende Instandhaltung technischer Anlagen.',
  },
  {
    icon: 'search',
    title: 'Störungsdiagnose',
    description: 'Strukturierte Fehlersuche und zielgerichtete Störungsbehebung.',
  },
  {
    icon: 'flame',
    title: 'Heizungs- & Gebäudetechnik',
    description: 'Erfahrung mit Heizungsanlagen, Gasgeräten und Fernwärmetechnik.',
  },
  {
    icon: 'headset',
    title: 'Kundenservice & Dokumentation',
    description: 'Professionelle Kundenberatung und nachvollziehbare Einsatzdokumentation.',
  },
];

const focusAreas = [
  'Heizungs- und Gasgeräte',
  'Wartung und Instandhaltung',
  'Fehlersuche und Störungsbehebung',
  'Fernwärmeanlagen',
  'Wohnungsstationen',
  'Technische Dokumentation',
  'Kundenberatung',
  'Kanal- und Rohrinspektion',
];

const iconMap: Record<string, typeof Wrench> = {
  wrench: Wrench,
  search: Search,
  flame: Flame,
  headset: Headphones,
};

export default function Home() {
  return (
    <div className="animate-fade-in">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="container-tech">
          <div className="grid items-center gap-8 py-12 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
            <div className="animate-fade-up">
              <p className="section-label">
                Servicetechnik · Heiztechnik · Gebäudetechnik
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl text-balance">
                Tufan Dönmezyürek
              </h1>
              <p className="mt-3 text-lg text-slate-600 sm:text-xl">
                Servicetechniker &amp; Installations- und Gebäudetechniker
              </p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-500">
                Technisches Verständnis, systematische Fehlersuche und zuverlässiger
                Service – von der Wartung und Reparatur bis zur professionellen
                Störungsbehebung.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/bewerbung" className="btn-primary">
                  Meine Bewerbung
                  <ArrowRight size={16} />
                </Link>
                <Link to="/lebenslauf" className="btn-secondary">
                  Lebenslauf ansehen
                  <FileText size={16} />
                </Link>
                <Link to="/qualifikationen" className="btn-ghost mt-1">
                  Qualifikationen
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="relative animate-fade-up animate-delay-200">
              <div className="relative overflow-hidden rounded-lg border border-slate-200 shadow-lg">
                <img
                  src={images.heizhaus}
                  alt="Heizhaus mit Heizungsanlage, Manometern und Rohrleitungen"
                  className="h-72 w-full object-cover sm:h-96 lg:h-[28rem]"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 flex items-center gap-2 rounded border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 shadow-md">
                <MapPin size={14} className="text-teal-700" />
                Wien, Österreich
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="container-narrow py-12 sm:py-16">
          <SectionTitle label="Profil" title="Technik ist mein Handwerk" />
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            Als ausgebildeter Installations- und Gebäudetechniker arbeite ich im
            technischen Kundendienst mit Schwerpunkt auf Wartung, Reparatur,
            Fehleranalyse und Störungsbehebung. Dabei verbinde ich praktische
            Erfahrung mit einer strukturierten und lösungsorientierten
            Arbeitsweise.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-12 sm:py-16">
        <div className="container-tech">
          <SectionTitle label="Kompetenzen" title="Technische Schwerpunkte" centered />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {competencies.map((c, i) => {
              const Icon = iconMap[c.icon] || Wrench;
              return (
                <div
                  key={i}
                  className="card-tech group animate-fade-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded bg-slate-100 border border-slate-200 text-teal-700 transition-colors group-hover:border-teal-600 group-hover:text-teal-800">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {c.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-12 sm:py-16">
        <div className="container-tech">
          <SectionTitle label="Erfahrung" title="Beruflicher Schwerpunkt" />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded border border-slate-200 bg-white px-4 py-3 transition-colors hover:border-teal-600/40"
              >
                <Gauge size={18} className="shrink-0 text-teal-700" />
                <span className="text-sm text-slate-600">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-14 sm:py-20">
        <div className="absolute inset-0 blueprint-grid opacity-50" />
        <div className="container-narrow relative text-center">
          <h2 className="heading-2 text-balance">Mehr über meinen beruflichen Werdegang</h2>
          <p className="mt-4 text-slate-500">
            Detaillierter Lebenslauf mit Berufserfahrung, Ausbildung und weiteren Kenntnissen.
          </p>
          <Link to="/lebenslauf" className="btn-primary mt-8">
            Lebenslauf öffnen
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
