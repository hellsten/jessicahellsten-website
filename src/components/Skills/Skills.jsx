import "./Skills.scss";
import skills from "./../../assets/data/skills.js";

function Skills() {
  return (
    <section className="skills" id="sectionSkills">
      <div className="skills__container" >
        <div className="skills__header">
          <div className="skills__title">Skills</div>
        </div>
        <div className="skills__card-container">
          {skills.map((skill) => (
            <div key={skill.id} className="skills__skill-card">
              <skill.Icon className="skills__skill-svg" />
              <div className="skills__skill-item">{skill.item}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
