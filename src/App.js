import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import Navbar from "./components/Navbar";
// pages
import Home from "./pages/Home";
// route
import { HOME_ROUTE } from "./utils/const";
const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route path={HOME_ROUTE} component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
