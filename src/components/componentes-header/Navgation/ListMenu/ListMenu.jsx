import "./ListMenu.scss";
import car from "../../../../assets-img/icons/carrinho de compras.svg"


const ListMenu = ({ burguer, carrinho }) => {
  return (
    <div>
      <ul className={burguer ? "ListMenu active" : "ListMenu"}>
        <li>
          <a onClick={carrinho} href={"#!"}><img src={car} alt="" /></a>
        </li>
      </ul>
    </div>
  );
};

export default ListMenu;
