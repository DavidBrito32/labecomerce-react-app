import "./Carrinho.scss";
import ItensCarro from "./itens_do_carrinho/ItensCarro";
import Fechar from "../../../assets-img/icons/botao fechar.png";

const Carrinho = (props) => {
  
  const comprar = () => {
    alert(
      `Obrigado Por comprar no Labecomerce! Você será Redirecionado para a pagina do pagamento!`
    );
    props.modificaCarro([])
    props.abreCarro();
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
          {newObject.length > 0 ? newObject.map((item, i) => (<li key={i}>
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
    />
</li>)) : ""}
        </ul>
        <button onClick={comprar} className="Final">
          Finalizar todos
        </button>
      </div>
    </>
  );
};

export default Carrinho;
