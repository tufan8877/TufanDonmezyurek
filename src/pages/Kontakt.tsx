import PageHero from '@/components/PageHero';
import { Mail, Phone, MapPin, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Kontakt() {
  return (
    <div className="animate-fade-in">
      <PageHero
        label="Kontakt"
        title="Kontakt"
        subtitle="Interesse an meinem beruflichen Profil?"
      />

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="container-narrow">
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            Für berufliche Anfragen oder ein persönliches Gespräch bin ich gerne
            erreichbar.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="card-tech">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                Kontaktperson
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                Tufan Dönmezyürek
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                <MapPin size={16} className="text-teal-700" />
                Wien, Österreich
              </div>
            </div>

            <a
              href="mailto:tufandonmezyurek@gmail.com"
              className="card-tech group"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-slate-100 border border-slate-200 text-teal-700 transition-colors group-hover:border-teal-600">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    E-Mail
                  </p>
                  <p className="mt-0.5 text-sm text-slate-700 break-all">
                    tufandonmezyurek@gmail.com
                  </p>
                </div>
              </div>
            </a>

            <a
              href="tel:+436766166646"
              className="card-tech group"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-slate-100 border border-slate-200 text-teal-700 transition-colors group-hover:border-teal-600">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Telefon
                  </p>
                  <p className="mt-0.5 text-sm text-slate-700">0676 61 666 46</p>
                </div>
              </div>
            </a>

            <Link to="/lebenslauf" className="card-tech group">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-slate-100 border border-slate-200 text-teal-700 transition-colors group-hover:border-teal-600">
                  <FileText size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Unterlagen
                  </p>
                  <p className="mt-0.5 text-sm text-slate-700">
                    Lebenslauf ansehen
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:tufandonmezyurek@gmail.com" className="btn-primary">
              <Mail size={16} />
              E-Mail schreiben
            </a>
            <a href="tel:+436766166646" className="btn-secondary">
              <Phone size={16} />
              Anrufen
            </a>
            <Link to="/lebenslauf" className="btn-ghost mt-1">
              Lebenslauf ansehen
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
