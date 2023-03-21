import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1140px;
    height: calc(100vh - 70px);

    margin: auto;
    padding: 10px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
`

export const PhotosList = styled.div`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    align-items: center;

    margin-top: 40px;

    @media (min-width: 280px) and (max-width: 500px) {
        margin-top: 10px;

        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 500px) and (max-width: 767px) {
        margin-top: 10px;

        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 768px) and (max-width: 1140px) {
        margin-top: 10px;

        grid-template-columns: repeat(4, 1fr);
    }
`

export const Photo = styled.div`
    height: 250px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 10px;

    a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const PhotoItem = styled.img`
    width: 100%;
    height: 100%;

    border-radius: 10px;
`