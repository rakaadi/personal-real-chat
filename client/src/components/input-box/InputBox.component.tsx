import React from "react";

import { InputContainer, InputBar, SendButton } from "./InputBox.styles";

import { IInputProps } from "../../types";

const InputBox = ({ setMessage, sendMessage, message }: IInputProps) => (
    <InputContainer>
        <InputBar
            type="text"
            placeholder="type a message.."
            value={message}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setMessage(event.target.value)}
            onKeyPress={event => event.key === "Enter" ? sendMessage(event) : null}
        />
        <SendButton onClick={event => sendMessage(event)} >
            Send
        </SendButton>
    </InputContainer>
);

export default InputBox;