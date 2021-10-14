import React, { useState } from "react";

import "./Register.css";

import showPasswordImage from "../../../img/showPassword.png";

const Register = () => {
    const [isSeller, setIsSeller] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const companyField = <div className="authField">
        <span className="authFieldName">Enter a Company's name</span>
        <input className="authFieldInput" placeholder="Company's name"></input>
    </div>

    const phoneField = <div className="authField">
        <span className="authFieldName">Enter a phone number</span>
        <div className="phoneFieldDiv">
            <input className="authFieldInput phoneMask" placeholder="Company's name" size="1" defaultValue="+7"></input>
            <input className="authFieldInput phoneNum"></input>
        </div>
    </div>
    
    return <div className="authorizingBlock">
        <div className="regFieldsBlock">
            <div className="regLeftBlock" isseller={isSeller.toString()}>
                <div className="authField">
                    <span className="authFieldName">Enter a your surname&name&patronymic</span>
                    <input className="authFieldInput" placeholder="Name"></input>
                    <label className="checkBoxDiv">
                        <input type="checkbox" onChange={(event) => setIsSeller(event.target.checked)} />
                        <span>I am seller</span>
                    </label>
                </div>
                {isSeller && companyField}
                <div className="authField">
                    <span className="authFieldName">Enter a your BirthDay</span>
                    <div class="regBirthDaySelectDiv">
                        <select class="authFieldSelect birthdaySelect birthdaySelectDay"><option>24</option></select>
                        <select class="authFieldSelect birthdaySelect birthdaySelectMonth"><option>September</option></select>
                        <select class="authFieldSelect birthdaySelect birthdaySelectYear"><option>1998</option></select>
                    </div>
                </div>
                <div className="authField">
                    <span className="authFieldName">Choose a your location</span>
                    <input className="authFieldInput authFieldSelect" placeholder="Name"></input>
                </div>
                {!isSeller && phoneField}
                <div className="authField">
                    <span className="authFieldName">Download a your photo</span>
                    <span className="authFieldSubName">Png/Jpeg & up to 10 MB</span>
                    <label className="regDownloadImageDiv">
                        <div className="regDownloadImageBG">Tap for download</div>
                        <input className="regDownloadImageInput" type="file" accept="image/jpeg,image/png"></input>
                    </label>
                </div>
            </div>
            <div className="regRightBlock" isseller={isSeller.toString()}>
                {isSeller && phoneField}
                <div className="authField">
                    <span className="authFieldName">Make a your login</span>
                    <span className="authFieldSubName">Latin letters and numbers without spaces</span>
                    <input className="authFieldInput" placeholder="Login"></input>
                </div>
                <div className="authField">
                    <span className="authFieldName">Make a your Password</span>
                    <span className="authFieldSubName">At least 6 characters</span>
                    <input className="authFieldInput" type={showPassword ? "text" : "password"} placeholder="Password"></input><img onClick={() => setShowPassword(!showPassword)} class="regShowPassword" src={showPasswordImage} />
                </div>
                <div className="authField">
                    <span className="authFieldName">Repeat a Password</span>
                    <input className="authFieldInput" type={showPassword2 ? "text" : "password"} placeholder="Password"></input><img onClick={() => setShowPassword2(!showPassword2)} class="regShowPassword" src={showPasswordImage} />
                </div>
                <div className="authField">
                    <span className="authFieldName">Enter your Email</span>
                    <input className="authFieldInput" placeholder="Email"></input>
                    <label className="checkBoxDiv">
                        <input type="checkbox" />
                        <span>Use how login</span>
                    </label>
                </div>
            </div>
        </div>
        <div class="submitButtonDiv">
            <button class="submitButton">Go</button>
        </div>
    </div>
};

export default Register;
