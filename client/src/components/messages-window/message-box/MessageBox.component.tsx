import React from "react";

import {
    UserMessageContainer,
    OthersMessageContainer,
    UserSenderName,
    OthersSenderName,
    UserMessageBox,
    OthersMessageBox,
    UserMessageText,
    OthersMessageText
} from "./MessageBox.styles";

import { IMessageProps } from "../../../types";

const MessageBox = ({ message: { text, user }, name }: IMessageProps) => {
    let isSentByCurrentUser: boolean = false;

    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) isSentByCurrentUser = true;

    return (
        isSentByCurrentUser
            ? (
                <UserMessageContainer>
                    <UserSenderName>{trimmedName}</UserSenderName>
                    <UserMessageBox>
                        <UserMessageText>{text}</UserMessageText>
                    </UserMessageBox>
                </UserMessageContainer>
            ) : (
                <OthersMessageContainer>
                    <OthersMessageBox>
                        <OthersMessageText>{text}</OthersMessageText>
                    </OthersMessageBox>
                    <OthersSenderName>{user}</OthersSenderName>
                </OthersMessageContainer>
            )
    )
}

export default MessageBox;