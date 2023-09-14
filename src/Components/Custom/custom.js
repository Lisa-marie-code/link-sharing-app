import React, {useEffect} from "react";
import { Linknew } from "../Linknew/linknew";
import "./custom.css";
import { Save } from "../Save/save";

export const Custom = ({showPlatforms,setShowPlatforms}) => {
  
  function saveList() {

    console.log("clicked",showPlatforms);
    if (showPlatforms.length>0) {
      localStorage.setItem("showPlatforms", JSON.stringify(showPlatforms));
    }
    
  }

  useEffect(()=>{
   const data  =  localStorage.getItem("showPlatforms");
    if(data){
      setShowPlatforms(JSON.parse(data))
    }
  },[setShowPlatforms])
  
  return (
    <div className="custom_div">
      <h1>Customize your links</h1>
      <p>
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
      <Linknew showPlatforms={showPlatforms} setShowPlatforms={setShowPlatforms} />
      <Save handleSave={saveList} data={showPlatforms} />
    </div>
  );
};

export default Custom;
