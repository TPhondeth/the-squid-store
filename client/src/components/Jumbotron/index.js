import React from "react";
import hero from "../../hero.jpg";
import "./index.css";
import Player from "../../player-card.png";
import Guard from "../../guard-card.png";
// import Boss from "../../boss-card.png";
// import Vip from "../../VIP-card.png";

const index = () => {
  return (
    <>
      <div>
        <img className="hero-image" src={hero} alt="" />
      </div>
      <h1 className="card-header">Select your Choice</h1>
    </>
  );
};

export default index;
