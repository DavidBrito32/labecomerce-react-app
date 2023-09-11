import { useEffect, useState } from "react";
import Header from "../../components/componentes-header/Header";
import Main from "../../components/componentes-main/Main";
import Footer from "../../components/componentes-footer/Footer";
import Carrinho from "../../components/componentes-header/carrinho/Carrinho";

function Home() {
  const [armazenaCarro, setArmazenaCarro] = useState(
    JSON.parse(localStorage.getItem("armazenaCarro")) || []
  );
  useEffect(() => {
    if (armazenaCarro.length > 0) {
      localStorage.setItem("armazenaCarro", JSON.stringify(armazenaCarro));
    }
  }, [armazenaCarro]);

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
        armazenaCarro={armazenaCarro}
      />
      <Main
        comprasCarro={setArmazenaCarro}
        modal={abreModal}
        search={search}
        fechaModal={setAbreModal}
        carro={armazenaCarro}
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

export default Home;
