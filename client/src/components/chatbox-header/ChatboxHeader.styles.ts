import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #2979FF;
    border-radius: 4px 4px 0 0;
    height: 60px;
    width: 100%;
`;

export const InnerLeft = styled.div`
    flex: 0.5;
    display: flex;
    align-items: center;
    margin-left: 1rem;
    color: white;
`;

export const InnerRight = styled.div`
    flex: 0.5;
    display: flex;
    justify-content: flex-end;
    margin-right: 1rem;
`;