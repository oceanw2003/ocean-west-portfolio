import { Metric } from "@/data/portfolio";
import { joinClasses } from "@/lib/utils";

type MetricCardProps = {
  metric: Metric;
};

export function MetricCard({ metric }: MetricCardProps) {
  return (
    <article className="metric-card">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-3xl font-semibold text-white">{metric.value}</p>
          <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-white/76">
            {metric.label}
          </p>
        </div>
        <span
          className={joinClasses(
            "rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.22em]",
            metric.emphasis === "target"
              ? "border-[rgba(217,138,60,0.38)] text-[var(--color-accent)]"
              : "border-white/12 text-white/58",
          )}
        >
          {metric.emphasis === "target" ? "Target" : "Result"}
        </span>
      </div>
      <p className="mt-4 text-sm leading-6 text-white/65">{metric.detail}</p>
    </article>
  );
}
