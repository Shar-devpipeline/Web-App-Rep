import React from "react";
import Logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <button className="button">Workout Plans</button>
      <button className="button">Nutrition Guides</button>
      <button className="button">Progress Tracker</button>
      <button className="button">Shop Gear</button>
      <div className="logo">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
