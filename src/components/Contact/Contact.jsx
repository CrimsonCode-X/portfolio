import "./Contact.css";
import portfolioData from "../../data/portfolioData";

import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const personalInfo = portfolioData?.personalInfo ?? {};

  const email = personalInfo.email || "not-available@email.com";
  const phone = personalInfo.phone || "N/A";
  const github = personalInfo.github || "#";
  const linkedin = personalInfo.linkedin || "#";
  const location = personalInfo.location || "Not set";

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">
          Get In <span>Touch</span>
        </h2>

        <div className="contact-wrapper">

          <div className="glass-card contact-card">
            <h3>Contact Information</h3>

            <p style={{ color: "var(--text-secondary)" }}>
              Let’s connect for internships, collaborations, or opportunities.
            </p>

            <div className="contact-items">

              <a href={`mailto:${email}`} className="contact-item">
                <FaEnvelope />
                <span>{email}</span>
              </a>

              <a href={`tel:${phone}`} className="contact-item">
                <FaPhone />
                <span>{phone}</span>
              </a>

              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>

              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>

              <div className="contact-item static">
                <FaMapMarkerAlt />
                <span>{location}</span>
              </div>

            </div>
          </div>

          <div className="glass-card contact-card">
            <h3>Send Message</h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message feature coming soon!");
              }}
            >
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea rows="5" placeholder="Your Message" required />
              <button type="submit">Send Message</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;