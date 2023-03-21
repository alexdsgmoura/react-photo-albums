import styled from "styled-components";

import styleScript from '../../assets/fonts/StyleScript-Regular.ttf'

export const Header = styled.header`
    width: 100%;
    height: 70px;

    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`

export const Container = styled.div`
    width: 100%;
    max-width: 1140px;
    height: 100%;

    box-sizing: border-box;

    display: flex;
    align-items: center;

    margin: auto;
    padding: 0px 10px;

    a {
        text-decoration: none;
        color: #000000;
    }
`

export const title = styled.h1`
    margin: 0;

    font-size: 1.6rem;

    cursor: pointer;
    user-select: none;
`

export const span = styled.span`
    font-family: 'Style Script';

    @font-face {
        font-family: 'Style Script';
        src: url(${styleScript}) format(truetype);
    }

`