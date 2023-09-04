import "./BannerInicial.scss";
import imagem from "../../../assets-img/banner/LABECOMERCE.svg";

const BannerInicial = () => {
  return (
    <>
      <div className="Container">
        <div className="imagem">
          <h2>Labecomerce</h2>
          <p>
          Explore o universo de possibilidades na Labecommerce: sua jornada para adquirir os itens espaciais mais incríveis está prestes a começar!
          Aperte o cinto que a viagem vai começar
          </p>
          <img src={imagem} alt=""/>
        </div>
      </div>
    </>
  );
};

export default BannerInicial;
