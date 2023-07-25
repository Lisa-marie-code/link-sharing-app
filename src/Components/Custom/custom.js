import React from "react";
import { Linknew } from "../Linknew/linknew";
import "./custom.css";

export const Custom = () => {
  return (
    <div className="custom_div">
      <h1>Customize your links</h1>
      <p>
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
      <Linknew />
    </div>
  );
};

export default Custom;
