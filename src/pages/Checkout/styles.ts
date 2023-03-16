import styled from "styled-components";
import { BaseLayout } from "../../styles/global";

export const CheckoutContainer = styled(BaseLayout)`
  form {
    display: flex;
    gap: 2rem;
  }
`

export const FinishOrderContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const UserInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;
  border-radius: 8px;

  background: ${props => props.theme['base-card']};

`

export const UserInformationInputsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 0.75rem;
    grid-row-gap: 1rem;
`

export const PaymentMethodsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 1px solid ${props => props.theme['base-button']};
    border-radius: 8px;
    padding: 1rem;
    background: ${props => props.theme['base-button']};
    font-size: 0.75rem;
    color: ${props => props.theme['base-text']};
    
    &:focus {
      border: 1px solid ${props => props.theme['purple-500']};
      background: ${props => props.theme['purple-300']};
    }

  }

`

export const UserInformationHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;


`

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid ${props => props.theme['base-button']};
  border-radius: 4px;

  font-size: 0.875rem;
  background: ${props => props.theme['base-input']};
  color: ${props => props.theme['base-text']};

  &:focus {
    border: 1px solid ${props => props.theme['purple-500']};
  }
`

export const SelectedCoffeesContainer = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
width: 40%;
`

export const SelectedCoffeesInfoContainer = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;

padding: 2.5rem;
border-radius: 8px;

background: ${props => props.theme['base-card']};
`

export const ConfirmCheckoutInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  button {
    background-color: ${props => props.theme['yellow-500']};
    color: white;
    padding-block: 0.75rem;
    border-radius: 8px;
    border: none;
  }
`

export const CheckoutInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  span {
    font-size: ${props => props.theme['text-sm']};
    color: ${props => props.theme['base-text']};
  }

  h3 {
    font-size: ${props => props.theme['text-lg']};
    font-weight: 700;
    color: ${props => props.theme['base-subtitle']};
  }
  button {

  }
`

export const CheckoutInformationItemContainer = styled.div`
  display: flex;
  justify-content: space-between;

`