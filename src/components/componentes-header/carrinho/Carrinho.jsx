import "./Carrinho.scss";
import ItensCarro from "./itens_do_carrinho/ItensCarro";
import Fechar from "../../../assets-img/icons/botao fechar.png";
import { useEffect, useState } from "react";

const Carrinho = (props) => {
  const [subTotal, setSubtotal] = useState(0);  
  const FormataMoeda = (valor) => {
    if (valor > 0) {
      let numberFormat = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(valor);
      return numberFormat;
    }
  };
  const manipulaTotal = (valor) => {
    const precoTotal = valor;
      return setSubtotal(precoTotal);
  } 
  console.log(subTotal);

  const comprar = () => {
    alert(
      `Obrigado Por comprar no Labecomerce! Você será Redirecionado para a pagina do pagamento!`
    );
    props.modificaCarro([]);
    props.abreCarro();
    setSubtotal(0);
    localStorage.setItem('subTotal', JSON.stringify(JSON.parse(localStorage.getItem('subTotal')) || 0));
    localStorage.setItem('armazenaCarro', JSON.stringify([]));
  };
  const newObject = props.objeto;
  useEffect(() => {
    if(subTotal > 0){
      localStorage.setItem('subTotal', JSON.stringify(subTotal));
    }
  }, [subTotal]); //ADICIONA O SUBTOTAL ao localstorage


  return (
    <>
      <div className={props.carrinho ? "Carrinho active" : "Carrinho"}>
        {" "}
        {/* variavel useState que controla a abertura do carrinho esta vindo do app */}
        <span onClick={props.abreCarro} className="botaoFechar">
          <img src={Fechar} alt="" />
        </span>
        <ul>
          {newObject.length > 0
            ? newObject.map((item, i) => (
                <li key={i}>
                  <ItensCarro
                    item={item}
                    modificaCarro={props.modificaCarro}
                    id={item.id}
                    classificacao={item.rate}
                    category={item.categoria}
                    imagem={item.image}
                    preco={item.precoUnitario}
                    descricao={item.descricao}
                    nome={item.nomeProduto}
                    objeto={props.objeto}
                    manipulaTotal={manipulaTotal}
                  />
                </li>
              ))
            : ""}
        </ul>
        <button onClick={comprar} className="Final">
          Finalizar todos
        </button>

        {subTotal > 0 ? <span className="subTotal">Total Carrinho: <span className="carts">{FormataMoeda(subTotal)}</span></span> : ""}
      </div>
    </>
  );
};

export default Carrinho;
