import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ eyebrow, title, description, children, className = "" }: SectionProps) {
  return (
    <section className={`section ${className}`.trim()}>
      <div className="container">
        <div className="section-heading">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h1 className="section-title">{title}</h1>
          {description ? <p className="section-description">{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}