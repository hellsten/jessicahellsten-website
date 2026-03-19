import { NavLink } from "react-router-dom";

import "./Hero.scss";

import GitHub from "./../../assets/icons/github.svg?react";
import LinkedIn from "./../../assets/icons/linkedin.svg?react";
import Mail from "./../../assets/icons/mail.svg?react";

function Hero() {
  //allows scrolling to different sections with id
  const scrollToSection = (id) => {
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
      setMobileNav(false);
    }
  };

  return (
    <section className="hero" id="sectionHero">
      <div className="hero__container">
        <div className="hero__left">
          <div className="hero__title">Jessica Hellsten</div>
          <div className="hero__subtitle">Full-Stack Developer</div>
          <div className="hero__description">
            Building clear paths through complex systems — turning complexity
            into intuitive, structured experiences. Carefully built from the
            ground up.
          </div>
          <div className="hero__buttons">
            <a
              className="hero__projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("sectionProjects");
              }}
            >
              View Projects
            </a>
            <a
              className="hero__contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("sectionContact");
              }}
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero__right">
          <div className="hero__socials">
            <NavLink
              aria-label="visit my github profile"
              to="https://github.com/hellsten"
            >
              <GitHub />
              <p>GitHub</p>
            </NavLink>
            <NavLink
              aria-label="visit my linkedin profile"
              to="https://www.linkedin.com/in/jessicahellsten/"
            >
              <LinkedIn />
              <p>LinkedIn</p>
            </NavLink>
            <NavLink
              aria-label="contact me by email"
              to="mailto:jessicahellsten@gmail.com"
            >
              <Mail />
              <p>Email</p>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
