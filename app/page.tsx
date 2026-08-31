import { ArrowRight, Code2, ExternalLink, FileText, Mail } from "lucide-react";
import { portfolio, featuredProjects } from "@/data/portfolio";
import { ButtonLink } from "@/components/button-link";
import { CopyEmailButton } from "@/components/copy-email-button";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { MetricCard } from "@/components/metric-card";
import { ProjectCard } from "@/components/project-card";
import { ProjectVisual } from "@/components/project-visual";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkillMatrix } from "@/components/skill-group";
import { SpecItems, SpecList, SpecRow } from "@/components/spec-list";
import { absoluteUrl } from "@/lib/site";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: portfolio.name,
  url: absoluteUrl(),
  email: portfolio.email,
  jobTitle: "Engineering Student",
  knowsAbout: [
    "Multi-agent AI systems",
    "Retrieval-augmented generation",
    "Computer vision",
    "Composite structures",
    "Finite element analysis",
    "Mechanical testing",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Austin",
    addressRegion: "Texas",
    addressCountry: "United States",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "The University of Texas at Austin" },
    { "@type": "CollegeOrUniversity", name: "The University of Texas at San Antonio" },
  ],
  sameAs: [portfolio.linkedin, portfolio.github],
};

const aiProjects = featuredProjects.filter((project) => project.discipline === "ai");
const mechanicalProjects = featuredProjects.filter(
  (project) => project.discipline === "mechanical",
);

export default function HomePage() {
  return (
    <>
      <SiteHeader nav={portfolio.nav} name={portfolio.name} resumePath={portfolio.resumePath} />
      <main className="bg-[var(--color-bg)] text-[var(--color-text)]">
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
          type="application/ld+json"
        />

        <section id="top" className="hero-shell">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-10 lg:grid-cols-[1.12fr_0.88fr] lg:px-12 lg:py-24">
            <div>
              <p className="section-eyebrow">AI Systems &middot; Mechanical Engineering</p>
              <h1 className="hero-headline mt-4">
                {portfolio.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-[1.08rem] leading-8 text-[var(--text-muted)]">
                {portfolio.subheadline}
              </p>
              <p className="mt-5 max-w-2xl text-[0.97rem] leading-7 text-[var(--text-dim)]">
                {portfolio.introduction}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href="#projects">
                  See the work
                  <ArrowRight size={16} />
                </ButtonLink>
                <ButtonLink href="#contact" variant="secondary">
                  <Mail size={16} />
                  Get in touch
                </ButtonLink>
                <ButtonLink external href={portfolio.linkedin} variant="ghost">
                  <ExternalLink size={16} />
                  LinkedIn
                </ButtonLink>
                <ButtonLink external href={portfolio.github} variant="ghost">
                  <Code2 size={16} />
                  GitHub
                </ButtonLink>
                <ButtonLink href={portfolio.resumePath} newTab variant="ghost">
                  <FileText size={16} />
                  Resume
                </ButtonLink>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-panel">
                <div className="max-w-xl">
                  <p className="section-eyebrow">Currently</p>
                  <h2 className="mt-4 text-[1.35rem] font-semibold">
                    Building CLU, a multi-agent assistant that has to prove its own answers.
                  </h2>
                  <p className="mt-4 max-w-xl text-[0.9rem] leading-7 text-[var(--text-muted)]">
                    Sixty-eight tools across sixteen sub-agents, every write action behind an
                    approval gate, and an evaluation layer that scores output on whether its
                    citations actually resolve.
                  </p>
                </div>
                <div className="hero-visual-frame">
                  <ProjectVisual
                    slug="clu-multi-agent-assistant"
                    title="CLU multi-agent AI assistant"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-12">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {portfolio.heroMetrics.map((metric) => (
              <MetricCard key={metric.label} metric={metric} />
            ))}
          </div>
        </section>

        <section className="section-shell" id="overview">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
            <SectionHeading
              description="Four areas that show up across the projects below, plus the testing practice that ties them together."
              eyebrow="What I do"
              title="Agents and retrieval first. Mechanical design and test behind them."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {portfolio.capabilityCards.map((card) => (
                <article className="panel" key={card.title}>
                  <p className="section-eyebrow">{card.title}</p>
                  <p className="mt-4 text-[0.9rem] leading-7 text-[var(--text-muted)]">
                    {card.description}
                  </p>
                  <ul className="detail-list mt-5 text-[0.86rem]">
                    {card.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell" id="projects">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                description="Both halves, side by side. Every project page covers the process, the constraints, and the photos or measurements that back it up."
                eyebrow="Selected work"
                title="Software that gets evaluated. Hardware that gets tested."
              />
              <ButtonLink href="/projects" variant="secondary">
                All projects
                <ArrowRight size={16} />
              </ButtonLink>
            </div>

            <div className="mt-12">
              <div className="discipline-rule">
                <h3 className="discipline-title">AI Systems</h3>
                <span className="discipline-line" />
              </div>
              <div className="mt-6 grid gap-6 xl:grid-cols-2">
                {aiProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>

            <div className="mt-14">
              <div className="discipline-rule">
                <h3 className="discipline-title">Mechanical</h3>
                <span className="discipline-line" />
              </div>
              <div className="mt-6 grid gap-6 xl:grid-cols-2">
                {mechanicalProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell" id="experience">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
            <SectionHeading
              description="An AI engineering internship, a subsystem lead role on a 90-person Formula SAE team, and a year of experimental fatigue research."
              eyebrow="Experience"
              title="Where the work has been done."
            />
            <div className="mt-10">
              <ExperienceTimeline entries={portfolio.experience} />
            </div>
          </div>
        </section>

        <section className="section-shell" id="skills">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
            <SectionHeading
              description="Grouped by what the work actually is, rather than by keyword. Software first, then design, manufacturing, and test."
              eyebrow="Skills"
              title="Tools I have used on real projects."
            />
            <div className="mt-10">
              <SkillMatrix groups={portfolio.skillGroups} />
            </div>
          </div>
        </section>

        <section className="section-shell" id="education">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
            <SectionHeading
              description="Mechanical engineering at UT Austin, after two years at UTSA."
              eyebrow="Education"
              title="B.S. Mechanical Engineering, December 2026."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {portfolio.education.map((entry) => (
                <article className="panel" key={entry.institution}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <p className="section-eyebrow">{entry.primary ? "Current" : "Previous"}</p>
                    <p className="stat-label">{entry.dates}</p>
                  </div>
                  <h3 className="mt-3 text-[1.4rem] font-semibold">{entry.institution}</h3>
                  <p className="mt-2 text-[0.95rem] text-[var(--text-muted)]">{entry.degree}</p>
                  <p className="mt-1 text-[0.86rem] text-[var(--text-dim)]">{entry.location}</p>

                  <div className="mt-5">
                    <SpecList>
                      <SpecRow label="GPA">{entry.gpa}</SpecRow>
                      <SpecRow items={entry.affiliations} label="Affiliations" />
                      <SpecRow items={entry.coursework} label="Coursework" />
                    </SpecList>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell" id="leadership">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
            <SectionHeading
              description="Competition results, academic recognition, and work that outlasted the season it was built for."
              eyebrow="Recognition"
              title="A few things worth calling out."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {portfolio.recognitions.map((item) => (
                <article className="panel" key={item.title}>
                  <h3 className="text-[1.1rem] font-semibold">{item.title}</h3>
                  <p className="mt-3 text-[0.9rem] leading-7 text-[var(--text-muted)]">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell" id="contact">
          <div className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-12">
            <div className="panel relative overflow-hidden">
              <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-[radial-gradient(circle_at_center,rgba(224,145,63,0.1),transparent_70%)] lg:block" />
              <SectionHeading
                description="Open to AI engineering and mechanical roles, and always happy to talk about agents, composites, or Formula SAE."
                eyebrow="Contact"
                title="Say hello."
              />
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href={`mailto:${portfolio.email}`}>
                  <Mail size={16} />
                  {portfolio.email}
                </ButtonLink>
                <ButtonLink external href={portfolio.linkedin} variant="secondary">
                  <ExternalLink size={16} />
                  LinkedIn
                </ButtonLink>
                <ButtonLink external href={portfolio.github} variant="secondary">
                  <Code2 size={16} />
                  GitHub
                </ButtonLink>
                <ButtonLink href={portfolio.resumePath} newTab variant="secondary">
                  <FileText size={16} />
                  Resume
                </ButtonLink>
                <CopyEmailButton email={portfolio.email} />
              </div>
              <div className="spec-row mt-9">
                <p className="spec-label">Interests</p>
                <p className="spec-value">
                  <SpecItems items={portfolio.professionalInterests} />
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
