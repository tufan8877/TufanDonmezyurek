import { Link } from 'react-router-dom';

const footerNav = [
  { path: '/bewerbung', label: 'Bewerbung' },
  { path: '/lebenslauf', label: 'Lebenslauf' },
  { path: '/qualifikationen', label: 'Qualifikationen' },
  { path: '/zertifikate', label: 'Zertifikate' },
  { path: '/lehrabschluss', label: 'Lehrabschluss' },
  { path: '/zeugnisse', label: 'Zeugnisse' },
  { path: '/kontakt', label: 'Kontakt' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-tech py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Tufan Dönmezyürek
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Servicetechniker · Installations- &amp; Gebäudetechnik
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Navigation
            </p>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2">
              {footerNav.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm text-slate-500 transition-colors hover:text-teal-700"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Rechtliches
            </p>
            <nav className="flex flex-col gap-2">
              <Link
                to="/impressum"
                className="text-sm text-slate-500 transition-colors hover:text-teal-700"
              >
                Impressum
              </Link>
              <Link
                to="/datenschutz"
                className="text-sm text-slate-500 transition-colors hover:text-teal-700"
              >
                Datenschutz
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 tech-line" />

        <p className="mt-6 text-center text-xs text-slate-400">
          © {year} Tufan Dönmezyürek
        </p>
      </div>
    </footer>
  );
}
