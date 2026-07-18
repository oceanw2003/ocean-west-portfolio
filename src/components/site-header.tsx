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
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[rgba(9,9,9,0.78)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-12">
        <a className="group" href="#top">
          <p className="text-[11px] uppercase tracking-[0.34em] text-[var(--color-accent)]">
            Ocean West
          </p>
          <p className="mt-1 text-sm font-medium text-white/84 transition-colors group-hover:text-white">
            Engineering Portfolio
          </p>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              className="text-sm text-white/68 transition-colors hover:text-white focus-visible:text-white"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
          <a
            className="button-secondary px-4 py-3"
            href={resumePath}
            rel="noreferrer"
            target="_blank"
          >
            <FileText size={16} />
            Resume
          </a>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <a
            aria-label={`Open ${name} resume`}
            className="icon-button"
            href={resumePath}
            rel="noreferrer"
            target="_blank"
          >
            <FileText size={18} />
          </a>
          <MobileNav items={nav} />
        </div>
      </div>
    </header>
  );
}
