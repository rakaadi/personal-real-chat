import React from "react";

import { ContentContainer, PeoplesContainer, NameContainer } from "./TextContainer.styles";

import onlineIcon from "../../icons/onlineIcon.png";
import { IUsersList } from "../../types";

const TextContainer = ({ users }: IUsersList) => {
    return (
        <ContentContainer>
            <div>
                <h1>Realtime Chat App <span role="img" aria-label="emoji">💬</span></h1>
                <h2>Build with React, Express, Node and Socket.IO</h2>
            </div>
            <div style={{ marginTop: "1rem" }}>
                <h1>People currently chatting: </h1>
                {
                    users ?
                        (
                            <PeoplesContainer>
                                <h3>
                                    {
                                        users.map(({ name }) => (
                                            <NameContainer key={name}>
                                                {name}
                                                <img src={onlineIcon} alt="online icon" />
                                            </NameContainer>
                                        ))
                                    }
                                </h3>
                            </PeoplesContainer>
                        )
                        : null
                }
            </div>
        </ContentContainer>
    )
}

export default TextContainer;
