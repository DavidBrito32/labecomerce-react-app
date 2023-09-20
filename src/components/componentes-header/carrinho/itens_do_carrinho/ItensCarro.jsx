/* eslint-disable array-callback-return */
import "./ItensCarro.scss";
import trash from "../../../../assets-img/icons/trash icons.png";

const ItensCarro = (props) => {
  console.log(props.objeto);

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
    localStorage.setItem("armazenaCarro", JSON.stringify(carrinho));
    props.setTotal(props.total - props.preco);
    console.log(props.total);
  };

  const incrementador = (id) => {
    const newProduct = props.objeto.find((item) => item.id === id);
    const newCart = props.objeto.map((item) => {
      if (item.id === id) {
        return { ...newProduct, amount: newProduct.amount + 1 };
      } else {
        return item;
      }
    });
    props.modificaCarro(newCart);
  };

  const decrementador = (id) => {
    const produto = props.objeto.find((item) => item.id === id);

    if (produto.amount > 1) {
      const newCart = props.objeto.map((item) => {
        if (item.id === id) {
          return { ...produto, amount: produto.amount - 1 };
        } else {
          return item;
        }
      });

      props.modificaCarro(newCart);
    } else {
      const novoCarro = props.objeto.filter((item) => item.id !== id);
      props.modificaCarro(novoCarro);
    }
  };

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
            Valor:{" "}
            <span>
              {props.amount > 0
                ? FormataMoeda(props.preco * props.amount)
                : FormataMoeda(props.preco * props.amount)}
            </span>
          </h4>
          <button onClick={() => decrementador(props.id)}>-</button>
          <p>{props.amount && props.amount}</p>
          <button onClick={() => incrementador(props.id)}>+</button>
        </div>

        <div className="compra">
          <a onClick={() => excluir(props.id)} href="#!">
            <img src={trash} alt="excluir" title="remover item" />
          </a>
          <br />
        </div>
      </div>
    </div>
  );
};

export default ItensCarro;
