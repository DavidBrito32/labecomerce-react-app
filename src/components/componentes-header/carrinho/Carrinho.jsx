import "./Carrinho.scss";
import ItensCarro from "./itens_do_carrinho/ItensCarro";
import Fechar from "../../../assets-img/icons/botao fechar.png";

const Carrinho = (props) => {
  const FormataMoeda = (valor) => {
    if (valor > 0) {
      let numberFormat = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(valor);
      return numberFormat;
    }
  };
  const { total, setTotal } = props;
  const comprar = () => {
    alert(
      `Obrigado Por comprar no Labecomerce! Você será Redirecionado para a pagina do pagamento!`
    );
    props.modificaCarro([]);
    props.abreCarro();
    localStorage.setItem(
      "subTotal",
      JSON.stringify(JSON.parse(localStorage.getItem("subTotal")) || 0)
    );
    localStorage.setItem("armazenaCarro", JSON.stringify([]));
    setTotal(0);
  };
  const newObject = props.objeto;
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
                    setTotal={setTotal}
                    total={total}
                  />
                </li>
              ))
            : ""}
        </ul>
        <button onClick={comprar} className="Final">
          Finalizar todos
        </button>
        {total > 0 ? (
          <span className="subTotal">
            Total Carrinho: <span className="carts">{FormataMoeda(total)}</span>
          </span>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Carrinho;
