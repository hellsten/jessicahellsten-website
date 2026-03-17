import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import "./App.scss";

import UtilityNavigation from './components/UtilityNavigation/UtilityNavigation.jsx'
import Navigation from "./components/Navigation/Navigation.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import ProjectPage from "./pages/ProjectPage/ProjectPage.jsx";
import MagicalVibeCodePage from "./pages/MagicalVibeCodePage/MagicalVibeCodePage.jsx";
import VibeCodePage from "./pages/VibeCodePage/VibeCodePage.jsx";

function App() {

  useEffect(() => {
    const navSection = document.getElementById("sectionNav");
    if (navSection) {
      navSection.scrollIntoView({ behavior: "auto", block: "start" });
    }
  }, []);

  const homeSiteMap=[
    "About", "Skills", "Projects", "Education", "Experience", "Contact",
  ]

  const projectSiteMap=[
   "Overview", "Features", "Skills", "Screenshots", "Resources",
  ]

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<><UtilityNavigation /><Navigation /><HomePage /><Footer siteMap={homeSiteMap}/></>} />
            <Route path="/project/:id" element={<><ProjectPage /><Footer siteMap={projectSiteMap}/></>} />
            <Route path="/magical-vibecode" element={<MagicalVibeCodePage/>}/>
            <Route path="/vibecode" element={<VibeCodePage />} />
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
