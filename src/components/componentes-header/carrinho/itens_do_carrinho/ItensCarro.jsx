import { useState } from "react";
import "./ItensCarro.scss";
import trash from "../../../../assets-img/icons/trash icons.png";

const ItensCarro = (props) => {
  const [Variavel, setVariavel] = useState(1);

  const FormataMoeda = (valor) => {
    if (valor > 0) {
      let numberFormat = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(valor);
      return numberFormat;
    }
  };

  const excluir = (newItem) => {
    const carrinho = props.objeto.filter((item) => item.id !== newItem);
    props.modificaCarro(carrinho);
    props.manipulaTotal(0)
    localStorage.setItem('armazenaCarro', JSON.stringify(carrinho));
    localStorage.setItem('subTotal', JSON.stringify(0));
  };

  const incrementador = () => {
    if (Variavel >= 0) {
      setVariavel(Variavel + 1);
    }
  };

  const decrementador = () => {
    if (Variavel > 0) {
      setVariavel(Variavel - 1);
    } else if (Variavel < 1) {
      excluir(props.id)
      setVariavel(1);
      props.manipulaTotal(0)
      
    }
  };

  const soma = Variavel * Number(props.preco);

  props.manipulaTotal(soma);


  return (
    <div className="ItensCarro">
      <div className="Id-produto">
        <div className="imagem">
          <img src={props.imagem} alt="imagem" />
        </div>
        <div className="prd">
          <h1>{props.nome}</h1>
          <h2>
            {props.category} <span>{props.classificacao}</span>
          </h2>
          <p title={props.descricao}>{props.descricao}</p>
        </div>
      </div>
      <div className="finalizar">
        <div className="quantidade">
          <h4>
            Valor: <span>{Variavel > 0 ? FormataMoeda(props.preco * Variavel)  : FormataMoeda(props.preco)}</span>
          </h4>
          <button onClick={decrementador}>-</button>
          <p>{Variavel}</p>
          <button onClick={incrementador}>+</button>
        </div>

        <div className="compra">
          <a onClick={(id) => excluir(props.id)} href="#!">
            <img src={trash} alt="excluir" title="remover item" />
          </a>
          <br />
        </div>
      </div>
    </div>
  );
};

export default ItensCarro;
