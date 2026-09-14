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
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200'
          : 'bg-white/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="container-tech">
        <div className="flex h-16 items-center justify-between lg:h-[4.5rem]">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="group flex flex-col"
          >
            <span className="text-sm font-bold uppercase tracking-wider text-slate-900 transition-colors group-hover:text-teal-700 sm:text-base">
              Tufan Dönmezyürek
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400 sm:text-[11px]">
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
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center justify-center rounded p-2 text-slate-600 transition-colors hover:text-slate-900"
            aria-label="Menü"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-lg animate-slide-down">
          <div className="container-tech py-4">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `px-4 py-3 text-sm font-medium rounded transition-colors ${
                      isActive
                        ? 'text-teal-700 bg-teal-50 border-l-2 border-teal-600'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 border-l-2 border-transparent'
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
