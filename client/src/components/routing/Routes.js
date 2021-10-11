// Import Engine
import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

// Import Components
// import PrivateRoute from "./PrivateRoute";
import Auth from "../auth/Auth";
import HowItWorksPage from "../howItWorksPage/HowItWorksPage";
import Sellers from "../sellers/Sellers";
import Support from "../support/Support";
import Profile from "../profile/Profile";
import Chats from "../chats/Chats";
import Orders from "../orders/Orders";

// Import Styles

function Routes() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/register" component={Auth} />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/password_recovery" component={Auth} />
        <Route exact path="/new_password" component={Auth} />
        <Route exact path="/how-it-works" component={HowItWorksPage} />
        <Route exact path="/sellers" component={Sellers} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/chats" component={Chats} />
        <Route exact path="/orders" component={Orders} />
        {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
      </Switch>
    </Fragment>
  );
}

export default Routes;
