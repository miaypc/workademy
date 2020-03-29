import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "./BigNavbar.css";
import Logo from "./Images/Logo.svg";
import GreyCorner from "./Images/GreyCorner.svg";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { flexbox } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 0
  },

  flex: {
    flex: 1
  }
}));

const BigNavbar = () => {
  return (
    <div>
      <AppBar
        flexGrow={1}
        title="BigNavbar"
        position="static"
        width="100%"
        height="30%"
        style={{
          display: "flex",
          backgroundColor: "#FFFFFF",
          boxShadow: "none"
        }}
      >
        <Toolbar
          justify="space-between"
          alignContent="stretch"
          style={{
            whiteSpace: "nowrap",
            minHeight: "10px",
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: 0,
            paddingRight: 0
          }}
        >
          <Grid item>
            <img className="logo" justify="start" src={Logo} alt="Logo" />
          </Grid>
          <Grid item>
            <img
              className="grey-corner"
              justify="end"
              src={GreyCorner}
              alt="corner"
            />
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default BigNavbar;
