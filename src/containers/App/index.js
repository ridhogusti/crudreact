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
            <Route exact path="/login" component={Auth} />
            <PrivateRoute
              exact
              path="/data-entry"
              component={Example}
              allowedRoles={["admin"]}
            />
            <Route exact path="/list-stok" component={Customer} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
