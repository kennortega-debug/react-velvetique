const ProductPrice = ({ precio }) => {
  return (
    <span className="precio">${Number(precio).toLocaleString("es-CL")}</span>
  );
};

export default ProductPrice;
