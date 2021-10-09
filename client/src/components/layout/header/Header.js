import { Fragment } from "react";
import { Link } from 'react-router-dom';
import iQcarpetLogo from "../../../img/iQcarpet.png";
import "./Header.css";

function Header() {
    var isAuth = false;

    var userMenu = <div className="headerUserMenu">
        <span className="headerUserName">Hannah_Montana</span>
        <img className="headerUserImage" src="" />
        <div className="headerUserArrow" src="" />
    </div>

    var authButtons = <Fragment>
        <button className="loginbutton">Log In</button>
        <button className="signupbutton">Sign Up</button>
        {/* <Link to="" className="button loginbutton">Log In</Link>
        <Link to="" className="button signupbutton">Sign Up</Link> */}
    </Fragment>

    return (
        <nav className="header">
            <div className="headerLeftSide">
                <img className="headerLogo" src={iQcarpetLogo} />

                <Link to="" className="headerChapter">Home</Link>
                <Link to="" className="headerChapter">Sellers</Link>
                <Link to="" className="headerChapter">How it works</Link>
                <Link to="" className="headerChapter">Support</Link>

            </div>
            <div className="headerCentre">
                <select className="headerNavigation">
                    <option>Home</option>
                    <option>Sellers</option>
                    <option>How it works</option>
                    <option>Support</option>
                    <option>My Profile</option>
                    <option>Chats</option>
                    <option>Terms of use</option>
                    <option>Privacy Policy</option>
                    <option>Help</option>
                </select>
            </div>
            <div className="headerRightSide">
                {isAuth ? userMenu : authButtons}
                <select className="languageSelection">
                    <option>ENG</option>
                </select>
            </div>
        </nav>
    )
}

export default Header;