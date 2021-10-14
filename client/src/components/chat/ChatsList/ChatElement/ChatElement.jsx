import React from "react";
import { Link } from "react-router-dom";

import "./ChatElement.css";

const ChatElement = ({ href="/", icon="", name="", company="", text="", time="" }) => {
    return (
        <Link to={href} className="chatElem"> {/* class for selection : selectedChatElem */}
            <img className="chatElemImg" src={icon} />
            <div className="chatElemContent">
                <span className="chatElemName">{name}</span>
                <span className="chatElemCompany">{company}</span>
                <span className="chatElemText">{text}</span>
            </div>
            <span className="chatElemTime">{time}</span>
        </Link>
    )
}

export default ChatElement;