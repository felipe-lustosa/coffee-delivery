import { useState } from "react"
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Product } from "../../../../assets/productsData";
import { CategoryButton } from "../../styles";
import { ProductCategoryButton, CategoryContainer, ProductContainer, TitleContainer, PriceContainer, ProductAmountContainer, CartButton, CartContainer } from "./styles";

interface ProductItemProps {
  product: Product;
  handleUpdateCartProduct: (products: Product, selectedProductsAmount: number) => void
}

export function ProductItem({ product, handleUpdateCartProduct }: ProductItemProps) {
  const [selectedProductsAmount, setSelectedProductsAmount] = useState(0)
  const separatedCurrencyAndValue = product.price.split(' ')

  return (
    <ProductContainer>
      <img src={product.image} />
      <CategoryContainer>
        {product.category.map((category, index) => {
          return <ProductCategoryButton key={index}>{category}</ProductCategoryButton>
        })}
      </CategoryContainer>
      <TitleContainer>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </TitleContainer>
      <PriceContainer>
        <p>{separatedCurrencyAndValue[0] + ' '}<span>{separatedCurrencyAndValue[1]}</span></p>
        <CartContainer>
          <ProductAmountContainer>
            <button onClick={() => selectedProductsAmount > 0 ? setSelectedProductsAmount(prevValue => prevValue - 1) : null}>
              <AiOutlineMinus size={16} />
            </button>
            <span>{selectedProductsAmount}</span>
            <button onClick={() => selectedProductsAmount < 99 ? setSelectedProductsAmount(prevValue => prevValue + 1) : null}>
              <AiOutlinePlus size={18} />
            </button>
          </ProductAmountContainer>
          <CartButton onClick={() => handleUpdateCartProduct(product, selectedProductsAmount)}>
            <FaShoppingCart size={22} color="white" />
          </CartButton>
        </CartContainer>
      </PriceContainer>
    </ProductContainer >
  )
}