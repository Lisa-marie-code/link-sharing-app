import React from "react";
import './phone.css';
import { Content } from "../Content/content";

export const Phone = ({ showPlatforms, img }) => {
  return (
    <div className="coverPhone">
      <div className="position-relative">
        <img className="phone_img" src={img} alt="logo" />
        <div className="position-absolute top-20 px-5 background-color">
          {showPlatforms ? (
            showPlatforms.map((value) => (
              <Content key={value.link} value={value} />
            ))
          ) : (
            <p>{""}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Phone;
