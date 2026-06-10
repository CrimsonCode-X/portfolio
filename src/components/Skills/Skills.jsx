import "./Skills.css";
import {
  Code2,
  Database,
  BrainCircuit,
} from "lucide-react";

const skillsData = [
  {
    title: "Frontend & Web",
    icon: <Code2 size={28} />,
    skills: ["HTML5", "CSS3", "JavaScript", "React.js"],
  },
  {
    title: "Backend & Data",
    icon: <Database size={28} />,
    skills: ["Python", "SQL", "MongoDB", "Flask"],
  },
  {
    title: "AI & Engineering",
    icon: <BrainCircuit size={28} />,
    skills: ["Scikit-Learn", "NumPy", "Pandas", "GitHub"],
  },
];

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">
          Technical <span>Skills</span>
        </h2>

        <div className="skills-grid">
          {skillsData.map((group, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{group.icon}</div>

              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill, i) => (
                  <span key={i}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;