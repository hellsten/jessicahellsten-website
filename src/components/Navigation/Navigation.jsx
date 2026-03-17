import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navigation.scss";

import Hamburger from "../../assets/icons/hamburger.svg?react";
import Foot from "../../assets/icons/foot.svg?react";
import Close from "../../assets/icons/x.svg?react";

function Navigation() {
  //toggles mobile navigation menu
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav((isOpen) => !isOpen);
  };

  //allows scrolling to different sections with id
  const scrollToSection = (id) => {
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
      setMobileNav(false);
    }
  };

  return (
    <section className="navigation" >
      <nav className="navigation__container">
        <div className="navigation__icon">
          <NavLink to="/">Jessica Hellsten</NavLink>
        </div>

        <div className="navigation__hamburger navigation__mobile-on">
          <button
            onClick={toggleMobileNav}
            className="navigation__hamburger navigation__toggle"
          >
            <Hamburger className="navigation__hamburger-icon" />
          </button>
        </div>

        {/* mobile pop-up for nav-list */}
        {mobileNav && (
          <div className="navigation__mobile-nav navigation__mobile-on">
            <div className="navigation__mobile-nav-header">
              <button
                onClick={toggleMobileNav}
                className="navigation__mobile-nav-close"
              ><Close /></button>
            </div>

            <div className="navigation__mobile-nav-links">
              <NavLink
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("sectionAbout");
                }}
              >
                About
              </NavLink>
              <NavLink
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("sectionSkills");
                }}
              >
                Skills
              </NavLink>
              <NavLink
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("sectionProjects");
                }}
              >
                Projects
              </NavLink>
              <NavLink
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("sectionEducation");
                }}
              >
                Education
              </NavLink>
              <NavLink
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("sectionExperience");
                }}
              >
                Experience
              </NavLink>
              <NavLink
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("sectionContact");
                }}
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}

        <div className="navigation__links navigation__desktop-on">
          <NavLink
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("sectionAbout");
            }}
          >
            About
          </NavLink>
          <div className="navigation__dots">
            <p className="navigation__dots-1">
              <Foot />
            </p>
            <p className="navigation__dots-2">
              <Foot />
            </p>
          </div>
          <NavLink
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("sectionSkills");
            }}
          >
            Skills
          </NavLink>
          <div className="navigation__dots">
            <p className="navigation__dots-3">
              <Foot />
            </p>
            <p className="navigation__dots-4">
              <Foot />
            </p>
          </div>
          <NavLink
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("sectionProjects");
            }}
          >
            Projects
          </NavLink>
          <div className="navigation__dots">
            <p className="navigation__dots-5">
              <Foot />
            </p>
            <p className="navigation__dots-6">
              <Foot />
            </p>
          </div>
          <NavLink
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("sectionEducation");
            }}
          >
            Education
          </NavLink>
          <div className="navigation__dots">
            <p className="navigation__dots-7">
              <Foot />
            </p>
            <p className="navigation__dots-8">
              <Foot />
            </p>
          </div>
          <NavLink
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("sectionExperience");
            }}
          >
            Experience
          </NavLink>
          <div className="navigation__dots">
            <p className="navigation__dots-9">
              <Foot />
            </p>
            <p className="navigation__dots-10">
              <Foot />
            </p>
          </div>
          <NavLink
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("sectionContact");
            }}
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </section>
  );
}

export default Navigation;
