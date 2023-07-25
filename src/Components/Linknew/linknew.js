import React from "react";
import './linknew.css'
import { AiOutlinePlus } from "react-icons/ai";

export const Linknew = () => {
  return (
    <div>
      <button className="add-link">
        <AiOutlinePlus />
        Add new link
      </button>
    </div>
  );
};

export default Linknew;
