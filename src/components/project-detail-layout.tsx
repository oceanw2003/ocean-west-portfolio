import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Project, featuredProjects } from "@/data/portfolio";
import { ProjectVisual } from "@/components/project-visual";
import { SectionHeading } from "@/components/section-heading";

type ProjectDetailLayoutProps = {
  project: Project;
};

function DetailBlock({
  title,
  items,
}: {
  title: string;
  items?: string[];
}) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="panel">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <ul className="mt-5 grid gap-3 text-sm leading-6 text-white/68">
        {items.map((item) => (
          <li className="flex gap-3" key={item}>
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ProjectDetailLayout({ project }: ProjectDetailLayoutProps) {
  const related = featuredProjects.filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-text)]">
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-10 md:px-10 lg:px-12">
        <Link className="inline-flex items-center gap-2 text-sm text-white/62 hover:text-white" href="/projects">
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <SectionHeading
              description={project.summary}
              eyebrow={project.category}
              title={project.title}
            />
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70">
              {project.heroStatement}
            </p>

            {project.timeline ? (
              <p className="mt-4 text-sm uppercase tracking-[0.18em] text-white/45">
                {project.timeline}
              </p>
            ) : null}

            <div className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span className="tech-pill" key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="project-visual-frame min-h-[320px]">
            <ProjectVisual slug={project.slug} title={project.title} />
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {project.metrics.length > 0 ? (
            project.metrics.map((metric) => (
              <article className="metric-card" key={`${project.slug}-${metric.label}`}>
                <p className="text-2xl font-semibold text-white">{metric.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/58">
                  {metric.label}
                </p>
                <p className="mt-3 text-sm leading-6 text-white/64">{metric.detail}</p>
              </article>
            ))
          ) : (
            <article className="metric-card md:col-span-2 xl:col-span-4">
              <p className="text-sm leading-7 text-white/66">
                This project is currently documented as a concept or structured plan. The page focuses on the verified engineering intent, architecture, and constraints rather than invented measured outcomes.
              </p>
            </article>
          )}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:px-10 lg:px-12">
        {project.objective ? (
          <section className="panel">
            <h2 className="text-2xl font-semibold text-white">Project Overview</h2>
            <p className="mt-4 text-sm leading-7 text-white/68">{project.objective}</p>
          </section>
        ) : null}

        <DetailBlock items={project.responsibilities} title="My Responsibilities" />
        <DetailBlock items={project.engineeringProcess} title="Engineering Process" />
        <DetailBlock items={project.toolsAndTechnologies} title="Tools and Technologies" />
        <DetailBlock items={project.designDecisions} title="Key Design Decisions" />
        <DetailBlock items={project.testingAndValidation} title="Testing and Validation" />
        <DetailBlock items={project.results} title="Results" />
        <DetailBlock items={project.constraintsAndTradeoffs} title="Constraints and Tradeoffs" />
        <DetailBlock items={project.conceptDetails} title="System Concept" />
        <DetailBlock items={project.focusAreas} title="Engineering Focus" />

        <section className="panel">
          <h2 className="text-2xl font-semibold text-white">Image Gallery Area</h2>
          <p className="mt-4 text-sm leading-7 text-white/68">
            Add final imagery to <code>{project.publicImageFolder}</code> and stage raw files in{" "}
            <code>{project.sourceImageFolder}</code>. Suggested filenames are documented in
            the project-image README.
          </p>
        </section>

        <section className="panel">
          <h2 className="text-2xl font-semibold text-white">Related Projects</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <Link className="rounded-3xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-white/20" href={`/projects/${item.slug}`} key={item.slug}>
                <p className="section-eyebrow">{item.category}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/62">{item.summary}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--color-accent)]">
                  Open details
                  <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
