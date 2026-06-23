import { contactDetails, githubUrl, resumeUrl } from "../../data/portfolio";
import { Section } from "../../components/section";

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="Contact"
      description="A dedicated contact route with links and a simple message form."
    >
      <div className="contact-grid contact-grid-page">
        <div className="glass-card contact-panel">
          <div className="contact-details">
            {contactDetails.map((item) => (
              <div className="contact-row" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>

          <div className="action-row">
            <a className="button button-primary" href={githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="button button-secondary" href={resumeUrl} target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
        </div>

        <div className="glass-card contact-panel">
          <form className="contact-form">
            <label>
              <span>Full Name</span>
              <input type="text" defaultValue="Muhammad Ayyaz" />
            </label>
            <label>
              <span>Email Address</span>
              <input type="email" placeholder="email@example.com" />
            </label>
            <label>
              <span>Message</span>
              <textarea rows={5} placeholder="How can I help you?" />
            </label>
            <button className="button button-primary button-submit" type="button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}