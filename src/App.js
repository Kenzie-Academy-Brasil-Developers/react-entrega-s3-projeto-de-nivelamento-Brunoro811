import "./App.css";
import AllProducts from "./Components/AllProducts";
import AddForm from "./Components/AddForm";
import { useState } from "react";
import Cart from "./Components/Cart";

function App() {
  const [products, setProducts] = useState([
    {
      code: 0,
      name: "Smart TV Led 50 Semp",
      description:
        "SK8300 4K HDR Android Wi-Fi 3 HDMI 2 USB Controle Remoto com atalhos Chromecast Integrado",
      price: 2299.99,
      discount: 190.99,
    },
    {
      code: 1,
      name: "Smartphone Samsung Galaxy A72 128GB",
      description:
        "4G Wi-Fi Tela 6.7 Dual Chip 6GB RAM Câmera Quádrupla + Selfie 32MP - Preto",
      price: 1988.4,
      discount: 87.89,
    },
    {
      code: 2,
      name: "Smartwatch Samsung Galaxy Watch Active",
      description:
        "4O Galaxy Watch Active é o smartwatch ideal para quem tem um estilo de vida ativo e saudável. Ele é leve, confortável e monitora diariamente suas atividades físicas, e os comportamentos de nível de stress e sono",
      price: 678.6,
      discount: 110.19,
    },
  ]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [cart, setCart] = useState([]);
  const [isCart, setIsCart] = useState(false);
  const handleCadastro = () => {
    if (name !== "" && description !== "" && price !== 0 && id !== 0) {
      const data = {
        code: Number(id),
        name: name,
        description: description,
        price: Number(price),
        discount: Number(discount),
      };
      if (data.name !== "") {
        setProducts([...products, data]);
      }
    }
  };
  const handleAddCart = (data) => {
    setCart([...cart, data]);
  };
  const handleRemovePRoduct = (code) => {
    console.log(code);
    console.log(cart.filter((element, indice) => indice !== code));
    setCart(cart.filter((element, indice) => indice !== code));
  };
  return (
    <div className="App App-header">
      <div>
        <AddForm
          id={id}
          setId={setId}
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
          price={price}
          setPrice={setPrice}
          discount={discount}
          setDiscount={setDiscount}
          handleCadastro={handleCadastro}
        />
        <Cart cart={cart} handleRemovePRoduct={handleRemovePRoduct} />
      </div>
      <div>
        <AllProducts products={products} handleAddCart={handleAddCart} />
      </div>
    </div>
  );
}

export default App;
