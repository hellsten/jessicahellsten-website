import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Footer.scss";

function Footer() {

  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    async function getVisitors() {
      //api counter
      const response = await fetch(
        "https://api.countapi.xyz/hit/jessicahellsten-portfolio/visits"
      );
      const data = await response.json();
      setVisitors(data.value);
    }

    getVisitors();
  }, []);

  return (
    <section className="footer">
        <div className="footer__container">
            <div className="footer__legals">
                <div className="footer__counter">Visitors: {visitors}</div>
                <div className="footer__rights">© 2026 Jessica Hellsten. All Rights Reserved.</div>
            </div>
        </div>
    </section>
  );
}

export default Footer;
