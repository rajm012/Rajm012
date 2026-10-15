import { useForm, ValidationError } from '@formspree/react';
import Icon from '../components/Icon';
import { PageHead } from '../components/Section';
import { socials } from '../data/nav';
import { profile } from '../data/site';
import { useTitle } from '../lib/hooks';

function Field({ id, label, required, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
        {required && <span className="ml-0.5 text-accent">*</span>}
      </label>
      {children}
    </div>
  );
}

export default function Contact() {
  useTitle('Contact');
  const [state, handleSubmit, reset] = useForm('xaewoljb');

  return (
    <div className="container">
      <PageHead eyebrow="Contact" title="Let’s talk">
        Research collaborations, Full-time roles or just a Hard problem - email is fastest, and the form below lands in the same inbox.
      </PageHead>

      <div className="grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
        <div className="card p-6 sm:p-8">
          {state.succeeded ? (
            <div className="py-10 text-center" role="status">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-accent-soft text-accent">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="mt-4 text-2xl">Message sent</h2>
              <p className="mt-2 text-muted">Thanks for writing - I’ll reply soon.</p>
              <button type="button" className="btn mt-6" onClick={reset}>
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Name" required>
                  <input id="name" name="name" type="text" required autoComplete="name" className="field" disabled={state.submitting} />
                </Field>
                <Field id="email" label="Email" required>
                  <input id="email" name="email" type="email" required autoComplete="email" className="field" disabled={state.submitting} />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-sm text-red-600 dark:text-red-400" />
                </Field>
              </div>
              <Field id="subject" label="Subject">
                <input id="subject" name="subject" type="text" className="field" disabled={state.submitting} />
              </Field>
              <Field id="message" label="Message" required>
                <textarea id="message" name="message" rows="6" required className="field resize-y" disabled={state.submitting} />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-sm text-red-600 dark:text-red-400" />
              </Field>
              <ValidationError errors={state.errors} className="text-sm text-red-600 dark:text-red-400" />
              <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={state.submitting}>
                {state.submitting ? 'Sending…' : 'Send message'}
                {!state.submitting && <Icon name="arrow" size={15} />}
              </button>
            </form>
          )}
        </div>

        <aside className="space-y-8">
          <div>
            <p className="eyebrow mb-2">Email</p>
            <a href={`mailto:${profile.email}`} className="link break-all font-serif text-xl">
              {profile.email}
            </a>
          </div>
          <div>
            <p className="eyebrow mb-3">Elsewhere</p>
            <ul className="divide-y divide-line border-y border-line">
              {socials
                .filter((s) => s.icon !== 'mail')
                .map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-3 text-[15px]"
                    >
                      <span className="flex items-center gap-2.5">
                        <Icon name={s.icon} size={16} className="text-muted" />
                        {s.label}
                      </span>
                      <Icon name="external" size={14} className="text-subtle transition-colors group-hover:text-accent" />
                    </a>
                  </li>
                ))}
              <li>
                <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between py-3 text-[15px]">
                  <span className="flex items-center gap-2.5">
                    <Icon name="download" size={16} className="text-muted" />
                    Résumé (PDF)
                  </span>
                  <Icon name="external" size={14} className="text-subtle transition-colors group-hover:text-accent" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-2">Based in</p>
            <p>{profile.location}</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
