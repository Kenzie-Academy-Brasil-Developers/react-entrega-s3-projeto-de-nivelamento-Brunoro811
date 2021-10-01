import "./style.css";
function CardProduct({ data: { name, description, price, discount } }) {
  return (
    <ul className="CardProduct">
      <li>{name}</li>
      <li>{description}</li>
      <li>R${price}</li>
      <li>-R${discount}</li>
    </ul>
  );
}
export default CardProduct;
