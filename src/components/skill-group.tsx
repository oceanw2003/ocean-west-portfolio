import { SkillGroup as SkillGroupType } from "@/data/portfolio";
import { SpecList, SpecRow } from "@/components/spec-list";

type SkillMatrixProps = {
  groups: SkillGroupType[];
};

/**
 * The whole skills section is one table rather than six cards. Previously
 * this rendered roughly seventy individual pills across six panels, which
 * was most of the page's visual noise for content that is really just a
 * labelled list.
 */
export function SkillMatrix({ groups }: SkillMatrixProps) {
  return (
    <SpecList>
      {groups.map((group) => (
        <SpecRow items={group.items} key={group.title} label={group.title} />
      ))}
    </SpecList>
  );
}
