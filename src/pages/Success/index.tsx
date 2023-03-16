import { useContext } from "react";
import { SuccessContainer } from "./styles";
import { ProductsContext } from "../../contexts/ProductsContext";
import successImage from "../../assets/success-image.png"

export function Success() {
  const { userCheckoutInformation } = useContext(ProductsContext)
  const { street, houseNumber, district, city, state } = userCheckoutInformation.location
  const paymentMethod = userCheckoutInformation.paymentMethod

  return (
    <SuccessContainer>
      <div>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>
      <div>
        <div>
          <span>Entrega em {street}, {houseNumber}</span>
          <span>{district} - {city}, {state}</span>
        </div>
        <div>
          <span>Previsão de entrega</span>
          <span>20 min - 30 min</span>
        </div>
        <div>
          <span>Pagamento na entrega</span>
          <span>{paymentMethod}</span>
        </div>
        <img src={successImage} />
      </div>
    </SuccessContainer>
  )
}