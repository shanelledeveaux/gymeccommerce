import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Store from "./components/Store/Store";
import Schedule from "./components/Schedule/Schedule";
import Calculator from "./components/Calculator/Calculator";
import EachProduct from "./components/Store/Product/EachProduct/EachProduct";
import Pricing from "./components/Pricing/Pricing";
import Cart from "./components/Store/Cart.js/Cart";

export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={EachProduct} exact path="/store/:id" />
    <Route component={Store} path="/store" />
    <Route component={Schedule} path="/schedule" />
    <Route component={Calculator} path="/calculator" />
    <Route component={Pricing} path="/pricing" />
    <Route component={Cart} path="/cart" />
  </Switch>
);
