import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1140px;
    height: calc(100vh - 70px);

    margin: auto;
    box-sizing: border-box;

    display: flex;

    flex-direction: column;
`

export const List = styled.ul`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    
    margin-top: 40px;
    padding: 10px;
    box-sizing: border-box;

    @media (min-width: 280px) and (max-width: 425px) {
      margin-top: 10px;
    }
`

export const Li = styled.li`
    box-sizing: border-box;

    width: 100%;
    height: 50px;

    font-size: 1rem;

    display: flex;
    align-items: center;

    margin-top: 10px;
    padding: 0px 10px;

    border-radius: 5px;
    border: 1px solid rgb(229 231 235);

    box-shadow: 0 0px 2px 0 rgb(0 0 0 / 0.05);

    transition: all ease-out 0.5s;

    cursor: pointer;

    a {
      width: 100%;
      height: 100%;

      text-decoration: none;
      color: #000000;

      display: flex;
      align-items: center;
    }

    &:hover {
      box-shadow: 0 0px 2px 0 rgb(0 0 0 / 1);
    }

    @media (min-width: 280px) and (max-width: 475px) {
      width: 90%;

      margin: auto;
      margin-top: 10px;

      font-size: 0.78rem;

      &:first-child {
        margin-top: 0;
      }
    }
`

export const Navigation = styled.div`
    box-sizing: border-box;

    width: 100%;
    max-width: 1140px;

    margin-top: auto;
    padding: 10px;
`

export const CountPages = styled.div`
    box-sizing: border-box;

    width: 100%;
    height: auto;

    padding: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

`

export const Span = styled.span`
    box-sizing: border-box;

    margin: 0;
    padding: 0;

    font-size: 1rem;
`

export const NextPrevButtonArea = styled.div`
    width: 100%;
    height: auto;

    margin-top: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Button = styled.button`
    width: 130px;
    height: 45px;

    background-color: inherit;
    
    border-radius: 5px;
    border-width: 1px;

    cursor: pointer;

    transition: all ease-in-out 0.5s;

    &:disabled {
        cursor: not-allowed;
    }

    &:first-child {
        margin-right: 10px;
    }

    &:last-child {
        margin-left: 10px;
    }
`