import { useEffect } from "react";

import './HomePage.scss'
import About from './../../components/About/About.jsx'
import Skills from './../../components/Skills/Skills.jsx'
import Projects from './../../components/Projects/Projects.jsx'
import Education from './../../components/Education/Education.jsx'
import Experience from './../../components/Experience/Experience.jsx'
import Contact from './../../components/Contact/Contact.jsx'

function HomePage() {

  //smooth scroll to top when navigating to new page
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <main>
    <div id="sectionNav"></div>
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Contact />
    </main>
  )
}

export default HomePage