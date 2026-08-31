import type { Metadata } from "next";
import { portfolio } from "@/data/portfolio";
import { ProjectIndex } from "@/components/project-index";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Engineering projects by Ocean West across multi-agent AI systems, local-first retrieval, computer vision, Formula SAE composites, FEA, and mechanical testing.",
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
            description="Software systems and physical hardware, filtered however you want to read them. Each project page covers the process, the constraints, and what was actually measured."
            eyebrow="Work"
            title="Everything, in one place."
          />
          <div className="mt-10">
            <ProjectIndex projects={portfolio.projects} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
