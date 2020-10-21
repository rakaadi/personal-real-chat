import styled from "styled-components";

export const InputContainer = styled.form`
    display: flex;
    border-top: 2px solid #D3D3D3;
`;

export const InputBar = styled.input`
    border: none;
    border-radius: 0;
    width: 80%;
    padding: 8px;
    font-size: 1.25rem;

    &:focus {
        outline: none;
    }
`;

export const SendButton = styled.button`
    color: #ffff;
    text-transform: uppercase;
    text-decoration: none;
    background: #2979FF;
    padding: 20px;
    width: 25%;
    border: none;
    display: inline-block;
`;