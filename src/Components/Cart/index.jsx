import CardCart from "../CardCart";
import { useEffect, useState } from "react";
import "./style.css";
function Cart({ cart = false, handleRemovePRoduct }) {
  const [total, setTotal] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  useEffect(() => {
    if (cart) {
      setTotal(
        cart
          .reduce((acc, value) => acc + value.price, 0)
          .toFixed(2)
          .replace(".", ",")
      );
      setTotalDiscount(
        cart
          .reduce((acc, value) => acc + value.discount, 0)
          .toFixed(2)
          .replace(".", ",")
      );
    }
  }, [cart]);
  return (
    <div className="Cart">
      <h3>Cart</h3>
      {cart &&
        cart.map((element, indice) => (
          <CardCart
            key={indice}
            code={indice}
            name={element.name}
            price={element.price}
            handleRemovePRoduct={handleRemovePRoduct}
          />
        ))}
      <p>Desconto - R${totalDiscount}</p>
      <p>Total R${total}</p>
    </div>
  );
}
export default Cart;
