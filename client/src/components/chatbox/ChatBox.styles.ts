import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #24292E;

    @media (min-width: 320px) and (max-width: 480px) {
        height: 100%;
    }
`;

export const ChatBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #FFFFFF;
    border-radius: 8px;
    height: 75vh;
    width: 40%;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
        height: 100%;
    }

    @media (min-width: 480px) and (max-width: 1200px) {
        width: 60%;
    }
`;