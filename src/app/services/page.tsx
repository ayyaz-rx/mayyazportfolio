import { services } from "../../data/portfolio";
import { Section } from "../../components/section";

export default function ServicesPage() {
  return (
    <Section
      eyebrow="Services"
      title="Services"
      description="A route that explains what I can build, refine, and ship."
    >
      <div className="services-grid">
        {services.map((service) => (
          <article className="glass-card service-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}