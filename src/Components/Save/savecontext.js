import {createContext} from 'react';



export const SaveContext = createContext({
  inputValue: "",
  setInputValue: () => {},
  saveError: "",
  setSaveError: () => {},
  selectedPlatform: "",
  setSelectedPlatform: () => {},
  handleSave: () => {},
});




