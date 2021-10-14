import React from "react";
import formatDialogDate from "../../../utils/formatDialogDate";

import "./ChatDialog.css";
import DialogContent from "./DialogContent/DialogContent";
import DialogInput from "./DialogInput/DialogInput";

const ChatDialog = ({ userSelected, user }) => {

    const {icon, name, role, online, messages} = {
        icon: "",
        name: "Indira Gera - Lolwa",
        role: "Carpetites",
        online: 1631215980000,
        messages: [
            {
                text: "Hi, what kind of carpets are there?",
                time: 1634221183265,
                fromUser: true
            },
            {
                text: "Good afternoon! We have a huge selection of carpets. What are you interested in?",
                time: 1634221183265,
                fromUser: false
            },
            {
                text: "Good afternoon! We have a huge selection of carpets. What are you interested in?",
                time: 1634221183265,
                fromUser: false
            },
            {
                text: "Hi, what kind of carpets are there?",
                time: 1634221183265,
                fromUser: true
            },
            {
                text: "Hi, what kind of carpets are there?",
                time: 1634221183265,
                fromUser: true
            },
            {
                text: "Good afternoon! We have a huge selection of carpets. What are you interested in?",
                time: 1634221183265,
                fromUser: false
            },
            {
                text: "Hi, what kind of carpets are there?",
                time: 1634221183265 - 86400005,
                fromUser: true
            },
            {
                text: "Hi, what kind of carpets are there?",
                time: 1634221183265 - 86400005,
                fromUser: true
            },
            {
                text: "Hi, what kind of carpets are there?",
                time: 1634221183265 - 86400005,
                fromUser: true
            }
        ]
    }

    return (
        <div className={`dialogBlock ${userSelected ? "chatUserSelected" : ""}`}>
            <div className="dialogHeader">
                <img className="dialogImg" src={icon} />
                <div className="dialogHeaderData">
                    <div className="dialogHeaderName">
                        <h3 className="dialogName">{name}</h3> 
                        <span className="dialogRole">{role}</span> 
                    </div>
                    <span className="dialogTime">{formatDialogDate(online)}</span>
                </div>
            </div>
            <DialogContent user={user} messages={messages} />
            <DialogInput />
        </div>
    )
}

export default ChatDialog;