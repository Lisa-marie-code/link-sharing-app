import React,{useContext} from "react";
import './phone.css';
import {Content} from "../Content/content"
import { SaveContext } from "../../Components/Save/savecontext";


export const Phone = (props) => {


  const { selectedPlatform } = useContext(SaveContext);
  
  return (
    <div className="coverPhone">
         <Content selectedPlatform={selectedPlatform}/>
      <img className="phone_img" src={props.img} alt="logo" />
   
    </div>
  );
};

export default Phone;
