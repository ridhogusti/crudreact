import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";

// Register page
import Auth from "../Auth";
import Example from "../Example";
import Customer from "../Customer";
import "../../App.css";
import PrivateRoute from "../../utils/privateRoute";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route exact path="/auth" component={Auth} />
            <PrivateRoute
              exact
              path="/example"
              component={Example}
              allowedRoles={["admin"]}
            />
            <PrivateRoute
              exact
              path="/customer"
              component={Customer}
              allowedRoles={["customer"]}
            />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
