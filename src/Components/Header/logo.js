import React from "react";

export const Logo = (props) => {
  return (
    <img
      className="logo"
      src={props.img}
      alt="logo"
    />
  );
};

export default Logo;
