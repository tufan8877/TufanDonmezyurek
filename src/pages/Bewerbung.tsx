import PageHero from '@/components/PageHero';
import { Briefcase, MapPin, Car } from 'lucide-react';

const infoBox = [
  { icon: Briefcase, label: 'Berufsbereich', value: 'Servicetechnik / Gebäudetechnik' },
  { icon: MapPin, label: 'Standort', value: 'Wien' },
  { icon: Car, label: 'Führerschein', value: 'Klasse B' },
];

export default function Bewerbung() {
  return (
    <div className="animate-fade-in">
      <PageHero
        label="Bewerbung"
        title="Allgemeine Bewerbung als Servicetechniker"
        subtitle="Technischer Service · Heiztechnik · Gebäudetechnik"
      />

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="container-tech">
          <div className="grid gap-8 lg:grid-cols-[1fr_18rem] lg:gap-12">
            <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              <div className="mx-auto max-w-prose-narrow">
                <p className="text-sm text-slate-700">Sehr geehrte Damen und Herren,</p>

                <div className="mt-4 space-y-4 text-[0.95rem] leading-relaxed text-slate-600">
                  <p>
                    als ausgebildeter Installations- und Gebäudetechniker mit
                    praktischer Erfahrung im technischen Kundendienst möchte ich
                    mich Ihnen als engagierter Servicetechniker vorstellen.
                  </p>
                  <p>
                    Derzeit bin ich als Servicetechniker und Installateur tätig. Zu
                    meinen täglichen Aufgaben zählen die Wartung, Reparatur und
                    Störungsbehebung von Heizungs- und Gasgeräten verschiedener
                    Hersteller sowie die eigenständige Fehlersuche und Behebung
                    technischer Störungen.
                  </p>
                  <p>
                    Im Rahmen meiner bisherigen Tätigkeit konnte ich außerdem
                    praktische Erfahrungen mit Fernwärmeanlagen,
                    Wohnungsstationen und unterschiedlichen Komponenten der
                    technischen Gebäudeausrüstung sammeln.
                  </p>
                  <p>
                    Bei technischen Störungen gehe ich strukturiert vor: Ich
                    analysiere die Anlage, lokalisiere mögliche Fehlerquellen und
                    erarbeite eine technisch sinnvolle und nachhaltige Lösung.
                    Dabei gehören sowohl selbstständiges Arbeiten als auch der
                    professionelle Umgang mit Kunden zu meinem Arbeitsalltag.
                  </p>
                  <p>
                    Durch technische Schulungen, unter anderem im Bereich
                    moderner Heiztechnik, konnte ich mein Fachwissen laufend
                    erweitern.
                  </p>
                  <p>
                    Meine Arbeitsweise zeichnet sich durch Zuverlässigkeit,
                    technisches Verständnis, Lösungsorientierung und ein hohes
                    Verantwortungsbewusstsein aus. Besonders wichtig sind mir
                    eine saubere Arbeitsausführung, eine nachvollziehbare
                    Dokumentation sowie ein professioneller Umgang mit Kunden
                    und Kollegen.
                  </p>
                  <p>
                    Ich möchte meine praktische Erfahrung im technischen Service
                    und mein Fachwissen in der Heizungs- und Gebäudetechnik
                    langfristig weiterentwickeln und neue technische Aufgaben
                    und Verantwortungsbereiche übernehmen.
                  </p>
                  <p>Über die Möglichkeit eines persönlichen Gesprächs freue ich mich.</p>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-slate-700">Mit freundlichen Grüßen</p>
                  <p className="mt-3 text-base font-semibold text-slate-900">
                    Tufan Dönmezyürek
                  </p>
                </div>
              </div>
            </article>

            <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-teal-700">
                  Kurzprofil
                </p>
                <div className="space-y-5">
                  {infoBox.map((item, i) => (
                    <div key={i}>
                      <div className="flex items-center gap-2 text-slate-400">
                        <item.icon size={16} className="text-teal-700" />
                        <span className="text-xs font-medium uppercase tracking-wider">
                          {item.label}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm text-slate-700">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
