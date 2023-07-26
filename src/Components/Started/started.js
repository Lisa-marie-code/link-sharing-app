import React from "react";
import "./started.css";
import { Point } from "../Started/pointhand";
import hand from "../../images/humanPoint.svg";

export const Started = () => {
  return (
    <div >
      <div className="started-text">
        <Point img={hand} />
        <h2>Let's get you started</h2>
        <p id="description">
          Use the "Add new link" button to get started.Once you have more than
          one link you can reorder and edit them.We're here to help you share
          your profiles with everyone!
        </p>
      </div>
    </div>
  );
};

export default Started;
