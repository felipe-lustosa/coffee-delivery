import styled from "styled-components";
import { BaseLayout } from "../../styles/global";

export const SuccessContainer = styled(BaseLayout)`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const HeaderSuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;

  h2 {
    font-weight: 800;
    font-size: ${props => props.theme['title-lg']};
    color: ${props => props.theme['yellow-700']};
  }

  p {
    font-weight: 400;
    font-size: ${props => props.theme['text-lg']};
    color: ${props => props.theme['base-subtitle']};
  }
`

export const BodySuccessContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const CheckoutInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border: 1px solid #743ad5;
  border-radius: 8px;
  width:40%;
`

export const CheckoutInformationItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`