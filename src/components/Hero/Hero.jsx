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
    <section className="hero1" id="sectionHero">
      <div className="hero1__container">

        <div className="hero1__left">
            <div className="hero1__title">
                Jessica Hellsten
            </div>
            <div className="hero1__subtitle">
                Full-Stack Developer
            </div>
            <div className="hero1__description">Building clear paths through complex systems — turning complexity into intuitive, structured experiences.

Carefully built from the ground up.</div>
            <div className="hero1__buttons">
                

                <a className="hero1__projects"
                    onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("sectionProjects");
                    }}
                >
                    View Projects
                </a>
                <a className="hero1__contact"
                    onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("sectionContact");
                    }}
                >
                    Contact Me
                </a>
            </div>
        </div>

        <div className="hero1__right">
          <div className="hero1__socials">
            <NavLink
              aria-label="visit my github profile"
              to="https://github.com/hellsten"
            >
              <GitHub /><p>GitHub</p>
            </NavLink>
            <NavLink
              aria-label="visit my linkedin profile"
              to="https://www.linkedin.com/in/jessicahellsten/"
            >
              <LinkedIn /><p>LinkedIn</p>
            </NavLink>
            <NavLink
              aria-label="contact me by email"
              to="mailto:jessicahellsten@gmail.com"
            >
              <Mail /><p>Email</p>
            </NavLink>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
