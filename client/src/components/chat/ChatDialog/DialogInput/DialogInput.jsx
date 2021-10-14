import { Fragment } from "react";
import Attachment from "./Attachment";

import "./DialogInput.css";

const DialogInput = () => {
    return (
        <Fragment>
            <div className="attachmentsDiv">
                <Attachment src="" />
                <Attachment src="" />
                <Attachment src="" />
                <Attachment src="" />
            </div>
            <div className="dialogInput">
                <label className="dialogInputAddAttach">
                    <div />
                    <input type="file" accept="image/jpeg,image/png" />
                </label>
                <input type="text" className="dialogInputField" placeholder="Enter Message" />
                <button className="dialogInputSend"></button>
            </div>
        </Fragment>
    )
}

export default DialogInput;