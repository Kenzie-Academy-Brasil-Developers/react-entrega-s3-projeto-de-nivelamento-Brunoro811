import "./style.css";
import CardProduct from "../CardProduct";
function AllProducts({ products }) {
  return (
    <div className="AllProducts">
      {products[0] &&
        products.map((element, indice) => (
          <CardProduct key={indice} data={element} />
        ))}
    </div>
  );
}
export default AllProducts;
