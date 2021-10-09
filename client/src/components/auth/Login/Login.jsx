import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "./Login.css";

const Login = () => {
    return <Fragment>
        <div className="authorizingBlock">
            <div className="authField">
                <span className="authFieldName">Enter your Email or Login</span>
                <input className="authFieldInput" placeholder="Email or Login"></input>
            </div>
            <div className="authField">
                <span className="authFieldName">Repeat a Password</span>
                <input className="authFieldInput" placeholder=" Password"></input>
                <div className="loginLastField">
                    <label className="checkBoxDiv">
                        <input type="checkbox" />
                        <span>Im a Seller</span>
                    </label>
                    <Link to="password_recovery" className="forgotPassword">Forgot your Password?</Link>
                </div>
            </div>
            <div class="submitButtonDiv">
                <button class="submitButton">Go</button>
            </div>
        </div>
        <div className="loginLinksDiv">
            <div class="loginLinksBlock1">
                <div class="loginLinksLine"></div>
                <span class="loginLinksHeader">Or</span>
                <div class="loginLinksLine"></div>
            </div>
            <div class="loginLinksBlock2">
                <a class="loginLink"></a>
                <a class="loginLink"></a>
                <a class="loginLink"></a>
            </div>
        </div>
    </Fragment>
};

export default Login;
