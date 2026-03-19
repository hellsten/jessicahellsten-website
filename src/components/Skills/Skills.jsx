import "./Skills.scss";
import allSkills from "./../../assets/data/skills.js";

function Skills({skills}) {
  const filteredSkills = allSkills.filter((skill) =>
    skills.includes(skill.item)
  );

  return (
    <section className="skills" id="sectionSkills">
      <div className="skills__container" >
        <div className="skills__header">
          <div className="skills__title">Skills</div>
        </div>
        <div className="skills__card-container">
          {filteredSkills.map((skill) => (
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
