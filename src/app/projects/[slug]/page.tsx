import { notFound } from "next/navigation";
import { projects } from "../../../data/portfolio";
import { Section } from "../../../components/section";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <Section eyebrow="Project Detail" title={project.title} description={project.summary}>
      <div className="glass-card detail-card">
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <p>{project.description}</p>
        <a className="button button-primary button-small" href={project.link} target="_blank" rel="noreferrer">
          View My Project
        </a>
      </div>
    </Section>
  );
}