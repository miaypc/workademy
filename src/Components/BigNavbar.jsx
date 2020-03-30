import React from "react";
import "./BigNavbar.css";
import Logo from "./Images/Logo.svg";

const BigNavbar = () => (
  <div className="header-container">
    <div className="logo-container">
      <img className="image" src={Logo} alt={Logo} />
    </div>
    <div className="right-corner"></div>
  </div>
);

export default BigNavbar;
