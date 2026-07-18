import type { MetadataRoute } from "next";
import { portfolio } from "@/data/portfolio";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl(),
      lastModified: new Date("2026-07-17"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/projects"),
      lastModified: new Date("2026-07-17"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const projectPages = portfolio.projects.map((project) => ({
    url: absoluteUrl(`/projects/${project.slug}`),
    lastModified: new Date("2026-07-17"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...pages, ...projectPages];
}
