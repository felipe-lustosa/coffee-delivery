import { AiFillBank, AiFillCreditCard } from "react-icons/ai";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { CheckoutContainer, FinishOrderContainer, Input, PaymentMethodsContainer, SelectedCoffeesContainer, SelectedCoffeesInfoContainer, UserInformationContainer, UserInformationHeaderContainer } from "./styles";
import { CartProduct, ProductsContext } from "../../contexts/ProductsContext";
import { useContext } from "react"
import { ProductItemCheckout } from "./ProductItemCheckout";

export function Checkout() {

  const { cart, updateCartProduct } = useContext(ProductsContext)
  console.log('cart', cart.products)
  return (
    <CheckoutContainer>
      <FinishOrderContainer>
        <h1>Complete seu pedido</h1>
        <UserInformationContainer>
          <UserInformationHeaderContainer>
            <h2><IoLocationOutline />Endereço de Entrega</h2>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </UserInformationHeaderContainer>
          <form>
            <Input type="text" placeholder="CEP" />
            <Input type="text" placeholder="Endereço" />
            <Input type="text" placeholder="Número" />
            <Input type="text" placeholder="Complemento" />
            <Input type="text" placeholder="Bairro" />
            <Input type="text" placeholder="Cidade" />
            <Input type="text" placeholder="UF" />
          </form>
        </UserInformationContainer>
        <UserInformationContainer>
          <div>
            <h2><MdAttachMoney />Pagamento</h2>
            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
          </div>
          <PaymentMethodsContainer>
            <button><AiFillCreditCard size={18} />CARTÃO DE CRÉDITO</button>
            <button><AiFillBank size={18} />CARTÃO DE DÉBITO</button>
            <button><FaRegMoneyBillAlt size={18} />DINHEIRO</button>
          </PaymentMethodsContainer>
        </UserInformationContainer>
      </FinishOrderContainer>
      <SelectedCoffeesContainer>
        <h1>Cafés selecionados</h1>
        <SelectedCoffeesInfoContainer>

          <div>
            {cart.products.map((cartData: CartProduct) => {
              return <ProductItemCheckout key={cartData.product.id} product={cartData.product} productsAmount={cartData.amount} handleUpdateCartProduct={updateCartProduct} />
            })}
            {/* <span>Total de itens</span>
            <span>Entrega</span>
            <span>Total</span>
            <button>Confirmar Pedido</button> */}
          </div>
        </SelectedCoffeesInfoContainer>
      </SelectedCoffeesContainer>
    </CheckoutContainer>
  )
}