import React, { useState,useContext} from "react";
import { FaGripLines } from "react-icons/fa";
import { SaveContext } from "../../Components/Save/savecontext";
import "./platform.css";

export const Platform = ({ onRemove, index }) => {
  

  const { inputValue, setInputValue, saveError, setSaveError } = useContext(SaveContext); // i aded setSaveError

  const platformlinks = [
    "Github",
    "Youtube",
    "Linkedin",
    "Facebook",
    "Hashnode",
    "Frontend Mentor",
  ];

  const [selectedPlatform, setSelectedPlatform] = useState("Github"); // set the default platform to Github
  const handlePlatformChange = (event) => {
    setSelectedPlatform(event.target.value);
    validateURL(inputValue,event.target.value); // validate input value when the platform changes
  };

  const handleRemove = () => {
    onRemove(index);
  };


  //function handle for the validation
  function validateURL(inputValue, serviceName) {
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/; //regulation expression for checking if is a url
    const formattedText = serviceName.toLowerCase().replace(/\s+/g, ""); // using the platform to check the type of link so formated to remove withspace and to lowercase
    if (!urlPattern.test(inputValue) || !inputValue.includes(formattedText)) { 
      setSaveError(`Input is not a valid ${serviceName} URL`); // if is not a link or the link is not for that platform we set the error message
    }else{
      setSaveError(null); // else set it to null
    }
    setInputValue(inputValue) // the input value will always go through even if the input value is not valid
  }

  return (
    <div className="allLinkcover">
      <div className="link_number">
        <span >
          {" "}
          <FaGripLines /> Link #{index + 1}{" "}
        </span>
        <span onClick={handleRemove}>Remove</span>
      </div>
      <div className="filterdropdown">
        <label htmlFor="platform">Platform</label>
        <select
          id="platform"
          value={selectedPlatform}
          onChange={handlePlatformChange}
        >
          {platformlinks.map((platform) => (
            <option key={platform} value={platform}>
              {platform}
            </option>
          ))}
        </select>
      </div>
      <div className="inputLink">
        Link
        <input
          value={inputValue}
          className={`${saveError ? "has-error" : ""}`}
          type="text"
          placeholder="e.g. https://www.github.com/johnappleseed"
          onChange={(e) => validateURL(e.target.value,selectedPlatform)} // changed to do the validation before is set to inputValue
        />
      {saveError && <div className="error-message">{saveError}</div>}
      </div>
    </div>
  );
};

export default Platform;