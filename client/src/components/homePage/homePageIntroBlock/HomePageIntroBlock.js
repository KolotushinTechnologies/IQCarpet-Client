// Import Engine
import React from "react";

import "./HomePageIntroBlock.css";

import HomePageIntroImage from "../../../img/homepageIntroImage.png";
import HomePageIntroImageM from "../../../img/homepageIntroImageM.png";
import { Link } from "react-router-dom";

function HomePageIntroBlock(){
    return (
        <div className="homePageIntroBlock">
            <img className="homePageIntroImage1" src={HomePageIntroImage}/>
            <div className="slogDiv">
                <span className="slogtext1">FIND YOUR BEST CARPET</span>
                <span className="slogtext1 slogtext2">USING OUR INNOVATIVE SEARCH PLATFORM</span>
                <img className="homePageIntroImage1M" src={HomePageIntroImageM}/>
                <div className="registerButtonsDiv">
                    <Link to="/register" className="registerBuyer"><button>Register as a buyer</button></Link>
                    <Link to="/register" className="registerSeller"><button>Register as a seller</button></Link>
                </div>
                <div className="authButtonsDiv">
                    <Link to="/login" className="logInButton"><button>Log In</button></Link>
                    <Link to="/register" className="signUpButton"><button>Sign Up</button></Link>
                </div>
            </div>
        </div>
    )
}

export default HomePageIntroBlock;