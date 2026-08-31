import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Project, portfolio } from "@/data/portfolio";
import { ProjectVisual } from "@/components/project-visual";
import { ProjectGallery } from "@/components/project-gallery";
import { SectionHeading } from "@/components/section-heading";
import { TechLine } from "@/components/spec-list";
import { dedicatedCoverFor, galleryFor, sectionsFor } from "@/lib/project-images";

type ProjectDetailLayoutProps = {
  project: Project;
};

function DetailBlock({ title, items }: { title: string; items?: string[] }) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="panel">
      <h2 className="panel-heading">{title}</h2>
      <ul className="detail-list mt-5">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export function ProjectDetailLayout({ project }: ProjectDetailLayoutProps) {
  const images = galleryFor(project.slug);
  const sections = sectionsFor(project.slug);
  // Only a dedicated cover.* earns the hero slot. Otherwise the walkthrough
  // leads, so the same screenshot does not appear twice on one page.
  const cover = dedicatedCoverFor(project.slug);
  const videoCount = images.filter((item) => item.kind === "video").length;
  const stillCount = images.length - videoCount;

  // Related work is drawn from the same discipline first, so a mechanical page
  // sends you to more mechanical work rather than bouncing you into the AI
  // projects, but falls back to the other side rather than showing nothing.
  const sameDiscipline = portfolio.projects.filter(
    (item) => item.slug !== project.slug && item.discipline === project.discipline,
  );
  const otherDiscipline = portfolio.projects.filter(
    (item) => item.slug !== project.slug && item.discipline !== project.discipline,
  );
  const related = [...sameDiscipline, ...otherDiscipline].slice(0, 3);

  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-text)]">
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-10 md:px-10 lg:px-12">
        <Link
          className="inline-flex items-center gap-2 text-sm text-[var(--text-dim)] transition-colors hover:text-[var(--text)]"
          href="/projects"
        >
          <ArrowLeft size={16} />
          Back to all work
        </Link>

        <div className="mt-8 max-w-3xl">
          <SectionHeading
            description={project.summary}
            eyebrow={project.category}
            title={project.title}
          />
          <p className="mt-6 text-[1rem] leading-7 text-[var(--text-muted)]">
            {project.heroStatement}
          </p>

          {project.timeline ? <p className="stat-label mt-5">{project.timeline}</p> : null}

          <TechLine items={project.technologies} />
        </div>

        {/* Full width rather than a thumbnail beside the text: the lead image
            is the first real evidence a visitor sees, and at 45% of a column
            it read as decoration. */}
        {cover ? (
          <div className="project-hero mt-10">
            <Image
              alt={cover.alt}
              className="project-hero-image"
              height={cover.height ?? 1000}
              priority
              src={cover.src}
              width={cover.width ?? 1600}
            />
          </div>
        ) : images.length === 0 ? (
          <div className="project-visual-frame mt-10">
            <ProjectVisual slug={project.slug} title={project.title} />
          </div>
        ) : null}

        {project.metrics.length > 0 ? (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {project.metrics.map((metric) => (
              <article className="metric-card" key={`${project.slug}-${metric.label}`}>
                <div className="flex items-baseline justify-between gap-3">
                  <p className="stat-value text-[1.6rem]">{metric.value}</p>
                  {metric.emphasis === "target" ? (
                    <span className="metric-tag" data-emphasis="target">
                      Target
                    </span>
                  ) : null}
                </div>
                <p className="stat-label mt-2">{metric.label}</p>
                <p className="mt-3 text-[0.86rem] leading-6 text-[var(--text-muted)]">
                  {metric.detail}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-10 max-w-3xl text-[0.92rem] leading-7 text-[var(--text-dim)]">
            This project is documented as a concept and systems architecture. The page covers the
            verified engineering intent and constraints rather than presenting measured results
            that were never taken.
          </p>
        )}
      </section>

      {/* Photos sit high on the page. For hardware especially, the images are
          the evidence, and they should not be buried under six prose blocks. */}
      {images.length > 0 ? (
        <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 lg:px-12">
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="text-[1.5rem] font-semibold">Documentation</h2>
            <p className="stat-label">
              {[
                stillCount > 0 ? `${stillCount} image${stillCount === 1 ? "" : "s"}` : null,
                videoCount > 0 ? `${videoCount} video${videoCount === 1 ? "" : "s"}` : null,
              ]
                .filter(Boolean)
                .join(" · ")}{" "}
              &middot; click to open
            </p>
          </div>
          <ProjectGallery projectTitle={project.title} sections={sections} />
        </section>
      ) : null}

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:px-10 lg:px-12">
        {project.teamContext ? (
          <p className="team-note">{project.teamContext}</p>
        ) : null}

        {project.objective ? (
          <section className="panel">
            <h2 className="panel-heading">Project Overview</h2>
            <p className="mt-4 text-[0.94rem] leading-7 text-[var(--text-muted)]">{project.objective}</p>
          </section>
        ) : null}

        <DetailBlock items={project.responsibilities} title="My Responsibilities" />
        <DetailBlock items={project.contributions} title="My Contributions" />
        <DetailBlock items={project.engineeringProcess} title="Engineering Process" />
        <DetailBlock items={project.toolsAndTechnologies} title="Tools and Technologies" />
        <DetailBlock items={project.designDecisions} title="Key Design Decisions" />
        <DetailBlock items={project.testingAndValidation} title="Testing and Validation" />
        <DetailBlock items={project.results} title="Results" />
        <DetailBlock items={project.constraintsAndTradeoffs} title="Constraints and Tradeoffs" />
        <DetailBlock items={project.conceptDetails} title="System Concept" />
        <DetailBlock items={project.focusAreas} title="Engineering Focus" />

        <section className="panel">
          <h2 className="panel-heading">Related Work</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <Link
                className="related-card"
                href={`/projects/${item.slug}`}
                key={item.slug}
              >
                <p className="section-eyebrow">{item.category}</p>
                <h3 className="mt-3 text-[1.05rem] font-semibold">{item.title}</h3>
                <p className="mt-2 text-[0.86rem] leading-6 text-[var(--text-muted)]">{item.summary}</p>
                <span className="mt-4 inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[0.72rem] text-[var(--accent)]">
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
