import styled from '@emotion/styled';

export const Button = styled.button`
    padding: 5px;
    font-size: 18px;
    margin-right: 20px;
    border-radius: 5px;
    background-color: transparent;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: transform 250ms linear;
    :hover {
        transform: scale(1.1);
    }
`;

export const Box = styled.div`
    width: 100%;
    display: flex;
`;