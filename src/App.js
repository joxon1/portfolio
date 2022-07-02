import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import Navbar from "./components/Navbar";
// pages
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

// route
import {
  CONTACT_ROUTE,
  HOME_ROUTE,
  PROJECT_ROUTE,
  SKILLS_ROUTE,
} from "./utils/const";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={HOME_ROUTE} component={Home} />
        <Route path={SKILLS_ROUTE} component={Skills} />
        <Route path={PROJECT_ROUTE} component={Project} />
        <Route path={CONTACT_ROUTE} component={Contact} />
      </Switch>
      <Navbar />
    </Router>
  );
};

export default App;
