import Icon from '../components/Icon';
import { PageHead } from '../components/Section';
import { interestsResearch, papers, studies } from '../data/research';
import { profile } from '../data/site';
import { useTitle } from '../lib/hooks';

const bibtex = `@article{maurya2026sagepinn,
  title   = {SAGE-PINN: A Singularity-free Axisymmetric Geometry-Encoded Physics-Informed Neural Network for Axisymmetric Multiphysics Flow in Cylindrical Coordinates},
  author  = {Maurya, Raj and Akhuli, Joyprakash and Pandey, Doyel},
  journal = {arXiv preprint arXiv:2610.10449},
  year    = {2026}
}`;

function Authors({ list }) {
  return list.map((a, i) => (
    <span key={a}>
      {i > 0 && ', '}
      <span className={a === profile.name ? 'font-medium text-fg' : ''}>{a}</span>
    </span>
  ));
}

export default function Research() {
  useTitle('Research');
  return (
    <div className="container">
      <PageHead eyebrow="Research" title="Neural networks that respect the physics">
        I work on physics-informed neural networks — models trained on the governing equations themselves rather than
        on labelled data — mostly for flow and heat transfer, and occasionally for markets.
      </PageHead>

      <section aria-labelledby="papers">
        <h2 id="papers" className="eyebrow mb-4">
          Papers
        </h2>
        <ol className="space-y-5">
          {papers.map((p) => (
            <li key={p.slug} className="card p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`rounded-full px-2.5 py-0.5 font-mono text-[11px] ${
                    p.status === 'Preprint' ? 'bg-accent-soft text-accent' : 'border border-line text-muted'
                  }`}
                >
                  {p.status}
                </span>
                <span className="font-mono text-[11px] text-muted">{p.year}</span>
              </div>
              <h3 className="mt-3 max-w-3xl text-[1.4rem] leading-snug sm:text-[1.65rem]">{p.title}</h3>
              <p className="mt-2 text-sm text-muted">
                <Authors list={p.authors} />
              </p>
              <p className="mt-1 text-sm italic text-muted">{p.venue}</p>
              <p className="mt-4 max-w-prose text-[15px] text-muted">{p.summary}</p>
              {p.links.paper ? (
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href={p.links.paper} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <Icon name="paper" size={15} />
                    arXiv
                  </a>
                  <a href={p.links.pdf} target="_blank" rel="noopener noreferrer" className="btn">
                    <Icon name="download" size={15} />
                    PDF
                  </a>
                </div>
              ) : (
                <p className="mt-5 inline-flex items-center gap-1.5 font-mono text-[11px] text-subtle">
                  <Icon name="lock" size={12} />
                  Manuscript and code are private until publication
                </p>
              )}
            </li>
          ))}
        </ol>

        <details className="group mt-5 rounded-xl border border-line">
          <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-3.5 text-sm font-medium text-muted hover:text-fg">
            Cite SAGE-PINN
            <span className="font-mono text-xs transition-transform group-open:rotate-45">+</span>
          </summary>
          <pre className="overflow-x-auto border-t border-line px-5 py-4 font-mono text-[12px] leading-relaxed text-muted">
            {bibtex}
          </pre>
        </details>
      </section>

      <section aria-labelledby="studies" className="pt-20">
        <h2 id="studies" className="eyebrow mb-4">
          Replications &amp; studies
        </h2>
        <ul className="border-t border-line">
          {studies.map((s) => (
            <li key={s.title} className="grid gap-x-8 gap-y-2 border-b border-line py-6 md:grid-cols-[14rem_1fr_auto]">
              <div>
                <p className="font-mono text-[11px] text-accent">
                  {s.kind} · {s.year}
                </p>
                <h3 className="mt-1 font-sans text-[15.5px] font-semibold leading-snug">{s.title}</h3>
              </div>
              <p className="max-w-prose text-[14.5px] text-muted">{s.summary}</p>
              <div className="md:text-right">
                {s.code ? (
                  <a
                    href={s.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-accent"
                  >
                    <Icon name="github" size={14} />
                    Code
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-subtle">
                    <Icon name="lock" size={12} />
                    Private
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="interests" className="grid gap-8 pt-20 md:grid-cols-[14rem_1fr]">
        <h2 id="interests" className="eyebrow">
          Interests
        </h2>
        <ul className="flex flex-wrap gap-2">
          {interestsResearch.map((i) => (
            <li key={i} className="rounded-full border border-line px-3.5 py-1.5 text-sm">
              {i}
            </li>
          ))}
        </ul>
      </section>

      <section className="pt-12">
        <p className="text-sm text-muted">
          Find my work on{' '}
          <a href={profile.links.orcid} target="_blank" rel="noopener noreferrer" className="link">
            ORCID
          </a>{' '}
          or reach me at{' '}
          <a href={`mailto:${profile.email}`} className="link">
            {profile.email}
          </a>
          .
        </p>
      </section>
    </div>
  );
}
