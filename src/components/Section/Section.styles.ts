import styled, { keyframes } from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: calc(100vh - 70px);
`

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

type LoadingIconProps = {
  visible: boolean
}

export const LoadingIcon = styled.div<LoadingIconProps>`
  width: 100%;
  height: 100%;

  display: ${(props) => props.visible ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;

  background-color: inherit;

  transition: all ease-out 1s;

  svg {
    width: 9rem;
    height: 9rem;

    animation: ${spinAnimation} 1s linear infinite;
  }
`

export const PageNotFound = styled.div`
  width: 100%;
  height: calc(100vh - 70px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1,
  h2 {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 3rem;
  }
`

export const Albums = styled.div`
  width: 100%;
  max-width: 1140px;
  height: calc(100vh - 70px);

  display: flex;
  flex-direction: column;

  margin: auto;

  ul,
  ul li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ul {
    margin-top: 40px;

    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;

    @media (min-width: 280px) and (max-width: 475px) {
      margin-top: 10px;
    }
  }

  ul li {
    width: 100%;
    height: 50px;

    font-size: 1rem;

    display: flex;
    align-items: center;

    box-sizing: border-box;

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
  }
`

export const Navigation = styled.div`
  width: 100%;
  height: auto;

  box-sizing: border-box;

  margin-top: auto;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 280px) and (max-width: 475px) {
    margin-top: 30px;
  }

  .pages {
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 10px 0px;
  }

  .prev-next {
    widows: 100%;
    height: auto;

    display: flex;

    padding: 10px;

    button {
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
    }
  }
`