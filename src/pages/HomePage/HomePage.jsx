import { useEffect } from "react";

import "./HomePage.scss";
import Hero from "./../../components/Hero/Hero.jsx";
import About from "./../../components/About/About.jsx";
import Skills from "./../../components/Skills/Skills.jsx";
import Projects from "./../../components/Projects/Projects.jsx";
import Education from "./../../components/Education/Education.jsx";
import Experience from "./../../components/Experience/Experience.jsx";
import Contact from "./../../components/Contact/Contact.jsx";

function HomePage() {
  //smooth scroll to top when navigating to new page
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const allSkillItems = ["JavaScript", "TypeScript", "HTML", "CSS", "Sass", "ReactJS", "Bootstrap", "NodeJS", "MySQL", "Git"];

  return (
    <main>
      <div id="sectionNav"></div>
      <Hero />
      <About />
      <Projects />
      <Skills skills={allSkillItems} />
      <Education />
      <Experience />
      <Contact />
    </main>
  );
}

export default HomePage;
