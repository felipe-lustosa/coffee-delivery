import { useState, useEffect } from "react"
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { ProductContainer, PriceContainer, ProductAmountContainer, CartButton, CartContainer, ProductAmountStyle, CartDataContainer } from "./styles";
import { Product } from "../../../assets/productsData";
import { RiDeleteBin6Line } from "react-icons/ri"

interface ProductItemProps {
  product: Product;
  productsAmount: number;
  handleUpdateCartProduct: (products: Product, selectedProductsAmount: number) => void
}

export function ProductItemCheckout({ product, productsAmount, handleUpdateCartProduct }: ProductItemProps) {
  const [selectedProductsAmount, setSelectedProductsAmount] = useState(productsAmount)

  useEffect(() => {
    handleUpdateCartProduct(product, selectedProductsAmount)
  }, [selectedProductsAmount])

  return (
    <ProductContainer>
      <CartContainer>
        <img src={product.image} />
        <CartDataContainer>
          <h2>{product.name}</h2>
          <ProductAmountContainer>
            <ProductAmountStyle>
              <button onClick={() => selectedProductsAmount > 0 ? setSelectedProductsAmount(prevValue => prevValue - 1) : null}>
                <AiOutlineMinus size={16} />
              </button>
              <span>{selectedProductsAmount}</span>
              <button onClick={() => selectedProductsAmount < 99 ? setSelectedProductsAmount(prevValue => prevValue + 1) : null}>
                <AiOutlinePlus size={18} />
              </button>
            </ProductAmountStyle>
            <ProductAmountStyle>
              <button onClick={() => setSelectedProductsAmount(0)}><RiDeleteBin6Line size={16} /> REMOVER</button>
            </ProductAmountStyle>
          </ProductAmountContainer>
        </CartDataContainer>
      </CartContainer>
      <PriceContainer>
        <span>{product.price}</span>
      </PriceContainer>
    </ProductContainer >
  )
}