import React from "react";
import { Logo } from "./logo";
import { BiLink } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import "./header.css";
import dev from "../../images/logo.png";

export const Header = () => {
  return (
    <div>
      <header className="dev-link">
        <Logo img={dev} className="logo"/>
        <div id="profile">
          <button className="link">
            <BiLink className="file-icon" />
            Links
          </button>
          <button className="profile-details">
            <CgProfile className="name-icon" />
            Profile Details
          </button>
        </div>
        <button className="preview">Preview</button>
      </header>
    </div>
  );
};

export default Header;
