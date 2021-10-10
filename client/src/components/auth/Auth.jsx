import React, { Fragment } from "react";

import "./Auth.css";
import AuthIllustration from "../../img/illustration.png";

import Register from "./Register/Register";
import Login from "./Login/Login";
import PasswordRecovery from "./PasswordRecovery/PasswordRecovery";
import NewPassword from "./NewPassword/NewPassword";
import { Route, Switch } from "react-router";

const Auth = () => {
    return (
        <Fragment>
            <img className="authIllustration" src={AuthIllustration} />
            <div className="authBlock">
                <Switch>
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/password_recovery" component={PasswordRecovery} />
                    <Route exact path="/new_password" component={NewPassword} />
                </Switch>
            </div>
        </Fragment>
    )
}

export default Auth;