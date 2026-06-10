import "./Education.css";

const educationData = [
  {
    level: "B.Tech in CSE (AI & Data Science)",
    institution: "GLA University",
    period: "2024 - 2028",
    note: "Currently debugging life, one semester at a time.",
  },
  {
    level: "Intermediate",
    institution: "Kanha Makhan Public School",
    period: "2023 - 2024",
    note: "Survived boards. Learned that sleep is optional, marks are not.",
  },
  {
    level: "High School",
    institution: "Kanha Makhan Public School",
    period: "2021 - 2022",
    note: "Where everything started making slightly more sense… barely.",
  },
];

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">
          Education <span>Timeline</span>
        </h2>

        <div className="education-timeline">
          {educationData.map((item, index) => (
            <div className="education-card" key={index}>
              <h3>{item.level}</h3>
              <h4>{item.institution}</h4>
              <p className="period">{item.period}</p>
              <p className="note">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;