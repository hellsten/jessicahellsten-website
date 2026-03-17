import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navigation from "./components/Navigation/Navigation.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import ProjectPage from "./pages/ProjectPage/ProjectPage.jsx";
import ExtraPage from "./pages/ExtraPage/ExtraPage.jsx";

function App() {

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
          <Route path="/" element={<><Navigation /><HomePage /><Footer siteMap={homeSiteMap}/></>} />
          <Route path="/project/:id" element={<><ProjectPage /><Footer siteMap={projectSiteMap}/></>} />
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
