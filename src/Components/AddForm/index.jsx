import "./style.css";
function AddForm({
  id,
  setId,
  name,
  setName,
  description,
  setDescription,
  price,
  setPrice,
  discount,
  setDiscount,
  handleCadastro,
}) {
  return (
    <div className="AddForm">
      <h3>Cadastrar Produto</h3>
      <input
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="id *Somente números"
        type="text"
      />
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome"
        type="text"
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descrição"
        type="text"
      />
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Preço"
        type="text"
      />
      <input
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
        placeholder="Desconto"
        type="text"
      />
      <br />
      <button onClick={handleCadastro}>add</button>
    </div>
  );
}
export default AddForm;
