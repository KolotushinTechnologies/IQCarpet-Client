import React from "react";
import { Link } from "react-router-dom";

import "./ChatsButton.css";

const ChatsButton = () => {
    return (
        <Link to="/chat" className="chatBtnBlock">
            My Chats
            <div className="chatBtnNotify"></div>
        </Link>
    )
}

export default ChatsButton;