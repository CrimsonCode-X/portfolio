import "./Projects.css";
import portfolioData from "../../data/portfolioData";

function Projects() {
  const projects = portfolioData?.projects || [];
  const username = "CrimsonCode-X";

  const fallbackImage =
    "https://via.placeholder.com/600x400.png?text=Project+Preview";

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const imageUrl = `https://opengraph.githubassets.com/1/${username}/${project.github}`;

            return (
              <a
                key={index}
                href={`https://github.com/${username}/${project.github}`}
                target="_blank"
                rel="noreferrer"
                className="project-card"
              >
                <div className="project-image">
                  <img
                    src={imageUrl}
                    alt={project.title}
                    onError={(e) => {
                      e.target.src = fallbackImage;
                    }}
                  />
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tech-stack">
                    {project.tech.map((t, i) => (
                      <span key={i}>{t}</span>
                    ))}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;