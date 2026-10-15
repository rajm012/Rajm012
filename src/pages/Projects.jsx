import { useMemo, useState } from 'react';
import Icon from '../components/Icon';
import ProjectCard, { ProjectRow } from '../components/ProjectCard';
import { PageHead } from '../components/Section';
import { categories, featuredProjects, projects } from '../data/projects';
import { profile } from '../data/site';
import { useTitle } from '../lib/hooks';

const rest = projects.filter((p) => !p.featured);

export default function Projects() {
  useTitle('Projects');
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');

  const counts = useMemo(() => {
    const c = { All: rest.length };
    for (const p of rest) c[p.category] = (c[p.category] || 0) + 1;
    return c;
  }, []);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rest
      .filter((p) => category === 'All' || p.category === category)
      .filter(
        (p) =>
          !q ||
          [p.title, p.summary, p.category, ...(p.stack || [])].join(' ').toLowerCase().includes(q),
      )
      .sort((a, b) => categories.indexOf(a.category) - categories.indexOf(b.category) || b.year - a.year);
  }, [category, query]);

  return (
    <div className="container">
      <PageHead eyebrow={`${projects.length} projects · 2024 — 2026`} title="Things I’ve built">
        Research code, products and the small tools I made because I needed them. The six below are the ones I’d show
        first; everything else is further down.
      </PageHead>

      <section aria-labelledby="featured">
        <h2 id="featured" className="sr-only">
          Featured projects
        </h2>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p) => (
            <li key={p.slug}>
              <ProjectCard project={p} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="all" className="pt-20">
        <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow mb-2">Archive</p>
            <h2 id="all" className="text-[1.75rem] leading-tight sm:text-3xl">
              Everything else
            </h2>
          </div>
          <label className="relative block w-full lg:w-72">
            <span className="sr-only">Search projects</span>
            <Icon name="search" size={15} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-subtle" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or stack"
              className="field rounded-full pl-10"
            />
          </label>
        </div>

        <div className="-mx-5 mb-2 overflow-x-auto px-5 sm:mx-0 sm:px-0" role="group" aria-label="Filter by category">
          <div className="flex w-max gap-2 pb-2 sm:w-auto sm:flex-wrap">
            {['All', ...categories].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                className={`whitespace-nowrap rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                  category === c
                    ? 'border-fg bg-fg text-bg'
                    : 'border-line text-muted hover:border-subtle hover:text-fg'
                }`}
              >
                {c}
                <span className={`ml-1.5 font-mono text-[11px] ${category === c ? 'text-bg/70' : 'text-subtle'}`}>
                  {counts[c] || 0}
                </span>
              </button>
            ))}
          </div>
        </div>

        {shown.length ? (
          <ul className="border-t border-line">
            {shown.map((p) => (
              <ProjectRow key={p.slug} project={p} />
            ))}
          </ul>
        ) : (
          <div className="border-t border-line py-16 text-center">
            <p className="text-muted">Nothing matches “{query}”.</p>
            <button type="button" className="btn mt-4" onClick={() => { setQuery(''); setCategory('All'); }}>
              Clear filters
            </button>
          </div>
        )}

        <p className="mt-10 text-sm text-muted">
          Private research code is described here but not linked. More on{' '}
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="link">
            GitHub
          </a>
          .
        </p>
      </section>
    </div>
  );
}
