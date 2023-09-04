import Footer from '../../../components/componentes-footer/Footer';
import Header from '../../../components/componentes-header/Header';
import './ProductDescription.scss';
import carro from '../../assets-img/icons/carrinho de compras.svg'
import { ListarProdutos } from '../../../components/componentes-main/Produtos/ListaProdutos';
import  oferta from '../../assets-img/icons/Design sem nome.svg'
import Like from '../../assets-img/icons/like-svgrepo-com.svg';

const ProductDescription = (props) => {

  const {image, nomeProduto, precoUnitario, desconto, rate, promocao, categoria } = ListarProdutos[4];

  return (
    <>
      <Header />
          <div className="Product-Review">

              <div className="imagem">
                {promocao ? <div className="oferta">
                  <img src={oferta} alt="" />
                </div> : ""} {/* So vai aparecer se o produto tiver em promoção */}

                <img src={image} alt="Imagem" />

                  <div className="slides">

                  <span className="slide"></span>
                  <span className="slide"></span>
                  <span className="slide"></span>

                  </div>

              </div>

              <div className="Content">
                <h1>{nomeProduto} <div className="sub"><span>{categoria}</span>{rate.length > 0 ? <span><p>{rate}</p><img src={Like} alt="" /></span> : <span></span>}</div></h1>
                <div className="options">
                  <select>
                    <option>Tamanho: {"38"}</option>
                    <option>Tamanho: {"39"}</option>
                    <option>Tamanho: {"40"}</option>
                    <option>Tamanho: {"41"}</option>
                    <option>Tamanho: {"42"}</option>
                  </select>

                  <div className="valor">
                    <p className='PrecoAtual'>{precoUnitario}</p>
                    <p className='desconto'>{desconto}</p>
                  </div>
                </div>
                <div className="Botoes-compra-card">
                  <button>Comprar</button>
                  <button title='Adicionar ao Carrinho'><img src={carro} alt="Carrinho de compras" /></button>
                </div>
              </div>
          </div>
      <Footer />
    </>
  );
}

export default ProductDescription;
