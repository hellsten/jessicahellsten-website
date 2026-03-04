import { NavLink } from "react-router-dom";
import "./Navigation.scss";

function Navigation() {
    
  const scrollToSection = (id) => {
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="navigation">
      <nav className="navigation__container">
        <div className="navigation__icon">
            <NavLink
            to="/"
          >
            Jessica Hellsten
          </NavLink>
        </div>
        <div className="navigation__links">
          <NavLink
            to="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("sectionAbout");
            }}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>

          <NavLink
            to="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("sectionSkills");
            }}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Skills
          </NavLink>

          <NavLink
            to="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("sectionProjects");
            }}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Projects
          </NavLink>

          <NavLink
            to="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("sectionEducation");
            }}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Education
          </NavLink>

          <NavLink
            to="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("sectionExperience");
            }}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Experience
          </NavLink>

          <NavLink
            to="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("sectionContact");
            }}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </section>
  );
}

export default Navigation;
