import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 2rem;

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
      padding: 0.5rem;
      background-color: ${props => props.theme['yellow-300']};
      color: ${props => props.theme['yellow-500']};
      border-radius: 8px;
      margin: auto;
      height: 2.375rem;
      width: 2.375rem;
    }
  }
`