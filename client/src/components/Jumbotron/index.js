import React from "react";
import hero from "../../hero.jpg";
import "./index.css";

const index = () => {
  return (
    <div>
      <img className="hero-image" src={hero} alt="" />
    </div>
  );
};

export default index;
