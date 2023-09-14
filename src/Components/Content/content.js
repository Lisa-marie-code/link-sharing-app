import React from "react";
import "./content.css";
import { FaArrowRight } from "react-icons/fa";

export const Content = ({value}) => {
  return (
    <div className="pb-20">
      <section className="content_div">
      <p>{value?.platform}</p>
        <FaArrowRight className="arrow" />
      </section>
    </div>
  );
};

export default Content;
