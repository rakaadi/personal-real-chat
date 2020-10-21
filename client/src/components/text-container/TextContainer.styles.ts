import styled from "styled-components";

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    height: 60%;
    margin-left: 100px;

    @media (min-width: 320px) and (max-width: 1024px) {
        display: none;
    }
`;

export const PeoplesContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 50%;
`;

export const NameContainer = styled.div`
    display: flex;
    align-items: center;

    img {
        padding-left: 12px;
    }
`;