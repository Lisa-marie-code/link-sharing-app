import React from "react";
import { Linknew } from "../Linknew/linknew";
import "./custom.css";
import { Started } from "../Started/started";
import {Save} from "../Save/save";
import { Profile } from "../Profiles/profile";


export const Custom = () => {
  return (
    <div className="custom_div">
      <h1>Customize your links</h1>
      <p>
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
      <Linknew />
      <Started />
      <Save />
      <Profile />
    </div>
  );
};

export default Custom;
