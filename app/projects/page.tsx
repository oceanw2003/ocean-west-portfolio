import type { Metadata } from "next";
import { portfolio } from "@/data/portfolio";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Engineering and AI project work by Ocean West across Formula SAE composites, vehicle design, instrumentation, and software systems.",
  alternates: {
    canonical: absoluteUrl("/projects"),
  },
};

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader nav={portfolio.nav} name={portfolio.name} resumePath={portfolio.resumePath} />
      <main className="bg-[var(--color-bg)] text-[var(--color-text)]">
        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <SectionHeading
            description="A broader view of Ocean West's engineering and AI portfolio, including measured competition results and concept-driven systems work."
            eyebrow="Projects"
            title="Detailed project storytelling organized around verified engineering work."
          />
          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            {portfolio.projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
