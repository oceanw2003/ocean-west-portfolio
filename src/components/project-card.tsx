import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Project } from "@/data/portfolio";
import { ProjectVisual } from "@/components/project-visual";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const featuredImage = project.images?.find((image) => image.featured) ?? project.images?.[0];

  return (
    <article className="project-card">
      <div className="project-visual-frame">
        {featuredImage ? (
          <Image
            alt={featuredImage.alt}
            className="h-full w-full object-cover"
            fill
            sizes="(min-width: 1280px) 50vw, 100vw"
            src={featuredImage.src}
          />
        ) : (
          <ProjectVisual slug={project.slug} title={project.title} />
        )}
      </div>
      <div className="mt-6">
        <p className="section-eyebrow">{project.category}</p>
        <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-white/68">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((technology) => (
            <span className="tech-pill" key={technology}>
              {technology}
            </span>
          ))}
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {project.metrics.slice(0, 2).map((metric) => (
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4" key={metric.label}>
              <p className="text-xl font-semibold text-white">{metric.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/58">
                {metric.label}
              </p>
            </div>
          ))}
          {project.metrics.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 md:col-span-2">
              <p className="text-sm leading-6 text-white/62">
                Concept and systems architecture focused. Detailed imagery and measured results can be added as the project evolves.
              </p>
            </div>
          ) : null}
        </div>
        <Link className="inline-flex items-center gap-2 pt-6 text-sm font-medium text-[var(--color-accent)]" href={`/projects/${project.slug}`}>
          View project details
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
