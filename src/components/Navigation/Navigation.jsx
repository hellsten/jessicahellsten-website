import { NavLink } from "react-router-dom";
import "./Navigation.scss";

import Hamburger from '../../assets/icons/hamburger.svg?react';
import Foot from '../../assets/icons/foot.svg?react';

function Navigation() {
    
  const scrollToSection = (id) => {
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="navigation">

      <nav className="navigation__container navigation__mobile-on">
        <div className="navigation__icon">
            <NavLink
            to="/"
          >
            Jessica Hellsten
          </NavLink>
        </div>
        
        <button className="navigation__hamburger">
            <Hamburger className="navigation__hamburger-icon" />
        </button>
      </nav>

      <nav className="navigation__container navigation__desktop-on">
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
          <div className="navigation__dots">
            <p className="navigation__dots-1"><Foot /></p>
            <p className="navigation__dots-2"><Foot /></p>
          </div>
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
          <div className="navigation__dots">
            <p className="navigation__dots-3"><Foot /></p>
            <p className="navigation__dots-4"><Foot /></p>
          </div>
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
          <div className="navigation__dots">
            <p className="navigation__dots-5"><Foot /></p>
            <p className="navigation__dots-6"><Foot /></p>
          </div>
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
          <div className="navigation__dots">
            <p className="navigation__dots-7"><Foot /></p>
            <p className="navigation__dots-8"><Foot /></p>
          </div>
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
          <div className="navigation__dots">
            <p className="navigation__dots-9"><Foot /></p>
            <p className="navigation__dots-10"><Foot /></p>
          </div>
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
