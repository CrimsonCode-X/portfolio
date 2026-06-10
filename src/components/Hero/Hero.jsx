import { useEffect, useState } from "react";
import "./Hero.css";

function Hero() {
  const phrases = [
    "Aspiring Software Developer",
    "Data Analyst",
    "AI Enthusiast",
  ];

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = phrases[index];

    if (charIndex < current.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + current[charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % phrases.length);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, index]);

  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Hi, I'm <span>Aman Goswami</span>
        </h1>

        <p className="typewriter-text">
          {text}
          <span className="cursor">|</span>
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>

          <a
            href="https://github.com/CrimsonCode-X"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* CODE EDITOR */}
      <div className="hero-right">
        <div className="code-editor-wrapper">
          <div className="code-editor">

            <div className="editor-top">
              <div className="dots">
                <span className="red"></span>
                <span className="yellow"></span>
                <span className="green"></span>
              </div>
              <p>developer.py</p>
            </div>

            <pre className="code-content">

              <span className="variable">developer</span>
              <span className="operator"> = </span>
              <span className="bracket">{"{"}</span>
              <br />

              &nbsp;&nbsp;<span className="key">name</span>
              <span className="operator">: </span>
              <span className="string">"Aman Goswami"</span>,
              <br />

              &nbsp;&nbsp;<span className="key">stack</span>
              <span className="operator">: </span>
              <span className="bracket">[</span>
              <span className="string">"Python"</span>,
              <span className="string">"ML"</span>,
              <span className="string">"React"</span>
              <span className="bracket">]</span>,
              <br />

              &nbsp;&nbsp;<span className="key">domain</span>
              <span className="operator">: </span>
              <span className="string">"AI + Data + Web Systems"</span>,
              <br />

              &nbsp;&nbsp;<span className="key">thinking</span>
              <span className="operator">: </span>
              <span className="string">
                "data-driven decisions &gt; assumptions"
              </span>
              <br />

              <span className="bracket">{"}"}</span>

              <br /><br />

              <span className="function">def</span>{" "}
              <span className="funcname">build</span>
              <span className="bracket">():</span>
              <br />

              &nbsp;&nbsp;<span className="keyword">while</span>{" "}
              <span className="boolean">True</span>:
              <br />

              &nbsp;&nbsp;&nbsp;&nbsp;<span className="function">learn</span>()
              <br />

              &nbsp;&nbsp;&nbsp;&nbsp;<span className="function">break_things</span>()
              <br />

              &nbsp;&nbsp;&nbsp;&nbsp;<span className="function">improve</span>()
              <br />

              &nbsp;&nbsp;&nbsp;&nbsp;<span className="function">ship</span>()
              <br /><br />

              &nbsp;&nbsp;<span className="keyword">return</span>{" "}
              <span className="string">"models + products + impact"</span>

              <br /><br />

              <span className="comment">
                # mindset: ship fast. learn faster. repeat.
              </span>

            </pre>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;