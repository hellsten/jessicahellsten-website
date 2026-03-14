import { useParams } from "react-router-dom";

import "./ProjectPage.scss";
import projects from "./../../assets/data/projects.js";

function ProjectPage() {
  const { id } = useParams();
  //Find function to find id in projects file
  const projectItem = projects.find((p) => p.id === id);

  return (
    <>
      <section className="projectPage">
        <div className="projectPage__container">
          <section className="projectPage__hero">
            <div className="projectPage__hero__container">
              <div className="projectPage__hero__container-title">
                {projectItem.title}
              </div>
              <div className="projectPage__hero__container-tagline">
                {projectItem.tagline}
              </div>
              <div className="projectPage__hero__container-intro">{projectItem.intro}</div>
              <div className="projectPage__hero__container-links">
                <div className="projectPage__hero__container-demoLink">
                  Demo
                </div>
                <div className="projectPage__hero__container-codeLink">
                  Code
                </div>
              </div>
            </div>
          </section>
          <section className="projectPage__overview">{projectItem.overview}</section>
          {/* <section className="projectPage__techStack"></section> */}
          <section className="projectPage__features">
            {projectItem.features.map((feature, index) => (
                  <div key={index} className="projectPage__features-item">
                    {feature}
                  </div>
                ))}
          </section>   
          <section className="projectPage__screenshots">
            {projectItem.screenshots.map((screenshot, index) => (
                  <div key={index} className="projectPage__screenshot-item">
                    <div className="projectPage__screenshot-item-images">
                      {screenshot.images.map((image, index) => (
                        
                  <img key={index} className="projectPage__screenshot-item-image" src={image} />
                ))}
                    </div>
                    
                    <div className="projectPage__screenshot-title">{screenshot.title}</div>
                    <div className="projectPage__screenshot-description">{screenshot.description}</div>
                  </div>
                ))}
          </section>
          <section className="projectPage__resources"></section>
        </div>
      </section>
    </>
  );
}

export default ProjectPage;
