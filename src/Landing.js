import "./App.css";
import React, {useState} from "react"
import { Header } from "./Components/Header/header";
import { Phone } from "./Components/Phone/phone";
import { Custom } from "./Components/Custom/custom";
import phone from "./images/phoneimage.svg";



export const Landing = () => {
  const [showPlatforms, setShowPlatforms] = useState([]);

  return (
    <div className="App">
      <Header />
      <div className="grid-section">
        <Phone showPlatforms={showPlatforms} img={phone} />
        <Custom showPlatforms={showPlatforms} setShowPlatforms={setShowPlatforms} />
      </div>
    </div>
  );
};

export default Landing;
