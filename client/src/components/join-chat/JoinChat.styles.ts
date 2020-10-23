import styled from "styled-components";

export const JoinContainer = styled.div`
    display: grid;
    place-items: center;
    text-align: center;
    height: 100vh;
    background-color: #24292E;
`;

export const FormContainer = styled.div`
    width: clamp(25%, 30%, 75vw);

    h1 {
        color: white;
        font-size: 2.5rem;
        padding-bottom: 10px;
        border-bottom: 2px solid white;
        margin-bottom: 12px;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        width: 90vw;
    }
`;

export const FormInput = styled.input`
    width: 100%;
    padding: 15px 20px;
    margin: 6px auto;
`;

export const JoinButton = styled.button`
    margin-top: 20px;
    color: #ffff;
    text-transform: uppercase;
    text-decoration: none;
    background: #2979FF;
    padding: 20px;
    width: 100%;
    border: none;
    border-radius: 5px;
    display: inline-block;
    cursor: pointer;

    &:focus {
        outline: 0;
    }
`;