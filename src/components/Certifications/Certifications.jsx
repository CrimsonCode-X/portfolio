import "./Certifications.css";

function Certifications() {
  const certifications = [
    "Data Science & Analytics - HP LIFE",
    "SQL (Basic, Intermediate, Advanced) - HackerRank",
    "Python Programming Certification - HackerRank",
    "Java Programming Certification - HackerRank",
    "C Programming Certification - HackerRank",
    "Supercharge Your Data Analytics with Generative AI - IBM SkillsBuild",
    "Elite NPTEL Certification - Environmental Engineering & Science",
    "Multiple Virtual Job Simulations (Forage - JPMorgan, Goldman Sachs, Deloitte, Mastercard, Siemens, EA)",
    "English Proficiency Certification - EF SET",
  ];

  const achievements = [
    "6th Rank - Vision-X Hackathon (Hack4tech Club, GLA University)",
    "Completed multiple industry-level virtual job simulations",
    "Built multiple end-to-end ML and web development projects",
    "Active participation in hackathons and technical competitions",
  ];

  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section-title">
          Certifications & <span>Achievements</span>
        </h2>

        <div className="cert-grid">
          <div className="glass-card cert-card">
            <h3>Certifications</h3>

            <ul>
              {certifications.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="glass-card cert-card">
            <h3>Achievements</h3>

            <ul>
              {achievements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;