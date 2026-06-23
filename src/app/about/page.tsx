import { milestones, skills } from "../../data/portfolio";
import { Section } from "../../components/section";

export default function AboutPage() {
  return (
    <Section
      eyebrow="About Me"
      title="About Me"
      description="A route dedicated to the story, process, and working style behind the portfolio."
      className="section-muted"
    >
      <div className="about-grid">
        <div className="glass-card content-card">
          <p>
            I build frontend experiences that feel deliberate and polished. The work is not just
            about visuals. It is about structure, readable hierarchy, and a route flow that makes
            sense.
          </p>
        </div>

        <div className="glass-card content-card">
          <p>
            I like to keep sections balanced with proper spacing and clear heading rhythm, so the
            whole site feels controlled instead of crowded.
          </p>
        </div>
      </div>

      <div className="timeline-wrap">
        {milestones.map((milestone) => (
          <article className="glass-card timeline-item" key={milestone.period}>
            <span className="timeline-period">{milestone.period}</span>
            <h3>{milestone.title}</h3>
            <strong>{milestone.company}</strong>
            <p>{milestone.description}</p>
          </article>
        ))}
      </div>

      <div className="skills-grid skills-grid-center">
        {skills.map((skill) => (
          <article className="glass-card skill-card" key={skill.title}>
            <div className="skill-icon" aria-hidden="true">
              {skill.icon === "window" && "◫"}
              {skill.icon === "palette" && "◌"}
              {skill.icon === "build" && "⌘"}
            </div>
            <h3>{skill.title}</h3>
            <ul>
              {skill.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}