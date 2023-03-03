import { useState } from "react"
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Product } from "../../../../assets/productsData";
import { CategoryButton } from "../../styles";
import { ProductCategoryButton, CategoryContainer, ProductContainer, TitleContainer, PriceContainer, ProductAmountContainer, CartButton } from "./styles";

interface ProductItemProps {
  product: Product;
}

interface Cart {
  products: CartProduct[] | [];
}

interface CartProduct {
  product: Product;
  amount: number;
  value: string;
}

export function ProductItem({ product }: ProductItemProps) {
  const [cart, setCart] = useState([])
  console.log("🚀 ~ file: index.tsx:22 ~ ProductItem ~ cart:", cart)

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
        <span>{product.price}</span>
        <ProductAmountContainer>
          <button>
            <AiOutlineMinus size={14} />
          </button>
          <span>0</span>
          <button>
            <AiOutlinePlus size={14} />
          </button>
        </ProductAmountContainer>
        <CartButton>
          <FaShoppingCart size={22} color="white" />
        </CartButton>
      </PriceContainer>
    </ProductContainer>
  )
}