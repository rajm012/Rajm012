import { Link } from 'react-router-dom';
import { profile } from '../data/site';
import Icon from './Icon';
import { nav, socials } from '../data/nav';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="container grid gap-8 py-10 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p className="font-serif text-xl">Raj Maurya</p>
          <p className="mt-1 max-w-sm text-sm text-muted">
            Mathematics &amp; Computing at IIT Mandi. Open to Development and Research roles.
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-muted transition-colors hover:text-fg">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={profile.resume} className="text-muted transition-colors hover:text-fg">
                Résumé
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 sm:items-end">
          <ul className="flex gap-1">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:bg-fg/5 hover:text-fg"
                >
                  <Icon name={s.icon} size={18} />
                </a>
              </li>
            ))}
          </ul>
          <p className="font-mono text-[11px] text-subtle">© {new Date().getFullYear()} Raj Maurya</p>
        </div>
      </div>
    </footer>
  );
}
