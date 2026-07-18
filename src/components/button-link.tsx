import Link from "next/link";
import { joinClasses } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
  newTab?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external = false,
  newTab = false,
}: ButtonLinkProps) {
  const classes = joinClasses(
    variant === "primary" && "button-primary",
    variant === "secondary" && "button-secondary",
    variant === "ghost" && "button-ghost",
    className,
  );

  if (external || href.startsWith("mailto:") || newTab) {
    return (
      <a
        className={classes}
        href={href}
        rel={external || newTab ? "noreferrer" : undefined}
        target={external || newTab ? "_blank" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}
