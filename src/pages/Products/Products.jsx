import { useEffect, useState } from "react";
import Header from "../../components/componentes-header/Header";
import Footer from "../../components/componentes-footer/Footer";
import Carrinho from "../../components/componentes-header/carrinho/Carrinho";
import { ListarProdutos } from "../../components/componentes-main/Produtos/ListaProdutos";
import ProdutosContainer from "../../components/componentes-main/Produtos/ProdutosContainer";

function Products() {
  if (localStorage.getItem('armazenaCarro') !== null) {
    console.log('A chave existe no localStorage.');
  } else {
    localStorage.setItem('armazenaCarro', JSON.stringify([])); 
  }
  
  const [armazenaCarro, setArmazenaCarro] = useState([]);

  
  useEffect(() => {
    if(armazenaCarro.length > 0 ){
      localStorage.setItem('armazenaCarro', JSON.stringify(armazenaCarro)); 
    }
  }, [armazenaCarro]);

  useEffect(() => {
    const listaSalva = localStorage.getItem('armazenaCarro');
    setArmazenaCarro(JSON.parse(listaSalva));
  }, [])

  const [search, setSearch] = useState("");
  const [abreModal, setAbreModal] = useState(false);
  const [carrinho, setCarrinho] = useState(false);

  const abreCarro = () => {
    setCarrinho(!carrinho);
  };

  return (
    <>
      <Header
        carrinho={abreCarro}
        modal={setAbreModal}
        pesquisa={setSearch}
        search={search}
      />


      <Footer />
      <Carrinho
        modificaCarro={setArmazenaCarro}
        objeto={armazenaCarro}
        abreCarro={abreCarro}
        carrinho={carrinho}
      />
    </>
  );
}

export default Products;
