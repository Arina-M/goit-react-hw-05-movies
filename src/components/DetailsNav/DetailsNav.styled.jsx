import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const Additional = styled.h2`
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 25px;
    line-height: 1.2;
    letter-spacing: 0.02em;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    color: #483d8b;
`;

export const DetailsList = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 40px;
    margin-bottom: 20px;
`;

export const DetailsItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: #483d8b;
    &:hover{
        color: #fff;
        background-color: #483d8b;
    };

    &:focus {
        color: #fff;
        background-color: #483d8b;
        outline: none;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
    };
`;

export const LinkCast = styled(NavLink)`
    font-weight: 500;
    font-size: 25px;
    line-height: 1.2;
    letter-spacing: 0.02em;
    color: #483d8b;
    &:hover{
        color: #fff;
        background-color: #483d8b;
    };

    &:focus {
        color: #fff;
        outline: none;
        background-color: #483d8b;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
    };
`;