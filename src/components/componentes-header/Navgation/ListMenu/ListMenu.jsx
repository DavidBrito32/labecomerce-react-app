import "./ListMenu.scss";
import car from "../../../../assets-img/icons/carrinho de compras.svg"


const ListMenu = ({ burguer, carrinho, armazenaCarro }) => {
  return (
    <div>
      <ul className={burguer ? "ListMenu active" : "ListMenu"}>
        <li>
          <a onClick={carrinho} href={"#!"}><img src={car} alt="" /></a>
          {armazenaCarro.length > 0 ? <span className="contadorCart">
            {armazenaCarro.length}
          </span> : ""}
        </li>
      </ul>
    </div>
  );
};

export default ListMenu;
