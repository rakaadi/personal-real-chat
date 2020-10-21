import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";

import "./MessagesWindow.css";
import MessageBox from "./message-box/MessageBox.component";

import { IMessagesProps } from "../../types";

const MessagesWindow = ({ messages, name }: IMessagesProps) => {
    return (
        <ScrollToBottom className="messages">
            {
                messages.map(
                    (message, i) => <div key={i}>
                        <MessageBox message={message} name={name} />
                    </div>
                )
            }
        </ScrollToBottom>
    )
}

export default MessagesWindow;
