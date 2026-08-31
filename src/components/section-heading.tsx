type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-[1.9rem] font-semibold md:text-[2.6rem]">{title}</h2>
      <p className="mt-4 text-[1rem] leading-7 text-[var(--text-muted)]">{description}</p>
    </div>
  );
}
