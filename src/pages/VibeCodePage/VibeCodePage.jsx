import { useEffect } from "react";
import "./VibeCodePage.scss";

import Me from "../../assets/images/me.jpg";
import skills from "../../assets/data/skills.js";
import projects from "../../assets/data/projects.js";
import education from "../../assets/data/education.js";
import experience from "../../assets/data/experience.js";

function VibeCodePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const getStatusClass = (value = "") => {
    const cleaned = value.toLowerCase().replace(/\s/g, "");
    if (
      cleaned.includes("complete") &&
      !cleaned.includes("notcompleted") &&
      !cleaned.includes("incomplete")
    ) {
      return "is-complete";
    }
    if (cleaned.includes("present")) return "is-active";
    if (cleaned.includes("incomplete") || cleaned.includes("notcompleted")) {
      return "is-incomplete";
    }
    if (cleaned.includes("notstarted")) return "is-not-started";
    return "";
  };

  const renderLogo = (item, keyA, keyB) => {
    if (item.logo && typeof item.logo === "string" && !item.logo.startsWith("http")) {
      return <img src={item.logo} alt={`${item[keyA]} logo`} className="home__logo-image" />;
    }

    if (item.logo && typeof item.logo !== "string") {
      return <img src={item.logo} alt={`${item[keyA]} logo`} className="home__logo-image" />;
    }

    const initials = `${item[keyA]?.[0] || ""}${item[keyB]?.[0] || ""}`.toUpperCase();

    return <div className="home__logo-fallback">{initials}</div>;
  };

  return (
    <main className="home">
      <header className="home__hero">
        <nav className="home__nav">
          <button className="home__brand" onClick={() => scrollToSection("hero")}>
            JH
          </button>

          <div className="home__nav-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                className="home__nav-link"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        <section className="home__hero-content" id="hero">
          <div className="home__hero-copy">
            <p className="home__eyebrow">Software Engineer Portfolio</p>
            <h1 className="home__title">
              I build thoughtful, modern web experiences.
            </h1>
            <p className="home__subtitle">
              Software developer with a biomedical engineering background,
              building responsive applications with strong structure, clean UI,
              and real-world usability.
            </p>

            <div className="home__hero-actions">
              <button
                className="home__button home__button--primary"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </button>
              <button
                className="home__button home__button--secondary"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </button>
            </div>

            <div className="home__hero-pills">
              <span>React</span>
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>SCSS</span>
              <span>Responsive Design</span>
            </div>
          </div>

          <div className="home__hero-card">
            <img src={Me} alt="Jessica Hellsten" className="home__hero-image" />
            <div className="home__hero-card-content">
              <p className="home__hero-card-label">Currently</p>
              <h2>Building portfolio, apps, and product-focused UI.</h2>
              <p>
                Based in Vancouver, BC with experience across software,
                engineering, and client-facing problem solving.
              </p>
            </div>
          </div>
        </section>
      </header>

      <section className="home__section" id="about">
        <div className="home__section-heading">
          <p className="home__section-label">About</p>
          <h2>Clear thinking, clean builds, strong foundations.</h2>
        </div>

        <div className="home__about-grid">
          <article className="home__panel">
            <p>
              Based in <span className="home__text-highlight">Vancouver, BC</span>, I
              approach software development like navigating a trail: clear,
              structured, and thoughtful.
            </p>
            <p>
              My background spans healthcare and biomedical engineering, with
              client-facing experience that strengthened communication,
              adaptability, and problem solving.
            </p>
            <p>
              I recently completed BrainStation’s Software Engineering bootcamp
              and build full-stack applications using JavaScript, React,
              Node.js, Express.js, MySQL, APIs, Git, and agile practices.
            </p>
          </article>

          <article className="home__panel home__about-stats">
            <div>
              <span>Focus</span>
              <strong>Frontend + Full-Stack</strong>
            </div>
            <div>
              <span>Based In</span>
              <strong>Vancouver, BC</strong>
            </div>
            <div>
              <span>Background</span>
              <strong>Biomedical Engineering</strong>
            </div>
            <div>
              <span>Style</span>
              <strong>Clean, modern, responsive</strong>
            </div>
          </article>
        </div>
      </section>

      <section className="home__section" id="skills">
        <div className="home__section-heading">
          <p className="home__section-label">Skills</p>
          <h2>Tools I use to design and build products.</h2>
        </div>

        <div className="home__skills-grid">
          {skills.map((skill) => (
            <article key={skill.id} className="home__skill-card">
              <div className="home__skill-icon">
                <skill.Icon />
              </div>
              <div className="home__skill-content">
                <h3>{skill.item}</h3>
                <p>{skill.section}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home__section" id="projects">
        <div className="home__section-heading">
          <p className="home__section-label">Projects</p>
          <h2>Selected work and product-focused builds.</h2>
        </div>

        <div className="home__projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="home__project-card">
              <div className="home__project-image-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="home__project-image"
                />
                <span className="home__project-badge">{project.title}</span>
              </div>

              <div className="home__project-content">
                <div className="home__project-top">
                  <div>
                    <h3>{project.title}</h3>
                    <p className="home__project-tagline">{project.tagline}</p>
                  </div>
                  <p className="home__project-date">{project.started}</p>
                </div>

                <p className="home__project-intro">{project.intro}</p>

                <div className="home__project-meta">
                  {project.stats?.map((stat) => (
                    <div key={`${project.id}-${stat.label}`} className="home__meta-item">
                      <span>{stat.label}</span>
                      <strong className={getStatusClass(stat.value)}>{stat.value}</strong>
                    </div>
                  ))}
                </div>

                <div className="home__project-skills">
                  {project.skills?.slice(0, 6).map((skill) => (
                    <span key={`${project.id}-${skill}`}>{skill}</span>
                  ))}
                </div>

                <div className="home__project-links">
                  {project.demoLink && project.demoLink !== "#" && (
                    <a href={project.demoLink} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  )}
                  {project.codeLink && project.codeLink !== "#" && (
                    <a href={project.codeLink} target="_blank" rel="noreferrer">
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home__section" id="education">
        <div className="home__section-heading">
          <p className="home__section-label">Education</p>
          <h2>Academic background and technical training.</h2>
        </div>

        <div className="home__timeline">
          {education.map((item) => (
            <article key={item.id} className="home__timeline-card">
              <div className="home__timeline-logo">
                {renderLogo(item, "school", "major")}
              </div>

              <div className="home__timeline-content">
                <div className="home__timeline-top">
                  <div>
                    <h3>{item.school}</h3>
                    <p>{item.degree} — {item.major}</p>
                  </div>
                  <span>{item.dates}</span>
                </div>
                <p>{item.location}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home__section" id="experience">
        <div className="home__section-heading">
          <p className="home__section-label">Experience</p>
          <h2>Professional experience and roles.</h2>
        </div>

        <div className="home__timeline">
          {experience.map((item) => (
            <article key={item.id} className="home__timeline-card">
              <div className="home__timeline-logo">
                {renderLogo(item, "company", "position")}
              </div>

              <div className="home__timeline-content">
                <div className="home__timeline-top">
                  <div>
                    <h3>{item.company}</h3>
                    <p>{item.position}</p>
                  </div>
                  <span>{item.dates}</span>
                </div>
                <p>{item.location}</p>
                {item.details && <p>{item.details}</p>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home__section home__section--contact" id="contact">
        <div className="home__contact-card">
          <p className="home__section-label">Contact</p>
          <h2>Let’s build something thoughtful.</h2>
          <p>
            Open to software engineering opportunities, collaborative projects,
            and product-focused work.
          </p>

          <div className="home__contact-actions">
            <a href="mailto:daniel.moreau@gmail.com" className="home__button home__button--primary">
              Email Me
            </a>
            <a
              href="https://github.com/hellsten"
              target="_blank"
              rel="noreferrer"
              className="home__button home__button--secondary"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="home__footer">
        <div className="home__footer-brand">
          <strong>Jessica Hellsten</strong>
          <p>Software Engineer Portfolio</p>
        </div>

        <div className="home__footer-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="home__footer-link"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </footer>
    </main>
  );
}

export default VibeCodePage;