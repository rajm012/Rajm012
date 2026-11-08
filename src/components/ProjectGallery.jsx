export default function ProjectGallery({ project }) {
  return (
    <section id={project.slug} aria-labelledby={`${project.slug}-gallery`} className="scroll-mt-24 pt-20">
      <div className="mb-6 max-w-prose">
        <p className="eyebrow mb-2">Desktop companions</p>
        <h2 id={`${project.slug}-gallery`} className="text-[1.75rem] leading-tight sm:text-3xl">
          Meet Bolt, your Desktop Buddy
        </h2>
        <p className="mt-3 text-muted">
          A little robot that walks, dances and perches on your windows, with local reminders and a focus timer.
          Open a pose for a closer look.
        </p>
      </div>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4" aria-label="Desktop Buddy screenshots">
        {project.gallery.map((shot) => (
          <li key={shot.src}>
            <a
              href={shot.src}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View Desktop Buddy — ${shot.caption}`}
              className="card group block overflow-hidden transition-colors hover:border-accent"
            >
              <img
                src={shot.src}
                alt={shot.alt}
                width="210"
                height="310"
                loading="lazy"
                decoding="async"
                className="aspect-[21/31] w-full bg-white object-contain"
              />
              <p className="border-t border-line px-3 py-2.5 font-mono text-xs text-muted group-hover:text-accent">
                {shot.caption}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
