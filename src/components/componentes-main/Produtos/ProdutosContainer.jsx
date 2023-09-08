/* eslint-disable array-callback-return */
import "./ProdutosContainer.scss";
import { ListarProdutos } from "./ListaProdutos";
import Card from "./Card";
import { Selecao } from "../../styles/Styles";
import { useState } from "react";

const ProdutosContainer = (props) => {
  const [valor, setValor] = useState();
  const [category, setCategory] = useState("");

  const FormataMoeda = (valor) => {
    if (valor > 0) {
      let numberFormat = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(valor);
      return numberFormat;
    }
  };

  const filtroValor = (e) => {
    setValor(e.target.value);
  };

  const produtosListados = ListarProdutos
    .filter((item) => {
    if (props.search !== "") {
      return item.nomeProduto
        .toLowerCase()
        .includes(props.search.toLowerCase());
    } else {
      return item;
    }
     }) //FILTRO DA BARRA DE PESQUISA
    .filter((item) => {
      if (valor > 0) {
        return item.precoUnitario <= valor;
      } else if (item.categoria.includes(valor)) {
        console.log("Entrou aqui");
        return item.categoria === valor;
      } else {
        return item;
      }
    }) // FILTRO VALORES
    .filter((item) => {
      if (valor === "promocao") {
        return item.promocao === true;
      } else {
        return item;
      }
    }) //FILTRO PARA PRODUTOS EM PROMOÇÃO
    .filter((item) => {
      if(category !== ""){
        return item.categoria === category
      }else{
        return item
      }
    }) //FILTRO DAS CATEGORIAS
    .sort(() => {
      if (valor === "menor") {
          return 1
      } else if (valor === "maior") {
          return -1
      }
    })//ORDENAÇÃO
    .map((item) => (
      <li key={item.id}>
        <Card
          comprasCarro={props.comprasCarro}
          nomeProduto={item.nomeProduto}
          rate={item.rate}
          descricao={item.descricao}
          image={item.image}
          precoUnitario={FormataMoeda(item.precoUnitario)}
          desconto={FormataMoeda(item.desconto)}
          promo={item.promocao}
          objeto={item}
          carro={props.carro}
          categoria={item.categoria}
        />
      </li>
    ));

  return (
    <>
      <div className="Produtos">
        <h2>
          Produtos

          <div className="selects">
          <Selecao value={valor} onChange={(e) => filtroValor(e)}>
            <option value={0}>Selecione</option>
            <option value={"promocao"}>Itens em promoção</option>
            <option value="menor">Crescente</option>
            <option value="maior">Decrecente</option>
            <option value={2000}>De 0 Ate $- 2.000,00</option>
            <option value={15000}> Ate $- 15.000,00</option>
            <option value={30000}> Ate $- 30.000,00</option>
            <option value={50000}>até $- 50.000,00</option>
            <option value={100000}>Ate $- 100.000,00</option>
            <option value={500000}>até $- 500.000,00</option>
          </Selecao>
          <Selecao
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value={""}>Selecione por categoria</option>
            <option value="Google">Google</option>
            <option value="Monument">Monument</option>
            <option value="NASA">NASA</option>
            <option value="Roscosmos">Roscosmos</option>
          </Selecao>
          </div>
        </h2>
        <ul>{produtosListados}</ul>
      </div>
    </>
  );
};

export default ProdutosContainer;
