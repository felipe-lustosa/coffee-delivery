import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";
import logoCoffe from "../../assets/Logo.png"
import { FaShoppingCart } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffe} />
      </NavLink>
      <nav>
        <span>
          <MdLocationOn size={22} />
          <p>
            Petrolina, PE
          </p>
        </span>
        <NavLink to="cart"><FaShoppingCart size={22} /></NavLink>
      </nav>
    </HeaderContainer>
  )
}