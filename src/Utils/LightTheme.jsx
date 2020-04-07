import React from "react";
import { ThemeProvider } from "styled-components";
import Color from "./Color";

export const lightTheme = {
  palette: {
    primary: {
      background: `${Color.mainWhite}`,
      secondary: {
        background: `${Color.mainWhiteGrey}`,

        text: {
          primary: `${Color.mainNavy}`,
          secondary: `${Color.mainWhite}`,
        },
      },

      fonts: ["sans-serif", "Roboto"],
      fontSizes: {
        h1: "2.5em",
        h2: "2em",
        h3: "1.5em",
        p: "1em",
      },

      fontStyles: {
        fontWeight: "normal",
        textDecoration: "none",
      },
    },
  },
};
