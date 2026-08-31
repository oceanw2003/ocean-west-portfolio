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
import { SkillGroup } from "@/components/skill-group";
import { absoluteUrl } from "@/lib/site";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: portfolio.name,
  url: absoluteUrl(),
  email: portfolio.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Austin",
    addressRegion: "Texas",
    addressCountry: "United States",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "The University of Texas at Austin",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "The University of Texas at San Antonio",
    },
  ],
  sameAs: [portfolio.linkedin, portfolio.github],
};

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
              <p className="section-eyebrow">AI Engineering Portfolio</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] text-white md:text-7xl">
                {portfolio.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                {portfolio.subheadline}
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/62">
                {portfolio.introduction}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href="#projects">
                  View Projects
                  <ArrowRight size={16} />
                </ButtonLink>
                <ButtonLink href="#contact" variant="secondary">
                  <Mail size={16} />
                  Contact Me
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
              <div className="hero-blueprint">
                <div className="hero-blueprint-copy">
                  <p className="section-eyebrow">AI systems scope</p>
                  <h2 className="mt-4 text-2xl font-semibold text-white">
                    Agents, local retrieval, evaluation, and human approval.
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/65">
                    Ocean West builds AI products that keep provider choice,
                    local privacy, grounded output, and real engineering
                    constraints visible in the workflow.
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
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {portfolio.heroMetrics.map((metric) => (
              <MetricCard key={metric.label} metric={metric} />
            ))}
          </div>
        </section>

        <section className="section-shell" id="overview">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
            <SectionHeading
              description="Ocean's work connects multi-agent orchestration, local-first retrieval, product engineering, computer vision, and mechanical validation practice."
              eyebrow="AI Engineering Overview"
              title="AI systems built for grounded output, explicit control, and real workflows."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {portfolio.capabilityCards.map((card) => (
                <article className="panel" key={card.title}>
                  <p className="section-eyebrow">{card.title}</p>
                  <p className="mt-4 text-sm leading-7 text-white/68">
                    {card.description}
                  </p>
                  <ul className="mt-5 grid gap-3 text-sm leading-6 text-white/62">
                    {card.bullets.map((bullet) => (
                      <li className="flex gap-3" key={bullet}>
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                        <span>{bullet}</span>
                      </li>
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
                description="Featured AI systems spanning multi-agent orchestration, proprietary engineering knowledge, automotive workflows, and local computer vision."
                eyebrow="Featured Projects"
                title="AI projects grounded in delivery details, tests, constraints, and measurable outcomes."
              />
              <ButtonLink href="/projects" variant="secondary">
                View all projects
                <ArrowRight size={16} />
              </ButtonLink>
            </div>
            <div className="mt-10 grid gap-6 xl:grid-cols-2">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell" id="experience">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
            <SectionHeading
              description="Experience across AI product delivery, Formula SAE systems ownership, and experimental engineering validation."
              eyebrow="Experience"
              title="An AI engineering trajectory backed by product work and physical-systems rigor."
            />
            <div className="mt-10">
              <ExperienceTimeline entries={portfolio.experience} />
            </div>
          </div>
        </section>

        <section className="section-shell" id="skills">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
            <SectionHeading
              description="Skills are grouped by applied AI function and the engineering contexts that shape reliable delivery."
              eyebrow="Technical Capabilities"
              title="AI, software, computer vision, and engineering tools organized by real workflow."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {portfolio.skillGroups.map((group) => (
                <SkillGroup group={group} key={group.title} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell" id="education">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
            <SectionHeading
              description="Mechanical engineering education at UT Austin, complemented by hands-on AI systems and Formula SAE leadership."
              eyebrow="Education"
              title="A mechanical engineering foundation applied to AI product and systems work."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {portfolio.education.map((entry) => (
                <article className="panel" key={entry.institution}>
                  <p className="section-eyebrow">
                    {entry.primary ? "Primary Education" : "Previous Study"}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {entry.institution}
                  </h3>
                  <p className="mt-2 text-white/74">{entry.degree}</p>
                  <p className="mt-1 text-sm text-white/55">
                    {entry.location} | {entry.dates}
                  </p>
                  <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    GPA {entry.gpa}
                  </p>
                  <div className="mt-6">
                    <p className="text-sm font-medium uppercase tracking-[0.16em] text-white/58">
                      Affiliations
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {entry.affiliations.map((item) => (
                        <span className="tech-pill" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="text-sm font-medium uppercase tracking-[0.16em] text-white/58">
                      Relevant coursework
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {entry.coursework.map((item) => (
                        <span className="tech-pill" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell" id="leadership">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
            <SectionHeading
              description="Awards and proof points from Formula SAE execution, academic performance, and AI product presentation."
              eyebrow="Additional"
              title="Results that reflect delivery, documentation, and engineering ownership."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {portfolio.recognitions.map((item) => (
                <article className="panel" key={item.title}>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/66">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell" id="contact">
          <div className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-12">
            <div className="panel relative overflow-hidden">
              <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-[radial-gradient(circle_at_center,rgba(217,138,60,0.18),transparent_70%)] lg:block" />
              <SectionHeading
                description="Available for conversations around AI engineering, local-first systems, RAG, computer vision, automotive product workflows, and Formula SAE."
                eyebrow="Contact"
                title="Reach out to discuss engineering work, product systems, or future collaboration."
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
                  Open resume
                </ButtonLink>
                <CopyEmailButton email={portfolio.email} />
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {portfolio.professionalInterests.map((interest) => (
                  <span className="tech-pill" key={interest}>
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
