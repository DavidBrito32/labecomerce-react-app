import "./Card.scss";
import "boxicons";
import oferta from "../../../assets-img/icons/Design sem nome.svg";

const Card = (props) => {
  
  function addCarrinho() {
    const newProduct = props.carro.find(item => item.id === props.objeto.id);
    if(newProduct === undefined){
      props.comprasCarro([...props.carro, {...props.objeto, amount: 1}])
      console.log(props.carro);
    }else{
      const newCart = props.carro.map((item) => {
        if(item.id === props.objeto.id){
          return {...newProduct, amount: newProduct.amount + 1}
        }else{
          return item
        }
      })
      props.comprasCarro(newCart);
    }


    // let order = props.carro
    // .filter((item) => item !== props.objeto)
    // .sort(() => {
    //   return 0
    // })
    // const newObject = [...order, props.objeto]; 
    // props.comprasCarro(newObject);    
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
      <h4 title={props.nomeProduto}>{props.nomeProduto}</h4>
      <p title={props.descricao}>{props.descricao}</p>
      <p className="category">{props.categoria}</p>
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
