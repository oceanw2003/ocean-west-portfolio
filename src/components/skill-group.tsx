import { SkillGroup as SkillGroupType } from "@/data/portfolio";

type SkillGroupProps = {
  group: SkillGroupType;
};

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <article className="panel">
      <p className="section-eyebrow">{group.title}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span className="tech-pill" key={item}>
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
