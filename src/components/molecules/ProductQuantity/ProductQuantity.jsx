const ProductQuantity = ({ cantidad, setCantidad }) => {
  return (
    <div className="cantidad-container">
      <label htmlFor="cantidad">Cantidad</label>

      <select
        id="cantidad"
        className="select-cantidad"
        value={cantidad}
        onChange={(e) => setCantidad(Number(e.target.value))}
      >
        {[1, 2, 3].map((numero) => (
          <option key={numero} value={numero}>
            {numero}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductQuantity;
