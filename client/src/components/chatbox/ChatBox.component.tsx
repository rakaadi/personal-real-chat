import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import { Container, ChatBoxContainer } from "./ChatBox.styles";
import ChatboxHeader from "../chatbox-header/ChatboxHeader.component";
import MessagesWindow from "../messages-window/MessagesWindow.component";
import InputBox from "../input-box/InputBox.component";
import TextContainer from "../text-container/TextContainer.component";

import { ChatProps, User, IMessageProps } from "../../types";

const ENDPOINT = "https://personal-real-chat.herokuapp.com/";
// const ENDPOINT = "localhost:5000"; // For development only
let socket: any;

const ChatBox = ({ location }: ChatProps) => {
    const [name, setName] = useState<string>("");
    const [room, setRoom] = useState<string>("");
    const [users, setUsers] = useState<User[]>([]);
    const [message, setMessage] = useState<string>("");
    const [messages, setMessages] = useState<IMessageProps["message"][]>([]);

    useEffect(() => {
        const { name, room }: (any) = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit("join", { name, room }, (error: Error) => {
            if (error) alert(error)
        })

    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on("message", (message: IMessageProps["message"]) => {
            setMessages((messages) => [...messages, message]);
        })

        socket.on("roomData", ({ users }: any) => {
            setUsers(users);
        })
    }, []);

    const sendMessage = (event: Event) => {
        event.preventDefault();

        if (message) {
            socket.emit("sendMessage", message, () => setMessage(""));
        }
    }

    return (
        <Container>
            <ChatBoxContainer>
                <ChatboxHeader room={room} />
                <MessagesWindow messages={messages} name={name} />
                <InputBox message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </ChatBoxContainer>
            <TextContainer users={users} />
        </Container>
    )
}

export default ChatBox;