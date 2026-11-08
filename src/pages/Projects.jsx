import { useMemo, useState } from 'react';
import Icon from '../components/Icon';
import ProjectCard, { ProjectRow } from '../components/ProjectCard';
import { PageHead } from '../components/Section';
import { categories, featuredProjects, projects, projectYears, repositoryStats } from '../data/projects';
import { profile } from '../data/site';
import { useTitle } from '../lib/hooks';

export default function Projects() {
  useTitle('Projects');
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');

  const counts = useMemo(() => {
    const c = { All: projects.length };
    for (const p of projects) c[p.category] = (c[p.category] || 0) + 1;
    return c;
  }, []);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects
      .filter((p) => category === 'All' || p.category === category)
      .filter(
        (p) =>
          !q ||
          [p.title, p.repository, p.summary, p.category, ...(p.stack || [])].join(' ').toLowerCase().includes(q),
      )
      .sort((a, b) => categories.indexOf(a.category) - categories.indexOf(b.category) || b.year - a.year);
  }, [category, query]);

  return (
    <div className="container">
      <PageHead eyebrow={`${repositoryStats.total} repositories · ${projectYears[0]} — ${projectYears.at(-1)}`} title="Things I’ve built">
        Research code, products and the small tools I made because I needed them. Browse all {repositoryStats.public}{' '}
        public and {repositoryStats.private} private repositories below, starting with a few highlights.
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
            <p className="eyebrow mb-2">Repository archive</p>
            <h2 id="all" className="text-[1.75rem] leading-tight sm:text-3xl">
              All projects
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
                aria-label={`${c}, ${counts[c] || 0} repositories`}
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

        <p className="mb-3 mt-3 font-mono text-[11px] text-muted" role="status" aria-live="polite">
          Showing {shown.length} of {projects.length} repositories
        </p>

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
          Private repositories are listed with brief descriptions; their source code is not linked. Public code is on{' '}
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="link">
            GitHub
          </a>
          .
        </p>
      </section>
    </div>
  );
}
