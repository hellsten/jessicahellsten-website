import { NavLink } from "react-router-dom";
import "./UtilityNavigation.scss";

function UtilityNavigation() {
    
  const scrollToSection = (id) => {
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="utility-navigation">

      {/* <nav className="utility-navigation__container utility-navigation__mobile-on">
        <div className="utility-navigation__icon">
            <NavLink
            to="/"
          >
            Utility
          </NavLink>
        </div>
      </nav> */}

      <nav className="utility-navigation__container utility-navigation__desktop-on">
        <div className="utility-navigation__icon">
            <NavLink
            to="/"
          >
            Utility
          </NavLink>
        </div>


        <div className="utility-navigation__links">
          <NavLink
            to="/vibecode"
          >
            Vibe it
          </NavLink>
        </div>
      </nav>
    </section>
  );
}

export default UtilityNavigation;
