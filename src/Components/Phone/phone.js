import React from "react";
import './phone.css';


export const Phone = (props) => {
  return (
    <div className="coverPhone">
      <img className="phone_img" src={props.img} alt="logo" />
    </div>
  );
};

export default Phone;
