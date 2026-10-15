import portrait from '../assets/portrait.webp';
import Icon from '../components/Icon';
import { PageHead } from '../components/Section';
import { certificates, education, experience, interests, positions, profile, skills } from '../data/site';
import { useTitle } from '../lib/hooks';

function Block({ id, title, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="scroll-mt-24 grid gap-6 border-t border-line py-12 md:grid-cols-[13rem_1fr] md:gap-10">
      <h2 id={`${id}-h`} className="eyebrow pt-1">
        {title}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

export default function About() {
  useTitle('About');
  return (
    <div className="container">
      <div className="grid gap-10 md:grid-cols-[1fr_15rem] md:gap-16">
        <PageHead eyebrow="About" title="Hi, I’m Raj.">
          <div className="space-y-4">
            <p>
              I’m a final-year Mathematics &amp; Computing student at IIT Mandi. I started coding in my first year out of plain curiosity, and it turned into a habit of building — first small web apps, then security tools, then models.
            </p>
            <p>
              These days most of my time goes into physics-informed neural networks: networks that learn the solution of a differential equation from the equation itself. I like the part where the mathematics decides the architecture — a change of variables that removes a singularity, an ansatz that makes a boundary condition exact. Alongside that I study quantitative finance and keep shipping full-stack products, because building something people use is how I recharge.
            </p>
            <p>
              Away from the keyboard I read Hindi sahitya and philosophy, watch far too many films, and run or cycle when the Mandi weather allows.
            </p>
          </div>
        </PageHead>
        <aside className="hidden pt-20 md:block">
          <img
            src={portrait}
            alt="Portrait of Raj Maurya"
            width="900"
            height="1200"
            className="aspect-[4/5] w-full rounded-2xl border border-line object-cover"
          />
          <dl className="mt-5 space-y-3 text-sm">
            <div>
              <dt className="eyebrow">Based in</dt>
              <dd className="mt-0.5">{profile.location}</dd>
            </div>
            <div>
              <dt className="eyebrow">Email</dt>
              <dd className="mt-0.5">
                <a href={`mailto:${profile.email}`} className="link break-all">
                  {profile.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Languages</dt>
              <dd className="mt-0.5">English, Hindi</dd>
            </div>
          </dl>
        </aside>
      </div>

      <div className="mb-4 flex flex-wrap gap-3">
        <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          <Icon name="download" size={15} />
          Download résumé
        </a>
        <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="btn">
          <Icon name="linkedin" size={15} />
          LinkedIn
        </a>
      </div>

      <Block id="experience" title="Experience">
        <ol className="space-y-8">
          {experience.map((e) => (
            <li key={e.role} className="grid gap-1 sm:grid-cols-[1fr_auto] sm:gap-6">
              <div>
                <h3 className="font-sans text-base font-semibold leading-snug">{e.role}</h3>
                <p className="text-sm text-muted">{e.org}</p>
                <ul className="mt-2 space-y-1.5">
                  {e.points.map((pt) => (
                    <li key={pt} className="relative pl-4 text-[14.5px] text-muted before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-subtle">
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="order-first font-mono text-[11px] text-muted sm:order-none sm:pt-1">{e.period}</p>
            </li>
          ))}
          {positions.map((p) => (
            <li key={p.role} className="grid gap-1 sm:grid-cols-[1fr_auto] sm:gap-6">
              <div>
                <h3 className="font-sans text-base font-semibold leading-snug">{p.role}</h3>
                <p className="text-sm text-muted">{p.org}</p>
              </div>
              <p className="order-first font-mono text-[11px] text-muted sm:order-none sm:pt-1">{p.period}</p>
            </li>
          ))}
        </ol>
      </Block>

      <Block id="education" title="Education">
        <ol className="space-y-8">
          {education.map((e) => (
            <li key={e.degree}>
              <div className="grid gap-1 sm:grid-cols-[1fr_auto] sm:gap-6">
                <div>
                  <h3 className="font-sans text-base font-semibold leading-snug">{e.degree}</h3>
                  <p className="text-sm text-muted">
                    {e.school} · <span className="text-fg">{e.detail}</span>
                  </p>
                </div>
                <p className="order-first font-mono text-[11px] text-muted sm:order-none sm:pt-1">{e.period}</p>
              </div>
              {e.courses && (
                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Coursework">
                  {e.courses.map((c) => (
                    <li key={c} className="chip">
                      {c}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </Block>

      <Block id="skills" title="Skills">
        <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {skills.map((s) => (
            <div key={s.group}>
              <dt className="text-sm font-semibold">{s.group}</dt>
              <dd className="mt-1.5 text-[14.5px] leading-relaxed text-muted">{s.items.join(' · ')}</dd>
            </div>
          ))}
        </dl>
      </Block>

      <Block id="certificates" title="Certificates">
        <ul className="divide-y divide-line border-y border-line">
          {certificates.map((c) => (
            <li key={c.title}>
              <a
                href={c.file}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 py-3.5"
              >
                <span>
                  <span className="text-[15px] font-medium transition-colors group-hover:text-accent">{c.title}</span>
                  <span className="ml-2 text-sm text-muted">{c.issuer}</span>
                </span>
                <Icon name="external" size={14} className="shrink-0 text-subtle transition-colors group-hover:text-accent" />
              </a>
            </li>
          ))}
        </ul>
      </Block>

      <Block id="beyond" title="Beyond code">
        <ul className="flex flex-wrap gap-2">
          {interests.map((i) => (
            <li key={i} className="rounded-full border border-line px-3.5 py-1.5 text-sm">
              {i}
            </li>
          ))}
        </ul>
      </Block>
    </div>
  );
}
