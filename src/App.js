import React from "react";
import "./App.css";
import NavigationWizard from "./Pages/Navigation/NavigationWizard";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateCoursePage from "./Pages/CreateCoursePage/CreateCoursePage";



const App = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/">
          <CreateCoursePage />
        </Route>
        <Route path="/wizard">
          <NavigationWizard />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
