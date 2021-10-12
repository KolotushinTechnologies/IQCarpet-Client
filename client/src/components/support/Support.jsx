// Import Engine
import React from "react";

import AddAttachImage from "../../img/helpAddAttachImage.png";

import "./Support.css";

const Support = () => {
    return <div className="helpContent">
        <span className="helpHeader">HELP</span>
        <span className="helpSubHeader">Still have questions? Do you have any suggestions for the site? Having a problem? Fill out the feedback form and we will contact you! Or write to us!</span>
        <div className="contactLinksDiv">
            <a href="/" className="contactLink contactsLinkImage1_32"></a>
            <a href="/" className="contactLink contactsLinkImage2_32"></a>
            <a href="/" className="contactLink contactsLinkImage3_32"></a>
            <a href="/" className="contactLink contactsLinkImage4_32"></a>
            <a href="/" className="contactLink contactsLinkImage5_32"></a>
            <a href="/" className="contactLink contactsLinkImage6_32"></a>
        </div>
        <div className="helpContactsTextDiv">
            <span className="helpPhone">+7 (996) 053 81 10</span>
            <span className="helpLink">http://www.iselectricscom</span>
        </div>
        <div className="feedBackFormDiv">
            <span className="formHeader">Feedback form</span>
            <span className="feedBackFieldHeader">Name</span>
            <input className="feedBackFieldInput" defaultValue="Gavrilova Hanna Igorevna"></input>
            <span className="feedBackFieldHeader">Phone number</span>
            <input className="feedBackFieldInput" defaultValue="+7 (990) 324 11 11"></input>
            <span className="feedBackFieldHeader">Email</span>
            <input className="feedBackFieldInput" defaultValue="Gavrilova_Hanna_Ig@gmail.com"></input>
            <span className="feedBackFieldHeader">Your comment or message</span>
            <textarea className="formTextarea"></textarea>
            <label className="addAttach">
                <div src={AddAttachImage} />
                <input type="file" className="hiden" />
            </label>
            <div className="sendFormDiv">
                <button>Send the Form</button>
            </div>
        </div>
    </div>;
};

export default Support;
