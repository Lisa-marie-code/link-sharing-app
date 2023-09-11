import React, { useContext } from "react";
import "./content.css";
import { FaArrowRight } from "react-icons/fa";
import { SaveContext } from "../../Components/Save/savecontext";

export const Content = () => {
  const { selectedPlatform } = useContext(SaveContext);

  return (
    <div>
      <section className="content_div">
      <p>{selectedPlatform}</p>
        <FaArrowRight className="arrow" />
      </section>
    </div>
  );
};

export default Content;
