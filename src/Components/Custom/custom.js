import React from "react";
import { Linknew } from "../Linknew/linknew";
import "./custom.css";
import { Save } from "../Save/save";

export const Custom = () => {

  
  return (
    <div className="custom_div">
      <h1>Customize your links</h1>
      <p>
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
      <Linknew />
      <Save />
    </div>
  );
};

export default Custom;
