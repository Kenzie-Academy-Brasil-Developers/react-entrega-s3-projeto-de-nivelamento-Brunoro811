import "./style.css";
import CardProduct from "../CardProduct";
function AllProducts({ products, handleAddCart }) {
  return (
    <div className="AllProducts">
      <h1>Lista de produtos</h1>
      {products[0] &&
        products.map((element, indice) => (
          <CardProduct
            key={indice}
            data={element}
            handleAddCart={handleAddCart}
          />
        ))}
    </div>
  );
}
export default AllProducts;
