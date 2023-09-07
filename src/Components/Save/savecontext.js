import {createContext} from 'react';



export const SaveContext = createContext({
  inputValue: "",
  setInputValue: () => {},
  saveError: "",
  setSaveError: () => {},
  handleSave: () => {},
});




