import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { portfolio, getProjectBySlug } from "@/data/portfolio";
import { ProjectDetailLayout } from "@/components/project-detail-layout";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { absoluteUrl } from "@/lib/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return portfolio.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: absoluteUrl(`/projects/${project.slug}`),
    },
    openGraph: {
      title: `${project.title} | Ocean West`,
      description: project.summary,
      url: absoluteUrl(`/projects/${project.slug}`),
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <SiteHeader nav={portfolio.nav} name={portfolio.name} resumePath={portfolio.resumePath} />
      <ProjectDetailLayout project={project} />
      <SiteFooter />
    </>
  );
}
