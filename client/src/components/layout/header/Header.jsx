// Import Engine
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

// Import Styles
import iQcarpetLogo from "../../../img/iQcarpet.png";
import "./Header.css";

function Header() {
  const isAuth = false;

  const userMenu = (
    <div className="headerUserMenu">
      <span className="headerUserName">Hannah_Montana</span>
      <img className="headerUserImage" src="" />
      <div className="headerUserArrow" src="" />
    </div>
  );

  const authButtons = (
    <Fragment>
      <Link to="/login" className="loginbutton">
        Log In
      </Link>
      <Link to="/register" className="signupbutton">
        Sign Up
      </Link>
    </Fragment>
  );

  return (
    <nav className="header">
      <div className="headerLeftSide">
        <img className="headerLogo" src={iQcarpetLogo} />

        <Link to="/" className="headerChapter">
          Home
        </Link>
        <Link to="/sellers" className="headerChapter">
          Sellers
        </Link>
        <Link to="/how-it-works" className="headerChapter">
          How it works
        </Link>
        <Link to="/support" className="headerChapter">
          Support
        </Link>
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
  );
}

export default Header;
