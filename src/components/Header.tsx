import { NavLink, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Start' },
  { path: '/bewerbung', label: 'Bewerbung' },
  { path: '/lebenslauf', label: 'Lebenslauf' },
  { path: '/qualifikationen', label: 'Qualifikationen' },
  { path: '/zertifikate', label: 'Zertifikate' },
  { path: '/lehrabschluss', label: 'Lehrabschluss' },
  { path: '/zeugnisse', label: 'Zeugnisse' },
  { path: '/kontakt', label: 'Kontakt' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-white shadow-sm border-b border-slate-200'
          : 'bg-white/95 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="container-tech">
        <div className="flex h-16 items-center justify-between lg:h-[4.5rem]">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="group flex min-w-0 flex-col"
          >
            <span className="truncate text-sm font-bold uppercase tracking-wider text-slate-900 transition-colors group-hover:text-teal-700 sm:text-base">
              Tufan Dönmezyürek
            </span>
            <span className="truncate text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400 sm:text-[11px]">
              Servicetechnik · Gebäudetechnik
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded transition-colors duration-200 ${
                    isActive
                      ? 'text-teal-700'
                      : 'text-slate-600 hover:text-slate-900'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="ml-3 flex shrink-0 items-center justify-center rounded p-2 text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 lg:hidden"
            aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="fixed inset-x-0 top-16 bottom-0 z-[60] overflow-y-auto bg-white lg:hidden">
          <div className="container-tech py-5">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block w-full rounded-lg border px-4 py-4 text-base font-semibold transition-colors ${
                      isActive
                        ? 'border-teal-200 bg-teal-50 text-teal-800'
                        : 'border-transparent bg-white text-slate-700 hover:border-slate-200 hover:bg-slate-50 hover:text-slate-900'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
