"use client";

import { useMemo, useState } from "react";
import { Discipline, Project } from "@/data/portfolio";
import { ProjectCard } from "@/components/project-card";

type Filter = "all" | Discipline;

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "All work" },
  { value: "ai", label: "AI systems" },
  { value: "mechanical", label: "Mechanical" },
];

type ProjectIndexProps = {
  projects: Project[];
};

export function ProjectIndex({ projects }: ProjectIndexProps) {
  const [filter, setFilter] = useState<Filter>("all");

  const counts = useMemo(
    () => ({
      all: projects.length,
      ai: projects.filter((project) => project.discipline === "ai").length,
      mechanical: projects.filter((project) => project.discipline === "mechanical").length,
    }),
    [projects],
  );

  const visible = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((project) => project.discipline === filter),
    [projects, filter],
  );

  return (
    <>
      <div className="filter-bar" role="tablist">
        {FILTERS.map((option) => (
          <button
            aria-selected={filter === option.value}
            className="filter-button"
            data-active={filter === option.value}
            key={option.value}
            onClick={() => setFilter(option.value)}
            role="tab"
            type="button"
          >
            {option.label}
            <span className="filter-count">{counts[option.value]}</span>
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 xl:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
