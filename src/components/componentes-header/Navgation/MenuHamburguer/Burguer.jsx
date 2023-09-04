import "./Burguer.scss";

const Burguer = ({ burguer, abreBurguer }) => {
  return (
    <>
      <div
        onClick={() => abreBurguer()}
        className={burguer ? "Burguer active" : "Burguer"}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};

export default Burguer;
