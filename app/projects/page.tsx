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
    "AI engineering and mechanical systems work by Ocean West, including multi-agent systems, local-first RAG, automotive workflows, computer vision, and Formula SAE composites.",
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
            description="AI systems come first, followed by the Formula SAE, testing, and mechanical projects that inform Ocean's validation-first engineering approach."
            eyebrow="Projects"
            title="Detailed work organized around reliable AI delivery and verified engineering outcomes."
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
