import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";

// Register page
import Auth from "../Auth";
import Example from "../Example";
import "../../App.css";
import Authorization from "../../utils/privateRoute";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route
              path="/example"
              component={Authorization(Example, ["manager", "admin"])}
            />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
