import "./App.css";
import { Header } from "./Components/Header/header";
import { Phone } from "./Components/Phone/phone";
import { Custom } from "./Components/Custom/custom";
import phone from "./images/phoneimage.svg";


export const Landing = () => {

  return (
    <div className="App">
      <Header />
      <div className="grid-section">
        <Phone img={phone} />
        <Custom />
      </div>
    </div>
  );
};

export default Landing;
