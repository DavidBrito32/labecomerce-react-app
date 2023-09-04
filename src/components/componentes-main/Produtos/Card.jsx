import "./Card.scss";
import "boxicons";
import oferta from "../../../assets-img/icons/Design sem nome.svg";

const Card = (props) => {
  function addCarrinho() {
    const newObject = [...props.carro, props.objeto]; 
    props.comprasCarro(newObject);
  }

  return (
    <div className="produto">
      <div className="oferta">
        {props.promo ? <img src={oferta} alt="oferta" /> : ""}
      </div>
      <div className="imagem">
        <box-icon type="solid" name="heart"></box-icon>
        <span>{props.rate}</span>
        <img src={props.image} alt="Produto" />
      </div>
      <h4>{props.nomeProduto}</h4>
      <p>{props.descricao}</p>
      <h5>
        <strong>{props.precoUnitario}</strong>{" "}
        <p>
          <em>{props.desconto}</em>
        </p>
      </h5>
      <a onClick={addCarrinho} href={"#!"}>
        Adicionar ao carrinho <box-icon name="cart-add"></box-icon>
      </a>
    </div>
  );
};

export default Card;
