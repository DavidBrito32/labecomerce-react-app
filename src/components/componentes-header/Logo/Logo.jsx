import "./Logo.scss";
import Logomarca from "./carrinho_de_compras.svg";

const Logo = () => {
  return (
    <div className="Logo">
      <img src={Logomarca} alt="Logomarca" />
      <h1>LabeComerce</h1>
    </div>
  );
};

export default Logo;
