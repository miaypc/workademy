import React from "react";
import { ThemeProvider } from '@material-ui/core/styles';
import "./App.css";
import NavigationWizard from "./Pages/Navigation/NavigationWizard";
import { theme } from "./Utils/MUIThemePersonalized";
import { lightTheme } from "./Utils/LightTheme"


const App = () => (

  <div>
    <ThemeProvider theme={theme}>
      <NavigationWizard />
    </ThemeProvider>
  </div>
);

export default App;
