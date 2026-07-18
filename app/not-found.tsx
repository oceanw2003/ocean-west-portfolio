import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { portfolio } from "@/data/portfolio";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <>
      <SiteHeader nav={portfolio.nav} name={portfolio.name} resumePath={portfolio.resumePath} />
      <main className="flex min-h-[70vh] items-center justify-center bg-[var(--color-bg)] px-6 text-[var(--color-text)]">
        <div className="panel max-w-xl text-center">
          <p className="section-eyebrow">Not Found</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">
            That route is not part of the portfolio.
          </h1>
          <p className="mt-4 text-sm leading-7 text-white/65">
            Use the projects index or return to the homepage to continue exploring the work.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link className="button-primary" href="/">
              Return home
            </Link>
            <Link className="button-secondary" href="/projects">
              View projects
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
