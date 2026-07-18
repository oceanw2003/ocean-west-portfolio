import Link from "next/link";
import { portfolio } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-white/55 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
        <p>
          {portfolio.name} | Mechanical engineering portfolio focused on composites,
          testing, motorsport systems, and AI-enabled product development.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <a href={portfolio.linkedin} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
