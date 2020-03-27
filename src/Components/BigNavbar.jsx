import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "./BigNavbar.css";
import Logo from "./Images/Logo.svg";
import GreyCorner from "./Images/GreyCorner.svg";


const BigNavbar = () => {
  return (
    <div>
      <AppBar
        title="BigNavbar"
        position="static"
        style={{ backgroundColor: "#FFFFFF", boxShadow: "none" }}
      >
        <Toolbar width="100%">
          <img className="logo" src={Logo} alt="Logo" />
          <img className="grey-corner" src={GreyCorner} alt="corner" />
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default BigNavbar;
