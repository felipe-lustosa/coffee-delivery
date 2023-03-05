import styled from "styled-components";
import introBackground from "../../assets/IntroBackground.png"
import { BaseLayout } from "../../styles/global";

export const IntroContainer = styled(BaseLayout)`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  
  padding-block: 5.875rem;
  background-image: url(${introBackground});
`

export const IntroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4.125rem;
`

export const IntroTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 2rem;
    font-weight: 800;
    color: ${props => props.theme['base-title']};
  }
  
  p {
    font-size: 1.25rem;
    color: ${props => props.theme['base-subtitle']};
  }
`

export const IntroItemsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 2.5rem; 
  grid-row-gap: 1.25rem; 

  div {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 0.75rem;
  }
`

export const IconContainer = styled.div`
  background: ${(props: any) => props.theme[props.iconBackground]};
  padding: 0.5rem;
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
`

export const CoffeeListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;
  padding-block: 2rem;
  padding-inline: 10rem;
`

export const CoffeeListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CoffeeListCategories = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const CategoryButton = styled.button`
  border: 1px solid;
  border-radius: 16px;
  padding-block: 0.375rem;
  padding-inline: 0.75rem;
  border-color: ${props => props.theme['yellow-300']};
  background: ${props => props.isSelected ? props.theme['yellow-300'] : "inherit"};
  color: ${props => props.theme['yellow-700']};

  font-size: 0.625rem;
  font-weight: 700;
`

export const CoffeeListProducts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2.5rem;

  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and (min-width: 1324px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`