import React, { useState } from "react";
import { FaGripLines } from "react-icons/fa";
import "./platform.css";

export const Platform = ({ onRemove, index }) => {
  const [inputValue, setInputValue] = useState("");
  const [saveError, setSaveError] = useState("");

  const platformlinks = [
    "Github",
    "Youtube",
    "Linkedin",
    "Facebook",
    "Hashnode",
    "Frontend Mentor",
  ];

  const [selectedPlatform, setSelectedPlatform] = useState("");
  const handlePlatformChange = (event) => {
    setSelectedPlatform(event.target.value);
  };

  const handleRemove = () => {
    console.log("remove platform");
    onRemove(index);
  };


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
          onChange={(e) => setInputValue(e.target.value)}
        />
      {saveError && <div className="error-message">{saveError}</div>}
      </div>
    </div>
  );
};

export default Platform;
