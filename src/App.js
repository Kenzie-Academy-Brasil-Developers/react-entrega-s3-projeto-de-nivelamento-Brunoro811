import "./App.css";
import AllProducts from "./Components/AllProducts";
import AddForm from "./Components/AddForm";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    {
      code: 1,
      name: "Smart TV Led 50 Semp",
      description:
        "SK8300 4K HDR Android Wi-Fi 3 HDMI 2 USB Controle Remoto com atalhos Chromecast Integrado",
      price: 2299.99,
      discount: 190.99,
    },
    {
      code: 2,
      name: "Smartphone Samsung Galaxy A72 128GB",
      description:
        "4G Wi-Fi Tela 6.7 Dual Chip 6GB RAM Câmera Quádrupla + Selfie 32MP - Preto",
      price: 1988.4,
      discount: 87.89,
    },
    {
      code: 3,
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
  const handleCadastro = () => {
    if (name !== "" && description !== "" && price !== 0) {
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
  return (
    <div className="App App-header">
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
      <AllProducts products={products} />
    </div>
  );
}

export default App;
