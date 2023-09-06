import "./Navigation.scss";
import Burguer from "./MenuHamburguer/Burguer";
import ListMenu from "./ListMenu/ListMenu";
import Search from "./Search/Search";

const Navigation = ({ burguer, abreBurguer, pesquisa, search, modal, carrinho, armazenaCarro }) => {
  return (
    <>
      <Search
        modal={modal}
        search={search}
        pesquisa={pesquisa}
        burguer={burguer}
      />
      <Burguer burguer={burguer} abreBurguer={abreBurguer} />
      <ListMenu carrinho={carrinho} burguer={burguer} armazenaCarro={armazenaCarro} />
    </>
  );
};

export default Navigation;
