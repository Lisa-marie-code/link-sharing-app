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

  // Function to update isMobileView based on screen width
  const updateIsMobileView = () => {
    setIsMobileView(window.innerWidth <= 768); // You can adjust the breakpoint as needed
  };

  useEffect(() => {
    // Add an event listener to update isMobileView when the window is resized
    window.addEventListener("resize", updateIsMobileView);

    // Initial check of screen width
    updateIsMobileView();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateIsMobileView);
    };
  }, []);

  return (
    <div>
      <header className="dev-link">
        {isMobileView ? (
          // Show Moblogo in mobile view
          <Moblogo img={minilogo} className="minilogo" />
        ) : (
          // Show Logo in non-mobile view
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
        <Mobpreview img={minipreview} id="minipreview"/>
      </header>
    </div>
  );
};

export default Header;
