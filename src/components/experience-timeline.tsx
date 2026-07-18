import { ExperienceEntry } from "@/data/portfolio";

type ExperienceTimelineProps = {
  entries: ExperienceEntry[];
};

export function ExperienceTimeline({ entries }: ExperienceTimelineProps) {
  return (
    <div className="space-y-6">
      {entries.map((entry) => (
        <article className="timeline-card" key={`${entry.role}-${entry.dates}`}>
          <div className="timeline-accent" aria-hidden="true" />
          <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="section-eyebrow">{entry.dates}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{entry.role}</h3>
              <p className="mt-2 text-sm text-white/74">{entry.organization}</p>
              <p className="mt-1 text-sm text-white/55">{entry.location}</p>
            </div>
            <div>
              <p className="text-sm leading-6 text-white/70">{entry.summary}</p>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-white/66">
                {entry.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              {entry.metrics ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {entry.metrics.map((metric) => (
                    <span className="tech-pill" key={metric}>
                      {metric}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
