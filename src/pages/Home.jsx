import { Link } from 'react-router-dom';
import portrait from '../assets/portrait.webp';
import Icon from '../components/Icon';
import ProjectCard from '../components/ProjectCard';
import { SectionHead } from '../components/Section';
import { socials } from '../data/nav';
import { featuredProjects, projects } from '../data/projects';
import { papers } from '../data/research';
import { achievements, experience, now, profile } from '../data/site';
import { useTitle } from '../lib/hooks';

export default function Home() {
  useTitle();
  const paper = papers[0];

  return (
    <>
      {/* Hero */}
      <section className="container grid items-center gap-10 pb-16 pt-10 sm:pt-16 md:grid-cols-[minmax(0,1fr)_17rem] md:gap-16 md:pb-24 md:pt-24 lg:grid-cols-[minmax(0,1fr)_19rem]">
        <div className="animate-rise">
          <img
            src={portrait}
            alt=""
            width="72"
            height="72"
            className="mb-7 h-[72px] w-[72px] rounded-full border border-line object-cover md:hidden"
          />
          <p className="eyebrow mb-4 !text-accent">{profile.role}</p>
          <h1 className="text-[2.35rem] leading-[1.06] sm:text-5xl lg:text-[3.6rem]">{profile.headline}</h1>
          <p className="mt-6 max-w-prose text-[1.05rem] text-muted sm:text-lg">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/projects" className="btn btn-primary">
              See my work
              <Icon name="arrow" size={15} />
            </Link>
            <a href={profile.resume} className="btn" target="_blank" rel="noopener noreferrer">
              <Icon name="download" size={15} />
              Résumé
            </a>
            <ul className="ml-1 flex items-center gap-0.5">
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
          </div>
        </div>
        <figure className="hidden animate-rise [animation-delay:120ms] md:block">
          <img
            src={portrait}
            alt="Portrait of Raj Maurya"
            width="900"
            height="1200"
            className="aspect-[4/5] w-full rounded-2xl border border-line object-cover"
          />
          <figcaption className="mt-3 flex items-center gap-1.5 font-mono text-[11px] text-subtle">
            <Icon name="pin" size={12} />
            {profile.location}
          </figcaption>
        </figure>
      </section>

      {/* Now */}
      <section className="border-y border-line bg-surface/60">
        <div className="container grid gap-6 py-8 md:grid-cols-[8rem_1fr]">
          <p className="eyebrow pt-0.5">Currently</p>
          <ul className="grid gap-x-10 gap-y-4 md:grid-cols-3">
            {now.map((n) => (
              <li key={n.label}>
                <p className="font-mono text-[11px] text-accent">{n.label}</p>
                <p className="mt-1 text-[14.5px] leading-relaxed text-fg/85">{n.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Research */}
      <section className="container pt-20 sm:pt-24">
        <SectionHead eyebrow="Research" title="Selected research" to="/research" action="All research" />
        <article className="card grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_15rem] lg:gap-12">
          <div>
            <p className="eyebrow">
              {paper.status} · {paper.year}
            </p>
            <h3 className="mt-3 text-[1.45rem] leading-snug sm:text-[1.7rem]">{paper.title}</h3>
            <p className="mt-2 text-sm text-muted">
              {paper.authors.map((a, i) => (
                <span key={a}>
                  {i > 0 && ', '}
                  <span className={a === profile.name ? 'font-medium text-fg' : ''}>{a}</span>
                </span>
              ))}
            </p>
            <p className="mt-4 max-w-prose text-[15px] text-muted">{paper.summary}</p>
          </div>
          <div className="flex flex-col justify-between gap-6 border-line lg:border-l lg:pl-8">
            <dl className="grid grid-cols-3 gap-4 lg:grid-cols-1">
              {[
                ['40', 'nanofluid cases'],
                ['1.6%', 'velocity error'],
                ['0', 'labelled data'],
              ].map(([v, k]) => (
                <div key={k}>
                  <dt className="sr-only">{k}</dt>
                  <dd className="font-serif text-3xl leading-none">{v}</dd>
                  <dd className="mt-1 font-mono text-[11px] text-muted">{k}</dd>
                </div>
              ))}
            </dl>
            <a href={paper.links.paper} target="_blank" rel="noopener noreferrer" className="btn self-start">
              <Icon name="paper" size={15} />
              Read on arXiv
            </a>
          </div>
        </article>
      </section>

      {/* Projects */}
      <section className="container pt-20 sm:pt-24">
        <SectionHead eyebrow="Projects" title="Selected work" to="/projects" action={`All ${projects.length} projects`} />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p) => (
            <li key={p.slug}>
              <ProjectCard project={p} />
            </li>
          ))}
        </ul>
      </section>

      {/* Experience + highlights */}
      <section className="container grid gap-14 pt-20 sm:pt-24 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div>
          <SectionHead eyebrow="Experience" title="Where I’ve worked" to="/about" action="More about me" />
          <ol className="relative border-l border-line">
            {experience.map((e) => (
              <li key={e.role} className="relative pb-8 pl-6 last:pb-0">
                <span className="absolute -left-[4.5px] top-2 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                <p className="font-mono text-[11px] text-muted">{e.period}</p>
                <h3 className="mt-1 font-sans text-[15.5px] font-semibold leading-snug">{e.role}</h3>
                <p className="text-sm text-muted">{e.org}</p>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <SectionHead eyebrow="Highlights" title="Recognition" />
          <ul className="divide-y divide-line border-y border-line">
            {achievements.map((a) => (
              <li key={a.title} className="py-4">
                <p className="text-[15px] font-medium">{a.title}</p>
                <p className="mt-0.5 text-sm text-muted">{a.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact band */}
      <section className="container pt-20 sm:pt-24">
        <div className="card flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="text-[1.75rem] leading-tight sm:text-3xl">Working on something hard?</h2>
            <p className="mt-2 max-w-prose text-muted">
              I'm open to research collaborations and full-time roles in Development, ML, scientific computing and engineering.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary shrink-0">
            Get in touch
            <Icon name="arrow" size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
