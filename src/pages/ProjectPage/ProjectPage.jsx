import { useParams, NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {  } from "react-router-dom";

import "./ProjectPage.scss";
import projects from "./../../assets/data/projects.js";

import Skills from "./../../components/Skills/Skills.jsx";

function ProjectPage() {

  //Back button
  const navigate = useNavigate();
  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  //Find function to find id in projects file
  const { id } = useParams();
  const projectItem = projects.find((p) => p.id === id);

  //smooth scroll to top when navigating to new page
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id]);

  return (
    <>
      <section className="projectPage">
        <div className="projectPage__container">
          <section className="navigation" id="sectionNav">
      <nav className="navigation__container">
        <div className="navigation__icon">
          <NavLink to="/">Jessica Hellsten</NavLink>
        </div>

        <div className="navigation__links navigation__desktop-on">
          <NavLink
            onClick={handleBack} 
          >
              ← Back
          </NavLink>
        </div>
      </nav>
    </section>
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
              <div className="projectPage__hero__container-intro">
                {projectItem.intro}
              </div>
              <div className="projectPage__hero__container-links">
                <a className="projectPage__hero__container-demoLink">Demo</a>
                <a className="projectPage__hero__container-codeLink">Code</a>
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
          <div className="projectPage__details">
            <section className="projectPage__features">
              <div className="projectPage__features-container">
                <div className="projectPage__features-title">Features</div>
                <div className="projectPage__features-items">
                  {projectItem.features.map((feature, index) => (
                    <div key={index} className="projectPage__features-item">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <section className="projectPage__skills">
              <div className="projectPage__skills-container">
                <Skills />
              </div>
            </section>
          </div>
          <section className="projectPage__screenshots">
            {projectItem.screenshots.map((screenshot, index) => (
              <div key={index} className="projectPage__screenshot-item">
                <div className="projectPage__screenshot-item-title">
                  {screenshot.title}
                </div>
                <div className="projectPage__screenshot-item-images">
                  {screenshot.images.map((image, index) => (
                    <img
                      key={index}
                      className="projectPage__screenshot-item-image"
                      src={image}
                    />
                  ))}
                </div>

                <div className="projectPage__screenshot-item-description">
                  {screenshot.description}
                </div>
              </div>
            ))}
          </section>
          <section className="projectPage__resources">
            <div className="projectPage__resources-title">
              Resources
            </div>
            <div className="projectPage__resources-container">
              
            {projectItem.resources.map((resource, index) => (
              <div key={index} className="projectPage__resource">
                <div className="projectPage__resource-name">
                  {resource.name}
                </div>
                <div className="projectPage__resource-description">
                  {resource.description}
                </div>

                <div className="projectPage__resource-link">
                  <div className="projectPage__resource-link-title">Link:</div>
                  <a>{resource.link}</a>
                </div>
              </div>
            ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default ProjectPage;
