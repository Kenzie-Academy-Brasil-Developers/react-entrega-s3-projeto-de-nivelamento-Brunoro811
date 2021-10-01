import "./style.css";
function CardCart({ code, name, price, handleRemovePRoduct }) {
  return (
    <ul className="CardCart">
      <li>{name}</li>
      <li>R${price.toString().replace(".", ",")}</li>
      <li>
        <button onClick={() => handleRemovePRoduct(code)} className="Close">
          x
        </button>
      </li>
    </ul>
  );
}
export default CardCart;
