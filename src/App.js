import React from "react";
import { ThemeProvider } from '@material-ui/core/styles';
import "./App.css";
import NavigationWizard from "./Pages/Navigation/NavigationWizard";
import { lightTheme } from "./Utils/LightTheme"
import Button from '@material-ui/core/Button';


const App = () => (

  <div>
    {/* <ThemeProvider theme={lightTheme}> */}
    <NavigationWizard />
    {/* </ThemeProvider> */}
  </div>
);

export default App;
