import React from "react";
import weightsImage from "../assets/weights.png";

const Header = () => {
  return (
    <>
      <img src={weightsImage} alt="Man clapping and chaulk flying everywhere" />

      <div className="header">
        <h1>The Art of Natural Bodybuilding</h1>
        <h3>Building Strength and Aesthetic Physique Without Enhancements</h3>
      </div>
    </>
  );
};

export default Header;
