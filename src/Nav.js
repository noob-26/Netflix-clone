import React, {useState, useEffect} from "react";
import netflixlogo from "./netflix-transparent-logo.png";
import avatar from "./Netflix-avatar.png";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("click");
    };
  }, []);

  return (
    <div className={`navbar ${show && "navbarblack"}`}>
      <img className="navbar__logo" src={netflixlogo} alt="Netflix Logo" />

      <img className="navbar__avatar" src={avatar} alt="Netflix Avatar" />
    </div>
  );
}

export default Nav;
