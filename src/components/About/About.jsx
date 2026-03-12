import "./About.scss";

import Me from "../../assets/images/me.jpg";

function About() {
  return (
    <section className="about">
      <div className="about__container" id="sectionAbout">
        <div className="about__header">
          <div className="about__title">About</div>
        </div>
        <div className="about__card-container">
          <div className="about__card-left">
            <span>
              Based in <p className="about__vancouver">Vancouver, BC</p>, I approach software development like
              navigating a trail: clear, structured, and thoughtful. My
              background spans healthcare and biomedical engineering, with
              experience in client-facing roles that honed problem-solving and
              communication skills.
            </span>
            <span>
              I recently completed BrainStation’s Software Engineering bootcamp
              and build full-stack applications using: <span className="about__skills"><p>JavaScript</p> <p>Node.js</p> <p>Express.js</p> <p>React</p> <p>MySQL</p> <p>APIs</p> <p>Git</p> <p>Agile practices</p></span> 
              My goal is to create modern web applications that guide users smoothly,
              offering reliability, clarity, and thoughtful design.
            </span>
          </div>
          <div className="about__card-right">
            <img src={Me} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
