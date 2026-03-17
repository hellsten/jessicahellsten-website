import "./Experience.scss";
import experience from "./../../assets/data/experience.js";

function Experience() {
  return (
    <section className="experience" id="sectionExperience">
      <div className="experience__container">
        <div className="experience__header">
          <div className="experience__title">Experience</div>
        </div>
        <div className="experience__card">
          {experience.map((experience) => (
            <div key={experience.id} className="experience__card-outside">
              <div className="experience__card-container">
                <img className="experience__card-logo" src={experience.logo} alt={`${experience.company} logo`} />
                <div className="experience__card-details">
                  <div className="experience__card-dates">
                    {experience.dates}
                  </div>
                  <div className="experience__card-company">
                    {experience.company}
                  </div>
                  <div className="experience__card-position">
                    {experience.position}
                  </div>
                  <div className="experience__card-location">
                    {experience.location}
                  </div>
                </div>
              </div>
              <div className="experience__card-line">
                <div className="experience__card-line-dot">•</div>
                <div className="experience__card-line-line"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
