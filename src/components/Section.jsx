import { Link } from 'react-router-dom';
import Icon from './Icon';

export function SectionHead({ eyebrow, title, to, action }) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
      <div>
        {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
        <h2 className="text-[1.75rem] leading-tight sm:text-3xl">{title}</h2>
      </div>
      {to && (
        <Link to={to} className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-fg">
          {action}
          <Icon name="arrow" size={14} className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  );
}

export function PageHead({ eyebrow, title, children }) {
  return (
    <header className="animate-rise pb-10 pt-12 sm:pb-14 sm:pt-20">
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h1 className="max-w-3xl text-[2.4rem] leading-[1.08] sm:text-5xl">{title}</h1>
      {children && <div className="mt-5 max-w-prose text-[1.05rem] text-muted sm:text-lg">{children}</div>}
    </header>
  );
}
