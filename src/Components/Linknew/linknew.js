import React from "react";
import './linknew.css'
import { AiOutlinePlus } from "react-icons/ai";

export const Linknew = ({showLink}) => {
  return (
    <div>
      <button className="add-link" onClick={showLink}>
        <AiOutlinePlus />
        Add new link
      </button>
    </div>
  );
};

export default Linknew;
