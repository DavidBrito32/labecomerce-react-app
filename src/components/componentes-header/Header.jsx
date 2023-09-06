import "./Header.scss";
import Logo from "./Logo/Logo";
import Navigation from "./Navgation/Navigation";
import { useState } from "react";
const Header = ({ pesquisa, search, modal, carrinho, armazenaCarro }) => {
  const [burguer, setBurguer] = useState(false);

  const abreBurguer = () => {
    setBurguer(!burguer);
  };

  return (
    <header>
      <Logo />
      <Navigation
        modal={modal}
        search={search}
        pesquisa={pesquisa}
        burguer={burguer}
        abreBurguer={abreBurguer}
        carrinho={carrinho}
        armazenaCarro={armazenaCarro}
      />
    </header>
  );
};

export default Header;
