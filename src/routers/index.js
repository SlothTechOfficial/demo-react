import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouterComponents from "./routerComponents";

class Routers extends Component {
  render() {
    return (
      <div>
        <Router>
          <RouterComponents />
        </Router>
      </div>
    );
  }
}

export default Routers;
