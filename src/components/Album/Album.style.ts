import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1140px;
    height: auto;

    margin: auto;
    padding: 10px;
    box-sizing: border-box;

    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
    align-items: center;

    background-color: #CCC;

    @media (min-width: 280px) and (max-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 500px) and (max-width: 767px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 768px) and (max-width: 1140px) {
        grid-template-columns: repeat(4, 1fr);
    }

    div {
        height: 250px;

        background-color: green;

        border-radius: 4px;

        @media (min-width: 280px) and (max-width: 320px) {
            height: 170px;
        }
    }
`