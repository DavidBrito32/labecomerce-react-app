import BannerInicial from "./BannerInicial/BannerInicial";
import ProdutosContainer from "./Produtos/ProdutosContainer";
import Modal from "../Utilitarios/Modal";

const Main = ({ search, modal, fechaModal, comprasCarro, carro}) => {
  return (
    <>
      <BannerInicial />

      <Modal 
      fechaModal={fechaModal} 
      modal={modal} 
      search={search}
      carro={carro} 
      comprasCarro={comprasCarro}
      />

      <ProdutosContainer 
      comprasCarro={comprasCarro} 
      search={search} 
      carro={carro}
      />
    </>
  );
};

export default Main;
