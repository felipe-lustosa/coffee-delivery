import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";
import logoCoffe from "../../assets/Logo.png"

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffe} />
      </NavLink>
      <nav>
        <NavLink to="cart">Carrinho</NavLink>
      </nav>
    </HeaderContainer>
  )
}