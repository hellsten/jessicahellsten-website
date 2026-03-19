import { NavLink } from "react-router-dom";

import "./About.scss";

import Me from "../../assets/images/me.webp";

import GitHub from "./../../assets/icons/github.svg?react";
import LinkedIn from "./../../assets/icons/linkedin.svg?react";
import Mail from "./../../assets/icons/mail.svg?react";

function About() {
  
  //allows scrolling to different sections with id
  const scrollToSection = (id) => {
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
      setMobileNav(false);
    }
  };

  return (
    <section className="about" id="sectionAbout">
      <div className="about__container">
        <div className="about__header">
          <div className="about__title">About</div>
        </div>
        <div className="about__card-container">
          <div className="about__card-left">
            <span>
              Based in <p className="about__vancouver">Vancouver, BC</p>
            </span>
            <span>
              {" "}
              I approach software development like navigating a trail: clear,
              structured, and thoughtful. My background spans healthcare and
              biomedical engineering, with experience in client-facing roles
              that honed problem-solving and communication skills.
            </span>
            <span>
              I recently completed BrainStation’s Software Engineering bootcamp
              and build full-stack applications using:{" "}
              <span className="about__skills">
                <p>JavaScript</p> <p>Node.js</p> <p>Express.js</p> <p>React</p>{" "}
                <p>MySQL</p> <p>APIs</p> <p>Git</p> <p>Agile practices</p>
              </span>
              My goal is to create modern web applications that guide users
              smoothly, offering reliability, clarity, and thoughtful design.
            </span>
            {/* <div className="about__believe">Believe it or not. This website was painstakingly coded by hand.</div> */}
          </div>
          <div className="about__card-right">
            <img src={Me} alt="picture of me" />
            
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
