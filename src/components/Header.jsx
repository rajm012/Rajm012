import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Icon from './Icon';
import { nav } from '../data/nav';

function ThemeButton({ dark, toggle }) {
  return (
    <button
      type="button"
      onClick={toggle}
      className="grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:bg-fg/5 hover:text-fg"
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={dark ? 'Light theme' : 'Dark theme'}
    >
      <Icon name={dark ? 'sun' : 'moon'} size={17} />
    </button>
  );
}

export default function Header({ dark, toggle }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const linkClass = ({ isActive }) =>
    `rounded-full px-3 py-1.5 text-sm transition-colors ${
      isActive ? 'text-fg bg-fg/[0.06]' : 'text-muted hover:text-fg'
    }`;

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur-md supports-[backdrop-filter]:bg-bg/70">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="group flex items-center gap-2.5" aria-label="Raj Maurya — home">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-accent font-serif text-lg leading-none text-accent-fg">
              R
            </span>
            <span className="font-serif text-[1.15rem] font-medium tracking-tight">Raj Maurya</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} className={linkClass}>
                {n.label}
              </NavLink>
            ))}
            <span className="mx-1 h-5 w-px bg-line" aria-hidden="true" />
            <ThemeButton dark={dark} toggle={toggle} />
          </nav>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeButton dark={dark} toggle={toggle} />
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="grid h-9 w-9 place-items-center rounded-full text-fg hover:bg-fg/5"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              <Icon name={open ? 'close' : 'menu'} size={20} />
            </button>
          </div>
        </div>
      </header>
      {open && (
        <div id="mobile-nav" className="fixed inset-x-0 top-16 bottom-0 z-50 overflow-y-auto bg-bg md:hidden">
          <nav className="container flex flex-col pt-4" aria-label="Main">
            {[{ to: '/', label: 'Home' }, ...nav].map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end
                className={({ isActive }) =>
                  `border-b border-line py-4 font-serif text-2xl ${isActive ? 'text-accent' : 'text-fg'}`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
