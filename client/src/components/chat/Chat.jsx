import { Fragment } from "react";
import BackButton from "../backButton/BackButton";

import "./Chat.css";
import ChatDialog from "./ChatDialog/ChatDialog";
import ChatsList from "./ChatsList/ChatsList";

const Chat = ({match}) => {
    const userSelected = match.params.id !== undefined;
    const userId = match.params.id ?? 0;

    console.log(match);

    const chats = [
        {
            icon: "",
            name: "Angela Lily",
            company: "Paty-ink.",
            text: "What? Its a perfect Carpet asdasdasd",
            time: "12:30"
        },
        {
            icon: "",
            name: "Angela Lily",
            /* company: "Paty-ink.", */
            text: "What? Its a perfect Carpet asdasdasddddddddddddddddd",
            time: "12:30"
        },
        {
            icon: "",
            name: "Angela Lily",
            company: "Paty-ink.",
            text: "What? Its a perfect Carpet asdasdasddddddddddddddddd",
            time: "12:30"
        },
        {
            icon: "",
            name: "Angela Lily",
            company: "Paty-ink.",
            text: "What? Its a perfect Carpet asdasdasddddddddddddddddd",
            time: "12:30"
        }
    ]

    return (
        <Fragment>
            <BackButton />
            <h1 className="chatHeader">Messages</h1>
            <div className="chatContent">
                <ChatsList userSelected={userSelected} chats={chats} />
                <ChatDialog userSelected={userSelected} user={userId} />
            </div>
        </Fragment>
    )
}

export default Chat;