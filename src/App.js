import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Landing } from "./Landing";
import { Display } from "./Components/Display/display";
import { SaveContext } from "./Components/Save/savecontext";

const App = ({showLink}) => {
  const [inputValue, setInputValue] = useState("");
  const [saveError, setSaveError] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("Github");

  const handleSave = (e) => {
    e.preventDefault();
    console.log(inputValue);
    if (inputValue.trim() === "") {
      setSaveError("Can't be empty");
    } else {
      setSaveError(false);
    }
    console.log("checking input value");
    setInputValue("");
  };

 

  const value = {
    inputValue,
    setInputValue,
    saveError,
    setSaveError,
    handleSave,
  selectedPlatform,
  setSelectedPlatform
  };

  return (
    <div className="App">
      <SaveContext.Provider value={value}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/profile" element={<Display />} />
        </Routes>
      </SaveContext.Provider>
    </div>
  );
};

export default App;
