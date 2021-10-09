// Import Engine
import React from "react";
import { Route, Switch } from "react-router-dom";

// Import Components
// import PrivateRoute from "./PrivateRoute";
import Register from "../auth/Register/Register";
import Login from "../auth/Login/Login";
import HowItWorks from "../howItWorks/HowItWorks";
import Sellers from "../sellers/Sellers";
import Support from "../support/Support";

// Import Styles

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/how-it-works" component={HowItWorks} />
        <Route exact path="/sellers" component={Sellers} />
        <Route exact path="/support" component={Support} />
        {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
      </Switch>
    </div>
  );
}

export default Routes;
