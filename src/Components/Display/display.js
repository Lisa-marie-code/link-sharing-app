import React from "react";
import "../../App.css";
import { Header } from "../Header/header";
import { Profile } from "../Profiles/profile";
import { Phone } from "../Phone/phone";
import phone from "../../images/phoneimage.svg";

export const Display = () => {
  return (
    <div className="display">
      <Header />
      <div className="grid-section">
        <Phone img={phone} />
        <Profile />
      </div>
    </div>
  );
};

export default Display;
