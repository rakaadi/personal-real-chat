import styled, { css } from "styled-components";

const messageContainerProps = css`
    display: flex;
    margin-top: 4px;
    padding: 0 8px;
`;

export const UserMessageContainer = styled.div`
    ${messageContainerProps}
    justify-content: flex-end;
`;

export const OthersMessageContainer = styled.div`
    ${messageContainerProps}
    justify-content: flex-start;
`;

const senderNameProps = css`
    display: flex;
    align-items: center;
    font-family: Helvetica, sans-serif;
    font-size: 10px;
    color: #828282;
    letter-spacing: 0.4px;
`;

export const UserSenderName = styled.p`
    ${senderNameProps}
    padding-right: 10px;
`;

export const OthersSenderName = styled.p`
    ${senderNameProps}
    padding-left: 10px;
`;

const messageBoxProps = css`
    border-radius: 20px;
    padding: 5px 20px;
    color: white;
    display: inline-block;
    max-width: 80%;
`;

export const UserMessageBox = styled.div`
    ${messageBoxProps}
    background: #2979FF;
`;

export const OthersMessageBox = styled.div`
    ${messageBoxProps}
    background: #F3F3F3;
`;

const messageTextProps = css`
    width: 100%;
    letter-spacing: 0;
    float: left;
    font-size: 1rem;
    word-wrap: break-word;
`;

export const UserMessageText = styled.p`
    ${messageTextProps}
    color: white;
`;

export const OthersMessageText = styled.p`
    ${messageTextProps}
    color: #353535;
`;
