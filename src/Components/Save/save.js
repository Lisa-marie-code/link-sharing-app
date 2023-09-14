import React from "react";
import "./save.css";

export const Save = ({ handleSave, data }) => {
  const isDataEmpty = !data || data.length < 1;

  return (
    <div className="saveCover">
      <button disabled={isDataEmpty} onClick={handleSave} className="save-button">
        Save
      </button>
    </div>
  );
};

export default Save;
