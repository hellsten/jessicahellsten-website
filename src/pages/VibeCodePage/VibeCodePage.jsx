import { useEffect } from "react";
import "./VibeCodePage.scss";

import Me from "../../assets/images/me.jpg";
import skills from "../../assets/data/skills.js";
import projects from "../../assets/data/projects.js";
import education from "../../assets/data/education.js";
import experience from "../../assets/data/experience.js";

function VibeCodePage({ siteMap }) {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const navItems = [
    { id: "vibe-about", label: "About" },
    { id: "vibe-skills", label: "Skills" },
    { id: "vibe-projects", label: "Projects" },
    { id: "vibe-education", label: "Education" },
    { id: "vibe-experience", label: "Experience" },
    { id: "vibe-contact", label: "Contact" },
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
      return "vibeCodePage__status vibeCodePage__status--complete";
    }

    if (cleaned.includes("present")) {
      return "vibeCodePage__status vibeCodePage__status--active";
    }

    if (cleaned.includes("incomplete") || cleaned.includes("notcompleted")) {
      return "vibeCodePage__status vibeCodePage__status--incomplete";
    }

    if (cleaned.includes("notstarted")) {
      return "vibeCodePage__status vibeCodePage__status--notStarted";
    }

    return "vibeCodePage__status";
  };

  const renderLogo = (item, keyA, keyB) => {
    if (item.logo && typeof item.logo === "string" && !item.logo.startsWith("http")) {
      return (
        <img
          src={item.logo}
          alt={`${item[keyA]} logo`}
          className="vibeCodePage__logoImage"
        />
      );
    }

    if (item.logo && typeof item.logo !== "string") {
      return (
        <img
          src={item.logo}
          alt={`${item[keyA]} logo`}
          className="vibeCodePage__logoImage"
        />
      );
    }

    const initials = `${item[keyA]?.[0] || ""}${item[keyB]?.[0] || ""}`.toUpperCase();

    return <div className="vibeCodePage__logoFallback">{initials}</div>;
  };

  return (
    <main className="vibeCodePage">
      <header className="vibeCodePage__hero">
        <nav className="vibeCodePage__nav">
          <button
            className="vibeCodePage__brand"
            onClick={() => scrollToSection("vibe-hero")}
            type="button"
          >
            JH
          </button>

          <div className="vibeCodePage__navLinks">
            {navItems.map((item) => (
              <button
                key={item.id}
                className="vibeCodePage__navLink"
                onClick={() => scrollToSection(item.id)}
                type="button"
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        <section className="vibeCodePage__heroContent" id="vibe-hero">
          <div className="vibeCodePage__heroCopy">
            <p className="vibeCodePage__eyebrow">Software Engineer Portfolio</p>
            <h1 className="vibeCodePage__title">
              I build thoughtful, modern web experiences.
            </h1>
            <p className="vibeCodePage__subtitle">
              Software developer with a biomedical engineering background,
              building responsive applications with clean UI, strong structure,
              and real-world usability.
            </p>

            <div className="vibeCodePage__heroActions">
              <button
                className="vibeCodePage__button vibeCodePage__button--primary"
                onClick={() => scrollToSection("vibe-projects")}
                type="button"
              >
                View Projects
              </button>

              <button
                className="vibeCodePage__button vibeCodePage__button--secondary"
                onClick={() => scrollToSection("vibe-contact")}
                type="button"
              >
                Contact Me
              </button>
            </div>

            <div className="vibeCodePage__heroPills">
              <span>React</span>
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>SCSS</span>
              <span>Responsive Design</span>
            </div>
          </div>

          <div className="vibeCodePage__heroCard">
            <img
              src={Me}
              alt="Jessica Hellsten"
              className="vibeCodePage__heroImage"
            />

            <div className="vibeCodePage__heroCardContent">
              <p className="vibeCodePage__heroCardLabel">Currently</p>
              <h2>Building portfolio, apps, and product-focused UI.</h2>
              <p>
                Based in Vancouver, BC with experience across software,
                engineering, and client-facing problem solving.
              </p>
            </div>
          </div>
        </section>
      </header>

      <section className="vibeCodePage__section" id="vibe-about">
        <div className="vibeCodePage__sectionHeading">
          <p className="vibeCodePage__sectionLabel">About</p>
          <h2>Clear thinking, clean builds, strong foundations.</h2>
        </div>

        <div className="vibeCodePage__aboutGrid">
          <article className="vibeCodePage__panel">
            <p>
              Based in{" "}
              <span className="vibeCodePage__textHighlight">Vancouver, BC</span>,
              I approach software development like navigating a trail: clear,
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

          <article className="vibeCodePage__panel vibeCodePage__aboutStats">
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

      <section className="vibeCodePage__section" id="vibe-skills">
        <div className="vibeCodePage__sectionHeading">
          <p className="vibeCodePage__sectionLabel">Skills</p>
          <h2>Tools I use to design and build products.</h2>
        </div>

        <div className="vibeCodePage__skillsGrid">
          {skills.map((skill) => (
            <article key={skill.id} className="vibeCodePage__skillCard">
              <div className="vibeCodePage__skillIcon">
                <skill.Icon />
              </div>

              <div className="vibeCodePage__skillContent">
                <h3>{skill.item}</h3>
                <p>{skill.section}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="vibeCodePage__section" id="vibe-projects">
        <div className="vibeCodePage__sectionHeading">
          <p className="vibeCodePage__sectionLabel">Projects</p>
          <h2>Selected work and product-focused builds.</h2>
        </div>

        <div className="vibeCodePage__projectsGrid">
          {projects.map((project) => (
            <article key={project.id} className="vibeCodePage__projectCard">
              <div className="vibeCodePage__projectImageWrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="vibeCodePage__projectImage"
                />
                <span className="vibeCodePage__projectBadge">{project.title}</span>
              </div>

              <div className="vibeCodePage__projectContent">
                <div className="vibeCodePage__projectTop">
                  <div>
                    <h3>{project.title}</h3>
                    <p className="vibeCodePage__projectTagline">
                      {project.tagline}
                    </p>
                  </div>
                  <p className="vibeCodePage__projectDate">{project.started}</p>
                </div>

                <p className="vibeCodePage__projectIntro">{project.intro}</p>

                <div className="vibeCodePage__projectMeta">
                  {project.stats?.map((stat) => (
                    <div
                      key={`${project.id}-${stat.label}`}
                      className="vibeCodePage__metaItem"
                    >
                      <span>{stat.label}</span>
                      <strong className={getStatusClass(stat.value)}>
                        {stat.value}
                      </strong>
                    </div>
                  ))}
                </div>

                <div className="vibeCodePage__projectSkills">
                  {project.skills?.slice(0, 6).map((skill) => (
                    <span key={`${project.id}-${skill}`}>{skill}</span>
                  ))}
                </div>

                <div className="vibeCodePage__projectLinks">
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

      <section className="vibeCodePage__section" id="vibe-education">
        <div className="vibeCodePage__sectionHeading">
          <p className="vibeCodePage__sectionLabel">Education</p>
          <h2>Academic background and technical training.</h2>
        </div>

        <div className="vibeCodePage__timeline">
          {education.map((item) => (
            <article key={item.id} className="vibeCodePage__timelineCard">
              <div className="vibeCodePage__timelineLogo">
                {renderLogo(item, "school", "major")}
              </div>

              <div className="vibeCodePage__timelineContent">
                <div className="vibeCodePage__timelineTop">
                  <div>
                    <h3>{item.school}</h3>
                    <p>
                      {item.degree} — {item.major}
                    </p>
                  </div>
                  <span>{item.dates}</span>
                </div>

                <p>{item.location}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="vibeCodePage__section" id="vibe-experience">
        <div className="vibeCodePage__sectionHeading">
          <p className="vibeCodePage__sectionLabel">Experience</p>
          <h2>Professional experience and roles.</h2>
        </div>

        <div className="vibeCodePage__timeline">
          {experience.map((item) => (
            <article key={item.id} className="vibeCodePage__timelineCard">
              <div className="vibeCodePage__timelineLogo">
                {renderLogo(item, "company", "position")}
              </div>

              <div className="vibeCodePage__timelineContent">
                <div className="vibeCodePage__timelineTop">
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

      <section
        className="vibeCodePage__section vibeCodePage__section--contact"
        id="vibe-contact"
      >
        <div className="vibeCodePage__contactCard">
          <p className="vibeCodePage__sectionLabel">Contact</p>
          <h2>Let’s build something thoughtful.</h2>
          <p>
            Open to software engineering opportunities, collaborative projects,
            and product-focused work.
          </p>

          <div className="vibeCodePage__contactActions">
            <a
              href="mailto:jessicahellsten@gmail.com"
              className="vibeCodePage__button vibeCodePage__button--primary"
            >
              Email Me
            </a>

            <a
              href="https://github.com/hellsten"
              target="_blank"
              rel="noreferrer"
              className="vibeCodePage__button vibeCodePage__button--secondary"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="vibeCodePage__footer">
        <div className="vibeCodePage__footerBrand">
          <strong>Jessica Hellsten</strong>
          <p>Software Engineer Portfolio</p>
        </div>

        <div className="vibeCodePage__footerLinks">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="vibeCodePage__footerLink"
              onClick={() => scrollToSection(item.id)}
              type="button"
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