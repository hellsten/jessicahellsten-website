import "./Education.scss";
import education from "./../../assets/data/education.js";

function Education() {
  return (
    <section className="education" id="sectionEducation">
      <div className="education__container">
        <div className="education__header">
          <div className="education__title">Education</div>
        </div>
        <div className="education__card-outside">
            <div className="education__card-container">
            {education.map((education) => (
            <div key={education.id} className="education__card">
              <div className="education__card-details">
                <div className="education__card-dates">{education.dates}</div>
                <div className="education__card-degree">{education.degree}</div>
                <div className="education__card-major">{education.major}</div>
              </div>
              <img className="education__card-logo" src={education.logo}/>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
