import React,{useState} from "react";
import './linknew.css'
import {Platform} from "../Platforms/platform"
import { AiOutlinePlus } from "react-icons/ai";

export const Linknew = () => {
  const [showPlatforms,setShowPlatforms] = useState([])

const showLink = () => {
setShowPlatforms([...showPlatforms, <Platform key={showPlatforms.length} />]);
}

const handleRemovePlatform = (index) => {
  setShowPlatforms((prevItems) => prevItems.filter((item, i) => i !== index));
};

  return (
    <div>
      <button className="add-link" onClick={showLink}>
        <AiOutlinePlus />
        Add new link
      </button>
      {showPlatforms.map((showPlatform,index) => (
        <div key={index}>
         <Platform
            index={index}
            onRemove={() => handleRemovePlatform(index)}
          />
      </div>
      ))}
    </div>
  );
};

export default Linknew;
