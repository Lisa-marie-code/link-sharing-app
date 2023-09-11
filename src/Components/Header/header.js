import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Logo, Moblogo,Mobpreview } from "./logo";
import { BiLink } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import "./header.css";
import dev from "../../images/logo.png";
import minilogo from "../../images/solar_link-circle-bold.svg";
import minipreview from "../../images/ph_eye-bold.svg";

export const Header = () => {
  const [isMobileView, setIsMobileView] = useState(false);

 
  const updateIsMobileView = () => {
    setIsMobileView(window.innerWidth <= 480); 
  };

  useEffect(() => {
    window.addEventListener("resize", updateIsMobileView);
    updateIsMobileView();

    return () => {
      window.removeEventListener("resize", updateIsMobileView);
    };
  }, []);

  return (
    <div>
      <header className="dev-link">
        {isMobileView ? (
          <Moblogo img={minilogo} className="minilogo" />
        ) : (
          <Logo img={dev} className="logo" />
        )}
        <div id="profile">
          <Link to="/">
            <button className="link">
              <BiLink className="file-icon " />
              <span> Links</span>
            </button>
          </Link>
          <Link to="/profile">
            <button className="profile-details">
              <CgProfile className="name-icon" />
              <span>Profile Details</span>
            </button>
          </Link>
        </div>
        <button className="preview">Preview</button>
        {isMobileView && <Mobpreview img={minipreview} id="minipreview" />}
      </header>
    </div>
  );
};

export default Header;
