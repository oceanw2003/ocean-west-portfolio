import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Images } from "lucide-react";
import { Project } from "@/data/portfolio";
import { ProjectVisual } from "@/components/project-visual";
import { TechLine } from "@/components/spec-list";
import { coverFor, imageCountFor } from "@/lib/project-images";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const cover = coverFor(project.slug);
  const imageCount = imageCountFor(project.slug);

  return (
    <article className="project-card">
      <Link className="project-card-media" href={`/projects/${project.slug}`}>
        {cover ? (
          <Image
            alt={cover.alt}
            className="project-card-image"
            fill
            sizes="(min-width: 1280px) 45vw, (min-width: 768px) 90vw, 100vw"
            src={cover.src}
          />
        ) : (
          <ProjectVisual slug={project.slug} title={project.title} />
        )}
        {imageCount > 1 ? (
          <span className="project-card-count">
            <Images size={12} />
            {imageCount}
          </span>
        ) : null}
        <span className="project-card-discipline">
          {project.discipline === "ai" ? "AI Systems" : "Mechanical"}
        </span>
      </Link>

      <div className="project-card-body">
        <p className="section-eyebrow">{project.category}</p>
        <h3 className="mt-3 text-[1.4rem] font-semibold">
          <Link
            className="transition-colors hover:text-[var(--accent)]"
            href={`/projects/${project.slug}`}
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-3 text-[0.92rem] leading-7 text-[var(--text-muted)]">{project.summary}</p>

        <TechLine items={project.technologies.slice(0, 5)} />

        {project.metrics.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-4">
            {project.metrics.slice(0, 2).map((metric) => (
              <div className="stat-tile" key={metric.label}>
                <p className="stat-value text-[1.4rem]">{metric.value}</p>
                <p className="stat-label mt-1">{metric.label}</p>
              </div>
            ))}
          </div>
        ) : null}

        <Link
          className="mt-6 inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[0.76rem] tracking-[0.05em] text-[var(--accent)]"
          href={`/projects/${project.slug}`}
        >
          View project
          <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}
