import Link from "next/link";
import { contactDetails, footerLinks, siteLinks } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-stack">
        <nav className="footer-nav" aria-label="Footer links">
          {siteLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="footer-center">
          <span className="eyebrow">Let&apos;s Work Together</span>
          <h2>Muhammad Ayyaz</h2>
          <p>Frontend Developer | React / Next.js Developer</p>
          <a className="footer-email" href={`mailto:${contactDetails[0].value}`}>
            {contactDetails[0].value}
          </a>
          <div className="footer-socials">
            {footerLinks.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <p className="footer-copy">© 2026 Muhammad Ayyaz. All Rights Reserved.</p>
      </div>
    </footer>
  );
}