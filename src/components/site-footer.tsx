import Link from "next/link";
import { portfolio } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-[0.84rem] text-[var(--text-dim)] md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
        <p>
          {portfolio.name} &middot; Multi-agent AI systems, local-first retrieval, composite
          structures, and mechanical testing.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/">Home</Link>
          <Link href="/projects">Work</Link>
          <a href={portfolio.linkedin} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
