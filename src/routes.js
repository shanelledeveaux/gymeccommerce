import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Store from "./components/Store/Store";
import Schedule from "./components/Schedule/Schedule";
import Calculator from "./components/Calculator/Calculator";

export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={Store} path="/store" />
    <Route component={Schedule} path="/schedule" />
    <Route component={Calculator} path="/calculator" />
  </Switch>
);
