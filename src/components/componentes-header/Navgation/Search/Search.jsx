import "./Search.scss";

const Search = ({ burguer, pesquisa, search, modal }) => {
  const recebeTexto = (e) => {
    pesquisa(e.target.value);
    if (e.target.value === "") {
      modal(false);
    } else {
      modal(true);
    }
  }
  return (
    <div className={burguer ? "Search active" : "Search"}>
      <input
        onChange={(e) => recebeTexto(e)}
        value={search}
        type="search"
        placeholder="Pesquisar Produto"
      />
      <a href={"#!"}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </a>
    </div>
  );
};

export default Search;
