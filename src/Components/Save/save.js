import React, { useContext } from "react";
import { SaveContext } from "./savecontext";
import "./save.css";

export const Save = () => {
  const { handleSave } = useContext(SaveContext);

  return (
    <div className="saveCover">
      <button onClick= {handleSave} className="save-button">
        Save
      </button>
    </div>
  );
};

export default Save;
