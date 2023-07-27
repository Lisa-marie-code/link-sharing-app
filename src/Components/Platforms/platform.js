import React, { useState } from "react";
import {FaGripLines,} from "react-icons/fa";
import "./platform.css";

const Platform = () => {
  const platformlinks = ["Github", "Youtube", "Linkedin","Facebook","Hashnode", "Frontend Mentor"];

  const [selectedPlatform, setSelectedPlatform] = useState("");
  const handlePlatformChange = (event) => {
    setSelectedPlatform(event.target.value);
  };



  return (
    <div className="allLinkcover" >
      <div className="link_number">
        <span>
          {" "}
          <FaGripLines /> Link #1{" "}
        </span>
        <span>Remove</span>
      </div>
      <div className="filterdropdown">
        <label htmlFor="platform">Platform:</label>
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
        <input placeholder="e.g. https://www.github.com/johnappleseed"></input>
      </div>
    </div>
  );
};

export default Platform;
