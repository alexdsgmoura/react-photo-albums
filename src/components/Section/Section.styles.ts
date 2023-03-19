import styled, { keyframes } from "styled-components";

type SectionProps = {
  flex?: string
}

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
    width: 10rem;
    height: 10rem;

    animation: ${spinAnimation} 1s linear infinite;
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

    padding: 10px;

    margin-top: 10px;

    border-radius: 5px;
    border: 1px solid rgb(229 231 235);;

    box-shadow: 0 0px 2px 0 rgb(0 0 0 / 0.05);

    transition: all ease-out 0.5s;

    cursor: pointer;

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
      width: 100px;
      height: 30px;

      background-color: inherit;

      border-radius: 5px;
      border: 1px solid rgb(51 65 85);

      margin-left: 15px;
      margin-right: 15px;

      cursor: pointer;

      transition: all ease-in-out 0.5s;

      &:disabled {
        color: #000;
        opacity: 0.7;
      }
    }
  }
`