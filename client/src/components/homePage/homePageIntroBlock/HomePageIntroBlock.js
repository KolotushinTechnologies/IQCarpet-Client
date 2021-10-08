import "./HomePageIntroBlock.css";
import HomePageIntroImage from "../../../img/homepageIntroImage.png";
import HomePageIntroImageM from "../../../img/homepageIntroImageM.png";

function HomePageIntroBlock(){
    return (
        <div className="homePageIntroBlock">
            <img class="homePageIntroImage1" src={HomePageIntroImage}/>
            <div class="slogDiv">
                <span class="slogtext1">FIND YOUR BEST CARPET</span>
                <span class="slogtext1 slogtext2">USING OUR INNOVATIVE SEARCH PLATFORM</span>
                <img class="homePageIntroImage1M" src={HomePageIntroImageM}/>
                <div class="registerButtonsDiv">
                    <button class="registerBuyer">Register as a buyer</button>
                    <button class="registerSeller">Register as a seller</button>
                </div>
                <div class="authButtonsDiv">
                    <button class="logInButton">Log In</button>
                    <button class="signUpButton">Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default HomePageIntroBlock;