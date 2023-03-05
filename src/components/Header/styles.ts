import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 2rem;
  padding-inline: 10rem;

  nav {
    display: flex;
    gap: 0.75rem;

    span {
      display: flex;
      gap: 0.25rem;
      align-items: center;

      padding: 0.5rem;
      background-color: ${props => props.theme['purple-300']};
      color: ${props => props.theme['purple-500']};
      border-radius: 8px;
      margin: auto;
      height: 2.375rem;

      p {
        font-size: 0.875rem;
      }
    }
    
    a {
      position: relative;
      padding: 0.5rem;
      background-color: ${props => props.theme['yellow-300']};
      color: ${props => props.theme['yellow-700']};
      border-radius: 8px;
      margin: auto;
      height: 2.375rem;
      width: 2.375rem;
    }
  }
`

export const AmountProductsInCartContainer = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  padding-block: 0.25rem;
  padding-inline: 0.5rem;
  border-radius: 100%;

  color: white;
  background: ${props => props.theme['yellow-700']};
  font-size: ${props => props.theme['text-sm']}
`