import { ExperienceEntry } from "@/data/portfolio";

type ExperienceTimelineProps = {
  entries: ExperienceEntry[];
};

/**
 * Organizations own the rail; positions hang off it.
 *
 * A multi-role organization reads as one continuous involvement with a
 * progression inside it, rather than as three unrelated jobs that happen to
 * share a name. Single-role organizations use the same markup with one
 * position, so there is no second layout to keep in sync.
 */
export function ExperienceTimeline({ entries }: ExperienceTimelineProps) {
  return (
    <div className="grid gap-10">
      {entries.map((entry) => (
        <article key={entry.organization}>
          <header className="org-header">
            <h3 className="text-[1.3rem] font-semibold">{entry.organization}</h3>
            <p className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
              <span className="stat-label">{entry.dates}</span>
              <span className="stat-label opacity-70">{entry.location}</span>
            </p>
          </header>

          <div className="org-positions">
            {entry.positions.map((position) => (
              <section
                className="position"
                data-current={position.current ? "true" : undefined}
                key={position.role}
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h4 className="text-[1.02rem] font-semibold">{position.role}</h4>
                  <span className="stat-label">{position.dates}</span>
                  {position.current ? <span className="position-now">Current</span> : null}
                </div>

                <p className="mt-3 max-w-3xl text-[0.93rem] leading-7 text-[var(--text-muted)]">
                  {position.summary}
                </p>

                <ul className="detail-list mt-3 max-w-3xl">
                  {position.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
