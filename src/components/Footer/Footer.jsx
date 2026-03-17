import { NavLink } from "react-router-dom";
import "./Footer.scss";

import projects from "./../../assets/data/projects.js";

import GitHub from "./../../assets/icons/github.svg?react";
import LinkedIn from "./../../assets/icons/linkedin.svg?react";
import Mail from "./../../assets/icons/mail.svg?react";

function Footer( {siteMap} ) {
  const scrollToSection = (id) => {
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__left">
            <div className="footer__header">Jessica Hellsten</div>
            <div className="footer__info">
              <span>Inspired</span> by the forests, mountains, and trails
              surrounding Vancouver, BC. Just like a well-marked path, good
              software should provide clear direction and thoughtful structure.
              Well-designed systems guide users naturally without unnecessary
              complexity. Clean interfaces and strong architecture create
              reliable digital experiences. Navigation, clarity, and usability
              are treated with the same care as trail markers on a mountain
              route. This portfolio showcases projects focused on building
              modern, dependable web applications.
            </div>
            <div className="footer__socials">
              <NavLink aria-label="visit my github profile"
              to="https://github.com/hellsten">
                <GitHub />
              </NavLink>
              <NavLink aria-label="visit my linkedin profile" to="https://www.linkedin.com/in/jessicahellsten/">
                <LinkedIn />
              </NavLink>
              <NavLink aria-label="contact me by email" to="mailto:jessicahellsten@gmail.com">
                <Mail />
              </NavLink>
            </div>
            <div className="footer__back-to-top">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("sectionNav");
                }}
              >
                Back to Top
              </a>
            </div>
          </div>
          <div className="footer__right">
            <div className="footer__site-map">
              <h1>Site Map</h1>
              <ul>
              {siteMap.map((section, index) => (
                <li key={index}>
                  <a  
                onClick={(e)=>{
                  scrollToSection(`section${section}`);
                  }} 
                  className="footer__projects-item">
                  {section}
                </a>
                </li>
              ))}
              </ul>
           </div>
             {/* <div className="footer__site-map">
              <h1>Site Map</h1>
              <li>
                <NavLink
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("sectionAbout");
                  }}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("sectionSkills");
                  }}
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("sectionProjects");
                  }}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("sectionEducation");
                  }}
                >
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("sectionExperience");
                  }}
                >
                  Experience
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("sectionContact");
                  }}
                >
                  Contact
                </NavLink>
              </li>
            </div> */}
            <div className="footer__projects">
              <h1>Projects</h1>
              <ul>
              {projects.map((project) => (
                <li key={project.id}>
                  <NavLink to={`/project/${project.id}`} className="footer__projects-item">
                  {project.title}
                </NavLink>
                </li>
              ))}
              </ul>
            </div>
            <div className="footer__pages">
              <h1>Extras</h1>
              <ul>
                <li>
                  <NavLink to={`/vibecode`}>
                  Vibe it
                </NavLink>
              </li>
              <li>
                  <NavLink to={`/magical-vibecode`}>
                  Magical it
                </NavLink>
              </li>
              </ul>
            </div>
          </div>
        </div>
        <span className="footer__disclaimer">Believe it or not. This website was painstakingly all coded by hand.
        </span>
        <div className="footer__legal">
          <div className="footer__counter">Visitors: 3</div>
          <div className="footer__rights">
            © 2026 Jessica Hellsten. All Rights Reserved.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
