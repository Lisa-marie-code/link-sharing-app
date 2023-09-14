import React from "react";
import "./linknew.css";
import { Platform } from "../Platforms/platform";
import { AiOutlinePlus } from "react-icons/ai";
import { Started } from "../Started/started";

export const Linknew = ({showPlatforms,setShowPlatforms}) => {
  
  const showLink = () => {
    setShowPlatforms([ ...showPlatforms,{platform: "Github",link:""}]);
    
  };

  const handleRemovePlatform = (index) => {
    setShowPlatforms((prevItems) => prevItems.filter((item, i) => i !== index));
  };

  function setInputValue(index,value,type) {
    const data = [...showPlatforms];
    data[index][type] = value;
    setShowPlatforms(data);
  }

  return (
    <div>
      <button className="add-link" onClick={showLink}>
        <AiOutlinePlus />
        Add new link
      </button>
      {showPlatforms.map((showPlatform, index) => (
        <div key={showPlatform.link} className="platform-new-link">
          <Platform
            setInputValue={setInputValue}
            data={showPlatform}
            index={index}
            onRemove={() => handleRemovePlatform(index)}
          />
        </div>
      ))}
     {showPlatforms.length === 0 && <Started show={true} toggleStarted={() => {}} />}
    </div>
  );
};

export default React.memo(Linknew);
