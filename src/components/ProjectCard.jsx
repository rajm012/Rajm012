import Cover from './Cover';
import Icon from './Icon';

export function ProjectLinks({ project, className = '' }) {
  const { links = {}, private: isPrivate } = project;
  const items = [
    links.paper && { href: links.paper, label: 'Paper', icon: 'paper' },
    links.code && { href: links.code, label: 'Code', icon: 'github' },
    links.demo && { href: links.demo, label: 'Live', icon: 'external' },
  ].filter(Boolean);

  if (!items.length) {
    return (
      <span className={`inline-flex items-center gap-1.5 font-mono text-[11px] text-subtle ${className}`}>
        <Icon name="lock" size={12} />
        {isPrivate ? 'Private work' : 'Not public yet'}
      </span>
    );
  }

  return (
    <div className={`flex flex-wrap gap-x-4 gap-y-1 ${className}`}>
      {items.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent"
          aria-label={`${project.title} — ${l.label}`}
        >
          <Icon name={l.icon} size={14} />
          {l.label}
        </a>
      ))}
    </div>
  );
}

export default function ProjectCard({ project }) {
  const { slug, title, year, category, summary, stack = [], image, badge, team } = project;
  return (
    <article className="card group flex h-full flex-col overflow-hidden transition-shadow hover:shadow-[0_6px_24px_-12px_rgb(0_0_0/0.18)]">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-bg">
        {image ? (
          <img
            src={image}
            alt={`${title} screenshot`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <Cover seed={slug} />
        )}
        {badge && (
          <span className="absolute left-3 top-3 rounded-full border border-line bg-surface/90 px-2.5 py-1 font-mono text-[10.5px] text-fg backdrop-blur">
            {badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="eyebrow flex items-center justify-between">
          <span>{category}</span>
          <span>{year}</span>
        </div>
        <h3 className="mt-2 text-[1.4rem] leading-tight">{title}</h3>
        {team && <p className="mt-0.5 text-xs text-subtle">{team}</p>}
        <p className="mt-2 flex-1 text-[14.5px] leading-relaxed text-muted">{summary}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Built with">
          {stack.map((s) => (
            <li key={s} className="chip">
              {s}
            </li>
          ))}
        </ul>
        <ProjectLinks project={project} className="mt-4 border-t border-line pt-4" />
      </div>
    </article>
  );
}

export function ProjectRow({ project }) {
  const { title, year, category, summary, stack = [] } = project;
  return (
    <li className="grid gap-x-6 gap-y-2 border-b border-line py-5 sm:grid-cols-[minmax(0,13rem)_minmax(0,1fr)_auto]">
      <div>
        <h3 className="font-sans text-[15px] font-semibold leading-snug">{title}</h3>
        <p className="eyebrow mt-1">
          {category} · {year}
        </p>
      </div>
      <div className="min-w-0">
        <p className="text-[14.5px] text-muted">{summary}</p>
        <p className="mt-1.5 font-mono text-[11px] text-subtle">{stack.join(' · ')}</p>
      </div>
      <ProjectLinks project={project} className="sm:justify-end sm:pt-0.5" />
    </li>
  );
}
