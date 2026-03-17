import { NavLink } from "react-router-dom";

import "./Projects.scss";
import projects from "./../../assets/data/projects.js";

function Projects() {
  return (
    <section className="projects" id="sectionProjects">
      <div className="projects__container">
        <div className="projects__header">
          <div className="projects__title">Projects</div>
        </div>
        <div className="projects__card-container">
            {projects.map((project) => (
          <div key={project.id} className="project__card">
            <img src={project.image} alt={`${project.title} preview`} className="project__card-image" />
            <div className="project__card-title">{project.title}</div>
            <div className="project__card-intro">{project.intro}</div>
            <div className="project__card-skills">
                {project.skills.map((skill, index) => (
                    <div key={index} className="project__card-skills-item">{skill}</div>
            ))}
            </div>
            <div className="project__card-links">
              <NavLink className="project__card-links-learnmore" to={`/project/${project.id}`}>
                Learn More
              </NavLink>
              <div className="project__card-links-group">
                <a className="project__card-demo" href={project.demoLink}>Demo</a>
              <a className="project__card-code" href={project.codeLink}>Code</a>
                </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
