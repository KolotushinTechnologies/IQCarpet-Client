import React from "react";
import BackButton from "../backButton/BackButton";

import "./NewOrder.css";

const NewOrder = () => {
    return (
        <div className="orderBlock">
            <BackButton />
            <h1 className="orderHeader">Application for a carpet</h1>
            <div className="orderContentDiv">
                <h2 className="orderContentHeader">A New order</h2>
                <span className="orderFieldHeader">Name</span>
                <input className="orderFieldContent" defaultValue="Gavrilova Hanna Igorevna"></input>
                <span className="orderFieldHeader">Phone number</span>
                <input className="orderFieldContent" defaultValue="+7 (990) 324 11 11"></input>
                <span className="orderFieldHeader">Email</span>
                <input className="orderFieldContent" defaultValue="Gavrilova_Hanna_Ig@gmail.com"></input>
                <span className="orderFieldHeader">Your comment</span>
                <textarea className="orderFieldContent orderTextArea"></textarea>
                <button className="orderSendBtn">Send the Application</button>
            </div>
        </div>
    )
}

export default NewOrder;