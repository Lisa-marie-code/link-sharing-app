import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Landing } from "./Landing";
import { Profile } from "./Components/Profiles/profile";
import { SaveContext } from "./Components/Save/savecontext";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [saveError, setSaveError] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    console.log(inputValue);
    if (inputValue.trim() === "") {
      setSaveError("Invalid link");
    } else {
      setSaveError(false);
    }
    console.log("checking input value");
  };

  
  const value = {
    inputValue,
    setInputValue,
    saveError,
    setSaveError,
    handleSave,
  };

  return (
    <div className="App">
      <SaveContext.Provider value={value}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </SaveContext.Provider>
    </div>
  );
};

export default App;
