import "./Resume.css";

function Resume() {
  return (
    <section id="resume" className="section">
      <div className="container">

        <h2 className="section-title">
          My <span>Resume</span>
        </h2>

        <div className="resume-card glass-card">

          <div className="resume-text">
            <h3>Aman Goswami</h3>
            <p>Software Developer • Data Analyst • AI Enthusiast</p>

            <p className="resume-desc">
              Passionate about building scalable web apps, data-driven systems,
              and AI-powered solutions. Actively seeking internship and full-time opportunities.
            </p>
          </div>

          <div className="resume-actions">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="resume-btn"
            >
              View Resume
            </a>

            <a
              href="/resume.pdf"
              download
              className="resume-btn secondary"
            >
              Download
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Resume;