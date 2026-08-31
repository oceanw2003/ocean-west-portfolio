import { Fragment, ReactNode } from "react";

/**
 * A label-and-values row, used everywhere a tag cloud used to be.
 *
 * Skills, coursework, affiliations and interests are all long flat lists.
 * Rendering them as pills turned each one into a wall of bubbles that was
 * slow to scan and pushed the page length up for no gain. A monospaced
 * label beside a run of separated values holds the same content in a
 * fraction of the space and reads like a spec sheet, which is the right
 * register for an engineering portfolio.
 */

export function SpecList({ children }: { children: ReactNode }) {
  return <div className="spec-list">{children}</div>;
}

export function SpecRow({
  label,
  items,
  children,
}: {
  label: string;
  items?: string[];
  children?: ReactNode;
}) {
  return (
    <div className="spec-row">
      <p className="spec-label">{label}</p>
      <div className="spec-value">
        {items ? <SpecItems items={items} /> : children}
      </div>
    </div>
  );
}

/**
 * Separators are rendered between items rather than appended to each one, so
 * the data stays a plain array and no separator dangles at the end.
 *
 * They are real text nodes surrounded by real spaces, not CSS ::before
 * content. A generated separator glues itself to the following word with no
 * break opportunity between them, which made the last item in a run overflow
 * its container and get clipped instead of wrapping to the next line.
 */
export function SpecItems({ items }: { items: string[] }) {
  return (
    <span className="spec-items">
      {items.map((item, index) => (
        <Fragment key={item}>
          {index > 0 ? <span className="spec-sep"> &middot; </span> : null}
          {item}
        </Fragment>
      ))}
    </span>
  );
}

/** The tighter variant used on project cards, separated by slashes. */
export function TechLine({ items }: { items: string[] }) {
  return (
    <p className="tech-line">
      {items.map((item, index) => (
        <Fragment key={item}>
          {index > 0 ? <span className="tech-sep"> / </span> : null}
          {item}
        </Fragment>
      ))}
    </p>
  );
}
