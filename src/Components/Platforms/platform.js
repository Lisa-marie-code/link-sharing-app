import React ,{useState}from "react";
import { FaGripLines } from "react-icons/fa";
import "./platform.css";

const Platform = () => {
  const platformlinks = [ "Github","Youtube","LinkedIn","Facebook", "Frontend Mentor","Hashnode"];

  const [selectedPlatform, setSelectedPlatform] = useState('');

  const handlePlatformChange = (event) => {
    setSelectedPlatform(event.target.value);
  };


  return (
    <div>
      <div className="link_number">
        <span>
          {" "}
          <FaGripLines /> Link #1{" "}
        </span>
        <span>Remove</span>
      </div>
      <div>
      <label htmlFor="platform">Platform:</label>
      <select id="platform" value={selectedPlatform} onChange={handlePlatformChange}>
        {platformlinks.map((platform) => (
          <option key={platform} value={platform}>
            {platform}
          </option>
        ))}
      </select>
    </div>
    </div>
  );
};

export default Platform;
