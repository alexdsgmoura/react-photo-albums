import styled from "styled-components";

type SectionProps = {
  display: 'grid' | 'flex'
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: #FFFFFF;
`

export const Section = styled.section<SectionProps>`
  width: 100%;
  max-width: 1140px;
  height: calc(100% - 70px);

  box-sizing: border-box;
  padding: 20px;
  margin: auto;

  display: ${(props) => props.display === 'flex' ? 'flex' : 'grid'};
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  align-items: center;
  justify-content: center;

  @media (max-width: 997px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 280px) and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    gap: 10px;

    padding: 10px;
  }
`

export const Photo = styled.div`
  height: 60%;

  border-radius: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 280px) and (max-width: 425px) {
    width: 100%;
    height: auto;
  }
`

export const PhotoItem = styled.img`
  width: 100%;
  height: auto;

  border-radius: 15px;

  @media (max-width: 997px) {
    width: 50%;
  }

  @media (min-width: 280px) and (max-width: 425px) {
    width: 100%;
    height: auto;
  }
`

export const PhotoDesc = styled.div`
  height: 40%;

  box-sizing: border-box;
  padding: 10px;
  border-radius: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 280px) and (max-width: 425px) {
    width: 100%;
    height: auto;
  }
`
export const Span = styled.span`
  width: 60%;
  height: auto;

  color: #000000;
  text-align: center;
  font-size: 1.2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border;
  padding: 10px;

  box-shadow: 0 0px 5px 0 rgb(0 0 0 / 0.30);
  border-radius: 10px;

  @media (min-width: 280px) and (max-width: 425px) {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 774px) {
    font-size: 1.1rem;
  }

  @media (min-width: 668px) and (max-width: 773px) {
    font-size: 1.02rem;
  }

  @media (min-width: 500px) and (max-width: 667px) {
    font-size: 0.8rem;
  }
`