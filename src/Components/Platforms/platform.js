import React, {useState} from "react";
import { FaGripLines } from "react-icons/fa";
import "./platform.css";

export const Platform = ({setInputValue,data, onRemove, index }) => {
  const [saveError, setSaveError] = useState("");

  const platformlinks = [
    "Github",
    "Youtube",
    "Linkedin",
    "Facebook",
    "Hashnode",
    "Frontend Mentor",
  ];
  const handlePlatformChange = (event) => {
    validateURL(data.link,event.target.value); // validate input value when the platform changes
    setInputValue(index,event.target.value,"platform")
  };

  const handleRemove = () => {
    onRemove(index);
  };

  const handleLinkChange = (event) => {
    validateURL(event.target.value,data.platform); // validate input value when the platform changes
    setInputValue(index,event.target.value,"link")
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
          value={data.platform}
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
          value={data.link}
          className={`${saveError && data.link ? "has-error" : ""}`}
          type="text"
          placeholder="e.g. https://www.github.com/johnappleseed"
          onChange={handleLinkChange} 
        /> 
      {data.link && saveError && <div className="error-message">{saveError}</div>}
      </div>
    </div>
  );
};

export default React.memo(Platform);