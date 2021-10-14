import React from "react";

import ChatElement from "./ChatElement/ChatElement";

import "./ChatsList.css";

const ChatsList = ({ userSelected, chats = []}) => {
    return (
        <div className={`chatsBlock ${userSelected ? "chatUserSelected" : ""}`}>
            <h2 className="chatsHeader">Chats</h2>
            <div className="chatsDiv">
                {
                    chats.map((value, index) => (
                        <ChatElement key={index} href={`/chat/${index}`} icon={value.icon} name={value.name} company={value.company} text={value.text} time={value.time} />
                    ))
                }
            </div>
        </div>
    )
}

export default ChatsList;