import { AiFillBank, AiFillCreditCard } from "react-icons/ai";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { CheckoutContainer, CheckoutInformationContainer, CheckoutInformationItemContainer, ConfirmCheckoutInformationContainer, FinishOrderContainer, Input, PaymentMethodsContainer, SelectedCoffeesContainer, SelectedCoffeesInfoContainer, UserInformationContainer, UserInformationHeaderContainer, UserInformationInputsContainer } from "./styles";
import { CartProduct, ProductsContext } from "../../contexts/ProductsContext";
import { useContext } from "react"
import { ProductItemCheckout } from "./ProductItemCheckout";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

export function Checkout() {
  const { cart, userCheckoutInformation, setUserCheckoutInformation, updateCartProduct } = useContext(ProductsContext)
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate();

  function handleConfirmPurchase(data: any) {
    setUserCheckoutInformation({ ...userCheckoutInformation, location: data })
    if (!!userCheckoutInformation.location && !!userCheckoutInformation.paymentMethod)
      navigate('/success')
  }

  function handleChangePaymentMethod(methodType: string) {
    setUserCheckoutInformation({ ...userCheckoutInformation, paymentMethod: methodType })
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleConfirmPurchase)}>
        <FinishOrderContainer>
          <h1>Complete seu pedido</h1>
          <UserInformationContainer>
            <UserInformationHeaderContainer>
              <h2><IoLocationOutline />Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </UserInformationHeaderContainer>
            <UserInformationInputsContainer>
              <Input {...register('cep', { required: true })} required placeholder="CEP" />
              <Input {...register('street', { required: true })} required placeholder="Endereço" />
              <Input {...register('houseNumber', { required: true })} required placeholder="Número" />
              <Input {...register('complement', { required: true })} required placeholder="Complemento" />
              <Input {...register('district', { required: true })} required placeholder="Bairro" />
              <Input {...register('city', { required: true })} required placeholder="Cidade" />
              <Input {...register('state', { required: true })} required placeholder="UF" />
            </UserInformationInputsContainer>
          </UserInformationContainer>
          <UserInformationContainer>
            <div>
              <h2><MdAttachMoney />Pagamento</h2>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
            <PaymentMethodsContainer>
              <button type="button" onClick={() => handleChangePaymentMethod('creditCard')}><AiFillCreditCard size={18} />CARTÃO DE CRÉDITO</button>
              <button type="button" onClick={() => handleChangePaymentMethod('debitCard')}><AiFillBank size={18} />CARTÃO DE DÉBITO</button>
              <button type="button" onClick={() => handleChangePaymentMethod('cash')}><FaRegMoneyBillAlt size={18} />DINHEIRO</button>
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
              <ConfirmCheckoutInformationContainer>
                <CheckoutInformationContainer>
                  <CheckoutInformationItemContainer>
                    <span>Total de itens</span>
                    <span>-</span>
                  </CheckoutInformationItemContainer>
                  <CheckoutInformationItemContainer>
                    <span>Entrega</span>
                    <span>-</span>
                  </CheckoutInformationItemContainer>
                  <CheckoutInformationItemContainer>
                    <h3>Total</h3>
                    <h3>-</h3>
                  </CheckoutInformationItemContainer>
                </CheckoutInformationContainer>
                <button type="submit">Confirmar Pedido</button>
              </ConfirmCheckoutInformationContainer>
            </div>
          </SelectedCoffeesInfoContainer>
        </SelectedCoffeesContainer>
      </form>
    </CheckoutContainer>
  )
}