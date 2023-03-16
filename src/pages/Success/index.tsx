import { useContext } from "react";
import { BodySuccessContainer, CheckoutInformationContainer, CheckoutInformationItemContainer, HeaderSuccessContainer, SuccessContainer } from "./styles";
import { ProductsContext } from "../../contexts/ProductsContext";
import successImage from "../../assets/success-image.png"

export function Success() {
  const { userCheckoutInformation } = useContext(ProductsContext)
  const { street, houseNumber, district, city, state } = userCheckoutInformation?.location
  const paymentMethod = userCheckoutInformation?.paymentMethod
  console.log(userCheckoutInformation)

  return (
    <SuccessContainer>
      <HeaderSuccessContainer>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </HeaderSuccessContainer>
      <BodySuccessContainer>
        <CheckoutInformationContainer>
          <CheckoutInformationItemContainer>
            <span>Entrega em {street}, {houseNumber}</span>
            <span>{district} - {city}, {state}</span>
          </CheckoutInformationItemContainer>
          <CheckoutInformationItemContainer>
            <span>Previsão de entrega</span>
            <span>20 min - 30 min</span>
          </CheckoutInformationItemContainer>
          <CheckoutInformationItemContainer>
            <span>Pagamento na entrega</span>
            <span>{paymentMethod}</span>
          </CheckoutInformationItemContainer>
        </CheckoutInformationContainer>
        <img src={successImage} />
      </BodySuccessContainer>
    </SuccessContainer>
  )
}