import { Metric } from "@/data/portfolio";

type MetricCardProps = {
  metric: Metric;
};

export function MetricCard({ metric }: MetricCardProps) {
  return (
    <article className="metric-card">
      <div className="flex items-baseline justify-between gap-3">
        <p className="stat-value">{metric.value}</p>
        {/* Only targets are called out. Labelling every measured figure
            "Result" added a badge to each card and said nothing. */}
        {metric.emphasis === "target" ? (
          <span className="metric-tag" data-emphasis="target">
            Target
          </span>
        ) : null}
      </div>
      <p className="stat-label mt-2">{metric.label}</p>
      <p className="mt-3 text-[0.88rem] leading-6 text-[var(--text-muted)]">{metric.detail}</p>
    </article>
  );
}
