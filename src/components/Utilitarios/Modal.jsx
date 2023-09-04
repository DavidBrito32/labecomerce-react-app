import "./Modal.scss";
import ProdutosContainer from "../componentes-main/Produtos/ProdutosContainer";
import Botao from '../../assets-img/icons/botao fechar.png'

const Modal = ({ search, modal, fechaModal, carro, comprasCarro}) => {

  const fechar = () => {
    fechaModal(false);
  }

  return (
    <div className={modal ? "Container-Modal active" : "Container-Modal"}>
      <div className="Exibir">
      <span className="Fechar" onClick={fechar}><img src={Botao} alt="fechar" /></span>
        <ProdutosContainer 
        search={search}
        carro={carro}
        comprasCarro={comprasCarro}        
        />
      </div>
    </div>
  );
};

export default Modal;
