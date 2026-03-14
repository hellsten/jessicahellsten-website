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
              <div className="projectPage__hero__container-header">
                <div className="projectPage__hero__container-title">
                  {projectItem.title}
                </div>
                <div className="projectPage__hero__container-tagline">
                  {projectItem.tagline}
                </div>
              </div> 
               {/* <div className="projectPage__hero__container-stats">
                 {projectItem.stats.map((stat, index) => (
              <div key={index} className="projectPage__hero__container-stat">
                <div className="projectPage__hero__container-label">{stat.label}:</div>
                <div className={`projectPage__hero__container-value status--${stat.css}`}>{stat.value}
                  </div>
              </div>
            ))}
               </div> */}
              <div 
              className="projectPage__hero__container-intro">
                {projectItem.intro}
              </div>
              <div className="projectPage__hero__container-links">
                <a className="projectPage__hero__container-demoLink">
                  Demo
                </a>
                <a className="projectPage__hero__container-codeLink">
                  Code
                </a>
              </div>
            </div>
          </section>

          {/* <section className="projectPage__techStack"></section> */}
          {/* <section className="projectPage__overview">
            <div className="projectPage__overview-title">
              Overview
            </div>
            <div className="projectPage__overview-body">
              {projectItem.overview}
            </div>
          </section> */}
          <section className="projectPage__features">
            <div className="projectPage__features-title">Features</div>
            {projectItem.features.map((feature, index) => (
              <div key={index} className="projectPage__features-item">
                {feature}
              </div>
            ))}
          </section>
          <section className="projectPage__skills">
            
          </section>
          <section className="projectPage__screenshots">
            {projectItem.screenshots.map((screenshot, index) => (
              <div key={index} className="projectPage__screenshot-item">
                <div className="projectPage__screenshot-item-images">
                  {screenshot.images.map((image, index) => (
                    <img
                      key={index}
                      className="projectPage__screenshot-item-image"
                      src={image}
                    />
                  ))}
                </div>

                <div className="projectPage__screenshot-title">
                  {screenshot.title}
                </div>
                <div className="projectPage__screenshot-description">
                  {screenshot.description}
                </div>
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
