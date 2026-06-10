import "./About.css";

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <div className="about-card glass-card">
          <p>
            I am Aman Goswami, a B.Tech Computer Science Engineering student
            specializing in Artificial Intelligence and Data Science at GLA
            University. My interests lie at the intersection of software
            development, machine learning, data analytics, and modern web
            technologies.
          </p>

          <p>
            I enjoy transforming ideas into practical solutions through
            programming and continuously expanding my knowledge of emerging
            technologies. My experience spans full-stack web development,
            machine learning projects, data analysis, and problem-solving using
            Java, Python, React, SQL, and modern development tools.
          </p>

          <p>
            Beyond academics, I actively participate in technical learning,
            hackathons, virtual job simulations, and industry-oriented
            certifications to strengthen both my technical and professional
            skillset. My goal is to build impactful technology products while
            continuously growing as a software engineer and data professional.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;