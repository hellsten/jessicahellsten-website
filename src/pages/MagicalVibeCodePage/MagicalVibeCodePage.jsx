import { useEffect, useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./MagicalVibeCodePage.scss";

import Me from "./../../assets/images/me.jpg";

import projectsData from "./../../assets/data/projects.js";
import skillsData from "./../../assets/data/skills.js";
import educationData from "./../../assets/data/education.js";
import experiencesData from "./../../assets/data/experience.js";

import GitHub from "./../../assets/icons/github.svg?react";
import LinkedIn from "./../../assets/icons/linkedin.svg?react";
import Mail from "./../../assets/icons/mail.svg?react";

function normalizeProject(project, index) {
  return {
    id: project.id || project.title || `project-${index}`,
    title: project.title || "Project",
    type:
      project.stats?.find((stat) => stat.label?.toLowerCase() === "type")?.value ||
      "Featured Project",
    description:
      project.tagline ||
      project.intro ||
      project.overview ||
      "A creative frontend project.",
    tags: Array.isArray(project.skills) ? project.skills : [],
    live: project.demoLink || project.liveLink || project.live || "#",
    code: project.codeLink || project.github || project.repo || "#",
    image: project.image || "",
    started: project.started || "",
    overview: project.overview || "",
    features: Array.isArray(project.features) ? project.features : [],
    stats: Array.isArray(project.stats) ? project.stats : [],
  };
}

function normalizeSkill(skill, index) {
  return {
    id: skill.id || skill.item || `skill-${index}`,
    name: skill.item || skill.name || skill.title || "Skill",
    section: skill.section || "Skill",
    Icon: skill.Icon || null,
  };
}

function normalizeEducationItem(item, index) {
  return {
    id: item.id || item.school || `education-${index}`,
    date: item.dates || item.date || "Recent",
    title: item.school || item.title || "School",
    subtitle:
      [item.degree, item.major].filter(Boolean).join(" — ") ||
      item.subtitle ||
      "",
    location: item.location || "",
    description:
      [item.degree, item.major, item.location]
        .filter((value) => value && value.trim() !== "")
        .join(" • ") || "Education details coming soon.",
    logo: item.logo || "",
  };
}

function normalizeExperienceItem(item, index) {
  return {
    id: item.id || item.company || `experience-${index}`,
    date: item.dates || item.date || "Recent",
    title: item.company || item.title || "Company",
    subtitle: item.position || item.role || "",
    location: item.location || "",
    description:
      item.details ||
      [item.position, item.location].filter(Boolean).join(" • ") ||
      "Experience details coming soon.",
    logo: item.logo || "",
  };
}

function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  type = "button",
  target,
  rel,
}) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  const handleMove = (event) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    setStyle({
      transform: `translate(${x * 0.12}px, ${y * 0.12}px)`,
    });
  };

  const handleLeave = () => {
    setStyle({
      transform: "translate(0px, 0px)",
    });
  };

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        className={`${className} magical-vibe-code-page__magnetic`}
        style={style}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      className={`${className} magical-vibe-code-page__magnetic`}
      style={style}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function MagicalVibeCodePage() {
  const pageRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cursorGlow, setCursorGlow] = useState({ x: -300, y: -300 });
  const [activeSection, setActiveSection] = useState("about");

  const projects = Array.isArray(projectsData)
    ? projectsData.map(normalizeProject)
    : [];

  const skills = Array.isArray(skillsData) ? skillsData.map(normalizeSkill) : [];

  const education = Array.isArray(educationData)
    ? educationData.map(normalizeEducationItem)
    : [];

  const experiences = Array.isArray(experiencesData)
    ? experiencesData.map(normalizeExperienceItem)
    : [];

  const navItems = useMemo(
    () => [
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "education", label: "Education" },
      { id: "experience", label: "Experience" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const handleScroll = () => {
      const maxScroll = page.scrollHeight - page.clientHeight;
      const progress = maxScroll > 0 ? (page.scrollTop / maxScroll) * 100 : 0;
      setScrollProgress(progress);

      const sectionIds = navItems.map((item) => item.id);
      let current = "about";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.35) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();
    page.addEventListener("scroll", handleScroll);

    return () => {
      page.removeEventListener("scroll", handleScroll);
    };
  }, [navItems]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorGlow({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToSection = (id) => {
    const page = pageRef.current;
    const section = document.getElementById(id);
    if (!page || !section) return;

    const pageTop = page.getBoundingClientRect().top;
    const sectionTop = section.getBoundingClientRect().top;
    const offsetTop = sectionTop - pageTop + page.scrollTop;

    page.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <main className="magical-vibe-code-page">
      <div
        className="magical-vibe-code-page__cursor-glow"
        style={{
          left: `${cursorGlow.x}px`,
          top: `${cursorGlow.y}px`,
        }}
      />

      <div
        className="magical-vibe-code-page__scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="magical-vibe-code-page__aurora magical-vibe-code-page__aurora--one" />
      <div className="magical-vibe-code-page__aurora magical-vibe-code-page__aurora--two" />
      <div className="magical-vibe-code-page__aurora magical-vibe-code-page__aurora--three" />
      <div className="magical-vibe-code-page__grid" />
      <div className="magical-vibe-code-page__stars" />

      <div className="magical-vibe-code-page__blob">
        <div className="magical-vibe-code-page__blob--one" />
        <div className="magical-vibe-code-page__blob--two" />
        <div className="magical-vibe-code-page__blob--three" />
      </div>

      <div className="magical-vibe-code-page__nav-shell">
        <nav className="magical-vibe-code-page__nav">
          <div className="magical-vibe-code-page__nav-left">
            <NavLink to="/" className="magical-vibe-code-page__brand">
              Jessica Hellsten
            </NavLink>

            <NavLink
              to="/"
              className="magical-vibe-code-page__back-home"
              aria-label="Back to Jessica main homepage"
            >
              ← Return to Jessica Main Home
            </NavLink>
          </div>

          <div className="magical-vibe-code-page__nav-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`magical-vibe-code-page__nav-link ${
                  activeSection === item.id
                    ? "magical-vibe-code-page__nav-link--active"
                    : ""
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            className={`magical-vibe-code-page__menu-toggle ${
              menuOpen ? "magical-vibe-code-page__menu-toggle--open" : ""
            }`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </div>

      <div
        className={`magical-vibe-code-page__mobile-menu ${
          menuOpen ? "magical-vibe-code-page__mobile-menu--open" : ""
        }`}
      >
        <div className="magical-vibe-code-page__mobile-menu-inner">
          <NavLink
            to="/"
            className="magical-vibe-code-page__mobile-home-link"
            onClick={() => setMenuOpen(false)}
          >
            ← Return to Jessica Main Home
          </NavLink>

          <div className="magical-vibe-code-page__mobile-menu-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`magical-vibe-code-page__mobile-menu-link ${
                  activeSection === item.id
                    ? "magical-vibe-code-page__mobile-menu-link--active"
                    : ""
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="magical-vibe-code-page__scroll-shell" ref={pageRef}>
        <section
          id="about"
          className="magical-vibe-code-page__hero magical-vibe-code-page__snap-section"
        >
          <div className="magical-vibe-code-page__hero-left">
            <div className="magical-vibe-code-page__eyebrow">
              playful frontend developer portfolio
            </div>

            <h1 className="magical-vibe-code-page__title">
              Magical vibes.
              <br />
              Bold UI.
              <br />
              Jessica energy.
            </h1>

            <p className="magical-vibe-code-page__intro">
              I build interactive, expressive, and responsive frontend
              experiences that still feel polished, clear, and intentional.
              This page is a more playful portal into my work, skills, and
              creative coding style.
            </p>

            <div className="magical-vibe-code-page__hero-actions">
              <MagneticButton
                className="magical-vibe-code-page__cta magical-vibe-code-page__cta--primary"
                onClick={() => scrollToSection("projects")}
              >
                Explore Projects
              </MagneticButton>

              <MagneticButton
                className="magical-vibe-code-page__cta magical-vibe-code-page__cta--secondary"
                onClick={() => scrollToSection("contact")}
              >
                Contact Jessica
              </MagneticButton>
            </div>

            <div className="magical-vibe-code-page__hero-chip-row">
              <div className="magical-vibe-code-page__hero-chip">React</div>
              <div className="magical-vibe-code-page__hero-chip">SCSS</div>
              <div className="magical-vibe-code-page__hero-chip">
                Responsive UI
              </div>
            </div>
          </div>

          <div className="magical-vibe-code-page__hero-right">
            <div className="magical-vibe-code-page__portrait-shell">
              <img
                src={Me}
                alt="picture of me"
                className="magical-vibe-code-page__portrait"
              />
            </div>

            <div className="magical-vibe-code-page__magic-card">
              <div className="magical-vibe-code-page__magic-orb" />

              <div className="magical-vibe-code-page__magic-content">
                <span>Frontend Developer</span>
                <span>Creative Problem Solver</span>
                <span>Responsive UI Builder</span>
              </div>

              <div className="magical-vibe-code-page__floating-pill magical-vibe-code-page__floating-pill--one">
                playful motion
              </div>
              <div className="magical-vibe-code-page__floating-pill magical-vibe-code-page__floating-pill--two">
                mobile friendly
              </div>
              <div className="magical-vibe-code-page__floating-pill magical-vibe-code-page__floating-pill--three">
                deeply vibe coded
              </div>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="magical-vibe-code-page__section magical-vibe-code-page__snap-section"
        >
          <div className="magical-vibe-code-page__section-heading">
            <span>Skills</span>
            <h2>Creative visuals meet real frontend fundamentals.</h2>
            <p>
              I enjoy building interfaces that feel expressive and memorable
              without losing responsiveness, structure, accessibility, or ease
              of use.
            </p>
          </div>

          <div className="magical-vibe-code-page__skills-grid">
            {skills.map((skill) => {
              const IconComponent = skill.Icon;

              return (
                <div key={skill.id} className="magical-vibe-code-page__skill-card">
                  <div className="magical-vibe-code-page__skill-dot" />

                  <div className="magical-vibe-code-page__skill-text">
                    <div className="magical-vibe-code-page__skill-name">
                      {skill.name}
                    </div>
                    <div className="magical-vibe-code-page__skill-section">
                      {skill.section}
                    </div>
                  </div>

                  {IconComponent ? (
                    <div className="magical-vibe-code-page__skill-icon-shell">
                      <IconComponent className="magical-vibe-code-page__skill-icon" />
                    </div>
                  ) : (
                    <div className="magical-vibe-code-page__skill-spark">✦</div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section
          id="projects"
          className="magical-vibe-code-page__section magical-vibe-code-page__snap-section"
        >
          <div className="magical-vibe-code-page__section-heading">
            <span>Projects</span>
            <h2>Projects with personality.</h2>
            <p>
              A collection of things I’ve built, broken, redesigned, and brought to life. Each project is a mix of creativity and logic — where clean code meets strong visuals and real-world problem solving.
            </p>
          </div>

          <div className="magical-vibe-code-page__project-grid">
            {projects.map((project) => (
              <article
                key={project.id}
                className="magical-vibe-code-page__project-card"
              >
                <div className="magical-vibe-code-page__project-top">
                  <div className="magical-vibe-code-page__project-type">
                    {project.type}
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  {project.started ? (
                    <div className="magical-vibe-code-page__project-started">
                      {project.started}
                    </div>
                  ) : null}
                </div>

                <div className="magical-vibe-code-page__project-visual">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="magical-vibe-code-page__project-image"
                    />
                  ) : null}
                </div>

                {project.stats.length > 0 ? (
                  <div className="magical-vibe-code-page__project-stats">
                    {project.stats.map((stat, index) => (
                      <div
                        key={`${project.id}-stat-${index}`}
                        className="magical-vibe-code-page__project-stat"
                      >
                        <span className="magical-vibe-code-page__project-stat-label">
                          {stat.label}
                        </span>
                        <span className="magical-vibe-code-page__project-stat-value">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : null}

                {project.tags.length > 0 ? (
                  <div className="magical-vibe-code-page__tag-list">
                    {project.tags.map((tag, index) => (
                      <div
                        key={`${project.id}-tag-${index}`}
                        className="magical-vibe-code-page__tag"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                ) : null}

                <div className="magical-vibe-code-page__project-actions">
                  <MagneticButton
                    href={project.live}
                    className="magical-vibe-code-page__project-button magical-vibe-code-page__project-button--primary"
                    target={project.live !== "#" ? "_blank" : undefined}
                    rel={project.live !== "#" ? "noreferrer" : undefined}
                  >
                    View Project
                  </MagneticButton>

                  <MagneticButton
                    href={project.code}
                    className="magical-vibe-code-page__project-button magical-vibe-code-page__project-button--secondary"
                    target={project.code !== "#" ? "_blank" : undefined}
                    rel={project.code !== "#" ? "noreferrer" : undefined}
                  >
                    View Code
                  </MagneticButton>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="education"
          className="magical-vibe-code-page__section magical-vibe-code-page__snap-section"
        >
          <div className="magical-vibe-code-page__section-heading">
            <span>Education</span>
            <h2>Learning by building, refining, and shipping.</h2>
            <p>
              The foundation behind everything I build. This is where I developed my technical mindset, learned how to think through problems, and started turning ideas into structured, working systems.
            </p>
          </div>

          <div className="magical-vibe-code-page__timeline">
            {education.map((item) => (
              <div
                key={item.id}
                className="magical-vibe-code-page__timeline-card"
              >
                <div className="magical-vibe-code-page__timeline-node" />

                {item.logo ? (
                  <div className="magical-vibe-code-page__timeline-logo-shell">
                    <img
                      src={item.logo}
                      alt={item.title}
                      className="magical-vibe-code-page__timeline-logo"
                    />
                  </div>
                ) : null}

                <div className="magical-vibe-code-page__timeline-content">
                  <div className="magical-vibe-code-page__timeline-date">
                    {item.date}
                  </div>
                  <h3>{item.title}</h3>
                  <h4>{item.subtitle}</h4>
                  {item.location ? (
                    <div className="magical-vibe-code-page__timeline-location">
                      {item.location}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="magical-vibe-code-page__section magical-vibe-code-page__snap-section"
        >
          <div className="magical-vibe-code-page__section-heading">
            <span>Experience</span>
            <h2>Frontend work with strong visual instincts.</h2>
            <p>
              Where things moved from theory to reality. These roles shaped how I collaborate, build, and deliver — turning ideas into real impact through hands-on experience.
            </p>
          </div>

          <div className="magical-vibe-code-page__experience-stack">
            {experiences.map((item) => (
              <article
                key={item.id}
                className="magical-vibe-code-page__experience-card"
              >
                <div className="magical-vibe-code-page__experience-glow" />

                {item.logo ? (
                  <div className="magical-vibe-code-page__experience-logo-shell">
                    <img
                      src={item.logo}
                      alt={item.title}
                      className="magical-vibe-code-page__experience-logo"
                    />
                  </div>
                ) : null}

                <div className="magical-vibe-code-page__experience-date">
                  {item.date}
                </div>
                <h3>{item.title}</h3>
                <h4>{item.subtitle}</h4>
                {item.location ? (
                  <div className="magical-vibe-code-page__experience-location">
                    {item.location}
                  </div>
                ) : null}
                {item.description ? <p>{item.description}</p> : null}
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="magical-vibe-code-page__section magical-vibe-code-page__section--contact magical-vibe-code-page__snap-section"
        >
          <div className="magical-vibe-code-page__contact-card">
            <span>Contact</span>
            <h2>Want something polished, playful, and responsive?</h2>
            <p>
              Reach out if you want to collaborate, chat about frontend work, or
              build something that feels memorable and well crafted.
            </p>

            <div className="magical-vibe-code-page__contact-links">
              <MagneticButton
                href="mailto:jessicahellsten@gmail.com"
                className="magical-vibe-code-page__contact-link-button"
              >
                <Mail className="magical-vibe-code-page__contact-icon" />
                <span>Email Me</span>
              </MagneticButton>

              <MagneticButton
                href="https://www.linkedin.com/in/jessicahellsten/"
                className="magical-vibe-code-page__contact-link-button"
              >
                <LinkedIn className="magical-vibe-code-page__contact-icon" />
                <span>LinkedIn</span>
              </MagneticButton>

              <MagneticButton
                href="https://github.com/hellsten"
                className="magical-vibe-code-page__contact-link-button"
              >
                <GitHub className="magical-vibe-code-page__contact-icon" />
                <span>GitHub</span>
              </MagneticButton>
            </div>
          </div>
        </section>

        <footer className="magical-vibe-code-page__footer">
          <div>MagicalVibeCodePage</div>
          <div>Designed for motion, mood, and mobile screens.</div>
          <div className="magical-vibe-code-page__footer-note">
            Believe it or not. This website was painstakingly all vibe coded.
          </div>
        </footer>
      </div>
    </main>
  );
}

export default MagicalVibeCodePage;