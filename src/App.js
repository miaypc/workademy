import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import "./App.css";
import NavigationWizard from "./Pages/Navigation/NavigationWizard";
import { lightTheme } from "./Utils/LightTheme";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateCoursePage from "./Pages/CreateCoursePage/CreateCoursePage";

const App = () => (
  <div>
    <Router>
      {/* <ThemeProvider theme={lightTheme}> */}
      <Switch>
        <Route exact path="/">
          <CreateCoursePage />
        </Route>
        <Route path="/wizard">
          <NavigationWizard />
        </Route>
      </Switch>
      {/* </ThemeProvider> */}
    </Router>
  </div>
);

export default App;
