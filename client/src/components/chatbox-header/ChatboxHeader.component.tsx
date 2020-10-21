import React from "react";

import { HeaderContainer, InnerLeft, InnerRight } from "./ChatboxHeader.styles";

import onlineIcon from "../../icons/onlineIcon.png";
import closeIcon from "../../icons/closeIcon.png";

const ChatboxHeader = ({ room }: { room: string }) => (
    <HeaderContainer>
        <InnerLeft>
            <img src={onlineIcon} alt="online icon" style={{ marginRight: "6px" }} />
            <h3>{room}</h3>
        </InnerLeft>
        <InnerRight>
            <a href="/"><img src={closeIcon} alt="close icon" /></a>
        </InnerRight>
    </HeaderContainer>
)

export default ChatboxHeader;