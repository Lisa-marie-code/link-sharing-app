import React, { useState } from "react";
import "./linknew.css";
import { Platform } from "../Platforms/platform";
import { AiOutlinePlus } from "react-icons/ai";
import { Started } from "../Started/started";

export const Linknew = () => {
  const [showPlatforms, setShowPlatforms] = useState([]);
  const [showStarted, setShowStarted] = useState(true);

  const showLink = () => {
    setShowPlatforms([ ...showPlatforms,<Platform key={showPlatforms.length} />]);
    setShowStarted(!showStarted);
  };

  const handleRemovePlatform = (index) => {
    setShowPlatforms((prevItems) => prevItems.filter((item, i) => i !== index));
  };

  return (
    <div>
      <button className="add-link" onClick={showLink}>
        <AiOutlinePlus />
        Add new link
      </button>
      {showPlatforms.map((showPlatform, index) => (
        <div key={index} className="platform-new-link">
          <Platform
            index={index}
            onRemove={() => handleRemovePlatform(index)}
          />
        </div>
      ))}
      <Started show={showStarted} toggleStarted={showLink} />
    </div>
  );
};

export default Linknew;
