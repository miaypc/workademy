import React from "react";
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import "./App.css";
import NavigationWizard from "./Pages/Navigation/NavigationWizard";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#253858" },
    secondary: { main: "#FCB536" },
    action: {
      disabledBackground: "#7D8799",
      disabled: "#7D8799"

    },

    typography: {
      fontSize: "0.7rem"
    },


    text: {
      secondary: "#7D8799",
      disabled: "#7D8799"
    },



  },
  status: {
    danger: 'orange',
  },
});



const App = () => (
  <ThemeProvider theme={theme}>

    <div>
      <NavigationWizard />
    </div>
  </ThemeProvider>
);

export default App;
