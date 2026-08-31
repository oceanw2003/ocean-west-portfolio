import Link from "next/link";
import { FileText } from "lucide-react";
import { NavItem } from "@/data/portfolio";
import { MobileNav } from "@/components/mobile-nav";

type SiteHeaderProps = {
  nav: NavItem[];
  name: string;
  resumePath: string;
};

export function SiteHeader({ nav, name, resumePath }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 md:px-10 lg:px-12">
        <Link className="group" href="/#top">
          <p className="font-[family-name:var(--font-display)] text-[0.98rem] font-600 tracking-tight text-[var(--text)]">
            Ocean West
          </p>
          <p className="stat-label mt-0.5">Engineering Portfolio</p>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
          <a
            className="button-secondary px-3.5 py-2.5"
            href={resumePath}
            rel="noreferrer"
            target="_blank"
          >
            <FileText size={14} />
            Resume
          </a>
        </nav>

        <div className="flex items-center gap-2.5 md:hidden">
          <a
            aria-label={`Open ${name} resume`}
            className="icon-button"
            href={resumePath}
            rel="noreferrer"
            target="_blank"
          >
            <FileText size={17} />
          </a>
          <MobileNav items={nav} />
        </div>
      </div>
    </header>
  );
}
