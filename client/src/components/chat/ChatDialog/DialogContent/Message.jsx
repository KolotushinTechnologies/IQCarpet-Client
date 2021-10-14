import React from "react";

const Message = ({ timeText, fromUser, text, time }) => {
    return (
        <div className={`${timeText ? "timeMessage" : "message"} ${fromUser ? "messageFromUser" : ""}`}>
            <span className="messageText">{text}</span>
            {time && <span className="messageTime">{time}</span>}
        </div>
    )
}

export default Message;