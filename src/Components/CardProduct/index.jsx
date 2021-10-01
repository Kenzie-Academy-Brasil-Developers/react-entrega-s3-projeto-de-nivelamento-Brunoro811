import "./style.css";
function CardProduct({
  data: { code, name, description, price, discount },
  handleAddCart,
}) {
  return (
    <ul className="CardProduct">
      <li>{name}</li>
      <li>{description}</li>
      <li>R${price}</li>
      <li>-R${discount}</li>
      <li>
        <button
          onClick={() =>
            handleAddCart({
              code: code,
              name: name,
              description: description,
              price: price,
              discount: discount,
            })
          }
        >
          Adicionar ao carrinho
        </button>
      </li>
    </ul>
  );
}
export default CardProduct;
