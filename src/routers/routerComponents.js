import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../features/Login";
import Home from "../features/Home";

export const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login }
];

class routerComponents extends Component {
  render() {
    return (
      <Switch>
        {routes.map((route, index) => {
          return <Route exact key={index} {...route} />;
        })}
      </Switch>
    );
  }
}

export default routerComponents;
