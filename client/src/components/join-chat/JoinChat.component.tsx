import React, { useState } from "react";
import { Link } from "react-router-dom";

import { JoinContainer, FormContainer, FormInput, JoinButton } from "./JoinChat.styles";

const JoinChat = () => {
    const [name, setName] = useState<string>("");
    const [room, setRoom] = useState<string>("");

    return (
        <JoinContainer>
            <FormContainer>
                <h1>Join Chat</h1>
                <div>
                    <FormInput type="text" placeholder="Your Name" onChange={(event) => setName(event.target.value)} />
                </div>
                <div>
                    <FormInput type="text" placeholder="Chat Room" onChange={(event) => setRoom(event.target.value)} />
                </div>
                <Link
                    onClick={event => (!name || !room) ? event.preventDefault() : null}
                    to={`/chat?name=${name}&room=${room}`}
                >
                    <JoinButton type="submit">
                        Join Chat
                    </JoinButton>
                </Link>
            </FormContainer>
        </JoinContainer>
    )
}

export default JoinChat;