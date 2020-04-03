import React from "react";
import { ThemeProvider } from "styled-components";
import Color from "./Color";

const theme = {
  colors: {
    mainNavy: "#253858",
    mainYellow: "#FCB536",
    mainBlue: "#006FB9",
    mainGrey: "#6B6B6B",
    mainWhite: "#FFFFFF",
    mainWhiteGrey: "#F0F0F0"
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    p: "1em",
    h2: "2em",
    h3: "2.5em"
  },
  fontStyles: {
    fontWeight: normal
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
