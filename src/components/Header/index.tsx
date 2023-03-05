import { NavLink } from "react-router-dom";
import { AmountProductsInCartContainer, HeaderContainer } from "./styles";
import logoCoffee from "../../assets/Logo.png"
import { FaShoppingCart } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { ProductsContext } from "../../contexts/ProductsContext";
import { useContext } from 'react'

export function Header() {
  const { cart } = useContext(ProductsContext)

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffee} />
      </NavLink>
      <nav>
        <span>
          <MdLocationOn size={22} />
          <p>
            Petrolina, PE
          </p>
        </span>
        <NavLink to="checkout">
          <FaShoppingCart size={22} />
          <AmountProductsInCartContainer>
            <p>{cart.products.length}</p>
          </AmountProductsInCartContainer>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}