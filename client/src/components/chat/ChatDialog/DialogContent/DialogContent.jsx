import React from "react";

import formatMessages from "../../../../utils/formatMessages";

import "./DialogContent.css";
import Message from "./Message";

const DialogContent = ({ user, messages }) => {
    const formatedMessages = formatMessages(messages);
    
    return (
        <div className="dialogScroll">
            <div className="dialogContent">
                {
                    formatedMessages.map((messageBlock, messageBlockKey) => (
                        <div key={messageBlockKey} className="messageBlock">{
                            messageBlock.map((message, messageKey) => (
                                <Message key={messageKey} timeText={message.timeText} fromUser={message.fromUser} text={message.text} time={message.time} />
                            ))
                        }</div>
                    ))
                }
            </div>
        </div>
    )
}

export default DialogContent;