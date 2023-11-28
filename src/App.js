import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Shop from "./pages/Shop";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Switch>
            <Route
              path="/shop"
              component={Shop}
            />
            <Route
              exact
              path="/"
              component={Home}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
