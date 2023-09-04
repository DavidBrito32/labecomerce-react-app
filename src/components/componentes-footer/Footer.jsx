import "./Footer.scss";

import Logo from "../../assets-img/logo/carrinho_de_compras.svg";

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="marca">
        <h2>Labecomerce</h2>
        <h4>
          <a href={"https://goo.gl/maps/vVpGdiHYcMPF4gkAA"}>
            Av. Santos Dumont, 1589 - Aldeota, Fortaleza - CE, 60160-150
          </a>
        </h4>
      </div>
      <p>Todos os Direitos Reservados @2023</p>
    </footer>
  );
};

export default Footer;
